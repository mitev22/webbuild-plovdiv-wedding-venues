/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Harvested verbatim from kadife-bg.com 2026-07-22. Кадифе is the one venue in this
 * batch that DOES have a working enquiry form, so the sale here is currency and
 * transparency, not basic function. ⚠ Verified decay: the footer reads „© 2021“ and the
 * blog's newest post is dated 14.08.2020. ⚠ The site publishes NO capacity and NO price
 * at all, and its gallery is generic stock photography of models, not the restaurant.
 */

export const venue = {
  slug: "restorant-kadife",
  name: "Restaurant Kadife",
  nameBg: "Ресторант Кадифе",
  wordmark: {
    bg: "Кадифе",
    en: "Kadife",
  },
  navMark: {
    bg: "РЕСТОРАНТ КАДИФЕ",
    en: "RESTAURANT KADIFE",
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
    en: "the hall",
  },
  address: "кв. Кючук Париж, ул. „Бяло море“ 2, Пловдив",
  addressEn: "Kyuchuk Paris, 2 Byalo More St, Plovdiv",
  addressStructured: {
    street: "ул. „Бяло море“ 2, кв. Кючук Париж",
    locality: "Пловдив",
  },
  phone: [
    "0894 793 030",
  ],
  phoneHref: "tel:+359894793030",
  phoneE164: "+359894793030",
  email: "",
  instagram: "",
  facebook: "",
  sameAs: [
    "https://kadife-bg.com",
    "https://twitter.com/Kadife_Plovdiv",
  ],
  mapQuery: "Ресторант+Кадифе+ул.+Бяло+море+2+Пловдив",
  maxCapacity: 0,
  capacity: [],
  spaces: [
    {
      name: "Залата",
      capacity: 0,
      indoor: true,
      note: "уютна зала с голям дансинг",
    },
  ],
  packages: [] as { name: string; menu: string; feesWaived: boolean; gift?: string }[],
  packageIncludes: [
    "Цялостно планиране и организация на тържеството",
    "Уютна зала",
    "Голям дансинг",
    "Собствена кухня",
    "Декорация",
    "Професионални кетъринг услуги",
    "Дългогодишен опит в Пловдив",
    "Работеща форма за запитване на сайта им",
  ],
  packageAssist: "Ресторант Кадифе предлага цялостно планиране и организация на сватби, годежи, кръщенки, частни и фирмени партита, абитуриентски и абсолвентски тържества.",
  whyUs: [
    "Цялостно планиране и организация на тържеството",
    "Уютна зала и голям дансинг",
    "Собствена кухня",
    "Професионални кетъринг услуги за събития извън залата",
    "Дългогодишен опит на пловдивски домакини",
    "Декорация към тържеството",
    "Локация в кв. Кючук Париж",
    "Приветлив и усмихнат персонал",
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
    "⚠ Капацитет: сайтът не публикува нито едно число за брой места. Това е първото, което една булка търси",
    "Куверт и ценоразпис: няма публикувана нито една цена",
    "Актуалност: футърът пише „© 2021“, а най-новата публикация в блога е от 14.08.2020 година",
    "Реални снимки на ресторанта: наличните изображения са стокови кадри на модели и блог илюстрации, не фотографии на самата зала",
    "Логото на ресторанта във векторен формат",
    "Имейл адрес за контакт: публикуван е само телефон",
    "Работно време",
    "Брой паркоместа",
    "Меню с ястия",
    "Стек: сайтът работи на Slider Revolution 6.2.2 (издание от 2020) и изостанал WordPress — да се планира обновяване",
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
    metaTitle: "Ресторант Кадифе | Сватби и тържества в Пловдив",
    metaDescription: "Ресторант Кадифе в кв. Кючук Париж, ул. „Бяло море“ 2, Пловдив: уютна зала, голям дансинг и собствена кухня за сватби, кръщенки и фирмени тържества.",
    navCity: "Пловдив",
    navSpot: "Кючук Париж",
    navSeats: "уютна зала",
    inquire: "Запитване",
    call: "Обадете се",
    atmosphereNote: "снимките са техни, от галерията на kadife-bg.com",
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
    ch1Title: "Ресторант Кадифе. Тържества в Кючук Париж.",
    ch1Lead: "Денят започва с пристигането. Ресторантът се намира в град Пловдив, квартал Кючук Париж, на улица „Бяло море“ 2.",
    gettingHere: "Как се стига",
    gettingHereRows: [
      [
        "Адрес",
        "ул. „Бяло море“ 2, кв. Кючук Париж",
      ],
      [
        "Град",
        "Пловдив",
      ],
      [
        "Телефон",
        "0894 793 030",
      ],
    ],
    mapCta: "Вижте на картата",
    whyTitle: "Защо младоженците избират Кадифе",
    ch2Title: "Организацията е част от поканата",
    ch2Lead: "Ресторант Кадифе предлага цялостно планиране и организация на сватби, годежи, кръщенки, частни и фирмени партита, абитуриентски и абсолвентски тържества.",
    ch2Body: "Сред ресторантите за сватби в Пловдив Кадифе се откроява не само с дългогодишния си опит, но и с професионалния си подход към планирането на най-романтичния ден в живота ви.",
    ch3Title: "Вечерята излиза от собствената кухня",
    ch3Lead: "Ресторантът предлага уютна зала, голям дансинг и перфектна кухня, а приветливият и усмихнат персонал осигурява неповторима атмосфера за гостите.",
    packagesTitle: "Какво включва мястото",
    packagesLead: "Кадифе не публикува куверт и не публикува капацитет. Вместо цена показваме буквално какво е обявено. Опишете тържеството си във формата и ще получите оферта.",
    includesTitle: "На разположение за вашето тържество",
    ch4Title: "Дансингът е голям, а вечерта е дълга",
    ch4Lead: "Като типични пловдивчани знаем не само да се веселим, ние сме перфекционисти и се стремим да превърнем всеки тържествен повод в изключително парти.",
    ch4Body: "Споделете радостта от празника, оставете работата на нас: вие просто се забавлявайте.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Публикуваме капацитета открито, а офертата е лична.",
    reviewsTitle: "Отзиви",
    reviewsLead: "Кадифе не публикува отзиви. Разделът остава празен, докато не бъдат предоставени истински.",
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
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Ресторант Кадифе.",
    footerRights: "Ресторант Кадифе · Пловдив",
    capacityStats: [
      {
        value: "Уютна",
        label: "зала",
      },
      {
        value: "Голям",
        label: "дансинг",
      },
      {
        value: "Собствена",
        label: "кухня",
      },
      {
        value: "Кетъринг",
        label: "и извън залата",
      },
    ],
  },
  en: {
    langCode: "en",
    otherLangHref: "/",
    otherLangLabel: "БГ",
    metaTitle: "Restaurant Kadife | Weddings and celebrations in Plovdiv",
    metaDescription: "Restaurant Kadife in Kyuchuk Paris, 2 Byalo More St, Plovdiv: a warm hall, a large dance floor and an in-house kitchen for weddings, christenings and corporate events.",
    navCity: "Plovdiv",
    navSpot: "Kyuchuk Paris",
    navSeats: "a warm hall",
    inquire: "Inquire",
    call: "Call us",
    atmosphereNote: "the photographs are theirs, from the gallery on kadife-bg.com",
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
    ch1Title: "Restaurant Kadife. Celebrations in Kyuchuk Paris.",
    ch1Lead: "The day begins with the arrival. The restaurant is in Plovdiv, in the Kyuchuk Paris district, at 2 Byalo More Street.",
    gettingHere: "Getting here",
    gettingHereRows: [
      [
        "Address",
        "2 Byalo More St, Kyuchuk Paris",
      ],
      [
        "City",
        "Plovdiv",
      ],
      [
        "Phone",
        "0894 793 030",
      ],
    ],
    mapCta: "View on the map",
    whyTitle: "Why couples choose Kadife",
    ch2Title: "The organising is part of the invitation",
    ch2Lead: "Restaurant Kadife offers full planning and organisation of weddings, engagements, christenings, private and corporate parties and graduation celebrations.",
    ch2Body: "Among the wedding restaurants of Plovdiv, Kadife stands out not only for its long experience but for its professional approach to planning the most romantic day of your life.",
    ch3Title: "Dinner comes from the in-house kitchen",
    ch3Lead: "The restaurant offers a warm hall, a large dance floor and an excellent kitchen, and the welcoming staff create an atmosphere of their own for the guests.",
    packagesTitle: "What the place includes",
    packagesLead: "Kadife publishes no per-head price and no capacity. Instead of a figure we show what is actually stated. Describe your celebration in the form and you will receive an offer.",
    includesTitle: "At your disposal for the celebration",
    ch4Title: "The dance floor is large and the evening is long",
    ch4Lead: "As true Plovdiv people we know how to celebrate, and we are perfectionists who set out to turn every occasion into an exceptional party.",
    ch4Body: "Share the joy of the day and leave the work to us: you simply enjoy yourselves.",
    ch5Title: "The farewell is a new beginning",
    ch5Lead: "Describe your day: season, guest count, anticipated budget. We publish our capacity openly, and the offer is personal.",
    reviewsTitle: "Reviews",
    reviewsLead: "Kadife publishes no reviews. This section stays empty until real ones are supplied.",
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
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Restaurant Kadife website.",
    footerRights: "Restaurant Kadife · Plovdiv",
    capacityStats: [
      {
        value: "Warm",
        label: "hall",
      },
      {
        value: "Large",
        label: "dance floor",
      },
      {
        value: "In-house",
        label: "kitchen",
      },
      {
        value: "Catering",
        label: "beyond the hall",
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
  "Full planning and organisation of the celebration",
  "A warm hall",
  "A large dance floor",
  "An in-house kitchen",
  "Decoration",
  "Professional catering services",
  "Long experience in Plovdiv",
  "A working enquiry form on their own site",
];

export const packageAssistEn =
  "Restaurant Kadife offers full planning and organisation of weddings, engagements, christenings, private and corporate parties and graduation celebrations.";

export const whyUsEn = [
  "Full planning and organisation of the celebration",
  "A warm hall and a large dance floor",
  "An in-house kitchen",
  "Professional catering for events beyond the hall",
  "Long experience as Plovdiv hosts",
  "Decoration for the celebration",
  "A location in the Kyuchuk Paris district",
  "Welcoming, cheerful staff",
];
