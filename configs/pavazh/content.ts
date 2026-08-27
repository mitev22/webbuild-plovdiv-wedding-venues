/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Паваж. Harvested 2026-08-26 from: Google Business профила им (нямат сайт) + публичната им Facebook страница facebook.com/pavaj.plovdiv (снимки и запазена марка, събрани 2026-08-27).
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export const venue = {
  slug: "pavazh",
  name: "Pavazh",
  nameBg: "Паваж",
  wordmark: {
    bg: "Паваж",
    en: "Pavazh",
  },
  navMark: {
    bg: "ПАВАЖ",
    en: "PAVAZH",
  },
  logo: {
    src: "",
    w: 0,
    h: 0,
  },
  town: "Пловдив",
  type: "hall",
  venueNoun: {
    bg: "заведението",
    en: "the place",
  },
  address: "ул. „Златарска“ 7, Капана, Пловдив",
  addressEn: "7 Zlatarska St, Kapana, Plovdiv",
  addressStructured: {
    street: "ул. „Златарска“ 7",
    locality: "Пловдив",
  },
  phone: [
    "087 811 1876",
  ],
  phoneHref: "tel:+359878111876",
  phoneE164: "+359878111876",
  email: "",
  instagram: "",
  facebook: "https://www.facebook.com/pavaj.plovdiv/",
  sameAs: [
    "https://www.facebook.com/pavaj.plovdiv/",
  ],
  mapQuery: "Паваж+Златарска+7+Капана+Пловдив",
  maxCapacity: 0,
  capacity: [],
  spaces: [],
  packages: [],
  packageIncludes: [
    "Гастропъб на ул. „Златарска“ 7, Капана, Пловдив",
    "Отворено от обяд до единайсет вечерта",
    "Места за гости на открито",
    "Хранене на място и вземане от място",
    "Над 25 000 души следят страницата им",
  ],
  packageAssist: "",
  whyUs: [
    "4.5 от отзивите в Google",
    "Места за гости на открито",
    "Хранене на място и вземане от място",
    "Над 25 000 души следят страницата им",
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
    "Писмено съгласие за снимките — взети са от публичната им Facebook страница за демото; при подписване се сменят с предоставени от тях файлове",
    "Векторна версия на марката ПАВАЖ (демото ползва растер от профилната снимка)",
    "Капацитет: брой места седнали, коктейл и на открито",
    "Меню и куверт",
    "Web3Forms access key за формата за запитване",
    "Имейл адрес за контакт",
    "Текст за политика за поверителност — преглед от юрист",
    "Капацитет за частно събитие и брой места",
    "Меню и куверт при наемане на цялото заведение",
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
    metaTitle: "Паваж | Гастропъб в Капана, Пловдив",
    metaDescription: "Гастропъб на ул. „Златарска“ 7 в Капана, Пловдив, с места на открито. Резервации на 087 811 1876.",
    navCity: "Пловдив",
    navSpot: "Капана",
    navSeats: "капацитет по запитване",
    atmosphereNote: "снимките са техни, от публичната им страница във Facebook",
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
    ch1Title: "Паваж. Мястото в Капана.",
    ch1Lead: "Денят започва с пристигането. Гастропъб е на ул. „Златарска“ 7, Капана, Пловдив, в сърцето на Капана.",
    ch2Title: "Церемонията",
    ch2Lead: "Заведението е гастропъб в артистичния квартал Капана.",
    ch2Body: "Подробности за капацитета и за броя места не са публикувани никъде. Ще бъдат добавени, след като бъдат предоставени от домакините.",
    ch3Title: "Вечерята",
    ch3Lead: "Кухнята работи от обяд, а част от местата за гости са навън по паважа.",
    ch4Title: "Вечерта продължава",
    ch4Lead: "Над двайсет и пет хиляди души следят страницата им.",
    ch4Body: "Собствен сайт нямат. Цялата тази публика живее във Facebook, а извън него заведението не се намира.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Отговаряме лично на всяко запитване.",
    gettingHereRows: [
      [
        "Адрес",
        "ул. „Златарска“ 7, Капана, Пловдив",
      ],
      [
        "Работно време",
        "Отворено от обяд до единайсет вечерта",
      ],
      [
        "Телефон",
        "087 811 1876",
      ],
    ],
    whyTitle: "Защо хората избират Паваж",
    packagesTitle: "Какво се знае за мястото",
    packagesLead: "Паваж не публикува куверт и пакети. Показано е само това, което самите те съобщават. Опишете тържеството си във формата и ще получите оферта.",
    includesTitle: "На разположение за деня",
    reviewsLead: "Паваж няма публикувани отзиви, които да бъдат проверени. Разделът остава празен, докато не бъдат предоставени истински.",
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Паваж.",
    footerRights: "Паваж · Пловдив",
    capacityStats: [
      {
        value: "4.5",
        count: 4.5,
        label: "от отзивите в Google",
      },
      {
        value: "25K",
        label: "следят страницата им",
      },
      {
        value: "Капана",
        label: "кварталът на заведението",
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
    metaTitle: "Pavazh | A gastropub in Kapana, Plovdiv",
    metaDescription: "A gastropub at 7 Zlatarska Street in Kapana, Plovdiv, with outdoor seating. Bookings on 087 811 1876.",
    navCity: "Plovdiv",
    navSpot: "Kapana",
    navSeats: "capacity on request",
    atmosphereNote: "the photographs are theirs, from their public Facebook page",
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
    ch1Title: "Pavazh. The place in Kapana.",
    ch1Lead: "The day begins with the arrival. A gastropub sits at 7 Zlatarska St, Kapana, Plovdiv, in the heart of Kapana.",
    ch2Title: "The ceremony",
    ch2Lead: "The place is a gastropub in the artistic quarter of Kapana.",
    ch2Body: "Details of the capacity and the number of seats are not published anywhere. They will be added once the hosts provide them.",
    ch3Title: "Dinner",
    ch3Lead: "The kitchen works from noon, and some of the seating is outside on the cobbles.",
    ch4Title: "The evening goes on",
    ch4Lead: "More than twenty-five thousand people follow their page.",
    ch4Body: "They have no website of their own. That whole audience lives on Facebook, and outside it the place cannot be found.",
    ch5Title: "The farewell is a beginning",
    ch5Lead: "Tell us about your day: season, guest count, approximate budget. Every enquiry gets a personal reply.",
    gettingHereRows: [
      [
        "Address",
        "7 Zlatarska St, Kapana, Plovdiv",
      ],
      [
        "Opening hours",
        "Open from noon until eleven at night",
      ],
      [
        "Phone",
        "087 811 1876",
      ],
    ],
    whyTitle: "Why people choose Pavazh",
    packagesTitle: "What is known about the place",
    packagesLead: "Pavazh publishes no per-head price or packages. Only what they state themselves appears here. Describe your celebration in the form and you will receive an offer.",
    includesTitle: "Available for the day",
    reviewsLead: "Pavazh has no verifiable published reviews. This section stays empty until real ones are supplied.",
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Pavazh website.",
    footerRights: "Pavazh · Plovdiv",
    capacityStats: [
      {
        value: "4.5",
        count: 4.5,
        label: "from its Google reviews",
      },
      {
        value: "25K",
        label: "follow their page",
      },
      {
        value: "Kapana",
        label: "the quarter it stands in",
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
  "A gastropub at 7 Zlatarska St, Kapana, Plovdiv",
  "Open from noon until eleven at night",
  "Outdoor seating for guests",
  "Dining in and collection from the door",
  "More than 25,000 people follow their page",
];

export const packageAssistEn =
  "";

export const whyUsEn = [
  "4.5 from its Google reviews",
  "Outdoor seating for guests",
  "Dining in and collection from the door",
  "More than 25,000 people follow their page",
];

export const gettingHereNote =
  "Гастропъб е на ул. „Златарска“ 7, Капана, Пловдив.";
