import type { Content } from "./types";

/** TEKNO KLIMA — Deutsche Inhalte (Südtirol). */
export const de: Content = {
  site: {
    name: "Tekno Klima",
    payoffPrimary: "Wir geben deinem Komfort Energie",
    payoffSecondary: "Zuverlässigkeit, die du jeden Tag atmest.",
    phone: "346 420 5357",
    phoneHref: "tel:+393464205357",
    email: "info@teknoklima.bz.it",
    emailHref: "mailto:info@teknoklima.bz.it",
    address: "Drususallee 107, 39100 Bozen (BZ)",
    instagram: "@teknoklima.bz",
    instagramHref: "https://www.instagram.com/teknoklima.bz",
    vat: "MwSt.-Nr. 00000000000", // [PLACEHOLDER]
    city: "Bozen",
    region: "Südtirol",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Klimaanlagen", href: "/climatizzazione" },
    { label: "Elektroanlagen", href: "/impianti-elettrici" },
    { label: "Beleuchtung", href: "/illuminazione" },
    { label: "Galerie", href: "/galleria" },
    { label: "Über uns", href: "/chi-siamo" },
    { label: "Kontakt", href: "/contatti" },
  ],

  cta: {
    quote: "Angebot anfordern",
    call: "Ruf uns an",
    discover: "Mehr erfahren",
  },

  hero: {
    label: "Technische Anlagen — Bozen / Südtirol",
    line1: "Wir geben Energie",
    line2Pre: "deinem ",
    line2Highlight: "Komfort",
    lead: "Zuverlässigkeit, die du jeden Tag atmest. Klimaanlagen, Elektroanlagen und Beleuchtung in Bozen und ganz Südtirol.",
    ctaServices: "Unsere Leistungen",
    scroll: "Scroll",
  },

  servicesSection: {
    label: "Was wir machen",
    title: { pre: "Drei Spezialgebiete, ein Standard: ", highlight: "gut gemacht", post: "." },
  },

  services: [
    {
      slug: "climatizzazione",
      num: "01",
      title: "Klimaanlagen",
      short:
        "Planung und Installation von Anlagen für Wohnungen, Büros und Geschäfte. Thermischer Komfort und Energieeffizienz.",
      heroTitle: "Perfekte Luft, zu jeder Jahreszeit",
      heroText:
        "Wir planen und installieren Klimaanlagen für Wohnungen, Büros und Geschäftsräume. Modernste Technologien für thermischen Komfort, Energieeffizienz und Umweltschutz.",
      features: [
        {
          title: "Split- und Multisplit-Systeme",
          text: "Maßgeschneiderte Lösungen für jeden Raum, vom einzelnen Zimmer bis zur ganzen Wohnung — leise und hocheffizient.",
        },
        {
          title: "Kanalgeräte",
          text: "Unsichtbare, gleichmäßige Klimatisierung, integriert in die Zwischendecke: voller Komfort ohne optische Beeinträchtigung.",
        },
        {
          title: "Reinigung und Desinfektion",
          text: "Regelmäßige Wartung, Reinigung und Desinfektion der Anlagen für gesunde Luft und volle Leistung.",
        },
        {
          title: "Service nach der Installation",
          text: "Wir sind auch danach für dich da: schneller technischer Service in Bozen und Umgebung, pünktlich und zuverlässig.",
        },
      ],
      process: [
        { title: "Kostenlose Besichtigung", text: "Wir analysieren Räume und Bedürfnisse — unverbindlich." },
        { title: "Maßgeschneidertes Projekt", text: "Wir dimensionieren die ideale Anlage für Komfort und Effizienz." },
        { title: "Zertifizierte Installation", text: "Erfahrene, F-Gas-zertifizierte Techniker, saubere und pünktliche Arbeit." },
        { title: "Laufender Service", text: "Wartung, Desinfektion und Support nach dem Kauf." },
      ],
    },
    {
      slug: "impianti-elettrici",
      num: "02",
      title: "Elektroanlagen",
      short: "Zivile und industrielle Elektroanlagen — sicher und innovativ, für Zuhause und Betriebe.",
      heroTitle: "Sichere Energie, für Zuhause und Betrieb",
      heroText:
        "Wir realisieren zivile und industrielle Elektroanlagen — sicher und innovativ, für Wohnungen und Unternehmen. Jedes Projekt begleiten wir von der ersten Beratung bis zum Service nach dem Kauf.",
      features: [
        {
          title: "Zivile Anlagen",
          text: "Elektroanlagen für Wohnungen: Sicherheit, Funktionalität und vorbereitet für die Technologien von morgen.",
        },
        {
          title: "Industrielle Anlagen",
          text: "Lösungen für Unternehmen und Produktionsbetriebe, ausgelegt auf Zuverlässigkeit und Betriebskontinuität.",
        },
        {
          title: "Sicherheit zuerst",
          text: "Normgerechte Ausführung mit zertifizierten Materialien und sorgfältiger Prüfung jedes Eingriffs.",
        },
        {
          title: "Kostenlose Beratung und Besichtigung",
          text: "Wir finden gemeinsam die beste Lösung — mit einem klaren, transparenten Angebot.",
        },
      ],
      process: [
        { title: "Bedarfsanalyse", text: "Kostenlose Besichtigung und offenes Ohr für deine Anforderungen." },
        { title: "Planung", text: "Sicheres, effizientes und erweiterbares Anlagenkonzept." },
        { title: "Ausführung", text: "Fachgerechte Installation, schnell und pünktlich." },
        { title: "Prüfung und Service", text: "Endabnahme und laufender Support." },
      ],
    },
    {
      slug: "illuminazione",
      num: "03",
      title: "Beleuchtung",
      short: "Individuelle Beleuchtungslösungen für jeden Raum.",
      heroTitle: "Das richtige Licht, für jeden Raum",
      heroText:
        "Wir planen individuelle Beleuchtungslösungen für jeden Raum: funktionales, stimmungsvolles und effizientes Licht, das deine Räume aufwertet.",
      features: [
        {
          title: "Licht nach Maß",
          text: "Jeder Raum hat andere Bedürfnisse: Wir entwickeln die ideale Lichtlösung für Wohnungen, Büros und Geschäfte.",
        },
        {
          title: "Energieeffizienz",
          text: "LED-Technologie und verbrauchsbewusste Planung: mehr Licht, weniger Verschwendung.",
        },
        {
          title: "Räume aufwerten",
          text: "Licht als Designelement: Akzente, Szenen und Stimmungen, die Räume verwandeln.",
        },
        {
          title: "Integrierte Anlagentechnik",
          text: "Beleuchtung, perfekt integriert in die Elektroanlage — für ein sauberes, zuverlässiges Ergebnis.",
        },
      ],
      process: [
        { title: "Besichtigung und Zuhören", text: "Wir verstehen, wie du deine Räume lebst und was du betonen möchtest." },
        { title: "Lichtplanung", text: "Auswahl von Leuchten, Farbtemperaturen und Szenarien." },
        { title: "Installation", text: "Präzise, saubere Montage, integriert in die Elektroanlage." },
        { title: "Feinabstimmung", text: "Finale Einstellung von Szenen und Intensität — ganz nach deinem Wunsch." },
      ],
    },
  ],

  servicePage: {
    includesLabel: "Leistungsumfang",
    includesTitle: { pre: "Komplette Lösungen, ", highlight: "nach Maß" },
    processLabel: "So arbeiten wir",
    processTitle: "Von der Beratung bis zum Service",
    ctaLabel: "Kostenloses Angebot",
    ctaTitle: "Sprechen wir über dein Projekt?",
    ctaText:
      "Kostenlose Besichtigung und Beratung in Bozen und ganz Südtirol — mit einem klaren, transparenten Angebot.",
  },

  whyUs: {
    label: "Warum wir",
    title: { pre: "Zuverlässigkeit, die du jeden Tag ", highlight: "atmest" },
    about:
      "Tekno Klima entstand aus Leidenschaft und Erfahrung im Bereich technischer Anlagen. Ein junges, dynamisches Unternehmen mit solidem technischem Know-how und konstantem Qualitätsanspruch: Wir arbeiten in Bozen und ganz Südtirol.",
    values: ["Integrität", "Professionalität", "Zusammenarbeit", "Transparenz", "Energieeffizienz", "Sicherheit"],
    strengths: [
      { title: "Installation von Klimaanlagen", text: "Split-, Multisplit- und Kanalsysteme, fachgerecht installiert." },
      { title: "Reinigung und Desinfektion", text: "Stets effiziente Anlagen und gesunde Luft dank regelmäßiger Wartung." },
      { title: "Schneller technischer Service", text: "Schnelle, pünktliche Einsätze in Bozen und Umgebung." },
      { title: "Kostenlose Besichtigungen", text: "Unverbindliche Beratung und Besichtigung mit transparentem Angebot." },
      { title: "Zertifizierte Techniker", text: "Erfahrenes Team, geschult und mit allen Branchenzertifizierungen." },
      { title: "Von A bis Z", text: "Wir begleiten dich von der ersten Beratung bis zum Service nach dem Kauf." },
    ],
  },

  certifications: {
    label: "Zertifizierungen & Partner",
    title: { pre: "Kompetenz, ", highlight: "zertifiziert" },
    items: [
      {
        title: "Mitsubishi Heavy Industries",
        subtitle: "Autorisiertes Servicezentrum",
        text: "Wir sind autorisiertes Servicezentrum von Mitsubishi Heavy Industries: Kompetenz, direkt vom Hersteller zertifiziert.",
      },
      {
        title: "F-Gas-Zertifizierung",
        subtitle: "Umgang mit fluorierten Gasen",
        text: "F-Gas-Befähigung für den Umgang mit fluorierten Gasen: normgerechte, sichere und umweltschonende Eingriffe.",
      },
    ],
  },

  stats: [
    { value: 250, suffix: "+", label: "Installierte Anlagen" },
    { value: 98, suffix: "%", label: "Zufriedene Kunden" },
    { value: 24, suffix: "h", label: "Durchschnittliche Reaktionszeit" },
    { value: 100, suffix: "%", label: "Kostenlose Besichtigungen" },
  ],

  contactStrip: {
    label: "Kontakt",
    title: { pre: "Besichtigung und Angebot — ", highlight: "kostenlos" },
    text: "Erzähl uns von deinem Projekt: Wir antworten schnell, in Bozen und ganz Südtirol.",
    labels: { phone: "Telefon", email: "E-Mail", address: "Sitz" },
  },

  about: {
    heroLabel: "Über uns",
    heroTitle: "Technische Leidenschaft, täglicher Komfort",
    story: [
      "Tekno Klima entstand aus Leidenschaft und Erfahrung im Bereich technischer Anlagen — mit dem Ziel, zuverlässige und moderne Lösungen anzubieten.",
      "Wir sind ein junges, dynamisches Unternehmen mit solidem technischem Know-how und konstantem Qualitätsanspruch. Wir arbeiten hauptsächlich in Bozen und ganz Südtirol: Klimaanlagen, zivile und industrielle Elektroanlagen, individuelle Beleuchtung und laufender Service.",
      "Wir begleiten jedes Projekt von der ersten Beratung bis zum Service nach dem Kauf — denn Komfort ist kein Moment: Er ist jeden Tag.",
    ],
    whereLabel: "Wo wir arbeiten",
    whereTitle: "Bozen und ganz Südtirol",
    whereText:
      "Sitz in der Drususallee 107, 39100 Bozen (BZ). Schnelle, pünktliche Einsätze, kostenlose Beratung und Besichtigungen.",
    valuesLabel: "Unsere Werte",
    valuesTitle: "Die Werte, die jede unserer Arbeiten leiten",
    values: [
      { title: "Integrität", text: "Wir sagen, was wir tun — und tun, was wir sagen." },
      { title: "Professionalität", text: "Erfahrene, zertifizierte Techniker, laufende Weiterbildung, fachgerechte Arbeit." },
      { title: "Zusammenarbeit", text: "Wir arbeiten mit dir, nicht nur für dich: Zuhören und Dialog in jeder Phase." },
      { title: "Transparenz", text: "Klare Angebote, verlässliche Termine, keine Überraschungen." },
      { title: "Energieeffizienz", text: "Lösungen, die weniger verbrauchen und mehr leisten — für dich und die Umwelt." },
      { title: "Sicherheit", text: "Normgerechte, zertifizierte Anlagen — für die Ruhe derer, die darin leben." },
    ],
  },

  gallery: {
    heroLabel: "Galerie",
    heroTitle: { pre: "Unsere ", highlight: "Arbeiten" },
    heroText: "Eine Auswahl realisierter Anlagen in Bozen und Südtirol.",
    filterLabel: "Nach Kategorie filtern",
    filterAll: "Alle",
    categories: [
      { key: "clima", label: "Klimaanlagen" },
      { key: "elettrico", label: "Elektroanlagen" },
      { key: "luce", label: "Beleuchtung" },
    ],
    items: [
      { id: 1, title: "Multisplit-Installation — Wohnung", categoryKey: "clima", placeholder: { from: "#1fa8dc", to: "#0b1f33" } },
      { id: 2, title: "Kanalanlage — Büro", categoryKey: "clima", placeholder: { from: "#0e7bb8", to: "#10293f" } },
      { id: 3, title: "Schaltschrank — Betrieb", categoryKey: "elettrico", placeholder: { from: "#ff7a3d", to: "#0b1f33" } },
      { id: 4, title: "LED-Beleuchtung — Geschäft", categoryKey: "luce", placeholder: { from: "#e85d1f", to: "#10293f" } },
      { id: 5, title: "Split-Gerät — Bozen", categoryKey: "clima", placeholder: { from: "#1fa8dc", to: "#0e7bb8" } },
      { id: 6, title: "Zivile Anlage — Neubau", categoryKey: "elettrico", placeholder: { from: "#4a6178", to: "#0b1f33" } },
      { id: 7, title: "Akzentlicht — Wohnzimmer", categoryKey: "luce", placeholder: { from: "#ff7a3d", to: "#e85d1f" } },
      { id: 8, title: "Anlagendesinfektion — Restaurant", categoryKey: "clima", placeholder: { from: "#0e7bb8", to: "#0b1f33" } },
      { id: 9, title: "Außenbeleuchtung — Terrasse", categoryKey: "luce", placeholder: { from: "#10293f", to: "#1fa8dc" } },
    ],
    open: "Öffnen",
    close: "Schließen",
  },

  contact: {
    heroLabel: "Kontakt",
    heroTitle: "Sprechen wir über dein Projekt",
    heroText:
      "Kostenlose Beratung und Besichtigungen in Bozen und ganz Südtirol. Schreib uns oder ruf an: Wir antworten schnell.",
    dataLabel: "Kontaktdaten",
    form: {
      aria: "Angebot anfordern",
      name: "Vor- und Nachname",
      email: "E-Mail",
      phone: "Telefon",
      message: "Erzähl uns, was du brauchst",
      submit: "Anfrage senden",
      privacy: "Mit dem Absenden stimmst du der Datenverarbeitung zur Beantwortung deiner Anfrage zu.",
      success: "Anfrage bereit! Dein E-Mail-Programm öffnet sich zum Senden.",
      subjectPrefix: "Angebotsanfrage",
    },
    mapsEmbed: "https://www.google.com/maps?q=Viale+Druso+107,+39100+Bolzano+BZ&output=embed",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=Viale+Druso+107+39100+Bolzano",
  },

  footer: {
    ctaLabel: "Kostenloses Angebot",
    ctaTitle: "Wir geben deinem Komfort Energie.",
    ctaTitleMuted: "Reden wir darüber.",
    blurb:
      "Zuverlässigkeit, die du jeden Tag atmest. Klimaanlagen, Elektroanlagen und Beleuchtung in Bozen und ganz Südtirol.",
    exploreLabel: "Entdecken",
    contactsLabel: "Kontakt",
  },

  preloaderTagline: "Wir geben deinem Komfort Energie",

  meta: {
    home: {
      title: "Tekno Klima — Klimaanlagen und Elektroanlagen in Bozen",
      description:
        "Wir geben deinem Komfort Energie: Klimaanlagen, Elektroanlagen und Beleuchtung in Bozen und Südtirol. Kostenlose Besichtigungen, F-Gas-zertifizierte Techniker.",
    },
    climatizzazione: {
      title: "Klimaanlagen — Installation in Bozen",
      description:
        "Installation von Klimaanlagen in Bozen: Split, Multisplit und Kanalgeräte. Kostenlose Besichtigung, F-Gas-zertifizierte Techniker, schneller Service in Südtirol.",
    },
    impiantiElettrici: {
      title: "Zivile und industrielle Elektroanlagen in Bozen",
      description:
        "Zivile und industrielle Elektroanlagen in Bozen und Südtirol: sicher, innovativ und normgerecht. Kostenlose Beratung und Besichtigung, transparentes Angebot.",
    },
    illuminazione: {
      title: "Individuelle Beleuchtung in Bozen",
      description:
        "Individuelle Beleuchtungslösungen für Zuhause, Büro und Geschäft in Bozen: Lichtplanung, hocheffiziente LED, integrierte Installation.",
    },
    galleria: {
      title: "Galerie — Realisierte Anlagen in Bozen",
      description:
        "Unsere Arbeiten: Klimaanlagen, Elektroanlagen und Beleuchtung, realisiert in Bozen und Südtirol von Tekno Klima.",
    },
    chiSiamo: {
      title: "Über uns — Tekno Klima, technische Anlagen in Bozen",
      description:
        "Tekno Klima: junges, dynamisches Unternehmen aus Bozen, spezialisiert auf Klimaanlagen, Elektroanlagen und Beleuchtung. Integrität, Transparenz, Energieeffizienz.",
    },
    contatti: {
      title: "Kontakt — Angebot anfordern in Bozen",
      description:
        "Kontaktiere Tekno Klima in Bozen: kostenlose Angebote und Besichtigungen für Klimaanlagen, Elektroanlagen und Beleuchtung. Drususallee 107, Tel. 346 420 5357.",
    },
  },
};
