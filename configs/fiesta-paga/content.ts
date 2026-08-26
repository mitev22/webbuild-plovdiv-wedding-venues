/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Сватбена зала „Фиеста“. Harvested 2026-08-26 from: собствения им сайт svatbensalonfiesta.com и Google Business профила.
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export const venue = {
  slug: "fiesta-paga",
  name: "Fiesta Wedding Hall",
  nameBg: "Сватбена зала „Фиеста“",
  wordmark: {
    bg: "Фиеста",
    en: "Fiesta",
  },
  navMark: {
    bg: "СВАТБЕНА ЗАЛА ФИЕСТА",
    en: "FIESTA WEDDING HALL",
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
  address: "бул. „Васил Априлов“ 152А, Пловдив",
  addressEn: "152A Vasil Aprilov Blvd, Plovdiv",
  addressStructured: {
    street: "бул. „Васил Априлов“ 152А",
    locality: "Пловдив",
  },
  phone: [] as string[],
  phoneHref: "",
  phoneE164: "",
  email: "",
  instagram: "",
  facebook: "",
  sameAs: [],
  mapQuery: "Сватбена+зала+Фиеста+бул.+Васил+Априлов+152А+Пловдив",
  maxCapacity: 0,
  capacity: [],
  spaces: [],
  packages: [],
  packageIncludes: [
    "Сватбена зала на бул. „Васил Априлов“ 152А",
    "Работно време всеки ден от 9 до 23 часа",
    "Северната част на Пловдив",
  ],
  packageAssist: "",
  whyUs: [
    "Сватбена зала с пълна петица от отзивите в Google",
    "Отворена всеки ден от 9 до 23 часа",
    "На бул. „Васил Априлов“, с лесен достъп от целия град",
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
    "ТЕЛЕФОН ЗА ВРЪЗКА — настоящият им сайт не съдържа никакъв телефон или имейл",
    "Капацитет на залата и брой места",
    "Потвърждение на името: Google ги изписва „Фиеста-Пага“, а сайтът им „Сватбена зала Фиеста“",
    "Настоящият домейн svatbensalonfiesta.com съдържа чуждо рекламно съдържание и placeholder адрес в Ню Йорк — да се обсъди прехвърляне или нов домейн",
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
    metaTitle: "Сватбена зала „Фиеста“ | Пловдив",
    metaDescription: "Сватбена зала на бул. „Васил Априлов“ 152А в Пловдив, отворена всеки ден от 9 до 23 часа.",
    navCity: "Пловдив",
    navSpot: "Васил Априлов",
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
    ch1Title: "Сватбена зала „Фиеста“. Мястото на деня.",
    ch1Lead: "Денят започва с пристигането. Залата е на бул. „Васил Априлов“ 152А, в северната част на Пловдив, с лесен достъп от целия град.",
    ch2Title: "Церемонията",
    ch2Lead: "Залата е обявена като сватбена и това е единственото, за което се използва.",
    ch2Body: "Подробности за размерите ѝ и за броя места не са публикувани никъде. Ще бъдат добавени, след като бъдат предоставени от домакините.",
    ch3Title: "Вечерята в залата",
    ch3Lead: "Гостите се хранят в залата, която е отворена до единайсет вечерта.",
    ch4Title: "Вечерта продължава",
    ch4Lead: "Залата работи всеки ден от девет сутринта до единайсет вечерта.",
    ch4Body: "Отзивите в Google ѝ дават пълна петица. Настоящият им сайт не съдържа нито телефон, нито адрес за връзка, така че уговарянето на оглед минава през посещение на място.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Отговаряме лично на всяко запитване.",
    gettingHereRows: [
      [
        "Адрес",
        "бул. „Васил Априлов“ 152А, Пловдив",
      ],
      [
        "Район",
        "северната част на града",
      ],
      [
        "Работно време",
        "всеки ден, 9 до 23 часа",
      ],
    ],
    whyTitle: "Защо младоженците избират Сватбена зала „Фиеста“",
    packagesTitle: "Какво се знае за мястото",
    packagesLead: "Сватбена зала „Фиеста“ не публикува куверт и пакети. Показано е само това, което самите те съобщават. Опишете тържеството си във формата и ще получите оферта.",
    includesTitle: "На разположение за деня",
    reviewsLead: "Сватбена зала „Фиеста“ няма публикувани отзиви, които да бъдат проверени. Разделът остава празен, докато не бъдат предоставени истински.",
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Сватбена зала „Фиеста“.",
    footerRights: "Сватбена зала „Фиеста“ · Пловдив",
    capacityStats: [
      {
        value: "5.0",
        count: 5,
        label: "от отзивите в Google",
      },
      {
        value: "9 до 23",
        label: "всеки ден",
      },
      {
        value: "Сватби",
        label: "единствената специализация",
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
    metaTitle: "Fiesta Wedding Hall | Plovdiv",
    metaDescription: "A wedding hall at 152A Vasil Aprilov Boulevard in Plovdiv, open every day from 9 until 23.",
    navCity: "Plovdiv",
    navSpot: "Vasil Aprilov Blvd",
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
    ch1Title: "Fiesta Wedding Hall. Where the day happens.",
    ch1Lead: "The day begins with the arrival. The hall is at 152A Vasil Aprilov Boulevard, in the northern part of Plovdiv, easily reached from across the city.",
    ch2Title: "The ceremony",
    ch2Lead: "The hall is listed as a wedding venue and that is the only thing it is used for.",
    ch2Body: "Details of its dimensions and its number of seats are not published anywhere. They will be added once the hosts provide them.",
    ch3Title: "Dinner in the hall",
    ch3Lead: "Guests dine in the hall, which stays open until eleven at night.",
    ch4Title: "The evening goes on",
    ch4Lead: "The hall is open every day from nine in the morning until eleven at night.",
    ch4Body: "Its Google reviews give it a full five stars. Their current website carries neither a telephone number nor a contact address, so arranging a viewing means calling in person.",
    ch5Title: "The farewell is a beginning",
    ch5Lead: "Tell us about your day: season, guest count, approximate budget. Every enquiry gets a personal reply.",
    gettingHereRows: [
      [
        "Address",
        "152A Vasil Aprilov Blvd, Plovdiv",
      ],
      [
        "District",
        "the northern part of the city",
      ],
      [
        "Opening hours",
        "every day, 9 until 23",
      ],
    ],
    whyTitle: "Why couples choose Fiesta Wedding Hall",
    packagesTitle: "What is known about the place",
    packagesLead: "Fiesta Wedding Hall publishes no per-head price or packages. Only what they state themselves appears here. Describe your celebration in the form and you will receive an offer.",
    includesTitle: "Available for the day",
    reviewsLead: "Fiesta Wedding Hall has no verifiable published reviews. This section stays empty until real ones are supplied.",
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Fiesta Wedding Hall website.",
    footerRights: "Fiesta Wedding Hall · Plovdiv",
    capacityStats: [
      {
        value: "5.0",
        count: 5,
        label: "from its Google reviews",
      },
      {
        value: "9 to 23",
        label: "every day",
      },
      {
        value: "Weddings",
        label: "the only specialism",
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
  "A wedding hall at 152A Vasil Aprilov Boulevard",
  "Open every day from 9 in the morning until 11 at night",
  "The northern part of Plovdiv",
];

export const packageAssistEn =
  "";

export const whyUsEn = [
  "A wedding hall with a full five stars from its Google reviews",
  "Open every day from 9 until 23",
  "On Vasil Aprilov Boulevard, easily reached from across the city",
];

export const gettingHereNote =
  "Залата е на бул. „Васил Априлов“ 152А, в северната част на Пловдив.";
