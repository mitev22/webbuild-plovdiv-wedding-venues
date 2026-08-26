/**
 * Content pack (extension) — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Сватбен ресторант „Русалка“. Harvested 2026-08-26 from: Google Business профила им (нямат сайт).
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "Мястото",
    note: "Сватбен ресторант „Русалка“ не публикува меню. Показано е само това, което сами съобщават.",
    dishes: [
      {
        n: "Сватбен ресторант",
        d: "на бул. „Дунав“ 194",
      },
      {
        n: "Северната част на Пловдив",
      },
      {
        n: "Уговаряне по телефон",
        d: "089 555 8949",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "The place",
    note: "Rusalka Wedding Restaurant publishes no menu. Only what they state themselves appears here.",
    dishes: [
      {
        n: "A wedding restaurant",
        d: "at 194 Dunav Boulevard",
      },
      {
        n: "The northern part of Plovdiv",
      },
      {
        n: "Arranged by telephone",
        d: "089 555 8949",
      },
    ],
  },
];

export const menuFooterBg =
  "Меню, куверт и кетъринг условия не са публикувани никъде и предстои да бъдат предоставени.";

export const menuFooterEn =
  "The menu, the per-head price and the catering terms are published nowhere and are still to be supplied.";

export const servicesBg = [
  "Ресторант, обявен изцяло като сватбен",
  "На бул. „Дунав“ 194, в северната част на Пловдив",
  "Дати се уговарят по телефон",
];

export const servicesEn = [
  "A restaurant listed entirely as a wedding venue",
  "At 194 Dunav Boulevard, in the northern part of Plovdiv",
  "Dates are arranged by telephone",
];

export const techBg = [
  "Ресторант само за сватби",
];

export const techEn = [
  "A weddings-only restaurant",
];

export const eventsBg = [
  {
    title: "Сватбени тържества",
    body: "Ресторантът е обявен като сватбен и това е поводът, за който домакините го предлагат.",
    fact: "Единствената специализация",
  },
];

export const eventsEn = [
  {
    title: "Wedding celebrations",
    body: "The restaurant is listed as a wedding venue and that is the occasion the hosts offer it for.",
    fact: "The only specialism",
  },
];

export const performerBg = "Ресторантът е на бул. „Дунав“ 194 и се обявява изцяло като сватбен.";

export const performerEn = "The restaurant is at 194 Dunav Boulevard and is listed entirely as a wedding venue.";

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
      hint: "сватбеният ден",
    },
    {
      href: "/menu/",
      label: "Мястото",
      hint: "какво се знае",
    },
    {
      href: "/sabitia/",
      label: "Поводи",
      hint: "само сватби",
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
      hint: "the wedding day",
    },
    {
      href: "/en/menu/",
      label: "The place",
      hint: "what is known",
    },
    {
      href: "/en/sabitia/",
      label: "Occasions",
      hint: "weddings only",
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
    menuLead: "Сватбен ресторант „Русалка“ не публикува меню. Ето какво съобщават за самото място:",
    servicesTitle: "Услуги",
    servicesLead: "Ето какво се знае, че стои на разположение за деня.",
    techTitle: "В ресторанта",
    eventsTitle: "Поводи",
    eventsLead: "Ресторантът се предлага за сватбени тържества.",
    galleryTitle: "Мястото, както изглежда",
    galleryLead: "Сватбен ресторант „Русалка“ няма публикувани собствени фотографии на обекта.",
    galleryChip: "предстоят реални снимки",
    galleryEmptyTitle: "Тук ще стоят снимките на ресторанта.",
    galleryEmptyBody: "Домакините нямат нито сайт, нито страница в социалните мрежи, така че публикувани фотографии на ресторанта няма.",
    performerTitle: "Сезонът, с техните думи",
    tableBandQuote: "Ресторант, отреден за един ден в годината на всеки.",
    pageTitleGallery: "Снимките предстоят",
    pageTitleEvents: "Ресторант само за сватби",
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
    menuLead: "Rusalka Wedding Restaurant publishes no menu. Here is what they state about the place itself:",
    servicesTitle: "Services",
    servicesLead: "Here is what is known to be available for the day.",
    techTitle: "In the restaurant",
    eventsTitle: "Occasions",
    eventsLead: "The restaurant is offered for wedding celebrations.",
    galleryTitle: "The place as it looks",
    galleryLead: "Rusalka Wedding Restaurant has no published photographs of the venue.",
    galleryChip: "real photographs to come",
    galleryEmptyTitle: "The photographs of the restaurant will stand here.",
    galleryEmptyBody: "The hosts have neither a website nor a social page, so there are no published photographs of the restaurant.",
    performerTitle: "The season, in their words",
    tableBandQuote: "A restaurant kept for one day in anyone's year.",
    pageTitleGallery: "Photographs to come",
    pageTitleEvents: "A weddings-only restaurant",
    pageTitleMenu: "The place, in their words",
    pageTitleServices: "What is available",
  },
} as const;
