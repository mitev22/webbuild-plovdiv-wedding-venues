/**
 * Content pack (extension) — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Рамидо. Harvested 2026-08-26 from: Google Business профила им (нямат сайт).
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "Мястото",
    note: "Рамидо не публикува меню. Показано е само това, което сами съобщават.",
    dishes: [
      {
        n: "Зала за събития",
        d: "на бул. „Руски“ 15",
      },
      {
        n: "В центъра на Пловдив",
        d: "гостите стигат пеша",
      },
      {
        n: "Достъпна по всяко време",
        d: "денонощно",
      },
      {
        n: "Уговаряне по телефон",
        d: "088 509 0993",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "The place",
    note: "Ramido publishes no menu. Only what they state themselves appears here.",
    dishes: [
      {
        n: "An event hall",
        d: "at 15 Ruski Boulevard",
      },
      {
        n: "In central Plovdiv",
        d: "guests can walk to it",
      },
      {
        n: "Reachable at any hour",
        d: "around the clock",
      },
      {
        n: "Arranged by telephone",
        d: "088 509 0993",
      },
    ],
  },
];

export const menuFooterBg =
  "Меню, куверт и кетъринг условия не са публикувани никъде и предстои да бъдат предоставени.";

export const menuFooterEn =
  "The menu, the per-head price and the catering terms are published nowhere and are still to be supplied.";

export const servicesBg = [
  "Зала за събития на бул. „Руски“ 15",
  "В самия център на Пловдив",
  "Достъпна по всяко време на денонощието",
  "Домакините посрещат всякакви гости",
];

export const servicesEn = [
  "An event hall at 15 Ruski Boulevard",
  "In the very centre of Plovdiv",
  "Reachable at any hour of the day",
  "The hosts welcome every kind of guest",
];

export const techBg = [
  "Зала за събития",
  "В центъра на града",
];

export const techEn = [
  "An event hall",
  "In the city centre",
];

export const eventsBg = [
  {
    title: "Сватби в центъра",
    body: "Залата се предлага за сватбени тържества на бул. „Руски“, в самия център на Пловдив.",
    fact: "5.0 в Google",
  },
];

export const eventsEn = [
  {
    title: "Weddings in the centre",
    body: "The hall is offered for wedding celebrations on Ruski Boulevard, in the very centre of Plovdiv.",
    fact: "5.0 on Google",
  },
];

export const performerBg = "Залата е на бул. „Руски“ 15 и има пълна петица от отзивите си в Google.";

export const performerEn = "The hall is at 15 Ruski Boulevard and holds a full five stars from its Google reviews.";

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
      hint: "в залата",
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
      hint: "in the hall",
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
    menuLead: "Рамидо не публикува меню. Ето какво съобщават за самото място:",
    servicesTitle: "Услуги",
    servicesLead: "Ето какво се знае, че стои на разположение за деня.",
    techTitle: "В залата",
    eventsTitle: "Поводи",
    eventsLead: "Залата се предлага за събития в центъра на Пловдив.",
    galleryTitle: "Мястото, както изглежда",
    galleryLead: "Рамидо няма публикувани собствени фотографии на обекта.",
    galleryChip: "предстоят реални снимки",
    galleryEmptyTitle: "Тук ще стоят снимките на залата.",
    galleryEmptyBody: "Домакините нямат собствен сайт, а профилът им в Google не съдържа фотографии на залата, годни за публикуване.",
    performerTitle: "Сезонът, с техните думи",
    tableBandQuote: "Зала на две крачки от центъра.",
    pageTitleGallery: "Снимките предстоят",
    pageTitleEvents: "Залата в центъра",
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
    menuLead: "Ramido publishes no menu. Here is what they state about the place itself:",
    servicesTitle: "Services",
    servicesLead: "Here is what is known to be available for the day.",
    techTitle: "In the hall",
    eventsTitle: "Occasions",
    eventsLead: "The hall is offered for events in the centre of Plovdiv.",
    galleryTitle: "The place as it looks",
    galleryLead: "Ramido has no published photographs of the venue.",
    galleryChip: "real photographs to come",
    galleryEmptyTitle: "The photographs of the hall will stand here.",
    galleryEmptyBody: "The hosts have no website of their own, and their Google profile holds no publishable photographs of the hall.",
    performerTitle: "The season, in their words",
    tableBandQuote: "A hall two steps from the centre.",
    pageTitleGallery: "Photographs to come",
    pageTitleEvents: "The hall in the centre",
    pageTitleMenu: "The place, in their words",
    pageTitleServices: "What is available",
  },
} as const;
