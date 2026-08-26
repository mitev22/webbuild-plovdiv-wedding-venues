/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Ресторант „Пилето“. Harvested 2026-08-26 from: Google Business профила им (нямат сайт).
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export const venue = {
  slug: "the-chicken",
  name: "Restaurant Pileto",
  nameBg: "Ресторант „Пилето“",
  wordmark: {
    bg: "Пилето",
    en: "Pileto",
  },
  navMark: {
    bg: "РЕСТОРАНТ ПИЛЕТО",
    en: "RESTAURANT PILETO",
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
  address: "бул. „България“ 178, Пловдив",
  addressEn: "178 Bulgaria Blvd, Plovdiv",
  addressStructured: {
    street: "бул. „България“ 178",
    locality: "Пловдив",
  },
  phone: [
    "032 961 061",
  ],
  phoneHref: "tel:+35932961061",
  phoneE164: "+35932961061",
  email: "",
  instagram: "",
  facebook: "https://www.facebook.com/restaurantrantpileto",
  sameAs: [
    "https://www.facebook.com/restaurantrantpileto",
  ],
  mapQuery: "Ресторант+Пилето+България+178+Пловдив",
  maxCapacity: 0,
  capacity: [],
  spaces: [],
  packages: [],
  packageIncludes: [
    "Ресторантът на бул. „България“ 178, Пловдив",
    "Места за гости на открито",
    "Хранене на място и вземане от място",
    "92 на сто от гостите го препоръчват",
  ],
  packageAssist: "",
  whyUs: [
    "4.2 от отзивите в Google",
    "Места за гости на открито",
    "Хранене на място и вземане от място",
    "92 на сто от гостите го препоръчват",
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
    "Потвърждение на името: Google го изписва „The Chicken“, Facebook — „Ресторант Пилето“",
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
    metaTitle: "Ресторант „Пилето“ | Тържества в Пловдив",
    metaDescription: "Ресторант на бул. „България“ 178 в Пловдив, с места на открито. Резервации на 032 961 061.",
    navCity: "Пловдив",
    navSpot: "бул. България",
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
    ch1Title: "Ресторант „Пилето“. Мястото на повода.",
    ch1Lead: "Денят започва с пристигането. Ресторантът е на бул. „България“ 178, Пловдив.",
    ch2Title: "Церемонията",
    ch2Lead: "Домакините сами казват, че малките неща имат винаги най-голямо значение.",
    ch2Body: "Подробности за капацитета и за броя места не са публикувани никъде. Ще бъдат добавени, след като бъдат предоставени от домакините.",
    ch3Title: "Вечерята",
    ch3Lead: "Гостите се хранят вътре или на местата навън.",
    ch4Title: "Вечерта продължава",
    ch4Lead: "Деветдесет и два на сто от гостите препоръчват ресторанта.",
    ch4Body: "Собствен сайт нямат. Всичко, което казват за себе си, стои във Facebook и никъде другаде.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Отговаряме лично на всяко запитване.",
    gettingHereRows: [
      [
        "Адрес",
        "бул. „България“ 178, Пловдив",
      ],
      [
        "Телефон",
        "032 961 061",
      ],
    ],
    whyTitle: "Защо младоженците избират Ресторант „Пилето“",
    packagesTitle: "Какво се знае за мястото",
    packagesLead: "Ресторант „Пилето“ не публикува куверт и пакети. Показано е само това, което самите те съобщават. Опишете тържеството си във формата и ще получите оферта.",
    includesTitle: "На разположение за деня",
    reviewsLead: "Ресторант „Пилето“ няма публикувани отзиви, които да бъдат проверени. Разделът остава празен, докато не бъдат предоставени истински.",
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Ресторант „Пилето“.",
    footerRights: "Ресторант „Пилето“ · Пловдив",
    capacityStats: [
      {
        value: "4.2",
        count: 4.2,
        label: "от отзивите в Google",
      },
      {
        value: "92%",
        label: "от гостите го препоръчват",
      },
      {
        value: "Открито",
        label: "места за гости навън",
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
    metaTitle: "Restaurant Pileto | Celebrations in Plovdiv",
    metaDescription: "A restaurant at 178 Bulgaria Boulevard in Plovdiv, with outdoor seating. Bookings on 032 961 061.",
    navCity: "Plovdiv",
    navSpot: "Bulgaria Blvd",
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
    ch1Title: "Restaurant Pileto. Where the occasion happens.",
    ch1Lead: "The day begins with the arrival. The restaurant sits at 178 Bulgaria Blvd, Plovdiv.",
    ch2Title: "The ceremony",
    ch2Lead: "The hosts say themselves that the small things always matter most.",
    ch2Body: "Details of the capacity and the number of seats are not published anywhere. They will be added once the hosts provide them.",
    ch3Title: "Dinner",
    ch3Lead: "Guests dine inside or at the seating outdoors.",
    ch4Title: "The evening goes on",
    ch4Lead: "Ninety-two per cent of guests recommend the restaurant.",
    ch4Body: "They have no website of their own. Everything they say about themselves sits on Facebook and nowhere else.",
    ch5Title: "The farewell is a beginning",
    ch5Lead: "Tell us about your day: season, guest count, approximate budget. Every enquiry gets a personal reply.",
    gettingHereRows: [
      [
        "Address",
        "178 Bulgaria Blvd, Plovdiv",
      ],
      [
        "Phone",
        "032 961 061",
      ],
    ],
    whyTitle: "Why couples choose Restaurant Pileto",
    packagesTitle: "What is known about the place",
    packagesLead: "Restaurant Pileto publishes no per-head price or packages. Only what they state themselves appears here. Describe your celebration in the form and you will receive an offer.",
    includesTitle: "Available for the day",
    reviewsLead: "Restaurant Pileto has no verifiable published reviews. This section stays empty until real ones are supplied.",
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Restaurant Pileto website.",
    footerRights: "Restaurant Pileto · Plovdiv",
    capacityStats: [
      {
        value: "4.2",
        count: 4.2,
        label: "from its Google reviews",
      },
      {
        value: "92%",
        label: "of guests recommend it",
      },
      {
        value: "Outdoors",
        label: "seating for guests",
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
  "The restaurant at 178 Bulgaria Blvd, Plovdiv",
  "Outdoor seating for guests",
  "Dining in and collection",
  "92 per cent of guests recommend it",
];

export const packageAssistEn =
  "";

export const whyUsEn = [
  "4.2 from its Google reviews",
  "Outdoor seating for guests",
  "Dining in and collection",
  "92 per cent of guests recommend it",
];

export const gettingHereNote =
  "Ресторантът е на бул. „България“ 178, Пловдив.";
