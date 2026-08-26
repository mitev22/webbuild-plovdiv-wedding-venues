/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Рамидо. Harvested 2026-08-26 from: Google Business профила им (нямат сайт).
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export const venue = {
  slug: "ramido",
  name: "Ramido",
  nameBg: "Рамидо",
  wordmark: {
    bg: "Рамидо",
    en: "Ramido",
  },
  navMark: {
    bg: "РАМИДО",
    en: "RAMIDO",
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
  address: "бул. „Руски“ 15, Пловдив",
  addressEn: "15 Ruski Blvd, Plovdiv",
  addressStructured: {
    street: "бул. „Руски“ 15",
    locality: "Пловдив",
  },
  phone: [
    "088 509 0993",
  ],
  phoneHref: "tel:+359885090993",
  phoneE164: "+359885090993",
  email: "",
  instagram: "",
  facebook: "",
  sameAs: [],
  mapQuery: "Рамидо+зала+за+събития+бул.+Руски+15+Пловдив",
  maxCapacity: 0,
  capacity: [],
  spaces: [],
  packages: [],
  packageIncludes: [
    "Зала за събития на бул. „Руски“ 15",
    "В самия център на Пловдив",
    "Достъпна по всяко време на денонощието",
    "Домакините посрещат всякакви гости",
  ],
  packageAssist: "",
  whyUs: [
    "Зала в центъра на Пловдив, на бул. „Руски“",
    "Пълна петица от отзивите в Google",
    "Достъпна по всяко време на денонощието",
    "Гостите се посрещат без значение кои са",
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
    "Капацитет на залата и брой места",
    "Работно време за огледи",
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
    metaTitle: "Рамидо | Зала за сватби в центъра на Пловдив",
    metaDescription: "Зала за събития на бул. „Руски“ 15 в центъра на Пловдив. Запитване за дата на 088 509 0993.",
    navCity: "Пловдив",
    navSpot: "бул. Руски",
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
    ch1Title: "Рамидо. Залата е в самия център.",
    ch1Lead: "Денят започва с пристигането. Залата е на бул. „Руски“ 15, в центъра на Пловдив, така че гостите стигат пеша от почти всяка точка на стария град.",
    ch2Title: "Церемонията",
    ch2Lead: "Залата се предлага за събития и е достъпна по всяко време на денонощието.",
    ch2Body: "Подробности за размерите ѝ и за броя места не са публикувани никъде. Ще бъдат добавени, след като бъдат предоставени от домакините.",
    ch3Title: "Вечерята в центъра",
    ch3Lead: "Гостите се хранят в залата, на крачки от центъра на Пловдив.",
    ch4Title: "Вечерта продължава",
    ch4Lead: "Залата има пълна петица от отзивите си в Google.",
    ch4Body: "Домакините посрещат всякакви гости и залата е достъпна по всяко време на денонощието. Сайт нямат, така че телефонът е единственият начин да се провери свободна дата.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Отговаряме лично на всяко запитване.",
    gettingHereRows: [
      [
        "Адрес",
        "бул. „Руски“ 15, Пловдив",
      ],
      [
        "Район",
        "центърът на града",
      ],
      [
        "Телефон",
        "088 509 0993",
      ],
    ],
    whyTitle: "Защо младоженците избират Рамидо",
    packagesTitle: "Какво се знае за мястото",
    packagesLead: "Рамидо не публикува куверт и пакети. Показано е само това, което самите те съобщават. Опишете тържеството си във формата и ще получите оферта.",
    includesTitle: "На разположение за деня",
    reviewsLead: "Рамидо няма публикувани отзиви, които да бъдат проверени. Разделът остава празен, докато не бъдат предоставени истински.",
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Рамидо.",
    footerRights: "Рамидо · Пловдив",
    capacityStats: [
      {
        value: "5.0",
        count: 5,
        label: "от отзивите в Google",
      },
      {
        value: "Центърът",
        label: "бул. „Руски“ 15",
      },
      {
        value: "Денонощно",
        label: "достъпна по всяко време",
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
    metaTitle: "Ramido | A wedding hall in central Plovdiv",
    metaDescription: "An event hall at 15 Ruski Boulevard in the centre of Plovdiv. Enquire about a date on 088 509 0993.",
    navCity: "Plovdiv",
    navSpot: "Ruski Blvd",
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
    ch1Title: "Ramido. The hall stands in the centre itself.",
    ch1Lead: "The day begins with the arrival. The hall is at 15 Ruski Boulevard, in the centre of Plovdiv, so guests can walk to it from almost anywhere in the old city.",
    ch2Title: "The ceremony",
    ch2Lead: "The hall is offered for events and is reachable at any hour of the day.",
    ch2Body: "Details of its dimensions and its number of seats are not published anywhere. They will be added once the hosts provide them.",
    ch3Title: "Dinner in the centre",
    ch3Lead: "Guests dine in the hall, a short walk from the centre of Plovdiv.",
    ch4Title: "The evening goes on",
    ch4Lead: "The hall holds a full five stars from its Google reviews.",
    ch4Body: "The hosts welcome every kind of guest and the hall is reachable at any hour. They have no website, so the telephone is the only way to check whether a date is free.",
    ch5Title: "The farewell is a beginning",
    ch5Lead: "Tell us about your day: season, guest count, approximate budget. Every enquiry gets a personal reply.",
    gettingHereRows: [
      [
        "Address",
        "15 Ruski Blvd, Plovdiv",
      ],
      [
        "District",
        "the city centre",
      ],
      [
        "Phone",
        "088 509 0993",
      ],
    ],
    whyTitle: "Why couples choose Ramido",
    packagesTitle: "What is known about the place",
    packagesLead: "Ramido publishes no per-head price or packages. Only what they state themselves appears here. Describe your celebration in the form and you will receive an offer.",
    includesTitle: "Available for the day",
    reviewsLead: "Ramido has no verifiable published reviews. This section stays empty until real ones are supplied.",
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Ramido website.",
    footerRights: "Ramido · Plovdiv",
    capacityStats: [
      {
        value: "5.0",
        count: 5,
        label: "from its Google reviews",
      },
      {
        value: "The centre",
        label: "15 Ruski Blvd",
      },
      {
        value: "Any hour",
        label: "reachable at all times",
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
  "An event hall at 15 Ruski Boulevard",
  "In the very centre of Plovdiv",
  "Reachable at any hour of the day",
  "The hosts welcome every kind of guest",
];

export const packageAssistEn =
  "";

export const whyUsEn = [
  "A hall in the centre of Plovdiv, on Ruski Boulevard",
  "A full five stars from its Google reviews",
  "Reachable at any hour of the day",
  "Guests are welcomed whoever they are",
];

export const gettingHereNote =
  "Залата е на бул. „Руски“ 15, в центъра на Пловдив.";
