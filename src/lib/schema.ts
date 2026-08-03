import { SITE_URL } from "@/lib/seo";
import { getContent, localeHref, type Content, type Locale, type ServiceContent } from "@/content";

/**
 * Dati strutturati schema.org come GRAFO unico invece che come blocchi
 * separati.
 *
 * Il punto non è la quantità di markup, è che le entità si citino a vicenda:
 * ogni pagina è una `WebPage` che dichiara `isPartOf` il `WebSite`, che a sua
 * volta ha come `publisher` l'azienda. Così Google capisce che le pagine
 * parlano tutte della stessa attività, invece di leggere sei schede scollegate
 * — è la differenza fra "markup presente" e "knowledge graph costruito".
 *
 * Gli `@id` sono gli identificatori stabili a cui tutto il resto si aggancia.
 */
export const ID = {
  organization: `${SITE_URL}/#organization`,
  website: `${SITE_URL}/#website`,
  logo: `${SITE_URL}/#logo`,
  page: (url: string) => `${url}#webpage`,
  breadcrumb: (url: string) => `${url}#breadcrumb`,
} as const;

/** URL assoluto di una pagina, dal locale e dal path senza prefisso. */
export function absoluteUrl(locale: Locale, path: string): string {
  return `${SITE_URL}${localeHref(locale, path)}`;
}

/**
 * L'azienda. È l'entità principale del sito: tutto il resto vi rimanda.
 *
 * [DA COMPLETARE] mancano `geo` (coordinate esatte), `openingHoursSpecification`
 * e `priceRange`. Sono dati che Google mostra nella scheda locale, ma
 * inventarli è peggio che ometterli: vanno aggiunti quando confermati.
 *
 * Volutamente ASSENTE `aggregateRating`: le recensioni in home vengono da
 * Google e le linee guida vietano a un'attività di marcare come proprie le
 * recensioni raccolte su piattaforme terze. Marcarle sarebbe markup
 * ingannevole ed è motivo di penalizzazione manuale.
 */
/**
 * Il logo come nodo autonomo del grafo.
 *
 * Dichiarato una volta di primo livello invece che annidato dentro
 * l'azienda: così `logo` e `image` possono entrambi puntarvi per @id senza
 * duplicare la definizione, ed è la forma che i validatori risolvono senza
 * ambiguità.
 */
export function logoSchema(locale: Locale) {
  const t = getContent(locale);

  return {
    "@type": "ImageObject",
    "@id": ID.logo,
    url: `${SITE_URL}/icon.svg`,
    contentUrl: `${SITE_URL}/icon.svg`,
    caption: t.site.name,
    inLanguage: locale,
  };
}

export function organizationSchema(locale: Locale) {
  const t = getContent(locale);

  return {
    "@type": ["HVACBusiness", "LocalBusiness", "Organization"],
    "@id": ID.organization,
    name: t.site.name,
    legalName: t.site.legalName,
    alternateName: "Tekno Klima Bolzano",
    slogan: t.site.payoffPrimary,
    description: t.meta.home.description,
    url: `${SITE_URL}/${locale}`,
    telephone: "+39 346 420 5357",
    email: t.site.email,
    vatID: `IT${t.site.vatNumber}`,
    taxID: t.site.vatNumber,
    logo: { "@id": ID.logo },
    image: { "@id": ID.logo },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Viale Druso 107",
      postalCode: "39100",
      addressLocality: "Bolzano",
      addressRegion: "Trentino-Alto Adige",
      addressCountry: "IT",
    },
    areaServed: [
      { "@type": "City", name: "Bolzano" },
      { "@type": "AdministrativeArea", name: "Alto Adige / Südtirol" },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+39 346 420 5357",
        email: t.site.email,
        availableLanguage: ["Italian", "German", "English"],
        areaServed: "IT",
      },
      {
        "@type": "ContactPoint",
        /* WhatsApp è il canale principale di contatto: dichiararlo esplicita
           a Google che l'attività risponde anche lì. */
        contactType: "customer support",
        url: `https://wa.me/${t.site.whatsappNumber}`,
        telephone: "+39 346 420 5357",
        availableLanguage: ["Italian", "German", "English"],
      },
    ],
    knowsLanguage: ["it", "de", "en"],
    brand: { "@type": "Brand", name: "Mitsubishi Heavy Industries" },
    /* Le certificazioni dichiarate in pagina, in forma leggibile da Google. */
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "Certificazione F-Gas",
        description: "Abilitazione al trattamento dei gas fluorurati",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "Centro Assistenza Ufficiale Mitsubishi Heavy Industries",
      },
    ],
    sameAs: [t.site.instagramHref],
  };
}

