/**
 * Content pack (extension) — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Garden Weddings. Harvested 2026-08-26 from: Google Business профила им (нямат сайт и нямат страница в социалните мрежи).
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "Мястото",
    note: "Garden Weddings не публикува меню. Показано е само това, което сами съобщават.",
    dishes: [
      {
        n: "Място за събития",
        d: "в парка на село Марково",
      },
      {
        n: "На открито",
        d: "градината дава името на мястото",
      },
      {
        n: "Работно време",
        d: "от 10 до 20 часа",
      },
      {
        n: "Уговаряне по телефон",
        d: "089 996 5338",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "The place",
    note: "Garden Weddings publishes no menu. Only what they state themselves appears here.",
    dishes: [
      {
        n: "An event venue",
        d: "in the park at Markovo",
      },
      {
        n: "Outdoors",
        d: "the garden gives the place its name",
      },
      {
        n: "Opening hours",
        d: "from 10 until 20",
      },
      {
        n: "Arranged by telephone",
        d: "089 996 5338",
      },
    ],
  },
];

export const menuFooterBg =
  "Меню, куверт и кетъринг условия не са публикувани никъде и предстои да бъдат предоставени.";

export const menuFooterEn =
  "The menu, the per-head price and the catering terms are published nowhere and are still to be supplied.";

export const servicesBg = [
  "Място за събития в парка на село Марково",
  "Извън Пловдив, в полите на Родопите",
  "Работно време от 10 до 20 часа",
  "Дати се уговарят по телефон",
];

export const servicesEn = [
  "An event venue in the park at Markovo",
  "Outside Plovdiv, at the foot of the Rhodopes",
  "Open from 10 in the morning until 8 in the evening",
  "Dates are arranged by telephone",
];

export const techBg = [
  "Място на открито",
  "В парка на Марково",
];

export const techEn = [
  "An outdoor venue",
  "In the park at Markovo",
];

export const eventsBg = [
  {
    title: "Сватби в градината",
    body: "Мястото носи името си от градината и се предлага за сватбени тържества на открито.",
    fact: "На открито",
  },
];

export const eventsEn = [
  {
    title: "Garden weddings",
    body: "The place takes its name from the garden and is offered for wedding celebrations in the open air.",
    fact: "Outdoors",
  },
];

export const performerBg = "Мястото работи от десет сутринта до осем вечерта, а датите се уговарят по телефон.";

export const performerEn = "The place is open from ten in the morning until eight in the evening, and dates are arranged by telephone.";

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
      hint: "денят на открито",
    },
    {
      href: "/menu/",
      label: "Мястото",
      hint: "какво се знае",
    },
    {
      href: "/sabitia/",
      label: "Поводи",
      hint: "в градината",
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
      hint: "the day outdoors",
    },
    {
      href: "/en/menu/",
      label: "The place",
      hint: "what is known",
    },
    {
      href: "/en/sabitia/",
      label: "Occasions",
      hint: "in the garden",
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
    menuLead: "Garden Weddings не публикува меню. Ето какво съобщават за самото място:",
    servicesTitle: "Услуги",
    servicesLead: "Ето какво се знае, че стои на разположение за деня.",
    techTitle: "В градината",
    eventsTitle: "Поводи",
    eventsLead: "Мястото се предлага за тържества на открито.",
    galleryTitle: "Мястото, както изглежда",
    galleryLead: "Garden Weddings няма публикувани собствени фотографии на обекта.",
    galleryChip: "предстоят реални снимки",
    galleryEmptyTitle: "Тук ще стоят снимките на градината.",
    galleryEmptyBody: "Домакините нямат нито сайт, нито страница в социалните мрежи, така че публикувани фотографии на градината няма.",
    performerTitle: "Сезонът, с техните думи",
    tableBandQuote: "Градина, парк и вечер на открито.",
    pageTitleGallery: "Снимките предстоят",
    pageTitleEvents: "Сватби на открито",
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
    menuLead: "Garden Weddings publishes no menu. Here is what they state about the place itself:",
    servicesTitle: "Services",
    servicesLead: "Here is what is known to be available for the day.",
    techTitle: "In the garden",
    eventsTitle: "Occasions",
    eventsLead: "The place is offered for celebrations in the open air.",
    galleryTitle: "The place as it looks",
    galleryLead: "Garden Weddings has no published photographs of the venue.",
    galleryChip: "real photographs to come",
    galleryEmptyTitle: "The photographs of the garden will stand here.",
    galleryEmptyBody: "The hosts have neither a website nor a social page, so there are no published photographs of the garden.",
    performerTitle: "The season, in their words",
    tableBandQuote: "A garden, a park and an evening outdoors.",
    pageTitleGallery: "Photographs to come",
    pageTitleEvents: "Weddings in the open air",
    pageTitleMenu: "The place, in their words",
    pageTitleServices: "What is available",
  },
} as const;
