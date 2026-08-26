/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Сватбен ресторант „Русалка“. Harvested 2026-08-26 from: Google Business профила им (нямат сайт).
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export const venue = {
  slug: "rusalka",
  name: "Rusalka Wedding Restaurant",
  nameBg: "Сватбен ресторант „Русалка“",
  wordmark: {
    bg: "Русалка",
    en: "Rusalka",
  },
  navMark: {
    bg: "СВАТБЕН РЕСТОРАНТ РУСАЛКА",
    en: "RUSALKA",
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
  address: "бул. „Дунав“ 194, Пловдив",
  addressEn: "194 Dunav Blvd, Plovdiv",
  addressStructured: {
    street: "бул. „Дунав“ 194",
    locality: "Пловдив",
  },
  phone: [
    "089 555 8949",
  ],
  phoneHref: "tel:+359895558949",
  phoneE164: "+359895558949",
  email: "",
  instagram: "",
  facebook: "",
  sameAs: [],
  mapQuery: "Сватбен+ресторант+Русалка+бул.+Дунав+194+Пловдив",
  maxCapacity: 0,
  capacity: [],
  spaces: [],
  packages: [],
  packageIncludes: [
    "Ресторант, обявен изцяло като сватбен",
    "На бул. „Дунав“ 194, в северната част на Пловдив",
    "Дати се уговарят по телефон",
  ],
  packageAssist: "",
  whyUs: [
    "Сватбите са в самото име на ресторанта",
    "На бул. „Дунав“, с лесен достъп и паркиране в квартала",
    "Свободните дати се проверяват с едно обаждане",
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
    "Капацитет на ресторанта и брой места",
    "Меню и куверт",
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
    metaTitle: "Сватбен ресторант „Русалка“ | Пловдив",
    metaDescription: "Сватбен ресторант на бул. „Дунав“ 194 в Пловдив. Запитване за дата на 089 555 8949.",
    navCity: "Пловдив",
    navSpot: "бул. Дунав",
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
    ch1Title: "Сватбен ресторант „Русалка“. Само за този ден.",
    ch1Lead: "Денят започва с пристигането. Ресторантът е на бул. „Дунав“ 194, в северната част на Пловдив, встрани от центъра.",
    ch2Title: "Церемонията",
    ch2Lead: "Ресторантът е обявен като сватбен и това е поводът, за който се предлага.",
    ch2Body: "Подробности за капацитета и за броя места не са публикувани никъде. Ще бъдат добавени, след като бъдат предоставени от домакините.",
    ch3Title: "Вечерята в ресторанта",
    ch3Lead: "Гостите се хранят на място, в ресторанта на бул. „Дунав“.",
    ch4Title: "Вечерта продължава",
    ch4Lead: "Свободните дати се проверяват по телефон.",
    ch4Body: "Домакините нямат сайт и нямат страница в социалните мрежи, така че обаждането е единственият начин да се стигне до тях.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Отговаряме лично на всяко запитване.",
    gettingHereRows: [
      [
        "Адрес",
        "бул. „Дунав“ 194, Пловдив",
      ],
      [
        "Район",
        "северната част на града",
      ],
      [
        "Телефон",
        "089 555 8949",
      ],
    ],
    whyTitle: "Защо младоженците избират Сватбен ресторант „Русалка“",
    packagesTitle: "Какво се знае за мястото",
    packagesLead: "Сватбен ресторант „Русалка“ не публикува куверт и пакети. Показано е само това, което самите те съобщават. Опишете тържеството си във формата и ще получите оферта.",
    includesTitle: "На разположение за деня",
    reviewsLead: "Сватбен ресторант „Русалка“ няма публикувани отзиви, които да бъдат проверени. Разделът остава празен, докато не бъдат предоставени истински.",
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Сватбен ресторант „Русалка“.",
    footerRights: "Сватбен ресторант „Русалка“ · Пловдив",
    capacityStats: [
      {
        value: "Сватби",
        label: "единствената специализация",
      },
      {
        value: "бул. Дунав",
        label: "северният Пловдив",
      },
      {
        value: "По телефон",
        label: "проверка на свободна дата",
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
    metaTitle: "Rusalka Wedding Restaurant | Plovdiv",
    metaDescription: "A wedding restaurant at 194 Dunav Boulevard in Plovdiv. Enquire about a date on 089 555 8949.",
    navCity: "Plovdiv",
    navSpot: "Dunav Blvd",
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
    ch1Title: "Rusalka Wedding Restaurant. For this day alone.",
    ch1Lead: "The day begins with the arrival. The restaurant is at 194 Dunav Boulevard, in the northern part of Plovdiv, away from the centre.",
    ch2Title: "The ceremony",
    ch2Lead: "The restaurant is listed as a wedding venue and that is the occasion it is offered for.",
    ch2Body: "Details of the capacity and the number of seats are not published anywhere. They will be added once the hosts provide them.",
    ch3Title: "Dinner in the restaurant",
    ch3Lead: "Guests dine on site, in the restaurant on Dunav Boulevard.",
    ch4Title: "The evening goes on",
    ch4Lead: "Free dates are checked by telephone.",
    ch4Body: "The hosts have no website and no social page, so a call is the only way to reach them.",
    ch5Title: "The farewell is a beginning",
    ch5Lead: "Tell us about your day: season, guest count, approximate budget. Every enquiry gets a personal reply.",
    gettingHereRows: [
      [
        "Address",
        "194 Dunav Blvd, Plovdiv",
      ],
      [
        "District",
        "the northern part of the city",
      ],
      [
        "Phone",
        "089 555 8949",
      ],
    ],
    whyTitle: "Why couples choose Rusalka Wedding Restaurant",
    packagesTitle: "What is known about the place",
    packagesLead: "Rusalka Wedding Restaurant publishes no per-head price or packages. Only what they state themselves appears here. Describe your celebration in the form and you will receive an offer.",
    includesTitle: "Available for the day",
    reviewsLead: "Rusalka Wedding Restaurant has no verifiable published reviews. This section stays empty until real ones are supplied.",
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Rusalka Wedding Restaurant website.",
    footerRights: "Rusalka Wedding Restaurant · Plovdiv",
    capacityStats: [
      {
        value: "Weddings",
        label: "the only specialism",
      },
      {
        value: "Dunav Blvd",
        label: "northern Plovdiv",
      },
      {
        value: "By phone",
        label: "checking a free date",
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
  "A restaurant listed entirely as a wedding venue",
  "At 194 Dunav Boulevard, in the northern part of Plovdiv",
  "Dates are arranged by telephone",
];

export const packageAssistEn =
  "";

export const whyUsEn = [
  "Weddings are in the restaurant's very name",
  "On Dunav Boulevard, easily reached, with parking in the neighbourhood",
  "A single call checks which dates are free",
];

export const gettingHereNote =
  "Ресторантът е на бул. „Дунав“ 194, в северната част на Пловдив.";
