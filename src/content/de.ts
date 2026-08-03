import type { Content } from "./types";

/** TEKNO KLIMA — Deutsche Inhalte (Südtirol). */
export const de: Content = {
  site: {
    name: "Tekno Klima",
    legalName: "Tekno Klima S.n.c. di Akshija Ahmed & C.",
    whatsappNumber: "393464205357",
    payoffPrimary: "Wir geben deinem Komfort Energie",
    payoffSecondary: "Zuverlässigkeit, die du jeden Tag atmest.",
    phone: "346 420 5357",
    phoneHref: "tel:+393464205357",
    email: "info@teknoklima.bz.it",
    emailHref: "mailto:info@teknoklima.bz.it",
    address: "Drususallee 107, 39100 Bozen (BZ)",
    instagram: "@teknoklima.bz.it",
    instagramHref: "https://www.instagram.com/teknoklima.bz.it",
    vat: "MwSt.-Nr. 03281740211",
    vatNumber: "03281740211",
    rea: "BZ-247012",
    pec: "teknoklimasnc@pec.it",
    city: "Bozen",
    region: "Südtirol",
  },

  a11y: {
    skipToContent: "Zum Inhalt springen",
    homeLink: "Tekno Klima — Startseite",
    mainNav: "Hauptnavigation",
    mobileNav: "Mobile Navigation",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    langSwitcher: "Sprache wählen",
    breadcrumb: "Navigationspfad",
  },

  faq: {
    label: "Häufige Fragen",
    title: { pre: "Die Fragen, die uns ", highlight: "am häufigsten" , post: " gestellt werden" },
    items: [
      {
        q: "Was kostet die Installation einer Klimaanlage in Bozen?",
        a: "Die Kosten hängen von der Art der Anlage, der Anzahl der Geräte und den Gegebenheiten der Immobilie ab. Genau deshalb sind Besichtigung und Angebot kostenlos und unverbindlich: Wir sehen uns die Räume an, prüfen die passende Lösung und erstellen ein klares Angebot ohne versteckte Kosten.",
      },
      {
        q: "In welchen Gebieten sind Sie tätig?",
        a: "Wir arbeiten in Bozen und in ganz Südtirol, für Wohnungen, Büros und Geschäfte.",
      },
      {
        q: "Was ist der Unterschied zwischen Split, Multisplit und Kanalgerät?",
        a: "Ein Splitgerät versorgt einen einzigen Raum mit einer Inneneinheit. Ein Multisplit verbindet mehrere Inneneinheiten mit einer einzigen Außeneinheit und ist die übliche Wahl, um mehrere Räume zu klimatisieren. Eine Kanalanlage verteilt die Luft über Kanäle in der Zwischendecke: Sichtbar sind nur die Gitter, daher ist sie die beste Lösung, wenn die Optik zählt.",
      },
      {
        q: "Sind Sie für den Umgang mit Kältemitteln zertifiziert?",
        a: "Ja. Wir verfügen über die F-Gas-Zertifizierung, die für Installation und Wartung von Anlagen mit fluorierten Gasen gesetzlich vorgeschrieben ist. Zudem sind wir offizielles Servicezentrum von Mitsubishi Heavy Industries.",
      },
      {
        q: "Wie oft muss eine Klimaanlage gewartet werden?",
        a: "In der Regel wird eine Wartung pro Jahr empfohlen, am besten vor der Hauptnutzungszeit. Eine regelmäßige Reinigung von Filtern und Wärmetauscher hält die Luft gesund, senkt den Verbrauch und verlängert die Lebensdauer der Anlage.",
      },
      {
        q: "Betreuen Sie auch Anlagen, die von anderen installiert wurden?",
        a: "Ja, wir übernehmen Wartung, Reinigung, Desinfektion und Reparatur auch an Anlagen, die nicht von uns installiert wurden. Nennen Sie uns Marke und Modell, und wir sagen Ihnen, wie wir helfen können.",
      },
      {
        q: "Ist die Besichtigung wirklich kostenlos?",
        a: "Ja. Besichtigung, Beratung und Angebot sind kostenlos und unverbindlich, in Bozen und in ganz Südtirol.",
      },
    ],
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Klimaanlagen", href: "/climatizzazione" },
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
    label: "Klimaanlagen — Bozen / Südtirol",
    line1: "Wir geben Energie",
    line2Pre: "deinem ",
    line2Highlight: "Komfort",
    lead: "Zuverlässigkeit, die du jeden Tag atmest. Klimaanlagen für Wohnungen, Büros und Geschäfte in Bozen und ganz Südtirol. Offizielles Servicezentrum von Mitsubishi Heavy Industries.",
    ctaServices: "Unsere Leistung",
    scroll: "Scroll",
  },

  servicesSection: {
    label: "Was wir machen",
    title: { pre: "Ein Spezialgebiet, ein Standard: ", highlight: "gut gemacht", post: "." },
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
        subtitle: "Offizielles Servicezentrum",
        text: "Wir sind offizielles Servicezentrum von Mitsubishi Heavy Industries: Kompetenz, direkt vom Hersteller zertifiziert.",
      },
      {
        title: "F-Gas-Zertifizierung",
        subtitle: "Umgang mit fluorierten Gasen",
        text: "F-Gas-Befähigung für den Umgang mit fluorierten Gasen: normgerechte, sichere und umweltschonende Eingriffe.",
      },
    ],
  },

  reviews: {
    label: "Bewertungen",
    title: { pre: "Das sagen unsere ", highlight: "Kunden" },
    source: "Bewertung auf Google",
    ratingAria: "5 von 5 Sternen",
    items: [
      {
        name: "Viviana Di Vita",
        date: "vor 5 Stunden",
        text: "Installation der Klimaanlage in Rekordzeit, sogar mitten im Sommer. Perfekte und schnelle Arbeit. Sehr zu empfehlen!",
      },
      {
        name: "Emanuele Iachelli",
        date: "vor 2 Wochen",
        text: "Nach mehreren schlechten Erfahrungen haben sie mein Problem gelöst. Ein kompetentes, ehrliches und transparentes Team. Schwer, Besseres zu finden.",
      },
      {
        name: "Riccardo Petti",
        date: "vor 3 Wochen",
        text: "Super schnell und professionell. Faire Preise.",
      },
      {
        name: "Alessandro Randon",
        date: "vor 2 Monaten",
        text: "Medi von Tekno Klima ist ein Profi, wie es nur wenige gibt. Pünktlich bei der Besichtigung, schnell beim Angebot, sehr professionell bei der Arbeit. Bestes Preis-Leistungs-Verhältnis in Bozen.",
      },
      {
        name: "Genert Olldashi",
        date: "vor 10 Monaten",
        text: "Ich hatte das Vergnügen, mit Medi von Tekno Klima zusammenzuarbeiten, und kann ohne zu zögern sagen, dass er äußerst kompetent, zuverlässig und professionell ist.",
      },
    ],
  },

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
      "Tekno Klima entstand aus Leidenschaft und Erfahrung im Bereich der Klimatechnik — mit dem Ziel, zuverlässige und moderne Lösungen anzubieten.",
      "Wir sind ein junges, dynamisches Unternehmen mit solidem technischem Know-how und konstantem Qualitätsanspruch. Wir arbeiten hauptsächlich in Bozen und ganz Südtirol: Planung, Installation, Wartung und Desinfektion von Klimaanlagen, mit laufendem Service.",
      "Als offizielles Servicezentrum von Mitsubishi Heavy Industries begleiten wir jedes Projekt von der ersten Beratung bis zum Service nach dem Kauf — denn Komfort ist kein Moment: Er ist jeden Tag.",
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
      { key: "split", label: "Split & Multisplit" },
      { key: "canalizzato", label: "Kanalgeräte" },
      { key: "manutenzione", label: "Wartung" },
    ],
    items: [
      { id: 1, title: "Multisplit-Installation — Wohnung", categoryKey: "split", placeholder: { from: "#1fa8dc", to: "#0b1f33" } },
      { id: 2, title: "Kanalanlage — Büro", categoryKey: "canalizzato", placeholder: { from: "#0e7bb8", to: "#10293f" } },
      { id: 5, title: "Split-Gerät — Bozen", categoryKey: "split", placeholder: { from: "#1fa8dc", to: "#0e7bb8" } },
      { id: 8, title: "Anlagendesinfektion — Restaurant", categoryKey: "manutenzione", placeholder: { from: "#0e7bb8", to: "#0b1f33" } },
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
    companyLabel: "Firmenname",
    vatLabel: "MwSt.-Nr.",
    reaLabel: "REA",
    whatsapp: {
      label: "Der schnellste Weg",
      title: "Schreib uns auf WhatsApp",
      text: "Erzähl uns, was du brauchst: Ein Foto der Anlage oder zwei Zeilen genügen, damit wir dir weiterhelfen können. Du bekommst ein klares Angebot, unverbindlich.",
      cta: "Chat öffnen",
      topicsLabel: "Oder starte hier",
      topics: [
        {
          label: "Angebot für eine neue Anlage",
          message:
            "Guten Tag, ich hätte gerne ein Angebot für die Installation einer Klimaanlage.",
        },
        {
          label: "Service oder Reparatur",
          message:
            "Guten Tag, ich brauche Unterstützung bei einer bereits installierten Klimaanlage.",
        },
        {
          label: "Wartung und Desinfektion",
          message:
            "Guten Tag, ich hätte gerne Informationen zur Wartung und Desinfektion meiner Anlage.",
        },
      ],
      note: "Schreib uns jederzeit: Wir antworten während der Arbeitszeiten, meist noch am selben Tag.",
      altLabel: "Lieber ein anderer Weg?",
      privacyNote:
        "Wenn du uns schreibst, werden deine Angaben ausschließlich zur Beantwortung deiner Anfrage verwendet. Einzelheiten in der",
    },
    mapsEmbed: "https://www.google.com/maps?q=Viale+Druso+107,+39100+Bolzano+BZ&output=embed",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=Viale+Druso+107+39100+Bolzano",
    map: {
      title: "Wo Sie uns finden",
      notice:
        "Die Karte wird von Google Maps bereitgestellt. Mit dem Laden erklären Sie sich damit einverstanden, dass Ihre IP-Adresse an Google übermittelt wird und Google eigene Cookies setzen kann.",
      load: "Karte laden",
      openExternal: "In Google Maps öffnen",
      frameTitle: "Karte des Firmensitzes von Tekno Klima",
    },
  },

  footer: {
    ctaLabel: "Kostenloses Angebot",
    ctaTitle: "Wir geben deinem Komfort Energie.",
    ctaTitleMuted: "Reden wir darüber.",
    blurb:
      "Zuverlässigkeit, die du jeden Tag atmest. Klimaanlagen in Bozen und ganz Südtirol. Offizielles Servicezentrum von Mitsubishi Heavy Industries.",
    exploreLabel: "Entdecken",
    contactsLabel: "Kontakt",
  },

  notFound: {
    label: "Fehler 404",
    title: "Diese Seite gibt es nicht",
    text: "Die aufgerufene Adresse entspricht keiner Seite dieser Website. Möglicherweise wurde sie verschoben oder falsch eingegeben.",
    cta: "Zurück zur Startseite",
  },

  preloaderTagline: "Wir geben deinem Komfort Energie",

  /* Vedi la nota in it.ts: title sotto i ~45 caratteri, description sotto i 160. */
  meta: {
    home: {
      title: "Tekno Klima — Klimaanlagen in Bozen",
      description:
        "Installation und Service von Klimaanlagen in Bozen und Südtirol. Offizielles Mitsubishi-Heavy-Industries-Servicezentrum, F-Gas-zertifiziert.",
    },
    climatizzazione: {
      title: "Klimaanlagen-Installation in Bozen",
      description:
        "Split, Multisplit und Kanalgeräte in Bozen. Kostenlose Besichtigung und Angebot, F-Gas-zertifizierte Techniker, schneller Service in Südtirol.",
    },
    galleria: {
      title: "Galerie: Anlagen in Bozen",
      description:
        "Unsere Arbeiten: Klimaanlagen, realisiert in Bozen und Südtirol von Tekno Klima.",
    },
    chiSiamo: {
      title: "Über uns: Klimaanlagen in Bozen",
      description:
        "Unternehmen aus Bozen, spezialisiert auf Klimaanlagen und offizielles Mitsubishi-Servicezentrum. Integrität, Transparenz, Energieeffizienz.",
    },
    contatti: {
      title: "Kontakt und Angebote in Bozen",
      description:
        "Kontaktiere Tekno Klima in Bozen: kostenlose Angebote und Besichtigungen für Klimaanlagen. Drususallee 107, Tel. 346 420 5357.",
    },
  },
};
