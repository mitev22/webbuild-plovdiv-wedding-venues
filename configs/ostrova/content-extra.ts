/**
 * Content pack (extension) — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Комплекс „Острова“. Harvested 2026-08-26 from: собствения им сайт ostrova-plovdiv.com и Google Business профила.
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "Мястото",
    note: "Комплекс „Острова“ не публикува меню. Показано е само това, което сами съобщават.",
    dishes: [
      {
        n: "Комплекс за тържества",
        d: "Западен район, Пловдив",
      },
      {
        n: "Уговаряне по телефон",
        d: "088 755 6630",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "The place",
    note: "Complex Ostrova publishes no menu. Only what they state themselves appears here.",
    dishes: [
      {
        n: "A complex for celebrations",
        d: "Western district, Plovdiv",
      },
      {
        n: "Arranged by telephone",
        d: "088 755 6630",
      },
    ],
  },
];

export const menuFooterBg =
  "Меню, куверт и кетъринг условия не са публикувани никъде и предстои да бъдат предоставени.";

export const menuFooterEn =
  "The menu, the per-head price and the catering terms are published nowhere and are still to be supplied.";

export const servicesBg = [
  "Комплексът на Западен район, Пловдив",
  "Комплекс в Западния район на Пловдив",
  "Дати се уговарят по телефон",
];

export const servicesEn = [
  "The complex at Western district, Plovdiv",
  "A complex in the Western district of Plovdiv",
  "Dates are arranged by telephone",
];

export const techBg = [
  "Комплекс в Западния район на Пловдив",
  "Дати се уговарят по телефон",
];

export const techEn = [
  "A complex in the Western district of Plovdiv",
  "Dates are arranged by telephone",
];

export const eventsBg = [
  {
    title: "Тържества в комплекса",
    body: "Комплексът се предлага за поводи в Западния район на Пловдив.",
    fact: "По запитване",
  },
];

export const eventsEn = [
  {
    title: "Celebrations at the complex",
    body: "The complex is offered for occasions in the Western district of Plovdiv.",
    fact: "On request",
  },
];

export const performerBg = "Комплексът е в Западния район на Пловдив, а свободните дати се проверяват по телефон.";

export const performerEn = "The complex is in the Western district of Plovdiv, and free dates are checked by telephone.";

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
    menuTitle: "Мястото",
    menuLead: "Комплекс „Острова“ не публикува меню. Ето какво съобщават за самото място:",
    servicesTitle: "Услуги",
    servicesLead: "Ето какво се знае, че стои на разположение за деня.",
    techTitle: "В комплекса",
    eventsTitle: "Поводи",
    eventsLead: "Мястото се предлага за поводи от всякакъв вид.",
    galleryTitle: "Мястото, както изглежда",
    galleryLead: "Комплекс „Острова“ няма публикувани собствени фотографии на обекта.",
    galleryChip: "предстоят реални снимки",
    galleryEmptyTitle: "Тук ще стоят снимките на комплекса.",
    galleryEmptyBody: "Сегашният им сайт не съдържа фотографии, годни за публикуване.",
    performerTitle: "Сезонът, с техните думи",
    tableBandQuote: "Комплекс, запазен за деня.",
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
    menuTitle: "The place",
    menuLead: "Complex Ostrova publishes no menu. Here is what they state about the place itself:",
    servicesTitle: "Services",
    servicesLead: "Here is what is known to be available for the day.",
    techTitle: "In the complex",
    eventsTitle: "Occasions",
    eventsLead: "The place is offered for occasions of every kind.",
    galleryTitle: "The place as it looks",
    galleryLead: "Complex Ostrova has no published photographs of the venue.",
    galleryChip: "real photographs to come",
    galleryEmptyTitle: "The photographs of the complex will stand here.",
    galleryEmptyBody: "Their current site holds no publishable photographs.",
    performerTitle: "The season, in their words",
    tableBandQuote: "A complex kept for the day.",
    pageTitleGallery: "Photographs to come",
    pageTitleEvents: "Occasions at the venue",
    pageTitleMenu: "The place, in their words",
    pageTitleServices: "What is available",
  },
} as const;
