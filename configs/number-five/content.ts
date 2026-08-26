/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Парти зала Number Five. Harvested 2026-08-26 from: собствения им сайт numberfivebg.com и Google Business профила.
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
  address: "ул. „Инженер Асен Йорданов“ 29, жк Тракия, Пловдив",
  addressEn: "29 Engineer Asen Yordanov St, Trakia, Plovdiv",
  addressStructured: {
    street: "ул. „Инженер Асен Йорданов“ 29",
    locality: "Пловдив",
  },
  phone: [] as string[],
  phoneHref: "",
  phoneE164: "",
  email: "",
  instagram: "",
  facebook: "",
  sameAs: [],
  mapQuery: "Парти+зала+Number+Five+Асен+Йорданов+29+Пловдив",
  maxCapacity: 0,
  capacity: [],
  spaces: [],
  packages: [],
  packageIncludes: [
    "Стилно обзаведена зала в модерен дизайн",
    "Бар с хладилни витрини и чаши",
    "Аудио система и караоке",
    "Парти осветление",
    "Билярд маса",
    "Кафе машина и съдомиялна",
    "Водна филтрация",
    "Санитарни помещения",
  ],
  packageAssist: "",
  whyUs: [
    "Залата е обзаведена и оборудвана изцяло",
    "Бар, аудио система и осветление на място",
    "4.5 от отзивите в Google",
    "Сами обявяват, че поемат и сватбени тържества",
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
    "Снимки на залата и на минали сватби (реални фото-слотове)",
    "Капацитет: брой места седнали, коктейл и на открито",
    "Меню и куверт",
    "Web3Forms access key за формата за запитване",
    "Имейл адрес за контакт",
    "Текст за политика за поверителност — преглед от юрист",
    "ТЕЛЕФОН ЗА ВРЪЗКА — настоящият им сайт не съдържа телефон, адрес или имейл",
    "Капацитет на залата и брой места",
    "Меню и куверт, ако предлагат кетъринг",
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
    atmosphereNote: "атмосферни визуализации, предстои добавяне на снимки на залата",
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
    ch2Body: "Подробности за капацитета и за броя места не са публикувани никъде. Ще бъдат добавени, след като бъдат предоставени от домакините.",
    ch3Title: "Вечерята в залата",
    ch3Lead: "Барът е с хладилни витрини и чаши, а на място има кафе машина и съдомиялна.",
    ch4Title: "Вечерта продължава",
    ch4Lead: "Аудио системата, караокето и парти осветлението са на място.",
    ch4Body: "Домакините обявяват залата за рождени дни, годишнини и сватби. Настоящият им сайт не съдържа нито телефон, нито адрес, така че връзката минава през посещение на място.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Отговаряме лично на всяко запитване.",
    gettingHereRows: [
      [
        "Адрес",
        "ул. „Инженер Асен Йорданов“ 29, жк Тракия",
      ],
      [
        "Район",
        "Тракия икономическа зона, Пловдив",
      ],
      [
        "Забележка",
        "телефон не е публикуван в сайта им",
      ],
    ],
    whyTitle: "Защо младоженците избират Парти зала Number Five",
    packagesTitle: "Какво се знае за мястото",
    packagesLead: "Парти зала Number Five не публикува куверт и пакети. Показано е само това, което самите те съобщават. Опишете тържеството си във формата и ще получите оферта.",
    includesTitle: "На разположение за деня",
    reviewsLead: "Парти зала Number Five няма публикувани отзиви, които да бъдат проверени. Разделът остава празен, докато не бъдат предоставени истински.",
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Парти зала Number Five.",
    footerRights: "Парти зала Number Five · Пловдив",
    capacityStats: [
      {
        value: "4.5",
        count: 4.5,
        label: "от отзивите в Google",
      },
      {
        value: "Бар",
        label: "на място в залата",
      },
      {
        value: "Караоке",
        label: "и парти осветление",
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
    atmosphereNote: "atmospheric visualisations, photographs of the hall to be added",
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
    ch2Body: "Details of the capacity and the number of seats are not published anywhere. They will be added once the hosts provide them.",
    ch3Title: "Dinner in the hall",
    ch3Lead: "The bar has refrigerated displays and glassware, and there is a coffee machine and a dishwasher on site.",
    ch4Title: "The evening goes on",
    ch4Lead: "The audio system, the karaoke and the party lighting are all on site.",
    ch4Body: "The hosts offer the hall for birthdays, anniversaries and weddings. Their current website carries neither a telephone number nor an address, so contact means calling in person.",
    ch5Title: "The farewell is a beginning",
    ch5Lead: "Tell us about your day: season, guest count, approximate budget. Every enquiry gets a personal reply.",
    gettingHereRows: [
      [
        "Address",
        "29 Engineer Asen Yordanov St, Trakia",
      ],
      [
        "District",
        "Trakia economic zone, Plovdiv",
      ],
      [
        "Note",
        "no telephone is published on their site",
      ],
    ],
    whyTitle: "Why couples choose Number Five Party Hall",
    packagesTitle: "What is known about the place",
    packagesLead: "Number Five Party Hall publishes no per-head price or packages. Only what they state themselves appears here. Describe your celebration in the form and you will receive an offer.",
    includesTitle: "Available for the day",
    reviewsLead: "Number Five Party Hall has no verifiable published reviews. This section stays empty until real ones are supplied.",
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Number Five Party Hall website.",
    footerRights: "Number Five Party Hall · Plovdiv",
    capacityStats: [
      {
        value: "4.5",
        count: 4.5,
        label: "from its Google reviews",
      },
      {
        value: "A bar",
        label: "on site in the hall",
      },
      {
        value: "Karaoke",
        label: "and party lighting",
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
  "A stylishly furnished hall in a modern design",
  "A bar with refrigerated displays and glassware",
  "An audio system and karaoke",
  "Party lighting",
  "A billiard table",
  "A coffee machine and a dishwasher",
  "Water filtration",
  "Sanitary facilities",
];

export const packageAssistEn =
  "";

export const whyUsEn = [
  "The hall is furnished and equipped throughout",
  "A bar, an audio system and lighting on site",
  "4.5 from its Google reviews",
  "They state themselves that they take on weddings too",
];

export const gettingHereNote =
  "Залата е на ул. „Инженер Асен Йорданов“ 29 в жк Тракия, Пловдив.";
