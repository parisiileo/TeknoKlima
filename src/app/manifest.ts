import type { MetadataRoute } from "next";
import { getContent } from "@/content";

/**
 * Manifest minimo: il sito non è una PWA, serve solo a dare un nome e
 * un'icona decenti quando viene salvato nella schermata home.
 */
export default function manifest(): MetadataRoute.Manifest {
  const t = getContent("it");

  return {
    name: `${t.site.name} — ${t.site.city}`,
    short_name: t.site.name,
    description: t.meta.home.description,
    start_url: "/",
    display: "browser",
    background_color: "#f4f8fb",
    theme_color: "#0b1f33",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
