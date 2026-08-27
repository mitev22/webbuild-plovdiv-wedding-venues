/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Harvested 2026-07-22 from ujen-polah.com (the restaurant group's site). Малкия
 * Бунарджик has NO page of its own: it is one entry on the group's /restaurants/ page,
 * and that page carries no <form>, no price token and no footer year. The heritage and
 * capacity figures below come from the campaign spec's portal research (INDUSTRY §2),
 * NOT from a page the venue controls — that provenance is on the handoff list.
 */

export const venue = {
  slug: "malak-bunardzhik",
  name: "Malkia Bunardzhik",
  nameBg: "Малкия Бунарджик",
  wordmark: {
    bg: "Малкия Бунарджик",
    en: "Malkia Bunardzhik",
  },
  navMark: {
    bg: "МАЛКИЯ БУНАРДЖИК",
    en: "MALKIA BUNARDZHIK",
  },
  logo: {
    src: "",
    w: 0,
    h: 0,
  },
  town: "Пловдив",
  type: "restaurant",
  venueNoun: {
    bg: "градината",
    en: "the garden",
  },
  address: "парк „Бунарджик“, ул. Волга 1А, Пловдив",
  addressEn: "Bunardzhik Park, 1A Volga St, Plovdiv",
  addressStructured: {
    street: "ул. Волга 1А, парк „Бунарджик“",
    locality: "Пловдив",
  },
  phone: [
    "0878 711 777",
    "0884 174 045",
    "032 642 640",
  ],
  phoneHref: "tel:+359878711777",
  phoneE164: "+359878711777",
  email: "",
  instagram: "",
  facebook: "",
  sameAs: [
    "https://www.ujen-polah.com/restaurants/",
  ],
  mapQuery: "Малкия+Бунарджик+ул.+Волга+1А+Пловдив",
  maxCapacity: 200,
  capacity: [
    {
      configuration: "на закрито",
      max: 150,
    },
    {
      configuration: "в градината",
      max: 150,
    },
  ],
  spaces: [
    {
      name: "Залата",
      capacity: 150,
      indoor: true,
      note: "голяма зала в сърцето на парка",
    },
    {
      name: "Градината",
      capacity: 150,
      indoor: false,
      note: "градина под дърветата на парк „Бунарджик“",
    },
  ],
  packages: [] as { name: string; menu: string; feesWaived: boolean; gift?: string }[],
  packageIncludes: [
    "Голяма зала в парк „Бунарджик“",
    "Градина под дърветата",
    "Работно време до 01:00 часа",
    "Кухня на място",
    "Локация в сърцето на Пловдив",
    "Част от Ресторанти „Южен Полъх“",
  ],
  packageAssist: "Заведението работи всеки ден от 10:00 до 01:00 часа и е част от групата Ресторанти „Южен Полъх“, която стопанисва още четири обекта в Пловдив.",
  whyUs: [
    "Едно от най-старите работещи заведения в Пловдив",
    "Локация в самия парк „Бунарджик“",
    "Зала и градина, използвани заедно за големи тържества",
    "Работно време до 01:00 часа",
    "В сърцето на града, без излизане извън Пловдив",
    "Част от Ресторанти „Южен Полъх“",
    "Кухня на място",
    "Три телефона за връзка",
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
    "Собствена страница: заведението няма своя страница, а е един ред на груповия сайт ujen-polah.com/restaurants/",
    "Форма за запитване: на груповата страница няма нито един <form> елемент",
    "Куверт и цени: няма публикувана нито една цена",
    "Капацитет: числата 150 на закрито и 150 в градината идват от портални профили, а не от страница, която заведението контролира — да бъдат потвърдени от собственика",
    "Годините стаж (80+) също са портални, не публикувани от заведението",
    "Реални снимки на залата и градината: груповата страница не показва фотографии на този обект в HTML",
    "Изписване на името: груповият сайт пише „Малкия Бунарджик“, а порталите „Малък Бунарджик“ — да се избере едно",
    "Имейл адрес за контакт: публикувани са само телефони",
    "Брой паркоместа",
    "Меню и ценоразпис",
    "Web3Forms access key",
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
    metaTitle: "Малкия Бунарджик | Сватби в парк Бунарджик, Пловдив",
    metaDescription: "Малкия Бунарджик в парк „Бунарджик“, ул. Волга 1А, Пловдив: зала и градина за сватбени тържества, работно време до 01:00 часа.",
    navCity: "Пловдив",
    navSpot: "парк Бунарджик",
    navSeats: "зала и градина",
    inquire: "Запитване",
    call: "Обадете се",
    atmosphereNote: "атмосферни визуализации, предстои добавяне на снимки на залата и градината",
    seasonHint: "Една градина в четири сезона. Изберете вашия.",
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
    ch1Title: "Малкия Бунарджик. Тържества в сърцето на парка.",
    ch1Lead: "Денят започва с пристигането. Заведението е на улица „Волга“ 1А, в самия парк „Бунарджик“, в центъра на Пловдив: гостите ви не излизат от града, за да празнуват сред дървета.",
    gettingHere: "Как се стига",
    gettingHereRows: [
      [
        "Адрес",
        "парк „Бунарджик“, ул. Волга 1А",
      ],
      [
        "Работно време",
        "10:00 – 01:00 ч.",
      ],
      [
        "Група",
        "Ресторанти „Южен Полъх“",
      ],
    ],
    mapCta: "Вижте на картата",
    whyTitle: "Защо младоженците избират Малкия Бунарджик",
    ch2Title: "Церемонията под дърветата на парка",
    ch2Lead: "Градината е част от парк „Бунарджик“, а това е рядкост за градско заведение: зеленина без пътуване извън Пловдив.",
    ch2Body: "Заведението е сред най-старите работещи в Пловдив. Наследството е активът тук, а не новото строителство.",
    ch3Title: "Вечерята в залата, до късно",
    ch3Lead: "Кухнята е на място, а работното време е до един часа след полунощ, всеки ден от седмицата.",
    packagesTitle: "Какво включва мястото",
    packagesLead: "Малкия Бунарджик не публикува куверт. Вместо цена показваме буквално какво е обявено за мястото. Опишете тържеството си във формата и ще получите оферта.",
    includesTitle: "На разположение за вашето тържество",
    ch4Title: "Празникът продължава до един часа",
    ch4Lead: "Работното време е 10:00 до 01:00 часа, всеки ден. Залата и градината се използват заедно за големите тържества.",
    ch4Body: "Заведението е част от Ресторанти „Южен Полъх“, група с още четири обекта в Пловдив.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Публикуваме капацитета открито, а офертата е лична.",
    reviewsTitle: "Отзиви",
    reviewsLead: "Заведението не публикува отзиви. Разделът остава празен, докато не бъдат предоставени истински.",
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
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Малкия Бунарджик.",
    footerRights: "Малкия Бунарджик · Пловдив",
    capacityStats: [
      {
        value: "150",
        count: 150,
        label: "места на закрито",
      },
      {
        value: "150",
        count: 150,
        label: "места в градината",
      },
      {
        value: "01:00",
        label: "часа затваряне",
      },
      {
        value: "В парка",
        label: "локация",
      },
    ],
  },
  en: {
    langCode: "en",
    otherLangHref: "/",
    otherLangLabel: "БГ",
    metaTitle: "Malkia Bunardzhik | Weddings in Bunardzhik Park, Plovdiv",
    metaDescription: "Malkia Bunardzhik in Bunardzhik Park, 1A Volga St, Plovdiv: a hall and garden for wedding celebrations, open until 01:00.",
    navCity: "Plovdiv",
    navSpot: "Bunardzhik Park",
    navSeats: "hall and garden",
    inquire: "Inquire",
    call: "Call us",
    atmosphereNote: "atmospheric visualisations, photography of the hall and garden to follow",
    seasonHint: "One garden across four seasons. Choose yours.",
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
    ch1Title: "Malkia Bunardzhik. Celebrations in the heart of the park.",
    ch1Lead: "The day begins with the arrival. The venue is at 1A Volga Street, inside Bunardzhik Park in central Plovdiv: your guests never leave the city to celebrate among trees.",
    gettingHere: "Getting here",
    gettingHereRows: [
      [
        "Address",
        "Bunardzhik Park, 1A Volga St",
      ],
      [
        "Opening hours",
        "10:00 – 01:00",
      ],
      [
        "Group",
        "Yuzhen Polah Restaurants",
      ],
    ],
    mapCta: "View on the map",
    whyTitle: "Why couples choose Malkia Bunardzhik",
    ch2Title: "A ceremony under the trees of the park",
    ch2Lead: "The garden is part of Bunardzhik Park, and that is rare for a city venue: greenery with no drive out of Plovdiv.",
    ch2Body: "This is among the oldest operating restaurants in Plovdiv. Heritage is the asset here, not new construction.",
    ch3Title: "Dinner in the hall, late into the night",
    ch3Lead: "The kitchen is on site and the venue serves until one in the morning, every day of the week.",
    packagesTitle: "What the place includes",
    packagesLead: "Malkia Bunardzhik publishes no per-head price. Instead of a figure we show what is actually stated about the place. Describe your celebration in the form and you will receive an offer.",
    includesTitle: "At your disposal for the celebration",
    ch4Title: "The celebration runs to one in the morning",
    ch4Lead: "Opening hours are 10:00 to 01:00, every day. The hall and the garden are used together for the larger celebrations.",
    ch4Body: "The venue is part of Yuzhen Polah Restaurants, a group with four further sites in Plovdiv.",
    ch5Title: "The farewell is a new beginning",
    ch5Lead: "Describe your day: season, guest count, anticipated budget. We publish our capacity openly, and the offer is personal.",
    reviewsTitle: "Reviews",
    reviewsLead: "The venue publishes no reviews. This section stays empty until real ones are supplied.",
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
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Malkia Bunardzhik website.",
    footerRights: "Malkia Bunardzhik · Plovdiv",
    capacityStats: [
      {
        value: "150",
        count: 150,
        label: "places indoors",
      },
      {
        value: "150",
        count: 150,
        label: "places in the garden",
      },
      {
        value: "01:00",
        label: "closing time",
      },
      {
        value: "In the park",
        label: "location",
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
  "A large hall in Bunardzhik Park",
  "A garden under the trees",
  "Open until 01:00",
  "A kitchen on site",
  "A location in the heart of Plovdiv",
  "Part of Yuzhen Polah Restaurants",
];

export const packageAssistEn =
  "The venue is open every day from 10:00 to 01:00 and belongs to the Yuzhen Polah restaurant group, which runs four further sites in Plovdiv.";

export const whyUsEn = [
  "One of the oldest operating restaurants in Plovdiv",
  "A location inside Bunardzhik Park itself",
  "A hall and a garden used together for large celebrations",
  "Open until 01:00",
  "In the heart of the city, with no drive out of Plovdiv",
  "Part of Yuzhen Polah Restaurants",
  "A kitchen on site",
  "Three contact numbers",
];
