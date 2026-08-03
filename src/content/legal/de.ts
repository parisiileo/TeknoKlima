import type { LegalContent } from "./types";

/** Rechtstexte auf Deutsch — gleiche Struktur wie `legalIt`. */
export const legalDe: LegalContent = {
  cookieBanner: {
    aria: "Cookie-Hinweis",
    title: "Cookies und externe Inhalte",
    closeBannerAria: "Schließen und nur notwendige Cookies akzeptieren",
    text: "Wir verwenden ausschließlich technische Cookies: Sie speichern Ihre Sprachwahl und diese Entscheidung. Sie bedürfen keiner Einwilligung und erstellen kein Profil von Ihnen. Wir fragen Sie hingegen, ob wir die Google-Karte auf der Seite Kontakt laden dürfen, da es sich um einen externen Inhalt handelt, der Ihre IP-Adresse an Google übermittelt.",
    acceptAll: "Alle akzeptieren",
    onlyNecessary: "Nur notwendige",
    customise: "Anpassen",

    prefsTitle: "Cookie-Einstellungen",
    prefsText: "Wählen Sie, welche Inhalte wir laden dürfen. Sie können Ihre Entscheidung jederzeit über den Link am Seitenende ändern.",
    save: "Einstellungen speichern",
    close: "Schließen",
    footerLink: "Cookie-Einstellungen",
    alwaysOn: "Immer aktiv",

    categories: {
      necessary: {
        name: "Notwendige",
        text: "Das Cookie, das die gewählte Sprache speichert, und jenes, das diese Einstellung sichert. Es sind technische Cookies: Ohne sie funktioniert die Website nicht wie vorgesehen, und gesetzlich bedürfen sie keiner Einwilligung.",
      },
      thirdParty: {
        name: "Inhalte Dritter",
        text: "Die Google-Maps-Karte auf der Seite Kontakt. Wenn Sie diese Option aktivieren, lädt die Karte automatisch; andernfalls bleibt eine Vorschau mit einer Schaltfläche, und es wird nichts bei Google angefragt, bevor Sie sie betätigen.",
      },
    },
  },

  labels: {
    privacy: "Datenschutzerklärung",
    cookie: "Cookie-Richtlinie",
    backToSite: "Zurück zur Website",
    legalNav: "Rechtliche Hinweise",
  },

  privacy: {
    title: "Datenschutzerklärung",
    updated: "Letzte Aktualisierung: 3. August 2026",
    intro: [
      "Diese Erklärung beschreibt, wie {legalName} die personenbezogenen Daten der Besucherinnen und Besucher dieser Website sowie derjenigen verarbeitet, die uns kontaktieren — gemäß Art. 13 und 14 der Verordnung (EU) 2016/679 (DSGVO).",
      "Diese Website ist eine reine Präsentationsseite: Es werden keine Produkte online verkauft, es findet kein Profiling statt und es kommen weder Analyse- noch Marketing-Werkzeuge zum Einsatz.",
    ],
    sections: [
      {
        heading: "1. Verantwortlicher",
        body: [
          "Verantwortlicher für die Verarbeitung ist {legalName}, mit Sitz in {address}, {vat}.",
          "Bei allen Fragen zu Ihren personenbezogenen Daten erreichen Sie uns unter {email} oder telefonisch unter {phone}.",
        ],
      },
      {
        heading: "2. Welche Daten wir erheben",
        body: [
          "Wir verarbeiten ausschließlich die Daten, die Sie uns freiwillig mitteilen, wenn Sie uns kontaktieren. Eine automatisierte Erhebung zu statistischen oder Werbezwecken findet nicht statt.",
        ],
        list: [
          "Daten, die Sie uns über WhatsApp mitteilen: Telefonnummer, Profilname, gegebenenfalls Profilbild und der Inhalt der Nachrichten, einschließlich der Fotos, die Sie uns senden.",
          "Daten, die Sie uns spontan per E-Mail, telefonisch oder über unsere Social-Media-Profile mitteilen.",
          "Technische Daten, die für den Betrieb der Website unbedingt erforderlich sind: siehe Cookie-Richtlinie.",
          "Technische Verbindungsdaten (IP-Adresse, Browser- und Gerätetyp, Datum und Uhrzeit der Anfrage), die von den Servern der Website aus Sicherheits- und Diagnosegründen automatisch protokolliert werden. Wir nutzen sie weder zu Ihrer Identifizierung noch zum Profiling.",
        ],
      },
      {
        heading: "3. Wie die Kontaktaufnahme über WhatsApp funktioniert",
        body: [
          "Diese Website enthält keine Kontaktformulare und erhebt von sich aus keine Daten: Die Schaltflächen auf der Seite Kontakt sind einfache Links, die WhatsApp auf Ihrem Gerät öffnen — teilweise mit einer bereits vorformulierten Nachricht, die Sie vor dem Absenden frei ändern oder löschen können. Solange Sie diese Schaltflächen nicht betätigen, verlassen keine Daten Ihr Gerät.",
          "Das Gespräch findet somit vollständig über WhatsApp statt. Der Dienst wird von WhatsApp Ireland Limited (Meta-Konzern) bereitgestellt, die Verkehrs- und Kontodaten als eigenständige Verantwortliche nach ihrer eigenen Datenschutzerklärung verarbeitet. Wir verarbeiten als Verantwortliche den Inhalt des Gesprächs und die Daten, die Sie uns darin mitteilen.",
          "WhatsApp wendet auf Nachrichten in der Regel eine Ende-zu-Ende-Verschlüsselung an: Der Inhalt ist nur für Sie und uns lesbar. Wir bitten Sie dennoch, über diesen Kanal keine besonderen Datenkategorien (etwa Gesundheitsdaten) oder Unterlagen zu senden, die für die Anfrage nicht erforderlich sind.",
          "Wenn Sie WhatsApp nicht nutzen möchten, können Sie uns jederzeit eine E-Mail schreiben oder anrufen: Beide Kontaktdaten finden Sie auf der Seite Kontakt und in der Fußzeile.",
        ],
      },
      {
        heading: "4. Zwecke und Rechtsgrundlagen",
        body: ["Wir verarbeiten Ihre Daten zu folgenden Zwecken:"],
        list: [
          "Beantwortung Ihrer Anfragen zu Informationen, Kostenvoranschlägen oder Service sowie Durchführung der von Ihnen gewünschten vorvertraglichen Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).",
          "Erfüllung gesetzlicher Pflichten, insbesondere steuer- und handelsrechtlicher Art, falls aus der Anfrage ein Vertragsverhältnis entsteht (Art. 6 Abs. 1 lit. c DSGVO).",
          "Laden der Google-Maps-Karte auf der Seite Kontakt, ausschließlich wenn Sie sich dafür entscheiden (Art. 6 Abs. 1 lit. a DSGVO — Einwilligung).",
        ],
      },
      {
        heading: "5. Bereitstellung der Daten",
        body: [
          "Es gibt keine Pflichtangaben: Sie entscheiden, was Sie uns schreiben und über welchen Kanal. Damit wir antworten können, benötigen wir allerdings mindestens eine Kontaktmöglichkeit und eine Beschreibung Ihres Anliegens. Wenn Sie uns über WhatsApp schreiben, ist Ihre Nummer für uns zwangsläufig sichtbar, da der Kanal selbst darauf beruht.",
        ],
      },
      {
        heading: "6. Speicherdauer",
        body: [
          "Korrespondenz zu Anfragen ohne weitere Folge bewahren wir so lange auf, wie es zu deren Bearbeitung erforderlich ist, längstens jedoch 24 Monate ab dem letzten Kontakt.",
          "Entsteht aus der Anfrage ein Vertragsverhältnis, werden die Daten für dessen Dauer und weitere 10 Jahre gespeichert, wie es das Zivil- und Steuerrecht vorsieht.",
        ],
      },
      {
        heading: "7. Empfänger der Daten",
        body: [
          "Ihre Daten werden von den befugten Mitarbeitenden unseres Unternehmens verarbeitet. Darüber hinaus können sie als Auftragsverarbeiter im Sinne des Art. 28 DSGVO von den von uns beauftragten technischen und fachlichen Dienstleistern verarbeitet werden:",
        ],
        list: [
          "Vercel Inc., Anbieter der Hosting-Infrastruktur und des Content-Delivery-Netzwerks, auf dem die Website veröffentlicht ist.",
          "Aruba S.p.A., Anbieter der Domainregistrierung sowie der E-Mail-Dienste, einschließlich der zertifizierten E-Mail (PEC).",
          "WhatsApp Ireland Limited (Meta-Konzern) als Anbieter der Messaging-Plattform, wenn Sie uns über diesen Kanal kontaktieren.",
          "Steuer- und Buchhaltungsberatung zur Erfüllung gesetzlicher Pflichten.",
        ],
      },
      {
        heading: "8. Verbreitung und Drittlandtransfer",
        body: [
          "Ihre Daten werden in keinem Fall veröffentlicht oder an Dritte verkauft.",
          "Die Website selbst überträgt keine Daten außerhalb des Europäischen Wirtschaftsraums. Eine Übermittlung kann in zwei Fällen erfolgen, die beide auf Ihrer ausdrücklichen Entscheidung beruhen: Wenn Sie die Google-Maps-Karte auf der Seite Kontakt aktivieren, werden Ihre IP-Adresse und Browserdaten an Google Ireland Limited übermittelt; wenn Sie uns über WhatsApp schreiben, werden die Gesprächsdaten von WhatsApp Ireland Limited verarbeitet.",
          "In beiden Fällen können die Daten auf Grundlage der Angemessenheitsbeschlüsse und Garantien nach Art. 45 und 46 DSGVO in Drittländer einschließlich der USA übertragen werden. Weder die Karte noch WhatsApp werden ohne eine ausdrückliche Handlung Ihrerseits aktiviert.",
          "Zudem ist darauf hinzuweisen, dass die Hosting-Infrastruktur von Vercel Inc. bereitgestellt wird, einem Unternehmen mit Sitz in den USA, das ein weltweit verteiltes Servernetz betreibt. Die unter Punkt 2 beschriebenen technischen Verbindungsdaten können daher auch außerhalb des Europäischen Wirtschaftsraums verarbeitet werden. Die Übermittlung erfolgt auf Grundlage der von der Europäischen Kommission erlassenen Standardvertragsklauseln und der weiteren Garantien nach Art. 46 DSGVO.",
        ],
      },
      {
        heading: "9. Ihre Rechte",
        body: [
          "Sie können uns gegenüber jederzeit die in den Art. 15 bis 22 DSGVO vorgesehenen Rechte ausüben:",
        ],
        list: [
          "Auskunft über Ihre personenbezogenen Daten und Erhalt einer Kopie.",
          "Berichtigung unrichtiger und Vervollständigung unvollständiger Daten.",
          "Löschung der Daten in den gesetzlich vorgesehenen Fällen.",
          "Einschränkung der Verarbeitung.",
          "Widerspruch gegen die Verarbeitung aus Gründen Ihrer besonderen Situation.",
          "Erhalt Ihrer Daten in einem strukturierten Format und Übermittlung an einen anderen Verantwortlichen (Datenübertragbarkeit).",
          "Jederzeitiger Widerruf einer erteilten Einwilligung, ohne dass die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung berührt wird.",
        ],
      },
      {
        heading: "10. Ausübung der Rechte und Beschwerde",
        body: [
          "Zur Ausübung Ihrer Rechte genügt eine Nachricht an {email}. Wir antworten unverzüglich, spätestens jedoch innerhalb eines Monats nach Eingang der Anfrage.",
          "Sind Sie der Ansicht, dass die Verarbeitung Ihrer Daten gegen geltendes Recht verstößt, haben Sie das Recht, Beschwerde bei der italienischen Datenschutzbehörde einzulegen (Garante per la protezione dei dati personali, Piazza Venezia 11, 00187 Rom — www.garanteprivacy.it) oder den Rechtsweg zu beschreiten.",
        ],
      },
      {
        heading: "11. Änderungen dieser Erklärung",
        body: [
          "Wir können diese Erklärung anpassen, um sie an Gesetzesänderungen oder an die angebotenen Dienste anzugleichen. Maßgeblich ist stets die auf dieser Seite veröffentlichte Fassung mit dem oben angegebenen Datum der letzten Aktualisierung.",
        ],
      },
    ],
    meta: {
      title: "Datenschutzerklärung",
      description:
        "Informationen zur Verarbeitung personenbezogener Daten durch Tekno Klima gemäß Verordnung (EU) 2016/679 (DSGVO).",
    },
  },

  cookie: {
    title: "Cookie-Richtlinie",
    updated: "Letzte Aktualisierung: 3. August 2026",
    intro: [
      "Diese Seite erläutert, welche Cookies und ähnlichen Technologien auf dieser Website eingesetzt werden — gemäß den Leitlinien der italienischen Datenschutzbehörde zu Cookies und anderen Tracking-Instrumenten.",
      "Diese Website verwendet weder Profiling- noch Analyse-Cookies und keine Werbe- oder Tracking-Werkzeuge Dritter. Die einzigen beiden Cookies sind technischer Art und stammen von uns, nicht von Dritten.",
      "Beim ersten Besuch erscheint ein Banner, das Sie um genau eine Entscheidung bittet: ob wir die Google-Karte auf der Seite Kontakt laden dürfen. Die technischen Cookies werden nicht abgefragt, da sie gesetzlich keiner Einwilligung bedürfen; das Banner dient dazu, Ihre Wahl zum einzigen externen Inhalt der Website einzuholen.",
    ],
    sections: [
      {
        heading: "1. Was Cookies sind",
        body: [
          "Cookies sind kleine Textdateien, die Websites auf dem Gerät der Besucherinnen und Besucher speichern. Sie dienen dazu, die Website funktionsfähig zu halten, Einstellungen zu merken und — in anderen Fällen — Informationen über das Surfverhalten zu sammeln.",
          "Technische Cookies, die für den Betrieb der Website erforderlich sind oder eine vom Nutzer geäußerte Einstellung speichern, bedürfen keiner vorherigen Einwilligung. Alle übrigen schon.",
        ],
      },
      {
        heading: "2. Von dieser Website verwendete Cookies",
        body: [
          "Wir verwenden zwei Cookies, beide technischer Art und als Erstanbieter-Cookies (also direkt von dieser Website gesetzt, nicht von Dritten):",
        ],
        table: {
          head: ["Name", "Zweck", "Dauer", "Art"],
          rows: [
            [
              "tk-locale",
              "Speichert die gewählte Sprache (Italienisch, Deutsch oder Englisch), um sie beim nächsten Besuch wieder anzubieten.",
              "12 Monate",
              "Technisch — keine Einwilligung erforderlich",
            ],
            [
              "tk-consent",
              'Speichert Ihre im Banner getroffene Entscheidung, damit sie nicht auf jeder Seite erneut abgefragt wird. Enthält lediglich den Wert "necessary" oder "all".',
              "6 Monate",
              "Technisch — keine Einwilligung erforderlich",
            ],
          ],
        },
      },
      {
        heading: "3. Das Banner und wie Sie Ihre Meinung ändern",
        body: [
          "Beim ersten Besuch finden Sie ein Banner mit drei ausdrücklichen Möglichkeiten: alles akzeptieren, nur die notwendigen Cookies akzeptieren oder die Einstellungen öffnen und Punkt für Punkt entscheiden. Kein Kästchen ist vorangekreuzt, und keine der beiden Hauptoptionen ist auffälliger gestaltet als die andere.",
          "Weiterscrollen oder Weiternavigieren gilt NICHT als Einwilligung: Solange Sie nicht wählen, werden keine externen Inhalte geladen.",
          "Sie können Ihre Entscheidung jederzeit über den Link „Cookie-Einstellungen“ am Ende jeder Seite ändern. Nach sechs Monaten läuft die Wahl ab und wird erneut abgefragt.",
        ],
      },
      {
        heading: "4. Inhalte Dritter: Google Maps",
        body: [
          "Auf der Seite Kontakt steht eine von Google Maps bereitgestellte Karte zur Verfügung. Ohne Ihre Einwilligung wird die Karte niemals automatisch geladen: An ihrer Stelle finden Sie eine von uns gestaltete Vorschau — ohne jedes von Google geladene Bild — mit einer Schaltfläche zum Laden.",
          "Es gibt somit zwei Wege, sie zu aktivieren, beide liegen bei Ihnen: der Einwilligung in Inhalte Dritter im Banner oder in den Einstellungen zustimmen, dann lädt die Karte auch bei späteren Besuchen von selbst; oder die Schaltfläche in der Vorschau betätigen, was nur für dieses eine Mal gilt und nicht gespeichert wird.",
          "In beiden Fällen wird der Inhalt bei den Servern von Google angefordert, die dann eigene Cookies setzen (darunter NID mit einer Laufzeit von sechs Monaten) und Ihre IP-Adresse erhalten können. Vorher werden keine Daten an Google übermittelt.",
          "Die dann von Google vorgenommene Verarbeitung richtet sich nach der Datenschutzerklärung von Google, abrufbar unter policies.google.com/privacy.",
        ],
      },
      {
        heading: "5. Links zu WhatsApp, Instagram und Google Maps",
        body: [
          "Die Schaltflächen „Schreib uns auf WhatsApp“, der Link zu unserem Instagram-Profil und die Verlinkung „In Google Maps öffnen“ sind einfache ausgehende Links: Sie binden keine Inhalte in die Seite ein und setzen keine Cookies Dritter. Cookies dieser Plattformen werden gegebenenfalls erst gesetzt, nachdem Sie unsere Website verlassen haben — auf der Zielseite oder in der Ziel-App.",
          "Wie die Daten nach dem Öffnen des WhatsApp-Gesprächs verarbeitet werden, ist in unserer Datenschutzerklärung beschrieben.",
        ],
      },
      {
        heading: "6. Cookies verwalten oder löschen",
        body: [
          "Sie können bereits gesetzte Cookies jederzeit über die Einstellungen Ihres Browsers löschen oder deren Setzen verhindern. Bitte beachten Sie, dass das Deaktivieren technischer Cookies die Funktionsfähigkeit der Website beeinträchtigen kann — in unserem Fall merkt sich die Website dann einfach die gewählte Sprache nicht mehr.",
        ],
        list: [
          "Google Chrome: Einstellungen → Datenschutz und Sicherheit → Cookies und andere Websitedaten",
          "Mozilla Firefox: Einstellungen → Datenschutz und Sicherheit → Cookies und Website-Daten",
          "Safari: Einstellungen → Datenschutz → Websitedaten verwalten",
          "Microsoft Edge: Einstellungen → Cookies und Websiteberechtigungen",
        ],
      },
      {
        heading: "7. Verantwortlicher und Kontakt",
        body: [
          "Verantwortlicher für die Verarbeitung ist {legalName}, mit Sitz in {address}, {vat}. Bei Fragen zu dieser Cookie-Richtlinie schreiben Sie uns an {email}.",
          "Einzelheiten zur Verarbeitung personenbezogener Daten finden Sie in unserer Datenschutzerklärung.",
        ],
      },
    ],
    meta: {
      title: "Cookie-Richtlinie",
      description:
        "Welche Cookies die Website von Tekno Klima verwendet: nur ein technisches Cookie für die Sprache, kein Profiling, Google Maps nur nach Einwilligung.",
    },
  },
};
