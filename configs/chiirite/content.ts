/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Хотел „Чиирите“. Harvested 2026-08-26 from: собствения им сайт chiirite.bg — снимки, капацитет, контакти; събрани 2026-08-27.
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export const venue = {
  slug: "chiirite",
  name: "Hotel Chiirite",
  nameBg: "Хотел „Чиирите“",
  wordmark: {
    bg: "Чиирите",
    en: "Chiirite",
  },
  navMark: {
    bg: "ХОТЕЛ ЧИИРИТЕ",
    en: "HOTEL CHIIRITE",
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
  address: "Околовръстен път, местност Чиирите 020B, Пловдив",
  addressEn: "Ring road, Chiirite locality 020B, Plovdiv",
  addressStructured: {
    street: "Околовръстен път, местност Чиирите 020B",
    locality: "Пловдив",
  },
  phone: [
    "032 202 600",
  ],
  phoneHref: "tel:+35932202600",
  phoneE164: "+35932202600",
  email: "manager@chiirite.bg",
  instagram: "",
  facebook: "",
  sameAs: [
    "https://chiirite.bg",
  ],
  mapQuery: "Хотел+Чиирите+Околовръстен+път+Пловдив",
  maxCapacity: 70,
  capacity: [],
  spaces: [],
  packages: [],
  packageIncludes: [
    "Ресторант със 70 места, работещ от 7:30 до 23:00",
    "Мултифункционална зала с мултимедийно оборудване",
    "Тераса и градина с изглед към планината",
    "Лоби бар и фоайе",
    "Стаи за гостите — луксозни, двойни и единични",
    "Паркинг на място",
  ],
  packageAssist: "",
  whyUs: [
    "Ресторант със 70 места и мултифункционална зала",
    "Тераса и градина с изглед към планината",
    "Стаи за гостите на място",
    "На Околовръстния път — лесен достъп и паркинг",
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
    "Капацитет за тържество седнали (ресторант + мултифункционална зала)",
    "Меню и куверт",
    "Снимки от минали сватби",
    "Web3Forms access key за формата",
    "Политика за поверителност — преглед от юрист",
    "Потвърждение, че може да ползваме снимките им от chiirite.bg",
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
    metaTitle: "Хотел „Чиирите“ | Сватбени тържества край Пловдив",
    metaDescription: "Хотел с мултифункционална зала и ресторант със 70 места на Околовръстния път на Пловдив. Сватбени тържества. Запитване на 032 202 600.",
    navCity: "Пловдив",
    navSpot: "Чиирите",
    navSeats: "капацитет по запитване",
    atmosphereNote: "снимките са техни собствени, от сайта им chiirite.bg",
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
    ch1Title: "Хотел „Чиирите“. Всичко за деня под един покрив.",
    ch1Lead: "Денят започва с пристигането. Хотелът е на Околовръстен път, местност Чиирите 020B, Пловдив, на Околовръстния път на Пловдив.",
    ch2Title: "Церемонията",
    ch2Lead: "Домакините описват залата като мултифункционална, с озвучаване, екран и проектор.",
    ch2Body: "Ресторантът е със седемдесет места и работи от 7:30 до 23:00. Хотелът има и мултифункционална зала с мултимедия, а гостите могат да останат за нощувка.",
    ch3Title: "Вечерята в ресторанта",
    ch3Lead: "Ресторантът разполага със седемдесет места и работи от 7:30 до 23:00.",
    ch4Title: "Вечерта продължава",
    ch4Lead: "Гостите, които остават, спят в стаите на място.",
    ch4Body: "Резервация се прави на 032 202 600 или на manager@chiirite.bg.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Отговаряме лично на всяко запитване.",
    gettingHereRows: [
      [
        "Адрес",
        "Околовръстен път, местност Чиирите 020B, Пловдив",
      ],
      [
        "Телефон",
        "032 202 600",
      ],
      [
        "Е-мейл",
        "manager@chiirite.bg",
      ],
      [
        "Ресторант",
        "7:30 – 23:00",
      ],
    ],
    whyTitle: "Защо младоженците избират Хотел „Чиирите“",
    packagesTitle: "Какво се знае за мястото",
    packagesLead: "Хотел „Чиирите“ не публикува куверт. Показано е това, което сами съобщават. Опишете тържеството си във формата и ще получите оферта.",
    includesTitle: "На разположение за деня",
    reviewsLead: "Отзивите на гостите предстои да бъдат събрани и публикувани със съгласието на домакините.",
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Хотел „Чиирите“.",
    footerRights: "Хотел „Чиирите“ · Пловдив",
    capacityStats: [
      {
        value: "70",
        count: 70,
        label: "места в ресторанта",
      },
      {
        value: "7:30",
        label: "часът, в който отваря",
      },
      {
        value: "Планината",
        label: "изгледът от терасата",
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
    metaTitle: "Hotel Chiirite | Wedding celebrations near Plovdiv",
    metaDescription: "A hotel with a multifunctional hall and a 70-seat restaurant on the Plovdiv ring road. Wedding celebrations. Enquire on 032 202 600.",
    navCity: "Plovdiv",
    navSpot: "Chiirite",
    navSeats: "capacity on request",
    atmosphereNote: "the photographs are their own, from their site chiirite.bg",
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
    ch1Title: "Hotel Chiirite. Everything for the day under one roof.",
    ch1Lead: "The day begins with the arrival. The hotel sits at Ring road, Chiirite locality 020B, Plovdiv, on the Plovdiv ring road.",
    ch2Title: "The ceremony",
    ch2Lead: "The hosts describe the hall as multifunctional, with a sound system, a screen and a projector.",
    ch2Body: "The restaurant seats seventy and is open 7:30 to 23:00. The hotel also has a multifunctional hall with multimedia, and guests can stay the night.",
    ch3Title: "Dinner in the restaurant",
    ch3Lead: "The restaurant seats seventy and works from 7:30 until 23:00.",
    ch4Title: "The evening goes on",
    ch4Lead: "Guests who stay sleep in the rooms on site.",
    ch4Body: "Booking is on 032 202 600 or at manager@chiirite.bg.",
    ch5Title: "The farewell is a beginning",
    ch5Lead: "Tell us about your day: season, guest count, approximate budget. Every enquiry gets a personal reply.",
    gettingHereRows: [
      [
        "Address",
        "Ring road, Chiirite locality 020B, Plovdiv",
      ],
      [
        "Phone",
        "032 202 600",
      ],
      [
        "E-mail",
        "manager@chiirite.bg",
      ],
      [
        "Restaurant",
        "7:30 – 23:00",
      ],
    ],
    whyTitle: "Why couples choose Hotel Chiirite",
    packagesTitle: "What is known about the place",
    packagesLead: "Chiirite publishes no per-head price. What appears here is what they state themselves. Describe your celebration in the form for an offer.",
    includesTitle: "Available for the day",
    reviewsLead: "Guest reviews are still to be collected and published with the hosts' consent.",
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Hotel Chiirite website.",
    footerRights: "Hotel Chiirite · Plovdiv",
    capacityStats: [
      {
        value: "70",
        count: 70,
        label: "seats in the restaurant",
      },
      {
        value: "7:30",
        label: "when it opens",
      },
      {
        value: "The mountain",
        label: "the view from the terrace",
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
  "A restaurant seating 70, open 7:30 to 23:00",
  "A multifunctional hall with multimedia equipment",
  "A terrace and garden with a view to the mountain",
  "A lobby bar and foyer",
  "Rooms for guests — luxury, double and single",
  "Parking on site",
];

export const packageAssistEn =
  "";

export const whyUsEn = [
  "A 70-seat restaurant and a multifunctional hall",
  "A terrace and garden facing the mountain",
  "Rooms for guests on site",
  "On the ring road — easy access and parking",
];

export const gettingHereNote =
  "Хотелът е на Околовръстен път, местност Чиирите 020B, Пловдив.";
