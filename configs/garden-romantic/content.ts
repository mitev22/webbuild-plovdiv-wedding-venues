/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Ресторант „Романтик“. Harvested 2026-08-26 from: Facebook страницата им и Google Business профила.
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export const venue = {
  slug: "garden-romantic",
  name: "Restaurant Romantic",
  nameBg: "Ресторант „Романтик“",
  wordmark: {
    bg: "Романтик",
    en: "Romantic",
  },
  navMark: {
    bg: "РЕСТОРАНТ РОМАНТИК",
    en: "RESTAURANT ROMANTIC",
  },
  logo: {
    src: "",
    w: 0,
    h: 0,
  },
  town: "Пловдив",
  type: "garden",
  venueNoun: {
    bg: "градината",
    en: "the garden",
  },
  address: "ул. „Вълко Шопов“ 4, жк Тракия, Пловдив",
  addressEn: "4 Valko Shopov St, Trakia, Plovdiv",
  addressStructured: {
    street: "ул. „Вълко Шопов“ 4, жк Тракия",
    locality: "Пловдив",
  },
  phone: [
    "087 700 7375",
  ],
  phoneHref: "tel:+359877007375",
  phoneE164: "+359877007375",
  email: "",
  instagram: "",
  facebook: "https://www.facebook.com/profile.php?id=100063630518349",
  sameAs: [
    "https://www.facebook.com/profile.php?id=100063630518349",
  ],
  mapQuery: "Ресторант+Романтик+Вълко+Шопов+Тракия+Пловдив",
  maxCapacity: 0,
  capacity: [],
  spaces: [],
  packages: [],
  packageIncludes: [
    "Ресторант с градина в жк Тракия",
    "Места за гости на открито",
    "Отворен всеки ден до полунощ",
    "Континентална кухня",
  ],
  packageAssist: "",
  whyUs: [
    "Градина с места на открито",
    "4.4 от отзивите в Google",
    "Над 1600 души следят страницата им",
    "Отворен до полунощ",
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
    "Снимки на градината и на минали сватби (реални фото-слотове)",
    "Капацитет: брой места седнали, коктейл и на открито",
    "Меню и куверт",
    "Web3Forms access key за формата за запитване",
    "Имейл адрес за контакт",
    "Текст за политика за поверителност — преглед от юрист",
    "Капацитет на градината и на салона",
    "Меню и куверт за тържества",
    "Дали поемат сватбени тържества и при какви условия",
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
    metaTitle: "Ресторант „Романтик“ | Тържества в Пловдив",
    metaDescription: "Ресторант с градина на ул. „Вълко Шопов“ 4 в жк Тракия, Пловдив. Места на открито. Запитване на 087 700 7375.",
    navCity: "Пловдив",
    navSpot: "Тракия",
    navSeats: "капацитет по запитване",
    atmosphereNote: "атмосферни визуализации, предстои добавяне на снимки на градината",
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
    ch1Title: "Ресторант „Романтик“. Мястото на повода.",
    ch1Lead: "Денят започва с пристигането. Ресторантът е на ул. „Вълко Шопов“ 4 в жк Тракия, с градина и места за гости на открито.",
    ch2Title: "Церемонията",
    ch2Lead: "Домакините описват мястото като уют, който предразполага към дълги разговори.",
    ch2Body: "Подробности за капацитета и за броя места не са публикувани никъде. Ще бъдат добавени, след като бъдат предоставени от домакините.",
    ch3Title: "Вечерята в градината",
    ch3Lead: "Кухнята е континентална, а част от местата за гости са на открито.",
    ch4Title: "Вечерта продължава",
    ch4Lead: "Ресторантът е отворен всеки ден до полунощ.",
    ch4Body: "Над хиляда и шестстотин души следят страницата им във Facebook. Собствен сайт нямат, така че телефонът остава единственият начин за резервация.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Отговаряме лично на всяко запитване.",
    gettingHereRows: [
      [
        "Адрес",
        "ул. „Вълко Шопов“ 4, жк Тракия, Пловдив",
      ],
      [
        "Работно време",
        "всеки ден до полунощ",
      ],
      [
        "Телефон",
        "087 700 7375",
      ],
    ],
    whyTitle: "Защо младоженците избират Ресторант „Романтик“",
    packagesTitle: "Какво се знае за мястото",
    packagesLead: "Ресторант „Романтик“ не публикува куверт и пакети. Показано е само това, което самите те съобщават. Опишете тържеството си във формата и ще получите оферта.",
    includesTitle: "На разположение за деня",
    reviewsLead: "Ресторант „Романтик“ няма публикувани отзиви, които да бъдат проверени. Разделът остава празен, докато не бъдат предоставени истински.",
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Ресторант „Романтик“.",
    footerRights: "Ресторант „Романтик“ · Пловдив",
    capacityStats: [
      {
        value: "4.4",
        count: 4.4,
        label: "от отзивите в Google",
      },
      {
        value: "1.6K",
        label: "следят страницата им",
      },
      {
        value: "До полунощ",
        label: "всеки ден",
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
    metaTitle: "Restaurant Romantic | Celebrations in Plovdiv",
    metaDescription: "A restaurant with a garden at 4 Valko Shopov Street in Trakia, Plovdiv. Outdoor seating. Enquire on 087 700 7375.",
    navCity: "Plovdiv",
    navSpot: "Trakia",
    navSeats: "capacity on request",
    atmosphereNote: "atmospheric visualisations, photographs of the garden to be added",
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
    ch1Title: "Restaurant Romantic. Where the occasion happens.",
    ch1Lead: "The day begins with the arrival. The restaurant is at 4 Valko Shopov Street in Trakia, with a garden and outdoor seating for guests.",
    ch2Title: "The ceremony",
    ch2Lead: "The hosts describe the place as a comfort that invites long conversations.",
    ch2Body: "Details of its capacity and its number of seats are not published anywhere. They will be added once the hosts provide them.",
    ch3Title: "Dinner in the garden",
    ch3Lead: "The kitchen is continental, and some of the guest seating is outdoors.",
    ch4Title: "The evening goes on",
    ch4Lead: "The restaurant is open every day until midnight.",
    ch4Body: "More than sixteen hundred people follow their Facebook page. They have no website of their own, so the telephone remains the only way to book.",
    ch5Title: "The farewell is a beginning",
    ch5Lead: "Tell us about your day: season, guest count, approximate budget. Every enquiry gets a personal reply.",
    gettingHereRows: [
      [
        "Address",
        "4 Valko Shopov St, Trakia, Plovdiv",
      ],
      [
        "Opening hours",
        "every day until midnight",
      ],
      [
        "Phone",
        "087 700 7375",
      ],
    ],
    whyTitle: "Why couples choose Restaurant Romantic",
    packagesTitle: "What is known about the place",
    packagesLead: "Restaurant Romantic publishes no per-head price or packages. Only what they state themselves appears here. Describe your celebration in the form and you will receive an offer.",
    includesTitle: "Available for the day",
    reviewsLead: "Restaurant Romantic has no verifiable published reviews. This section stays empty until real ones are supplied.",
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Restaurant Romantic website.",
    footerRights: "Restaurant Romantic · Plovdiv",
    capacityStats: [
      {
        value: "4.4",
        count: 4.4,
        label: "from its Google reviews",
      },
      {
        value: "1.6K",
        label: "follow their page",
      },
      {
        value: "Till midnight",
        label: "every day",
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
  "A restaurant with a garden in the Trakia district",
  "Outdoor seating for guests",
  "Open every day until midnight",
  "Continental cuisine",
];

export const packageAssistEn =
  "";

export const whyUsEn = [
  "A garden with outdoor seating",
  "4.4 from its Google reviews",
  "More than 1,600 people follow their page",
  "Open until midnight",
];

export const gettingHereNote =
  "Ресторантът е на ул. „Вълко Шопов“ 4 в жк Тракия.";
