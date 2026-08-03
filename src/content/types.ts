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
    /** Ragione sociale completa (dati camerali) */
    legalName: string;
    /**
     * Numero WhatsApp in formato internazionale senza "+" né spazi, come
     * richiesto da wa.me (es. "393464205357").
     */
    whatsappNumber: string;
    payoffPrimary: string;
    payoffSecondary: string;
    phone: string;
    phoneHref: string;
    email: string;
    emailHref: string;
    address: string;
    instagram: string;
    instagramHref: string;
    /** Etichetta P.IVA localizzata (es. "P.IVA 03281740211") */
    vat: string;
    /** Solo il numero di partita IVA, senza etichetta */
    vatNumber: string;
    /**
     * Iscrizione al Registro Imprese / REA (art. 2250 c.c.), es. "REA BZ-123456".
     * Opzionale finché il dato camerale non è confermato: se assente non viene
     * reso, così il footer non mostra mai un segnaposto.
     */
    rea?: string;
    /** Indirizzo PEC, se disponibile. Opzionale come `rea`. */
    pec?: string;
    city: string;
    region: string;
  };
  /**
   * Stringhe destinate alle tecnologie assistive. Erano hardcoded in italiano
   * nei componenti: su /de e /en uno screen reader leggeva la lingua sbagliata.
   */
  a11y: {
    skipToContent: string;
    homeLink: string;
    mainNav: string;
    mobileNav: string;
    openMenu: string;
    closeMenu: string;
    langSwitcher: string;
    breadcrumb: string;
  };

  /**
   * FAQ della pagina servizio. Doppio scopo: rispondono alle domande che i
   * clienti fanno davvero al telefono e alimentano il markup `FAQPage`,
   * l'unico rich result ancora espanso da Google per questo tipo di sito.
   *
   * Le risposte non introducono impegni nuovi: riformulano solo quanto già
   * dichiarato altrove nel sito (sopralluogo gratuito, certificazioni,
   * zona servita, tipi di impianto).
   */
  faq: {
    label: string;
    title: Highlight;
    items: { q: string; a: string }[];
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

  /** Recensioni reali Google — 5 stelle. */
  reviews: {
    label: string;
    title: Highlight;
    /** Etichetta fonte, es. "Recensione su Google" */
    source: string;
    /** aria-label del rating, es. "5 stelle su 5" */
    ratingAria: string;
    items: { name: string; date: string; text: string }[];
  };

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
    /** Etichette della scheda dati camerali (erano hardcoded in italiano) */
    companyLabel: string;
    vatLabel: string;
    reaLabel: string;

    /**
     * Canale WhatsApp, che ha sostituito il modulo di contatto.
     *
     * Per un'attività locale converte molto meglio di un form — si scrive dal
     * telefono in pochi secondi e il numero del cliente resta nella chat —
     * e non comporta alcun trattamento di dati da parte del sito: è un
     * semplice link in uscita, esattamente come quello a Instagram.
     */
    whatsapp: {
      label: string;
      title: string;
      text: string;
      /** Etichetta del pulsante principale */
      cta: string;
      /** Introduce le scorciatoie per argomento */
      topicsLabel: string;
      /**
       * Scorciatoie: ognuna apre WhatsApp con un messaggio già scritto, così
       * il cliente non deve pensare a come iniziare.
       */
      topics: { label: string; message: string }[];
      /** Nota su orari/tempi di risposta */
      note: string;
      /** Introduce i canali alternativi (telefono, email) */
      altLabel: string;
      /**
       * Informativa resa prima che l'utente scriva (art. 13 GDPR). Il link
       * alla privacy policy viene aggiunto in coda dal componente.
       */
      privacyNote: string;
    };
    mapsEmbed: string;
    mapsLink: string;
    /**
     * Mappa a caricamento su richiesta: l'iframe di Google installa cookie di
     * terze parti, quindi non può partire da solo (Linee guida cookie del
     * Garante). Queste stringhe compongono il segnaposto che lo sostituisce.
     */
    map: {
      /** Titolo del segnaposto, es. "Dove siamo" */
      title: string;
      /** Avviso sul trasferimento dati a Google */
      notice: string;
      /** Etichetta del pulsante che carica l'iframe */
      load: string;
      /** Link alternativo che apre Google Maps in una nuova scheda */
      openExternal: string;
      /** Titolo dell'iframe una volta caricato (per screen reader) */
      frameTitle: string;
    };
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

  notFound: { label: string; title: string; text: string; cta: string };

  meta: {
    home: PageMeta;
    climatizzazione: PageMeta;
    galleria: PageMeta;
    chiSiamo: PageMeta;
    contatti: PageMeta;
  };
};
