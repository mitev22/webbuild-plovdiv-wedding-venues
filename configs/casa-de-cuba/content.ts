/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Casa de Cuba. Harvested 2026-08-26 from: Google Business профила им (нямат сайт).
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export const venue = {
  slug: "casa-de-cuba",
  name: "Casa de Cuba",
  nameBg: "Casa de Cuba",
  wordmark: {
    bg: "Casa de Cuba",
    en: "Casa de Cuba",
  },
  navMark: {
    bg: "CASA DE CUBA",
    en: "CASA DE CUBA",
  },
  logo: {
    src: "",
    w: 0,
    h: 0,
  },
  town: "Пловдив",
  type: "hall",
  venueNoun: {
    bg: "заведението",
    en: "the place",
  },
  address: "бул. „Васил Априлов“ 118, Пловдив",
  addressEn: "118 Vasil Aprilov Blvd, Plovdiv",
  addressStructured: {
    street: "бул. „Васил Априлов“ 118",
    locality: "Пловдив",
  },
  phone: [
    "088 500 8490",
  ],
  phoneHref: "tel:+359885008490",
  phoneE164: "+359885008490",
  email: "",
  instagram: "",
  facebook: "",
  sameAs: [],
  mapQuery: "Casa+de+Cuba+Васил+Априлов+118+Пловдив",
  maxCapacity: 0,
  capacity: [],
  spaces: [],
  packages: [],
  packageIncludes: [
    "Заведението на бул. „Васил Априлов“ 118, Пловдив",
    "Място за вечерни поводи",
    "Близо до центъра на града",
  ],
  packageAssist: "",
  whyUs: [
    "4.7 от отзивите в Google",
    "Място за вечерни поводи",
    "Близо до центъра на града",
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
    "Снимки на заведението и на минали сватби (реални фото-слотове)",
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
    metaTitle: "Casa de Cuba | Поводи в Пловдив",
    metaDescription: "Заведение на бул. „Васил Априлов“ 118 в Пловдив, с 4.7 от отзивите в Google. Запитване на 088 500 8490.",
    navCity: "Пловдив",
    navSpot: "Васил Априлов",
    navSeats: "капацитет по запитване",
    atmosphereNote: "атмосферни визуализации, предстои добавяне на снимки на заведението",
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
    ch1Title: "Casa de Cuba. Мястото на повода.",
    ch1Lead: "Денят започва с пристигането. Заведението е на бул. „Васил Априлов“ 118, Пловдив, близо до центъра на Пловдив.",
    ch2Title: "Церемонията",
    ch2Lead: "Заведението е близо до центъра и поема вечерни поводи.",
    ch2Body: "Подробности за капацитета и за броя места не са публикувани никъде. Ще бъдат добавени, след като бъдат предоставени от домакините.",
    ch3Title: "Вечерята",
    ch3Lead: "Гостите се събират на място, на крачки от центъра на града.",
    ch4Title: "Вечерта продължава",
    ch4Lead: "Гостите му дават 4.7 в Google.",
    ch4Body: "Собствен сайт няма, така че телефонът остава единственият начин за резервация.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Отговаряме лично на всяко запитване.",
    gettingHereRows: [
      [
        "Адрес",
        "бул. „Васил Априлов“ 118, Пловдив",
      ],
      [
        "Телефон",
        "088 500 8490",
      ],
    ],
    whyTitle: "Защо младоженците избират Casa de Cuba",
    packagesTitle: "Какво се знае за мястото",
    packagesLead: "Casa de Cuba не публикува куверт и пакети. Показано е само това, което самите те съобщават. Опишете тържеството си във формата и ще получите оферта.",
    includesTitle: "На разположение за деня",
    reviewsLead: "Casa de Cuba няма публикувани отзиви, които да бъдат проверени. Разделът остава празен, докато не бъдат предоставени истински.",
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Casa de Cuba.",
    footerRights: "Casa de Cuba · Пловдив",
    capacityStats: [
      {
        value: "4.7",
        count: 4.7,
        label: "от отзивите в Google",
      },
      {
        value: "Центърът",
        label: "на крачки от него",
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
    metaTitle: "Casa de Cuba | Occasions in Plovdiv",
    metaDescription: "A venue at 118 Vasil Aprilov Boulevard in Plovdiv, rated 4.7 on Google. Enquire on 088 500 8490.",
    navCity: "Plovdiv",
    navSpot: "Vasil Aprilov Blvd",
    navSeats: "capacity on request",
    atmosphereNote: "atmospheric visualisations, photographs of the place to be added",
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
    ch1Title: "Casa de Cuba. Where the occasion happens.",
    ch1Lead: "The day begins with the arrival. The place sits at 118 Vasil Aprilov Blvd, Plovdiv, near the centre of Plovdiv.",
    ch2Title: "The ceremony",
    ch2Lead: "The place is close to the centre and takes on evening occasions.",
    ch2Body: "Details of the capacity and the number of seats are not published anywhere. They will be added once the hosts provide them.",
    ch3Title: "Dinner",
    ch3Lead: "Guests gather on site, a short walk from the city centre.",
    ch4Title: "The evening goes on",
    ch4Lead: "Its guests rate it 4.7 on Google.",
    ch4Body: "There is no website, so the telephone remains the only way to book.",
    ch5Title: "The farewell is a beginning",
    ch5Lead: "Tell us about your day: season, guest count, approximate budget. Every enquiry gets a personal reply.",
    gettingHereRows: [
      [
        "Address",
        "118 Vasil Aprilov Blvd, Plovdiv",
      ],
      [
        "Phone",
        "088 500 8490",
      ],
    ],
    whyTitle: "Why couples choose Casa de Cuba",
    packagesTitle: "What is known about the place",
    packagesLead: "Casa de Cuba publishes no per-head price or packages. Only what they state themselves appears here. Describe your celebration in the form and you will receive an offer.",
    includesTitle: "Available for the day",
    reviewsLead: "Casa de Cuba has no verifiable published reviews. This section stays empty until real ones are supplied.",
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Casa de Cuba website.",
    footerRights: "Casa de Cuba · Plovdiv",
    capacityStats: [
      {
        value: "4.7",
        count: 4.7,
        label: "from its Google reviews",
      },
      {
        value: "The centre",
        label: "a short walk away",
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
  "The place at 118 Vasil Aprilov Blvd, Plovdiv",
  "A place for evening occasions",
  "Close to the city centre",
];

export const packageAssistEn =
  "";

export const whyUsEn = [
  "4.7 from its Google reviews",
  "A place for evening occasions",
  "Close to the city centre",
];

export const gettingHereNote =
  "Заведението е на бул. „Васил Априлов“ 118, Пловдив.";
