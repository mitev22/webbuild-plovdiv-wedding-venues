/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Зала „Ермитаж“. Harvested 2026-08-26 from: Google Business профила им (нямат сайт).
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export const venue = {
  slug: "ermitazh",
  name: "Ermitazh Hall",
  nameBg: "Зала „Ермитаж“",
  wordmark: {
    bg: "Ермитаж",
    en: "Ermitazh",
  },
  navMark: {
    bg: "ЗАЛА ЕРМИТАЖ",
    en: "ERMITAZH HALL",
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
  address: "бул. „България“ 97, Пловдив",
  addressEn: "97 Bulgaria Blvd, Plovdiv",
  addressStructured: {
    street: "бул. „България“ 97",
    locality: "Пловдив",
  },
  phone: [
    "089 449 9866",
  ],
  phoneHref: "tel:+359894499866",
  phoneE164: "+359894499866",
  email: "",
  instagram: "",
  facebook: "",
  sameAs: [],
  mapQuery: "Зала+Ермитаж+България+97+Пловдив",
  maxCapacity: 0,
  capacity: [],
  spaces: [],
  packages: [],
  packageIncludes: [
    "Залата на бул. „България“ 97, Пловдив",
    "Зала за тържества на бул. „България“ 97",
    "Дати се уговарят по телефон",
  ],
  packageAssist: "",
  whyUs: [
    "Зала за тържества на бул. „България“ 97",
    "Дати се уговарят по телефон",
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
    "Капацитет и брой места",
    "Меню и куверт за тържества",
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
    metaTitle: "Зала „Ермитаж“ | Тържества в Пловдив",
    metaDescription: "Зала за тържества на бул. „България“ 97 в Пловдив. Запитване за дата на 089 449 9866.",
    navCity: "Пловдив",
    navSpot: "бул. България",
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
    ch1Title: "Зала „Ермитаж“. Мястото на повода.",
    ch1Lead: "Денят започва с пристигането. Залата е на бул. „България“ 97, Пловдив, в северната част на Пловдив.",
    ch2Title: "Церемонията",
    ch2Lead: "Залата се предлага за тържества.",
    ch2Body: "Подробности за капацитета и за броя места не са публикувани никъде. Ще бъдат добавени, след като бъдат предоставени от домакините.",
    ch3Title: "Вечерята",
    ch3Lead: "Гостите се хранят в залата.",
    ch4Title: "Вечерта продължава",
    ch4Lead: "Свободните дати се проверяват по телефон.",
    ch4Body: "Собствен сайт няма, така че телефонът остава единственият начин за резервация.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Отговаряме лично на всяко запитване.",
    gettingHereRows: [
      [
        "Адрес",
        "бул. „България“ 97, Пловдив",
      ],
      [
        "Телефон",
        "089 449 9866",
      ],
    ],
    whyTitle: "Защо младоженците избират Зала „Ермитаж“",
    packagesTitle: "Какво се знае за мястото",
    packagesLead: "Зала „Ермитаж“ не публикува куверт и пакети. Показано е само това, което самите те съобщават. Опишете тържеството си във формата и ще получите оферта.",
    includesTitle: "На разположение за деня",
    reviewsLead: "Зала „Ермитаж“ няма публикувани отзиви, които да бъдат проверени. Разделът остава празен, докато не бъдат предоставени истински.",
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Зала „Ермитаж“.",
    footerRights: "Зала „Ермитаж“ · Пловдив",
    capacityStats: [
      {
        value: "бул. България",
        label: "адресът на залата",
      },
      {
        value: "По телефон",
        label: "проверка на свободна дата",
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
    metaTitle: "Ermitazh Hall | Celebrations in Plovdiv",
    metaDescription: "A hall for celebrations at 97 Bulgaria Boulevard in Plovdiv. Enquire about a date on 089 449 9866.",
    navCity: "Plovdiv",
    navSpot: "Bulgaria Blvd",
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
    ch1Title: "Ermitazh Hall. Where the occasion happens.",
    ch1Lead: "The day begins with the arrival. The hall sits at 97 Bulgaria Blvd, Plovdiv, in the northern part of Plovdiv.",
    ch2Title: "The ceremony",
    ch2Lead: "The hall is offered for celebrations.",
    ch2Body: "Details of the capacity and the number of seats are not published anywhere. They will be added once the hosts provide them.",
    ch3Title: "Dinner",
    ch3Lead: "Guests dine in the hall.",
    ch4Title: "The evening goes on",
    ch4Lead: "Free dates are checked by telephone.",
    ch4Body: "There is no website, so the telephone remains the only way to book.",
    ch5Title: "The farewell is a beginning",
    ch5Lead: "Tell us about your day: season, guest count, approximate budget. Every enquiry gets a personal reply.",
    gettingHereRows: [
      [
        "Address",
        "97 Bulgaria Blvd, Plovdiv",
      ],
      [
        "Phone",
        "089 449 9866",
      ],
    ],
    whyTitle: "Why couples choose Ermitazh Hall",
    packagesTitle: "What is known about the place",
    packagesLead: "Ermitazh Hall publishes no per-head price or packages. Only what they state themselves appears here. Describe your celebration in the form and you will receive an offer.",
    includesTitle: "Available for the day",
    reviewsLead: "Ermitazh Hall has no verifiable published reviews. This section stays empty until real ones are supplied.",
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Ermitazh Hall website.",
    footerRights: "Ermitazh Hall · Plovdiv",
    capacityStats: [
      {
        value: "Bulgaria Blvd",
        label: "where it stands",
      },
      {
        value: "By phone",
        label: "checking a free date",
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
  "The hall at 97 Bulgaria Blvd, Plovdiv",
  "A hall for celebrations at 97 Bulgaria Boulevard",
  "Dates are arranged by telephone",
];

export const packageAssistEn =
  "";

export const whyUsEn = [
  "A hall for celebrations at 97 Bulgaria Boulevard",
  "Dates are arranged by telephone",
];

export const gettingHereNote =
  "Залата е на бул. „България“ 97, Пловдив.";