/** Il sito come entità, pubblicato dall'azienda. */
export function websiteSchema(locale: Locale) {
  const t = getContent(locale);

  return {
    "@type": "WebSite",
    "@id": ID.website,
    url: `${SITE_URL}/${locale}`,
    name: t.site.name,
    description: t.meta.home.description,
    publisher: { "@id": ID.organization },
    inLanguage: locale,
  };
}

/** Una tappa del percorso di navigazione. */
export type Crumb = { name: string; path: string };

/**
 * Percorso "Home › Pagina corrente". Il nome della pagina viene preso dal
 * menu quando la route c'è (così breadcrumb e navigazione non divergono
 * mai), altrimenti va passato — è il caso di privacy e cookie policy, che
 * nel menu non compaiono.
 */
export function crumbsFor(t: Content, path: string, fallbackName?: string): Crumb[] {
  const home = { name: t.nav[0].label, path: "/" };
  const inNav = t.nav.find((item) => item.href === path);
  const name = inNav?.label ?? fallbackName;
  return name ? [home, { name, path }] : [home];
}

/**
 * BreadcrumbList: è ciò che trasforma "teknoklima.bz.it › ...url..." in
 * "Tekno Klima › Climatizzazione" sotto il titolo nei risultati Google.
 */
export function breadcrumbSchema(locale: Locale, url: string, crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": ID.breadcrumb(url),
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(locale, crumb.path),
    })),
  };
}

/** La pagina corrente, agganciata a sito, azienda e breadcrumb. */
export function webPageSchema(
  locale: Locale,
  url: string,
  meta: { title: string; description: string },
  hasBreadcrumb: boolean
) {
  return {
    "@type": "WebPage",
    "@id": ID.page(url),
    url,
    name: meta.title,
    description: meta.description,
    isPartOf: { "@id": ID.website },
    about: { "@id": ID.organization },
    primaryImageOfPage: { "@id": ID.logo },
    inLanguage: locale,
    ...(hasBreadcrumb && { breadcrumb: { "@id": ID.breadcrumb(url) } }),
  };
}

/** Il servizio offerto, con l'azienda come fornitore. */
export function serviceSchema(locale: Locale, t: Content, service: ServiceContent) {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(locale, `/${service.slug}`)}#service`,
    name: service.title,
    description: service.short,
    serviceType: service.title,
    provider: { "@id": ID.organization },
    areaServed: [
      { "@type": "City", name: "Bolzano" },
      { "@type": "AdministrativeArea", name: "Alto Adige / Südtirol" },
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl(locale, "/contatti"),
      servicePhone: "+39 346 420 5357",
    },
    /* Le voci "cosa comprende" della pagina, come catalogo di prestazioni. */
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: t.servicePage.includesLabel,
      itemListElement: service.features.map((f) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: f.title, description: f.text },
      })),
    },
  };
}

/** FAQ: unico tipo che Google può ancora mostrare espanso in SERP. */
export function faqSchema(url: string, items: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/**
 * Assembla il grafo finale. Un solo `<script>` per pagina con tutte le
 * entità: è la forma che i validatori gestiscono meglio e che evita di
 * ripetere l'azienda per intero in ogni scheda.
 */
export function buildGraph(...entities: object[]) {
  return { "@context": "https://schema.org", "@graph": entities };
}
