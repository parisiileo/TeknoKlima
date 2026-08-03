import type { LegalContent } from "./types";

/** English legal texts — same structure as `legalIt`. */
export const legalEn: LegalContent = {
  cookieBanner: {
    aria: "Cookie notice",
    title: "Cookies and external content",
    closeBannerAria: "Close and accept only necessary cookies",
    text: "We use technical cookies only: they remember the language you chose and this preference of yours. They require no consent and do not profile you. We do ask, however, whether we may load the Google map on the Contact page, since it is external content that communicates your IP address to Google.",
    acceptAll: "Accept all",
    onlyNecessary: "Necessary only",
    customise: "Customise",

    prefsTitle: "Cookie preferences",
    prefsText: "Choose which content we may load. You can change your mind at any time from the link at the bottom of the page.",
    save: "Save preferences",
    close: "Close",
    footerLink: "Cookie preferences",
    alwaysOn: "Always on",

    categories: {
      necessary: {
        name: "Necessary",
        text: "The cookie that remembers your chosen language, and the one that stores this preference. These are technical cookies: without them the site does not work as intended, and by law they require no consent.",
      },
      thirdParty: {
        name: "Third-party content",
        text: "The Google Maps map on the Contact page. If you enable this, the map loads on its own; otherwise a preview with a button remains, and nothing is requested from Google until you press it.",
      },
    },
  },

  labels: {
    privacy: "Privacy Policy",
    cookie: "Cookie Policy",
    backToSite: "Back to the site",
    legalNav: "Legal",
  },

  privacy: {
    title: "Privacy Policy",
    updated: "Last updated: 3 August 2026",
    intro: [
      "This notice describes how {legalName} processes the personal data of visitors to this website and of anyone who contacts us, pursuant to Articles 13 and 14 of Regulation (EU) 2016/679 (GDPR).",
      "This is a brochure website: it does not sell products online, it does not profile visitors, and it uses no analytics or marketing tools.",
    ],
    sections: [
      {
        heading: "1. Data controller",
        body: [
          "The data controller is {legalName}, with registered office at {address}, {vat}.",
          "For any matter concerning your personal data you can write to us at {email} or call us on {phone}.",
        ],
      },
      {
        heading: "2. What data we collect",
        body: [
          "We process only the data you provide to us voluntarily when you get in touch. We do not collect data automatically for statistical or advertising purposes.",
        ],
        list: [
          "Data you send us on WhatsApp: phone number, profile name, profile picture where present, and the content of the messages, including any photos you choose to send us.",
          "Data you send us spontaneously by email, by phone, or through our social media profiles.",
          "Technical data strictly necessary for the website to work: see the Cookie Policy.",
          "Technical connection data (IP address, browser and device type, date and time of the request) automatically logged by the servers hosting the site, for security and diagnostic purposes. We do not use it to identify you or to profile you.",
        ],
      },
      {
        heading: "3. How contacting us on WhatsApp works",
        body: [
          "This website contains no contact forms and collects no data of its own accord: the buttons on the Contact page are plain links that open WhatsApp on your device, in some cases with a message already drafted that you are free to edit or delete before sending. Until you press those buttons, no data leaves your device.",
          "The conversation therefore takes place entirely on WhatsApp. The service is provided by WhatsApp Ireland Limited (Meta group), which processes traffic and account data as an independent controller under its own privacy policy. We process, as controllers, the content of the conversation and the data you share within it.",
          "WhatsApp normally applies end-to-end encryption to messages: the content is readable only by you and by us. We nonetheless ask you not to send special categories of data (health information, for example) or documents that are not necessary for your request through this channel.",
          "If you would rather not use WhatsApp, you can always email or phone us: both are listed on the Contact page and in the footer.",
        ],
      },
      {
        heading: "4. Purposes and legal basis",
        body: ["We process your data for the following purposes:"],
        list: [
          "To answer your requests for information, quotations or service, and to carry out the pre-contractual steps you ask for (Art. 6(1)(b) GDPR).",
          "To comply with legal obligations, in particular tax and accounting ones, should the request turn into a contractual relationship (Art. 6(1)(c) GDPR).",
          "To load the Google Maps map on the Contact page, only if you choose to activate it (Art. 6(1)(a) GDPR — consent).",
        ],
      },
      {
        heading: "5. Provision of data",
        body: [
          "There is no mandatory data to provide: you decide what to write to us and through which channel. That said, to reply we do need at least a way to reach you and a description of what you need. If you write to us on WhatsApp your number is necessarily visible to us, since the channel itself is based on it.",
        ],
      },
      {
        heading: "6. How long we keep your data",
        body: [
          "We keep correspondence relating to requests that did not lead anywhere for as long as is needed to handle them, and in any case no longer than 24 months from the last contact.",
          "If the request results in a contractual relationship, the data is kept for the duration of that relationship and for the following 10 years, as required by Italian civil and tax law.",
        ],
      },
      {
        heading: "7. Who we share data with",
        body: [
          "Your data is processed by authorised staff within our company. It may also be processed, as data processors under Art. 28 GDPR, by the technical and professional service providers we rely on:",
        ],
        list: [
          "Vercel Inc., which provides the hosting infrastructure and delivery network the site is published on.",
          "Aruba S.p.A., which provides domain registration and the email services, both ordinary and certified (PEC).",
          "WhatsApp Ireland Limited (Meta group), as the provider of the messaging platform, if you choose to contact us through that channel.",
          "Tax and accounting advisers, for statutory compliance.",
        ],
      },
      {
        heading: "8. Disclosure and transfers outside the EU",
        body: [
          "Your data is never disclosed publicly nor sold to third parties.",
          "The website itself does not transfer data outside the European Economic Area. A transfer may occur in two cases, both of which follow an explicit choice of yours: if you activate the Google Maps map on the Contact page, your IP address and browser data are communicated to Google Ireland Limited; if you write to us on WhatsApp, the conversation data is processed by WhatsApp Ireland Limited.",
          "In both cases the data may be transferred to third countries, including the United States, on the basis of the adequacy decisions and safeguards provided for by Articles 45 and 46 GDPR. Neither the map nor WhatsApp is activated without an explicit action on your part.",
          "It should also be noted that the hosting infrastructure is provided by Vercel Inc., a company based in the United States operating a globally distributed server network. The technical connection data described in point 2 may therefore be processed outside the European Economic Area as well. The transfer takes place on the basis of the standard contractual clauses adopted by the European Commission and the further safeguards provided for by Article 46 GDPR.",
        ],
      },
      {
        heading: "9. Your rights",
        body: [
          "At any time you may exercise against us the rights set out in Articles 15 to 22 GDPR:",
        ],
        list: [
          "Access your personal data and obtain a copy of it.",
          "Request rectification of inaccurate data or completion of incomplete data.",
          "Request erasure of your data, in the cases provided for by law.",
          "Request restriction of processing.",
          "Object to processing on grounds relating to your particular situation.",
          "Receive your data in a structured format and transmit it to another controller (portability).",
          "Withdraw your consent at any time, without affecting the lawfulness of processing carried out before withdrawal.",
        ],
      },
      {
        heading: "10. Exercising your rights and complaints",
        body: [
          "To exercise your rights simply write to {email}. We will reply without undue delay and in any case within one month of the request.",
          "If you believe the processing of your data breaches the law, you have the right to lodge a complaint with the Italian Data Protection Authority (Garante per la protezione dei dati personali, Piazza Venezia 11, 00187 Rome — www.garanteprivacy.it) or to bring the matter before the courts.",
        ],
      },
      {
        heading: "11. Changes to this notice",
        body: [
          "We may update this notice to reflect changes in the law or in the services offered by the website. The version in force is always the one published on this page, bearing the last-updated date shown above.",
        ],
      },
    ],
    meta: {
      title: "Privacy Policy",
      description:
        "How Tekno Klima processes personal data under Regulation (EU) 2016/679 (GDPR).",
    },
  },

  cookie: {
    title: "Cookie Policy",
    updated: "Last updated: 3 August 2026",
    intro: [
      "This page explains which cookies and similar technologies are used on this website, in line with the cookie and tracking guidelines issued by the Italian Data Protection Authority.",
      "This website uses no profiling cookies, no analytics cookies, and no third-party advertising or tracking tools. The only two cookies present are technical and come from us, not from third parties.",
      "On your first visit a banner appears asking you exactly one thing: whether we may load the Google map on the Contact page. The technical cookies are not put to you, because by law they require no consent; the banner exists to collect your choice on the only external content on the site.",
    ],
    sections: [
      {
        heading: "1. What cookies are",
        body: [
          "Cookies are small text files that websites store on a visitor's device. They keep the site working, remember a user's preferences and, in other cases, collect information about browsing behaviour.",
          "Technical cookies — those necessary for the site to work or to store a preference expressed by the user — require no prior consent. All others do.",
        ],
      },
      {
        heading: "2. Cookies used by this website",
        body: [
          "We use two cookies, both technical in nature and first-party (set directly by this website, not by third parties):",
        ],
        table: {
          head: ["Name", "Purpose", "Duration", "Type"],
          rows: [
            [
              "tk-locale",
              "Stores the language you chose (Italian, German or English) so it can be offered again on your next visit.",
              "12 months",
              "Technical — no consent required",
            ],
            [
              "tk-consent",
              'Remembers the choice you made in the banner, so it is not put to you again on every page. It holds only the value "necessary" or "all".',
              "6 months",
              "Technical — no consent required",
            ],
          ],
        },
      },
      {
        heading: "3. The banner and how to change your mind",
        body: [
          "On your first visit you will find a banner with three explicit options: accept everything, accept only the necessary cookies, or open the preferences and decide item by item. No box is pre-ticked, and neither of the two main options is made more prominent than the other.",
          "Scrolling the page or carrying on browsing does NOT count as consent: until you choose, no external content is loaded.",
          'You can change your decision at any time from the "Cookie preferences" link at the bottom of every page. After six months the choice expires and will be put to you again.',
        ],
      },
      {
        heading: "4. Third-party content: Google Maps",
        body: [
          "A map provided by Google Maps is available on the Contact page. Without your consent the map is never loaded automatically: in its place you will find a preview drawn by us, with no image downloaded from Google, and a button to load it.",
          "There are therefore two ways to activate it, both of them yours to make: consenting to third-party content in the banner or in the preferences, in which case the map will load on its own on later visits too; or pressing the button on the preview, a choice that applies to that occasion only and is not stored.",
          "In both cases the content is requested from Google's servers, which may then set their own cookies (including NID, lasting six months) and receive your IP address. Before that moment, no data is communicated to Google.",
          "The processing carried out by Google at that point is governed by Google's privacy policy, available at policies.google.com/privacy.",
        ],
      },
      {
        heading: "5. Links to WhatsApp, Instagram and Google Maps",
        body: [
          "The \"Message us on WhatsApp\" buttons, the link to our Instagram profile and the \"Open in Google Maps\" link are plain outbound links: they embed no content in the page and set no third-party cookies. Any cookies from those platforms are set only after you have left our website, on the destination site or app.",
          "How data is processed once the WhatsApp conversation is open is described in our Privacy Policy.",
        ],
      },
      {
        heading: "6. How to manage or delete cookies",
        body: [
          "You can delete cookies already on your device, or prevent them from being set, at any time through your browser settings. Note that disabling technical cookies may affect how the site works — in our case, the site will simply stop remembering your chosen language.",
        ],
        list: [
          "Google Chrome: Settings → Privacy and security → Cookies and other site data",
          "Mozilla Firefox: Settings → Privacy & Security → Cookies and Site Data",
          "Safari: Settings → Privacy → Manage Website Data",
          "Microsoft Edge: Settings → Cookies and site permissions",
        ],
      },
      {
        heading: "7. Controller and contact",
        body: [
          "The data controller is {legalName}, with registered office at {address}, {vat}. For any question about this cookie policy write to us at {email}.",
          "For details on how we process personal data, see our Privacy Policy.",
        ],
      },
    ],
    meta: {
      title: "Cookie Policy",
      description:
        "Which cookies the Tekno Klima website uses: a single technical cookie for language, no profiling, and Google Maps loaded only with consent.",
    },
  },
};
