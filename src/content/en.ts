import type { Content } from "./types";

/** TEKNO KLIMA — English content. */
export const en: Content = {
  site: {
    name: "Tekno Klima",
    legalName: "Tekno Klima S.n.c. di Akshija Ahmed & C.",
    payoffPrimary: "We power your comfort",
    payoffSecondary: "Reliability you breathe every day.",
    phone: "346 420 5357",
    phoneHref: "tel:+393464205357",
    email: "info@teknoklima.bz.it",
    emailHref: "mailto:info@teknoklima.bz.it",
    address: "Via Toni Ebner 9, 39100 Bolzano (BZ), Italy",
    instagram: "@teknoklima.bz",
    instagramHref: "https://www.instagram.com/teknoklima.bz",
    vat: "VAT 03281740211",
    vatNumber: "03281740211",
    city: "Bolzano",
    region: "South Tyrol",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Air Conditioning", href: "/climatizzazione" },
    { label: "Gallery", href: "/galleria" },
    { label: "About Us", href: "/chi-siamo" },
    { label: "Contact", href: "/contatti" },
  ],

  cta: {
    quote: "Request a quote",
    call: "Call us",
    discover: "Learn more",
  },

  hero: {
    label: "Air conditioning — Bolzano / South Tyrol",
    line1: "We power",
    line2Pre: "your ",
    line2Highlight: "comfort",
    lead: "Reliability you breathe every day. Air conditioning systems for homes, offices and businesses in Bolzano and throughout South Tyrol. Official Mitsubishi Heavy Industries service centre.",
    ctaServices: "Our service",
    scroll: "Scroll",
  },

  servicesSection: {
    label: "What we do",
    title: { pre: "One specialty, one standard: ", highlight: "done right", post: "." },
  },

  services: [
    {
      slug: "climatizzazione",
      num: "01",
      title: "Air Conditioning",
      short:
        "Design and installation of systems for homes, offices and businesses. Thermal comfort and energy efficiency.",
      heroTitle: "Perfect air, in every season",
      heroText:
        "We design and install air conditioning systems for homes, offices and commercial spaces. State-of-the-art technology for thermal comfort, energy efficiency and respect for the environment.",
      features: [
        {
          title: "Split and multi-split systems",
          text: "Tailor-made solutions for every space, from a single room to the whole home — quiet, high-efficiency units.",
        },
        {
          title: "Ducted systems",
          text: "Invisible, even climate control integrated into the ceiling: total comfort with zero visual impact.",
        },
        {
          title: "Cleaning and sanitisation",
          text: "Periodic maintenance, cleaning and sanitisation for healthy air and peak performance.",
        },
        {
          title: "After-installation support",
          text: "We stay with you: fast technical assistance in and around Bolzano, with quick, punctual call-outs.",
        },
      ],
      process: [
        { title: "Free site survey", text: "We assess your spaces and needs — no obligation." },
        { title: "Tailored design", text: "We size the ideal system for comfort and efficiency." },
        { title: "Certified installation", text: "Expert, F-Gas certified technicians; clean, punctual work." },
        { title: "Ongoing support", text: "Maintenance, sanitisation and after-sales service." },
      ],
    },
  ],

  servicePage: {
    includesLabel: "What's included",
    includesTitle: { pre: "Complete solutions, ", highlight: "tailor-made" },
    processLabel: "How we work",
    processTitle: "From consultation to support",
    ctaLabel: "Free quote",
    ctaTitle: "Shall we talk about your project?",
    ctaText:
      "Free site survey and consultation in Bolzano and throughout South Tyrol, with a clear, transparent quote.",
  },

  whyUs: {
    label: "Why choose us",
    title: { pre: "Reliability you ", highlight: "breathe", post: " every day" },
    about:
      "Tekno Klima was born from passion and experience in technical systems. A young, dynamic company with solid technical skills and a constant focus on quality: we work in Bolzano and throughout South Tyrol.",
    values: ["Integrity", "Professionalism", "Collaboration", "Transparency", "Energy efficiency", "Safety"],
    strengths: [
      { title: "Air conditioner installation", text: "Split, multi-split and ducted systems, installed to the highest standard." },
      { title: "Cleaning and sanitisation", text: "Efficient systems and healthy air, thanks to periodic maintenance." },
      { title: "Fast technical assistance", text: "Quick, punctual call-outs in and around Bolzano." },
      { title: "Free site surveys", text: "No-obligation consultation and survey, with a transparent quote." },
      { title: "Certified technicians", text: "An expert team, trained and certified to industry standards." },
      { title: "From A to Z", text: "We follow you from the first consultation to after-sales support." },
    ],
  },

  certifications: {
    label: "Certifications & partners",
    title: { pre: "Certified ", highlight: "expertise" },
    items: [
      {
        title: "Mitsubishi Heavy Industries",
        subtitle: "Official Service Centre",
        text: "We are an official Mitsubishi Heavy Industries service centre: expertise certified directly by the manufacturer.",
      },
      {
        title: "F-Gas Certification",
        subtitle: "Fluorinated gas handling",
        text: "F-Gas qualification for handling fluorinated gases: compliant, safe, environmentally responsible work.",
      },
    ],
  },

  stats: [
    { value: 250, suffix: "+", label: "Systems installed" },
    { value: 100, suffix: "%", label: "Satisfied clients" },
    { value: 24, suffix: "h", label: "Average response time" },
    { value: 100, suffix: "%", label: "Free site surveys" },
  ],

  reviews: {
    label: "Reviews",
    title: { pre: "What our ", highlight: "clients", post: " say" },
    source: "Review on Google",
    ratingAria: "5 out of 5 stars",
    items: [
      {
        name: "Viviana Di Vita",
        date: "5 hours ago",
        text: "Air conditioning installed in record time, even in the middle of summer. Perfect and fast work. Highly recommended!",
      },
      {
        name: "Emanuele Iachelli",
        date: "2 weeks ago",
        text: "After several bad experiences, they solved my problem. An expert, clear and honest team. Hard to find better.",
      },
      {
        name: "Riccardo Petti",
        date: "3 weeks ago",
        text: "Super fast and professional. Honest prices.",
      },
      {
        name: "Alessandro Randon",
        date: "2 months ago",
        text: "Medi from Tekno Klima is a rare kind of professional. Punctual for the survey, quick with the quote, highly professional in the work. Best value for money in Bolzano.",
      },
      {
        name: "Genert Olldashi",
        date: "10 months ago",
        text: "I had the pleasure of working with Medi from Tekno Klima and can say without hesitation that he is extremely competent, reliable and professional.",
      },
    ],
  },

  contactStrip: {
    label: "Contact",
    title: { pre: "Site survey and quote — ", highlight: "free" },
    text: "Tell us about your project: we reply fast, in Bolzano and throughout South Tyrol.",
    labels: { phone: "Phone", email: "Email", address: "Office" },
  },

  about: {
    heroLabel: "About us",
    heroTitle: "Technical passion, everyday comfort",
    story: [
      "Tekno Klima was born from passion and experience in the field of air conditioning, with the goal of offering reliable, modern solutions.",
      "We are a young, dynamic company with solid technical skills and a constant focus on quality. We work mainly in Bolzano and throughout South Tyrol: design, installation, maintenance and sanitisation of air conditioning systems, with ongoing assistance.",
      "As an official Mitsubishi Heavy Industries service centre, we follow every project from the first consultation to after-sales support — because comfort isn't a moment: it's every day.",
    ],
    whereLabel: "Where we work",
    whereTitle: "Bolzano and all of South Tyrol",
    whereText:
      "Based at Via Toni Ebner 9, 39100 Bolzano (BZ). Fast, punctual call-outs; free consultations and site surveys.",
    valuesLabel: "Our values",
    valuesTitle: "The values that guide everything we do",
    values: [
      { title: "Integrity", text: "We say what we do — and do what we say." },
      { title: "Professionalism", text: "Expert, certified technicians, continuous training, workmanlike results." },
      { title: "Collaboration", text: "We work with you, not just for you: listening and dialogue at every stage." },
      { title: "Transparency", text: "Clear quotes, reliable timelines, no surprises." },
      { title: "Energy efficiency", text: "Solutions that consume less and deliver more — for you and the environment." },
      { title: "Safety", text: "Compliant, certified systems — for the peace of mind of those who live with them." },
    ],
  },

  gallery: {
    heroLabel: "Gallery",
    heroTitle: { pre: "Our ", highlight: "work" },
    heroText: "A selection of systems installed in Bolzano and South Tyrol.",
    filterLabel: "Filter by category",
    filterAll: "All",
    categories: [
      { key: "split", label: "Split & multi-split" },
      { key: "canalizzato", label: "Ducted" },
      { key: "manutenzione", label: "Maintenance" },
    ],
    items: [
      { id: 1, title: "Multi-split installation — apartment", categoryKey: "split", placeholder: { from: "#1fa8dc", to: "#0b1f33" } },
      { id: 2, title: "Ducted system — office", categoryKey: "canalizzato", placeholder: { from: "#0e7bb8", to: "#10293f" } },
      { id: 5, title: "Residential split — Bolzano", categoryKey: "split", placeholder: { from: "#1fa8dc", to: "#0e7bb8" } },
      { id: 8, title: "System sanitisation — restaurant", categoryKey: "manutenzione", placeholder: { from: "#0e7bb8", to: "#0b1f33" } },
    ],
    open: "Open",
    close: "Close",
  },

  contact: {
    heroLabel: "Contact",
    heroTitle: "Let's talk about your project",
    heroText:
      "Free consultations and site surveys in Bolzano and throughout South Tyrol. Write or call us: we reply fast.",
    dataLabel: "Contact details",
    form: {
      aria: "Request a quote",
      name: "Full name",
      email: "Email",
      phone: "Phone",
      message: "Tell us what you need",
      submit: "Send request",
      privacy: "By sending, you consent to your data being used to answer your request.",
      success: "Request ready! Your email client will open to send it.",
      subjectPrefix: "Quote request",
    },
    mapsEmbed: "https://www.google.com/maps?q=Via+Toni+Ebner+9,+39100+Bolzano+BZ&output=embed",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=Via+Toni+Ebner+9+39100+Bolzano",
  },

  footer: {
    ctaLabel: "Free quote",
    ctaTitle: "We power your comfort.",
    ctaTitleMuted: "Let's talk.",
    blurb:
      "Reliability you breathe every day. Air conditioning in Bolzano and throughout South Tyrol. Official Mitsubishi Heavy Industries service centre.",
    exploreLabel: "Explore",
    contactsLabel: "Contact",
  },

  preloaderTagline: "We power your comfort",

  meta: {
    home: {
      title: "Tekno Klima — Air conditioning in Bolzano",
      description:
        "We power your comfort: air conditioning installation and service in Bolzano and South Tyrol. Official Mitsubishi Heavy Industries service centre, F-Gas certified technicians.",
    },
    climatizzazione: {
      title: "Air Conditioning — Installation in Bolzano",
      description:
        "Air conditioner installation in Bolzano: split, multi-split and ducted systems. Free site survey, F-Gas certified technicians, fast service in South Tyrol.",
    },
    galleria: {
      title: "Gallery — Air conditioning installed in Bolzano",
      description:
        "Our work: air conditioning systems installed in Bolzano and South Tyrol by Tekno Klima.",
    },
    chiSiamo: {
      title: "About Us — Tekno Klima, air conditioning in Bolzano",
      description:
        "Tekno Klima: a young, dynamic Bolzano company specialised in air conditioning. Official Mitsubishi Heavy Industries service centre. Integrity, transparency, energy efficiency.",
    },
    contatti: {
      title: "Contact — Request a quote in Bolzano",
      description:
        "Contact Tekno Klima in Bolzano: free quotes and site surveys for air conditioning. Via Toni Ebner 9, tel. +39 346 420 5357.",
    },
  },
};
