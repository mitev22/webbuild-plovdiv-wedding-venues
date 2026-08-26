/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Ресторант „Хитър Петър“. Harvested 2026-08-26 from: собствения им сайт hitarpetar.net и Google Business профила.
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export const venue = {
  slug: "hitar-petar",
  name: "Hitar Petar Restaurant",
  nameBg: "Ресторант „Хитър Петър“",
  wordmark: {
    bg: "Хитър Петър",
    en: "Hitar Petar",
  },
  navMark: {
    bg: "ХИТЪР ПЕТЪР",
    en: "HITAR PETAR",
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
  address: "бул. „Васил Априлов“ 140, Пловдив",
  addressEn: "140 Vasil Aprilov Blvd, Plovdiv",
  addressStructured: {
    street: "бул. „Васил Априлов“ 140",
    locality: "Пловдив",
  },
  phone: [
    "032 968 778",
  ],
  phoneHref: "tel:+35932968778",
  phoneE164: "+35932968778",
  email: "",
  instagram: "",
  facebook: "",
  sameAs: [],
  mapQuery: "Ресторант+Хитър+Петър+Васил+Априлов+140+Пловдив",
  maxCapacity: 0,
  capacity: [],
  spaces: [],
  packages: [],
  packageIncludes: [
    "Ресторантът на бул. „Васил Априлов“ 140, Пловдив",
    "Ресторант на бул. „Васил Априлов“ 140",
    "Традиционно българско име и кухня",
  ],
  packageAssist: "",
  whyUs: [
    "4.2 от отзивите в Google",
    "Ресторант на бул. „Васил Априлов“ 140",
    "Традиционно българско име и кухня",
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
    "Сайтът им е замръзнал на 2020 — да се обсъди пренасочване на домейна",
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
    metaTitle: "Ресторант „Хитър Петър“ | Тържества в Пловдив",
    metaDescription: "Ресторант на бул. „Васил Априлов“ 140 в Пловдив. Резервации на 032 968 778.",
    navCity: "Пловдив",
    navSpot: "Васил Априлов",
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
    ch1Title: "Ресторант „Хитър Петър“. Мястото на повода.",
    ch1Lead: "Денят започва с пристигането. Ресторантът е на бул. „Васил Априлов“ 140, Пловдив.",
    ch2Title: "Церемонията",
    ch2Lead: "Ресторантът носи името на най-известния български шегобиец.",
    ch2Body: "Подробности за капацитета и за броя места не са публикувани никъде. Ще бъдат добавени, след като бъдат предоставени от домакините.",
    ch3Title: "Вечерята",
    ch3Lead: "Гостите се хранят в салона на ресторанта.",
    ch4Title: "Вечерта продължава",
    ch4Lead: "Гостите му дават 4.2 в Google.",
    ch4Body: "Сегашният им сайт не е пипан от 2020 година и се зарежда нестабилно, така че телефонът остава по-сигурният начин за резервация.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Отговаряме лично на всяко запитване.",
    gettingHereRows: [
      [
        "Адрес",
        "бул. „Васил Априлов“ 140, Пловдив",
      ],
      [
        "Телефон",
        "032 968 778",
      ],
    ],
    whyTitle: "Защо младоженците избират Ресторант „Хитър Петър“",
    packagesTitle: "Какво се знае за мястото",
    packagesLead: "Ресторант „Хитър Петър“ не публикува куверт и пакети. Показано е само това, което самите те съобщават. Опишете тържеството си във формата и ще получите оферта.",
    includesTitle: "На разположение за деня",
    reviewsLead: "Ресторант „Хитър Петър“ няма публикувани отзиви, които да бъдат проверени. Разделът остава празен, докато не бъдат предоставени истински.",
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Ресторант „Хитър Петър“.",
    footerRights: "Ресторант „Хитър Петър“ · Пловдив",
    capacityStats: [
      {
        value: "4.2",
        count: 4.2,
        label: "от отзивите в Google",
      },
      {
        value: "Васил Априлов",
        label: "адресът на ресторанта",
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
    metaTitle: "Hitar Petar Restaurant | Celebrations in Plovdiv",
    metaDescription: "A restaurant at 140 Vasil Aprilov Boulevard in Plovdiv. Bookings on 032 968 778.",
    navCity: "Plovdiv",
    navSpot: "Vasil Aprilov Blvd",
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
    ch1Title: "Hitar Petar Restaurant. Where the occasion happens.",
    ch1Lead: "The day begins with the arrival. The restaurant sits at 140 Vasil Aprilov Blvd, Plovdiv.",
    ch2Title: "The ceremony",
    ch2Lead: "The restaurant carries the name of Bulgaria's best-known trickster.",
    ch2Body: "Details of the capacity and the number of seats are not published anywhere. They will be added once the hosts provide them.",
    ch3Title: "Dinner",
    ch3Lead: "Guests dine in the restaurant's room.",
    ch4Title: "The evening goes on",
    ch4Lead: "Its guests rate it 4.2 on Google.",
    ch4Body: "Their current site has not been touched since 2020 and loads unreliably, so the telephone remains the surer way to book.",
    ch5Title: "The farewell is a beginning",
    ch5Lead: "Tell us about your day: season, guest count, approximate budget. Every enquiry gets a personal reply.",
    gettingHereRows: [
      [
        "Address",
        "140 Vasil Aprilov Blvd, Plovdiv",
      ],
      [
        "Phone",
        "032 968 778",
      ],
    ],
    whyTitle: "Why couples choose Hitar Petar Restaurant",
    packagesTitle: "What is known about the place",
    packagesLead: "Hitar Petar Restaurant publishes no per-head price or packages. Only what they state themselves appears here. Describe your celebration in the form and you will receive an offer.",
    includesTitle: "Available for the day",
    reviewsLead: "Hitar Petar Restaurant has no verifiable published reviews. This section stays empty until real ones are supplied.",
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Hitar Petar Restaurant website.",
    footerRights: "Hitar Petar Restaurant · Plovdiv",
    capacityStats: [
      {
        value: "4.2",
        count: 4.2,
        label: "from its Google reviews",
      },
      {
        value: "Vasil Aprilov",
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
  "The restaurant at 140 Vasil Aprilov Blvd, Plovdiv",
  "A restaurant at 140 Vasil Aprilov Boulevard",
  "A traditional Bulgarian name and kitchen",
];

export const packageAssistEn =
  "";

export const whyUsEn = [
  "4.2 from its Google reviews",
  "A restaurant at 140 Vasil Aprilov Boulevard",
  "A traditional Bulgarian name and kitchen",
];

export const gettingHereNote =
  "Ресторантът е на бул. „Васил Априлов“ 140, Пловдив.";
