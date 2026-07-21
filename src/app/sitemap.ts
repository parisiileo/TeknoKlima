import type { MetadataRoute } from "next";
import { locales, getContent } from "@/content";

const BASE = "https://www.teknoklima.bz.it";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = getContent("it").nav.map((item) => item.href);

  return paths.flatMap((path) =>
    locales.map((locale) => {
      const suffix = path === "/" ? "" : path;
      return {
        url: `${BASE}/${locale}${suffix}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: path === "/" ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${BASE}/${l}${suffix}`])
          ),
        },
      };
    })
  );
}
