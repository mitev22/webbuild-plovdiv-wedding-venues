/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Every fact below was harvested VERBATIM from etra.bg on 2026-07-22 (raw curl).
 * Rules honoured: capacity published, price extracted via the form (their published
 * куверт figures deliberately NOT rendered — Cannon Green asymmetry, per spec §3);
 * reviews verbatim-or-absent (absent — none verifiable); empty fields stay empty.
 */

export const venue = {
  slug: "etra-hall",
  name: "Etra Hall",
  nameBg: "Етра Хол",
  town: "Пловдив",
  type: "hall" as const,
  address: "Комплекс 5 Points, бул. „Санкт Петербург“ 131, Пловдив",
  phone: ["0876 511 111"],
  phoneHref: "tel:+359876511111",
  email: "info@etra.bg",
  instagram: "https://www.instagram.com/etra.hall/",
  capacity: [{ configuration: "седнали", max: 450 }], // единствената публикувана конфигурация
  spaces: [], // няма публикувани данни по зали — оставено празно (handoff)
  packages: [
    {
      name: "Артемида",
      menu: "3-степенно меню",
      feesWaived: false,
    },
    {
      name: "Хера",
      menu: "4-степенно меню",
      feesWaived: false,
    },
    {
      name: "Афродита",
      menu: "4-степенно меню",
      feesWaived: true, // "падат такси сервиз на алкохол, мезета и ядки и торта"
      gift: "Подарък: услугата „Координатор“",
    },
  ],
  // Общи включения — от реалната сравнителна таблица на etra.bg/paketi/
  packageIncludes: [
    "Дегустация за двама",
    "Welcome drink",
    "Хостеса",
    "Сватбен консултант",
    "Бяло платно и менче",
    "Безплатен паркинг",
    "Преференциални цени за напитки",
    "Средна продължителност на събитието 5 часа",
    "Възможност за оставане след работно време",
    "Възможност за организиране на изнесен ритуал",
  ],
  packageAssist:
    "Съдействие за организиране и декориране на вашето тържество, професионален DJ, фотографски и операторски услуги, осветление, музикално-артистична програма, украса, сватбена торта",
  whyUs: [
    "Аристократична и изискана атмосфера",
    "Първокласни храни и напитки",
    "Изискан ресторант с 450 места",
    "Възможност за изнесена церемония",
    "Декор по ваше желание",
    "Преференциални цени от наши партньори",
    "Отстъпки при настаняване в хотел",
    "Безплатен паркинг",
  ],
  parking: "Безплатен паркинг", // брой места непубликуван — оставено без число
  seasonsAvailable: [
    "Пролет 2026", "Лято 2026", "Есен 2026", "Зима 2026",
    "Пролет 2027", "Лято 2027", "Есен 2027", "Зима 2027",
  ],
  reviews: [] as { name: string; date: string; text: string }[], // verbatim-or-absent → absent
  handoff: [
    "Снимки на залата, градината/терасата и минали сватби (реални фото-слотове)",
    "Снимки на екипа",
    "План на залата (floor plan)",
    "Web3Forms access key за формата за запитване",
    "Работно време",
    "Капацитет по конфигурации: бюфет / коктейл / церемония (публикуван е само 450 седнали)",
    "Брой паркоместа (публикувано е само „Безплатен паркинг“)",
    "Facebook страница (в сайта има само Instagram линк)",
    "Потвърждение на куверта: началната страница казва „над 80 лв.“, страницата с пакети — „над 120 лв.“ за Афродита",
    "Текст за политика за поверителност — преглед от юрист",
  ],
} as const;

export type Season = "spring" | "summer" | "autumn" | "winter";

export const seasons: { key: Season; bg: string; en: string }[] = [
  { key: "spring", bg: "Пролет", en: "Spring" },
  { key: "summer", bg: "Лято", en: "Summer" },
  { key: "autumn", bg: "Есен", en: "Autumn" },
  { key: "winter", bg: "Зима", en: "Winter" },
];

