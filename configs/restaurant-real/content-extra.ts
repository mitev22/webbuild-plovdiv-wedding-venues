/**
 * Content pack (extension) — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Ресторант „Реал“. Harvested 2026-08-26 from: Google Business профила им (нямат сайт).
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "Мястото",
    note: "Ресторант „Реал“ не публикува меню. Показано е само това, което сами съобщават.",
    dishes: [
      {
        n: "Ресторант",
        d: "ул. „Георги Войтех“ 2",
      },
      {
        n: "В централната част на Пловдив",
      },
      {
        n: "Резервация по телефон",
        d: "032 278 160",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "The place",
    note: "Restaurant Real publishes no menu. Only what they state themselves appears here.",
    dishes: [
      {
        n: "A restaurant",
        d: "2 Georgi Voyteh St",
      },
      {
        n: "In central Plovdiv",
      },
      {
        n: "Booking by telephone",
        d: "032 278 160",
      },
    ],
  },
];

export const menuFooterBg =
  "Меню, куверт и кетъринг условия не са публикувани никъде и предстои да бъдат предоставени.";

export const menuFooterEn =
  "The menu, the per-head price and the catering terms are published nowhere and are still to be supplied.";

export const servicesBg = [
  "Ресторантът на ул. „Георги Войтех“ 2, Пловдив",
  "Ресторант в централната част на града",
  "Стационарен телефон за резервации",
];

export const servicesEn = [
  "The restaurant at 2 Georgi Voyteh St, Plovdiv",
  "A restaurant in the central part of the city",
  "A landline for bookings",
];

export const techBg = [
  "Ресторант в централната част на града",
  "Стационарен телефон за резервации",
];

export const techEn = [
  "A restaurant in the central part of the city",
  "A landline for bookings",
];

export const eventsBg = [
  {
    title: "Тържества в салона",
    body: "Ресторантът поема частни поводи в центъра на Пловдив.",
    fact: "4.5 в Google",
  },
];

export const eventsEn = [
  {
    title: "Celebrations in the room",
    body: "The restaurant takes on private occasions in the centre of Plovdiv.",
    fact: "4.5 on Google",
  },
];

export const performerBg = "Ресторантът е на ул. „Георги Войтех“ 2 и гостите му дават 4.5 в Google.";

export const performerEn = "The restaurant is at 2 Georgi Voyteh Street and its guests rate it 4.5 on Google.";

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
    menuLead: "Ресторант „Реал“ не публикува меню. Ето какво съобщават за самото място:",
    servicesTitle: "Услуги",
    servicesLead: "Ето какво се знае, че стои на разположение за деня.",
    techTitle: "В ресторанта",
    eventsTitle: "Поводи",
    eventsLead: "Мястото се предлага за поводи от всякакъв вид.",
    galleryTitle: "Мястото, както изглежда",
    galleryLead: "Ресторант „Реал“ няма публикувани собствени фотографии на обекта.",
    galleryChip: "предстоят реални снимки",
    galleryEmptyTitle: "Тук ще стоят снимките на ресторанта.",
    galleryEmptyBody: "Домакините нямат собствен сайт, а профилът им в Google не съдържа фотографии, годни за публикуване.",
    performerTitle: "Сезонът, с техните думи",
    tableBandQuote: "Маса, запазена за повода.",
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
    menuLead: "Restaurant Real publishes no menu. Here is what they state about the place itself:",
    servicesTitle: "Services",
    servicesLead: "Here is what is known to be available for the day.",
    techTitle: "In the restaurant",
    eventsTitle: "Occasions",
    eventsLead: "The place is offered for occasions of every kind.",
    galleryTitle: "The place as it looks",
    galleryLead: "Restaurant Real has no published photographs of the venue.",
    galleryChip: "real photographs to come",
    galleryEmptyTitle: "The photographs of the restaurant will stand here.",
    galleryEmptyBody: "The hosts have no website of their own, and their Google profile holds no publishable photographs.",
    performerTitle: "The season, in their words",
    tableBandQuote: "A table kept for the occasion.",
    pageTitleGallery: "Photographs to come",
    pageTitleEvents: "Occasions at the venue",
    pageTitleMenu: "The place, in their words",
    pageTitleServices: "What is available",
  },
} as const;
