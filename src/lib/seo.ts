import type { Metadata } from "next";
import { locales, defaultLocale, getContent, type Locale, type PageMeta } from "@/content";

/** Dominio di produzione: unica fonte per metadataBase, sitemap e robots. */
export const SITE_URL = "https://www.teknoklima.bz.it";

/** Codici OG per lingua. */
export const OG_LOCALES: Record<Locale, string> = { it: "it_IT", de: "de_DE", en: "en_US" };

/**
 * Token di verifica Google Search Console.
 * [DA COMPLETARE] — si ottiene da Search Console → Proprietà → Tag HTML.
 * Finché è vuoto il meta non viene emesso: meglio niente che un tag fasullo.
 */
const GOOGLE_SITE_VERIFICATION = "";

/**
 * Mappa hreflang per un percorso senza prefisso locale ("/" per la home,
 * "/contatti", ...).
 *
 * Include `x-default`, che Google usa quando nessuna delle lingue dichiarate
 * corrisponde a quella dell'utente: senza, per il resto del mondo la scelta
 * fra le tre varianti resta arbitraria. Punta all'italiano, che è la lingua
 * di default anche nel middleware.
 */
export function languageAlternates(path: string): Record<string, string> {
  const suffix = path === "/" ? "" : path;
  return {
    ...Object.fromEntries(locales.map((l) => [l, `/${l}${suffix}`])),
    "x-default": `/${defaultLocale}${suffix}`,
  };
}

type PageMetaOptions = {
  locale: Locale;
  /** Percorso senza prefisso locale: "/" , "/contatti", ... */
  path: string;
  meta: PageMeta;
  /** True solo per la home: il titolo non passa dal template "%s | ...". */
  absoluteTitle?: boolean;
  /** Pagine di servizio (privacy, cookie): utili all'utente, fuori dalle SERP. */
  noIndex?: boolean;
};

/**
 * Metadati completi di una pagina.
 *
 * Esiste perché `openGraph` NON si eredita per campi: dichiararlo solo nel
 * layout faceva sì che ogni pagina ereditasse `og:title` e `og:description`
 * della home — ogni condivisione di Contatti o Climatizzazione mostrava il
 * titolo sbagliato. Qui titolo, descrizione, canonical, hreflang, OG e
 * Twitter card vengono generati insieme dalla stessa fonte, così non possono
 * più divergere.
 */
export function pageMetadata({
  locale,
  path,
  meta,
  absoluteTitle = false,
  noIndex = false,
}: PageMetaOptions): Metadata {
  const t = getContent(locale);
  const suffix = path === "/" ? "" : path;
  const url = `${SITE_URL}/${locale}${suffix}`;

  return {
    title: absoluteTitle ? { absolute: meta.title } : meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}${suffix}`,
      languages: languageAlternates(path),
    },
    openGraph: {
      type: "website",
      locale: OG_LOCALES[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => OG_LOCALES[l]),
      siteName: t.site.name,
      title: meta.title,
      description: meta.description,
      url,
      /*
       * Immagine dichiarata esplicitamente e non lasciata al file
       * `opengraph-image.tsx`: quel file vale per il segmento che lo contiene
       * e non veniva ereditato dalle pagine annidate, che restavano senza
       * og:image — cioè con una card vuota su WhatsApp e LinkedIn.
       */
      images: [
        {
          url: `/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${t.site.name} — ${t.site.payoffPrimary}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    robots: noIndex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

/** Metadati globali dichiarati una sola volta nel layout. */
export function rootMetadata(locale: Locale): Metadata {
  const t = getContent(locale);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t.meta.home.title,
      /*
       * Suffisso corto: col precedente "| Tekno Klima {città}" i titoli
       * arrivavano a 77 caratteri — Google ne mostra circa 60 — e ripetevano
       * la città tre volte nella stessa riga. La città resta dov'è utile,
       * cioè dentro il titolo della singola pagina.
       */
      template: "%s | Tekno Klima",
    },
    description: t.meta.home.description,
    applicationName: t.site.name,
    authors: [{ name: t.site.legalName }],
    creator: t.site.legalName,
    publisher: t.site.legalName,
    /* Safari trasforma da sé numeri e indirizzi in link, rompendo il layout:
       i contatti sono già marcati a mano dove servono. */
    formatDetection: { telephone: false, address: false, email: false },
    ...(GOOGLE_SITE_VERIFICATION
      ? { verification: { google: GOOGLE_SITE_VERIFICATION } }
      : {}),
  };
}
