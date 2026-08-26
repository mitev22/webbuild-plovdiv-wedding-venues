/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Ресторант „Реал“. Harvested 2026-08-26 from: Google Business профила им (нямат сайт).
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export const venue = {
  slug: "restaurant-real",
  name: "Restaurant Real",
  nameBg: "Ресторант „Реал“",
  wordmark: {
    bg: "Реал",
    en: "Real",
  },
  navMark: {
    bg: "РЕСТОРАНТ РЕАЛ",
    en: "RESTAURANT REAL",
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
  address: "ул. „Георги Войтех“ 2, Пловдив",
  addressEn: "2 Georgi Voyteh St, Plovdiv",
  addressStructured: {
    street: "ул. „Георги Войтех“ 2",
    locality: "Пловдив",
  },
  phone: [
    "032 278 160",
  ],
  phoneHref: "tel:+35932278160",
  phoneE164: "+35932278160",
  email: "",
  instagram: "",
  facebook: "",
  sameAs: [],
  mapQuery: "Ресторант+Реал+Георги+Войтех+2+Пловдив",
  maxCapacity: 0,
  capacity: [],
  spaces: [],
  packages: [],
  packageIncludes: [
    "Ресторантът на ул. „Георги Войтех“ 2, Пловдив",
    "Ресторант в централната част на града",
    "Стационарен телефон за резервации",
  ],
  packageAssist: "",
  whyUs: [
    "4.5 от отзивите в Google",
    "Ресторант в централната част на града",
    "Стационарен телефон за резервации",
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
    metaTitle: "Ресторант „Реал“ | Тържества в Пловдив",
    metaDescription: "Ресторант на ул. „Георги Войтех“ 2 в Пловдив, с 4.5 от отзивите в Google. Резервации на 032 278 160.",
    navCity: "Пловдив",
    navSpot: "Каменица",
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
    ch1Title: "Ресторант „Реал“. Мястото на повода.",
    ch1Lead: "Денят започва с пристигането. Ресторантът е на ул. „Георги Войтех“ 2, Пловдив, в централната част на Пловдив.",
    ch2Title: "Церемонията",
    ch2Lead: "Ресторантът е в централната част на града и поема поводи през цялата година.",
    ch2Body: "Подробности за капацитета и за броя места не са публикувани никъде. Ще бъдат добавени, след като бъдат предоставени от домакините.",
    ch3Title: "Вечерята",
    ch3Lead: "Гостите се хранят в салона, в центъра на Пловдив.",
    ch4Title: "Вечерта продължава",
    ch4Lead: "Гостите му дават 4.5 в Google.",
    ch4Body: "Собствен сайт няма, така че телефонът остава единственият начин за резервация.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Отговаряме лично на всяко запитване.",
    gettingHereRows: [
      [
        "Адрес",
        "ул. „Георги Войтех“ 2, Пловдив",
      ],
      [
        "Телефон",
        "032 278 160",
      ],
    ],
    whyTitle: "Защо младоженците избират Ресторант „Реал“",
    packagesTitle: "Какво се знае за мястото",
    packagesLead: "Ресторант „Реал“ не публикува куверт и пакети. Показано е само това, което самите те съобщават. Опишете тържеството си във формата и ще получите оферта.",
    includesTitle: "На разположение за деня",
    reviewsLead: "Ресторант „Реал“ няма публикувани отзиви, които да бъдат проверени. Разделът остава празен, докато не бъдат предоставени истински.",
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Ресторант „Реал“.",
    footerRights: "Ресторант „Реал“ · Пловдив",
    capacityStats: [
      {
        value: "4.5",
        count: 4.5,
        label: "от отзивите в Google",
      },
      {
        value: "Центърът",
        label: "ул. „Георги Войтех“ 2",
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
    metaTitle: "Restaurant Real | Celebrations in Plovdiv",
    metaDescription: "A restaurant at 2 Georgi Voyteh Street in Plovdiv, rated 4.5 on Google. Bookings on 032 278 160.",
    navCity: "Plovdiv",
    navSpot: "Kamenitsa",
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
    ch1Title: "Restaurant Real. Where the occasion happens.",
    ch1Lead: "The day begins with the arrival. The restaurant sits at 2 Georgi Voyteh St, Plovdiv, in the central part of Plovdiv.",
    ch2Title: "The ceremony",
    ch2Lead: "The restaurant is in the central part of the city and takes on occasions all year round.",
    ch2Body: "Details of the capacity and the number of seats are not published anywhere. They will be added once the hosts provide them.",
    ch3Title: "Dinner",
    ch3Lead: "Guests dine in the room, in the centre of Plovdiv.",
    ch4Title: "The evening goes on",
    ch4Lead: "Its guests rate it 4.5 on Google.",
    ch4Body: "There is no website, so the telephone remains the only way to book.",
    ch5Title: "The farewell is a beginning",
    ch5Lead: "Tell us about your day: season, guest count, approximate budget. Every enquiry gets a personal reply.",
    gettingHereRows: [
      [
        "Address",
        "2 Georgi Voyteh St, Plovdiv",
      ],
      [
        "Phone",
        "032 278 160",
      ],
    ],
    whyTitle: "Why couples choose Restaurant Real",
    packagesTitle: "What is known about the place",
    packagesLead: "Restaurant Real publishes no per-head price or packages. Only what they state themselves appears here. Describe your celebration in the form and you will receive an offer.",
    includesTitle: "Available for the day",
    reviewsLead: "Restaurant Real has no verifiable published reviews. This section stays empty until real ones are supplied.",
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Restaurant Real website.",
    footerRights: "Restaurant Real · Plovdiv",
    capacityStats: [
      {
        value: "4.5",
        count: 4.5,
        label: "from its Google reviews",
      },
      {
        value: "The centre",
        label: "2 Georgi Voyteh St",
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
  "The restaurant at 2 Georgi Voyteh St, Plovdiv",
  "A restaurant in the central part of the city",
  "A landline for bookings",
];

export const packageAssistEn =
  "";

export const whyUsEn = [
  "4.5 from its Google reviews",
  "A restaurant in the central part of the city",
  "A landline for bookings",
];

export const gettingHereNote =
  "Ресторантът е на ул. „Георги Войтех“ 2, Пловдив.";
