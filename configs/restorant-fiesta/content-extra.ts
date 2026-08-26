/**
 * Content pack (extension) — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Ресторант „Фиеста“. Harvested 2026-08-26 from: Google Business профила им (нямат сайт).
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "Мястото",
    note: "Ресторант „Фиеста“ не публикува меню. Показано е само това, което сами съобщават.",
    dishes: [
      {
        n: "Ресторант",
        d: "на ул. „Пере Тошев“ 45",
      },
      {
        n: "Отворен от 8:30 до полунощ",
      },
      {
        n: "Приема поръчки",
      },
      {
        n: "Резервация по телефон",
        d: "087 820 1734",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "The place",
    note: "Restaurant Fiesta publishes no menu. Only what they state themselves appears here.",
    dishes: [
      {
        n: "A restaurant",
        d: "at 45 Pere Toshev Street",
      },
      {
        n: "Open from 8:30 until midnight",
      },
      {
        n: "Takes orders",
      },
      {
        n: "Booking by telephone",
        d: "087 820 1734",
      },
    ],
  },
];

export const menuFooterBg =
  "Меню, куверт и кетъринг условия не са публикувани никъде и предстои да бъдат предоставени.";

export const menuFooterEn =
  "The menu, the per-head price and the catering terms are published nowhere and are still to be supplied.";

export const servicesBg = [
  "Ресторант на ул. „Пере Тошев“ 45",
  "Отворен от 8:30 сутринта до полунощ",
  "Приема поръчки",
  "В южната част на Пловдив",
];

export const servicesEn = [
  "A restaurant at 45 Pere Toshev Street",
  "Open from half past eight in the morning until midnight",
  "Takes orders",
  "In the southern part of Plovdiv",
];

export const techBg = [
  "Ресторант в южната част на града",
  "Дълъг работен ден",
];

export const techEn = [
  "A restaurant in the south of the city",
  "A long working day",
];

export const eventsBg = [
  {
    title: "Тържества",
    body: "Ресторантът поема поводи, а работният му ден стига до полунощ.",
    fact: "До полунощ",
  },
];

export const eventsEn = [
  {
    title: "Celebrations",
    body: "The restaurant takes on occasions, and its working day runs until midnight.",
    fact: "Till midnight",
  },
];

export const performerBg = "Ресторантът е отворен от осем и половина сутринта до полунощ и приема поръчки.";

export const performerEn = "The restaurant is open from half past eight in the morning until midnight and accepts orders.";

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
    menuLead: "Ресторант „Фиеста“ не публикува меню. Ето какво съобщават за самото място:",
    servicesTitle: "Услуги",
    servicesLead: "Ето какво се знае, че стои на разположение за деня.",
    techTitle: "В ресторанта",
    eventsTitle: "Поводи",
    eventsLead: "Ресторантът се предлага за поводи от всякакъв вид.",
    galleryTitle: "Мястото, както изглежда",
    galleryLead: "Ресторант „Фиеста“ няма публикувани собствени фотографии на обекта.",
    galleryChip: "предстоят реални снимки",
    galleryEmptyTitle: "Тук ще стоят снимките на ресторанта.",
    galleryEmptyBody: "Домакините нямат собствен сайт, а профилът им в Google не съдържа фотографии, годни за публикуване.",
    performerTitle: "Сезонът, с техните думи",
    tableBandQuote: "Отворено от сутринта до полунощ.",
    pageTitleGallery: "Снимките предстоят",
    pageTitleEvents: "Поводите в ресторанта",
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
    menuLead: "Restaurant Fiesta publishes no menu. Here is what they state about the place itself:",
    servicesTitle: "Services",
    servicesLead: "Here is what is known to be available for the day.",
    techTitle: "In the restaurant",
    eventsTitle: "Occasions",
    eventsLead: "The restaurant is offered for occasions of every kind.",
    galleryTitle: "The place as it looks",
    galleryLead: "Restaurant Fiesta has no published photographs of the venue.",
    galleryChip: "real photographs to come",
    galleryEmptyTitle: "The photographs of the restaurant will stand here.",
    galleryEmptyBody: "The hosts have no website of their own, and their Google profile holds no publishable photographs.",
    performerTitle: "The season, in their words",
    tableBandQuote: "Open from morning until midnight.",
    pageTitleGallery: "Photographs to come",
    pageTitleEvents: "Occasions at the restaurant",
    pageTitleMenu: "The place, in their words",
    pageTitleServices: "What is available",
  },
} as const;
