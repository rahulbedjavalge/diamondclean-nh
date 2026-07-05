export type Lang = "en" | "de";

export const SERVICE_SLUGS = [
  "hotel-housekeeping",
  "staffing",
  "restaurant-cleaning",
  "commercial-cleaning",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export const translations = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      why: "Why Us",
      process: "Process",
      contact: "Contact",
      quote: "Get Quote",
    },
    hero: {
      badge: "Premium Cleaning · Berlin",
      title: "Professional Cleaning Services in Berlin",
      subtitle: "Reliable. Professional. Detail-Oriented.",
      description:
        "We deliver spotless cleaning services for offices, apartments, commercial spaces and more.",
      quote: "Get Free Quote",
      call: "Call Now",
    },
    about: {
      tag: "About Us",
      title: "About Diamond Clean NH",
      p1: "Diamond Clean NH is committed to delivering exceptional cleaning services throughout Berlin.",
      p2: "We believe cleanliness creates healthier homes, happier workplaces and better first impressions.",
      p3: "Our experienced team combines professionalism, reliability and attention to detail to exceed customer expectations every time.",
      points: [
        { title: "Experienced Team", desc: "Trained, vetted professionals you can trust." },
        { title: "Reliable Staff", desc: "Punctual, consistent and dependable service." },
        { title: "Eco Friendly", desc: "Safe, sustainable cleaning products." },
        { title: "Customer Satisfaction", desc: "We're not done until you're delighted." },
      ],
    },
    services: {
      tag: "What We Do",
      title: "Our Cleaning Services",
      subtitle: "Premium cleaning solutions tailored to every space.",
      learnMore: "Learn more",
      items: [
        {
          title: "Hotel Housekeeping",
          desc: "Five-star room and common-area cleaning that keeps guests coming back.",
        },
        {
          title: "Staffing",
          desc: "Reliable hospitality personnel for breakfast, reception and night service.",
        },
        {
          title: "Restaurant Cleaning",
          desc: "Hygienic, compliant kitchens and dining areas your guests will trust.",
        },
        {
          title: "Commercial Cleaning",
          desc: "Dependable upkeep for offices and commercial properties of any size.",
        },
      ],
    },
    servicePages: {
      "hotel-housekeeping": {
        metaTitle: "Hotel Housekeeping in Berlin — Diamond Clean NH",
        metaDescription:
          "Professional hotel housekeeping in Berlin. Spotless guest rooms, common areas and reliable turnovers to five-star standards.",
        title: "Hotel Housekeeping",
        subtitle: "Five-star cleanliness for every guest.",
        intro:
          "We specialise in the cleaning of hotels and hospitality establishments, delivering the consistent, professional standard your guests expect.",
        paragraphs: [
          "Our trained housekeeping team handles guest rooms, bathrooms, hallways and common areas with meticulous attention to detail — so every guest walks into a spotless, welcoming space.",
          "We adapt to your occupancy and turnover schedule, ensuring fast, reliable room readiness without ever compromising on quality.",
        ],
        points: [
          "Guest room & bathroom cleaning",
          "Common areas & hallways",
          "Fast, reliable room turnovers",
          "Restocking & presentation",
          "Flexible, occupancy-based scheduling",
          "Trained, discreet housekeeping staff",
        ],
      },
      staffing: {
        metaTitle: "Hospitality Staffing in Berlin — Diamond Clean NH",
        metaDescription:
          "Reliable hospitality staffing in Berlin for breakfast service, reception and night duty. Professional, vetted personnel when you need them.",
        title: "Staffing",
        subtitle: "Professional hospitality personnel.",
        intro:
          "Beyond cleaning, we provide dependable service personnel for the breakfast, reception and night-service areas of your establishment.",
        paragraphs: [
          "Whether you need to cover peak periods, holidays or unexpected gaps, our vetted staff integrate seamlessly into your team and uphold your service standards.",
          "We offer a complete package designed to meet — and exceed — the everyday operational needs of hotels and hospitality businesses.",
        ],
        points: [
          "Breakfast service staff",
          "Reception & front-desk support",
          "Night-service personnel",
          "Cover for peaks & holidays",
          "Vetted, experienced professionals",
          "Flexible short- and long-term placement",
        ],
      },
      "restaurant-cleaning": {
        metaTitle: "Restaurant Cleaning in Berlin — Diamond Clean NH",
        metaDescription:
          "Hygienic restaurant and kitchen cleaning in Berlin. Compliant, thorough cleaning for dining areas, kitchens and back-of-house.",
        title: "Restaurant Cleaning",
        subtitle: "Hygienic, inspection-ready spaces.",
        intro:
          "We keep restaurants, kitchens and dining areas hygienic, compliant and ready to impress every guest.",
        paragraphs: [
          "Our team handles the detailed, demanding work of back-of-house and front-of-house cleaning, helping you pass inspections and maintain the highest hygiene standards.",
          "From deep kitchen cleaning to spotless dining rooms, we deliver a consistent result you can rely on, day after day.",
        ],
        points: [
          "Kitchen & back-of-house deep cleaning",
          "Dining area & seating cleaning",
          "Surface & equipment sanitisation",
          "Floors, restrooms & touchpoints",
          "Hygiene-compliant processes",
          "Flexible out-of-hours scheduling",
        ],
      },
      "commercial-cleaning": {
        metaTitle: "Commercial & Office Cleaning in Berlin — Diamond Clean NH",
        metaDescription:
          "Reliable commercial and office cleaning in Berlin. Consistent upkeep for offices and commercial properties of any size.",
        title: "Commercial Cleaning",
        subtitle: "Pristine offices & commercial spaces.",
        intro:
          "We provide reliable, professional cleaning for offices and commercial properties, keeping your workspace pristine and productive.",
        paragraphs: [
          "A clean workplace makes a strong first impression and supports a healthier, happier team. Our staff deliver consistent results tailored to your premises and schedule.",
          "From daily office upkeep to periodic deep cleans, we offer flexible plans built around the way your business works.",
        ],
        points: [
          "Office & workspace cleaning",
          "Commercial & retail premises",
          "Floors, glass & surfaces",
          "Restrooms & shared areas",
          "One-off or recurring plans",
          "Fully insured, professional team",
        ],
      },
    },
    why: {
      tag: "Why Choose Us",
      title: "The Diamond Clean Difference",
      subtitle: "Every detail handled with care and precision.",
      items: [
        "Reliable Team",
        "Flexible Scheduling",
        "Affordable Pricing",
        "Eco Friendly Products",
        "Fully Insured",
        "Professional Equipment",
        "Attention to Detail",
        "Fast Response Time",
      ],
    },
    process: {
      tag: "How It Works",
      title: "Our Simple Process",
      subtitle: "From first contact to a spotless space in four easy steps.",
      steps: [
        { title: "Contact Us", desc: "Reach out by phone, email or the quote form." },
        { title: "Free Consultation", desc: "We assess your needs and provide a clear quote." },
        { title: "Schedule Cleaning", desc: "Pick a time that works — one-off or recurring." },
        { title: "Enjoy a Spotless Space", desc: "Relax while our team delivers perfection." },
      ],
    },
    testimonials: {
      tag: "Testimonials",
      title: "What Our Clients Say",
      subtitle: "Trusted by homes and businesses across Berlin.",
      items: [
        { name: "Laura Schmidt", location: "Mitte, Berlin", review: "Absolutely flawless. Our office has never looked this good — the team is professional and thorough." },
        { name: "Marcus Weber", location: "Charlottenburg", review: "Reliable, punctual and detail-obsessed. Diamond Clean transformed our apartment for the move-out." },
        { name: "Sophie Becker", location: "Prenzlauer Berg", review: "The best cleaning service in Berlin. Eco-friendly products and a spotless finish every single time." },
        { name: "Daniel Fischer", location: "Kreuzberg", review: "Our restaurant passes every inspection thanks to their meticulous work. Highly recommended." },
        { name: "Anna Müller", location: "Friedrichshain", review: "Fast turnovers for our Airbnb and consistently five-star reviews from guests. A game changer." },
        { name: "Thomas Klein", location: "Schöneberg", review: "Friendly, trustworthy and incredibly efficient. I finally have my weekends back." },
      ],
    },
    faq: {
      tag: "FAQ",
      title: "Frequently Asked Questions",
      items: [
        { q: "What areas do you serve?", a: "We serve all districts across Berlin and the surrounding areas. If you're unsure, just ask — we're happy to confirm your location." },
        { q: "Do you bring cleaning supplies?", a: "Yes. Our team arrives fully equipped with professional-grade equipment and eco-friendly cleaning products at no extra cost." },
        { q: "How do I request a quote?", a: "Fill out the quote form on this page, call us, or send an email. We'll get back to you quickly with a clear, no-obligation quote." },
        { q: "Can I schedule recurring cleaning?", a: "Absolutely. We offer flexible one-off, weekly, bi-weekly and monthly cleaning plans tailored to your needs." },
        { q: "Are you insured?", a: "Yes, Diamond Clean NH is fully insured, so you have complete peace of mind with every clean." },
      ],
    },
    cta: {
      title: "Ready for a Spotless Space?",
      subtitle: "Request your free, no-obligation quote today and experience the Diamond Clean difference.",
      button: "Request Free Quote",
    },
    contact: {
      tag: "Get In Touch",
      title: "Contact Us",
      subtitle: "Request a free quote or ask us anything — we'll respond quickly.",
      infoTitle: "Company Details",
      owner: "Owner",
      address: "Address",
      phone: "Phone",
      email: "Email",
      hoursTitle: "Working Hours",
      hours: "Monday to Friday · 08:00 – 18:00",
      weekend: "Saturday & Sunday · Closed",
      form: {
        name: "Name",
        namePh: "Your full name",
        email: "Email",
        emailPh: "you@example.com",
        phone: "Phone",
        phonePh: "Your phone number",
        service: "Service",
        servicePh: "Select a service (optional)",
        message: "Message",
        messagePh: "Tell us about your cleaning needs…",
        submit: "Send Request",
        sending: "Sending…",
        successTitle: "Request sent!",
        success: "Thank you — we've received your request and will be in touch shortly.",
        errorTitle: "Something went wrong",
        error: "Your request couldn't be sent. Please try again or call us directly.",
        errors: {
          name: "Please enter your name.",
          email: "Please enter a valid email address.",
          phone: "Please enter a valid phone number.",
          message: "Please tell us a little about what you need.",
        },
      },
    },

    footer: {
      tagline: "Premium cleaning services for offices, homes and commercial spaces across Berlin.",
      quickLinks: "Quick Links",
      legal: "Legal",
      privacy: "Privacy Policy",
      imprint: "Imprint",
      rights: "All Rights Reserved.",
    },
    legal: {
      backHome: "Back to home",
      privacyTitle: "Privacy Policy",
      imprintTitle: "Imprint",
      lastUpdated: "Last updated",
    },
    service: {
      backToServices: "All services",
      requestQuote: "Request a quote",
      whatWeOffer: "What we offer",
      ctaTitle: "Ready to get started?",
      ctaSubtitle: "Request your free, no-obligation quote today.",
    },
  },
  de: {
    nav: {
      about: "Über uns",
      services: "Leistungen",
      why: "Warum wir",
      process: "Ablauf",
      contact: "Kontakt",
      quote: "Angebot",
    },
    hero: {
      badge: "Premium-Reinigung · Berlin",
      title: "Professionelle Reinigungsdienste in Berlin",
      subtitle: "Zuverlässig. Professionell. Detailverliebt.",
      description:
        "Wir sorgen für makellose Sauberkeit in Büros, Wohnungen, Gewerbeflächen und mehr.",
      quote: "Kostenloses Angebot",
      call: "Jetzt anrufen",
    },
    about: {
      tag: "Über uns",
      title: "Über Diamond Clean NH",
      p1: "Diamond Clean NH steht für außergewöhnliche Reinigungsdienste in ganz Berlin.",
      p2: "Wir sind überzeugt: Sauberkeit schafft gesündere Zuhause, zufriedenere Arbeitsplätze und einen besseren ersten Eindruck.",
      p3: "Unser erfahrenes Team vereint Professionalität, Zuverlässigkeit und Liebe zum Detail, um Ihre Erwartungen jedes Mal zu übertreffen.",
      points: [
        { title: "Erfahrenes Team", desc: "Geschulte, geprüfte Profis, denen Sie vertrauen können." },
        { title: "Zuverlässiges Personal", desc: "Pünktlicher, konstanter und verlässlicher Service." },
        { title: "Umweltfreundlich", desc: "Sichere, nachhaltige Reinigungsprodukte." },
        { title: "Kundenzufriedenheit", desc: "Wir hören erst auf, wenn Sie begeistert sind." },
      ],
    },
    services: {
      tag: "Unsere Leistungen",
      title: "Unsere Reinigungsdienste",
      subtitle: "Premium-Reinigungslösungen für jeden Raum.",
      learnMore: "Mehr erfahren",
      items: [
        {
          title: "Hotelreinigung",
          desc: "Fünf-Sterne-Reinigung von Zimmern und Gemeinschaftsflächen, die Gäste wiederkommen lässt.",
        },
        {
          title: "Personalbesetzung",
          desc: "Zuverlässiges Servicepersonal für Frühstück, Empfang und Nachtdienst.",
        },
        {
          title: "Restaurantreinigung",
          desc: "Hygienische, konforme Küchen und Gasträume, denen Ihre Gäste vertrauen.",
        },
        {
          title: "Gewerbereinigung",
          desc: "Zuverlässige Pflege für Büros und Gewerbeimmobilien jeder Größe.",
        },
      ],
    },
    servicePages: {
      "hotel-housekeeping": {
        metaTitle: "Hotelreinigung in Berlin — Diamond Clean NH",
        metaDescription:
          "Professionelle Hotelreinigung in Berlin. Makellose Gästezimmer, Gemeinschaftsflächen und zuverlässige Zimmerwechsel auf Fünf-Sterne-Niveau.",
        title: "Hotelreinigung",
        subtitle: "Fünf-Sterne-Sauberkeit für jeden Gast.",
        intro:
          "Wir sind auf die Reinigung von Hotels und Einrichtungen im Gastgewerbe spezialisiert und liefern den konstanten, professionellen Standard, den Ihre Gäste erwarten.",
        paragraphs: [
          "Unser geschultes Housekeeping-Team reinigt Gästezimmer, Bäder, Flure und Gemeinschaftsflächen mit größter Sorgfalt – damit jeder Gast einen makellosen, einladenden Raum betritt.",
          "Wir richten uns nach Ihrer Auslastung und Ihrem Wechselplan und sorgen für schnelle, verlässliche Zimmerbereitstellung ohne Qualitätsverlust.",
        ],
        points: [
          "Reinigung von Zimmern & Bädern",
          "Gemeinschaftsflächen & Flure",
          "Schnelle, zuverlässige Zimmerwechsel",
          "Auffüllen & Präsentation",
          "Flexible, auslastungsbasierte Planung",
          "Geschultes, diskretes Personal",
        ],
      },
      staffing: {
        metaTitle: "Personalbesetzung im Gastgewerbe in Berlin — Diamond Clean NH",
        metaDescription:
          "Zuverlässige Personalbesetzung in Berlin für Frühstücksservice, Empfang und Nachtdienst. Professionelles, geprüftes Personal, wenn Sie es brauchen.",
        title: "Personalbesetzung",
        subtitle: "Professionelles Servicepersonal.",
        intro:
          "Über die Reinigung hinaus stellen wir zuverlässiges Servicepersonal für die Bereiche Frühstück, Empfang und Nachtdienst Ihrer Einrichtung.",
        paragraphs: [
          "Ob Stoßzeiten, Feiertage oder unerwartete Ausfälle – unser geprüftes Personal fügt sich nahtlos in Ihr Team ein und wahrt Ihre Servicestandards.",
          "Wir bieten ein umfassendes Paket, das die täglichen betrieblichen Anforderungen von Hotels und Gastbetrieben erfüllt und übertrifft.",
        ],
        points: [
          "Personal für den Frühstücksservice",
          "Empfang & Front-Desk-Unterstützung",
          "Personal für den Nachtdienst",
          "Abdeckung von Spitzen & Feiertagen",
          "Geprüfte, erfahrene Fachkräfte",
          "Flexibler kurz- und langfristiger Einsatz",
        ],
      },
      "restaurant-cleaning": {
        metaTitle: "Restaurantreinigung in Berlin — Diamond Clean NH",
        metaDescription:
          "Hygienische Restaurant- und Küchenreinigung in Berlin. Konforme, gründliche Reinigung für Gasträume, Küchen und Back-of-House.",
        title: "Restaurantreinigung",
        subtitle: "Hygienische, kontrollbereite Räume.",
        intro:
          "Wir halten Restaurants, Küchen und Gasträume hygienisch, konform und bereit, jeden Gast zu beeindrucken.",
        paragraphs: [
          "Unser Team übernimmt die anspruchsvolle Detailarbeit im Back- und Front-of-House und hilft Ihnen, Kontrollen zu bestehen und höchste Hygienestandards zu wahren.",
          "Von der Küchengrundreinigung bis zum makellosen Gastraum liefern wir Tag für Tag ein verlässliches Ergebnis.",
        ],
        points: [
          "Küchen- & Back-of-House-Grundreinigung",
          "Gastraum- & Sitzbereichsreinigung",
          "Oberflächen- & Gerätehygiene",
          "Böden, Toiletten & Kontaktpunkte",
          "Hygienekonforme Prozesse",
          "Flexible Reinigung außerhalb der Öffnungszeiten",
        ],
      },
      "commercial-cleaning": {
        metaTitle: "Gewerbe- & Büroreinigung in Berlin — Diamond Clean NH",
        metaDescription:
          "Zuverlässige Gewerbe- und Büroreinigung in Berlin. Konstante Pflege für Büros und Gewerbeimmobilien jeder Größe.",
        title: "Gewerbereinigung",
        subtitle: "Makellose Büros & Gewerbeflächen.",
        intro:
          "Wir bieten zuverlässige, professionelle Reinigung für Büros und Gewerbeimmobilien und halten Ihren Arbeitsplatz makellos und produktiv.",
        paragraphs: [
          "Ein sauberer Arbeitsplatz hinterlässt einen starken ersten Eindruck und unterstützt ein gesünderes, zufriedeneres Team. Unser Personal liefert konstante Ergebnisse, abgestimmt auf Ihre Räume und Termine.",
          "Von der täglichen Büropflege bis zur regelmäßigen Grundreinigung bieten wir flexible Pläne, die zu Ihrem Betrieb passen.",
        ],
        points: [
          "Büro- & Arbeitsplatzreinigung",
          "Gewerbe- & Einzelhandelsflächen",
          "Böden, Glas & Oberflächen",
          "Toiletten & Gemeinschaftsbereiche",
          "Einmalig oder regelmäßig",
          "Vollständig versichertes, professionelles Team",
        ],
      },
    },
    why: {
      tag: "Warum wir",
      title: "Der Diamond-Clean-Unterschied",
      subtitle: "Jedes Detail mit Sorgfalt und Präzision umgesetzt.",
      items: [
        "Zuverlässiges Team",
        "Flexible Termine",
        "Faire Preise",
        "Umweltfreundliche Produkte",
        "Vollständig versichert",
        "Professionelle Ausrüstung",
        "Liebe zum Detail",
        "Schnelle Reaktionszeit",
      ],
    },
    process: {
      tag: "So funktioniert's",
      title: "Unser einfacher Ablauf",
      subtitle: "Vom ersten Kontakt bis zum makellosen Raum in vier Schritten.",
      steps: [
        { title: "Kontakt aufnehmen", desc: "Melden Sie sich per Telefon, E-Mail oder Formular." },
        { title: "Kostenlose Beratung", desc: "Wir prüfen Ihren Bedarf und erstellen ein klares Angebot." },
        { title: "Termin vereinbaren", desc: "Wählen Sie Ihren Wunschtermin – einmalig oder regelmäßig." },
        { title: "Makellosen Raum genießen", desc: "Entspannen Sie, während unser Team perfekt arbeitet." },
      ],
    },
    testimonials: {
      tag: "Referenzen",
      title: "Das sagen unsere Kunden",
      subtitle: "Vertraut von Privathaushalten und Unternehmen in ganz Berlin.",
      items: [
        { name: "Laura Schmidt", location: "Mitte, Berlin", review: "Absolut makellos. Unser Büro war noch nie so sauber – das Team ist professionell und gründlich." },
        { name: "Marcus Weber", location: "Charlottenburg", review: "Zuverlässig, pünktlich und detailversessen. Diamond Clean hat unsere Wohnung für den Auszug verwandelt." },
        { name: "Sophie Becker", location: "Prenzlauer Berg", review: "Der beste Reinigungsdienst in Berlin. Umweltfreundliche Produkte und jedes Mal ein makelloses Ergebnis." },
        { name: "Daniel Fischer", location: "Kreuzberg", review: "Unser Restaurant besteht jede Kontrolle dank ihrer sorgfältigen Arbeit. Sehr empfehlenswert." },
        { name: "Anna Müller", location: "Friedrichshain", review: "Schnelle Wechsel für unser Airbnb und durchgehend Fünf-Sterne-Bewertungen. Ein echter Gewinn." },
        { name: "Thomas Klein", location: "Schöneberg", review: "Freundlich, vertrauenswürdig und unglaublich effizient. Ich habe endlich meine Wochenenden zurück." },
      ],
    },
    faq: {
      tag: "FAQ",
      title: "Häufig gestellte Fragen",
      items: [
        { q: "Welche Gebiete decken Sie ab?", a: "Wir sind in allen Bezirken Berlins und im Umland tätig. Fragen Sie einfach nach – wir bestätigen Ihren Standort gerne." },
        { q: "Bringen Sie Reinigungsmittel mit?", a: "Ja. Unser Team kommt voll ausgestattet mit professioneller Ausrüstung und umweltfreundlichen Reinigungsmitteln – ohne Aufpreis." },
        { q: "Wie fordere ich ein Angebot an?", a: "Füllen Sie das Angebotsformular auf dieser Seite aus, rufen Sie uns an oder schreiben Sie eine E-Mail. Sie erhalten schnell ein klares, unverbindliches Angebot." },
        { q: "Kann ich eine regelmäßige Reinigung buchen?", a: "Selbstverständlich. Wir bieten flexible einmalige, wöchentliche, zweiwöchentliche und monatliche Pläne nach Ihren Wünschen." },
        { q: "Sind Sie versichert?", a: "Ja, Diamond Clean NH ist vollständig versichert – für Ihre absolute Sorgenfreiheit bei jeder Reinigung." },
      ],
    },
    cta: {
      title: "Bereit für einen makellosen Raum?",
      subtitle: "Fordern Sie noch heute Ihr kostenloses, unverbindliches Angebot an und erleben Sie den Diamond-Clean-Unterschied.",
      button: "Kostenloses Angebot",
    },
    contact: {
      tag: "Kontakt",
      title: "Kontaktieren Sie uns",
      subtitle: "Fordern Sie ein kostenloses Angebot an oder stellen Sie uns Ihre Fragen – wir antworten schnell.",
      infoTitle: "Unternehmensdaten",
      owner: "Inhaberin",
      address: "Adresse",
      phone: "Telefon",
      email: "E-Mail",
      hoursTitle: "Öffnungszeiten",
      hours: "Montag bis Freitag · 08:00 – 18:00",
      weekend: "Samstag & Sonntag · Geschlossen",
      form: {
        name: "Name",
        namePh: "Ihr vollständiger Name",
        email: "E-Mail",
        emailPh: "sie@beispiel.de",
        phone: "Telefon",
        phonePh: "Ihre Telefonnummer",
        service: "Leistung",
        servicePh: "Leistung auswählen (optional)",
        message: "Nachricht",
        messagePh: "Erzählen Sie uns von Ihrem Reinigungsbedarf…",
        submit: "Anfrage senden",
        sending: "Wird gesendet…",
        successTitle: "Anfrage gesendet!",
        success: "Vielen Dank – wir haben Ihre Anfrage erhalten und melden uns in Kürze.",
        errorTitle: "Etwas ist schiefgelaufen",
        error: "Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.",
      },
    },
    footer: {
      tagline: "Premium-Reinigungsdienste für Büros, Wohnungen und Gewerbeflächen in ganz Berlin.",
      quickLinks: "Schnellzugriff",
      legal: "Rechtliches",
      privacy: "Datenschutz",
      imprint: "Impressum",
      rights: "Alle Rechte vorbehalten.",
    },
    legal: {
      backHome: "Zurück zur Startseite",
      privacyTitle: "Datenschutzerklärung",
      imprintTitle: "Impressum",
      lastUpdated: "Zuletzt aktualisiert",
    },
    service: {
      backToServices: "Alle Leistungen",
      requestQuote: "Angebot anfordern",
      whatWeOffer: "Was wir bieten",
      ctaTitle: "Bereit loszulegen?",
      ctaSubtitle: "Fordern Sie noch heute Ihr kostenloses, unverbindliches Angebot an.",
    },
  },
};

export const COMPANY = {
  name: "Diamond Clean NH",
  owner: "Nicolle Herzog-Reishaus",
  addressLine1: "An der Villa Bolle 9A",
  addressLine2: "12557 Berlin",
  phone: "0174 6747501",
  phoneHref: "+491746747501",
  whatsapp: "491746747501",
  email: "diamondclean.nh@gmail.com",
  mapsQuery: "An der Villa Bolle 9A, 12557 Berlin",
};
