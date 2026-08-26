/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Crystal Palace. Harvested 2026-08-26 from: Facebook страницата им (facebook.com/crystalpalaceplovdiv) и Google Business профила.
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export const venue = {
  slug: "crystal-palace",
  name: "Crystal Palace",
  nameBg: "Crystal Palace",
  wordmark: {
    bg: "Crystal Palace",
    en: "Crystal Palace",
  },
  navMark: {
    bg: "CRYSTAL PALACE",
    en: "CRYSTAL PALACE",
  },
  logo: {
    src: "",
    w: 0,
    h: 0,
  },
  town: "Пловдив",
  type: "hall",
  venueNoun: {
    bg: "салона",
    en: "the salon",
  },
  address: "ул. „Владая“ 17, Пловдив",
  addressEn: "17 Vladaya Street, Plovdiv",
  addressStructured: {
    street: "ул. „Владая“ 17",
    locality: "Пловдив",
  },
  phone: [
    "088 857 7616",
  ],
  phoneHref: "tel:+359888577616",
  phoneE164: "+359888577616",
  email: "",
  instagram: "",
  facebook: "https://www.facebook.com/crystalpalaceplovdiv",
  sameAs: [
    "https://www.facebook.com/crystalpalaceplovdiv",
  ],
  mapQuery: "Crystal+Palace+Сватбен+салон+ул.+Владая+17+Пловдив",
  maxCapacity: 0,
  capacity: [],
  spaces: [],
  packages: [],
  packageIncludes: [],
  packageAssist: "",
  whyUs: [
    "Салонът работи само за сватби",
    "Има места за гости и на открито",
    "Резервация на дата по телефон или онлайн",
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
    "Снимки на салона, на откритата част и на минали сватби (реални фото-слотове)",
    "Капацитет: брой места седнали, коктейл и на открито",
    "Меню и куверт",
    "Работно време и телефон за резервации извън Facebook",
    "Web3Forms access key за формата за запитване",
    "Имейл адрес за контакт",
    "Потвърждение на точния адрес и на името, под което искат да се представят",
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
    metaTitle: "Crystal Palace | Сватбен салон в Пловдив",
    metaDescription: "Сватбен салон на ул. „Владая“ 17 в Пловдив, с места и на открито. Резервация на дата по телефон 088 857 7616.",
    navCity: "Пловдив",
    navSpot: "ул. Владая",
    navSeats: "капацитет по запитване",
    atmosphereNote: "атмосферни визуализации, предстои добавяне на снимки на салона",
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
    ch1Title: "Crystal Palace. Салон, който прави само сватби.",
    ch1Lead: "Денят започва с пристигането. Салонът се намира на улица „Владая“ 17 в източната част на Пловдив, встрани от центъра и от движението по него.",
    ch2Title: "Церемонията",
    ch2Lead: "Салонът е обявен като сватбен и това е единственото, за което се използва.",
    ch2Body: "Подробности за размерите на залата и за броя места не са публикувани никъде. Ще бъдат добавени, след като бъдат предоставени от домакините.",
    ch3Title: "Вечерята",
    ch3Lead: "Гостите се хранят на място, а част от местата са на открито.",
    ch4Title: "Вечерта продължава",
    ch4Lead: "Свободните дати се обявяват от самите домакини.",
    ch4Body: "Страницата им във Facebook се следи от над хиляда и двеста души, а свободните дати се публикуват там сезон по сезон.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Отговаряме лично на всяко запитване.",
    gettingHereRows: [
      [
        "Адрес",
        "ул. „Владая“ 17, Пловдив",
      ],
      [
        "Район",
        "Източна индустриална зона",
      ],
      [
        "Телефон",
        "088 857 7616",
      ],
    ],
    whyTitle: "Защо младоженците избират Crystal Palace",
    packagesTitle: "Какво се знае за мястото",
    packagesLead: "Crystal Palace не публикува куверт и пакети. Показано е само това, което самите те съобщават за салона. Опишете тържеството си във формата и ще получите оферта.",
    includesTitle: "На разположение за деня",
    reviewsLead: "Crystal Palace няма публикувани отзиви, които да бъдат проверени. Разделът остава празен, докато не бъдат предоставени истински.",
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Crystal Palace.",
    footerRights: "Crystal Palace · Пловдив",
    capacityStats: [
      {
        value: "Сватби",
        label: "единствената специализация",
      },
      {
        value: "Открито",
        label: "места за гости навън",
      },
      {
        value: "Онлайн",
        label: "резервация на дата",
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
    metaTitle: "Crystal Palace | Wedding salon in Plovdiv",
    metaDescription: "A wedding salon at 17 Vladaya Street in Plovdiv, with outdoor seating as well. Reserve a date on 088 857 7616.",
    navCity: "Plovdiv",
    navSpot: "Vladaya St",
    navSeats: "capacity on request",
    atmosphereNote: "atmospheric visualisations, photographs of the salon to be added",
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
    ch1Title: "Crystal Palace. A salon that does weddings only.",
    ch1Lead: "The day begins with the arrival. The salon stands at 17 Vladaya Street in the eastern part of Plovdiv, away from the centre and its traffic.",
    ch2Title: "The ceremony",
    ch2Lead: "The salon is listed as a wedding venue and that is the only thing it is used for.",
    ch2Body: "Details of the hall's dimensions and its number of seats are not published anywhere. They will be added once the hosts provide them.",
    ch3Title: "Dinner",
    ch3Lead: "Guests dine on site, and some of the seating is outdoors.",
    ch4Title: "The evening goes on",
    ch4Lead: "Free dates are announced by the hosts themselves.",
    ch4Body: "Their Facebook page is followed by more than twelve hundred people, and free dates are posted there season by season.",
    ch5Title: "The farewell is a beginning",
    ch5Lead: "Tell us about your day: season, guest count, approximate budget. Every enquiry gets a personal reply.",
    gettingHereRows: [
      [
        "Address",
        "17 Vladaya Street, Plovdiv",
      ],
      [
        "District",
        "Eastern industrial zone",
      ],
      [
        "Phone",
        "088 857 7616",
      ],
    ],
    whyTitle: "Why couples choose Crystal Palace",
    packagesTitle: "What is known about the place",
    packagesLead: "Crystal Palace publishes no per-head price or packages. Only what they state themselves appears here. Describe your celebration in the form and you will receive an offer.",
    includesTitle: "Available for the day",
    reviewsLead: "Crystal Palace has no verifiable published reviews. This section stays empty until real ones are supplied.",
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Crystal Palace website.",
    footerRights: "Crystal Palace · Plovdiv",
    capacityStats: [
      {
        value: "Weddings",
        label: "the only specialism",
      },
      {
        value: "Outdoors",
        label: "seating for guests",
      },
      {
        value: "Online",
        label: "date reservation",
      },
    ],
  },
} as const;

export type Lang = keyof typeof dict;

export const seasonNamesEn: Record<Season, string> = {
  spring: "Spring", summer: "Summer", autumn: "Autumn", winter: "Winter",
};

export const packageNamesEn: Record<string, string> = {};

export const packageIncludesEn = [];

export const packageAssistEn =
  "";

export const whyUsEn = [
  "The salon works for weddings only",
  "There is seating for guests outdoors too",
  "A date can be reserved by phone or online",
];

export const gettingHereNote =
  "Салонът е на улица „Владая“ 17, в източната част на Пловдив.";
