/**
 * Content pack (extension) — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Casa de Cuba. Harvested 2026-08-26 from: Google Business профила им (нямат сайт).
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "Мястото",
    note: "Casa de Cuba не публикува меню. Показано е само това, което сами съобщават.",
    dishes: [
      {
        n: "Заведение за вечерни поводи",
        d: "бул. „Васил Априлов“ 118",
      },
      {
        n: "Близо до центъра",
      },
      {
        n: "Резервация по телефон",
        d: "088 500 8490",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "The place",
    note: "Casa de Cuba publishes no menu. Only what they state themselves appears here.",
    dishes: [
      {
        n: "A venue for evening occasions",
        d: "118 Vasil Aprilov Blvd",
      },
      {
        n: "Close to the centre",
      },
      {
        n: "Booking by telephone",
        d: "088 500 8490",
      },
    ],
  },
];

export const menuFooterBg =
  "Меню, куверт и кетъринг условия не са публикувани никъде и предстои да бъдат предоставени.";

export const menuFooterEn =
  "The menu, the per-head price and the catering terms are published nowhere and are still to be supplied.";

export const servicesBg = [
  "Заведението на бул. „Васил Априлов“ 118, Пловдив",
  "Място за вечерни поводи",
  "Близо до центъра на града",
];

export const servicesEn = [
  "The place at 118 Vasil Aprilov Blvd, Plovdiv",
  "A place for evening occasions",
  "Close to the city centre",
];

export const techBg = [
  "Място за вечерни поводи",
  "Близо до центъра на града",
];

export const techEn = [
  "A place for evening occasions",
  "Close to the city centre",
];

export const eventsBg = [
  {
    title: "Частни поводи",
    body: "Заведението поема частни поводи близо до центъра на Пловдив.",
    fact: "4.7 в Google",
  },
];

export const eventsEn = [
  {
    title: "Private occasions",
    body: "The place takes on private occasions close to the centre of Plovdiv.",
    fact: "4.7 on Google",
  },
];

export const performerBg = "Заведението е на бул. „Васил Априлов“ 118 и гостите му дават 4.7 в Google.";

export const performerEn = "The place is at 118 Vasil Aprilov Boulevard and its guests rate it 4.7 on Google.";

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
    menuLead: "Casa de Cuba не публикува меню. Ето какво съобщават за самото място:",
    servicesTitle: "Услуги",
    servicesLead: "Ето какво се знае, че стои на разположение за деня.",
    techTitle: "В заведението",
    eventsTitle: "Поводи",
    eventsLead: "Мястото се предлага за поводи от всякакъв вид.",
    galleryTitle: "Мястото, както изглежда",
    galleryLead: "Casa de Cuba няма публикувани собствени фотографии на обекта.",
    galleryChip: "предстоят реални снимки",
    galleryEmptyTitle: "Тук ще стоят снимките на заведението.",
    galleryEmptyBody: "Домакините нямат собствен сайт, а профилът им в Google не съдържа фотографии, годни за публикуване.",
    performerTitle: "Сезонът, с техните думи",
    tableBandQuote: "Вечер на крачки от центъра.",
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
    menuLead: "Casa de Cuba publishes no menu. Here is what they state about the place itself:",
    servicesTitle: "Services",
    servicesLead: "Here is what is known to be available for the day.",
    techTitle: "In the place",
    eventsTitle: "Occasions",
    eventsLead: "The place is offered for occasions of every kind.",
    galleryTitle: "The place as it looks",
    galleryLead: "Casa de Cuba has no published photographs of the venue.",
    galleryChip: "real photographs to come",
    galleryEmptyTitle: "The photographs of the place will stand here.",
    galleryEmptyBody: "The hosts have no website of their own, and their Google profile holds no publishable photographs.",
    performerTitle: "The season, in their words",
    tableBandQuote: "An evening a short walk from the centre.",
    pageTitleGallery: "Photographs to come",
    pageTitleEvents: "Occasions at the venue",
    pageTitleMenu: "The place, in their words",
    pageTitleServices: "What is available",
  },
} as const;
