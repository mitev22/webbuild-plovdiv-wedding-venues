/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Ресторант „Панорама“. Harvested 2026-08-26 from: Google Business профила им (нямат сайт).
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export const venue = {
  slug: "panorama-sp",
  name: "Panorama Restaurant",
  nameBg: "Ресторант „Панорама“",
  wordmark: {
    bg: "Панорама",
    en: "Panorama",
  },
  navMark: {
    bg: "РЕСТОРАНТ ПАНОРАМА",
    en: "PANORAMA",
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
  address: "бул. „България“ 97, ет. 22, Пловдив",
  addressEn: "97 Bulgaria Blvd, floor 22, Plovdiv",
  addressStructured: {
    street: "бул. „България“ 97, ет. 22",
    locality: "Пловдив",
  },
  phone: [
    "088 868 6817",
  ],
  phoneHref: "tel:+359888686817",
  phoneE164: "+359888686817",
  email: "",
  instagram: "",
  facebook: "",
  sameAs: [],
  mapQuery: "Ресторант+Панорама+хотел+Санкт+Петербург+България+97+Пловдив",
  maxCapacity: 0,
  capacity: [],
  spaces: [],
  packages: [],
  packageIncludes: [
    "Ресторантът на бул. „България“ 97, ет. 22, Пловдив",
    "Ресторант на двайсет и втория етаж",
    "Панорамен изглед над целия град",
    "В сградата на хотел „Санкт Петербург“",
  ],
  packageAssist: "",
  whyUs: [
    "Ресторант на двайсет и втория етаж",
    "Панорамен изглед над целия град",
    "В сградата на хотел „Санкт Петербург“",
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
    "Капацитет на панорамния салон и брой места",
    "Меню и куверт",
    "Дали залата се наема самостоятелно за сватба",
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
    metaTitle: "Ресторант „Панорама“ | Тържества над Пловдив",
    metaDescription: "Панорамен ресторант на двайсет и втория етаж на бул. „България“ 97 в Пловдив. Запитване на 088 868 6817.",
    navCity: "Пловдив",
    navSpot: "22-ият етаж",
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
    ch1Title: "Ресторант „Панорама“. Мястото на повода.",
    ch1Lead: "Денят започва с пристигането. Ресторантът е на бул. „България“ 97, ет. 22, Пловдив, на двайсет и втория етаж над Пловдив.",
    ch2Title: "Церемонията",
    ch2Lead: "Ресторантът е на двайсет и втория етаж, с изглед над целия Пловдив.",
    ch2Body: "Подробности за капацитета и за броя места не са публикувани никъде. Ще бъдат добавени, след като бъдат предоставени от домакините.",
    ch3Title: "Вечерята",
    ch3Lead: "Гостите се хранят високо над града, покрай прозорците.",
    ch4Title: "Вечерта продължава",
    ch4Lead: "Изгледът от двайсет и втория етаж поема вечерта.",
    ch4Body: "Собствен сайт няма, така че телефонът остава единственият начин за резервация.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Отговаряме лично на всяко запитване.",
    gettingHereRows: [
      [
        "Адрес",
        "бул. „България“ 97, ет. 22, Пловдив",
      ],
      [
        "Телефон",
        "088 868 6817",
      ],
    ],
    whyTitle: "Защо младоженците избират Ресторант „Панорама“",
    packagesTitle: "Какво се знае за мястото",
    packagesLead: "Ресторант „Панорама“ не публикува куверт и пакети. Показано е само това, което самите те съобщават. Опишете тържеството си във формата и ще получите оферта.",
    includesTitle: "На разположение за деня",
    reviewsLead: "Ресторант „Панорама“ няма публикувани отзиви, които да бъдат проверени. Разделът остава празен, докато не бъдат предоставени истински.",
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Ресторант „Панорама“.",
    footerRights: "Ресторант „Панорама“ · Пловдив",
    capacityStats: [
      {
        value: "22-ият",
        count: 22,
        label: "етаж над града",
      },
      {
        value: "Панорама",
        label: "изглед над Пловдив",
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
    metaTitle: "Panorama Restaurant | Celebrations above Plovdiv",
    metaDescription: "A panoramic restaurant on the twenty-second floor at 97 Bulgaria Boulevard in Plovdiv. Enquire on 088 868 6817.",
    navCity: "Plovdiv",
    navSpot: "22nd floor",
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
    ch1Title: "Panorama Restaurant. Where the occasion happens.",
    ch1Lead: "The day begins with the arrival. The restaurant sits at 97 Bulgaria Blvd, floor 22, Plovdiv, on the twenty-second floor above Plovdiv.",
    ch2Title: "The ceremony",
    ch2Lead: "The restaurant sits on the twenty-second floor, with a view over the whole of Plovdiv.",
    ch2Body: "Details of the capacity and the number of seats are not published anywhere. They will be added once the hosts provide them.",
    ch3Title: "Dinner",
    ch3Lead: "Guests dine high above the city, along the windows.",
    ch4Title: "The evening goes on",
    ch4Lead: "The view from the twenty-second floor carries the evening.",
    ch4Body: "There is no website, so the telephone remains the only way to book.",
    ch5Title: "The farewell is a beginning",
    ch5Lead: "Tell us about your day: season, guest count, approximate budget. Every enquiry gets a personal reply.",
    gettingHereRows: [
      [
        "Address",
        "97 Bulgaria Blvd, floor 22, Plovdiv",
      ],
      [
        "Phone",
        "088 868 6817",
      ],
    ],
    whyTitle: "Why couples choose Panorama Restaurant",
    packagesTitle: "What is known about the place",
    packagesLead: "Panorama Restaurant publishes no per-head price or packages. Only what they state themselves appears here. Describe your celebration in the form and you will receive an offer.",
    includesTitle: "Available for the day",
    reviewsLead: "Panorama Restaurant has no verifiable published reviews. This section stays empty until real ones are supplied.",
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Panorama Restaurant website.",
    footerRights: "Panorama Restaurant · Plovdiv",
    capacityStats: [
      {
        value: "22nd",
        count: 22,
        label: "floor above the city",
      },
      {
        value: "Panorama",
        label: "a view over Plovdiv",
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
  "The restaurant at 97 Bulgaria Blvd, floor 22, Plovdiv",
  "A restaurant on the twenty-second floor",
  "A panoramic view over the whole city",
  "In the Sankt Peterburg hotel building",
];

export const packageAssistEn =
  "";

export const whyUsEn = [
  "A restaurant on the twenty-second floor",
  "A panoramic view over the whole city",
  "In the Sankt Peterburg hotel building",
];

export const gettingHereNote =
  "Ресторантът е на бул. „България“ 97, ет. 22, Пловдив.";
