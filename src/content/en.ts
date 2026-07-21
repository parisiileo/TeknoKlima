import type { Content } from "./types";

/** TEKNO KLIMA — English content. */
export const en: Content = {
  site: {
    name: "Tekno Klima",
    payoffPrimary: "We power your comfort",
    payoffSecondary: "Reliability you breathe every day.",
    phone: "346 420 5357",
    phoneHref: "tel:+393464205357",
    email: "info@teknoklima.bz.it",
    emailHref: "mailto:info@teknoklima.bz.it",
    address: "Viale Druso 107, 39100 Bolzano (BZ), Italy",
    instagram: "@teknoklima.bz",
    instagramHref: "https://www.instagram.com/teknoklima.bz",
    vat: "VAT 00000000000", // [PLACEHOLDER]
    city: "Bolzano",
    region: "South Tyrol",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Air Conditioning", href: "/climatizzazione" },
    { label: "Electrical Systems", href: "/impianti-elettrici" },
    { label: "Lighting", href: "/illuminazione" },
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
    label: "Technical systems — Bolzano / South Tyrol",
    line1: "We power",
    line2Pre: "your ",
    line2Highlight: "comfort",
    lead: "Reliability you breathe every day. Air conditioning, electrical systems and lighting in Bolzano and throughout South Tyrol.",
    ctaServices: "Our services",
    scroll: "Scroll",
  },

  servicesSection: {
    label: "What we do",
    title: { pre: "Three specialties, one standard: ", highlight: "done right", post: "." },
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
    {
      slug: "impianti-elettrici",
      num: "02",
      title: "Electrical Systems",
      short: "Residential and industrial electrical systems — safe and innovative, for homes and businesses.",
      heroTitle: "Safe energy, for home and business",
      heroText:
        "We build residential and industrial electrical systems — safe and innovative, for homes and companies. Every project is followed from the first consultation to after-sales support.",
      features: [
        {
          title: "Residential systems",
          text: "Electrical systems for homes: safety, functionality and readiness for tomorrow's technology.",
        },
        {
          title: "Industrial systems",
          text: "Solutions for companies and production facilities, engineered for reliability and continuity.",
        },
        {
          title: "Safety first",
          text: "Code-compliant work with certified materials and careful testing of every installation.",
        },
        {
          title: "Free consultation and site survey",
          text: "We find the best solution together, with a clear, transparent quote.",
        },
      ],
      process: [
        { title: "Needs analysis", text: "Free site survey and a careful ear for your requirements." },
        { title: "Design", text: "A safe, efficient and expandable system layout." },
        { title: "Installation", text: "Workmanlike installation — fast and punctual." },
        { title: "Testing and support", text: "Final inspection and ongoing assistance." },
      ],
    },
    {
      slug: "illuminazione",
      num: "03",
      title: "Lighting",
      short: "Custom lighting solutions for every space.",
      heroTitle: "The right light, for every space",
      heroText:
        "We design custom lighting solutions for every environment: functional, scenic and efficient light that brings out the best in your spaces.",
      features: [
        {
          title: "Tailor-made lighting",
          text: "Every space is different: we design the ideal lighting solution for homes, offices and shops.",
        },
        {
          title: "Energy efficiency",
          text: "LED technology and consumption-conscious design: more light, less waste.",
        },
        {
          title: "Enhancing your spaces",
          text: "Light as a design element: accents, scenes and moods that transform rooms.",
        },
        {
          title: "Integrated with your wiring",
          text: "Lighting perfectly integrated with the electrical system, for a clean, reliable result.",
        },
      ],
      process: [
        { title: "Survey and listening", text: "We learn how you live your spaces and what you want to highlight." },
        { title: "Lighting design", text: "Fixtures, colour temperatures and scenes, carefully planned." },
        { title: "Installation", text: "Precise, clean fitting, integrated with the electrical system." },
        { title: "Fine tuning", text: "Final adjustment of scenes and intensity — exactly how you want it." },
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
        subtitle: "Authorised Service Centre",
        text: "We are an authorised Mitsubishi Heavy Industries service centre: expertise certified directly by the manufacturer.",
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
    { value: 98, suffix: "%", label: "Satisfied clients" },
    { value: 24, suffix: "h", label: "Average response time" },
    { value: 100, suffix: "%", label: "Free site surveys" },
  ],

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
      "Tekno Klima was born from passion and experience in the field of technical systems, with the goal of offering reliable, modern solutions.",
      "We are a young, dynamic company with solid technical skills and a constant focus on quality. We work mainly in Bolzano and throughout South Tyrol: air conditioning, residential and industrial electrical systems, custom lighting and ongoing assistance.",
      "We follow every project from the first consultation to after-sales support — because comfort isn't a moment: it's every day.",
    ],
    whereLabel: "Where we work",
    whereTitle: "Bolzano and all of South Tyrol",
    whereText:
      "Based at Viale Druso 107, 39100 Bolzano (BZ). Fast, punctual call-outs; free consultations and site surveys.",
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
      { key: "clima", label: "Air Conditioning" },
      { key: "elettrico", label: "Electrical Systems" },
      { key: "luce", label: "Lighting" },
    ],
    items: [
      { id: 1, title: "Multi-split installation — apartment", categoryKey: "clima", placeholder: { from: "#1fa8dc", to: "#0b1f33" } },
      { id: 2, title: "Ducted system — office", categoryKey: "clima", placeholder: { from: "#0e7bb8", to: "#10293f" } },
      { id: 3, title: "Electrical panel — company", categoryKey: "elettrico", placeholder: { from: "#ff7a3d", to: "#0b1f33" } },
      { id: 4, title: "LED lighting — shop", categoryKey: "luce", placeholder: { from: "#e85d1f", to: "#10293f" } },
      { id: 5, title: "Residential split — Bolzano", categoryKey: "clima", placeholder: { from: "#1fa8dc", to: "#0e7bb8" } },
      { id: 6, title: "Residential wiring — new build", categoryKey: "elettrico", placeholder: { from: "#4a6178", to: "#0b1f33" } },
      { id: 7, title: "Accent lighting — living room", categoryKey: "luce", placeholder: { from: "#ff7a3d", to: "#e85d1f" } },
      { id: 8, title: "System sanitisation — restaurant", categoryKey: "clima", placeholder: { from: "#0e7bb8", to: "#0b1f33" } },
      { id: 9, title: "Outdoor lighting — terrace", categoryKey: "luce", placeholder: { from: "#10293f", to: "#1fa8dc" } },
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
    mapsEmbed: "https://www.google.com/maps?q=Viale+Druso+107,+39100+Bolzano+BZ&output=embed",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=Viale+Druso+107+39100+Bolzano",
  },

  footer: {
    ctaLabel: "Free quote",
    ctaTitle: "We power your comfort.",
    ctaTitleMuted: "Let's talk.",
    blurb:
      "Reliability you breathe every day. Air conditioning, electrical systems and lighting in Bolzano and throughout South Tyrol.",
    exploreLabel: "Explore",
    contactsLabel: "Contact",
  },

  preloaderTagline: "We power your comfort",

  meta: {
    home: {
      title: "Tekno Klima — Air conditioning and electrical systems in Bolzano",
      description:
        "We power your comfort: air conditioning, electrical systems and lighting in Bolzano and South Tyrol. Free site surveys, F-Gas certified technicians.",
    },
    climatizzazione: {
      title: "Air Conditioning — Installation in Bolzano",
      description:
        "Air conditioner installation in Bolzano: split, multi-split and ducted systems. Free site survey, F-Gas certified technicians, fast service in South Tyrol.",
    },
    impiantiElettrici: {
      title: "Residential and industrial electrical systems in Bolzano",
      description:
        "Residential and industrial electrical systems in Bolzano and South Tyrol: safe, innovative, code-compliant. Free consultation and survey, transparent quotes.",
    },
    illuminazione: {
      title: "Custom lighting in Bolzano",
      description:
        "Custom lighting solutions for homes, offices and shops in Bolzano: lighting design, high-efficiency LED, integrated installation.",
    },
    galleria: {
      title: "Gallery — Systems installed in Bolzano",
      description:
        "Our work: air conditioning, electrical systems and lighting installed in Bolzano and South Tyrol by Tekno Klima.",
    },
    chiSiamo: {
      title: "About Us — Tekno Klima, technical systems in Bolzano",
      description:
        "Tekno Klima: a young, dynamic Bolzano company specialised in air conditioning, electrical systems and lighting. Integrity, transparency, energy efficiency.",
    },
    contatti: {
      title: "Contact — Request a quote in Bolzano",
      description:
        "Contact Tekno Klima in Bolzano: free quotes and site surveys for air conditioning, electrical systems and lighting. Viale Druso 107, tel. +39 346 420 5357.",
    },
  },
};
