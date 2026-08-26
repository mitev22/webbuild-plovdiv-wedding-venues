/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Ресторант „Диана 1“. Harvested 2026-08-26 from: Google Business профила им (нямат сайт).
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export const venue = {
  slug: "diana-1",
  name: "Restaurant Diana 1",
  nameBg: "Ресторант „Диана 1“",
  wordmark: {
    bg: "Диана 1",
    en: "Diana 1",
  },
  navMark: {
    bg: "РЕСТОРАНТ ДИАНА 1",
    en: "RESTAURANT DIANA 1",
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
  address: "ул. „Княз Ал. Дондуков-Корсаков“ 2, Пловдив",
  addressEn: "2 Knyaz Al. Dondukov-Korsakov St, Plovdiv",
  addressStructured: {
    street: "ул. „Княз Ал. Дондуков-Корсаков“ 2",
    locality: "Пловдив",
  },
  phone: [
    "032 623 027",
  ],
  phoneHref: "tel:+35932623027",
  phoneE164: "+35932623027",
  email: "",
  instagram: "",
  facebook: "",
  sameAs: [],
  mapQuery: "Ресторант+Диана+1+Дондуков-Корсаков+2+Пловдив",
  maxCapacity: 0,
  capacity: [],
  spaces: [],
  packages: [],
  packageIncludes: [
    "Ресторантът на ул. „Княз Ал. Дондуков-Корсаков“ 2, Пловдив",
    "Ресторант в центъра на Пловдив",
    "Стационарен телефон за резервации",
  ],
  packageAssist: "",
  whyUs: [
    "Ресторант в центъра на Пловдив",
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
    metaTitle: "Ресторант „Диана 1“ | Тържества в центъра на Пловдив",
    metaDescription: "Ресторант на ул. „Княз Ал. Дондуков-Корсаков“ 2 в центъра на Пловдив. Резервации на 032 623 027.",
    navCity: "Пловдив",
    navSpot: "Центърът",
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
    ch1Title: "Ресторант „Диана 1“. Мястото на повода.",
    ch1Lead: "Денят започва с пристигането. Ресторантът е на ул. „Княз Ал. Дондуков-Корсаков“ 2, Пловдив, в центъра на Пловдив.",
    ch2Title: "Церемонията",
    ch2Lead: "Ресторантът е в центъра и поема поводи през цялата година.",
    ch2Body: "Подробности за капацитета и за броя места не са публикувани никъде. Ще бъдат добавени, след като бъдат предоставени от домакините.",
    ch3Title: "Вечерята",
    ch3Lead: "Гостите се хранят в салона, в центъра на Пловдив.",
    ch4Title: "Вечерта продължава",
    ch4Lead: "Резервациите минават през телефона.",
    ch4Body: "Собствен сайт няма, така че телефонът остава единственият начин за резервация.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Отговаряме лично на всяко запитване.",
    gettingHereRows: [
      [
        "Адрес",
        "ул. „Княз Ал. Дондуков-Корсаков“ 2, Пловдив",
      ],
      [
        "Телефон",
        "032 623 027",
      ],
    ],
    whyTitle: "Защо младоженците избират Ресторант „Диана 1“",
    packagesTitle: "Какво се знае за мястото",
    packagesLead: "Ресторант „Диана 1“ не публикува куверт и пакети. Показано е само това, което самите те съобщават. Опишете тържеството си във формата и ще получите оферта.",
    includesTitle: "На разположение за деня",
    reviewsLead: "Ресторант „Диана 1“ няма публикувани отзиви, които да бъдат проверени. Разделът остава празен, докато не бъдат предоставени истински.",
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Ресторант „Диана 1“.",
    footerRights: "Ресторант „Диана 1“ · Пловдив",
    capacityStats: [
      {
        value: "Центърът",
        label: "ул. „Дондуков-Корсаков“ 2",
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
    metaTitle: "Restaurant Diana 1 | Celebrations in central Plovdiv",
    metaDescription: "A restaurant at 2 Knyaz Al. Dondukov-Korsakov Street in central Plovdiv. Bookings on 032 623 027.",
    navCity: "Plovdiv",
    navSpot: "City centre",
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
    ch1Title: "Restaurant Diana 1. Where the occasion happens.",
    ch1Lead: "The day begins with the arrival. The restaurant sits at 2 Knyaz Al. Dondukov-Korsakov St, Plovdiv, in the centre of Plovdiv.",
    ch2Title: "The ceremony",
    ch2Lead: "The restaurant is in the centre and takes on occasions all year round.",
    ch2Body: "Details of the capacity and the number of seats are not published anywhere. They will be added once the hosts provide them.",
    ch3Title: "Dinner",
    ch3Lead: "Guests dine in the room, in the centre of Plovdiv.",
    ch4Title: "The evening goes on",
    ch4Lead: "Bookings go through the telephone.",
    ch4Body: "There is no website, so the telephone remains the only way to book.",
    ch5Title: "The farewell is a beginning",
    ch5Lead: "Tell us about your day: season, guest count, approximate budget. Every enquiry gets a personal reply.",
    gettingHereRows: [
      [
        "Address",
        "2 Knyaz Al. Dondukov-Korsakov St, Plovdiv",
      ],
      [
        "Phone",
        "032 623 027",
      ],
    ],
    whyTitle: "Why couples choose Restaurant Diana 1",
    packagesTitle: "What is known about the place",
    packagesLead: "Restaurant Diana 1 publishes no per-head price or packages. Only what they state themselves appears here. Describe your celebration in the form and you will receive an offer.",
    includesTitle: "Available for the day",
    reviewsLead: "Restaurant Diana 1 has no verifiable published reviews. This section stays empty until real ones are supplied.",
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Restaurant Diana 1 website.",
    footerRights: "Restaurant Diana 1 · Plovdiv",
    capacityStats: [
      {
        value: "The centre",
        label: "2 Dondukov-Korsakov St",
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
  "The restaurant at 2 Knyaz Al. Dondukov-Korsakov St, Plovdiv",
  "A restaurant in the centre of Plovdiv",
  "A landline for bookings",
];

export const packageAssistEn =
  "";

export const whyUsEn = [
  "A restaurant in the centre of Plovdiv",
  "A landline for bookings",
];

export const gettingHereNote =
  "Ресторантът е на ул. „Княз Ал. Дондуков-Корсаков“ 2, Пловдив.";
