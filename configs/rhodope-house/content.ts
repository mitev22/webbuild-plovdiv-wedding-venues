/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Родопска къща. Harvested 2026-08-26 from: Facebook страницата им и Google Business профила.
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export const venue = {
  slug: "rhodope-house",
  name: "Rodopska Kashta",
  nameBg: "Родопска къща",
  wordmark: {
    bg: "Родопска къща",
    en: "Rodopska Kashta",
  },
  navMark: {
    bg: "РОДОПСКА КЪЩА",
    en: "RODOPSKA KASHTA",
  },
  logo: {
    src: "",
    w: 0,
    h: 0,
  },
  town: "Асеновград",
  type: "hall",
  venueNoun: {
    bg: "ресторанта",
    en: "the restaurant",
  },
  address: "бул. „България“ 128, Асеновград",
  addressEn: "128 Bulgaria Blvd, Asenovgrad",
  addressStructured: {
    street: "бул. „България“ 128",
    locality: "Асеновград",
  },
  phone: [
    "088 736 2666",
  ],
  phoneHref: "tel:+359887362666",
  phoneE164: "+359887362666",
  email: "",
  instagram: "",
  facebook: "https://www.facebook.com/rodopskakushta",
  sameAs: [
    "https://www.facebook.com/rodopskakushta",
  ],
  mapQuery: "Родопска+къща+бул.+България+128+Асеновград",
  maxCapacity: 0,
  capacity: [],
  spaces: [],
  packages: [],
  packageIncludes: [
    "Традиционен ресторант и хотел в Асеновград",
    "Организация на сватби, годежи и балове",
    "Безплатен паркинг за гостите",
    "Места за гости на открито",
    "Стаи за гости на място",
  ],
  packageAssist: "",
  whyUs: [
    "Сами обявяват, че организират сватби и годежи",
    "Хотел и ресторант на едно място, с стаи за гостите",
    "Безплатен паркинг",
    "Над 6000 души следят страницата им",
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
    "Снимки на ресторанта и на минали сватби (реални фото-слотове)",
    "Капацитет: брой места седнали, коктейл и на открито",
    "Меню и куверт",
    "Web3Forms access key за формата за запитване",
    "Имейл адрес за контакт",
    "Текст за политика за поверителност — преглед от юрист",
    "Капацитет на ресторанта и брой стаи в хотела",
    "Меню и куверт за сватби",
    "Брой паркоместа",
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
    metaTitle: "Родопска къща | Сватби и тържества в Асеновград",
    metaDescription: "Традиционен ресторант и хотел на бул. „България“ 128 в Асеновград. Организация на сватби и годежи, безплатен паркинг. Резервации на 088 736 2666.",
    navCity: "Асеновград",
    navSpot: "Асеновград",
    navSeats: "капацитет по запитване",
    atmosphereNote: "атмосферни визуализации, предстои добавяне на снимки на ресторанта",
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
    ch1Title: "Родопска къща. Сватбата и нощувката на едно място.",
    ch1Lead: "Денят започва с пристигането. Родопска къща е на бул. „България“ 128 в Асеновград, а гостите, които остават, спят на място.",
    ch2Title: "Церемонията",
    ch2Lead: "Домакините сами обявяват, че организират сватби, годежи, балове и фирмени събития.",
    ch2Body: "Подробности за капацитета и за броя места не са публикувани никъде. Ще бъдат добавени, след като бъдат предоставени от домакините.",
    ch3Title: "Вечерята в ресторанта",
    ch3Lead: "Кухнята е традиционна, а част от местата за гости са на открито.",
    ch4Title: "Вечерта продължава",
    ch4Lead: "Гостите, които остават, спят в стаите на място.",
    ch4Body: "Паркингът е безплатен, а над шест хиляди души следят страницата им. Собствен сайт нямат, така че резервациите минават през телефона и Facebook.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Отговаряме лично на всяко запитване.",
    gettingHereRows: [
      [
        "Адрес",
        "бул. „България“ 128, Асеновград",
      ],
      [
        "Резервации",
        "088 736 2666",
      ],
      [
        "Имейл",
        "rodopskakushta@abv.bg",
      ],
    ],
    whyTitle: "Защо младоженците избират Родопска къща",
    packagesTitle: "Какво се знае за мястото",
    packagesLead: "Родопска къща не публикува куверт и пакети. Показано е само това, което самите те съобщават. Опишете тържеството си във формата и ще получите оферта.",
    includesTitle: "На разположение за деня",
    reviewsLead: "Родопска къща няма публикувани отзиви, които да бъдат проверени. Разделът остава празен, докато не бъдат предоставени истински.",
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Родопска къща.",
    footerRights: "Родопска къща · Асеновград",
    capacityStats: [
      {
        value: "Сватби",
        label: "сами обявяват, че ги организират",
      },
      {
        value: "Безплатен",
        label: "паркинг за гостите",
      },
      {
        value: "6.4K",
        label: "следят страницата им",
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
    metaTitle: "Rodopska Kashta | Weddings in Asenovgrad",
    metaDescription: "A traditional restaurant and hotel at 128 Bulgaria Blvd in Asenovgrad. Weddings and engagements organised, free parking. Bookings on 088 736 2666.",
    navCity: "Asenovgrad",
    navSpot: "Asenovgrad",
    navSeats: "capacity on request",
    atmosphereNote: "atmospheric visualisations, photographs of the restaurant to be added",
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
    ch1Title: "Rodopska Kashta. The wedding and the night, in one place.",
    ch1Lead: "The day begins with the arrival. Rodopska Kashta stands at 128 Bulgaria Boulevard in Asenovgrad, and guests who stay sleep on site.",
    ch2Title: "The ceremony",
    ch2Lead: "The hosts state themselves that they organise weddings, engagements, balls and company events.",
    ch2Body: "Details of the capacity and the number of seats are not published anywhere. They will be added once the hosts provide them.",
    ch3Title: "Dinner in the restaurant",
    ch3Lead: "The kitchen is traditional, and some of the guest seating is outdoors.",
    ch4Title: "The evening goes on",
    ch4Lead: "Guests who stay sleep in the rooms on site.",
    ch4Body: "Parking is free, and more than six thousand people follow their page. They have no website of their own, so bookings go through the telephone and Facebook.",
    ch5Title: "The farewell is a beginning",
    ch5Lead: "Tell us about your day: season, guest count, approximate budget. Every enquiry gets a personal reply.",
    gettingHereRows: [
      [
        "Address",
        "128 Bulgaria Blvd, Asenovgrad",
      ],
      [
        "Bookings",
        "088 736 2666",
      ],
      [
        "Email",
        "rodopskakushta@abv.bg",
      ],
    ],
    whyTitle: "Why couples choose Rodopska Kashta",
    packagesTitle: "What is known about the place",
    packagesLead: "Rodopska Kashta publishes no per-head price or packages. Only what they state themselves appears here. Describe your celebration in the form and you will receive an offer.",
    includesTitle: "Available for the day",
    reviewsLead: "Rodopska Kashta has no verifiable published reviews. This section stays empty until real ones are supplied.",
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Rodopska Kashta website.",
    footerRights: "Rodopska Kashta · Asenovgrad",
    capacityStats: [
      {
        value: "Weddings",
        label: "they state they organise them",
      },
      {
        value: "Free",
        label: "parking for guests",
      },
      {
        value: "6.4K",
        label: "follow their page",
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
  "A traditional restaurant and hotel in Asenovgrad",
  "Weddings, engagements and balls are organised here",
  "Free parking for guests",
  "Outdoor seating for guests",
  "Guest rooms on site",
];

export const packageAssistEn =
  "";

export const whyUsEn = [
  "They state themselves that they organise weddings and engagements",
  "A hotel and a restaurant in one, with rooms for the guests",
  "Free parking",
  "More than 6,000 people follow their page",
];

export const gettingHereNote =
  "Родопска къща е на бул. „България“ 128 в Асеновград.";
