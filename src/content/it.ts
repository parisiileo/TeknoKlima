import type { Content } from "./types";

/** TEKNO KLIMA — Contenuti italiani (lingua di default). */
export const it: Content = {
  site: {
    name: "Tekno Klima",
    legalName: "Tekno Klima S.n.c. di Akshija Ahmed & C.",
    payoffPrimary: "Diamo energia al tuo comfort",
    payoffSecondary: "Affidabilità che respiri ogni giorno.",
    phone: "346 420 5357",
    phoneHref: "tel:+393464205357",
    email: "info@teknoklima.bz.it",
    emailHref: "mailto:info@teknoklima.bz.it",
    address: "Via Toni Ebner 9, 39100 Bolzano (BZ)",
    instagram: "@teknoklima.bz",
    instagramHref: "https://www.instagram.com/teknoklima.bz",
    vat: "P.IVA 03281740211",
    vatNumber: "03281740211",
    city: "Bolzano",
    region: "Alto Adige",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Climatizzazione", href: "/climatizzazione" },
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
    label: "Climatizzazione — Bolzano / Alto Adige",
    line1: "Diamo energia",
    line2Pre: "al tuo ",
    line2Highlight: "comfort",
    lead: "Affidabilità che respiri ogni giorno. Impianti di climatizzazione per abitazioni, uffici e attività commerciali a Bolzano e in tutto l'Alto Adige. Centro assistenza ufficiale Mitsubishi Heavy Industries.",
    ctaServices: "Scopri il servizio",
    scroll: "Scroll",
  },

  servicesSection: {
    label: "Cosa facciamo",
    title: { pre: "Una specialità, un solo standard: ", highlight: "fatto bene", post: "." },
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
        subtitle: "Centro Assistenza Ufficiale",
        text: "Siamo centro assistenza ufficiale Mitsubishi Heavy Industries: competenza certificata direttamente dal produttore.",
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
    { value: 100, suffix: "%", label: "Clienti soddisfatti" },
    { value: 24, suffix: "h", label: "Tempo medio di risposta" },
    { value: 100, suffix: "%", label: "Sopralluoghi gratuiti" },
  ],

  reviews: {
    label: "Recensioni",
    title: { pre: "La parola ai ", highlight: "clienti" },
    source: "Recensione su Google",
    ratingAria: "5 stelle su 5",
    items: [
      {
        name: "Viviana Di Vita",
        date: "5 ore fa",
        text: "Installazione dell'aria condizionata in tempi record anche se in piena estate. Lavoro perfetto e veloce. Consiglio a tutti!",
      },
      {
        name: "Emanuele Iachelli",
        date: "2 settimane fa",
        text: "Dopo diverse esperienze negative, grazie a loro ho risolto il mio problema. Team esperto, chiaro e onesto. Difficile trovare di meglio.",
      },
      {
        name: "Riccardo Petti",
        date: "3 settimane fa",
        text: "Super rapidi e professionali. Prezzi onesti.",
      },
      {
        name: "Alessandro Randon",
        date: "2 mesi fa",
        text: "Medi di Tekno Klima è un professionista come pochi. Puntuale nel sopralluogo, rapido nel preventivo, super professionale nel lavoro. Miglior rapporto qualità prezzo a Bolzano.",
      },
      {
        name: "Genert Olldashi",
        date: "10 mesi fa",
        text: "Ho avuto il piacere di collaborare con Medi di Tekno Klima e posso dire senza esitazioni che è una persona estremamente competente, affidabile e professionale.",
      },
    ],
  },

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
      "Tekno Klima nasce dalla passione e dall'esperienza nel settore della climatizzazione, con l'obiettivo di offrire soluzioni affidabili e moderne.",
      "Siamo un'azienda giovane ma dinamica, con solide competenze tecniche e un'attenzione costante alla qualità. Operiamo principalmente a Bolzano e in tutto l'Alto Adige: progettazione, installazione, manutenzione e sanificazione di impianti di climatizzazione, con assistenza continua.",
      "Come centro assistenza ufficiale Mitsubishi Heavy Industries, accompagniamo ogni progetto dalla consulenza iniziale all'assistenza post-vendita, perché il comfort non è un momento: è ogni giorno.",
    ],
    whereLabel: "Dove operiamo",
    whereTitle: "Bolzano e tutto l'Alto Adige",
    whereText:
      "Sede in Via Toni Ebner 9, 39100 Bolzano (BZ). Interventi veloci e puntuali, consulenza e sopralluoghi gratuiti.",
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
      { key: "split", label: "Split e multisplit" },
      { key: "canalizzato", label: "Canalizzati" },
      { key: "manutenzione", label: "Manutenzione" },
    ],
    items: [
      { id: 1, title: "Installazione multisplit — appartamento", categoryKey: "split", placeholder: { from: "#1fa8dc", to: "#0b1f33" } },
      { id: 2, title: "Impianto canalizzato — ufficio", categoryKey: "canalizzato", placeholder: { from: "#0e7bb8", to: "#10293f" } },
      { id: 5, title: "Split residenziale — Bolzano", categoryKey: "split", placeholder: { from: "#1fa8dc", to: "#0e7bb8" } },
      { id: 8, title: "Sanificazione impianto — ristorante", categoryKey: "manutenzione", placeholder: { from: "#0e7bb8", to: "#0b1f33" } },
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
    mapsEmbed: "https://www.google.com/maps?q=Via+Toni+Ebner+9,+39100+Bolzano+BZ&output=embed",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=Via+Toni+Ebner+9+39100+Bolzano",
  },

  footer: {
    ctaLabel: "Preventivo gratuito",
    ctaTitle: "Diamo energia al tuo comfort.",
    ctaTitleMuted: "Parliamone.",
    blurb:
      "Affidabilità che respiri ogni giorno. Impianti di climatizzazione a Bolzano e in tutto l'Alto Adige. Centro assistenza ufficiale Mitsubishi Heavy Industries.",
    exploreLabel: "Esplora",
    contactsLabel: "Contatti",
  },

  preloaderTagline: "Diamo energia al tuo comfort",

  meta: {
    home: {
      title: "Tekno Klima — Climatizzazione a Bolzano",
      description:
        "Diamo energia al tuo comfort: installazione e assistenza climatizzatori a Bolzano e in Alto Adige. Centro assistenza ufficiale Mitsubishi Heavy Industries, tecnici certificati F-Gas.",
    },
    climatizzazione: {
      title: "Climatizzazione — Installazione climatizzatori a Bolzano",
      description:
        "Installazione climatizzatori a Bolzano: split, multisplit e impianti canalizzati. Sopralluogo gratuito, tecnici certificati F-Gas, assistenza rapida in Alto Adige.",
    },
    galleria: {
      title: "Galleria lavori — Impianti di climatizzazione a Bolzano",
      description:
        "I nostri lavori: impianti di climatizzazione realizzati a Bolzano e in Alto Adige da Tekno Klima.",
    },
    chiSiamo: {
      title: "Chi Siamo — Tekno Klima, climatizzazione a Bolzano",
      description:
        "Tekno Klima: azienda giovane e dinamica di Bolzano specializzata in climatizzazione. Centro assistenza ufficiale Mitsubishi Heavy Industries. Integrità, trasparenza, efficienza energetica.",
    },
    contatti: {
      title: "Contatti — Richiedi un preventivo a Bolzano",
      description:
        "Contatta Tekno Klima a Bolzano: preventivi e sopralluoghi gratuiti per impianti di climatizzazione. Via Toni Ebner 9, tel. 346 420 5357.",
    },
  },
};
