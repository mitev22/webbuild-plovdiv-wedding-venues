/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Ресторант „Фиеста“. Harvested 2026-08-26 from: Google Business профила им (нямат сайт).
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export const venue = {
  slug: "restorant-fiesta",
  name: "Restaurant Fiesta",
  nameBg: "Ресторант „Фиеста“",
  wordmark: {
    bg: "Фиеста",
    en: "Fiesta",
  },
  navMark: {
    bg: "РЕСТОРАНТ ФИЕСТА",
    en: "RESTAURANT FIESTA",
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
  address: "ул. „Пере Тошев“ 45, Пловдив",
  addressEn: "45 Pere Toshev St, Plovdiv",
  addressStructured: {
    street: "ул. „Пере Тошев“ 45",
    locality: "Пловдив",
  },
  phone: [
    "087 820 1734",
  ],
  phoneHref: "tel:+359878201734",
  phoneE164: "+359878201734",
  email: "",
  instagram: "",
  facebook: "",
  sameAs: [],
  mapQuery: "Ресторант+Фиеста+Пере+Тошев+45+Пловдив",
  maxCapacity: 0,
  capacity: [],
  spaces: [],
  packages: [],
  packageIncludes: [
    "Ресторант на ул. „Пере Тошев“ 45",
    "Отворен от 8:30 сутринта до полунощ",
    "Приема поръчки",
    "В южната част на Пловдив",
  ],
  packageAssist: "",
  whyUs: [
    "4.3 от отзивите в Google",
    "Отворен от сутрин до полунощ",
    "Дълъг работен ден, удобен за тържества",
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
    "Капацитет на салона и брой места",
    "Меню и куверт за тържества",
    "ВНИМАНИЕ: в Пловдив има и „Сватбена зала Фиеста“ на бул. Васил Априлов — различен обект, да не се смесват",
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
    metaTitle: "Ресторант „Фиеста“ | Тържества в Пловдив",
    metaDescription: "Ресторант на ул. „Пере Тошев“ 45 в Пловдив, отворен от 8:30 до полунощ. Запитване на 087 820 1734.",
    navCity: "Пловдив",
    navSpot: "Пере Тошев",
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
    ch1Title: "Ресторант „Фиеста“. Мястото на повода.",
    ch1Lead: "Денят започва с пристигането. Ресторантът е на ул. „Пере Тошев“ 45, в южната част на Пловдив.",
    ch2Title: "Церемонията",
    ch2Lead: "Ресторантът поема поводи и приема поръчки.",
    ch2Body: "Подробности за капацитета и за броя места не са публикувани никъде. Ще бъдат добавени, след като бъдат предоставени от домакините.",
    ch3Title: "Вечерята в ресторанта",
    ch3Lead: "Кухнята работи от осем и половина сутринта.",
    ch4Title: "Вечерта продължава",
    ch4Lead: "Ресторантът е отворен до полунощ.",
    ch4Body: "Гостите му дават 4.3 в Google. Собствен сайт няма, така че телефонът остава единственият начин за резервация.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Отговаряме лично на всяко запитване.",
    gettingHereRows: [
      [
        "Адрес",
        "ул. „Пере Тошев“ 45, Пловдив",
      ],
      [
        "Работно време",
        "8:30 до полунощ",
      ],
      [
        "Телефон",
        "087 820 1734",
      ],
    ],
    whyTitle: "Защо младоженците избират Ресторант „Фиеста“",
    packagesTitle: "Какво се знае за мястото",
    packagesLead: "Ресторант „Фиеста“ не публикува куверт и пакети. Показано е само това, което самите те съобщават. Опишете тържеството си във формата и ще получите оферта.",
    includesTitle: "На разположение за деня",
    reviewsLead: "Ресторант „Фиеста“ няма публикувани отзиви, които да бъдат проверени. Разделът остава празен, докато не бъдат предоставени истински.",
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Ресторант „Фиеста“.",
    footerRights: "Ресторант „Фиеста“ · Пловдив",
    capacityStats: [
      {
        value: "4.3",
        count: 4.3,
        label: "от отзивите в Google",
      },
      {
        value: "8:30 до 24",
        label: "работно време",
      },
      {
        value: "Поръчки",
        label: "приемат се",
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
    metaTitle: "Restaurant Fiesta | Celebrations in Plovdiv",
    metaDescription: "A restaurant at 45 Pere Toshev Street in Plovdiv, open from 8:30 until midnight. Enquire on 087 820 1734.",
    navCity: "Plovdiv",
    navSpot: "Pere Toshev St",
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
    ch1Title: "Restaurant Fiesta. Where the occasion happens.",
    ch1Lead: "The day begins with the arrival. The restaurant is at 45 Pere Toshev Street, in the southern part of Plovdiv.",
    ch2Title: "The ceremony",
    ch2Lead: "The restaurant takes on occasions and accepts orders.",
    ch2Body: "Details of the capacity and the number of seats are not published anywhere. They will be added once the hosts provide them.",
    ch3Title: "Dinner in the restaurant",
    ch3Lead: "The kitchen works from half past eight in the morning.",
    ch4Title: "The evening goes on",
    ch4Lead: "The restaurant stays open until midnight.",
    ch4Body: "Its guests rate it 4.3 on Google. There is no website, so the telephone remains the only way to book.",
    ch5Title: "The farewell is a beginning",
    ch5Lead: "Tell us about your day: season, guest count, approximate budget. Every enquiry gets a personal reply.",
    gettingHereRows: [
      [
        "Address",
        "45 Pere Toshev St, Plovdiv",
      ],
      [
        "Opening hours",
        "8:30 until midnight",
      ],
      [
        "Phone",
        "087 820 1734",
      ],
    ],
    whyTitle: "Why couples choose Restaurant Fiesta",
    packagesTitle: "What is known about the place",
    packagesLead: "Restaurant Fiesta publishes no per-head price or packages. Only what they state themselves appears here. Describe your celebration in the form and you will receive an offer.",
    includesTitle: "Available for the day",
    reviewsLead: "Restaurant Fiesta has no verifiable published reviews. This section stays empty until real ones are supplied.",
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Restaurant Fiesta website.",
    footerRights: "Restaurant Fiesta · Plovdiv",
    capacityStats: [
      {
        value: "4.3",
        count: 4.3,
        label: "from its Google reviews",
      },
      {
        value: "8:30 to 24",
        label: "opening hours",
      },
      {
        value: "Orders",
        label: "accepted",
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
  "A restaurant at 45 Pere Toshev Street",
  "Open from half past eight in the morning until midnight",
  "Takes orders",
  "In the southern part of Plovdiv",
];

export const packageAssistEn =
  "";

export const whyUsEn = [
  "4.3 from its Google reviews",
  "Open from morning until midnight",
  "A long working day, convenient for celebrations",
];

export const gettingHereNote =
  "Ресторантът е на ул. „Пере Тошев“ 45, в южната част на Пловдив.";
