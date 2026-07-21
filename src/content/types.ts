/**
 * TEKNO KLIMA — Tipi condivisi dei dizionari contenuti.
 * Ogni lingua (it/de/en) implementa `Content` con la stessa shape.
 */

export type Locale = "it" | "de" | "en";

/** Titolo con parola evidenziata a colore: pre <span>highlight</span> post */
export type Highlight = {
  pre?: string;
  highlight?: string;
  post?: string;
};

export type ServiceContent = {
  /** Slug URL (uguale in tutte le lingue, senza prefisso locale) */
  slug: string;
  num: string;
  title: string;
  short: string;
  heroTitle: string;
  heroText: string;
  features: { title: string; text: string }[];
  process: { title: string; text: string }[];
};

export type GalleryCategory = { key: string; label: string };

export type GalleryItem = {
  id: number;
  title: string;
  categoryKey: string;
  /** [PLACEHOLDER] — sostituire con foto reali dei lavori */
  placeholder: { from: string; to: string };
};

export type PageMeta = { title: string; description: string };

export type Content = {
  site: {
    name: string;
    payoffPrimary: string;
    payoffSecondary: string;
    phone: string;
    phoneHref: string;
    email: string;
    emailHref: string;
    address: string;
    instagram: string;
    instagramHref: string;
    vat: string;
    city: string;
    region: string;
  };
  /** href senza prefisso locale — prefissato nei componenti */
  nav: { label: string; href: string }[];
  cta: { quote: string; call: string; discover: string };

  hero: {
    label: string;
    line1: string;
    line2Pre: string;
    line2Highlight: string;
    lead: string;
    ctaServices: string;
    scroll: string;
  };

  servicesSection: { label: string; title: Highlight };
  services: ServiceContent[];

  servicePage: {
    includesLabel: string;
    includesTitle: Highlight;
    processLabel: string;
    processTitle: string;
    ctaLabel: string;
    ctaTitle: string;
    ctaText: string;
  };

  whyUs: {
    label: string;
    title: Highlight;
    about: string;
    values: string[];
    strengths: { title: string; text: string }[];
  };

  certifications: {
    label: string;
    title: Highlight;
    items: { title: string; subtitle: string; text: string }[];
  };

  /** [DA CONFERMARE] — numeri placeholder da validare col cliente */
  stats: { value: number; suffix: string; label: string }[];

  contactStrip: {
    label: string;
    title: Highlight;
    text: string;
    labels: { phone: string; email: string; address: string };
  };

  about: {
    heroLabel: string;
    heroTitle: string;
    story: string[];
    whereLabel: string;
    whereTitle: string;
    whereText: string;
    valuesLabel: string;
    valuesTitle: string;
    values: { title: string; text: string }[];
  };

  gallery: {
    heroLabel: string;
    heroTitle: Highlight;
    heroText: string;
    filterLabel: string;
    filterAll: string;
    categories: GalleryCategory[];
    items: GalleryItem[];
    open: string;
    close: string;
  };

  contact: {
    heroLabel: string;
    heroTitle: string;
    heroText: string;
    dataLabel: string;
    form: {
      aria: string;
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
      privacy: string;
      success: string;
      subjectPrefix: string;
    };
    mapsEmbed: string;
    mapsLink: string;
  };

  footer: {
    ctaLabel: string;
    ctaTitle: string;
    ctaTitleMuted: string;
    blurb: string;
    exploreLabel: string;
    contactsLabel: string;
  };

  preloaderTagline: string;

  meta: {
    home: PageMeta;
    climatizzazione: PageMeta;
    impiantiElettrici: PageMeta;
    illuminazione: PageMeta;
    galleria: PageMeta;
    chiSiamo: PageMeta;
    contatti: PageMeta;
  };
};
