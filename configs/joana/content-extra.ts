/**
 * Content pack (extension) — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Ресторант „Джоана“. Harvested 2026-08-26 from: собствения им сайт djoana.com и Google Business профила.
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "Мястото",
    note: "Ресторант „Джоана“ не публикува меню. Показано е само това, което сами съобщават.",
    dishes: [
      {
        n: "Ресторант",
        d: "бул. „Дунав“ и ул. „Победа“",
      },
      {
        n: "В квартал Кършияка",
      },
      {
        n: "Резервация по телефон",
        d: "088 830 2428",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "The place",
    note: "Restaurant Joana publishes no menu. Only what they state themselves appears here.",
    dishes: [
      {
        n: "A restaurant",
        d: "Dunav Blvd at Pobeda St",
      },
      {
        n: "In the Karshiyaka district",
      },
      {
        n: "Booking by telephone",
        d: "088 830 2428",
      },
    ],
  },
];

export const menuFooterBg =
  "Меню, куверт и кетъринг условия не са публикувани никъде и предстои да бъдат предоставени.";

export const menuFooterEn =
  "The menu, the per-head price and the catering terms are published nowhere and are still to be supplied.";

export const servicesBg = [
  "Ресторантът на бул. „Дунав“ и ул. „Победа“, Кършияка, Пловдив",
  "Ресторант в квартал Кършияка",
  "На ъгъла на бул. „Дунав“ и ул. „Победа“",
];

export const servicesEn = [
  "The restaurant at Dunav Blvd at Pobeda St, Karshiyaka, Plovdiv",
  "A restaurant in the Karshiyaka district",
  "At the corner of Dunav Boulevard and Pobeda Street",
];

export const techBg = [
  "Ресторант в квартал Кършияка",
  "На ъгъла на бул. „Дунав“ и ул. „Победа“",
];

export const techEn = [
  "A restaurant in the Karshiyaka district",
  "At the corner of Dunav Boulevard and Pobeda Street",
];

export const eventsBg = [
  {
    title: "Поводи в квартала",
    body: "Ресторантът поема частни поводи в Кършияка.",
    fact: "Кършияка",
  },
];

export const eventsEn = [
  {
    title: "Neighbourhood occasions",
    body: "The restaurant takes on private occasions in Karshiyaka.",
    fact: "Karshiyaka",
  },
];

export const performerBg = "Ресторантът е на ъгъла на бул. „Дунав“ и ул. „Победа“, в квартал Кършияка.";

export const performerEn = "The restaurant stands at the corner of Dunav Boulevard and Pobeda Street, in Karshiyaka.";

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
    menuLead: "Ресторант „Джоана“ не публикува меню. Ето какво съобщават за самото място:",
    servicesTitle: "Услуги",
    servicesLead: "Ето какво се знае, че стои на разположение за деня.",
    techTitle: "В ресторанта",
    eventsTitle: "Поводи",
    eventsLead: "Мястото се предлага за поводи от всякакъв вид.",
    galleryTitle: "Мястото, както изглежда",
    galleryLead: "Ресторант „Джоана“ няма публикувани собствени фотографии на обекта.",
    galleryChip: "предстоят реални снимки",
    galleryEmptyTitle: "Тук ще стоят снимките на ресторанта.",
    galleryEmptyBody: "Сегашният им сайт съдържа само пет снимки и те не са предоставени за публикуване.",
    performerTitle: "Сезонът, с техните думи",
    tableBandQuote: "Салон за поводите в квартала.",
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
    menuLead: "Restaurant Joana publishes no menu. Here is what they state about the place itself:",
    servicesTitle: "Services",
    servicesLead: "Here is what is known to be available for the day.",
    techTitle: "In the restaurant",
    eventsTitle: "Occasions",
    eventsLead: "The place is offered for occasions of every kind.",
    galleryTitle: "The place as it looks",
    galleryLead: "Restaurant Joana has no published photographs of the venue.",
    galleryChip: "real photographs to come",
    galleryEmptyTitle: "The photographs of the restaurant will stand here.",
    galleryEmptyBody: "Their current site holds only five photographs and they have not been released for publication.",
    performerTitle: "The season, in their words",
    tableBandQuote: "A room for the neighbourhood's occasions.",
    pageTitleGallery: "Photographs to come",
    pageTitleEvents: "Occasions at the venue",
    pageTitleMenu: "The place, in their words",
    pageTitleServices: "What is available",
  },
} as const;
