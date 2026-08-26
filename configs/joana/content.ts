/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Ресторант „Джоана“. Harvested 2026-08-26 from: собствения им сайт djoana.com и Google Business профила.
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export const venue = {
  slug: "joana",
  name: "Restaurant Joana",
  nameBg: "Ресторант „Джоана“",
  wordmark: {
    bg: "Джоана",
    en: "Joana",
  },
  navMark: {
    bg: "РЕСТОРАНТ ДЖОАНА",
    en: "RESTAURANT JOANA",
  },
  logo: {
    src: "",
    w: 0,
    h: 0,
  },
  town: "Пловдив",
  type: "hall",
  venueNoun: {
    bg: "ресторанта",
    en: "the restaurant",
  },
  address: "бул. „Дунав“ и ул. „Победа“, Кършияка, Пловдив",
  addressEn: "Dunav Blvd at Pobeda St, Karshiyaka, Plovdiv",
  addressStructured: {
    street: "бул. „Дунав“ и ул. „Победа“",
    locality: "Пловдив",
  },
  phone: [
    "088 830 2428",
  ],
  phoneHref: "tel:+359888302428",
  phoneE164: "+359888302428",
  email: "",
  instagram: "",
  facebook: "",
  sameAs: [],
  mapQuery: "Ресторант+Джоана+Кършияка+Пловдив",
  maxCapacity: 0,
  capacity: [],
  spaces: [],
  packages: [],
  packageIncludes: [
    "Ресторантът на бул. „Дунав“ и ул. „Победа“, Кършияка, Пловдив",
    "Ресторант в квартал Кършияка",
    "На ъгъла на бул. „Дунав“ и ул. „Победа“",
  ],
  packageAssist: "",
  whyUs: [
    "Ресторант в квартал Кършияка",
    "На ъгъла на бул. „Дунав“ и ул. „Победа“",
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
    "Снимки на ресторанта и на минали сватби (реални фото-слотове)",
    "Капацитет: брой места седнали, коктейл и на открито",
    "Меню и куверт",
    "Web3Forms access key за формата за запитване",
    "Имейл адрес за контакт",
    "Текст за политика за поверителност — преглед от юрист",
    "Капацитет и брой места",
    "Меню и куверт",
    "Сегашният сайт е с оскъдно съдържание — да се обсъди замяна",
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
    metaTitle: "Ресторант „Джоана“ | Тържества в Пловдив",
    metaDescription: "Ресторант на бул. „Дунав“ и ул. „Победа“ в Кършияка, Пловдив. Резервации на 088 830 2428.",
    navCity: "Пловдив",
    navSpot: "Кършияка",
    navSeats: "капацитет по запитване",
    atmosphereNote: "атмосферни визуализации, предстои добавяне на снимки на ресторанта",
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
    ch1Title: "Ресторант „Джоана“. Мястото на повода.",
    ch1Lead: "Денят започва с пристигането. Ресторантът е на бул. „Дунав“ и ул. „Победа“, Кършияка, Пловдив, в квартал Кършияка.",
    ch2Title: "Церемонията",
    ch2Lead: "Ресторантът е в Кършияка и поема поводи през цялата година.",
    ch2Body: "Подробности за капацитета и за броя места не са публикувани никъде. Ще бъдат добавени, след като бъдат предоставени от домакините.",
    ch3Title: "Вечерята",
    ch3Lead: "Гостите се хранят в салона на ресторанта.",
    ch4Title: "Вечерта продължава",
    ch4Lead: "Резервациите минават през телефона.",
    ch4Body: "Сегашният им сайт е само няколко реда текст и пет снимки, без меню и без цени.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Отговаряме лично на всяко запитване.",
    gettingHereRows: [
      [
        "Адрес",
        "бул. „Дунав“ и ул. „Победа“, Кършияка, Пловдив",
      ],
      [
        "Телефон",
        "088 830 2428",
      ],
    ],
    whyTitle: "Защо младоженците избират Ресторант „Джоана“",
    packagesTitle: "Какво се знае за мястото",
    packagesLead: "Ресторант „Джоана“ не публикува куверт и пакети. Показано е само това, което самите те съобщават. Опишете тържеството си във формата и ще получите оферта.",
    includesTitle: "На разположение за деня",
    reviewsLead: "Ресторант „Джоана“ няма публикувани отзиви, които да бъдат проверени. Разделът остава празен, докато не бъдат предоставени истински.",
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Ресторант „Джоана“.",
    footerRights: "Ресторант „Джоана“ · Пловдив",
    capacityStats: [
      {
        value: "Кършияка",
        label: "кварталът на ресторанта",
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
    metaTitle: "Restaurant Joana | Celebrations in Plovdiv",
    metaDescription: "A restaurant at Dunav Boulevard and Pobeda Street in Karshiyaka, Plovdiv. Bookings on 088 830 2428.",
    navCity: "Plovdiv",
    navSpot: "Karshiyaka",
    navSeats: "capacity on request",
    atmosphereNote: "atmospheric visualisations, photographs of the restaurant to be added",
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
    ch1Title: "Restaurant Joana. Where the occasion happens.",
    ch1Lead: "The day begins with the arrival. The restaurant sits at Dunav Blvd at Pobeda St, Karshiyaka, Plovdiv, in the Karshiyaka district.",
    ch2Title: "The ceremony",
    ch2Lead: "The restaurant is in Karshiyaka and takes on occasions all year round.",
    ch2Body: "Details of the capacity and the number of seats are not published anywhere. They will be added once the hosts provide them.",
    ch3Title: "Dinner",
    ch3Lead: "Guests dine in the restaurant's room.",
    ch4Title: "The evening goes on",
    ch4Lead: "Bookings go through the telephone.",
    ch4Body: "Their current site is a few lines of text and five photographs, with no menu and no prices.",
    ch5Title: "The farewell is a beginning",
    ch5Lead: "Tell us about your day: season, guest count, approximate budget. Every enquiry gets a personal reply.",
    gettingHereRows: [
      [
        "Address",
        "Dunav Blvd at Pobeda St, Karshiyaka, Plovdiv",
      ],
      [
        "Phone",
        "088 830 2428",
      ],
    ],
    whyTitle: "Why couples choose Restaurant Joana",
    packagesTitle: "What is known about the place",
    packagesLead: "Restaurant Joana publishes no per-head price or packages. Only what they state themselves appears here. Describe your celebration in the form and you will receive an offer.",
    includesTitle: "Available for the day",
    reviewsLead: "Restaurant Joana has no verifiable published reviews. This section stays empty until real ones are supplied.",
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Restaurant Joana website.",
    footerRights: "Restaurant Joana · Plovdiv",
    capacityStats: [
      {
        value: "Karshiyaka",
        label: "where it stands",
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
  "The restaurant at Dunav Blvd at Pobeda St, Karshiyaka, Plovdiv",
  "A restaurant in the Karshiyaka district",
  "At the corner of Dunav Boulevard and Pobeda Street",
];

export const packageAssistEn =
  "";

export const whyUsEn = [
  "A restaurant in the Karshiyaka district",
  "At the corner of Dunav Boulevard and Pobeda Street",
];

export const gettingHereNote =
  "Ресторантът е на бул. „Дунав“ и ул. „Победа“, Кършияка, Пловдив.";
