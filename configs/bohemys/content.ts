/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Bohemy’s Friends. Harvested 2026-08-26 from: Google Business профила им (нямат сайт) | заглавна снимка от публичната им Facebook страница (https://www.facebook.com/p/Bohemys-Friends-100086960432432/), 2026-08-27.
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export const venue = {
  slug: "bohemys",
  name: "Bohemy’s Friends",
  nameBg: "Bohemy’s Friends",
  wordmark: {
    bg: "Bohemy’s",
    en: "Bohemy’s",
  },
  navMark: {
    bg: "BOHEMY’S FRIENDS",
    en: "BOHEMY’S FRIENDS",
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
  address: "ул. „Недялка Шилева“ 11, Пловдив",
  addressEn: "11 Nedyalka Shileva St, Plovdiv",
  addressStructured: {
    street: "ул. „Недялка Шилева“ 11",
    locality: "Пловдив",
  },
  phone: [
    "087 770 3104",
  ],
  phoneHref: "tel:+359877703104",
  phoneE164: "+359877703104",
  email: "",
  instagram: "",
  facebook: "https://www.facebook.com/profile.php?id=100086960432432",
  sameAs: [
    "https://www.facebook.com/profile.php?id=100086960432432",
  ],
  mapQuery: "Bohemys+Friends+Недялка+Шилева+11+Пловдив",
  maxCapacity: 0,
  capacity: [],
  spaces: [],
  packages: [],
  packageIncludes: [
    "Заведението на ул. „Недялка Шилева“ 11, Пловдив",
    "Отворено по всяко време",
    "Ирландски пъб и ресторант",
    "Менюто се разглежда с QR код",
    "Обедни предложения всеки ден",
  ],
  packageAssist: "",
  whyUs: [
    "4.7 от отзивите в Google",
    "Ирландски пъб и ресторант",
    "Менюто се разглежда с QR код",
    "Обедни предложения всеки ден",
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
    "Снимки на заведението и на минали сватби (реални фото-слотове)",
    "Капацитет: брой места седнали, коктейл и на открито",
    "Меню и куверт",
    "Web3Forms access key за формата за запитване",
    "Имейл адрес за контакт",
    "Текст за политика за поверителност — преглед от юрист",
    "Капацитет за частно събитие",
    "Потвърждение на адреса: Google и Facebook сочат различни улици",
    "Меню и куверт при наемане",
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
    metaTitle: "Bohemy’s Friends | Ирландски пъб и ресторант в Пловдив",
    metaDescription: "Ирландски пъб и ресторант на ул. „Недялка Шилева“ 11 в Пловдив. Запитване на 087 770 3104.",
    navCity: "Пловдив",
    navSpot: "Недялка Шилева",
    navSeats: "капацитет по запитване",
    atmosphereNote: "заглавната снимка е тяхна собствена, от страницата им във Facebook",
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
    ch1Title: "Bohemy’s Friends. Мястото на повода.",
    ch1Lead: "Денят започва с пристигането. Заведението е на ул. „Недялка Шилева“ 11, Пловдив.",
    ch2Title: "Церемонията",
    ch2Lead: "Домакините определят заведението като ирландски пъб и ресторант.",
    ch2Body: "Подробности за капацитета и за броя места не са публикувани никъде. Ще бъдат добавени, след като бъдат предоставени от домакините.",
    ch3Title: "Вечерята",
    ch3Lead: "Менюто се разглежда с QR код, а обедните предложения се обявяват всеки ден.",
    ch4Title: "Вечерта продължава",
    ch4Lead: "Заведението е отворено по всяко време.",
    ch4Body: "Собствен сайт нямат. Менюто им живее в чужд портал зад QR код, а обявите — само във Facebook.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Отговаряме лично на всяко запитване.",
    gettingHereRows: [
      [
        "Адрес",
        "ул. „Недялка Шилева“ 11, Пловдив",
      ],
      [
        "Работно време",
        "Отворено по всяко време",
      ],
      [
        "Телефон",
        "087 770 3104",
      ],
    ],
    whyTitle: "Защо младоженците избират Bohemy’s Friends",
    packagesTitle: "Какво се знае за мястото",
    packagesLead: "Bohemy’s Friends не публикува куверт и пакети. Показано е само това, което самите те съобщават. Опишете тържеството си във формата и ще получите оферта.",
    includesTitle: "На разположение за деня",
    reviewsLead: "Bohemy’s Friends няма публикувани отзиви, които да бъдат проверени. Разделът остава празен, докато не бъдат предоставени истински.",
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Bohemy’s Friends.",
    footerRights: "Bohemy’s Friends · Пловдив",
    capacityStats: [
      {
        value: "4.7",
        count: 4.7,
        label: "от отзивите в Google",
      },
      {
        value: "Денонощно",
        label: "отворено по всяко време",
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
    metaTitle: "Bohemy’s Friends | An Irish pub and restaurant in Plovdiv",
    metaDescription: "An Irish pub and restaurant at 11 Nedyalka Shileva Street in Plovdiv. Enquire on 087 770 3104.",
    navCity: "Plovdiv",
    navSpot: "Nedyalka Shileva St",
    navSeats: "capacity on request",
    atmosphereNote: "the header photograph is their own, from their Facebook page",
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
    ch1Title: "Bohemy’s Friends. Where the occasion happens.",
    ch1Lead: "The day begins with the arrival. The place sits at 11 Nedyalka Shileva St, Plovdiv.",
    ch2Title: "The ceremony",
    ch2Lead: "The hosts describe the place as an Irish pub and restaurant.",
    ch2Body: "Details of the capacity and the number of seats are not published anywhere. They will be added once the hosts provide them.",
    ch3Title: "Dinner",
    ch3Lead: "The menu is read from a QR code, and the lunch offers are posted daily.",
    ch4Title: "The evening goes on",
    ch4Lead: "The place is open at any hour.",
    ch4Body: "They have no website of their own. Their menu lives on someone else's portal behind a QR code, and their notices only on Facebook.",
    ch5Title: "The farewell is a beginning",
    ch5Lead: "Tell us about your day: season, guest count, approximate budget. Every enquiry gets a personal reply.",
    gettingHereRows: [
      [
        "Address",
        "11 Nedyalka Shileva St, Plovdiv",
      ],
      [
        "Opening hours",
        "Open at any hour",
      ],
      [
        "Phone",
        "087 770 3104",
      ],
    ],
    whyTitle: "Why couples choose Bohemy’s Friends",
    packagesTitle: "What is known about the place",
    packagesLead: "Bohemy’s Friends publishes no per-head price or packages. Only what they state themselves appears here. Describe your celebration in the form and you will receive an offer.",
    includesTitle: "Available for the day",
    reviewsLead: "Bohemy’s Friends has no verifiable published reviews. This section stays empty until real ones are supplied.",
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Bohemy’s Friends website.",
    footerRights: "Bohemy’s Friends · Plovdiv",
    capacityStats: [
      {
        value: "4.7",
        count: 4.7,
        label: "from its Google reviews",
      },
      {
        value: "Any hour",
        label: "open at all times",
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
  "The place at 11 Nedyalka Shileva St, Plovdiv",
  "Open at any hour",
  "An Irish pub and restaurant",
  "The menu is read from a QR code",
  "Lunch offers every day",
];

export const packageAssistEn =
  "";

export const whyUsEn = [
  "4.7 from its Google reviews",
  "An Irish pub and restaurant",
  "The menu is read from a QR code",
  "Lunch offers every day",
];

export const gettingHereNote =
  "Заведението е на ул. „Недялка Шилева“ 11, Пловдив.";
