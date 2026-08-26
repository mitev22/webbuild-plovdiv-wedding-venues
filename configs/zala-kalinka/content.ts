/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Зала „Калинка“. Harvested 2026-08-26 from: Google Business профила им (нямат сайт).
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export const venue = {
  slug: "zala-kalinka",
  name: "Kalinka Hall",
  nameBg: "Зала „Калинка“",
  wordmark: {
    bg: "Калинка",
    en: "Kalinka",
  },
  navMark: {
    bg: "ЗАЛА КАЛИНКА",
    en: "KALINKA HALL",
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
  address: "местност Беломорски 27А, Пловдив",
  addressEn: "27A Belomorski locality, Plovdiv",
  addressStructured: {
    street: "местност Беломорски 27А",
    locality: "Пловдив",
  },
  phone: [
    "089 829 2880",
  ],
  phoneHref: "tel:+359898292880",
  phoneE164: "+359898292880",
  email: "",
  instagram: "",
  facebook: "",
  sameAs: [],
  mapQuery: "Зала+Калинка+Беломорски+Пловдив",
  maxCapacity: 0,
  capacity: [],
  spaces: [],
  packages: [],
  packageIncludes: [
    "Зала за събития в местност Беломорски",
    "Организация на тържества на място",
    "Работно време от 9 до 21 часа",
    "Дати се уговарят по телефон",
  ],
  packageAssist: "",
  whyUs: [
    "Зала за тържества с 4.8 от отзивите в Google",
    "Организацията на деня се поема на място",
    "Дълго работно време, от сутрин до късно вечер",
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
    "Дали има градина или открита част",
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
    metaTitle: "Зала „Калинка“ | Сватбени тържества в Пловдив",
    metaDescription: "Зала за сватбени тържества в местност Беломорски, Пловдив. Организация на деня на място. Запитване за дата на 089 829 2880.",
    navCity: "Пловдив",
    navSpot: "Беломорски",
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
    ch1Title: "Зала „Калинка“. Тържеството се organизира на място.",
    ch1Lead: "Денят започва с пристигането. Залата е в местност Беломорски, в южната част на Пловдив, встрани от движението в центъра.",
    ch2Title: "Церемонията",
    ch2Lead: "Залата се предлага за тържества, а организацията се поема на място.",
    ch2Body: "Подробности за размерите на залата и за броя места не са публикувани никъде. Ще бъдат добавени, след като бъдат предоставени от домакините.",
    ch3Title: "Вечерята в залата",
    ch3Lead: "Гостите се хранят в залата, а подготовката се поема от домакините.",
    ch4Title: "Вечерта продължава",
    ch4Lead: "Залата работи от девет сутринта до девет вечерта.",
    ch4Body: "Гостите ѝ дават 4.8 в Google. Домакините нямат сайт, така че телефонът е единственият начин да се провери свободна дата.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Отговаряме лично на всяко запитване.",
    gettingHereRows: [
      [
        "Адрес",
        "местност Беломорски 27А, Пловдив",
      ],
      [
        "Район",
        "южната част на града",
      ],
      [
        "Телефон",
        "089 829 2880",
      ],
    ],
    whyTitle: "Защо младоженците избират Зала „Калинка“",
    packagesTitle: "Какво се знае за мястото",
    packagesLead: "Зала „Калинка“ не публикува куверт и пакети. Показано е само това, което самите те съобщават. Опишете тържеството си във формата и ще получите оферта.",
    includesTitle: "На разположение за деня",
    reviewsLead: "Зала „Калинка“ няма публикувани отзиви, които да бъдат проверени. Разделът остава празен, докато не бъдат предоставени истински.",
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Зала „Калинка“.",
    footerRights: "Зала „Калинка“ · Пловдив",
    capacityStats: [
      {
        value: "4.8",
        count: 4.8,
        label: "от отзивите в Google",
      },
      {
        value: "9 до 21",
        label: "работно време",
      },
      {
        value: "На място",
        label: "организация на деня",
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
    metaTitle: "Kalinka Hall | Wedding celebrations in Plovdiv",
    metaDescription: "A hall for wedding celebrations in the Belomorski locality, Plovdiv. The day is organised on site. Enquire about a date on 089 829 2880.",
    navCity: "Plovdiv",
    navSpot: "Belomorski",
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
    ch1Title: "Kalinka Hall. The celebration is organised on site.",
    ch1Lead: "The day begins with the arrival. The hall stands in the Belomorski locality, in the southern part of Plovdiv, away from the traffic of the centre.",
    ch2Title: "The ceremony",
    ch2Lead: "The hall is offered for celebrations, and the organising is handled on site.",
    ch2Body: "Details of the hall's dimensions and its number of seats are not published anywhere. They will be added once the hosts provide them.",
    ch3Title: "Dinner in the hall",
    ch3Lead: "Guests dine in the hall, and the preparation is handled by the hosts.",
    ch4Title: "The evening goes on",
    ch4Lead: "The hall is open from nine in the morning until nine in the evening.",
    ch4Body: "Its guests rate it 4.8 on Google. The hosts have no website, so the telephone is the only way to check whether a date is free.",
    ch5Title: "The farewell is a beginning",
    ch5Lead: "Tell us about your day: season, guest count, approximate budget. Every enquiry gets a personal reply.",
    gettingHereRows: [
      [
        "Address",
        "27A Belomorski locality, Plovdiv",
      ],
      [
        "District",
        "the southern part of the city",
      ],
      [
        "Phone",
        "089 829 2880",
      ],
    ],
    whyTitle: "Why couples choose Kalinka Hall",
    packagesTitle: "What is known about the place",
    packagesLead: "Kalinka Hall publishes no per-head price or packages. Only what they state themselves appears here. Describe your celebration in the form and you will receive an offer.",
    includesTitle: "Available for the day",
    reviewsLead: "Kalinka Hall has no verifiable published reviews. This section stays empty until real ones are supplied.",
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Kalinka Hall website.",
    footerRights: "Kalinka Hall · Plovdiv",
    capacityStats: [
      {
        value: "4.8",
        count: 4.8,
        label: "from its Google reviews",
      },
      {
        value: "9 to 21",
        label: "opening hours",
      },
      {
        value: "On site",
        label: "the day is organised",
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
  "An event hall in the Belomorski locality",
  "Celebrations are organised on site",
  "Open from 9 in the morning until 9 in the evening",
  "Dates are arranged by telephone",
];

export const packageAssistEn =
  "";

export const whyUsEn = [
  "A hall rated 4.8 by its Google reviewers",
  "The organisation of the day is handled on site",
  "Long opening hours, from morning until late",
];

export const gettingHereNote =
  "Залата е в местност Беломорски, в южната част на Пловдив.";
