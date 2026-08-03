import type { Content } from "./types";

/** TEKNO KLIMA — Contenuti italiani (lingua di default). */
export const it: Content = {
  site: {
    name: "Tekno Klima",
    legalName: "Tekno Klima S.n.c. di Akshija Ahmed & C.",
    whatsappNumber: "393464205357",
    payoffPrimary: "Diamo energia al tuo comfort",
    payoffSecondary: "Affidabilità che respiri ogni giorno.",
    phone: "346 420 5357",
    phoneHref: "tel:+393464205357",
    email: "info@teknoklima.bz.it",
    emailHref: "mailto:info@teknoklima.bz.it",
    address: "Viale Druso 107, 39100 Bolzano (BZ)",
    instagram: "@teknoklima.bz.it",
    instagramHref: "https://www.instagram.com/teknoklima.bz.it",
    vat: "P.IVA 03281740211",
    vatNumber: "03281740211",
    rea: "BZ-247012",
    pec: "teknoklimasnc@pec.it",
    city: "Bolzano",
    region: "Alto Adige",
  },

  a11y: {
    skipToContent: "Vai al contenuto",
    homeLink: "Tekno Klima — Home",
    mainNav: "Navigazione principale",
    mobileNav: "Navigazione mobile",
    openMenu: "Apri menu",
    closeMenu: "Chiudi menu",
    langSwitcher: "Scegli la lingua",
    breadcrumb: "Percorso di navigazione",
  },

  faq: {
    label: "Domande frequenti",
    title: { pre: "Le domande che ci fate ", highlight: "più spesso" },
    items: [
      {
        q: "Quanto costa installare un climatizzatore a Bolzano?",
        a: "Il costo dipende dal tipo di impianto, dal numero di unità e dalle caratteristiche dell'immobile. Per questo il sopralluogo e il preventivo sono gratuiti e senza impegno: veniamo a vedere gli spazi, valutiamo la soluzione più adatta e ti diamo un preventivo chiaro, senza costi nascosti.",
      },
      {
        q: "In quali zone intervenite?",
        a: "Operiamo a Bolzano e in tutto l'Alto Adige, per abitazioni, uffici e attività commerciali.",
      },
      {
        q: "Che differenza c'è tra split, multisplit e impianto canalizzato?",
        a: "Uno split serve un solo ambiente con un'unità interna. Un multisplit collega più unità interne a una sola unità esterna, ed è la scelta tipica per climatizzare più stanze. Un impianto canalizzato distribuisce l'aria attraverso canali nel controsoffitto: si vedono solo le griglie, quindi è la soluzione più adatta quando conta l'estetica.",
      },
      {
        q: "Siete certificati per il trattamento dei gas refrigeranti?",
        a: "Sì. Siamo in possesso della certificazione F-Gas, obbligatoria per legge per chi installa e manutiene impianti contenenti gas fluorurati. Siamo inoltre centro assistenza ufficiale Mitsubishi Heavy Industries.",
      },
      {
        q: "Ogni quanto va fatta la manutenzione di un climatizzatore?",
        a: "In generale si consiglia una manutenzione all'anno, preferibilmente prima della stagione di utilizzo più intensa. Una pulizia regolare dei filtri e dello scambiatore mantiene l'aria salubre, riduce i consumi e allunga la vita dell'impianto.",
      },
      {
        q: "Fate anche assistenza su impianti installati da altri?",
        a: "Sì, ci occupiamo di manutenzione, pulizia, sanificazione e riparazione anche su impianti che non abbiamo installato noi. Contattaci indicando marca e modello e ti diciamo come possiamo intervenire.",
      },
      {
        q: "Il sopralluogo è davvero gratuito?",
        a: "Sì. Sopralluogo, consulenza e preventivo sono gratuiti e senza impegno, a Bolzano e in tutto l'Alto Adige.",
      },
    ],
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
    companyLabel: "Ragione sociale",
    vatLabel: "P.IVA",
    reaLabel: "REA",
    whatsapp: {
      label: "Il modo più rapido",
      title: "Scrivici su WhatsApp",
      text: "Raccontaci di cosa hai bisogno: una foto dell'impianto o due righe bastano per capire come aiutarti. Ti rispondiamo con un preventivo chiaro, senza impegno.",
      cta: "Apri la chat",
      topicsLabel: "Oppure parti da qui",
      topics: [
        {
          label: "Preventivo per un nuovo impianto",
          message:
            "Buongiorno, vorrei un preventivo per l'installazione di un impianto di climatizzazione.",
        },
        {
          label: "Assistenza o riparazione",
          message:
            "Buongiorno, avrei bisogno di assistenza su un impianto di climatizzazione già installato.",
        },
        {
          label: "Manutenzione e sanificazione",
          message:
            "Buongiorno, vorrei informazioni sulla manutenzione e sanificazione del mio impianto.",
        },
      ],
      note: "Scrivici quando vuoi: ti rispondiamo negli orari di lavoro, di solito in giornata.",
      altLabel: "Preferisci un altro canale?",
      privacyNote:
        "Scrivendoci, i dati che ci comunichi vengono usati solo per rispondere alla tua richiesta. Dettagli nella",
    },
    mapsEmbed: "https://www.google.com/maps?q=Viale+Druso+107,+39100+Bolzano+BZ&output=embed",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=Viale+Druso+107+39100+Bolzano",
    map: {
      title: "Dove siamo",
      notice:
        "La mappa è fornita da Google Maps. Caricandola accetti che il tuo indirizzo IP venga comunicato a Google, che può installare cookie propri.",
      load: "Carica la mappa",
      openExternal: "Apri in Google Maps",
      frameTitle: "Mappa della sede Tekno Klima",
    },
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

  notFound: {
    label: "Errore 404",
    title: "Questa pagina non esiste",
    text: "L'indirizzo che hai aperto non corrisponde a nessuna pagina del sito. Può darsi che sia stato spostato o digitato male.",
    cta: "Torna alla home",
  },

  /*
   * Title tenuti sotto i ~45 caratteri: il template aggiunge " | Tekno Klima"
   * e Google ne mostra circa 60 in tutto. Description sotto i 160, il punto
   * oltre il quale lo snippet viene troncato con i puntini.
   */
  meta: {
    home: {
      title: "Tekno Klima — Climatizzazione a Bolzano",
      description:
        "Installazione e assistenza climatizzatori a Bolzano e in Alto Adige. Centro assistenza ufficiale Mitsubishi Heavy Industries, tecnici certificati F-Gas.",
    },
    climatizzazione: {
      title: "Installazione climatizzatori a Bolzano",
      description:
        "Split, multisplit e impianti canalizzati a Bolzano. Sopralluogo e preventivo gratuiti, tecnici certificati F-Gas, assistenza rapida in Alto Adige.",
    },
    galleria: {
      title: "Galleria lavori: impianti a Bolzano",
      description:
        "I nostri lavori: impianti di climatizzazione realizzati a Bolzano e in Alto Adige da Tekno Klima.",
    },
    chiSiamo: {
      title: "Chi siamo: climatizzazione a Bolzano",
      description:
        "Azienda di Bolzano specializzata in climatizzazione, centro assistenza ufficiale Mitsubishi Heavy Industries. Integrità, trasparenza, efficienza.",
    },
    contatti: {
      title: "Contatti e preventivi a Bolzano",
      description:
        "Contatta Tekno Klima a Bolzano: preventivi e sopralluoghi gratuiti per impianti di climatizzazione. Viale Druso 107, tel. 346 420 5357.",
    },
  },
};
