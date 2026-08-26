/**
 * Content pack (extension) — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Ресторант „Пилето“. Harvested 2026-08-26 from: Google Business профила им (нямат сайт).
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "Мястото",
    note: "Ресторант „Пилето“ не публикува меню. Показано е само това, което сами съобщават.",
    dishes: [
      {
        n: "Ресторант",
        d: "бул. „България“ 178",
      },
      {
        n: "Места на открито",
      },
      {
        n: "Хранене на място и вземане от място",
      },
      {
        n: "Резервация по телефон",
        d: "032 961 061",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "The place",
    note: "Restaurant Pileto publishes no menu. Only what they state themselves appears here.",
    dishes: [
      {
        n: "A restaurant",
        d: "178 Bulgaria Blvd",
      },
      {
        n: "Outdoor seating",
      },
      {
        n: "Dining in and collection",
      },
      {
        n: "Booking by telephone",
        d: "032 961 061",
      },
    ],
  },
];

export const menuFooterBg =
  "Меню, куверт и кетъринг условия не са публикувани никъде и предстои да бъдат предоставени.";

export const menuFooterEn =
  "The menu, the per-head price and the catering terms are published nowhere and are still to be supplied.";

export const servicesBg = [
  "Ресторантът на бул. „България“ 178, Пловдив",
  "Места за гости на открито",
  "Хранене на място и вземане от място",
  "92 на сто от гостите го препоръчват",
];

export const servicesEn = [
  "The restaurant at 178 Bulgaria Blvd, Plovdiv",
  "Outdoor seating for guests",
  "Dining in and collection",
  "92 per cent of guests recommend it",
];

export const techBg = [
  "Места за гости на открито",
  "Хранене на място и вземане от място",
  "92 на сто от гостите го препоръчват",
];

export const techEn = [
  "Outdoor seating for guests",
  "Dining in and collection",
  "92 per cent of guests recommend it",
];

export const eventsBg = [
  {
    title: "Частни поводи",
    body: "Ресторантът поема поводи, с места и на открито.",
    fact: "92% препоръки",
  },
];

export const eventsEn = [
  {
    title: "Private occasions",
    body: "The restaurant takes on occasions, with outdoor seating too.",
    fact: "92% recommend",
  },
];

export const performerBg = "Домакините сами го казват така: защото малките неща имат винаги най-голямо значение.";

export const performerEn = "The hosts put it themselves: because the small things always matter most.";

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
    menuLead: "Ресторант „Пилето“ не публикува меню. Ето какво съобщават за самото място:",
    servicesTitle: "Услуги",
    servicesLead: "Ето какво се знае, че стои на разположение за деня.",
    techTitle: "В ресторанта",
    eventsTitle: "Поводи",
    eventsLead: "Мястото се предлага за поводи от всякакъв вид.",
    galleryTitle: "Мястото, както изглежда",
    galleryLead: "Ресторант „Пилето“ няма публикувани собствени фотографии на обекта.",
    galleryChip: "предстоят реални снимки",
    galleryEmptyTitle: "Тук ще стоят снимките на ресторанта.",
    galleryEmptyBody: "Снимките им живеят само във Facebook и не са предоставени за публикуване.",
    performerTitle: "Сезонът, с техните думи",
    tableBandQuote: "Защото малките неща имат винаги най-голямо значение.",
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
    menuLead: "Restaurant Pileto publishes no menu. Here is what they state about the place itself:",
    servicesTitle: "Services",
    servicesLead: "Here is what is known to be available for the day.",
    techTitle: "In the restaurant",
    eventsTitle: "Occasions",
    eventsLead: "The place is offered for occasions of every kind.",
    galleryTitle: "The place as it looks",
    galleryLead: "Restaurant Pileto has no published photographs of the venue.",
    galleryChip: "real photographs to come",
    galleryEmptyTitle: "The photographs of the restaurant will stand here.",
    galleryEmptyBody: "Their photographs live only on Facebook and have not been released for publication.",
    performerTitle: "The season, in their words",
    tableBandQuote: "Because the small things always matter most.",
    pageTitleGallery: "Photographs to come",
    pageTitleEvents: "Occasions at the venue",
    pageTitleMenu: "The place, in their words",
    pageTitleServices: "What is available",
  },
} as const;
