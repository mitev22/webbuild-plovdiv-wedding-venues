/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Хотел „Хеброс“. Harvested 2026-08-26 from: Google Business профила им (нямат сайт).
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export const venue = {
  slug: "hebros",
  name: "Hebros Hotel",
  nameBg: "Хотел „Хеброс“",
  wordmark: {
    bg: "Хеброс",
    en: "Hebros",
  },
  navMark: {
    bg: "ХОТЕЛ ХЕБРОС",
    en: "HEBROS HOTEL",
  },
  logo: {
    src: "",
    w: 0,
    h: 0,
  },
  town: "Пловдив",
  type: "hall",
  venueNoun: {
    bg: "хотела",
    en: "the hotel",
  },
  address: "ул. „Константин Стоилов“ 51, Стария град, Пловдив",
  addressEn: "51 Konstantin Stoilov St, Old Town, Plovdiv",
  addressStructured: {
    street: "ул. „Константин Стоилов“ 51",
    locality: "Пловдив",
  },
  phone: [
    "088 822 0377",
  ],
  phoneHref: "tel:+359888220377",
  phoneE164: "+359888220377",
  email: "",
  instagram: "",
  facebook: "",
  sameAs: [],
  mapQuery: "Хотел+Хеброс+Константин+Стоилов+51+Стария+град+Пловдив",
  maxCapacity: 0,
  capacity: [],
  spaces: [],
  packages: [],
  packageIncludes: [
    "Хотелът на ул. „Константин Стоилов“ 51, Стария град, Пловдив",
    "Хотел в Стария град на Пловдив",
    "Стаи за гостите на място",
    "Сред възрожденските къщи на хълма",
  ],
  packageAssist: "",
  whyUs: [
    "4.3 от отзивите в Google",
    "Хотел в Стария град на Пловдив",
    "Стаи за гостите на място",
    "Сред възрожденските къщи на хълма",
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
    "Снимки на хотела и на минали сватби (реални фото-слотове)",
    "Капацитет: брой места седнали, коктейл и на открито",
    "Меню и куверт",
    "Web3Forms access key за формата за запитване",
    "Имейл адрес за контакт",
    "Текст за политика за поверителност — преглед от юрист",
    "Брой стаи и капацитет за тържество",
    "Меню и куверт",
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
    metaTitle: "Хотел „Хеброс“ | Тържества в Стария град, Пловдив",
    metaDescription: "Хотел на ул. „Константин Стоилов“ 51 в Стария град на Пловдив, със стаи за гостите. Запитване на 088 822 0377.",
    navCity: "Пловдив",
    navSpot: "Старият град",
    navSeats: "капацитет по запитване",
    atmosphereNote: "атмосферни визуализации, предстои добавяне на снимки на хотела",
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
    ch1Title: "Хотел „Хеброс“. Мястото на повода.",
    ch1Lead: "Денят започва с пристигането. Хотелът е на ул. „Константин Стоилов“ 51, Стария град, Пловдив, в Стария град на Пловдив.",
    ch2Title: "Церемонията",
    ch2Lead: "Хотелът е в Стария град, сред възрожденските къщи на хълма.",
    ch2Body: "Подробности за капацитета и за броя места не са публикувани никъде. Ще бъдат добавени, след като бъдат предоставени от домакините.",
    ch3Title: "Вечерята",
    ch3Lead: "Гостите се хранят на място, а тези, които остават, спят в стаите на хотела.",
    ch4Title: "Вечерта продължава",
    ch4Lead: "Гостите му дават 4.3 в Google.",
    ch4Body: "Собствен сайт няма, така че телефонът остава единственият начин за резервация.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Отговаряме лично на всяко запитване.",
    gettingHereRows: [
      [
        "Адрес",
        "ул. „Константин Стоилов“ 51, Стария град, Пловдив",
      ],
      [
        "Телефон",
        "088 822 0377",
      ],
    ],
    whyTitle: "Защо младоженците избират Хотел „Хеброс“",
    packagesTitle: "Какво се знае за мястото",
    packagesLead: "Хотел „Хеброс“ не публикува куверт и пакети. Показано е само това, което самите те съобщават. Опишете тържеството си във формата и ще получите оферта.",
    includesTitle: "На разположение за деня",
    reviewsLead: "Хотел „Хеброс“ няма публикувани отзиви, които да бъдат проверени. Разделът остава празен, докато не бъдат предоставени истински.",
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Хотел „Хеброс“.",
    footerRights: "Хотел „Хеброс“ · Пловдив",
    capacityStats: [
      {
        value: "4.3",
        count: 4.3,
        label: "от отзивите в Google",
      },
      {
        value: "Старият град",
        label: "кварталът на хотела",
      },
      {
        value: "Стаи",
        label: "за гостите на място",
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
    metaTitle: "Hebros Hotel | Celebrations in Plovdiv Old Town",
    metaDescription: "A hotel at 51 Konstantin Stoilov Street in the Old Town of Plovdiv, with rooms for guests. Enquire on 088 822 0377.",
    navCity: "Plovdiv",
    navSpot: "Old Town",
    navSeats: "capacity on request",
    atmosphereNote: "atmospheric visualisations, photographs of the hotel to be added",
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
    ch1Title: "Hebros Hotel. Where the occasion happens.",
    ch1Lead: "The day begins with the arrival. The hotel sits at 51 Konstantin Stoilov St, Old Town, Plovdiv, in the Old Town of Plovdiv.",
    ch2Title: "The ceremony",
    ch2Lead: "The hotel is in the Old Town, among the revival houses on the hill.",
    ch2Body: "Details of the capacity and the number of seats are not published anywhere. They will be added once the hosts provide them.",
    ch3Title: "Dinner",
    ch3Lead: "Guests dine on site, and those who stay sleep in the hotel's rooms.",
    ch4Title: "The evening goes on",
    ch4Lead: "Its guests rate it 4.3 on Google.",
    ch4Body: "There is no website, so the telephone remains the only way to book.",
    ch5Title: "The farewell is a beginning",
    ch5Lead: "Tell us about your day: season, guest count, approximate budget. Every enquiry gets a personal reply.",
    gettingHereRows: [
      [
        "Address",
        "51 Konstantin Stoilov St, Old Town, Plovdiv",
      ],
      [
        "Phone",
        "088 822 0377",
      ],
    ],
    whyTitle: "Why couples choose Hebros Hotel",
    packagesTitle: "What is known about the place",
    packagesLead: "Hebros Hotel publishes no per-head price or packages. Only what they state themselves appears here. Describe your celebration in the form and you will receive an offer.",
    includesTitle: "Available for the day",
    reviewsLead: "Hebros Hotel has no verifiable published reviews. This section stays empty until real ones are supplied.",
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Hebros Hotel website.",
    footerRights: "Hebros Hotel · Plovdiv",
    capacityStats: [
      {
        value: "4.3",
        count: 4.3,
        label: "from its Google reviews",
      },
      {
        value: "The Old Town",
        label: "where it stands",
      },
      {
        value: "Rooms",
        label: "for guests on site",
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
  "The hotel at 51 Konstantin Stoilov St, Old Town, Plovdiv",
  "A hotel in the Old Town of Plovdiv",
  "Rooms for guests on site",
  "Among the revival houses on the hill",
];

export const packageAssistEn =
  "";

export const whyUsEn = [
  "4.3 from its Google reviews",
  "A hotel in the Old Town of Plovdiv",
  "Rooms for guests on site",
  "Among the revival houses on the hill",
];

export const gettingHereNote =
  "Хотелът е на ул. „Константин Стоилов“ 51, Стария град, Пловдив.";
