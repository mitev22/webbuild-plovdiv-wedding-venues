/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Хотел „Чиирите“. Harvested 2026-08-26 from: собствения им сайт chiirite.bg и Google Business профила.
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export const venue = {
  slug: "chiirite",
  name: "Hotel Chiirite",
  nameBg: "Хотел „Чиирите“",
  wordmark: {
    bg: "Чиирите",
    en: "Chiirite",
  },
  navMark: {
    bg: "ХОТЕЛ ЧИИРИТЕ",
    en: "HOTEL CHIIRITE",
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
  address: "Околовръстен път, местност Чиирите 020B, Пловдив",
  addressEn: "Ring road, Chiirite locality 020B, Plovdiv",
  addressStructured: {
    street: "Околовръстен път, местност Чиирите 020B",
    locality: "Пловдив",
  },
  phone: [
    "032 202 600",
  ],
  phoneHref: "tel:+35932202600",
  phoneE164: "+35932202600",
  email: "",
  instagram: "",
  facebook: "",
  sameAs: [],
  mapQuery: "Хотел+Чиирите+Околовръстен+път+Пловдив",
  maxCapacity: 0,
  capacity: [],
  spaces: [],
  packages: [],
  packageIncludes: [
    "Хотелът на Околовръстен път, местност Чиирите 020B, Пловдив",
    "Мултифункционална зала с мултимедия",
    "Озвучаване, екран и проектор",
    "Ресторант със седемдесет места",
    "Стаи за гостите на място",
    "Рецепция, отворена денонощно",
  ],
  packageAssist: "",
  whyUs: [
    "4.5 от отзивите в Google",
    "Мултифункционална зала с мултимедия",
    "Озвучаване, екран и проектор",
    "Ресторант със седемдесет места",
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
    "Капацитет на залата за сватба (публикувани са само 70 места в ресторанта)",
    "Брой стаи в хотела",
    "Меню и куверт",
    "SSL сертификат за сайта — в момента работи по HTTP",
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
    metaTitle: "Хотел „Чиирите“ | Сватбени тържества край Пловдив",
    metaDescription: "Хотел с мултифункционална зала и ресторант със 70 места на Околовръстния път на Пловдив. Сватбени тържества. Запитване на 032 202 600.",
    navCity: "Пловдив",
    navSpot: "Чиирите",
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
    ch1Title: "Хотел „Чиирите“. Всичко за деня под един покрив.",
    ch1Lead: "Денят започва с пристигането. Хотелът е на Околовръстен път, местност Чиирите 020B, Пловдив, на Околовръстния път на Пловдив.",
    ch2Title: "Церемонията",
    ch2Lead: "Домакините описват залата като мултифункционална, с озвучаване, екран и проектор.",
    ch2Body: "Подробности за капацитета и за броя места не са публикувани никъде. Ще бъдат добавени, след като бъдат предоставени от домакините.",
    ch3Title: "Вечерята в ресторанта",
    ch3Lead: "Ресторантът разполага със седемдесет места и работи от 7:30 до 23:00.",
    ch4Title: "Вечерта продължава",
    ch4Lead: "Гостите, които остават, спят в стаите на място.",
    ch4Body: "Сайтът им работи без HTTPS, така че браузърите го отбелязват като незащитен още преди гостът да е прочел каквото и да е.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Отговаряме лично на всяко запитване.",
    gettingHereRows: [
      [
        "Адрес",
        "Околовръстен път, местност Чиирите 020B, Пловдив",
      ],
      [
        "Телефон",
        "032 202 600",
      ],
    ],
    whyTitle: "Защо младоженците избират Хотел „Чиирите“",
    packagesTitle: "Какво се знае за мястото",
    packagesLead: "Хотел „Чиирите“ не публикува куверт и пакети. Показано е само това, което самите те съобщават. Опишете тържеството си във формата и ще получите оферта.",
    includesTitle: "На разположение за деня",
    reviewsLead: "Хотел „Чиирите“ няма публикувани отзиви, които да бъдат проверени. Разделът остава празен, докато не бъдат предоставени истински.",
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Хотел „Чиирите“.",
    footerRights: "Хотел „Чиирите“ · Пловдив",
    capacityStats: [
      {
        value: "4.5",
        count: 4.5,
        label: "от отзивите в Google",
      },
      {
        value: "70",
        count: 70,
        label: "места в ресторанта",
      },
      {
        value: "Денонощна",
        label: "рецепция",
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
    metaTitle: "Hotel Chiirite | Wedding celebrations near Plovdiv",
    metaDescription: "A hotel with a multifunctional hall and a 70-seat restaurant on the Plovdiv ring road. Wedding celebrations. Enquire on 032 202 600.",
    navCity: "Plovdiv",
    navSpot: "Chiirite",
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
    ch1Title: "Hotel Chiirite. Everything for the day under one roof.",
    ch1Lead: "The day begins with the arrival. The hotel sits at Ring road, Chiirite locality 020B, Plovdiv, on the Plovdiv ring road.",
    ch2Title: "The ceremony",
    ch2Lead: "The hosts describe the hall as multifunctional, with a sound system, a screen and a projector.",
    ch2Body: "Details of the capacity and the number of seats are not published anywhere. They will be added once the hosts provide them.",
    ch3Title: "Dinner in the restaurant",
    ch3Lead: "The restaurant seats seventy and works from 7:30 until 23:00.",
    ch4Title: "The evening goes on",
    ch4Lead: "Guests who stay sleep in the rooms on site.",
    ch4Body: "Their site runs without HTTPS, so browsers flag it as not secure before a visitor has read a word.",
    ch5Title: "The farewell is a beginning",
    ch5Lead: "Tell us about your day: season, guest count, approximate budget. Every enquiry gets a personal reply.",
    gettingHereRows: [
      [
        "Address",
        "Ring road, Chiirite locality 020B, Plovdiv",
      ],
      [
        "Phone",
        "032 202 600",
      ],
    ],
    whyTitle: "Why couples choose Hotel Chiirite",
    packagesTitle: "What is known about the place",
    packagesLead: "Hotel Chiirite publishes no per-head price or packages. Only what they state themselves appears here. Describe your celebration in the form and you will receive an offer.",
    includesTitle: "Available for the day",
    reviewsLead: "Hotel Chiirite has no verifiable published reviews. This section stays empty until real ones are supplied.",
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Hotel Chiirite website.",
    footerRights: "Hotel Chiirite · Plovdiv",
    capacityStats: [
      {
        value: "4.5",
        count: 4.5,
        label: "from its Google reviews",
      },
      {
        value: "70",
        count: 70,
        label: "seats in the restaurant",
      },
      {
        value: "24 hours",
        label: "reception",
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
  "The hotel at Ring road, Chiirite locality 020B, Plovdiv",
  "A multifunctional hall with multimedia",
  "Sound system, screen and projector",
  "A restaurant with seventy seats",
  "Rooms for guests on site",
  "A reception desk open around the clock",
];

export const packageAssistEn =
  "";

export const whyUsEn = [
  "4.5 from its Google reviews",
  "A multifunctional hall with multimedia",
  "Sound system, screen and projector",
  "A restaurant with seventy seats",
];

export const gettingHereNote =
  "Хотелът е на Околовръстен път, местност Чиирите 020B, Пловдив.";
