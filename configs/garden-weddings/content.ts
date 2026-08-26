/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Garden Weddings. Harvested 2026-08-26 from: Google Business профила им (нямат сайт и нямат страница в социалните мрежи).
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export const venue = {
  slug: "garden-weddings",
  name: "Garden Weddings",
  nameBg: "Garden Weddings",
  wordmark: {
    bg: "Garden Weddings",
    en: "Garden Weddings",
  },
  navMark: {
    bg: "GARDEN WEDDINGS",
    en: "GARDEN WEDDINGS",
  },
  logo: {
    src: "",
    w: 0,
    h: 0,
  },
  town: "Марково",
  type: "garden",
  venueNoun: {
    bg: "градината",
    en: "the garden",
  },
  address: "Парк, с. Марково, община Родопи",
  addressEn: "The park, Markovo, Rodopi municipality",
  addressStructured: {
    street: "Парк, с. Марково",
    locality: "Марково",
  },
  phone: [
    "089 996 5338",
  ],
  phoneHref: "tel:+359899965338",
  phoneE164: "+359899965338",
  email: "",
  instagram: "",
  facebook: "",
  sameAs: [],
  mapQuery: "Garden+Weddings+Марково+Пловдив",
  maxCapacity: 0,
  capacity: [],
  spaces: [],
  packages: [],
  packageIncludes: [
    "Място за събития в парка на село Марково",
    "Извън Пловдив, в полите на Родопите",
    "Работно време от 10 до 20 часа",
    "Дати се уговарят по телефон",
  ],
  packageAssist: "",
  whyUs: [
    "Градинско място за сватби извън града",
    "В парка на Марково, в полите на Родопите",
    "На кратко разстояние от Пловдив",
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
    "Снимки на градината и на минали сватби (реални фото-слотове)",
    "Капацитет: брой места седнали, коктейл и на открито",
    "Меню и куверт",
    "Web3Forms access key за формата за запитване",
    "Имейл адрес за контакт",
    "Текст за политика за поверителност — преглед от юрист",
    "Точен адрес и ориентир в парка на Марково",
    "Дали има закрита част при лошо време",
    "Facebook или Instagram страница, ако имат",
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
    metaTitle: "Garden Weddings | Сватби в градина край Пловдив",
    metaDescription: "Място за сватбени тържества в парка на село Марково, в полите на Родопите, на кратко разстояние от Пловдив.",
    navCity: "Марково",
    navSpot: "Марково",
    navSeats: "капацитет по запитване",
    atmosphereNote: "атмосферни визуализации, предстои добавяне на снимки на градината",
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
    ch1Title: "Garden Weddings. Денят минава на открито.",
    ch1Lead: "Денят започва с пристигането. Мястото е в парка на село Марково, южно от Пловдив, там където равнината опира в Родопите.",
    ch2Title: "Церемонията",
    ch2Lead: "Мястото е обявено за събития и носи името си от градината.",
    ch2Body: "Подробности за размерите и за броя места не са публикувани никъде. Ще бъдат добавени, след като бъдат предоставени от домакините.",
    ch3Title: "Вечерята на открито",
    ch3Lead: "Тържествата се провеждат в парка, на открито.",
    ch4Title: "Вечерта продължава",
    ch4Lead: "Мястото работи от десет сутринта до осем вечерта.",
    ch4Body: "Дати се уговарят по телефон. Домакините нямат сайт, така че разговорът е единственият начин да се провери свободна дата.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Отговаряме лично на всяко запитване.",
    gettingHereRows: [
      [
        "Адрес",
        "Парк, с. Марково, община Родопи",
      ],
      [
        "Разстояние",
        "южно от Пловдив, в полите на Родопите",
      ],
      [
        "Телефон",
        "089 996 5338",
      ],
    ],
    whyTitle: "Защо младоженците избират Garden Weddings",
    packagesTitle: "Какво се знае за мястото",
    packagesLead: "Garden Weddings не публикува куверт и пакети. Показано е само това, което самите те съобщават. Опишете тържеството си във формата и ще получите оферта.",
    includesTitle: "На разположение за деня",
    reviewsLead: "Garden Weddings няма публикувани отзиви, които да бъдат проверени. Разделът остава празен, докато не бъдат предоставени истински.",
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Garden Weddings.",
    footerRights: "Garden Weddings · Марково",
    capacityStats: [
      {
        value: "Градина",
        label: "мястото на деня",
      },
      {
        value: "Марково",
        label: "в полите на Родопите",
      },
      {
        value: "10 до 20",
        label: "работно време",
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
    metaTitle: "Garden Weddings | Garden weddings near Plovdiv",
    metaDescription: "A venue for wedding celebrations in the park at Markovo, at the foot of the Rhodopes, a short drive from Plovdiv.",
    navCity: "Markovo",
    navSpot: "Markovo",
    navSeats: "capacity on request",
    atmosphereNote: "atmospheric visualisations, photographs of the garden to be added",
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
    ch1Title: "Garden Weddings. The day is spent outdoors.",
    ch1Lead: "The day begins with the arrival. The place sits in the park at Markovo, south of Plovdiv, where the plain meets the Rhodopes.",
    ch2Title: "The ceremony",
    ch2Lead: "The place is listed for events and takes its name from the garden.",
    ch2Body: "Details of its size and its number of seats are not published anywhere. They will be added once the hosts provide them.",
    ch3Title: "Dinner in the open",
    ch3Lead: "Celebrations are held in the park, in the open air.",
    ch4Title: "The evening goes on",
    ch4Lead: "The place is open from ten in the morning until eight in the evening.",
    ch4Body: "Dates are arranged by telephone. The hosts have no website, so a call is the only way to check whether a date is free.",
    ch5Title: "The farewell is a beginning",
    ch5Lead: "Tell us about your day: season, guest count, approximate budget. Every enquiry gets a personal reply.",
    gettingHereRows: [
      [
        "Address",
        "The park, Markovo, Rodopi municipality",
      ],
      [
        "Distance",
        "south of Plovdiv, at the foot of the Rhodopes",
      ],
      [
        "Phone",
        "089 996 5338",
      ],
    ],
    whyTitle: "Why couples choose Garden Weddings",
    packagesTitle: "What is known about the place",
    packagesLead: "Garden Weddings publishes no per-head price or packages. Only what they state themselves appears here. Describe your celebration in the form and you will receive an offer.",
    includesTitle: "Available for the day",
    reviewsLead: "Garden Weddings has no verifiable published reviews. This section stays empty until real ones are supplied.",
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Garden Weddings website.",
    footerRights: "Garden Weddings · Markovo",
    capacityStats: [
      {
        value: "Garden",
        label: "where the day happens",
      },
      {
        value: "Markovo",
        label: "at the foot of the Rhodopes",
      },
      {
        value: "10 to 20",
        label: "opening hours",
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
  "An event venue in the park at Markovo",
  "Outside Plovdiv, at the foot of the Rhodopes",
  "Open from 10 in the morning until 8 in the evening",
  "Dates are arranged by telephone",
];

export const packageAssistEn =
  "";

export const whyUsEn = [
  "A garden venue for weddings outside the city",
  "In the park at Markovo, at the foot of the Rhodopes",
  "A short drive from Plovdiv",
];

export const gettingHereNote =
  "Мястото е в парка на село Марково, южно от Пловдив.";
