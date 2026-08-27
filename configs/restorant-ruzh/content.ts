/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Harvested 2026-07-22. Руж has NO site of its own — its presence is a weddingday.bg
 * listing (customerbg/651), where the website and Facebook fields are empty. Copy below
 * is their own submitted portal text, verbatim. ⚠ The campaign spec records a куверт of
 * 25 лв seen on a portal; that figure could NOT be reproduced today and is therefore NOT
 * published here — it sits on the handoff list instead. Reviews absent.
 */

export const venue = {
  slug: "restorant-ruzh",
  name: "Restaurant Ruzh",
  nameBg: "Сватбен ресторант Руж",
  wordmark: {
    bg: "Ресторант Руж",
    en: "Restaurant Ruzh",
  },
  navMark: {
    bg: "РЕСТОРАНТ РУЖ",
    en: "RESTAURANT RUZH",
  },
  logo: {
    src: "",
    w: 0,
    h: 0,
  },
  town: "Пловдив",
  type: "restaurant",
  venueNoun: {
    bg: "залата",
    en: "the room",
  },
  address: "ул. Брезовско шосе 147, Пловдив",
  addressEn: "147 Brezovsko Shose, Plovdiv",
  addressStructured: {
    street: "ул. Брезовско шосе 147",
    locality: "Пловдив",
  },
  phone: [
    "0898 940 490",
  ],
  phoneHref: "tel:+359898940490",
  phoneE164: "+359898940490",
  email: "",
  instagram: "",
  facebook: "",
  sameAs: [
    "https://www.weddingday.bg/customerbg/651",
  ],
  mapQuery: "Сватбен+ресторант+Руж+ул.+Брезовско+шосе+147+Пловдив",
  maxCapacity: 120,
  capacity: [
    {
      configuration: "места",
      max: 120,
    },
  ],
  spaces: [
    {
      name: "Интериорната зала",
      capacity: 120,
      indoor: true,
      note: "чар, уют и спокойствие, с разрешение за изнесен ритуал",
    },
  ],
  packages: [] as { name: string; menu: string; feesWaived: boolean; gift?: string }[],
  packageIncludes: [
    "Интериорна зала с максимален капацитет до 120 места",
    "Разрешение за изнесен ритуал",
    "Денонощна жива охрана",
    "Паркинг към сградата",
    "Възможност за необезпокоявани мероприятия до ранни зори",
    "Осветление, което преобразява залата в късните часове",
    "Контакт с домакин: Магдалена Кабурова",
  ],
  packageAssist: "Благодарение на локацията си ресторантът има възможност за необезпокоявани мероприятия до ранни зори, а сградата разполага с денонощна жива охрана и паркинг.",
  whyUs: [
    "Максимален капацитет до 120 места",
    "Разрешение за изнесен ритуал на място",
    "Мероприятия до ранни зори, без ограничение от съседи",
    "Денонощна жива охрана на сградата",
    "Паркинг към ресторанта",
    "Интериорна зала с чар, уют и спокойствие",
    "Обстановка, която се преобразява под червени светлини и свещи",
    "Личен контакт с домакина",
  ],
  parking: "Паркинг към сградата",
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
    "Собствен сайт и домейн: присъствието е портален профил в weddingday.bg, където полетата за уебсайт и Facebook са празни",
    "Куверт: спецификацията на кампанията отбелязва 25 лв, видени на портал, но тази цена не се потвърждава днес и НЕ е публикувана тук — да бъде потвърдена от собственика",
    "Капацитет по конфигурации: публикувано е само общо „до 120 места“",
    "Брой паркоместа: спецификацията сочи 200 паркоместа от портален профил, непотвърдено от заведението",
    "Реални снимки на залата: порталните файлове са интерфейсни икони, не фотографии на обекта",
    "Имейл адрес за контакт",
    "Работно време",
    "Меню и ценоразпис",
    "Web3Forms access key за формата за запитване",
    "Политика за поверителност: преглед от юрист",
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
    metaTitle: "Сватбен ресторант Руж | До 120 гости в Пловдив",
    metaDescription: "Сватбен ресторант Руж на ул. Брезовско шосе 147, Пловдив: максимален капацитет до 120 места, разрешение за изнесен ритуал, денонощна охрана и паркинг.",
    navCity: "Пловдив",
    navSpot: "Брезовско шосе",
    navSeats: "до 120 места",
    inquire: "Запитване",
    call: "Обадете се",
    atmosphereNote: "атмосферни визуализации, предстои добавяне на снимки на залата",
    seasonHint: "Една зала в четири сезона. Изберете вашия.",
    scrollCue: "Разгледайте деня",
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
    ch1Title: "Сватбен ресторант Руж. До 120 гости в Пловдив.",
    ch1Lead: "Денят започва с пристигането. Ресторантът е на улица „Брезовско шосе“ 147 в Пловдив, а сградата разполага с денонощна жива охрана и паркинг.",
    gettingHere: "Как се стига",
    gettingHereRows: [
      [
        "Адрес",
        "ул. Брезовско шосе 147, Пловдив",
      ],
      [
        "Паркинг",
        "Към сградата",
      ],
      [
        "Охрана",
        "Денонощна жива охрана",
      ],
    ],
    mapCta: "Вижте на картата",
    whyTitle: "Защо младоженците избират Руж",
    ch2Title: "Ритуалът може да е тук",
    ch2Lead: "Залата е подходяща за вашето сватбено тържество с разрешение за изнесен ритуал: церемонията и вечерята се случват на един адрес.",
    ch2Body: "В Руж ще намерите интериорна зала, впечатляваща със своя чар, уют и спокойствие.",
    ch3Title: "Вечерята в зала за сто и двадесет",
    ch3Lead: "Сватбеният ресторант разполага с максимален капацитет до сто и двадесет места, в една интериорна зала.",
    packagesTitle: "Какво включва мястото",
    packagesLead: "Руж не публикува куверт на страница, която контролира. Вместо цена показваме буквално какво е обявено. Опишете тържеството си във формата и ще получите оферта.",
    includesTitle: "На разположение за вашето тържество",
    ch4Title: "Танците продължават до ранни зори",
    ch4Lead: "Благодарение на локацията си ресторантът има възможност за необезпокоявани мероприятия до ранни зори.",
    ch4Body: "Обстановката се преобразява в късните часове и под червени светлини и свещи ресторантът се превръща в място, където може да се развихрите, да танцувате и да се наслаждавате на празника си.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Публикуваме капацитета открито, а офертата е лична.",
    reviewsTitle: "Отзиви",
    reviewsLead: "Руж не публикува отзиви. Разделът остава празен, докато не бъдат предоставени истински.",
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
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Сватбен ресторант Руж.",
    footerRights: "Сватбен ресторант Руж · Пловдив",
    capacityStats: [
      {
        value: "120",
        count: 120,
        label: "места в залата",
      },
      {
        value: "Изнесен",
        label: "ритуал на място",
      },
      {
        value: "Денонощна",
        label: "жива охрана",
      },
      {
        value: "До зори",
        label: "без ограничение в часа",
      },
    ],
  },
  en: {
    langCode: "en",
    otherLangHref: "/",
    otherLangLabel: "БГ",
    metaTitle: "Restaurant Ruzh | Weddings for up to 120 guests in Plovdiv",
    metaDescription: "Ruzh wedding restaurant at 147 Brezovsko Shose, Plovdiv: a maximum capacity of 120 places, permission for an outdoor civil ritual, round-the-clock security and parking.",
    navCity: "Plovdiv",
    navSpot: "Brezovsko Shose",
    navSeats: "up to 120",
    inquire: "Inquire",
    call: "Call us",
    atmosphereNote: "atmospheric visualisations, photography of the room to follow",
    seasonHint: "One room across four seasons. Choose yours.",
    scrollCue: "Walk through the day",
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
    ch1Title: "Ruzh wedding restaurant. Up to 120 guests in Plovdiv.",
    ch1Lead: "The day begins with the arrival. The restaurant is at 147 Brezovsko Shose in Plovdiv, and the building has round-the-clock live security and parking.",
    gettingHere: "Getting here",
    gettingHereRows: [
      [
        "Address",
        "147 Brezovsko Shose, Plovdiv",
      ],
      [
        "Parking",
        "At the building",
      ],
      [
        "Security",
        "Round-the-clock live security",
      ],
    ],
    mapCta: "View on the map",
    whyTitle: "Why couples choose Ruzh",
    ch2Title: "The ritual can happen right here",
    ch2Lead: "The room is suited to your wedding celebration and holds permission for an outdoor civil ritual: ceremony and dinner happen at one address.",
    ch2Body: "At Ruzh you will find an interior room striking for its charm, warmth and calm.",
    ch3Title: "Dinner in a room for one hundred and twenty",
    ch3Lead: "The wedding restaurant has a maximum capacity of one hundred and twenty places, in a single interior room.",
    packagesTitle: "What the place includes",
    packagesLead: "Ruzh publishes no per-head price on any page it controls. Instead of a figure we show what is actually stated. Describe your celebration in the form and you will receive an offer.",
    includesTitle: "At your disposal for the celebration",
    ch4Title: "The dancing runs until the early hours",
    ch4Lead: "Thanks to its location the restaurant can host undisturbed celebrations into the early hours.",
    ch4Body: "The room transforms in the late hours: under red light and candles the restaurant becomes a place to let go, dance and enjoy your celebration.",
    ch5Title: "The farewell is a new beginning",
    ch5Lead: "Describe your day: season, guest count, anticipated budget. We publish our capacity openly, and the offer is personal.",
    reviewsTitle: "Reviews",
    reviewsLead: "Ruzh publishes no reviews. This section stays empty until real ones are supplied.",
    formName: "Your names",
    formContact: "Phone or email",
    formSeason: "Season / date",
    formSeasonPlaceholder: "Choose a season",
    formDateOptional: "Exact date (optional)",
    formGuests: "Guest count",
    formBudget: "Anticipated budget (BGN)",
    formBudgetHint: "Numerical values only. It helps us propose the right option.",
    formMessage: "Tell us about your day",
    formConsent: "I agree that my personal data may be used to reply to this enquiry.",
    formSubmit: "Send enquiry",
    formPromise: "We will reply within 2 business days.",
    formSuccess: "Thank you! Your enquiry has been received. We will be in touch within 2 business days.",
    formDemo: "(spec demo: the form will be activated on handover)",
    errRequired: "This field is required",
    errBudget: "Please enter a number",
    errContact: "Enter a valid phone or email",
    privacy: "Privacy policy",
    privacyHref: "/en/privacy/",
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Restaurant Ruzh website.",
    footerRights: "Restaurant Ruzh · Plovdiv",
    capacityStats: [
      {
        value: "120",
        count: 120,
        label: "places in the room",
      },
      {
        value: "On-site",
        label: "civil ritual",
      },
      {
        value: "24-hour",
        label: "live security",
      },
      {
        value: "Till dawn",
        label: "no curfew",
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
  "An interior room with a maximum capacity of 120",
  "Permission for an outdoor civil ritual",
  "Round-the-clock live security",
  "Parking at the building",
  "Undisturbed celebrations into the early hours",
  "Lighting that transforms the room late in the evening",
  "A named host to speak to: Magdalena Kaburova",
];

export const packageAssistEn =
  "Thanks to its location the restaurant can host undisturbed celebrations into the early hours, and the building has round-the-clock live security and parking.";

export const whyUsEn = [
  "A maximum capacity of 120 places",
  "Permission for an outdoor civil ritual on site",
  "Celebrations into the early hours, with no neighbours to answer to",
  "Round-the-clock live security",
  "Parking at the restaurant",
  "An interior room with charm, warmth and calm",
  "A room that transforms under red light and candles",
  "A direct, personal contact with the host",
];
