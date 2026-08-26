/**
 * Content pack (extension) — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Хотел „Хеброс“. Harvested 2026-08-26 from: Google Business профила им (нямат сайт).
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "Мястото",
    note: "Хотел „Хеброс“ не публикува меню. Показано е само това, което сами съобщават.",
    dishes: [
      {
        n: "Хотел в Стария град",
        d: "ул. „Константин Стоилов“ 51",
      },
      {
        n: "Стаи за гостите",
        d: "на място",
      },
      {
        n: "Сред възрожденските къщи",
      },
      {
        n: "Запитване по телефон",
        d: "088 822 0377",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "The place",
    note: "Hebros Hotel publishes no menu. Only what they state themselves appears here.",
    dishes: [
      {
        n: "A hotel in the Old Town",
        d: "51 Konstantin Stoilov St",
      },
      {
        n: "Rooms for guests",
        d: "on site",
      },
      {
        n: "Among the revival houses",
      },
      {
        n: "Enquiries by telephone",
        d: "088 822 0377",
      },
    ],
  },
];

export const menuFooterBg =
  "Меню, куверт и кетъринг условия не са публикувани никъде и предстои да бъдат предоставени.";

export const menuFooterEn =
  "The menu, the per-head price and the catering terms are published nowhere and are still to be supplied.";

export const servicesBg = [
  "Хотелът на ул. „Константин Стоилов“ 51, Стария град, Пловдив",
  "Хотел в Стария град на Пловдив",
  "Стаи за гостите на място",
  "Сред възрожденските къщи на хълма",
];

export const servicesEn = [
  "The hotel at 51 Konstantin Stoilov St, Old Town, Plovdiv",
  "A hotel in the Old Town of Plovdiv",
  "Rooms for guests on site",
  "Among the revival houses on the hill",
];

export const techBg = [
  "Хотел в Стария град на Пловдив",
  "Стаи за гостите на място",
  "Сред възрожденските къщи на хълма",
];

export const techEn = [
  "A hotel in the Old Town of Plovdiv",
  "Rooms for guests on site",
  "Among the revival houses on the hill",
];

export const eventsBg = [
  {
    title: "Тържества в Стария град",
    body: "Хотелът поема поводи в историческата част на Пловдив, а гостите могат да останат за нощувка.",
    fact: "Стаи на място",
  },
];

export const eventsEn = [
  {
    title: "Celebrations in the Old Town",
    body: "The hotel takes on occasions in the historic part of Plovdiv, and guests can stay the night.",
    fact: "Rooms on site",
  },
];

export const performerBg = "Хотелът е на ул. „Константин Стоилов“ 51, в Стария град на Пловдив, със стаи за гостите на място.";

export const performerEn = "The hotel is at 51 Konstantin Stoilov Street, in the Old Town of Plovdiv, with rooms for guests on site.";

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
    menuLead: "Хотел „Хеброс“ не публикува меню. Ето какво съобщават за самото място:",
    servicesTitle: "Услуги",
    servicesLead: "Ето какво се знае, че стои на разположение за деня.",
    techTitle: "В хотела",
    eventsTitle: "Поводи",
    eventsLead: "Мястото се предлага за поводи от всякакъв вид.",
    galleryTitle: "Мястото, както изглежда",
    galleryLead: "Хотел „Хеброс“ няма публикувани собствени фотографии на обекта.",
    galleryChip: "предстоят реални снимки",
    galleryEmptyTitle: "Тук ще стоят снимките на хотела.",
    galleryEmptyBody: "Домакините нямат собствен сайт, а профилът им в Google не съдържа фотографии, годни за публикуване.",
    performerTitle: "Сезонът, с техните думи",
    tableBandQuote: "Вечер и нощувка сред възрожденските къщи.",
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
    menuLead: "Hebros Hotel publishes no menu. Here is what they state about the place itself:",
    servicesTitle: "Services",
    servicesLead: "Here is what is known to be available for the day.",
    techTitle: "In the hotel",
    eventsTitle: "Occasions",
    eventsLead: "The place is offered for occasions of every kind.",
    galleryTitle: "The place as it looks",
    galleryLead: "Hebros Hotel has no published photographs of the venue.",
    galleryChip: "real photographs to come",
    galleryEmptyTitle: "The photographs of the hotel will stand here.",
    galleryEmptyBody: "The hosts have no website of their own, and their Google profile holds no publishable photographs.",
    performerTitle: "The season, in their words",
    tableBandQuote: "An evening and a night among the revival houses.",
    pageTitleGallery: "Photographs to come",
    pageTitleEvents: "Occasions at the venue",
    pageTitleMenu: "The place, in their words",
    pageTitleServices: "What is available",
  },
} as const;