// ——— UI strings, BG primary / EN secondary ———
export const dict = {
  bg: {
    langCode: "bg",
    otherLangHref: "/en/",
    otherLangLabel: "EN",
    metaTitle: "Etra Hall | Зала за сватбени тържества и събития в Пловдив",
    metaDescription:
      "Етра Хол е изискана зала за сватби и събития с 450 места в Пловдив, Комплекс 5 Points. Пакети Артемида, Хера и Афродита. Изпратете запитване за вашата дата.",
    navCity: "Пловдив",
    navSpot: "5 Points",
    navSeats: "450 места",
    inquire: "Запитване",
    call: "Обадете се",
    atmosphereNote: "атмосферни визуализации, предстои добавяне на снимки на залата",
    seasonHint: "Една зала в четири сезона. Изберете вашия.",
    scrollCue: "Разгледайте деня",
    chapters: [
      { id: "pristigane", label: "Пристигане" },
      { id: "ceremonia", label: "Церемония" },
      { id: "vecherya", label: "Вечеря" },
      { id: "tanci", label: "Танци" },
      { id: "sboguvane", label: "Сбогуване" },
    ],
    ch1Title: "Етра Хол. Зала за сватбени тържества в Пловдив.",
    ch1Lead:
      "Денят започва с пристигането. Гостите ви намират залата в Комплекс 5 Points на бул. „Санкт Петербург“ 131, на минути от центъра на Пловдив. Безплатен паркинг ви чака пред вратата.",
    gettingHere: "Как се стига",
    gettingHereRows: [
      ["Адрес", "Комплекс 5 Points, бул. „Санкт Петербург“ 131"],
      ["Паркинг", "Безплатен паркинг"],
      ["За гости отвън", "Отстъпки при настаняване в хотел"],
    ],
    mapCta: "Вижте на картата",
    whyTitle: "Защо младоженците избират Етра Хол",
    ch2Title: "Церемонията, във вашия ритъм",
    ch2Lead:
      "Изнесена церемония и изнесен ритуал на място: денят започва и завършва под един покрив, без колона от коли между ритуала и вечерята.",
    ch2Body:
      "Екипът съдейства за декор по ваше желание, осветление и музикално-артистична програма. Залата се подрежда според вашия сценарий.",
    ch3Title: "Вечерята е сърцето на тържеството",
    ch3Lead: "Изискан ресторант с 450 места, първокласни храни и напитки.",
    statSeats: "седнали места",
    statHours: "часа средна продължителност",
    statParking: "паркинг за гостите",
    statParkingValue: "Безплатен",
    statCeremony: "изнесена церемония",
    statCeremonyValue: "Възможна",
    packagesTitle: "Сватбени пакети",
    packagesLead:
      "Три пакета: Артемида, Хера и Афродита. Цената на куверт зависи от менюто и датата. Опишете вашия ден във формата и ще получите точна оферта.",
    includesTitle: "Всеки пакет включва",
    feesLine: "Такси за внасяне на алкохол, мезета и ядки и сервиз на торта",
    feesStandard: "по тарифа",
    feesWaived: "отпадат",
    aphroditeGift: "Подарък: услугата „Координатор“",
    menuLabel: "меню",
    ch4Title: "Танците продължават до последната песен",
    ch4Lead:
      "Професионален DJ, осветление и музикално-артистична програма, с възможност за гост-изпълнител и оставане след работно време.",
    ch4Body:
      "Залата е сцена на големи празнични вечери целогодишно: Коледа, Нова година, концерти с гост-изпълнители.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead:
      "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Публикуваме капацитета открито, а офертата е лична.",
    formName: "Вашите имена",
    formContact: "Телефон или имейл",
    formSeason: "Сезон / дата",
    formSeasonPlaceholder: "Изберете сезон",
    formDateOptional: "Точна дата (по избор)",
    formGuests: "Брой гости",
    formBudget: "Ориентировъчен бюджет (лв.)",
    formBudgetHint: "Само число. Помага ни да предложим точния пакет.",
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
    footerDemo:
      "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Etra Hall.",
    footerRights: "Etra Hall · Пловдив",
  },
  en: {
    langCode: "en",
    otherLangHref: "/",
    otherLangLabel: "БГ",
    metaTitle: "Etra Hall | Wedding and event venue in Plovdiv, Bulgaria",
    metaDescription:
      "Etra Hall is an elegant 450-seat wedding and event venue in Plovdiv, 5 Points Complex. Wedding packages Artemis, Hera and Aphrodite. Send an enquiry for your date.",
    navCity: "Plovdiv",
    navSpot: "5 Points",
    navSeats: "450 seats",
    inquire: "Inquire",
    call: "Call us",
    atmosphereNote: "atmospheric visualisations, venue photography to follow",
    seasonHint: "One hall across four seasons. Choose yours.",
    scrollCue: "Walk through the day",
    chapters: [
      { id: "pristigane", label: "Arrival" },
      { id: "ceremonia", label: "Ceremony" },
      { id: "vecherya", label: "Dinner" },
      { id: "tanci", label: "Dancing" },
      { id: "sboguvane", label: "Farewell" },
    ],
    ch1Title: "Etra Hall. A wedding venue in Plovdiv.",
    ch1Lead:
      "The day begins with the arrival. Your guests find the hall at 5 Points Complex, 131 Sankt Peterburg Blvd, minutes from the centre of Plovdiv. Free parking awaits at the door.",
    gettingHere: "Getting here",
    gettingHereRows: [
      ["Address", "5 Points Complex, 131 Sankt Peterburg Blvd, Plovdiv"],
      ["Parking", "Free parking"],
      ["Out-of-town guests", "Partner hotel accommodation discounts"],
    ],
    mapCta: "View on the map",
    whyTitle: "Why couples choose Etra Hall",
    ch2Title: "The ceremony — at your own pace",
    ch2Lead:
      "An on-site ceremony and civil ritual are possible: the day begins and ends in one place, with no convoy between the ritual and the dinner.",
    ch2Body:
      "The team assists with décor of your choosing, lighting and a music and entertainment programme. The hall is arranged around your scenario.",
    ch3Title: "The dinner is the heart of the celebration",
    ch3Lead: "A refined 450-seat restaurant, first-class food and drink.",
    statSeats: "seated guests",
    statHours: "hours average event duration",
    statParking: "guest parking",
    statParkingValue: "Free",
    statCeremony: "on-site ceremony",
    statCeremonyValue: "Available",
    packagesTitle: "Wedding packages",
    packagesLead:
      "Three packages: Artemis, Hera and Aphrodite. The per-head price depends on the menu and the date. Describe your day in the form and you will receive an exact offer.",
    includesTitle: "Every package includes",
    feesLine: "Corkage fees (alcohol, appetisers & nuts, cake service)",
    feesStandard: "standard rates",
    feesWaived: "waived",
    aphroditeGift: "Gift: the “Coordinator” service",
    menuLabel: "menu",
    ch4Title: "The dancing goes on until the last song",
    ch4Lead:
      "A professional DJ, lighting and a music and entertainment programme, with the option of a guest performer and staying past closing time.",
    ch4Body:
      "The hall stages large celebration nights all year round: Christmas, New Year's Eve, concerts with guest performers.",
    ch5Title: "The farewell is a new beginning",
    ch5Lead:
      "Describe your day: season, guest count, anticipated budget. We publish our capacity openly, and the offer is personal.",
    formName: "Your names",
    formContact: "Phone or email",
    formSeason: "Season / date",
    formSeasonPlaceholder: "Choose a season",
    formDateOptional: "Exact date (optional)",
    formGuests: "Guest count",
    formBudget: "Anticipated budget (BGN)",
    formBudgetHint: "Numerical values only. It helps us propose the right package.",
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
    footerDemo:
      "Spec demonstration site by Meridian Solutions. Not the official Etra Hall website.",
    footerRights: "Etra Hall · Plovdiv",
  },
} as const;

export type Lang = keyof typeof dict;

export const seasonNamesEn: Record<Season, string> = {
  spring: "Spring", summer: "Summer", autumn: "Autumn", winter: "Winter",
};

// EN mirrors of the package names (transliterated Greek goddesses)
export const packageNamesEn: Record<string, string> = {
  "Артемида": "Artemis", "Хера": "Hera", "Афродита": "Aphrodite",
};

export const packageIncludesEn = [
  "Tasting for two",
  "Welcome drink",
  "Hostess",
  "Wedding consultant",
  "White cloth & copper (Bulgarian ritual)",
  "Free parking",
  "Preferential drink prices",
  "Average event duration of 5 hours",
  "Option to stay past closing time",
  "Option to hold the civil ritual on site",
];

export const packageAssistEn =
  "Assistance with organising and decorating your celebration: professional DJ, photography and videography, lighting, music & entertainment programme, décor, wedding cake";

export const whyUsEn = [
  "An aristocratic, refined atmosphere",
  "First-class food and beverages",
  "A refined 450-seat restaurant",
  "On-site ceremony available",
  "Décor of your choosing",
  "Preferential prices from our partners",
  "Hotel accommodation discounts",
  "Free parking",
];
