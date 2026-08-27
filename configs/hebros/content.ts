/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Хотел и ресторант „Хеброс“. Harvested 2026-08-26 from: собствения им сайт oldlegends.bg (Хотел и Ресторант Old Legends / Хеброс) — снимки, история, стаи, ресторант; събрани 2026-08-27. Google Business профил за отзивите..
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export const venue = {
  slug: "hebros",
  name: "Hebros Hotel & Restaurant",
  nameBg: "Хотел и ресторант „Хеброс“",
  wordmark: {
    bg: "Хеброс",
    en: "Hebros",
  },
  navMark: {
    bg: "ХОТЕЛ ХЕБРОС",
    en: "HEBROS HOTEL",
  },
  logo: {
    src: "",
    w: 0,
    h: 0,
  },
  town: "Пловдив",
  type: "hall",
  venueNoun: {
    bg: "хотела",
    en: "the hotel",
  },
  address: "ул. „Константин Стоилов“ 51, Стария град, Пловдив",
  addressEn: "51 Konstantin Stoilov St, Old Town, Plovdiv",
  addressStructured: {
    street: "ул. „Константин Стоилов“ 51",
    locality: "Пловдив",
  },
  phone: [
    "032 260 180",
    "088 822 0377",
  ],
  phoneHref: "tel:+35932260180",
  phoneE164: "+35932260180",
  email: "reservation@oldlegends.bg",
  instagram: "",
  facebook: "",
  sameAs: [
    "https://oldlegends.bg/",
  ],
  mapQuery: "Хотел+Хеброс+Константин+Стоилов+51+Стария+град+Пловдив",
  maxCapacity: 0,
  capacity: [],
  spaces: [],
  packages: [],
  packageIncludes: [
    "Възрожденска къща на ул. „Константин Стоилов“ 51, под Балабановата къща",
    "Ресторант с награда „Ресторант на годината“ на сп. Бакхус (2016 и 2003)",
    "Двор и градина с маси на открито",
    "Зимна градина под стъклен покрив",
    "Стаи и апартамент с автентично обзавеждане за гостите, които остават",
  ],
  packageAssist: "",
  whyUs: [
    "Ресторант на годината на сп. Бакхус — 2016 и 2003",
    "Възрожденска къща на около 200 години, паметник на културата",
    "Двор, градина и зимна градина за тържеството",
    "Стаи за гостите на място, в сърцето на Стария град",
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
    "Капацитет: брой места седнали в салоните, в зимната градина и в двора",
    "Поемат ли сватбени тържества и при какви условия",
    "Меню и куверт за тържество",
    "Снимки от минали сватби и тържества",
    "Web3Forms access key за формата за запитване",
    "Текст за политика за поверителност — преглед от юрист",
    "Потвърждение, че може да ползваме снимките им от oldlegends.bg",
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
    metaTitle: "Хотел „Хеброс“ | Тържества в Стария град, Пловдив",
    metaDescription: "Хотел на ул. „Константин Стоилов“ 51 в Стария град на Пловдив, със стаи за гостите. Запитване на 088 822 0377.",
    navCity: "Пловдив",
    navSpot: "Старият град",
    navSeats: "капацитет по запитване",
    atmosphereNote: "снимките са техни собствени, от сайта им oldlegends.bg",
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
    ch1Title: "Хотел „Хеброс“. Мястото на повода.",
    ch1Lead: "Денят започва с пристигането. Хотелът е на ул. „Константин Стоилов“ 51, Стария град, Пловдив, в Стария град на Пловдив.",
    ch2Title: "Церемонията",
    ch2Lead: "Хотелът е в Стария град, сред възрожденските къщи на хълма.",
    ch2Body: "Броят места за тържество не е публикуван и предстои да бъде уточнен с домакините. Известни са пространствата: салоните в къщата, зимната градина и дворът с масите на открито.",
    ch3Title: "Вечерята",
    ch3Lead: "Гостите се хранят на място, а тези, които остават, спят в стаите на хотела.",
    ch4Title: "Вечерта продължава",
    ch4Lead: "Гостите му дават 4.3 в Google.",
    ch4Body: "Резервация се прави по телефона на 032 260 180, на reservation@oldlegends.bg или през сайта им oldlegends.bg.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead: "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Отговаряме лично на всяко запитване.",
    gettingHereRows: [
      [
        "Адрес",
        "ул. „Константин Стоилов“ 51, Стария град, Пловдив",
      ],
      [
        "Ориентир",
        "под Балабановата къща",
      ],
      [
        "Телефон",
        "032 260 180 · 088 822 0377",
      ],
      [
        "Е-мейл",
        "reservation@oldlegends.bg",
      ],
    ],
    whyTitle: "Защо младоженците избират Хотел „Хеброс“",
    packagesTitle: "Мястото и кухнята",
    packagesLead: "Хеброс не публикува куверт и сватбени пакети. Показано е това, което сами съобщават за къщата, ресторанта и двора. Опишете тържеството си във формата и ще получите оферта.",
    includesTitle: "На разположение за деня",
    reviewsLead: "Отзивите на гостите предстои да бъдат събрани и публикувани със съгласието на домакините.",
    footerDemo: "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Хотел и ресторант „Хеброс“.",
    footerRights: "Хотел и ресторант „Хеброс“ · Пловдив",
    capacityStats: [
      {
        value: "2016 и 2003",
        label: "Ресторант на годината, сп. Бакхус",
      },
      {
        value: "~200 г.",
        label: "възрастта на възрожденската къща",
      },
      {
        value: "Старият град",
        label: "под Балабановата къща",
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
    metaTitle: "Hebros Hotel | Celebrations in Plovdiv Old Town",
    metaDescription: "A hotel at 51 Konstantin Stoilov Street in the Old Town of Plovdiv, with rooms for guests. Enquire on 088 822 0377.",
    navCity: "Plovdiv",
    navSpot: "Old Town",
    navSeats: "capacity on request",
    atmosphereNote: "the photographs are their own, from their site oldlegends.bg",
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
    ch1Title: "Hebros Hotel. Where the occasion happens.",
    ch1Lead: "The day begins with the arrival. The hotel sits at 51 Konstantin Stoilov St, Old Town, Plovdiv, in the Old Town of Plovdiv.",
    ch2Title: "The ceremony",
    ch2Lead: "The hotel is in the Old Town, among the revival houses on the hill.",
    ch2Body: "The number of seats for a celebration is not published and is still to be confirmed with the hosts. The spaces are known: the salons in the house, the winter garden and the courtyard with its outdoor tables.",
    ch3Title: "Dinner",
    ch3Lead: "Guests dine on site, and those who stay sleep in the hotel's rooms.",
    ch4Title: "The evening goes on",
    ch4Lead: "Its guests rate it 4.3 on Google.",
    ch4Body: "Booking is by telephone on 032 260 180, at reservation@oldlegends.bg, or through their site oldlegends.bg.",
    ch5Title: "The farewell is a beginning",
    ch5Lead: "Tell us about your day: season, guest count, approximate budget. Every enquiry gets a personal reply.",
    gettingHereRows: [
      [
        "Address",
        "51 Konstantin Stoilov St, Old Town, Plovdiv",
      ],
      [
        "Landmark",
        "below Balabanov House",
      ],
      [
        "Phone",
        "032 260 180 · 088 822 0377",
      ],
      [
        "E-mail",
        "reservation@oldlegends.bg",
      ],
    ],
    whyTitle: "Why couples choose Hebros Hotel",
    packagesTitle: "The place and the kitchen",
    packagesLead: "Hebros publishes no per-head price or wedding packages. What appears here is what they state themselves about the house, the restaurant and the courtyard. Describe your celebration in the form for an offer.",
    includesTitle: "Available for the day",
    reviewsLead: "Guest reviews are still to be collected and published with the hosts' consent.",
    footerDemo: "Spec demonstration site by Meridian Solutions. Not the official Hebros Hotel & Restaurant website.",
    footerRights: "Hebros Hotel & Restaurant · Plovdiv",
    capacityStats: [
      {
        value: "2016 & 2003",
        label: "Restaurant of the Year, Bacchus",
      },
      {
        value: "~200 yrs",
        label: "the age of the Revival house",
      },
      {
        value: "The Old Town",
        label: "below Balabanov House",
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
  "A Revival house at 51 Konstantin Stoilov St, below Balabanov House",
  "A restaurant named Restaurant of the Year by Bacchus magazine (2016 and 2003)",
  "A courtyard and garden with tables outdoors",
  "A winter garden under a glass roof",
  "Rooms and an apartment in period furniture for guests who stay",
];

export const packageAssistEn =
  "";

export const whyUsEn = [
  "Restaurant of the Year, Bacchus magazine — 2016 and 2003",
  "A roughly 200-year-old Revival house, a monument of culture",
  "A courtyard, a garden and a winter garden for the occasion",
  "Rooms for guests on site, in the heart of the Old Town",
];

export const gettingHereNote =
  "Хотелът е на ул. „Константин Стоилов“ 51, Стария град, Пловдив.";
