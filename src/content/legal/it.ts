import type { LegalContent } from "./types";

/**
 * Testi legali italiani (lingua di riferimento).
 *
 * I segnaposto `{legalName}`, `{address}`, `{vat}`, `{email}`, `{phone}` sono
 * sostituiti a render con i dati in `content/it.ts → site`: i dati aziendali
 * vivono in un posto solo e non si disallineano fra le lingue.
 */
export const legalIt: LegalContent = {
  cookieBanner: {
    aria: "Informativa sui cookie",
    title: "Cookie e contenuti esterni",
    closeBannerAria: "Chiudi e accetta solo i cookie necessari",
    text: "Usiamo soltanto cookie tecnici: ricordano la lingua che hai scelto e questa tua preferenza. Non richiedono consenso e non ti profilano. Ti chiediamo invece se possiamo caricare la mappa di Google nella pagina Contatti, perché è un contenuto esterno che comunica il tuo indirizzo IP a Google.",
    acceptAll: "Accetta tutto",
    onlyNecessary: "Solo necessari",
    customise: "Personalizza",

    prefsTitle: "Preferenze cookie",
    prefsText: "Scegli quali contenuti possiamo caricare. Puoi cambiare idea in qualsiasi momento dal link in fondo alla pagina.",
    save: "Salva le preferenze",
    close: "Chiudi",
    footerLink: "Preferenze cookie",
    alwaysOn: "Sempre attivi",

    categories: {
      necessary: {
        name: "Necessari",
        text: "Il cookie che ricorda la lingua scelta e quello che memorizza questa preferenza. Sono cookie tecnici: senza, il sito non funziona come dovrebbe, e per legge non richiedono consenso.",
      },
      thirdParty: {
        name: "Contenuti di terze parti",
        text: "La mappa Google Maps nella pagina Contatti. Se attivi questa voce la mappa si carica da sola; altrimenti resta un'anteprima con un pulsante, e nulla viene richiesto a Google finché non lo premi.",
      },
    },
  },

  labels: {
    privacy: "Privacy Policy",
    cookie: "Cookie Policy",
    backToSite: "Torna al sito",
    legalNav: "Note legali",
  },

  privacy: {
    title: "Privacy Policy",
    updated: "Ultimo aggiornamento: 3 agosto 2026",
    intro: [
      "La presente informativa descrive come {legalName} tratta i dati personali di chi visita questo sito e di chi ci contatta, ai sensi degli articoli 13 e 14 del Regolamento (UE) 2016/679 (GDPR).",
      "Questo sito è un sito vetrina: non vende prodotti online, non profila i visitatori e non utilizza strumenti di analisi statistica o di marketing.",
    ],
    sections: [
      {
        heading: "1. Titolare del trattamento",
        body: [
          "Il titolare del trattamento è {legalName}, con sede in {address}, {vat}.",
          "Per qualsiasi questione relativa ai tuoi dati personali puoi scriverci a {email} o telefonarci al {phone}.",
        ],
      },
      {
        heading: "2. Quali dati raccogliamo",
        body: [
          "Trattiamo esclusivamente i dati che ci fornisci volontariamente quando ci contatti. Non raccogliamo dati in modo automatico a fini statistici o pubblicitari.",
        ],
        list: [
          "Dati che ci comunichi scrivendoci su WhatsApp: numero di telefono, nome del profilo, eventuale immagine profilo e il contenuto dei messaggi, comprese le foto che scegli di inviarci.",
          "Dati che ci comunichi spontaneamente via email, telefonandoci o contattandoci tramite i nostri profili social.",
          "Dati tecnici strettamente necessari al funzionamento del sito: vedi la Cookie Policy.",
          "Dati tecnici di connessione (indirizzo IP, tipo di browser e di dispositivo, data e ora della richiesta) registrati automaticamente dai server che ospitano il sito, per ragioni di sicurezza e diagnostica. Non li usiamo per identificarti né per profilarti.",
        ],
      },
      {
        heading: "3. Come funziona il contatto via WhatsApp",
        body: [
          "Questo sito non contiene moduli di contatto e non raccoglie dati di sua iniziativa: i pulsanti presenti nella pagina Contatti sono semplici collegamenti che aprono WhatsApp sul tuo dispositivo, in alcuni casi con un messaggio già scritto che resti libero di modificare o cancellare prima di inviarlo. Finché non premi quei pulsanti nessun dato lascia il tuo dispositivo.",
          "La conversazione si svolge quindi interamente su WhatsApp. Il servizio è fornito da WhatsApp Ireland Limited (gruppo Meta), che tratta i dati di traffico e di account come titolare autonomo, secondo la propria informativa. Noi trattiamo, come titolari, il contenuto della conversazione e i dati che ci comunichi al suo interno.",
          "WhatsApp applica di norma la cifratura end-to-end ai messaggi: il contenuto è leggibile solo da te e da noi. Ti chiediamo comunque di non inviare tramite questo canale dati particolari (ad esempio informazioni sulla salute) o documenti che non siano necessari alla richiesta.",
          "Se preferisci non usare WhatsApp, puoi sempre scriverci via email o telefonarci: trovi entrambi i recapiti nella pagina Contatti e nel piè di pagina.",
        ],
      },
      {
        heading: "4. Finalità e base giuridica",
        body: [
          "Trattiamo i tuoi dati per le seguenti finalità:",
        ],
        list: [
          "Rispondere alle tue richieste di informazioni, preventivo o assistenza, ed eseguire le misure precontrattuali che ci chiedi (art. 6.1.b GDPR).",
          "Adempiere agli obblighi di legge, in particolare fiscali e contabili, qualora la richiesta si trasformi in un rapporto contrattuale (art. 6.1.c GDPR).",
          "Consentire il caricamento della mappa Google Maps nella pagina Contatti, solo se scegli di attivarla (art. 6.1.a GDPR — consenso).",
        ],
      },
      {
        heading: "5. Conferimento dei dati",
        body: [
          "Non ci sono dati obbligatori da conferire: sei tu a decidere cosa scriverci e su quale canale. È però evidente che, per poterti rispondere, ci servono almeno un recapito e una descrizione di ciò di cui hai bisogno. Scrivendoci su WhatsApp il tuo numero ci è necessariamente visibile, essendo il canale stesso a fondarsi su di esso.",
        ],
      },
      {
        heading: "6. Per quanto tempo conserviamo i dati",
        body: [
          "Conserviamo la corrispondenza relativa a richieste che non hanno avuto seguito per il tempo necessario a gestirle e comunque non oltre 24 mesi dall'ultimo contatto.",
          "Se dalla richiesta nasce un rapporto contrattuale, i dati sono conservati per la durata del rapporto e per i successivi 10 anni, come previsto dalla normativa civilistica e fiscale.",
        ],
      },
      {
        heading: "7. A chi comunichiamo i dati",
        body: [
          "I tuoi dati sono trattati dal personale autorizzato della nostra azienda. Possono inoltre essere trattati, in qualità di responsabili del trattamento ai sensi dell'art. 28 GDPR, da fornitori di servizi tecnici e professionali di cui ci avvaliamo:",
        ],
        list: [
          "Vercel Inc., che fornisce l'infrastruttura di hosting e la rete di distribuzione su cui il sito è pubblicato.",
          "Aruba S.p.A., che fornisce la registrazione del dominio e i servizi di posta elettronica, ordinaria e certificata.",
          "WhatsApp Ireland Limited (gruppo Meta), come fornitore della piattaforma di messaggistica, se scegli di contattarci per quel canale.",
          "Consulenti fiscali e contabili, per gli adempimenti di legge.",
        ],
      },
      {
        heading: "8. Diffusione e trasferimento extra UE",
        body: [
          "I tuoi dati non sono in alcun caso diffusi né venduti a terzi.",
          "Il sito, di per sé, non trasferisce dati fuori dallo Spazio Economico Europeo. Il trasferimento può avvenire in due casi, entrambi rimessi a una tua scelta esplicita: se attivi la mappa Google Maps nella pagina Contatti, il tuo indirizzo IP e i dati del browser sono comunicati a Google Ireland Limited; se ci scrivi su WhatsApp, i dati della conversazione sono trattati da WhatsApp Ireland Limited.",
          "In entrambi i casi i dati possono essere trasferiti verso Paesi terzi, inclusi gli Stati Uniti, sulla base delle decisioni di adeguatezza e delle garanzie previste dagli artt. 45 e 46 GDPR. Né la mappa né WhatsApp vengono attivati senza un tuo gesto esplicito.",
          "Va inoltre segnalato che l'infrastruttura di hosting è fornita da Vercel Inc., società con sede negli Stati Uniti che opera una rete di server distribuita a livello mondiale. I dati tecnici di connessione descritti al punto 2 possono quindi essere trattati anche fuori dallo Spazio Economico Europeo. Il trasferimento avviene sulla base delle clausole contrattuali standard adottate dalla Commissione europea e delle ulteriori garanzie previste dall'art. 46 GDPR.",
        ],
      },
      {
        heading: "9. I tuoi diritti",
        body: [
          "In qualsiasi momento puoi esercitare nei nostri confronti i diritti previsti dagli articoli da 15 a 22 del GDPR:",
        ],
        list: [
          "Accedere ai tuoi dati personali e ottenerne copia.",
          "Chiedere la rettifica dei dati inesatti o l'integrazione di quelli incompleti.",
          "Chiedere la cancellazione dei dati, nei casi previsti dalla legge.",
          "Chiedere la limitazione del trattamento.",
          "Opporti al trattamento per motivi legati alla tua situazione particolare.",
          "Ricevere i tuoi dati in formato strutturato e trasmetterli a un altro titolare (portabilità).",
          "Revocare in qualsiasi momento il consenso prestato, senza che ciò pregiudichi la liceità del trattamento effettuato prima della revoca.",
        ],
      },
      {
        heading: "10. Come esercitare i diritti e reclamo",
        body: [
          "Per esercitare i tuoi diritti è sufficiente scrivere a {email}. Risponderemo senza ingiustificato ritardo e comunque entro un mese dalla richiesta.",
          "Se ritieni che il trattamento dei tuoi dati violi la normativa, hai diritto di proporre reclamo al Garante per la protezione dei dati personali (Piazza Venezia 11, 00187 Roma — www.garanteprivacy.it) oppure di ricorrere all'autorità giudiziaria.",
        ],
      },
      {
        heading: "11. Modifiche a questa informativa",
        body: [
          "Possiamo aggiornare questa informativa per adeguarla a modifiche normative o ai servizi offerti dal sito. La versione in vigore è sempre quella pubblicata in questa pagina, con la data di ultimo aggiornamento indicata in alto.",
        ],
      },
    ],
    meta: {
      title: "Privacy Policy",
      description:
        "Informativa sul trattamento dei dati personali di Tekno Klima ai sensi del Regolamento (UE) 2016/679 (GDPR).",
    },
  },

  cookie: {
    title: "Cookie Policy",
    updated: "Ultimo aggiornamento: 3 agosto 2026",
    intro: [
      "Questa pagina spiega quali cookie e tecnologie simili sono utilizzati su questo sito, secondo le Linee guida cookie e altri strumenti di tracciamento del Garante per la protezione dei dati personali.",
      "Questo sito non utilizza cookie di profilazione, né cookie analitici, né strumenti pubblicitari o di tracciamento di terze parti. Gli unici due cookie presenti sono tecnici e vengono da noi, non da terzi.",
      "Alla prima visita compare un banner che ti chiede una sola cosa: se possiamo caricare la mappa di Google nella pagina Contatti. I cookie tecnici non ti vengono chiesti, perché per legge non richiedono consenso; il banner serve a raccogliere la tua scelta sull'unico contenuto esterno del sito.",
    ],
    sections: [
      {
        heading: "1. Cosa sono i cookie",
        body: [
          "I cookie sono piccoli file di testo che i siti salvano sul dispositivo di chi li visita. Servono a far funzionare il sito, a ricordare le preferenze dell'utente e, in altri casi, a raccogliere informazioni sul comportamento di navigazione.",
          "I cookie tecnici, necessari al funzionamento del sito o a memorizzare una preferenza espressa dall'utente, non richiedono consenso preventivo. Tutti gli altri sì.",
        ],
      },
      {
        heading: "2. Cookie utilizzati da questo sito",
        body: [
          "Utilizziamo due cookie, entrambi di natura tecnica e di prima parte (impostati cioè direttamente da questo sito, non da terzi):",
        ],
        table: {
          head: ["Nome", "Finalità", "Durata", "Tipo"],
          rows: [
            [
              "tk-locale",
              "Memorizza la lingua scelta (italiano, tedesco o inglese) per riproporla alla visita successiva.",
              "12 mesi",
              "Tecnico — nessun consenso richiesto",
            ],
            [
              "tk-consent",
              "Ricorda la scelta che hai espresso nel banner, così da non richiedertela a ogni pagina. Contiene solo il valore \"necessary\" o \"all\".",
              "6 mesi",
              "Tecnico — nessun consenso richiesto",
            ],
          ],
        },
      },
      {
        heading: "3. Il banner e come cambiare idea",
        body: [
          "Alla prima visita trovi un banner con tre possibilità, tutte esplicite: accettare tutto, accettare i soli cookie necessari, oppure aprire le preferenze e decidere voce per voce. Nessuna casella è pre-spuntata e nessuna delle due scelte principali è resa più evidente dell'altra.",
          "Scorrere la pagina o continuare a navigare NON vale come consenso: finché non scegli, nessun contenuto esterno viene caricato.",
          "Puoi cambiare la tua decisione in qualsiasi momento dal link \"Preferenze cookie\" in fondo a ogni pagina. Trascorsi sei mesi la scelta scade e ti verrà richiesta di nuovo.",
        ],
      },
      {
        heading: "4. Contenuti di terze parti: Google Maps",
        body: [
          "Nella pagina Contatti è disponibile una mappa fornita da Google Maps. La mappa non viene mai caricata automaticamente in assenza del tuo consenso: al suo posto trovi un'anteprima disegnata da noi, senza alcuna immagine scaricata da Google, con un pulsante per caricarla.",
          "Ci sono quindi due modi per attivarla, entrambi rimessi a te: acconsentire ai contenuti di terze parti nel banner o nelle preferenze, e in tal caso la mappa si caricherà da sola anche alle visite successive; oppure premere il pulsante sull'anteprima, scelta che vale solo per quella volta e non viene memorizzata.",
          "In entrambi i casi il contenuto viene richiesto ai server di Google, che a quel punto possono installare cookie propri (fra cui NID, di durata semestrale) e ricevere il tuo indirizzo IP. Prima di quel momento nessun dato viene comunicato a Google.",
          "Il trattamento effettuato da Google in quel momento è disciplinato dall'informativa privacy di Google, disponibile su policies.google.com/privacy.",
        ],
      },
      {
        heading: "5. Link a WhatsApp, Instagram e Google Maps",
        body: [
          "I pulsanti \"Scrivici su WhatsApp\", il link al nostro profilo Instagram e il collegamento \"Apri in Google Maps\" sono semplici link in uscita: non incorporano contenuti nella pagina e non installano cookie di terze parti. I cookie di quelle piattaforme vengono eventualmente impostati solo dopo che hai lasciato il nostro sito, sul sito o nell'applicazione di destinazione.",
          "Il trattamento dei dati che avviene una volta aperta la conversazione su WhatsApp è descritto nella nostra Privacy Policy.",
        ],
      },
      {
        heading: "6. Come gestire o eliminare i cookie",
        body: [
          "Puoi in ogni momento eliminare i cookie già presenti sul tuo dispositivo o impedirne l'installazione tramite le impostazioni del browser. Ricorda che disabilitare i cookie tecnici può compromettere il corretto funzionamento del sito — nel nostro caso, il sito semplicemente non ricorderà più la lingua scelta.",
        ],
        list: [
          "Google Chrome: Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti",
          "Mozilla Firefox: Impostazioni → Privacy e sicurezza → Cookie e dati dei siti web",
          "Safari: Impostazioni → Privacy → Gestisci dati dei siti web",
          "Microsoft Edge: Impostazioni → Cookie e autorizzazioni sito",
        ],
      },
      {
        heading: "7. Titolare e contatti",
        body: [
          "Il titolare del trattamento è {legalName}, con sede in {address}, {vat}. Per qualsiasi domanda su questa cookie policy puoi scriverci a {email}.",
          "Per il dettaglio su come trattiamo i dati personali, consulta la nostra Privacy Policy.",
        ],
      },
    ],
    meta: {
      title: "Cookie Policy",
      description:
        "Quali cookie utilizza il sito di Tekno Klima: solo un cookie tecnico per la lingua, nessuna profilazione, Google Maps caricata solo su consenso.",
    },
  },
};
