import type { Content } from "./types";

/** TEKNO KLIMA — Contenuti italiani (lingua di default). */
export const it: Content = {
  site: {
    name: "Tekno Klima",
    payoffPrimary: "Diamo energia al tuo comfort",
    payoffSecondary: "Affidabilità che respiri ogni giorno.",
    phone: "346 420 5357",
    phoneHref: "tel:+393464205357",
    email: "info@teknoklima.bz.it",
    emailHref: "mailto:info@teknoklima.bz.it",
    address: "Viale Druso 107, 39100 Bolzano (BZ)",
    instagram: "@teknoklima.bz",
    instagramHref: "https://www.instagram.com/teknoklima.bz",
    vat: "P.IVA 00000000000", // [PLACEHOLDER — inserire P.IVA reale]
    city: "Bolzano",
    region: "Alto Adige",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Climatizzazione", href: "/climatizzazione" },
    { label: "Impianti Elettrici", href: "/impianti-elettrici" },
    { label: "Illuminazione", href: "/illuminazione" },
    { label: "Galleria", href: "/galleria" },
    { label: "Chi Siamo", href: "/chi-siamo" },
    { label: "Contatti", href: "/contatti" },
  ],

  cta: {
    quote: "Richiedi un preventivo",
    call: "Chiamaci",
    discover: "Scopri di più",
  },

  hero: {
    label: "Impianti tecnologici — Bolzano / Alto Adige",
    line1: "Diamo energia",
    line2Pre: "al tuo ",
    line2Highlight: "comfort",
    lead: "Affidabilità che respiri ogni giorno. Climatizzazione, impianti elettrici e illuminazione a Bolzano e in tutto l'Alto Adige.",
    ctaServices: "Scopri i servizi",
    scroll: "Scroll",
  },

  servicesSection: {
    label: "Cosa facciamo",
    title: { pre: "Tre specialità, un solo standard: ", highlight: "fatto bene", post: "." },
  },

  services: [
    {
      slug: "climatizzazione",
      num: "01",
      title: "Climatizzazione",
      short:
        "Progettazione e installazione di impianti per abitazioni, uffici e attività commerciali. Comfort termico ed efficienza energetica.",
      heroTitle: "Aria perfetta, in ogni stagione",
      heroText:
        "Progettiamo e installiamo impianti di climatizzazione per abitazioni, uffici e attività commerciali. Tecnologie all'avanguardia per garantire comfort termico, efficienza energetica e rispetto per l'ambiente.",
      features: [
        {
          title: "Sistemi split e multisplit",
          text: "Soluzioni su misura per ogni ambiente, dal singolo locale all'intera abitazione, con unità silenziose e ad alta efficienza.",
        },
        {
          title: "Impianti canalizzati",
          text: "Climatizzazione invisibile e uniforme, integrata nel controsoffitto: comfort totale senza impatto estetico.",
        },
        {
          title: "Pulizia e sanificazione",
          text: "Manutenzione periodica, pulizia e sanificazione degli impianti per aria salubre e prestazioni sempre al massimo.",
        },
        {
          title: "Assistenza post-installazione",
          text: "Ti seguiamo anche dopo: assistenza tecnica rapida a Bolzano e dintorni, con interventi veloci e puntuali.",
        },
      ],
      process: [
        { title: "Sopralluogo gratuito", text: "Analizziamo gli spazi e le tue esigenze, senza impegno." },
        { title: "Progetto su misura", text: "Dimensioniamo l'impianto ideale per comfort ed efficienza." },
        { title: "Installazione certificata", text: "Tecnici esperti e certificati F-Gas, lavori puliti e puntuali." },
        { title: "Assistenza continua", text: "Manutenzione, sanificazione e supporto post-vendita." },
      ],
    },
    {
      slug: "impianti-elettrici",
      num: "02",
      title: "Impianti Elettrici",
      short: "Impianti elettrici civili e industriali, sicuri e innovativi, per abitazioni e aziende.",
      heroTitle: "Energia sicura, per casa e azienda",
      heroText:
        "Realizziamo impianti elettrici civili e industriali, sicuri e innovativi, per abitazioni e aziende. Ogni progetto è seguito dalla consulenza iniziale all'assistenza post-vendita.",
      features: [
        {
          title: "Impianti civili",
          text: "Impianti elettrici per abitazioni: sicurezza, funzionalità e predisposizione per le tecnologie di domani.",
        },
        {
          title: "Impianti industriali",
          text: "Soluzioni per aziende e attività produttive, progettate per affidabilità e continuità di esercizio.",
        },
        {
          title: "Sicurezza prima di tutto",
          text: "Realizzazioni a norma, con materiali certificati e verifiche accurate su ogni intervento.",
        },
        {
          title: "Consulenza e sopralluoghi gratuiti",
          text: "Valutiamo insieme la soluzione migliore, con un preventivo chiaro e trasparente.",
        },
      ],
      process: [
        { title: "Analisi delle esigenze", text: "Sopralluogo gratuito e ascolto delle tue necessità." },
        { title: "Progettazione", text: "Schema d'impianto sicuro, efficiente e ampliabile." },
        { title: "Realizzazione", text: "Installazione a regola d'arte, con interventi veloci e puntuali." },
        { title: "Verifica e assistenza", text: "Collaudo finale e supporto continuo nel tempo." },
      ],
    },
    {
      slug: "illuminazione",
      num: "03",
      title: "Illuminazione",
      short: "Soluzioni di illuminazione personalizzate per ogni ambiente.",
      heroTitle: "La luce giusta, per ogni ambiente",
      heroText:
        "Progettiamo soluzioni di illuminazione personalizzate per ogni ambiente: valorizziamo gli spazi con luce funzionale, scenografica ed efficiente.",
      features: [
        {
          title: "Illuminazione su misura",
          text: "Ogni ambiente ha esigenze diverse: studiamo la soluzione luminosa ideale per abitazioni, uffici e negozi.",
        },
        {
          title: "Efficienza energetica",
          text: "Tecnologia LED e progettazione attenta ai consumi: più luce, meno spreco.",
        },
        {
          title: "Valorizzazione degli spazi",
          text: "La luce come elemento di design: accenti, scenografie e atmosfere che trasformano gli ambienti.",
        },
        {
          title: "Integrazione impiantistica",
          text: "Illuminazione perfettamente integrata con l'impianto elettrico, per un risultato pulito e affidabile.",
        },
      ],
      process: [
        { title: "Sopralluogo e ascolto", text: "Capiamo come vivi gli spazi e cosa vuoi valorizzare." },
        { title: "Progetto illuminotecnico", text: "Studio di corpi luminosi, temperature colore e scenari." },
        { title: "Installazione", text: "Posa precisa e pulita, integrata con l'impianto elettrico." },
        { title: "Messa a punto", text: "Regolazione finale di scenari e intensità, come li vuoi tu." },
      ],
    },
  ],

  servicePage: {
    includesLabel: "Cosa comprende",
    includesTitle: { pre: "Soluzioni complete, ", highlight: "su misura" },
    processLabel: "Come lavoriamo",
    processTitle: "Dalla consulenza all'assistenza",
    ctaLabel: "Preventivo gratuito",
    ctaTitle: "Parliamo del tuo progetto?",
    ctaText:
      "Sopralluogo e consulenza gratuiti a Bolzano e in tutto l'Alto Adige, con preventivo chiaro e trasparente.",
  },

  whyUs: {
    label: "Perché sceglierci",
    title: { pre: "Affidabilità che ", highlight: "respiri", post: " ogni giorno" },
    about:
      "Tekno Klima nasce dalla passione e dall'esperienza nel settore degli impianti tecnologici. Azienda giovane ma dinamica, con solide competenze tecniche e attenzione costante alla qualità: operiamo a Bolzano e in tutto l'Alto Adige.",
    values: ["Integrità", "Professionalità", "Collaborazione", "Trasparenza", "Efficienza energetica", "Sicurezza"],
    strengths: [
      { title: "Installazione climatizzatori", text: "Sistemi split, multisplit e canalizzati installati a regola d'arte." },
      { title: "Pulizia e sanificazione", text: "Impianti sempre efficienti e aria salubre, con manutenzione periodica." },
      { title: "Assistenza tecnica rapida", text: "Interventi veloci e puntuali a Bolzano e dintorni." },
      { title: "Sopralluoghi gratuiti", text: "Consulenza e sopralluogo senza impegno, con preventivo trasparente." },
      { title: "Tecnici certificati", text: "Squadra esperta, formata e abilitata alle certificazioni di settore." },
      { title: "Dalla A alla Z", text: "Ti accompagniamo dalla consulenza iniziale all'assistenza post-vendita." },
    ],
  },

  certifications: {
    label: "Certificazioni & partner",
    title: { pre: "Competenza ", highlight: "certificata" },
    items: [
      {
        title: "Mitsubishi Heavy Industries",
        subtitle: "Centro Assistenza Autorizzata",
        text: "Siamo centro assistenza autorizzato Mitsubishi Heavy Industries: competenza certificata direttamente dal produttore.",
      },
      {
        title: "Certificazione F-Gas",
        subtitle: "Trattamento gas fluorurati",
        text: "Abilitazione F-Gas per il trattamento dei gas fluorurati: interventi a norma, sicuri e rispettosi dell'ambiente.",
      },
    ],
  },

  stats: [
    { value: 250, suffix: "+", label: "Impianti installati" },
    { value: 98, suffix: "%", label: "Clienti soddisfatti" },
    { value: 24, suffix: "h", label: "Tempo medio di risposta" },
    { value: 100, suffix: "%", label: "Sopralluoghi gratuiti" },
  ],

  contactStrip: {
    label: "Contatti",
    title: { pre: "Sopralluogo e preventivo ", highlight: "gratuiti" },
    text: "Raccontaci il tuo progetto: rispondiamo in fretta, a Bolzano e in tutto l'Alto Adige.",
    labels: { phone: "Telefono", email: "Email", address: "Sede" },
  },

  about: {
    heroLabel: "Chi siamo",
    heroTitle: "Passione tecnica, comfort quotidiano",
    story: [
      "Tekno Klima nasce dalla passione e dall'esperienza nel settore degli impianti tecnologici, con l'obiettivo di offrire soluzioni affidabili e moderne.",
      "Siamo un'azienda giovane ma dinamica, con solide competenze tecniche e un'attenzione costante alla qualità. Operiamo principalmente a Bolzano e in tutto l'Alto Adige: climatizzazione, impianti elettrici civili e industriali, illuminazione personalizzata e assistenza continua.",
      "Accompagniamo ogni progetto dalla consulenza iniziale all'assistenza post-vendita, perché il comfort non è un momento: è ogni giorno.",
    ],
    whereLabel: "Dove operiamo",
    whereTitle: "Bolzano e tutto l'Alto Adige",
    whereText:
      "Sede in Viale Druso 107, 39100 Bolzano (BZ). Interventi veloci e puntuali, consulenza e sopralluoghi gratuiti.",
    valuesLabel: "I nostri valori",
    valuesTitle: "I valori che guidano ogni nostro intervento",
    values: [
      { title: "Integrità", text: "Diciamo quello che facciamo e facciamo quello che diciamo." },
      { title: "Professionalità", text: "Tecnici esperti e certificati, formazione continua, lavori a regola d'arte." },
      { title: "Collaborazione", text: "Lavoriamo con te, non solo per te: ascolto e dialogo in ogni fase." },
      { title: "Trasparenza", text: "Preventivi chiari, tempi certi, nessuna sorpresa." },
      { title: "Efficienza energetica", text: "Soluzioni che consumano meno e rendono di più, per te e per l'ambiente." },
      { title: "Sicurezza", text: "Impianti a norma e certificati, per la tranquillità di chi li vive." },
    ],
  },

  gallery: {
    heroLabel: "Galleria",
    heroTitle: { pre: "I nostri ", highlight: "lavori" },
    heroText: "Una selezione di impianti realizzati a Bolzano e in Alto Adige.",
    filterLabel: "Filtra per categoria",
    filterAll: "Tutti",
    categories: [
      { key: "clima", label: "Climatizzazione" },
      { key: "elettrico", label: "Impianti Elettrici" },
      { key: "luce", label: "Illuminazione" },
    ],
    items: [
      { id: 1, title: "Installazione multisplit — appartamento", categoryKey: "clima", placeholder: { from: "#1fa8dc", to: "#0b1f33" } },
      { id: 2, title: "Impianto canalizzato — ufficio", categoryKey: "clima", placeholder: { from: "#0e7bb8", to: "#10293f" } },
      { id: 3, title: "Quadro elettrico — azienda", categoryKey: "elettrico", placeholder: { from: "#ff7a3d", to: "#0b1f33" } },
      { id: 4, title: "Illuminazione LED — negozio", categoryKey: "luce", placeholder: { from: "#e85d1f", to: "#10293f" } },
      { id: 5, title: "Split residenziale — Bolzano", categoryKey: "clima", placeholder: { from: "#1fa8dc", to: "#0e7bb8" } },
      { id: 6, title: "Impianto civile — nuova costruzione", categoryKey: "elettrico", placeholder: { from: "#4a6178", to: "#0b1f33" } },
      { id: 7, title: "Luci d'accento — soggiorno", categoryKey: "luce", placeholder: { from: "#ff7a3d", to: "#e85d1f" } },
      { id: 8, title: "Sanificazione impianto — ristorante", categoryKey: "clima", placeholder: { from: "#0e7bb8", to: "#0b1f33" } },
      { id: 9, title: "Illuminazione esterna — terrazza", categoryKey: "luce", placeholder: { from: "#10293f", to: "#1fa8dc" } },
    ],
    open: "Apri",
    close: "Chiudi",
  },

  contact: {
    heroLabel: "Contatti",
    heroTitle: "Parliamo del tuo progetto",
    heroText:
      "Consulenza e sopralluoghi gratuiti a Bolzano e in tutto l'Alto Adige. Scrivici o chiamaci: rispondiamo in fretta.",
    dataLabel: "Dati di contatto",
    form: {
      aria: "Richiedi un preventivo",
      name: "Nome e cognome",
      email: "Email",
      phone: "Telefono",
      message: "Raccontaci di cosa hai bisogno",
      submit: "Invia richiesta",
      privacy: "Inviando accetti il trattamento dei dati per rispondere alla tua richiesta.",
      success: "Richiesta pronta! Si aprirà il tuo client email per l'invio.",
      subjectPrefix: "Richiesta preventivo",
    },
    mapsEmbed: "https://www.google.com/maps?q=Viale+Druso+107,+39100+Bolzano+BZ&output=embed",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=Viale+Druso+107+39100+Bolzano",
  },

  footer: {
    ctaLabel: "Preventivo gratuito",
    ctaTitle: "Diamo energia al tuo comfort.",
    ctaTitleMuted: "Parliamone.",
    blurb:
      "Affidabilità che respiri ogni giorno. Climatizzazione, impianti elettrici e illuminazione a Bolzano e in tutto l'Alto Adige.",
    exploreLabel: "Esplora",
    contactsLabel: "Contatti",
  },

  preloaderTagline: "Diamo energia al tuo comfort",

  meta: {
    home: {
      title: "Tekno Klima — Climatizzazione e impianti a Bolzano",
      description:
        "Diamo energia al tuo comfort: climatizzatori, impianti elettrici e illuminazione a Bolzano e in Alto Adige. Sopralluoghi gratuiti, tecnici certificati F-Gas.",
    },
    climatizzazione: {
      title: "Climatizzazione — Installazione climatizzatori a Bolzano",
      description:
        "Installazione climatizzatori a Bolzano: split, multisplit e impianti canalizzati. Sopralluogo gratuito, tecnici certificati F-Gas, assistenza rapida in Alto Adige.",
    },
    impiantiElettrici: {
      title: "Impianti Elettrici civili e industriali a Bolzano",
      description:
        "Impianti elettrici civili e industriali a Bolzano e in Alto Adige: sicuri, innovativi e a norma. Consulenza e sopralluoghi gratuiti, preventivo trasparente.",
    },
    illuminazione: {
      title: "Illuminazione personalizzata a Bolzano",
      description:
        "Soluzioni di illuminazione personalizzate per casa, ufficio e negozi a Bolzano: progettazione illuminotecnica, LED ad alta efficienza, installazione integrata.",
    },
    galleria: {
      title: "Galleria lavori — Impianti realizzati a Bolzano",
      description:
        "I nostri lavori: climatizzatori, impianti elettrici e illuminazione realizzati a Bolzano e in Alto Adige da Tekno Klima.",
    },
    chiSiamo: {
      title: "Chi Siamo — Tekno Klima, impianti tecnologici a Bolzano",
      description:
        "Tekno Klima: azienda giovane e dinamica di Bolzano specializzata in climatizzazione, impianti elettrici e illuminazione. Integrità, trasparenza, efficienza energetica.",
    },
    contatti: {
      title: "Contatti — Richiedi un preventivo a Bolzano",
      description:
        "Contatta Tekno Klima a Bolzano: preventivi e sopralluoghi gratuiti per climatizzatori, impianti elettrici e illuminazione. Viale Druso 107, tel. 346 420 5357.",
    },
  },
};
