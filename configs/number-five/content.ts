/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Парти зала Number Five. Harvested 2026-08-26 from: собствения им сайт numberfivebg.com — снимки, оборудване, контакти; събрани 2026-08-27.
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export const venue = {
  slug: "number-five",
  name: "Number Five Party Hall",
  nameBg: "Парти зала Number Five",
  wordmark: {
    bg: "Number Five",
    en: "Number Five",
  },
  navMark: {
    bg: "NUMBER FIVE",
    en: "NUMBER FIVE",
  },
  logo: {
    src: "",
    w: 0,
    h: 0,
  },
  town: "Пловдив",
  type: "hall",
  venueNoun: {
    bg: "залата",
    en: "the hall",
  },
  address: "ул. „Инж. Асен Йорданов“ 29, Пловдив",
  addressEn: "29 Engineer Asen Yordanov St, Trakia, Plovdiv",
  addressStructured: {
    street: "ул. „Инж. Асен Йорданов“ 29",
    locality: "Пловдив",
  },
  phone: [
    "0888 66 43 43",
  ],
  phoneHref: "tel:+359888664343",
  phoneE164: "+359888664343",
  email: "info@numberfivebg.com",
  instagram: "",
  facebook: "",
  sameAs: [
    "https://numberfivebg.com",
  ],
  mapQuery: "Парти+зала+Number+Five+Асен+Йорданов+29+Пловдив",
  maxCapacity: 0,
  capacity: [],
  spaces: [],
  packages: [],
  packageIncludes: [
    "Билярдна маса",
    "Аудио система и караоке",
    "Парти осветление",
    "Бар с хладилни витрини и чаши",
    "Съдомиялна и кафе машина",
    "Филтрираща система за питейна вода",
    "WiFi и паркинг",
  ],
  packageAssist: "",
  whyUs: [
    "Частна зала само за вашата компания",
    "Билярд, караоке и парти осветление на място",
    "Оборудван бар с витрини, чаши и съдомиялна",
    "WiFi и паркинг",
  ],
  parking: "",
  seasonsAvailable: [
    "Пролет 2026",
    "Лято 2026",
    "Есен 2026",
    "Зима 2026",
    "Пролет 2027",
    "Лято 2027",
    "Есен 2027",
    "Зима 2027",
  ],
  reviews: [],
  handoff: [
    "Капацитет — брой места седнали и на крак",
    "Цена за наем на залата и условия",
    "Кетъринг: позволен ли е външен, или има партньор",
    "Снимки от минали събития",
    "Web3Forms access key за формата",
    "Политика за поверителност — преглед от юрист",
    "Потвърждение, че може да ползваме снимките им от numberfivebg.com",
  ],
} as const;

export type Season = "spring" | "summer" | "autumn" | "winter";

export const seasons: { key: Season; bg: string; en: string }[] = [
  { key: "spring", bg: "Пролет", en: "Spring" },
  { key: "summer", bg: "Лято", en: "Summer" },
  { key: "autumn", bg: "Есен", en: "Autumn" },
  { key: "winter", bg: "Зима", en: "Winter" },
];

