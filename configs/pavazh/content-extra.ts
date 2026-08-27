/**
 * Content pack (extension) — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Паваж. Harvested 2026-08-26 from: Google Business профила им (нямат сайт) + публичната им Facebook страница facebook.com/pavaj.plovdiv (снимки и запазена марка, събрани 2026-08-27).
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "Мястото",
    note: "Паваж не публикува меню. Показано е само това, което сами съобщават.",
    dishes: [
      {
        n: "Гастропъб",
        d: "в квартал Капана",
      },
      {
        n: "Места на открито",
        d: "по паважа пред заведението",
      },
      {
        n: "Хранене на място и вземане от място",
      },
      {
        n: "Резервация по телефон",
        d: "087 811 1876",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "The place",
    note: "Pavazh publishes no menu. Only what they state themselves appears here.",
    dishes: [
      {
        n: "A gastropub",
        d: "in the Kapana quarter",
      },
      {
        n: "Outdoor seating",
        d: "on the cobbles in front",
      },
      {
        n: "Dining in and collection",
      },
      {
        n: "Booking by telephone",
        d: "087 811 1876",
      },
    ],
  },
];

export const menuFooterBg =
  "Меню, куверт и кетъринг условия не са публикувани никъде и предстои да бъдат предоставени.";

export const menuFooterEn =
  "The menu, the per-head price and the catering terms are published nowhere and are still to be supplied.";

export const servicesBg = [
  "Гастропъб на ул. „Златарска“ 7, Капана, Пловдив",
  "Отворено от обяд до единайсет вечерта",
  "Места за гости на открито",
  "Хранене на място и вземане от място",
  "Над 25 000 души следят страницата им",
];

export const servicesEn = [
  "A gastropub at 7 Zlatarska St, Kapana, Plovdiv",
  "Open from noon until eleven at night",
  "Outdoor seating for guests",
  "Dining in and collection from the door",
  "More than 25,000 people follow their page",
];

export const techBg = [
  "Места за гости на открито",
  "Хранене на място и вземане от място",
  "Над 25 000 души следят страницата им",
];

export const techEn = [
  "Outdoor seating for guests",
  "Dining in and collection from the door",
  "More than 25,000 people follow their page",
];

export const eventsBg = [
  {
    title: "Частни поводи",
    body: "Заведението поема частни поводи в сърцето на Капана, с места и на открито.",
    fact: "Капана",
  },
];

export const eventsEn = [
  {
    title: "Private occasions",
    body: "The place takes on private occasions in the heart of Kapana, with outdoor seating too.",
    fact: "Kapana",
  },
];

export const performerBg = "Домакините сами го казват така: всички павета водят към Капана, а най-вкусното място там вече се случи.";

export const performerEn = "The hosts put it themselves: every cobble leads to Kapana, and the best table there has already happened.";

export const gallery: { slug: string; bg: string; en: string; tall?: boolean }[] = [
  {
    slug: "ulitsata",
    bg: "Улицата пред нас",
    en: "The street outside",
  },
  {
    slug: "zalata",
    bg: "Барът",
    en: "The bar",
  },
  {
    slug: "masite",
    bg: "Масите",
    en: "The tables",
  },
  {
    slug: "skarata",
    bg: "Скарата",
    en: "The grill",
    tall: true,
  },
  {
    slug: "dnem",
    bg: "Улицата денем",
    en: "The street by day",
  },
  {
    slug: "ordyovri",
    bg: "От кухнята",
    en: "From the kitchen",
  },
  {
    slug: "ribata",
    bg: "Рибата",
    en: "The fish",
  },
  {
    slug: "desertat",
    bg: "Десертът",
    en: "The dessert",
  },
  {
    slug: "lozhitsata",
    bg: "Сладко накрая",
    en: "Something sweet at the end",
  },
  {
    slug: "ekipat",
    bg: "Екипът",
    en: "The team",
  },
  {
    slug: "gradinata",
    bg: "Градината",
    en: "The garden",
  },
  {
    slug: "kapana",
    bg: "Капана вечер",
    en: "Kapana at night",
  },
  {
    slug: "dostavkata",
    bg: "Доставката",
    en: "The delivery",
  },
  {
    slug: "muralat",
    bg: "Муралът в Капана",
    en: "The Kapana mural",
  },
];

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
    menuLead: "Паваж не публикува меню. Ето какво съобщават за самото място:",
    servicesTitle: "Услуги",
    servicesLead: "Ето какво се знае, че стои на разположение за деня.",
    techTitle: "В заведението",
    eventsTitle: "Поводи",
    eventsLead: "Мястото се предлага за поводи от всякакъв вид.",
    galleryTitle: "Мястото, както изглежда",
    galleryLead: "Четиринайсет от собствените им снимки: улицата, залата, кухнята и хората зад нея.",
    galleryChip: "реални снимки на заведението",
    galleryEmptyTitle: "Тук стоят снимките на заведението.",
    galleryEmptyBody: "Снимките са техни собствени, събрани от страницата им във Facebook.",
    performerTitle: "Сезонът, с техните думи",
    tableBandQuote: "Всички павета водят към Капана.",
    pageTitleGallery: "Мястото в снимки",
    pageTitleEvents: "Поводите на мястото",
    pageTitleMenu: "Мястото, описано с техните думи",
    pageTitleServices: "Какво стои на разположение",
    tableBandAlt: "Вечеря в заведението, погледнато от улицата",
  },
  en: {
    inquire: "Enquire",
    menuBtn: "Menu",
    closeBtn: "Close",
    galleryMore: "The full gallery",
    exploreTitle: "Explore further",
    menuTitle: "The place",
    menuLead: "Pavazh publishes no menu. Here is what they state about the place itself:",
    servicesTitle: "Services",
    servicesLead: "Here is what is known to be available for the day.",
    techTitle: "In the place",
    eventsTitle: "Occasions",
    eventsLead: "The place is offered for occasions of every kind.",
    galleryTitle: "The place as it looks",
    galleryLead: "Fourteen of their own photographs: the street, the room, the kitchen and the people behind it.",
    galleryChip: "real photographs of the place",
    galleryEmptyTitle: "The photographs of the place stand here.",
    galleryEmptyBody: "The photographs are their own, gathered from their Facebook page.",
    performerTitle: "The season, in their words",
    tableBandQuote: "Every cobble leads to Kapana.",
    pageTitleGallery: "The place in photographs",
    pageTitleEvents: "Occasions at the venue",
    pageTitleMenu: "The place, in their words",
    pageTitleServices: "What is available",
    tableBandAlt: "Dinner inside, seen from the street",
  },
} as const;
