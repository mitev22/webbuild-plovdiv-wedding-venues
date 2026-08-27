/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Harvested 2026-07-22. Colibri has NO site of its own: its presence is a Facebook
 * page plus portal listings, and on weddingday.bg both the "Уебсайт" and "Facebook"
 * fields render as `#` placeholders. Copy below is their OWN submitted portal text,
 * verbatim. ⚠ Their portal copy still opens with "Стартираме сезон 2022" — four years
 * stale. Reviews verbatim-or-absent → absent. No куверт published anywhere.
 */

export const venue = {
  slug: "colibri-wedding",
  name: "Colibri Wedding Place",
  nameBg: "Colibri Wedding Place",
  wordmark: {
    bg: "Colibri",
    en: "Colibri",
  },
  navMark: {
    bg: "COLIBRI",
    en: "COLIBRI",
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
  address: "Околовръстен път, на 2 км от кв. Коматево, Пловдив",
  addressEn: "Ring road, 2 km from Komatevo, Plovdiv",
  addressStructured: {
    street: "Околовръстен път, 2 км от кв. Коматево",
    locality: "Пловдив",
  },
  phone: [
    "0877 203 010",
  ],
  phoneHref: "tel:+359877203010",
  phoneE164: "+359877203010",
  email: "",
  instagram: "",
  facebook: "https://www.facebook.com/colibriweddingplace/",
  sameAs: [
    "https://www.facebook.com/colibriweddingplace/",
    "https://www.facebook.com/ColibriPool/",
  ],
  mapQuery: "Colibri+Wedding+Place+Пловдив+Коматево",
  maxCapacity: 230,
  capacity: [
    {
      configuration: "места",
      max: 230,
    },
  ],
  spaces: [
    {
      name: "Остъклената зала",
      capacity: 230,
      indoor: true,
      note: "350 кв.м закрита площ с отваряем покрив",
    },
    {
      name: "Басейнът и градината",
      capacity: 0,
      indoor: false,
      note: "тропически растения и изглед към Родопа планина",
    },
  ],
  packages: [] as { name: string; menu: string; feesWaived: boolean; gift?: string }[],
  packageIncludes: [
    "Остъклена закрита площ от 350 кв.м",
    "Отваряем покрив над залата",
    "Масивни маси от 100% естествени материали с рустик шарки",
    "Столове от евкалиптово дърво",
    "Трислоен паркет",
    "Оборудван и обезопасен детски кът",
    "Безплатен аниматор за децата",
    "Басейн с кристално чиста вода",
    "Тропически растения",
    "Изглед към Родопа планина и залеза",
  ],
  packageAssist: "Локацията е на Околовръстния път, на два километра от квартал Коматево в посока София, а Colibri Pool & Garden е част от същия комплекс.",
  whyUs: [
    "Остъклена закрита площ от 350 кв.м",
    "Отваряем покрив, който сменя залата за минути",
    "Басейн с кристално чиста вода в двора",
    "Изглед към Родопа планина и залеза",
    "Тропически растения около масите",
    "Масивни маси и столове от евкалиптово дърво",
    "Обезопасен детски кът с безплатен аниматор",
    "На 2 км от кв. Коматево в посока София",
  ],
  parking: "Паркинг в близост",
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
    "Собствен сайт и домейн: присъствието е само Facebook страница плюс портални профили, а в weddingday.bg полетата „Уебсайт“ и „Facebook“ се показват като празни знаци",
    "Куверт и пакетни цени: не са публикувани никъде",
    "Разминаване в капацитета: weddingday.bg сочи 230 места, а собственото описание казва „опция за 200 + места“",
    "Реални снимки на залата, басейна и градината: порталните файлове са интерфейсни икони, не фотографии на обекта",
    "Актуалност на текста: собственото описание още обявява „Стартираме сезон 2022“",
    "Точен адрес с номер и пощенски код за Google Maps",
    "Имейл адрес за контакт: публикуван е само телефон",
    "Работно време и сезонност (басейнът е летен)",
    "Брой паркоместа",
    "Web3Forms access key за формата за запитване",
    "Текст за политика за поверителност: преглед от юрист",
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
    metaTitle: "Colibri Wedding Place | Сватби край басейна край Пловдив",
    metaDescription: "Colibri Wedding Place на Околовръстния път, на 2 км от кв. Коматево: остъклена зала с отваряем покрив, басейн, детски кът и изглед към Родопите.",
    navCity: "Пловдив",
    navSpot: "Коматево",
    navSeats: "230 места",
    inquire: "Запитване",
    call: "Обадете се",
    atmosphereNote: "атмосферни визуализации, предстои добавяне на снимки на залата и басейна",
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
    ch1Title: "Colibri Wedding Place. Сватби край басейна, на две крачки от Пловдив.",
    ch1Lead: "Денят започва с пристигането. Colibri е на Околовръстния път, на два километра от квартал Коматево в посока София, в покрайнините на града и извън шума му.",
    gettingHere: "Как се стига",
    gettingHereRows: [
      [
        "Адрес",
        "Околовръстен път, на 2 км от кв. Коматево",
      ],
      [
        "Посока",
        "към София",
      ],
      [
        "Наблизо",
        "Colibri Pool & Garden, част от същия комплекс",
      ],
    ],
    mapCta: "Вижте на картата",
    whyTitle: "Защо младоженците избират Colibri",
    ch2Title: "Церемонията под отваряем покрив",
    ch2Lead: "Закритата остъклена площ е 350 квадратни метра, а най-силното ѝ качество е отваряемият покрив: една и съща зала е закрита при дъжд и открита при залез.",
    ch2Body: "Настоящите младоженци, както и техните скъпи гости, могат да се насладят на тропическите растения и кристално чистата вода, а с изгледа към Родопа планина и залеза се заражда усещане за безкрайна свобода.",
    ch3Title: "Вечерята на маси от масивно дърво",
    ch3Lead: "Залата е оборудвана с красиви масивни маси, изработени от 100% естествени материали с невероятни рустик шарки, столове от евкалиптово дърво и трислоен паркет.",
    packagesTitle: "Какво включва мястото",
    packagesLead: "Colibri не публикува куверт. Вместо цена показваме буквално какво стои на разположение за деня ви. Опишете тържеството си във формата и ще получите оферта.",
    includesTitle: "На разположение за вашето тържество",
    ch4Title: "Вечерта продължава край водата",
    ch4Lead: "Басейнът и градината поемат празника, когато вечерята свърши. Оборудваният и обезопасен детски кът с безплатен аниматор държи най-малките гости заети.",
    ch4Body: "Colibri Pool е сравнително нов басейн в покрайнините на Пловдив, а бързо нарастващият интерес към локацията доведе до надграждане на предлаганите услуги.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Публикуваме капацитета открито, а офертата е лична.",
    reviewsTitle: "Отзиви",
    reviewsLead: "Colibri не публикува отзиви. Разделът остава празен, докато не бъдат предоставени истински.",
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
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Colibri Wedding Place.",
    footerRights: "Colibri Wedding Place · Пловдив",
    capacityStats: [
      {
        value: "230",
        count: 230,
        label: "места",
      },
      {
        value: "350",
        count: 350,
        label: "кв.м остъклена площ",
      },
      {
        value: "Отваряем",
        label: "покрив",
      },
      {
        value: "Безплатен",
        label: "аниматор за децата",
      },
    ],
  },
  en: {
    langCode: "en",
    otherLangHref: "/",
    otherLangLabel: "БГ",
    metaTitle: "Colibri Wedding Place | Poolside weddings near Plovdiv",
    metaDescription: "Colibri Wedding Place on the Plovdiv ring road, 2 km from Komatevo: a glazed hall with a retractable roof, a pool, a children's area and a view of the Rhodopes.",
    navCity: "Plovdiv",
    navSpot: "Komatevo",
    navSeats: "230 places",
    inquire: "Inquire",
    call: "Call us",
    atmosphereNote: "atmospheric visualisations, photography of the hall and pool to follow",
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
    ch1Title: "Colibri Wedding Place. Poolside weddings, minutes from Plovdiv.",
    ch1Lead: "The day begins with the arrival. Colibri sits on the ring road, two kilometres from the Komatevo district towards Sofia, on the edge of the city and outside its noise.",
    gettingHere: "Getting here",
    gettingHereRows: [
      [
        "Address",
        "Ring road, 2 km from Komatevo",
      ],
      [
        "Direction",
        "towards Sofia",
      ],
      [
        "Nearby",
        "Colibri Pool & Garden, part of the same complex",
      ],
    ],
    mapCta: "View on the map",
    whyTitle: "Why couples choose Colibri",
    ch2Title: "A ceremony under a roof that opens",
    ch2Lead: "The enclosed glazed area is 350 square metres, and its strongest quality is the retractable roof: the same room is covered in the rain and open at sunset.",
    ch2Body: "Couples and their guests can enjoy the tropical planting and the crystal-clear water, and with the view of the Rhodope mountains and the sunset comes a feeling of endless freedom.",
    ch3Title: "Dinner on solid timber tables",
    ch3Lead: "The hall is furnished with substantial tables made from 100% natural materials with striking rustic grain, eucalyptus-wood chairs and three-layer parquet.",
    packagesTitle: "What the place includes",
    packagesLead: "Colibri publishes no per-head price. Instead of a figure we show you literally what is at your disposal. Describe your celebration in the form and you will receive an offer.",
    includesTitle: "At your disposal for the celebration",
    ch4Title: "The evening carries on by the water",
    ch4Lead: "The pool and garden take over once dinner is done. The equipped, secured children's area with a free entertainer keeps the youngest guests busy.",
    ch4Body: "Colibri Pool is a relatively new pool on the edge of Plovdiv, and the fast-growing interest in the location led to an upgrade of the services offered.",
    ch5Title: "The farewell is a new beginning",
    ch5Lead: "Describe your day: season, guest count, anticipated budget. We publish our capacity openly, and the offer is personal.",
    reviewsTitle: "Reviews",
    reviewsLead: "Colibri publishes no reviews. This section stays empty until real ones are supplied.",
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
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Colibri Wedding Place website.",
    footerRights: "Colibri Wedding Place · Plovdiv",
    capacityStats: [
      {
        value: "230",
        count: 230,
        label: "places",
      },
      {
        value: "350",
        count: 350,
        label: "sq m glazed area",
      },
      {
        value: "Retractable",
        label: "roof",
      },
      {
        value: "Free",
        label: "children's entertainer",
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
  "350 sq m of enclosed glazed area",
  "A retractable roof over the hall",
  "Substantial tables of 100% natural materials with rustic grain",
  "Eucalyptus-wood chairs",
  "Three-layer parquet",
  "An equipped, secured children's area",
  "A free entertainer for the children",
  "A pool with crystal-clear water",
  "Tropical planting",
  "A view of the Rhodope mountains and the sunset",
];

export const packageAssistEn =
  "The location is on the ring road, two kilometres from the Komatevo district towards Sofia, and Colibri Pool & Garden is part of the same complex.";

export const whyUsEn = [
  "350 sq m of enclosed glazed area",
  "A retractable roof that changes the room in minutes",
  "A pool with crystal-clear water in the courtyard",
  "A view of the Rhodope mountains and the sunset",
  "Tropical planting around the tables",
  "Solid tables and eucalyptus-wood chairs",
  "A secured children's area with a free entertainer",
  "2 km from Komatevo towards Sofia",
];
