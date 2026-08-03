import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      /* Pagine di servizio: raggiungibili dal footer, fuori dalle SERP. */
      disallow: ["/it/privacy", "/de/privacy", "/en/privacy", "/it/cookie", "/de/cookie", "/en/cookie"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
