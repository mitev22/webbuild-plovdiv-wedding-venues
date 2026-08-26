/**
 * Content pack (extension) — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Ресторант-градина „Атлантик“. Harvested 2026-08-26 from: Google Business профила им (нямат сайт).
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "Мястото",
    note: "Ресторант-градина „Атлантик“ не публикува меню. Показано е само това, което сами съобщават.",
    dishes: [
      {
        n: "Ресторант с градина",
        d: "в село Първенец",
      },
      {
        n: "Извън града",
        d: "в подножието на Родопите",
      },
      {
        n: "Уговаряне по телефон",
        d: "088 772 1412",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "The place",
    note: "Atlantik Garden Restaurant publishes no menu. Only what they state themselves appears here.",
    dishes: [
      {
        n: "A restaurant with a garden",
        d: "in the village of Parvenets",
      },
      {
        n: "Outside the city",
        d: "at the foot of the Rhodopes",
      },
      {
        n: "Arranged by telephone",
        d: "088 772 1412",
      },
    ],
  },
];

export const menuFooterBg =
  "Меню, куверт и кетъринг условия не са публикувани никъде и предстои да бъдат предоставени.";

export const menuFooterEn =
  "The menu, the per-head price and the catering terms are published nowhere and are still to be supplied.";

export const servicesBg = [
  "Ресторант с градина в село Първенец",
  "Извън Пловдив, в подножието на Родопите",
  "Дати се уговарят по телефон",
];

export const servicesEn = [
  "A restaurant with a garden in the village of Parvenets",
  "Outside Plovdiv, at the foot of the Rhodopes",
  "Dates are arranged by telephone",
];

export const techBg = [
  "Ресторант с градина",
  "Извън града",
];

export const techEn = [
  "A restaurant with a garden",
  "Outside the city",
];

export const eventsBg = [
  {
    title: "Сватби в градината",
    body: "Градината и ресторантът поемат тържеството извън шума на града.",
    fact: "4.4 в Google",
  },
];

export const eventsEn = [
  {
    title: "Weddings in the garden",
    body: "The garden and the restaurant take on the celebration away from the noise of the city.",
    fact: "4.4 on Google",
  },
];

export const performerBg = "Ресторантът е в село Първенец и гостите му дават 4.4 в Google.";

export const performerEn = "The restaurant is in Parvenets and its guests rate it 4.4 on Google.";

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
      hint: "денят в градината",
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
      hint: "the day in the garden",
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
    menuLead: "Ресторант-градина „Атлантик“ не публикува меню. Ето какво съобщават за самото място:",
    servicesTitle: "Услуги",
    servicesLead: "Ето какво се знае, че стои на разположение за деня.",
    techTitle: "В градината",
    eventsTitle: "Поводи",
    eventsLead: "Мястото се предлага за тържества в градината.",
    galleryTitle: "Мястото, както изглежда",
    galleryLead: "Ресторант-градина „Атлантик“ няма публикувани собствени фотографии на обекта.",
    galleryChip: "предстоят реални снимки",
    galleryEmptyTitle: "Тук ще стоят снимките на градината.",
    galleryEmptyBody: "Домакините нямат собствен сайт, а профилът им в Google не съдържа фотографии на градината, годни за публикуване.",
    performerTitle: "Сезонът, с техните думи",
    tableBandQuote: "Градина в подножието на планината.",
    pageTitleGallery: "Снимките предстоят",
    pageTitleEvents: "Тържества в градината",
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
    menuLead: "Atlantik Garden Restaurant publishes no menu. Here is what they state about the place itself:",
    servicesTitle: "Services",
    servicesLead: "Here is what is known to be available for the day.",
    techTitle: "In the garden",
    eventsTitle: "Occasions",
    eventsLead: "The place is offered for celebrations in the garden.",
    galleryTitle: "The place as it looks",
    galleryLead: "Atlantik Garden Restaurant has no published photographs of the venue.",
    galleryChip: "real photographs to come",
    galleryEmptyTitle: "The photographs of the garden will stand here.",
    galleryEmptyBody: "The hosts have no website of their own, and their Google profile holds no publishable photographs of the garden.",
    performerTitle: "The season, in their words",
    tableBandQuote: "A garden at the foot of the mountain.",
    pageTitleGallery: "Photographs to come",
    pageTitleEvents: "Celebrations in the garden",
    pageTitleMenu: "The place, in their words",
    pageTitleServices: "What is available",
  },
} as const;
