/**
 * Content pack (extension) — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Ресторант „Панорама“. Harvested 2026-08-26 from: Google Business профила им (нямат сайт).
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "Мястото",
    note: "Ресторант „Панорама“ не публикува меню. Показано е само това, което сами съобщават.",
    dishes: [
      {
        n: "Панорамен ресторант",
        d: "на двайсет и втория етаж",
      },
      {
        n: "Изглед над целия Пловдив",
      },
      {
        n: "В сградата на хотел „Санкт Петербург“",
      },
      {
        n: "Резервация по телефон",
        d: "088 868 6817",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "The place",
    note: "Panorama Restaurant publishes no menu. Only what they state themselves appears here.",
    dishes: [
      {
        n: "A panoramic restaurant",
        d: "on the twenty-second floor",
      },
      {
        n: "A view over the whole of Plovdiv",
      },
      {
        n: "In the Sankt Peterburg hotel building",
      },
      {
        n: "Booking by telephone",
        d: "088 868 6817",
      },
    ],
  },
];

export const menuFooterBg =
  "Меню, куверт и кетъринг условия не са публикувани никъде и предстои да бъдат предоставени.";

export const menuFooterEn =
  "The menu, the per-head price and the catering terms are published nowhere and are still to be supplied.";

export const servicesBg = [
  "Ресторантът на бул. „България“ 97, ет. 22, Пловдив",
  "Ресторант на двайсет и втория етаж",
  "Панорамен изглед над целия град",
  "В сградата на хотел „Санкт Петербург“",
];

export const servicesEn = [
  "The restaurant at 97 Bulgaria Blvd, floor 22, Plovdiv",
  "A restaurant on the twenty-second floor",
  "A panoramic view over the whole city",
  "In the Sankt Peterburg hotel building",
];

export const techBg = [
  "Ресторант на двайсет и втория етаж",
  "Панорамен изглед над целия град",
  "В сградата на хотел „Санкт Петербург“",
];

export const techEn = [
  "A restaurant on the twenty-second floor",
  "A panoramic view over the whole city",
  "In the Sankt Peterburg hotel building",
];

export const eventsBg = [
  {
    title: "Тържества над града",
    body: "Ресторантът поема поводи на двайсет и втория етаж, с панорамен изглед над Пловдив.",
    fact: "22-ият етаж",
  },
];

export const eventsEn = [
  {
    title: "Celebrations above the city",
    body: "The restaurant takes on occasions on the twenty-second floor, with a panoramic view over Plovdiv.",
    fact: "22nd floor",
  },
];

export const performerBg = "Ресторантът е на двайсет и втория етаж на бул. „България“ 97, с панорамен изглед над Пловдив.";

export const performerEn = "The restaurant is on the twenty-second floor at 97 Bulgaria Boulevard, with a panoramic view over Plovdiv.";

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
    menuLead: "Ресторант „Панорама“ не публикува меню. Ето какво съобщават за самото място:",
    servicesTitle: "Услуги",
    servicesLead: "Ето какво се знае, че стои на разположение за деня.",
    techTitle: "В ресторанта",
    eventsTitle: "Поводи",
    eventsLead: "Мястото се предлага за поводи от всякакъв вид.",
    galleryTitle: "Мястото, както изглежда",
    galleryLead: "Ресторант „Панорама“ няма публикувани собствени фотографии на обекта.",
    galleryChip: "предстоят реални снимки",
    galleryEmptyTitle: "Тук ще стоят снимките на ресторанта.",
    galleryEmptyBody: "Домакините нямат собствен сайт, а профилът им в Google не съдържа фотографии, годни за публикуване.",
    performerTitle: "Сезонът, с техните думи",
    tableBandQuote: "Двайсет и два етажа над всичко останало.",
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
    menuLead: "Panorama Restaurant publishes no menu. Here is what they state about the place itself:",
    servicesTitle: "Services",
    servicesLead: "Here is what is known to be available for the day.",
    techTitle: "In the restaurant",
    eventsTitle: "Occasions",
    eventsLead: "The place is offered for occasions of every kind.",
    galleryTitle: "The place as it looks",
    galleryLead: "Panorama Restaurant has no published photographs of the venue.",
    galleryChip: "real photographs to come",
    galleryEmptyTitle: "The photographs of the restaurant will stand here.",
    galleryEmptyBody: "The hosts have no website of their own, and their Google profile holds no publishable photographs.",
    performerTitle: "The season, in their words",
    tableBandQuote: "Twenty-two floors above everything else.",
    pageTitleGallery: "Photographs to come",
    pageTitleEvents: "Occasions at the venue",
    pageTitleMenu: "The place, in their words",
    pageTitleServices: "What is available",
  },
} as const;
