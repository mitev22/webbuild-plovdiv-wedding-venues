/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Комплекс „Острова“. Harvested 2026-08-26 from: собствения им сайт ostrova-plovdiv.com — снимки, капацитет, контакти; събрани 2026-08-27. Стокови снимки (Shutterstock/iStock) от сайта им са изключени..
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export const venue = {
  slug: "ostrova",
  name: "Complex Ostrova",
  nameBg: "Комплекс „Острова“",
  wordmark: {
    bg: "Острова",
    en: "Ostrova",
  },
  navMark: {
    bg: "КОМПЛЕКС ОСТРОВА",
    en: "COMPLEX OSTROVA",
  },
  logo: {
    src: "",
    w: 0,
    h: 0,
  },
  town: "Пловдив",
  type: "hall",
  venueNoun: {
    bg: "комплекса",
    en: "the complex",
  },
  address: "ул. „Парк култура и отдих“ 40, Пловдив",
  addressEn: "40 Park kultura i otdih St, Plovdiv",
  addressStructured: {
    street: "ул. „Парк култура и отдих“ 40",
    locality: "Пловдив",
  },
  phone: [
    "088 774 2011",
    "088 755 6630",
  ],
  phoneHref: "tel:+359887742011",
  phoneE164: "+359887742011",
  email: "hotelostrova@abv.bg",
  instagram: "",
  facebook: "",
  sameAs: [
    "https://ostrova-plovdiv.com",
  ],
  mapQuery: "Комплекс+Острова+Парк+култура+и+отдих+40+Пловдив",
  maxCapacity: 160,
  capacity: [],
  spaces: [],
  packages: [],
  packageIncludes: [
    "Ресторант със 160 седящи места и обособен дансинг",
    "Комплексът е до Гребния канал, край реката",
    "Градина, двор и басейн на място",
    "Безплатен паркинг за гостите",
    "Съдействие с координацията на деня и с менюто",
    "Препоръки за украса, звук, осветление и фотограф",
    "Стаи за гостите, които остават",
  ],
  packageAssist: "",
  whyUs: [
    "160 седящи места и собствен дансинг",
    "До Гребния канал, сред зеленина край реката",
    "Градина, двор и басейн в един комплекс",
    "Екип, който помага с координацията и с изпълнителите",
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
    "Меню и куверт за тържество",
    "Снимки от минали сватби с съгласие на младоженците",
    "Web3Forms access key за формата за запитване",
    "Текст за политика за поверителност — преглед от юрист",
    "Потвърждение, че може да ползваме снимките им от ostrova-plovdiv.com",
    "Капацитет на градината и двора на открито",
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
    metaTitle: "Комплекс „Острова“ | Сватби и тържества край реката, Пловдив",
    metaDescription: "Комплекс до Гребния канал в Пловдив: ресторант със 160 места и дансинг, градина и басейн. Запитване за дата на 088 774 2011.",
    navCity: "Пловдив",
    navSpot: "До Гребния канал",
    navSeats: "160 места",
    atmosphereNote: "снимките са техни собствени, от сайта им ostrova-plovdiv.com",
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
    ch1Title: "Комплекс „Острова“. Мястото на повода.",
    ch1Lead: "Денят започва с пристигането. Комплексът е на ул. „Парк култура и отдих“ 40, до Гребния канал, сред зеленина край реката.",
    ch2Title: "Церемонията",
    ch2Lead: "Ресторантът гледа към градината, а комплексът е встрани от центъра, край реката.",
    ch2Body: "Ресторантът е със 160 седящи места и обособен дансинг. Паркингът е безплатен за гостите, а екипът на комплекса помага с координацията на деня.",
    ch3Title: "Вечерята",
    ch3Lead: "Гостите се хранят на място, в комплекса.",
    ch4Title: "Вечерта продължава",
    ch4Lead: "Свободните дати се проверяват по телефон.",
    ch4Body: "Резервация се прави на 088 774 2011 или на hotelostrova@abv.bg.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Отговаряме лично на всяко запитване.",
    gettingHereRows: [
      [
        "Адрес",
        "ул. „Парк култура и отдих“ 40, Пловдив",
      ],
      [
        "Ориентир",
        "до Гребния канал",
      ],
      [
        "Телефон",
        "088 774 2011 (ресторант) · 088 755 6630 (хотел)",
      ],
      [
        "Е-мейл",
        "hotelostrova@abv.bg",
      ],
    ],
    whyTitle: "Защо младоженците избират Комплекс „Острова“",
    packagesTitle: "Какво предлагат за деня",
    packagesLead: "„Острова“ не публикува куверт. Показано е това, което сами съобщават за мястото и организацията. Опишете тържеството си във формата и ще получите оферта.",
    includesTitle: "На разположение за деня",
    reviewsLead: "Отзивите на гостите предстои да бъдат събрани и публикувани със съгласието на домакините.",
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Комплекс „Острова“.",
    footerRights: "Комплекс „Острова“ · Пловдив",
    capacityStats: [
      {
        value: "160",
        count: 160,
        label: "седящи места",
      },
      {
        value: "Дансинг",
        label: "обособен в залата",
      },
      {
        value: "Гребния канал",
        label: "мястото край реката",
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
    metaTitle: "Ostrova | Weddings and celebrations by the river, Plovdiv",
    metaDescription: "A complex by the Rowing Canal in Plovdiv: a 160-seat restaurant with a dance floor, a garden and a pool. Enquire about a date on 088 774 2011.",
    navCity: "Plovdiv",
    navSpot: "By the Rowing Canal",
    navSeats: "160 seats",
    atmosphereNote: "the photographs are their own, from their site ostrova-plovdiv.com",
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
    ch1Title: "Ostrova. Where the occasion happens.",
    ch1Lead: "The day begins with the arrival. The complex is at 40 Park kultura i otdih Street, by the Rowing Canal, in greenery beside the river.",
    ch2Title: "The ceremony",
    ch2Lead: "The restaurant looks onto the garden, and the complex sits away from the centre, by the river.",
    ch2Body: "The restaurant seats 160 and has its own dance floor. Parking is free for guests, and the complex's team helps coordinate the day.",
    ch3Title: "Dinner",
    ch3Lead: "Guests dine on site, in the complex.",
    ch4Title: "The evening goes on",
    ch4Lead: "Free dates are checked by telephone.",
    ch4Body: "Booking is on 088 774 2011 or at hotelostrova@abv.bg.",
    ch5Title: "The farewell is a beginning",
    ch5Lead: "Tell us about your day: season, guest count, approximate budget. Every enquiry gets a personal reply.",
    gettingHereRows: [
      [
        "Address",
        "40 Park kultura i otdih St, Plovdiv",
      ],
      [
        "Landmark",
        "by the Rowing Canal",
      ],
      [
        "Phone",
        "088 774 2011 (restaurant) · 088 755 6630 (hotel)",
      ],
      [
        "E-mail",
        "hotelostrova@abv.bg",
      ],
    ],
    whyTitle: "Why couples choose Complex Ostrova",
    packagesTitle: "What they offer for the day",
    packagesLead: "Ostrova publishes no per-head price. What appears here is what they state themselves about the place and the planning. Describe your celebration in the form for an offer.",
    includesTitle: "Available for the day",
    reviewsLead: "Guest reviews are still to be collected and published with the hosts' consent.",
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Complex Ostrova website.",
    footerRights: "Complex Ostrova · Plovdiv",
    capacityStats: [
      {
        value: "160",
        count: 160,
        label: "seated places",
      },
      {
        value: "Dance floor",
        label: "its own, in the hall",
      },
      {
        value: "The Rowing Canal",
        label: "beside the river",
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
  "A restaurant seating 160 with its own dance floor",
  "The complex sits by the Rowing Canal, beside the river",
  "A garden, a courtyard and a pool on site",
  "Free parking for guests",
  "Help with coordinating the day and building the menu",
  "Recommendations for decoration, sound, lighting and a photographer",
  "Rooms for guests who stay",
];

export const packageAssistEn =
  "";

export const whyUsEn = [
  "160 seats and a dance floor of its own",
  "By the Rowing Canal, in greenery beside the river",
  "A garden, a courtyard and a pool in one complex",
  "A team that helps with coordination and suppliers",
];

export const gettingHereNote =
  "Комплексът е на ул. „Парк култура и отдих“ 40, до Гребния канал в Пловдив.";
