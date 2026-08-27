/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Ресторант „Панорама“. Harvested 2026-08-26 from: собствения им сайт sphotel.net (Парк хотел „Санкт Петербург“, страница /dining/panorama и /halls) — снимки, капацитет, кухня; събрани 2026-08-27.
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export const venue = {
  slug: "panorama-sp",
  name: "Panorama Restaurant",
  nameBg: "Ресторант „Панорама“",
  wordmark: {
    bg: "Панорама",
    en: "Panorama",
  },
  navMark: {
    bg: "РЕСТОРАНТ ПАНОРАМА",
    en: "PANORAMA",
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
  address: "бул. „България“ 97, ет. 22, Пловдив",
  addressEn: "97 Bulgaria Blvd, floor 22, Plovdiv",
  addressStructured: {
    street: "бул. „България“ 97, ет. 22",
    locality: "Пловдив",
  },
  phone: [
    "088 868 6817",
  ],
  phoneHref: "tel:+359888686817",
  phoneE164: "+359888686817",
  email: "",
  instagram: "",
  facebook: "",
  sameAs: [
    "https://sphotel.net/dining/panorama",
  ],
  mapQuery: "Ресторант+Панорама+хотел+Санкт+Петербург+България+97+Пловдив",
  maxCapacity: 120,
  capacity: [],
  spaces: [],
  packages: [],
  packageIncludes: [
    "Ресторант на 22-ия етаж със 120 места",
    "Панорамен изглед към Пловдив и Родопите",
    "Открита лятна градина",
    "Гръцка и средиземноморска кухня от остъклена кухня",
    "Зали Пълдин, Нева и Дружба в хотела",
  ],
  packageAssist: "",
  whyUs: [
    "Най-високата гледка към Пловдив — 22-ият етаж",
    "120 места и открита лятна градина",
    "Гръцка и средиземноморска кухня, приготвяна пред гостите",
    "Зали в хотела за по-големите поводи",
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
    "Поемат ли сватбени тържества в ресторанта и при какви условия",
    "Капацитет за тържество седнали — в ресторанта и в залите",
    "Меню и куверт за тържество",
    "Снимки от минали тържества (залите са снимани само като конферентни)",
    "Web3Forms access key за формата за запитване",
    "Имейл адрес за контакт",
    "Текст за политика за поверителност — преглед от юрист",
    "Потвърждение, че може да ползваме снимките им от sphotel.net",
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
    metaTitle: "Ресторант „Панорама“ | Тържества над Пловдив",
    metaDescription: "Панорамен ресторант на двайсет и втория етаж на бул. „България“ 97 в Пловдив. Запитване на 088 868 6817.",
    navCity: "Пловдив",
    navSpot: "22-ият етаж",
    navSeats: "капацитет по запитване",
    atmosphereNote: "снимките са техни собствени, от сайта им sphotel.net",
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
    ch1Title: "Ресторант „Панорама“. Мястото на повода.",
    ch1Lead: "Денят започва с пристигането. Ресторантът е на бул. „България“ 97, ет. 22, Пловдив, на двайсет и втория етаж над Пловдив.",
    ch2Title: "Церемонията",
    ch2Lead: "Ресторантът е на двайсет и втория етаж, с изглед над целия Пловдив.",
    ch2Body: "Ресторантът е с капацитет 120 места на 22-ия етаж, с открита лятна градина. Трите зали на хотела — Пълдин, Нева и Дружба — се предлагат отделно, но се рекламират за конференции, не за тържества.",
    ch3Title: "Вечерята",
    ch3Lead: "Гостите се хранят високо над града, покрай прозорците.",
    ch4Title: "Вечерта продължава",
    ch4Lead: "Изгледът от двайсет и втория етаж поема вечерта.",
    ch4Body: "Резервация се прави на 088 868 6817 или през сайта на хотела sphotel.net.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Отговаряме лично на всяко запитване.",
    gettingHereRows: [
      [
        "Адрес",
        "бул. „България“ 97, ет. 22, Пловдив",
      ],
      [
        "Мястото",
        "Парк хотел „Санкт Петербург“",
      ],
      [
        "Телефон",
        "088 868 6817",
      ],
      [
        "Работно време",
        "18:00 – 24:00",
      ],
    ],
    whyTitle: "Защо младоженците избират Ресторант „Панорама“",
    packagesTitle: "Мястото и кухнята",
    packagesLead: "„Панорама“ не публикува куверт и сватбени пакети. Показано е това, което сами съобщават за ресторанта. Опишете тържеството си във формата и ще получите оферта.",
    includesTitle: "На разположение за деня",
    reviewsLead: "Отзивите на гостите предстои да бъдат събрани и публикувани със съгласието на домакините.",
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Ресторант „Панорама“.",
    footerRights: "Ресторант „Панорама“ · Пловдив",
    capacityStats: [
      {
        value: "120",
        count: 120,
        label: "места в ресторанта",
      },
      {
        value: "22-ри",
        label: "етажът над Пловдив",
      },
      {
        value: "18:00",
        label: "часът, в който отваря",
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
    metaTitle: "Panorama Restaurant | Celebrations above Plovdiv",
    metaDescription: "A panoramic restaurant on the twenty-second floor at 97 Bulgaria Boulevard in Plovdiv. Enquire on 088 868 6817.",
    navCity: "Plovdiv",
    navSpot: "22nd floor",
    navSeats: "capacity on request",
    atmosphereNote: "the photographs are their own, from their site sphotel.net",
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
    ch1Title: "Panorama Restaurant. Where the occasion happens.",
    ch1Lead: "The day begins with the arrival. The restaurant sits at 97 Bulgaria Blvd, floor 22, Plovdiv, on the twenty-second floor above Plovdiv.",
    ch2Title: "The ceremony",
    ch2Lead: "The restaurant sits on the twenty-second floor, with a view over the whole of Plovdiv.",
    ch2Body: "The restaurant seats 120 on the 22nd floor and has an open summer garden. The hotel's three halls — Puldin, Neva and Druzhba — are offered separately, but are marketed for conferences, not celebrations.",
    ch3Title: "Dinner",
    ch3Lead: "Guests dine high above the city, along the windows.",
    ch4Title: "The evening goes on",
    ch4Lead: "The view from the twenty-second floor carries the evening.",
    ch4Body: "Booking is on 088 868 6817 or through the hotel's site sphotel.net.",
    ch5Title: "The farewell is a beginning",
    ch5Lead: "Tell us about your day: season, guest count, approximate budget. Every enquiry gets a personal reply.",
    gettingHereRows: [
      [
        "Address",
        "97 Bulgaria Blvd, floor 22, Plovdiv",
      ],
      [
        "Venue",
        "Park Hotel Sankt Peterburg",
      ],
      [
        "Phone",
        "088 868 6817",
      ],
      [
        "Open",
        "18:00 – 24:00",
      ],
    ],
    whyTitle: "Why couples choose Panorama Restaurant",
    packagesTitle: "The place and the kitchen",
    packagesLead: "Panorama publishes no per-head price or wedding packages. What appears here is what they state themselves about the restaurant. Describe your celebration in the form for an offer.",
    includesTitle: "Available for the day",
    reviewsLead: "Guest reviews are still to be collected and published with the hosts' consent.",
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Panorama Restaurant website.",
    footerRights: "Panorama Restaurant · Plovdiv",
    capacityStats: [
      {
        value: "120",
        count: 120,
        label: "seats in the restaurant",
      },
      {
        value: "22nd",
        label: "floor above Plovdiv",
      },
      {
        value: "18:00",
        label: "when it opens",
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
  "A restaurant on the 22nd floor seating 120",
  "A panoramic view over Plovdiv and the Rhodopes",
  "An open summer garden",
  "Greek and Mediterranean cooking from a glass-walled kitchen",
  "The Puldin, Neva and Druzhba halls in the hotel",
];

export const packageAssistEn =
  "";

export const whyUsEn = [
  "The highest view over Plovdiv — the 22nd floor",
  "120 seats and an open summer garden",
  "Greek and Mediterranean cooking, prepared in front of the guests",
  "Halls in the hotel for larger occasions",
];

export const gettingHereNote =
  "Ресторантът е на бул. „България“ 97, ет. 22, Пловдив.";
