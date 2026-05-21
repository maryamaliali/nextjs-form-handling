import type { Locale } from "./config";

export const dictionaries = {
  en: {
    brand: "MSA Driving School",
    city: "Nottingham",
    meta: {
      siteName: "MSA Driving School Nottingham",
      defaultDescription:
        "DVSA-approved driving lessons in Nottingham. Manual and automatic tuition, intensive courses, test preparation, and Pass Plus. Book with confidence.",
    },
    nav: {
      home: "Home",
      services: "Services",
      packages: "Packages",
      about: "About",
      contact: "Contact",
      book: "Book a lesson",
    },
    footer: {
      tagline: "Professional driving instruction helping learners in Nottingham pass with confidence.",
      quickLinks: "Quick links",
      contact: "Contact",
      socialTitle: "Social",
      rights: "All rights reserved.",
      dvsa: "DVSA approved instructor",
    },
    home: {
      badge: "DVSA approved — Nottingham",
      titleLine1: "Drive with",
      titleLine2: "confidence.",
      intro:
        "Expert, patient instruction to get you test-ready. Learn at your pace — morning, evening, or weekends.",
      ctaBook: "Book a lesson",
      ctaWhatsApp: "WhatsApp us",
      explore: {
        title: "Where to next?",
        subtitle:
          "We split content across clear pages — less scrolling, faster answers.",
        cards: [
          {
            title: "Services",
            description: "Lesson types and what you can expect.",
            path: "/services",
            icon: "car" as const,
          },
          {
            title: "Packages",
            description: "Bundles and indicative pricing.",
            path: "/packages",
            icon: "tag" as const,
          },
          {
            title: "About",
            description: "Our approach, milestones, and story.",
            path: "/about",
            icon: "user" as const,
          },
          {
            title: "Contact",
            description: "Call, WhatsApp, form, and map.",
            path: "/contact",
            icon: "map" as const,
          },
        ],
      },
      stats: {
        title: "Results that speak for themselves",
        subtitle:
          "Trusted instruction across Nottingham — from first lesson to test day.",
        totalPassed: {
          label: "Total passed",
          description:
            "Learners who have passed their driving test with our instruction across Nottingham and the surrounding area.",
        },
        highlights: {
          pass: {
            label: "First-time pass rate",
            description:
              "Structured lesson plans and calm test-day preparation help many pupils pass on their first attempt.",
          },
          years: {
            label: "Years of experience",
            description:
              "Over a decade of DVSA-approved tuition tailored to Nottingham roads and local test routes.",
          },
          rating: {
            label: "Average rating",
            description:
              "Consistently strong feedback from pupils and parents for patience, clear guidance, and results.",
          },
        },
      },
      offerTitle: "Our driving lessons",
      services: {
        beginner: {
          title: "Beginner lessons",
          body: "Start from zero — patient guidance through every control and manoeuvre, building confidence before busy roads.",
        },
        intensive: {
          title: "Intensive courses",
          body: "Need your licence fast? Compact learning into days, ideal when you have a test date in sight.",
        },
        refresher: {
          title: "Refresher lessons",
          body: "Already licensed but lost confidence? Rebuild skills and road awareness at your own pace.",
        },
        testPrep: {
          title: "Test preparation",
          body: "Mock tests and targeted training on routes and manoeuvres used at Nottingham DVSA test centres.",
        },
        passPlus: {
          title: "Pass Plus",
          body: "Six modules of advanced driving — motorways, night driving, rural roads — for safer driving after you pass.",
        },
        flexible: {
          title: "Flexible scheduling",
          body: "Morning, afternoon, evening or weekend — book when it suits you, with easy WhatsApp rescheduling.",
        },
      },
      whyTitle: "Learn from the best.",
      whyIntro:
        "Every lesson is tailored to you. Whether it is your first time behind the wheel or you are brushing up after years away, we meet you where you are.",
      whyPoints: [
        "DVSA-approved, fully qualified instructor",
        "Dual-control vehicle for your safety",
        "Flexible morning, evening & weekend slots",
        "Structured lesson plans with clear progress",
        "Competitive pricing with no hidden fees",
        "Easy booking via call, email or WhatsApp",
      ],
      reviewsTitle: "What pupils say",
      customersTitle: "Customer responses",
      customersSubtitle:
        "Auto-rotating cards — pause by hovering or focusing the carousel.",
      sliderPrev: "Previous testimonial",
      sliderNext: "Next testimonial",
      sliderDotLabel: "Show testimonial",
      sliderLive: "Showing testimonial {n} of {total}",
      reviews: [
        {
          tag: "First-time pass",
          initials: "SM",
          quote:
            "Passed first time! The instructor was incredibly calm and patient. I was a nervous wreck at the start but felt genuinely ready by test day.",
          name: "Sarah M.",
        },
        {
          tag: "Clear explanations",
          initials: "JK",
          quote:
            "Brilliant instructor — explains everything clearly and adapts to how you learn. WhatsApp communication made booking a breeze.",
          name: "James K.",
        },
        {
          tag: "Intensive course",
          initials: "PR",
          quote:
            "Did an intensive course and passed within 3 weeks. Could not have asked for a better experience. Highly recommended for Nottingham learners.",
          name: "Priya R.",
        },
        {
          tag: "Confidence rebuilt",
          initials: "TW",
          quote:
            "I avoided roundabouts for years. After a short refresher plan, I finally feel in control — the mock test routes were spot on.",
          name: "Tom W.",
        },
        {
          tag: "Automatic licence",
          initials: "HL",
          quote:
            "Patient, structured lessons and no pressure. I passed with only two minors and actually enjoyed learning to drive.",
          name: "Hannah L.",
        },
        {
          tag: "Student-friendly",
          initials: "OA",
          quote:
            "Lessons around my uni timetable, honest feedback every week, and a calm approach on test day. Worth every penny.",
          name: "Omar A.",
        },
      ],
      successStory: {
        badge: "Success story",
        title: "From first lesson to test-ready — without the stress spiral.",
        name: "Alex T.",
        initials: "AT",
        tagline: "Intensive manual course · Nottingham",
        body: "Alex started as a complete beginner with tight deadlines for work. We built a structured weekly plan, added focused mock tests on realistic routes, and used short debriefs after every lesson so progress stayed visible. The result: a confident drive on test day — not just a pass.",
        statLabel: "Test result",
        statValue: "Pass — 2 minors",
        highlight:
          "Weekly mock routes, calm briefings, and a plan that matched real life commitments.",
      },
      achievements: {
        title: "Achievements & milestones",
        subtitle: "Targets we aim for with every learner — backed by structured training.",
        items: [
          {
            title: "97% first-time pass rate",
            body: "Strong preparation, mock tests, and route awareness before you book the real thing.",
          },
          {
            title: "500+ pupils passed",
            body: "Years of Nottingham-focused instruction across manual and automatic tuition.",
          },
          {
            title: "10+ years experience",
            body: "Deep familiarity with local DVSA centres, manoeuvres, and examiner expectations.",
          },
          {
            title: "5★ average rating",
            body: "Consistent communication, punctuality, and lessons paced to your confidence level.",
          },
        ],
      },
      packages: {
        title: "Lesson packages",
        subtitle: "Popular bundles — confirm the latest price when you book.",
        disclaimer:
          "Indicative pricing only; your quote may vary by vehicle type, lesson length, and availability.",
        popular: "Most popular",
        choose: "Enquire now",
        benefitsTitle: "What's included",
        lessonsLabel: "Lessons",
        scheduleLabel: "Schedule",
        items: [
          {
            name: "Starter",
            description:
              "Build confidence from your first lesson — core skills and steady progress at your pace.",
            price: "From £XXX",
            priceUnit: "/block",
            billing: "6 × 1.5 hour lessons",
            highlightLessons: "6",
            highlightSchedule: "1.5 hr",
            features: [
              "Ideal for complete beginners",
              "Core controls & junction routines",
              "Progress check-ins each lesson",
            ],
            popular: false,
          },
          {
            name: "Test-ready",
            description:
              "A structured route to test standard — mock tests, feedback, and local route practice.",
            price: "From £XXX",
            priceUnit: "/block",
            billing: "20 × 1.5 hour lessons",
            highlightLessons: "20",
            highlightSchedule: "1.5 hr",
            features: [
              "Structured plan to reach test standard",
              "Mock tests + feedback reports",
              "Route training around Nottingham centres",
            ],
            popular: true,
          },
          {
            name: "Intensive",
            description:
              "Fast-track when you can practise often — flexible hours packed into 1–3 weeks.",
            price: "From £XXX",
            priceUnit: "/course",
            billing: "Custom hours over 1–3 weeks",
            highlightLessons: "Flexible",
            highlightSchedule: "1–3 weeks",
            features: [
              "Fast-track scheduling where possible",
              "Daily or near-daily sessions",
              "Focused test preparation",
            ],
            popular: false,
          },
        ],
      },
      map: {
        title: "Locations & coverage",
        subtitle: "Serving Nottingham and surrounding areas — pickup points agreed when you book.",
        note: "Map shows Nottingham, UK — lesson pickup is arranged directly with your instructor.",
        iframeTitle: "Nottingham map",
      },
      finalCtaTitle: "Ready to start driving?",
      finalCtaBody: "Book your first lesson today. Spaces fill up fast — secure yours now.",
      finalCtaOnline: "Book online",
      finalCtaCall: "Call now",
    },
    servicesPage: {
      title: "Driving lessons & courses",
      subtitle:
        "From first lesson to test day and beyond — structured tuition that fits your goals and schedule.",
      listLabel: "Services list",
      includedTitle: "What every pupil gets",
      included: [
        "Clear learning objectives each lesson",
        "Progress notes and next-step focus",
        "Calm, supportive teaching style",
        "Dual-control car for safe practice",
      ],
      packagesBanner: "Need a bundle instead of pay-as-you-go?",
      packagesLink: "View packages",
      faq: {
        title: "Frequently asked questions",
        subtitle: "Common questions about our lessons.",
        items: [
          {
            question: "Do you teach manual and automatic?",
            answer:
              "Yes — we offer both. Tell us your preference when you book so we match you with the right vehicle.",
          },
          {
            question: "How long is a standard lesson?",
            answer:
              "Most pupils book 1.5-hour sessions. Shorter or longer slots can be discussed based on your progress and concentration.",
          },
          {
            question: "Can you help with the Nottingham test routes?",
            answer:
              "Absolutely. Test preparation includes mock tests and practice on routes and manoeuvres used at local DVSA centres.",
          },
          {
            question: "What if I need to cancel?",
            answer:
              "Contact us as early as possible by phone or WhatsApp. We will do our best to reschedule without losing your progress.",
          },
        ],
      },
    },
    packagesPage: {
      title: "Lesson packages",
      subtitle:
        "Starter, test-ready, and intensive bundles — confirm the latest price when you book.",
      comparison: {
        title: "Compare packages",
        subtitle: "See how each bundle differs — figures are indicative; we confirm your quote when you book.",
        columnFeature: "Feature",
        columns: {
          starter: "Starter",
          testReady: "Test-ready",
          intensive: "Intensive",
        },
        included: "Included",
        notIncluded: "Not included",
        rows: [
          {
            feature: "Total lesson time",
            starter: "9 hours",
            testReady: "30 hours",
            intensive: "Custom",
          },
          {
            feature: "Typical duration",
            starter: "4–8 weeks",
            testReady: "8–16 weeks",
            intensive: "1–3 weeks",
          },
          {
            feature: "Mock test practice",
            starter: "no",
            testReady: "yes",
            intensive: "yes",
          },
          {
            feature: "Daily / near-daily slots",
            starter: "no",
            testReady: "no",
            intensive: "yes",
          },
          {
            feature: "Best for",
            starter: "Beginners",
            testReady: "Test preparation",
            intensive: "Fast-track learners",
          },
        ],
      },
      faq: {
        title: "Package FAQ",
        subtitle: "Pricing and booking questions.",
        items: [
          {
            question: "Are prices on the website final?",
            answer:
              "Figures are indicative. Your quote depends on vehicle type, lesson length, and availability — we confirm before you commit.",
          },
          {
            question: "Can I switch packages later?",
            answer:
              "Yes. If your needs change, we adjust the plan and explain any difference in hours or cost before you continue.",
          },
          {
            question: "Is the intensive package right for me?",
            answer:
              "Intensive works best when you can practise frequently and may already have a test date. We will advise honestly during enquiry.",
          },
          {
            question: "How do I pay?",
            answer:
              "Payment terms are agreed when you book — contact us for current options and any block-booking discounts.",
          },
        ],
      },
    },
    aboutPage: {
      title: "About MSA Driving School",
      subtitle: "Nottingham-based instruction with a pupil-first approach.",
      instructor: {
        name: "MSA Instructor",
        role: "DVSA-approved · Manual & automatic",
        initials: "MS",
        blurb:
          "One consistent instructor — clear feedback every lesson, not a rotating call-centre team.",
      },
      achievementsHeading: "Milestones",
      successHeading: "Success story",
      p1: "MSA Driving School Nottingham exists to make learning to drive straightforward, calm, and effective. Lessons are planned around your pace — not a one-size-fits-all syllabus rushed to a deadline.",
      p2: "Whether you prefer little-and-often practice or an intensive course, you will get honest feedback, realistic mock tests, and routes that reflect real DVSA conditions in Nottingham.",
      listTitle: "What we believe",
      beliefs: [
        "Confidence comes from clarity — we explain the why, not just the how.",
        "Safety is non-negotiable — dual controls and defensive habits from day one.",
        "Communication matters — easy reach by phone, email, or WhatsApp.",
      ],
      faq: {
        title: "About us — FAQ",
        subtitle: "Who we are and how we work.",
        items: [
          {
            question: "Are you DVSA approved?",
            answer:
              "Yes. Instruction is delivered by a DVSA-approved, fully qualified driving instructor.",
          },
          {
            question: "Will I have the same instructor every time?",
            answer:
              "Yes — one consistent instructor so your progress and learning style stay aligned.",
          },
          {
            question: "Which areas do you cover?",
            answer:
              "We serve Nottingham and surrounding areas. Pickup points are agreed when you book.",
          },
          {
            question: "How soon can I start?",
            answer:
              "Availability varies — contact us with your preferred days and we will offer the next suitable slot.",
          },
        ],
      },
    },
    contactPage: {
      title: "Contact & enquiries",
      subtitle: "Ask about availability, lesson packages, or intensive courses. We reply as soon as we can.",
      phoneLabel: "Phone",
      emailLabel: "Email",
      whatsappLabel: "WhatsApp",
      whatsappCta: "Message on WhatsApp",
      formTitle: "Send a message",
      formName: "Name",
      formEmail: "Email",
      formPhone: "Phone (optional)",
      formMessage: "Message",
      formSubmit: "Send enquiry",
      formSending: "Sending…",
      formSuccess: "Thank you — we have received your message and will get back to you shortly.",
      formError: "Something went wrong. Please try again or call us directly.",
      faq: {
        title: "Booking FAQ",
        subtitle: "Getting in touch and what happens next.",
        items: [
          {
            question: "How quickly will you reply?",
            answer:
              "We aim to respond as soon as possible — often the same day on weekdays. Urgent enquiries: call or WhatsApp.",
          },
          {
            question: "What should I include in my message?",
            answer:
              "Your name, contact number, whether you want manual or automatic, and any preferred days or times.",
          },
          {
            question: "Can I book by phone only?",
            answer:
              "Yes. Call, email, WhatsApp, or the form on this page — whichever suits you.",
          },
          {
            question: "Where do lessons start?",
            answer:
              "Pickup is arranged in Nottingham when you book. See the map below for our coverage area.",
          },
        ],
      },
    },
    notFoundPage: {
      code: "404",
      title: "Wrong turn",
      subtitle: "This page does not exist or may have moved.",
      back: "Go back",
      home: "Back to home",
    },
    common: {
      manualAuto: "Manual & automatic",
      allAreas: "All areas of Nottingham",
      readMore: "Read more",
      learnMore: "Learn more",
      readAbout: "Read our story",
    },
  },
  pl: {
    brand: "Szkoła jazdy MSA",
    city: "Nottingham",
    meta: {
      siteName: "Szkoła jazdy MSA Nottingham",
      defaultDescription:
        "Zatwierdzone przez DVSA lekcje jazdy w Nottingham. Kursy na manual i automat, kursy intensywne, przygotowanie do egzaminu i Pass Plus.",
    },
    nav: {
      home: "Strona główna",
      services: "Usługi",
      packages: "Pakiety",
      about: "O nas",
      contact: "Kontakt",
      book: "Umów jazdę",
    },
    footer: {
      tagline:
        "Profesjonalna nauka jazdy, która pomaga kursantom w Nottingham zdać egzamin z pewnością siebie.",
      quickLinks: "Na skróty",
      contact: "Kontakt",
      socialTitle: "Social media",
      rights: "Wszelkie prawa zastrzeżone.",
      dvsa: "Instruktor zatwierdzony przez DVSA",
    },
    home: {
      badge: "Zatwierdzone przez DVSA — Nottingham",
      titleLine1: "Jedź z",
      titleLine2: "pewnością.",
      intro:
        "Cierpliwa, profesjonalna nauka przygotowująca do egzaminu. Tempo dopasowane do Ciebie — rano, wieczorem lub w weekendy.",
      ctaBook: "Umów jazdę",
      ctaWhatsApp: "Napisz na WhatsApp",
      explore: {
        title: "Dokąd dalej?",
        subtitle:
          "Treść podzielona na osobne strony — mniej przewijania, szybsze odpowiedzi.",
        cards: [
          {
            title: "Usługi",
            description: "Rodzaje lekcji i czego się spodziewać.",
            path: "/services",
            icon: "car" as const,
          },
          {
            title: "Pakiety",
            description: "Zestawy i orientacyjne ceny.",
            path: "/packages",
            icon: "tag" as const,
          },
          {
            title: "O nas",
            description: "Podejście, kamienie milowe, historia.",
            path: "/about",
            icon: "user" as const,
          },
          {
            title: "Kontakt",
            description: "Telefon, WhatsApp, formularz i mapa.",
            path: "/contact",
            icon: "map" as const,
          },
        ],
      },
      stats: {
        title: "Wyniki, które mówią same za siebie",
        subtitle:
          "Zaufana nauka w Nottingham — od pierwszej jazdy po egzamin.",
        totalPassed: {
          label: "Łącznie zdanych",
          description:
            "Kursanci, którzy zdali egzamin na prawo jazdy pod naszą opieką w Nottingham i okolicach.",
        },
        highlights: {
          pass: {
            label: "Zdawalność za pierwszym razem",
            description:
              "Przemyślany plan lekcji i spokojne przygotowanie do egzaminu pomagają wielu zdać za pierwszym podejściem.",
          },
          years: {
            label: "Lat doświadczenia",
            description:
              "Ponad dekadę nauki z instruktorem zatwierdzonym przez DVSA, dopasowaną do dróg i tras egzaminacyjnych w Nottingham.",
          },
          rating: {
            label: "Średnia ocena",
            description:
              "Stałe, pozytywne opinie kursantów i rodziców za cierpliwość, jasne wskazówki i skuteczność.",
          },
        },
      },
      offerTitle: "Nasze lekcje jazdy",
      services: {
        beginner: {
          title: "Lekcje dla początkujących",
          body: "Start od zera — spokojne wprowadzenie do każdej manewru i elementów pojazdu, zanim wyjedziesz na ruchliwe drogi.",
        },
        intensive: {
          title: "Kursy intensywne",
          body: "Potrzebujesz prawa jazdy szybko? Skondensowana nauka w kilka dni — idealnie, gdy masz już termin egzaminu.",
        },
        refresher: {
          title: "Jazdy doskonalące",
          body: "Masz prawo jazdy, ale brak pewności? Odbudujemy umiejętności i świadomość na drodze w Twoim tempie.",
        },
        testPrep: {
          title: "Przygotowanie do egzaminu",
          body: "Jazdy próbne i trening na trasach i manewrach z ośrodków egzaminacyjnych DVSA w Nottingham.",
        },
        passPlus: {
          title: "Pass Plus",
          body: "Sześć modułów zaawansowanej jazdy — autostrady, noc, drogi wiejskie — dla bezpieczniejszej jazdy po zdaniu.",
        },
        flexible: {
          title: "Elastyczny harmonogram",
          body: "Rano, po południu, wieczór lub weekend — umówisz się, kiedy Ci pasuje, z łatwą zmianą terminu przez WhatsApp.",
        },
      },
      whyTitle: "Ucz się z najlepszymi.",
      whyIntro:
        "Każda jazda jest dopasowana do Ciebie. Niezależnie, czy pierwszy raz trzymasz kierownicę, czy wracasz po latach — zaczynamy od Twojego poziomu.",
      whyPoints: [
        "Instruktor zatwierdzony przez DVSA, pełne kwalifikacje",
        "Pojazd z podwójnymi pedałami dla bezpieczeństwa",
        "Elastyczne terminy: rano, wieczór, weekendy",
        "Uporządkowany plan lekcji i widoczny postęp",
        "Konkurencyjne ceny bez ukrytych opłat",
        "Kontakt: telefon, e-mail lub WhatsApp",
      ],
      reviewsTitle: "Opinie kursantów",
      customersTitle: "Opinie klientów",
      customersSubtitle:
        "Automatyczna karuzela — wstrzymaj, najeżdżając kursorem lub ustawiając fokus.",
      sliderPrev: "Poprzednia opinia",
      sliderNext: "Następna opinia",
      sliderDotLabel: "Pokaż opinię",
      sliderLive: "Opinia {n} z {total}",
      reviews: [
        {
          tag: "Za pierwszym razem",
          initials: "SM",
          quote:
            "Zdałam za pierwszym razem! Instruktor był spokojny i cierpliwy. Na początku się bałam, a na egzamin czułam się naprawdę gotowa.",
          name: "Sarah M.",
        },
        {
          tag: "Jasne wyjaśnienia",
          initials: "JK",
          quote:
            "Świetny instruktor — wszystko jasno tłumaczy i dostosowuje się do sposobu nauki. Umawianie przez WhatsApp było bezproblemowe.",
          name: "James K.",
        },
        {
          tag: "Kurs intensywny",
          initials: "PR",
          quote:
            "Kurs intensywny i zdanie w 3 tygodnie. Nie mogłabym prosić o lepsze doświadczenie. Polecam każdemu w Nottingham.",
          name: "Priya R.",
        },
        {
          tag: "Odbudowa pewności",
          initials: "TW",
          quote:
            "Unikałem rond latami. Po krótkim planie doskonalącym w końcu czuję kontrolę — trasy próbne były trafione.",
          name: "Tom W.",
        },
        {
          tag: "Prawo jazdy na automat",
          initials: "HL",
          quote:
            "Cierpliwe, uporządkowane lekcje bez presji. Zdałem z dwoma drobnymi błędami i naprawdę polubiłem naukę jazdy.",
          name: "Hannah L.",
        },
        {
          tag: "Dla studentów",
          initials: "OA",
          quote:
            "Jazdy pod plan zajęć na uczelni, szczery feedback co tydzień i spokój w dniu egzaminu. Warte każdego funta.",
          name: "Omar A.",
        },
      ],
      successStory: {
        badge: "Historia sukcesu",
        title: "Od pierwszej jazdy do gotowości na egzamin — bez spirali stresu.",
        name: "Alex T.",
        initials: "AT",
        tagline: "Intensywny kurs na manual · Nottingham",
        body: "Alex zaczynał od zera i miał napięty harmonogram pracy. Ułożyliśmy tygodniowy plan, dodaliśmy skupione jazdy próbne na realistycznych trasach i krótkie podsumowania po każdej lekcji, by postęp był widoczny. Efekt: pewna jazda w dniu egzaminu — nie tylko zdany test.",
        statLabel: "Wynik egzaminu",
        statValue: "Zdanie — 2 drobne błędy",
        highlight:
          "Cotygodniowe trasy próbne, spokojne omówienia i plan dopasowany do życia codziennego.",
      },
      achievements: {
        title: "Osiągnięcia i kamienie milowe",
        subtitle: "Cele, do których dążymy z każdym kursantem — poparte strukturalną nauką.",
        items: [
          {
            title: "97% zdawalności za pierwszym razem",
            body: "Solidne przygotowanie, jazdy próbne i znajomość tras przed zapisem na prawdziwy egzamin.",
          },
          {
            title: "500+ zdanych kursantów",
            body: "Lata nauki w Nottingham na manual i automat.",
          },
          {
            title: "10+ lat doświadczenia",
            body: "Dobra znajomość lokalnych ośrodków DVSA, manewrów i oczekiwań egzaminatorów.",
          },
          {
            title: "Średnia ocena 5★",
            body: "Stały kontakt, punktualność i tempo dopasowane do Twojej pewności siebie.",
          },
        ],
      },
      packages: {
        title: "Pakiety lekcji",
        subtitle: "Popularne zestawy — aktualną cenę potwierdzisz przy rezerwacji.",
        disclaimer:
          "Ceny orientacyjne; wycena może się różnić w zależności od auta, długości jazdy i dostępności.",
        popular: "Najczęściej wybierany",
        choose: "Zapytaj o termin",
        benefitsTitle: "Co obejmuje pakiet",
        lessonsLabel: "Lekcje",
        scheduleLabel: "Harmonogram",
        items: [
          {
            name: "Start",
            description:
              "Pewność od pierwszej jazdy — podstawy i stały postęp w Twoim tempie.",
            price: "Od £XXX",
            priceUnit: "/pakiet",
            billing: "6 × 1,5 godziny",
            highlightLessons: "6",
            highlightSchedule: "1,5 h",
            features: [
              "Dla zupełnych początkujących",
              "Podstawy i skrzyżowania",
              "Podsumowania postępu co lekcję",
            ],
            popular: false,
          },
          {
            name: "Gotowość do egzaminu",
            description:
              "Plan do poziomu egzaminu — jazdy próbne, feedback i trasy w okolicy.",
            price: "Od £XXX",
            priceUnit: "/pakiet",
            billing: "20 × 1,5 godziny",
            highlightLessons: "20",
            highlightSchedule: "1,5 h",
            features: [
              "Plan do poziomu egzaminacyjnego",
              "Jazdy próbne + informacja zwrotna",
              "Trasy wokół ośrodków w Nottingham",
            ],
            popular: true,
          },
          {
            name: "Intensywny",
            description:
              "Szybka ścieżka przy częstych jazdach — elastyczne godziny w 1–3 tygodnie.",
            price: "Od £XXX",
            priceUnit: "/kurs",
            billing: "Elastyczne godziny w 1–3 tygodnie",
            highlightLessons: "Elastycznie",
            highlightSchedule: "1–3 tygodnie",
            features: [
              "Możliwie częstsze terminy",
              "Jazdy prawie codziennie",
              "Skupienie na egzaminie",
            ],
            popular: false,
          },
        ],
      },
      map: {
        title: "Lokalizacje i zasięg",
        subtitle: "Nottingham i okolice — miejsce odbioru ustalamy przy rezerwacji.",
        note: "Mapa pokazuje Nottingham, UK — szczegóły odbioru omawiasz bezpośrednio z instruktorem.",
        iframeTitle: "Mapa Nottingham",
      },
      finalCtaTitle: "Gotowy, by zacząć?",
      finalCtaBody: "Umów pierwszą jazdę już dziś. Miejsca znikają szybko — zarezerwuj swój termin.",
      finalCtaOnline: "Umów online",
      finalCtaCall: "Zadzwoń",
    },
    servicesPage: {
      title: "Lekcje jazdy i kursy",
      subtitle:
        "Od pierwszej jazdy po egzamin i dalej — nauka dopasowana do celów i grafiku.",
      listLabel: "Lista usług",
      includedTitle: "Co otrzymuje każdy kursant",
      included: [
        "Jasne cele na każdą lekcję",
        "Notatki z postępem i kolejnymi krokami",
        "Spokojny, wspierający styl nauczania",
        "Samochód z podwójnymi pedałami",
      ],
      packagesBanner: "Wolisz pakiet zamiast pojedynczych jazd?",
      packagesLink: "Zobacz pakiety",
      faq: {
        title: "Często zadawane pytania",
        subtitle: "Najczęstsze pytania o lekcje.",
        items: [
          {
            question: "Uczycie na manual i automat?",
            answer:
              "Tak — oba. Podaj preferencję przy rezerwacji, dopasujemy odpowiedni samochód.",
          },
          {
            question: "Jak długo trwa standardowa lekcja?",
            answer:
              "Większość kursantów wybiera 1,5 godziny. Krótsze lub dłuższe jazdy omawiamy indywidualnie.",
          },
          {
            question: "Czy pomagacie w trasach egzaminacyjnych w Nottingham?",
            answer:
              "Tak. Przygotowanie obejmuje jazdy próbne i trening na trasach i manewrach z lokalnych ośrodków DVSA.",
          },
          {
            question: "Co jeśli muszę odwołać jazdę?",
            answer:
              "Skontaktuj się jak najwcześniej telefonicznie lub przez WhatsApp — postaramy się przełożyć termin.",
          },
        ],
      },
    },
    packagesPage: {
      title: "Pakiety lekcji",
      subtitle:
        "Start, gotowość do egzaminu i kurs intensywny — potwierdź cenę przy rezerwacji.",
      comparison: {
        title: "Porównanie pakietów",
        subtitle:
          "Zobacz różnice między pakietami — ceny orientacyjne; potwierdzamy wycenę przy rezerwacji.",
        columnFeature: "Cecha",
        columns: {
          starter: "Start",
          testReady: "Gotowość do egzaminu",
          intensive: "Intensywny",
        },
        included: "W pakiecie",
        notIncluded: "Brak",
        rows: [
          {
            feature: "Łączny czas jazd",
            starter: "9 godzin",
            testReady: "30 godzin",
            intensive: "Elastycznie",
          },
          {
            feature: "Typowy czas trwania",
            starter: "4–8 tygodni",
            testReady: "8–16 tygodni",
            intensive: "1–3 tygodnie",
          },
          {
            feature: "Jazdy próbne",
            starter: "no",
            testReady: "yes",
            intensive: "yes",
          },
          {
            feature: "Codzienne / prawie codzienne terminy",
            starter: "no",
            testReady: "no",
            intensive: "yes",
          },
          {
            feature: "Najlepszy dla",
            starter: "Początkujących",
            testReady: "Przygotowania do egzaminu",
            intensive: "Szybkiej nauki",
          },
        ],
      },
      faq: {
        title: "FAQ — pakiety",
        subtitle: "Pytania o ceny i rezerwację.",
        items: [
          {
            question: "Czy ceny na stronie są ostateczne?",
            answer:
              "To ceny orientacyjne. Wycena zależy od auta, długości jazdy i dostępności — potwierdzamy przed rezerwacją.",
          },
          {
            question: "Czy mogę zmienić pakiet w trakcie nauki?",
            answer:
              "Tak. Dostosujemy plan i wyjaśnimy różnicę w godzinach lub kosztach przed kontynuacją.",
          },
          {
            question: "Czy kurs intensywny jest dla mnie?",
            answer:
              "Sprawdza się, gdy możesz jeździć często i często masz już termin egzaminu. Doradzimy szczerze przy zapytaniu.",
          },
          {
            question: "Jak można zapłacić?",
            answer:
              "Warunki płatności ustalamy przy rezerwacji — zapytaj o aktualne opcje i zniżki za blok jazd.",
          },
        ],
      },
    },
    aboutPage: {
      title: "O szkole jazdy MSA",
      subtitle: "Nauka w Nottingham z naciskiem na kursanta.",
      instructor: {
        name: "Instruktor MSA",
        role: "Zatwierdzony przez DVSA · Manual i automat",
        initials: "MS",
        blurb:
          "Jeden stały instruktor — jasny feedback po każdej jeździe, bez rotacji jak w call centerze.",
      },
      achievementsHeading: "Kamienie milowe",
      successHeading: "Historia sukcesu",
      p1: "MSA Driving School Nottingham ma sprawić, by nauka jazdy była spokojna, przejrzysta i skuteczna. Plan lekcji uwzględnia Twoje tempo — bez sztampowego programu na siłę.",
      p2: "Niezależnie, czy wolisz krótsze jazdy regularnie, czy kurs intensywny, dostaniesz szczery feedback, realistyczne próby i trasy zbliżone do warunków DVSA w Nottingham.",
      listTitle: "Nasze zasady",
      beliefs: [
        "Pewność wynika ze zrozumienia — tłumaczymy dlaczego, nie tylko jak.",
        "Bezpieczeństwo jest priorytetem — podwójne pedały i nawyki defensywne od pierwszej jazdy.",
        "Kontakt się liczy — telefon, e-mail lub WhatsApp.",
      ],
      faq: {
        title: "O nas — FAQ",
        subtitle: "Kim jesteśmy i jak pracujemy.",
        items: [
          {
            question: "Czy jesteście zatwierdzeni przez DVSA?",
            answer:
              "Tak. Naukę prowadzi instruktor z pełnymi kwalifikacjami i zatwierdzeniem DVSA.",
          },
          {
            question: "Czy będę miał tego samego instruktora?",
            answer:
              "Tak — jeden stały instruktor, spójny postęp i styl nauki.",
          },
          {
            question: "Jaki obszar obejmujecie?",
            answer:
              "Nottingham i okolice. Miejsce odbioru ustalamy przy rezerwacji.",
          },
          {
            question: "Kiedy mogę zacząć?",
            answer:
              "Zależy od wolnych terminów — napisz preferowane dni, zaproponujemy najbliższy slot.",
          },
        ],
      },
    },
    contactPage: {
      title: "Kontakt i zapytania",
      subtitle:
        "Zapytaj o wolne terminy, pakiety lekcji lub kurs intensywny. Odpowiadamy tak szybko, jak to możliwe.",
      phoneLabel: "Telefon",
      emailLabel: "E-mail",
      whatsappLabel: "WhatsApp",
      whatsappCta: "Napisz na WhatsApp",
      formTitle: "Wyślij wiadomość",
      formName: "Imię i nazwisko",
      formEmail: "E-mail",
      formPhone: "Telefon (opcjonalnie)",
      formMessage: "Wiadomość",
      formSubmit: "Wyślij zapytanie",
      formSending: "Wysyłanie…",
      formSuccess: "Dziękujemy — otrzymaliśmy wiadomość i wkrótce się odezwiemy.",
      formError: "Coś poszło nie tak. Spróbuj ponownie lub zadzwoń bezpośrednio.",
      faq: {
        title: "FAQ — kontakt",
        subtitle: "Kontakt i kolejne kroki.",
        items: [
          {
            question: "Jak szybko odpowiadacie?",
            answer:
              "Staramy się odpowiadać jak najszybciej — często tego samego dnia w dni robocze. Pilne sprawy: telefon lub WhatsApp.",
          },
          {
            question: "Co wpisać w wiadomości?",
            answer:
              "Imię, telefon, manual lub automat oraz preferowane dni lub godziny.",
          },
          {
            question: "Czy mogę zarezerwować tylko telefonicznie?",
            answer:
              "Tak. Telefon, e-mail, WhatsApp lub formularz na tej stronie.",
          },
          {
            question: "Skąd zaczynają się lekcje?",
            answer:
              "Odbiór w Nottingham — ustalamy przy rezerwacji. Mapę zasięgu zobaczysz poniżej.",
          },
        ],
      },
    },
    notFoundPage: {
      code: "404",
      title: "Zły skręt",
      subtitle: "Ta strona nie istnieje lub została przeniesiona.",
      back: "Wróć",
      home: "Strona główna",
    },
    common: {
      manualAuto: "Manual i automat",
      allAreas: "Całe Nottingham",
      readMore: "Czytaj więcej",
      learnMore: "Dowiedz się więcej",
      readAbout: "Poznaj naszą historię",
    },
  },
};

export type Dictionary = (typeof dictionaries)[Locale];

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale];
}
