/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Ресторант-градина „Атлантик“. Harvested 2026-08-26 from: Google Business профила им (нямат сайт) | заглавна снимка от публичната им Facebook страница (https://www.facebook.com/p/ресторант-АТЛАНТИК-100059594988269/), 2026-08-27.
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export const venue = {
  slug: "atlantik",
  name: "Atlantik Garden Restaurant",
  nameBg: "Ресторант-градина „Атлантик“",
  wordmark: {
    bg: "Атлантик",
    en: "Atlantik",
  },
  navMark: {
    bg: "РЕСТОРАНТ АТЛАНТИК",
    en: "ATLANTIK",
  },
  logo: {
    src: "",
    w: 0,
    h: 0,
  },
  town: "Първенец",
  type: "garden",
  venueNoun: {
    bg: "градината",
    en: "the garden",
  },
  address: "ул. „Съединение“ 43, с. Първенец",
  addressEn: "43 Saedinenie Street, Parvenets",
  addressStructured: {
    street: "ул. „Съединение“ 43",
    locality: "Първенец",
  },
  phone: [
    "088 772 1412",
  ],
  phoneHref: "tel:+359887721412",
  phoneE164: "+359887721412",
  email: "",
  instagram: "",
  facebook: "",
  sameAs: [],
  mapQuery: "Ресторант+градина+Атлантик+Първенец+Пловдив",
  maxCapacity: 0,
  capacity: [],
  spaces: [],
  packages: [],
  packageIncludes: [
    "Ресторант с градина в село Първенец",
    "Извън Пловдив, в подножието на Родопите",
    "Дати се уговарят по телефон",
  ],
  packageAssist: "",
  whyUs: [
    "Ресторант с градина извън града",
    "4.4 от отзивите в Google",
    "В Първенец, на кратко разстояние от Пловдив",
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
    "Капацитет на градината и на закритата част",
    "Меню и куверт",
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
    metaTitle: "Ресторант-градина „Атлантик“ | Сватби в Първенец",
    metaDescription: "Ресторант с градина в село Първенец край Пловдив. Запитване за дата на 088 772 1412.",
    navCity: "Първенец",
    navSpot: "Първенец",
    navSeats: "капацитет по запитване",
    atmosphereNote: "заглавната снимка е тяхна собствена, от страницата им във Facebook",
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
    ch1Title: "Атлантик. Денят минава в градината.",
    ch1Lead: "Денят започва с пристигането. Ресторантът е на ул. „Съединение“ 43 в село Първенец, южно от Пловдив, в подножието на Родопите.",
    ch2Title: "Церемонията",
    ch2Lead: "Ресторантът носи градината в самото си име.",
    ch2Body: "Подробности за капацитета и за броя места не са публикувани никъде. Ще бъдат добавени, след като бъдат предоставени от домакините.",
    ch3Title: "Вечерята в градината",
    ch3Lead: "Гостите се хранят в ресторанта и в градината около него.",
    ch4Title: "Вечерта продължава",
    ch4Lead: "Гостите дават на ресторанта 4.4 в Google.",
    ch4Body: "Домакините нямат сайт, така че телефонът е единственият начин да се провери свободна дата.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Отговаряме лично на всяко запитване.",
    gettingHereRows: [
      [
        "Адрес",
        "ул. „Съединение“ 43, с. Първенец",
      ],
      [
        "Разстояние",
        "южно от Пловдив, в подножието на Родопите",
      ],
      [
        "Телефон",
        "088 772 1412",
      ],
    ],
    whyTitle: "Защо младоженците избират Ресторант-градина „Атлантик“",
    packagesTitle: "Какво се знае за мястото",
    packagesLead: "Ресторант-градина „Атлантик“ не публикува куверт и пакети. Показано е само това, което самите те съобщават. Опишете тържеството си във формата и ще получите оферта.",
    includesTitle: "На разположение за деня",
    reviewsLead: "Ресторант-градина „Атлантик“ няма публикувани отзиви, които да бъдат проверени. Разделът остава празен, докато не бъдат предоставени истински.",
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Ресторант-градина „Атлантик“.",
    footerRights: "Ресторант-градина „Атлантик“ · Първенец",
    capacityStats: [
      {
        value: "4.4",
        count: 4.4,
        label: "от отзивите в Google",
      },
      {
        value: "Градина",
        label: "мястото на деня",
      },
      {
        value: "Първенец",
        label: "извън Пловдив",
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
    metaTitle: "Atlantik Garden Restaurant | Weddings in Parvenets",
    metaDescription: "A restaurant with a garden in Parvenets near Plovdiv. Enquire about a date on 088 772 1412.",
    navCity: "Parvenets",
    navSpot: "Parvenets",
    navSeats: "capacity on request",
    atmosphereNote: "the header photograph is their own, from their Facebook page",
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
    ch1Title: "Atlantik. The day is spent in the garden.",
    ch1Lead: "The day begins with the arrival. The restaurant is at 43 Saedinenie Street in Parvenets, south of Plovdiv, at the foot of the Rhodopes.",
    ch2Title: "The ceremony",
    ch2Lead: "The restaurant carries the garden in its very name.",
    ch2Body: "Details of its capacity and its number of seats are not published anywhere. They will be added once the hosts provide them.",
    ch3Title: "Dinner in the garden",
    ch3Lead: "Guests dine in the restaurant and in the garden around it.",
    ch4Title: "The evening goes on",
    ch4Lead: "Guests rate the restaurant 4.4 on Google.",
    ch4Body: "The hosts have no website, so the telephone is the only way to check whether a date is free.",
    ch5Title: "The farewell is a beginning",
    ch5Lead: "Tell us about your day: season, guest count, approximate budget. Every enquiry gets a personal reply.",
    gettingHereRows: [
      [
        "Address",
        "43 Saedinenie St, Parvenets",
      ],
      [
        "Distance",
        "south of Plovdiv, at the foot of the Rhodopes",
      ],
      [
        "Phone",
        "088 772 1412",
      ],
    ],
    whyTitle: "Why couples choose Atlantik Garden Restaurant",
    packagesTitle: "What is known about the place",
    packagesLead: "Atlantik Garden Restaurant publishes no per-head price or packages. Only what they state themselves appears here. Describe your celebration in the form and you will receive an offer.",
    includesTitle: "Available for the day",
    reviewsLead: "Atlantik Garden Restaurant has no verifiable published reviews. This section stays empty until real ones are supplied.",
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Atlantik Garden Restaurant website.",
    footerRights: "Atlantik Garden Restaurant · Parvenets",
    capacityStats: [
      {
        value: "4.4",
        count: 4.4,
        label: "from its Google reviews",
      },
      {
        value: "Garden",
        label: "where the day happens",
      },
      {
        value: "Parvenets",
        label: "outside Plovdiv",
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
  "A restaurant with a garden in the village of Parvenets",
  "Outside Plovdiv, at the foot of the Rhodopes",
  "Dates are arranged by telephone",
];

export const packageAssistEn =
  "";

export const whyUsEn = [
  "A restaurant with a garden outside the city",
  "4.4 from its Google reviews",
  "In Parvenets, a short drive from Plovdiv",
];

export const gettingHereNote =
  "Ресторантът е в село Първенец, южно от Пловдив.";
