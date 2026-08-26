/**
 * Content pack (extension) — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Хотел „Чиирите“. Harvested 2026-08-26 from: собствения им сайт chiirite.bg и Google Business профила.
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "Залата и ресторантът",
    note: "Хотел „Чиирите“ не публикува меню. Показано е само това, което сами съобщават.",
    dishes: [
      {
        n: "Мултифункционална зала",
        d: "с мултимедия",
      },
      {
        n: "Озвучаване, екран и проектор",
      },
      {
        n: "Ресторант",
        d: "седемдесет места",
      },
      {
        n: "Стаи за гостите",
        d: "на място в хотела",
      },
      {
        n: "Кафе, чай и леки закуски",
        d: "за паузите",
      },
      {
        n: "Денонощна рецепция",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "The hall and the restaurant",
    note: "Hotel Chiirite publishes no menu. Only what they state themselves appears here.",
    dishes: [
      {
        n: "A multifunctional hall",
        d: "with multimedia",
      },
      {
        n: "Sound system, screen and projector",
      },
      {
        n: "A restaurant",
        d: "seventy seats",
      },
      {
        n: "Rooms for guests",
        d: "on site at the hotel",
      },
      {
        n: "Coffee, tea and light snacks",
        d: "for the breaks",
      },
      {
        n: "A 24-hour reception",
      },
    ],
  },
];

export const menuFooterBg =
  "Меню, куверт и кетъринг условия не са публикувани никъде и предстои да бъдат предоставени.";

export const menuFooterEn =
  "The menu, the per-head price and the catering terms are published nowhere and are still to be supplied.";

export const servicesBg = [
  "Хотелът на Околовръстен път, местност Чиирите 020B, Пловдив",
  "Мултифункционална зала с мултимедия",
  "Озвучаване, екран и проектор",
  "Ресторант със седемдесет места",
  "Стаи за гостите на място",
  "Рецепция, отворена денонощно",
];

export const servicesEn = [
  "The hotel at Ring road, Chiirite locality 020B, Plovdiv",
  "A multifunctional hall with multimedia",
  "Sound system, screen and projector",
  "A restaurant with seventy seats",
  "Rooms for guests on site",
  "A reception desk open around the clock",
];

export const techBg = [
  "Озвучаване",
  "Екран и проектор",
  "Мултифункционална зала",
  "Високоскоростен интернет",
];

export const techEn = [
  "A sound system",
  "A screen and projector",
  "A multifunctional hall",
  "High-speed internet",
];

export const eventsBg = [
  {
    title: "Сватбени тържества",
    body: "Домакините сами обявяват сватбени тържества, със съдействие за организацията и декорацията.",
    fact: "По техните думи",
  },
  {
    title: "Семинари и тиймбилдинг",
    body: "Залата поема и работни събития, с мултимедия и кетъринг за паузите.",
    fact: "Мултимедия",
  },
];

export const eventsEn = [
  {
    title: "Wedding celebrations",
    body: "The hosts advertise wedding celebrations themselves, with help for the organising and the decoration.",
    fact: "In their own words",
  },
  {
    title: "Seminars and team building",
    body: "The hall also takes on working events, with multimedia and catering for the breaks.",
    fact: "Multimedia",
  },
];

export const performerBg = "Домакините сами обявяват сватбени тържества и предлагат съдействие за организацията и декорацията.";

export const performerEn = "The hosts advertise wedding celebrations themselves and offer help with the organising and the decoration.";

export const gallery: { slug: string; bg: string; en: string; tall?: boolean }[] = [];

export const exploreArt = [
  {
    src: "/atmosphere/m-s1-table-840.webp?v=1",
    alt: "",
  },
  {
    src: "/atmosphere/dusk-band-840.webp?v=1",
    alt: "",
  },
  {
    src: "/atmosphere/og-card.jpg?v=1",
    alt: "",
  },
];

export const navPages = {
  bg: [
    {
      href: "/",
      label: "Начало",
      hint: "мястото на повода",
    },
    {
      href: "/menu/",
      label: "Мястото",
      hint: "какво се знае",
    },
    {
      href: "/sabitia/",
      label: "Поводи",
      hint: "всеки повод",
    },
    {
      href: "/uslugi/",
      label: "Услуги",
      hint: "на разположение",
    },
    {
      href: "/galeria/",
      label: "Галерия",
      hint: "предстои",
    },
    {
      href: "/#sboguvane",
      label: "Запитване",
      hint: "до 2 работни дни",
    },
  ],
  en: [
    {
      href: "/en/",
      label: "Home",
      hint: "where the occasion happens",
    },
    {
      href: "/en/menu/",
      label: "The place",
      hint: "what is known",
    },
    {
      href: "/en/sabitia/",
      label: "Occasions",
      hint: "any occasion",
    },
    {
      href: "/en/uslugi/",
      label: "Services",
      hint: "available",
    },
    {
      href: "/en/galeria/",
      label: "Gallery",
      hint: "to come",
    },
    {
      href: "/en/#sboguvane",
      label: "Enquire",
      hint: "within 2 working days",
    },
  ],
};

export const extraStrings = {
  bg: {
    inquire: "Запитване",
    menuBtn: "Меню",
    closeBtn: "Затвори",
    galleryMore: "Цялата галерия",
    exploreTitle: "Разгледайте още",
    menuTitle: "Залата и ресторантът",
    menuLead: "Хотел „Чиирите“ не публикува меню. Ето какво съобщават за самото място:",
    servicesTitle: "Услуги",
    servicesLead: "Ето какво се знае, че стои на разположение за деня.",
    techTitle: "В залата",
    eventsTitle: "Поводи",
    eventsLead: "Домакините обявяват сватбени тържества, семинари и тиймбилдинг.",
    galleryTitle: "Мястото, както изглежда",
    galleryLead: "Хотел „Чиирите“ няма публикувани собствени фотографии на обекта.",
    galleryChip: "предстоят реални снимки",
    galleryEmptyTitle: "Тук ще стоят снимките на залата.",
    galleryEmptyBody: "Настоящият им сайт не съдържа фотографии на залата, годни за публикуване.",
    performerTitle: "Сезонът, с техните думи",
    tableBandQuote: "Зала, ресторант и стаи на един адрес.",
    pageTitleGallery: "Снимките предстоят",
    pageTitleEvents: "Поводите на мястото",
    pageTitleMenu: "Мястото, описано с техните думи",
    pageTitleServices: "Какво стои на разположение",
  },
  en: {
    inquire: "Enquire",
    menuBtn: "Menu",
    closeBtn: "Close",
    galleryMore: "The full gallery",
    exploreTitle: "Explore further",
    menuTitle: "The hall and the restaurant",
    menuLead: "Hotel Chiirite publishes no menu. Here is what they state about the place itself:",
    servicesTitle: "Services",
    servicesLead: "Here is what is known to be available for the day.",
    techTitle: "In the hall",
    eventsTitle: "Occasions",
    eventsLead: "The hosts advertise wedding celebrations, seminars and team building.",
    galleryTitle: "The place as it looks",
    galleryLead: "Hotel Chiirite has no published photographs of the venue.",
    galleryChip: "real photographs to come",
    galleryEmptyTitle: "The photographs of the hall will stand here.",
    galleryEmptyBody: "Their current website holds no publishable photographs of the hall.",
    performerTitle: "The season, in their words",
    tableBandQuote: "A hall, a restaurant and rooms at one address.",
    pageTitleGallery: "Photographs to come",
    pageTitleEvents: "Occasions at the venue",
    pageTitleMenu: "The place, in their words",
    pageTitleServices: "What is available",
  },
} as const;
