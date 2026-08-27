/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Harvested 2026-07-22 from svatbendom.bg.
 * ⚠ THE DEFECT: their live homepage is printing raw PHP `var_dump()` output. Internal
 * database structure is leaking to every visitor — column names (`zavedenia_id`,
 * `added_datetime`, `status`, `created_at`, `updated_at`), row ids and image filenames.
 * The venue's real service catalogue below was recovered FROM that leak, because it is
 * the only place the site actually publishes it in full.
 * ⚠ There is also no <form> anywhere: ordering is farmed out to an external order.bg
 * button. Prices below are genuinely published by them and are shown as published.
 */

export const venue = {
  slug: "svatben-dom",
  name: "Svatben Dom",
  nameBg: "Сватбен Дом",
  wordmark: {
    bg: "Сватбен Дом",
    en: "Svatben Dom",
  },
  navMark: {
    bg: "СВАТБЕН ДОМ",
    en: "SVATBEN DOM",
  },
  logo: {
    src: "",
    w: 0,
    h: 0,
  },
  town: "община Родопи",
  type: "hall",
  venueNoun: {
    bg: "залата",
    en: "the hall",
  },
  address: "община Родопи, край Пловдив",
  addressEn: "Rodopi municipality, near Plovdiv",
  addressStructured: {
    street: "община Родопи",
    locality: "Пловдив",
  },
  phone: [
    "0888 515 864",
  ],
  phoneHref: "tel:+359888515864",
  phoneE164: "+359888515864",
  email: "",
  instagram: "",
  facebook: "",
  sameAs: [
    "https://svatbendom.bg",
  ],
  mapQuery: "Сватбен+Дом+община+Родопи+Пловдив",
  maxCapacity: 0,
  capacity: [],
  spaces: [
    {
      name: "Залата",
      capacity: 0,
      indoor: true,
      note: "капацитетът не е публикуван от заведението",
    },
    {
      name: "Ротондата",
      capacity: 0,
      indoor: false,
      note: "за изнесен ритуал, с пътека и украса",
    },
    {
      name: "Хотелската част",
      capacity: 0,
      indoor: true,
      note: "на разположение само на сватбените тържества",
    },
  ],
  packages: [] as { name: string; menu: string; feesWaived: boolean; gift?: string }[],
  packageIncludes: [
    "Изнесен ритуал с ротонда и пътека",
    "Воали и изкуствени цветя за пътеката",
    "Естествени цветя за ротондата",
    "Украса на столовете и пейките",
    "Украса на масата за подписа",
    "Знамена и озвучаване",
    "Чаши за външно даряване",
    "Фолклорно посрещане",
    "Хотелска част само за сватбарите",
    "Стаи със санитарен възел и климатик",
    "Нощувката за младоженците е подарък",
  ],
  packageAssist: "Изнесеният ритуал е допълнителна услуга, която се записва в община Родопи. Комплексът има своите преимущества, а именно че е близо, но извън града.",
  whyUs: [
    "20 години опит в организирането на сватбени тържества",
    "Изнесен ритуал с ротонда, пътека и пълна украса",
    "Фолклорно посрещане по български обичай",
    "Хотелска част, запазена само за сватбарите",
    "Нощувката за младоженците е подарък",
    "Близо до Пловдив, но извън града",
    "Възможност за църковен брак и кръщене",
    "Публикувани цени за ритуалите и за нощувките",
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
    "⚠ КРИТИЧНО: началната страница на svatbendom.bg изнася наяве суров PHP var_dump. Пред всеки посетител се изписва вътрешната структура на базата: имена на колони (zavedenia_id, added_datetime, status, created_at, updated_at), номера на записи и имена на файлове. Това е дебъг код, пуснат в продукция, и трябва да падне веднага",
    "Форма за запитване: в сайта няма нито един <form> елемент, а поръчката се препраща към външен бутон към order.bg",
    "Капацитет на залата: заведението не публикува брой места за самия Сватбен Дом. Единственото число в сайта (100 човека) се отнася за ресторант „Водолей“ в ж.к. Тракия, друг обект",
    "Куверт за сватбено тържество: публикувани са цени за ритуалите и за нощувките, но не и куверт",
    "Точен адрес: публикувано е само „община Родопи“, без улица и номер",
    "Реални снимки: използвани са само два кадъра без разпознаваеми гости. Останалите налични снимки показват лицата на реални младоженци и гости и не са пренесени тук",
    "Имейл адрес за контакт: публикуван е само телефон",
    "Актуалност на цените: църковният ритуал се обявява с „през първите дни на 2015 година“",
    "Работно време",
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
    metaTitle: "Сватбен Дом | Сватбени тържества край Пловдив",
    metaDescription: "Сватбен Дом, община Родопи: 20 години опит в организирането на сватбени тържества, изнесен ритуал, фолклорно посрещане и хотелска част само за сватбарите.",
    navCity: "община Родопи",
    navSpot: "край Пловдив",
    navSeats: "20 години опит",
    inquire: "Запитване",
    call: "Обадете се",
    atmosphereNote: "атмосферни визуализации, предстои добавяне на още снимки на залата",
    seasonHint: "Един дом в четири сезона. Изберете вашия.",
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
    ch1Title: "Сватбен Дом. Близо до града, но извън него.",
    ch1Lead: "Денят започва с пристигането. Комплексът има своите преимущества, а именно че е близо, но извън града, в община Родопи.",
    gettingHere: "Как се стига",
    gettingHereRows: [
      [
        "Локация",
        "община Родопи, край Пловдив",
      ],
      [
        "Хотел",
        "на разположение само на сватбарите",
      ],
      [
        "Телефон",
        "0888 515 864",
      ],
    ],
    mapCta: "Вижте на картата",
    whyTitle: "Защо младоженците избират Сватбен Дом",
    ch2Title: "Ритуалът при ротондата",
    ch2Lead: "Изнесеният ритуал е допълнителна услуга, която се записва в община Родопи. Украсата и озвучаването са включени в цената от 150 лева.",
    ch2Body: "В нея влизат воали и изкуствени цветя за пътеката, естествени цветя за ротондата, украса на столовете и пейките, украса на масата за подписа, знамена, озвучаване и чаши за външно даряване.",
    ch3Title: "Вечерята след двадесет години практика",
    ch3Lead: "С двадесет годишен опит в организирането на сватбени тържества домакините създадоха това място, единствено по рода си в региона на град Пловдив.",
    packagesTitle: "Какво включва домът",
    packagesLead: "Сватбен Дом публикува цени за ритуалите и за нощувките, но не и куверт. Опишете тържеството си във формата и ще получите оферта за вашата дата и брой гости.",
    includesTitle: "На разположение за вашето тържество",
    ch4Title: "Гостите остават да спят",
    ch4Lead: "Сватбен Дом има хотелска част, която е на разположение само на сватбените тържества. Всяка стая има санитарен възел и климатик.",
    ch4Body: "Нощувката за младоженците е подарък, а за останалите гости цените са 50 лева за единична стая, 70 лева за двойна, 100 лева за тройка и 20 лева за дете.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Публикуваме капацитета открито, а офертата е лична.",
    reviewsTitle: "Отзиви",
    reviewsLead: "Сватбен Дом не публикува отзиви. Разделът остава празен, докато не бъдат предоставени истински.",
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
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Сватбен Дом.",
    footerRights: "Сватбен Дом · община Родопи",
    capacityStats: [
      {
        value: "20",
        count: 20,
        label: "години опит",
      },
      {
        value: "150",
        count: 150,
        label: "лв за изнесен ритуал",
      },
      {
        value: "Подарък",
        label: "нощувка за младоженците",
      },
      {
        value: "Само за",
        label: "сватбари е хотелът",
      },
    ],
  },
  en: {
    langCode: "en",
    otherLangHref: "/",
    otherLangLabel: "БГ",
    metaTitle: "Svatben Dom | Wedding celebrations near Plovdiv",
    metaDescription: "Svatben Dom, Rodopi municipality: 20 years of organising wedding celebrations, an outdoor ritual, a folk welcome and a hotel wing reserved for wedding parties.",
    navCity: "Rodopi municipality",
    navSpot: "near Plovdiv",
    navSeats: "20 years of experience",
    inquire: "Inquire",
    call: "Call us",
    atmosphereNote: "atmospheric visualisations, further photography of the hall to follow",
    seasonHint: "One house across four seasons. Choose yours.",
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
    ch1Title: "Svatben Dom. Close to the city, and outside it.",
    ch1Lead: "The day begins with the arrival. The complex has its advantages, namely that it is close by but outside the city, in the Rodopi municipality.",
    gettingHere: "Getting here",
    gettingHereRows: [
      [
        "Location",
        "Rodopi municipality, near Plovdiv",
      ],
      [
        "Hotel",
        "reserved for wedding parties only",
      ],
      [
        "Phone",
        "0888 515 864",
      ],
    ],
    mapCta: "View on the map",
    whyTitle: "Why couples choose Svatben Dom",
    ch2Title: "The ritual at the rotunda",
    ch2Lead: "The outdoor ritual is an additional service registered with the Rodopi municipality. Decoration and sound are included in the price of 150 leva.",
    ch2Body: "It covers veils and artificial flowers for the aisle, fresh flowers for the rotunda, decoration of the chairs and benches, decoration of the signing table, flags, sound and glasses for the traditional pouring.",
    ch3Title: "Dinner after twenty years of practice",
    ch3Lead: "With twenty years of experience organising wedding celebrations, the hosts created this place, one of a kind in the Plovdiv region.",
    packagesTitle: "What the house includes",
    packagesLead: "Svatben Dom publishes prices for the rituals and for the rooms, but no per-head price. Describe your celebration in the form and you will receive an offer for your date and guest count.",
    includesTitle: "At your disposal for the celebration",
    ch4Title: "The guests stay the night",
    ch4Lead: "Svatben Dom has a hotel wing available only to wedding parties. Every room has its own bathroom and air conditioning.",
    ch4Body: "The night is a gift for the couple, and for the other guests the rates are 50 leva for a single room, 70 for a double, 100 for a triple and 20 for a child.",
    ch5Title: "The farewell is a new beginning",
    ch5Lead: "Describe your day: season, guest count, anticipated budget. We publish our capacity openly, and the offer is personal.",
    reviewsTitle: "Reviews",
    reviewsLead: "Svatben Dom publishes no reviews. This section stays empty until real ones are supplied.",
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
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Svatben Dom website.",
    footerRights: "Svatben Dom · Rodopi municipality",
    capacityStats: [
      {
        value: "20",
        count: 20,
        label: "years of experience",
      },
      {
        value: "150",
        count: 150,
        label: "BGN for the outdoor ritual",
      },
      {
        value: "A gift",
        label: "the couple's night",
      },
      {
        value: "Wedding",
        label: "parties only, the hotel",
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
  "An outdoor ritual with a rotunda and an aisle",
  "Veils and artificial flowers for the aisle",
  "Fresh flowers for the rotunda",
  "Decoration of the chairs and benches",
  "Decoration of the signing table",
  "Flags and sound",
  "Glasses for the traditional pouring",
  "A folk welcome",
  "A hotel wing for the wedding party only",
  "Rooms with a bathroom and air conditioning",
  "The couple's night is a gift",
];

export const packageAssistEn =
  "The outdoor ritual is an additional service registered with the Rodopi municipality. The complex has its advantages, namely that it is close by but outside the city.";

export const whyUsEn = [
  "20 years of experience organising wedding celebrations",
  "An outdoor ritual with a rotunda, an aisle and full decoration",
  "A folk welcome in the Bulgarian tradition",
  "A hotel wing kept for the wedding party alone",
  "The couple's night is a gift",
  "Close to Plovdiv, and outside the city",
  "The option of a church wedding or a christening",
  "Published prices for the rituals and the rooms",
];
