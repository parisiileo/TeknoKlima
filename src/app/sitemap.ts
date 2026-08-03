import type { MetadataRoute } from "next";
import { locales, defaultLocale, getContent } from "@/content";
import { SITE_URL } from "@/lib/seo";

/**
 * Data dell'ultima revisione dei contenuti.
 *
 * Volutamente una costante e non `new Date()`: col valore dinamico ogni
 * deploy dichiarava a Google che TUTTE le pagine erano cambiate, anche dopo
 * una modifica al CSS. Un `lastmod` che mente perde credibilità e Google
 * smette di usarlo per decidere cosa riscansionare. Va aggiornata a mano
 * quando i contenuti cambiano davvero.
 */
const LAST_CONTENT_UPDATE = new Date("2026-08-02");

/**
 * Solo le pagine di contenuto: privacy e cookie policy sono `noindex`, in
 * sitemap darebbero un segnale contraddittorio a Google.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = getContent("it").nav.map((item) => item.href);

  return paths.flatMap((path) => {
    const suffix = path === "/" ? "" : path;
    const languages = {
      ...Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}${suffix}`])),
      "x-default": `${SITE_URL}/${defaultLocale}${suffix}`,
    };

    return locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${suffix}`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
      alternates: { languages },
      /* La card social è l'unica immagine indicizzabile finché la galleria
         usa i segnaposto: quando arrivano le foto reali vanno aggiunte qui. */
      images: [`${SITE_URL}/${locale}/opengraph-image`],
    }));
  });
}