export const dict = {
  bg: {
    langCode: "bg",
    otherLangHref: "/en/",
    otherLangLabel: "EN",
    inquire: "Запитване",
    call: "Обадете се",
    seasonHint: "Едно място в четири сезона. Изберете вашия.",
    scrollCue: "Разгледайте деня",
    gettingHere: "Как се стига",
    mapCta: "Вижте на картата",
    reviewsTitle: "Отзиви",
    formName: "Вашите имена",
    formContact: "Телефон или имейл",
    formSeason: "Сезон / дата",
    formSeasonPlaceholder: "Изберете сезон",
    formDateOptional: "Точна дата (по избор)",
    formGuests: "Брой гости",
    formBudget: "Ориентировъчен бюджет (лв.)",
    formBudgetHint: "Само число. Помага ни да предложим точния вариант.",
    formMessage: "Разкажете ни за вашия ден",
    formConsent: "Съгласен/на съм личните ми данни да бъдат използвани за отговор на запитването.",
    formSubmit: "Изпратете запитване",
    formPromise: "Ще Ви отговорим до 2 работни дни.",
    formSuccess: "Благодарим ви! Запитването е прието. Ще се свържем с вас до 2 работни дни.",
    formDemo: "(спец-демо: формата ще бъде активирана при предаване на сайта)",
    errRequired: "Задължително поле",
    errBudget: "Моля, въведете число",
    errContact: "Въведете валиден телефон или имейл",
    privacy: "Политика за поверителност",
    privacyHref: "/poveritelnost/",
    metaTitle: "Парти зала Number Five | Тържества в Пловдив",
    metaDescription: "Обзаведена парти зала в жк Тракия, Пловдив, с бар, аудио система, караоке и парти осветление. За рождени дни, годишнини и сватби.",
    navCity: "Пловдив",
    navSpot: "Тракия",
    navSeats: "капацитет по запитване",
    atmosphereNote: "снимките са техни собствени, от сайта им numberfivebg.com",
    chapters: [
      {
        id: "pristigane",
        label: "Пристигане",
      },
      {
        id: "ceremonia",
        label: "Церемония",
      },
      {
        id: "vecherya",
        label: "Вечеря",
      },
      {
        id: "tanci",
        label: "Танци",
      },
      {
        id: "sboguvane",
        label: "Сбогуване",
      },
    ],
    ch1Title: "Number Five. Залата идва оборудвана.",
    ch1Lead: "Денят започва с пристигането. Залата е на ул. „Инженер Асен Йорданов“ 29 в жк Тракия и е обзаведена и оборудвана изцяло.",
    ch2Title: "Церемонията",
    ch2Lead: "Домакините описват залата като стилно обзаведена, в модерен дизайн.",
    ch2Body: "Броят места не е публикуван и предстои да бъде уточнен. Залата е частна — наема се цялата, с бара, билярда и озвучаването.",
    ch3Title: "Вечерята в залата",
    ch3Lead: "Барът е с хладилни витрини и чаши, а на място има кафе машина и съдомиялна.",
    ch4Title: "Вечерта продължава",
    ch4Lead: "Аудио системата, караокето и парти осветлението са на място.",
    ch4Body: "Резервация се прави на 0888 66 43 43 или на info@numberfivebg.com.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Отговаряме лично на всяко запитване.",
    gettingHereRows: [
      [
        "Адрес",
        "ул. „Инж. Асен Йорданов“ 29, Пловдив",
      ],
      [
        "Телефон",
        "0888 66 43 43",
      ],
      [
        "Е-мейл",
        "info@numberfivebg.com",
      ],
    ],
    whyTitle: "Защо младоженците избират Парти зала Number Five",
    packagesTitle: "Какво има в залата",
    packagesLead: "Number Five не публикува цена за наем. Показано е оборудването, което сами изброяват. Опишете повода си във формата и ще получите оферта.",
    includesTitle: "На разположение за деня",
    reviewsLead: "Отзивите на гостите предстои да бъдат събрани и публикувани със съгласието на домакините.",
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Парти зала Number Five.",
    footerRights: "Парти зала Number Five · Пловдив",
    capacityStats: [
      {
        value: "Частна",
        label: "залата е само за вас",
      },
      {
        value: "Билярд",
        label: "и караоке на място",
      },
      {
        value: "Бар",
        label: "оборудван, в залата",
      },
    ],
  },
  en: {
    langCode: "en",
    otherLangHref: "/",
    otherLangLabel: "BG",
    inquire: "Enquire",
    call: "Call us",
    seasonHint: "One place in four seasons. Choose yours.",
    scrollCue: "Walk through the day",
    gettingHere: "Getting here",
    mapCta: "See it on the map",
    reviewsTitle: "Reviews",
    formName: "Your names",
    formContact: "Phone or email",
    formSeason: "Season / date",
    formSeasonPlaceholder: "Choose a season",
    formDateOptional: "Exact date (optional)",
    formGuests: "Number of guests",
    formBudget: "Approximate budget (BGN)",
    formBudgetHint: "A number only. It helps us propose the right option.",
    formMessage: "Tell us about your day",
    formConsent: "I agree my personal data may be used to answer this enquiry.",
    formSubmit: "Send enquiry",
    formPromise: "We reply within 2 working days.",
    formSuccess: "Thank you. Your enquiry has been received. We will be in touch within 2 working days.",
    formDemo: "(spec demo: the form is activated on handover)",
    errRequired: "Required field",
    errBudget: "Please enter a number",
    errContact: "Enter a valid phone or email",
    privacy: "Privacy policy",
    privacyHref: "/en/privacy/",
    metaTitle: "Number Five Party Hall | Celebrations in Plovdiv",
    metaDescription: "A furnished party hall in Trakia, Plovdiv, with a bar, an audio system, karaoke and party lighting. For birthdays, anniversaries and weddings.",
    navCity: "Plovdiv",
    navSpot: "Trakia",
    navSeats: "capacity on request",
    atmosphereNote: "the photographs are their own, from their site numberfivebg.com",
    chapters: [
      {
        id: "pristigane",
        label: "Arrival",
      },
      {
        id: "ceremonia",
        label: "Ceremony",
      },
      {
        id: "vecherya",
        label: "Dinner",
      },
      {
        id: "tanci",
        label: "Dancing",
      },
      {
        id: "sboguvane",
        label: "Farewell",
      },
    ],
    ch1Title: "Number Five. The hall arrives equipped.",
    ch1Lead: "The day begins with the arrival. The hall is at 29 Engineer Asen Yordanov Street in Trakia and comes furnished and equipped throughout.",
    ch2Title: "The ceremony",
    ch2Lead: "The hosts describe the hall as stylishly furnished, in a modern design.",
    ch2Body: "The number of seats is not published and is still to be confirmed. The hall is private — you rent the whole of it, with the bar, the billiards and the sound system.",
    ch3Title: "Dinner in the hall",
    ch3Lead: "The bar has refrigerated displays and glassware, and there is a coffee machine and a dishwasher on site.",
    ch4Title: "The evening goes on",
    ch4Lead: "The audio system, the karaoke and the party lighting are all on site.",
    ch4Body: "Booking is on 0888 66 43 43 or at info@numberfivebg.com.",
    ch5Title: "The farewell is a beginning",
    ch5Lead: "Tell us about your day: season, guest count, approximate budget. Every enquiry gets a personal reply.",
    gettingHereRows: [
      [
        "Address",
        "29 Inzh. Asen Yordanov St, Plovdiv",
      ],
      [
        "Phone",
        "0888 66 43 43",
      ],
      [
        "E-mail",
        "info@numberfivebg.com",
      ],
    ],
    whyTitle: "Why couples choose Number Five Party Hall",
    packagesTitle: "What the hall comes with",
    packagesLead: "Number Five publishes no rental price. What appears here is the equipment they list themselves. Describe your occasion in the form for an offer.",
    includesTitle: "Available for the day",
    reviewsLead: "Guest reviews are still to be collected and published with the hosts' consent.",
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Number Five Party Hall website.",
    footerRights: "Number Five Party Hall · Plovdiv",
    capacityStats: [
      {
        value: "Private",
        label: "the hall is yours alone",
      },
      {
        value: "Billiards",
        label: "and karaoke on site",
      },
      {
        value: "A bar",
        label: "fitted, in the hall",
      },
    ],
  },
} as const;

export type Lang = keyof typeof dict;

export const seasonNamesEn: Record<Season, string> = {
  spring: "Spring", summer: "Summer", autumn: "Autumn", winter: "Winter",
};

export const packageNamesEn: Record<string, string> = {};

export const packageIncludesEn = [
  "A billiards table",
  "An audio system and karaoke",
  "Party lighting",
  "A bar with fridges and glassware",
  "A dishwasher and a coffee machine",
  "A drinking-water filter system",
  "WiFi and parking",
];

export const packageAssistEn =
  "";

export const whyUsEn = [
  "A private hall just for your party",
  "Billiards, karaoke and party lighting on site",
  "A fitted bar with fridges, glassware and a dishwasher",
  "WiFi and parking",
];

export const gettingHereNote =
  "Залата е на ул. „Инженер Асен Йорданов“ 29 в жк Тракия, Пловдив.";
