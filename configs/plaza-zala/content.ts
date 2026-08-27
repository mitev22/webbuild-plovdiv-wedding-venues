/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Harvested verbatim from plazahotelplovdiv.com/сватбена-зала/ on 2026-07-22.
 * ⚠ VERIFIED FIRST-HAND: the only two <form> elements on the wedding-hall page are
 * `BookOnline` and `BookOnlineMobile` — hotel ROOM availability widgets whose inputs are
 * arrival / departure / cot / extra. There is NO enquiry form for the event hall itself.
 * A bride landing on that page cannot request a quote. That is what this build fixes.
 */

export const venue = {
  slug: "plaza-zala",
  name: "Avocado Premium Hall",
  nameBg: "Зала „Авокадо Премиум“",
  wordmark: {
    bg: "Авокадо Премиум",
    en: "Avocado Premium",
  },
  navMark: {
    bg: "АВОКАДО ПРЕМИУМ",
    en: "AVOCADO PREMIUM",
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
  address: "Хотел „Плаза“, бул. „България“ 125А, 4003 Пловдив",
  addressEn: "Plaza Hotel, 125A Bulgaria Blvd, 4003 Plovdiv",
  addressStructured: {
    street: "бул. „България“ 125А",
    locality: "Пловдив",
  },
  phone: [
    "032 949 999",
  ],
  phoneHref: "tel:+35932949999",
  phoneE164: "+35932949999",
  email: "info@plazahotelplovdiv.com",
  instagram: "",
  facebook: "",
  sameAs: [
    "https://plazahotelplovdiv.com",
  ],
  mapQuery: "Плаза+хотел+Пловдив+бул.+България+125А",
  maxCapacity: 120,
  capacity: [
    {
      configuration: "седящи места",
      max: 120,
    },
  ],
  spaces: [
    {
      name: "Зала „Авокадо Премиум“",
      capacity: 120,
      indoor: true,
      note: "модерна и уютна атмосфера със собствен стил",
    },
    {
      name: "Детски кът",
      capacity: 0,
      indoor: true,
      note: "просторен и цветен",
    },
  ],
  packages: [] as { name: string; menu: string; feesWaived: boolean; gift?: string }[],
  packageIncludes: [
    "Зала с капацитет до 120 седящи места",
    "Просторен и цветен детски кът",
    "Голям и просторен паркинг",
    "Млад и професионален екип",
    "Индивидуално отношение към всяко мероприятие",
    "Хотелски стаи в същата сграда",
    "Ресторант на място",
  ],
  packageAssist: "Залата „Авокадо Премиум“ е част от Плаза хотел Пловдив на бул. „България“ 125А, което дава на гостите ви стаи и ресторант в същата сграда.",
  whyUs: [
    "Капацитет до 120 седящи места",
    "Модерна и уютна атмосфера със собствен стил",
    "Просторен и цветен детски кът",
    "Голям и просторен паркинг",
    "Млад и професионален екип",
    "Индивидуално отношение към всяко мероприятие",
    "Хотелски стаи за гостите в същата сграда",
    "Локация на бул. „България“",
  ],
  parking: "Голям и просторен паркинг",
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
    "⚠ Форма за запитване за залата: на страницата на сватбената зала единствените форми са BookOnline и BookOnlineMobile, тоест заявка за ХОТЕЛСКА СТАЯ. Няма начин да се поиска оферта за самото събитие",
    "Куверт и пакетни цени за тържество: няма публикувана нито една цена",
    "Капацитет по конфигурации: публикувано е само „до 120 седящи места“",
    "Реални снимки на залата: галерията на страницата се зарежда с JavaScript и в HTML няма нито един адрес на снимка от залата",
    "Отделен телефон или имейл за събития: публикувани са само телефонът и имейлът на рецепцията",
    "Меню за тържества",
    "Брой паркоместа",
    "Логото на хотела във векторен формат",
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
    metaTitle: "Зала Авокадо Премиум | Сватби до 120 гости в Пловдив",
    metaDescription: "Залата за мероприятия „Авокадо Премиум“ в Плаза хотел Пловдив, бул. „България“ 125А: капацитет до 120 седящи места, детски кът и голям паркинг.",
    navCity: "Пловдив",
    navSpot: "бул. България 125А",
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
    ch1Title: "Зала „Авокадо Премиум“. До 120 гости в Пловдив.",
    ch1Lead: "Денят започва с пристигането. Залата е в Плаза хотел Пловдив на бул. „България“ 125А, а голям и просторен паркинг посреща гостите ви пред входа.",
    gettingHere: "Как се стига",
    gettingHereRows: [
      [
        "Адрес",
        "бул. „България“ 125А, 4003 Пловдив",
      ],
      [
        "Паркинг",
        "Голям и просторен",
      ],
      [
        "За гости отвън",
        "Хотелски стаи в същата сграда",
      ],
    ],
    mapCta: "Вижте на картата",
    whyTitle: "Защо младоженците избират „Авокадо Премиум“",
    ch2Title: "Една зала за специалните поводи",
    ch2Lead: "Залата за мероприятия „Авокадо Премиум“ е идеалното място за провеждане на специалните ви поводи като сватба, рожден ден, годишнина и фирмено парти.",
    ch2Body: "Създадохме за вас една модерна и уютна атмосфера, отличаваща се със собствен стил и изискана обстановка.",
    ch3Title: "Вечерята за сто и двадесет",
    ch3Lead: "Капацитетът на залата е до сто и двадесет седящи места, а младият и професионален екип се грижи за перфектното организиране на вашето събитие.",
    packagesTitle: "Какво включва залата",
    packagesLead: "Хотелът не публикува куверт за тържество. Вместо цена показваме буквално какво е обявено за залата. Опишете деня си във формата и ще получите оферта.",
    includesTitle: "На разположение за вашето тържество",
    ch4Title: "Помислили сме и за най-малките",
    ch4Lead: "Залата разполага с просторен и цветен детски кът, така че родителите да се насладят на вечерта.",
    ch4Body: "Индивидуално отношение към всяко мероприятие, а гостите ви могат да останат в хотелските стаи в същата сграда.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Публикуваме капацитета открито, а офертата е лична.",
    reviewsTitle: "Отзиви",
    reviewsLead: "Хотелът не публикува отзиви за залата. Разделът остава празен, докато не бъдат предоставени истински.",
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
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Плаза хотел Пловдив.",
    footerRights: "Зала „Авокадо Премиум“ · Плаза хотел Пловдив",
    capacityStats: [
      {
        value: "120",
        count: 120,
        label: "седящи места",
      },
      {
        value: "Детски",
        label: "кът в залата",
      },
      {
        value: "Голям",
        label: "паркинг",
      },
      {
        value: "Хотел",
        label: "в същата сграда",
      },
    ],
  },
  en: {
    langCode: "en",
    otherLangHref: "/",
    otherLangLabel: "БГ",
    metaTitle: "Avocado Premium Hall | Weddings for up to 120 guests in Plovdiv",
    metaDescription: "The Avocado Premium events hall at Plaza Hotel Plovdiv, 125A Bulgaria Blvd: a capacity of up to 120 seated guests, a children's area and a large car park.",
    navCity: "Plovdiv",
    navSpot: "125A Bulgaria Blvd",
    navSeats: "up to 120",
    inquire: "Inquire",
    call: "Call us",
    atmosphereNote: "atmospheric visualisations, photography of the hall to follow",
    seasonHint: "One hall across four seasons. Choose yours.",
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
    ch1Title: "The Avocado Premium hall. Up to 120 guests in Plovdiv.",
    ch1Lead: "The day begins with the arrival. The hall is inside Plaza Hotel Plovdiv at 125A Bulgaria Blvd, and a large car park meets your guests at the door.",
    gettingHere: "Getting here",
    gettingHereRows: [
      [
        "Address",
        "125A Bulgaria Blvd, 4003 Plovdiv",
      ],
      [
        "Parking",
        "Large and spacious",
      ],
      [
        "Out-of-town guests",
        "Hotel rooms in the same building",
      ],
    ],
    mapCta: "View on the map",
    whyTitle: "Why couples choose Avocado Premium",
    ch2Title: "One hall for the occasions that matter",
    ch2Lead: "The Avocado Premium events hall is the ideal place for your special occasions: a wedding, a birthday, an anniversary or a corporate party.",
    ch2Body: "We created for you a modern, welcoming atmosphere with a style and a refinement of its own.",
    ch3Title: "Dinner for one hundred and twenty",
    ch3Lead: "The hall's capacity is up to one hundred and twenty seated places, and a young, professional team takes care of organising your event.",
    packagesTitle: "What the hall includes",
    packagesLead: "The hotel publishes no per-head price for a celebration. Instead of a figure we show what is actually stated about the hall. Describe your day in the form and you will receive an offer.",
    includesTitle: "At your disposal for the celebration",
    ch4Title: "We have thought of the smallest guests too",
    ch4Lead: "The hall has a spacious, colourful children's area, so that the parents can enjoy the evening.",
    ch4Body: "Individual attention to every event, and your guests can stay in the hotel rooms in the same building.",
    ch5Title: "The farewell is a new beginning",
    ch5Lead: "Describe your day: season, guest count, anticipated budget. We publish our capacity openly, and the offer is personal.",
    reviewsTitle: "Reviews",
    reviewsLead: "The hotel publishes no reviews for the hall. This section stays empty until real ones are supplied.",
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
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Plaza Hotel Plovdiv website.",
    footerRights: "Avocado Premium Hall · Plaza Hotel Plovdiv",
    capacityStats: [
      {
        value: "120",
        count: 120,
        label: "seated places",
      },
      {
        value: "Children's",
        label: "area in the hall",
      },
      {
        value: "Large",
        label: "car park",
      },
      {
        value: "Hotel",
        label: "in the same building",
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
  "A hall seating up to 120",
  "A spacious, colourful children's area",
  "A large, spacious car park",
  "A young, professional team",
  "Individual attention to every event",
  "Hotel rooms in the same building",
  "A restaurant on site",
];

export const packageAssistEn =
  "The Avocado Premium hall is part of Plaza Hotel Plovdiv at 125A Bulgaria Blvd, which gives your guests rooms and a restaurant in the same building.";

export const whyUsEn = [
  "A capacity of up to 120 seated places",
  "A modern, welcoming atmosphere with a style of its own",
  "A spacious, colourful children's area",
  "A large, spacious car park",
  "A young, professional team",
  "Individual attention to every event",
  "Hotel rooms for your guests in the same building",
  "A location on Bulgaria Blvd",
];
