/**
 * Content pack (extension) — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Парти зала Number Five. Harvested 2026-08-26 from: собствения им сайт numberfivebg.com — снимки, оборудване, контакти; събрани 2026-08-27.
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "zalata",
    label: "Залата",
    note: "Number Five не публикува меню — залата се наема с оборудван бар.",
    dishes: [
      {
        n: "Билярдна маса",
      },
      {
        n: "Караоке и аудио система",
      },
      {
        n: "Парти осветление",
      },
      {
        n: "Бар",
        d: "хладилни витрини, чаши, съдомиялна",
      },
      {
        n: "Кафе машина",
      },
      {
        n: "Запитване",
        d: "0888 66 43 43 · info@numberfivebg.com",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "zalata",
    label: "The hall",
    note: "Number Five publishes no menu — the hall is rented with a fitted bar.",
    dishes: [
      {
        n: "A billiards table",
      },
      {
        n: "Karaoke and an audio system",
      },
      {
        n: "Party lighting",
      },
      {
        n: "A bar",
        d: "fridges, glassware, dishwasher",
      },
      {
        n: "A coffee machine",
      },
      {
        n: "Enquiries",
        d: "0888 66 43 43 · info@numberfivebg.com",
      },
    ],
  },
];

export const menuFooterBg =
  "Залата се наема с оборудван бар; кетъринг и меню не са публикувани и предстои да бъдат уточнени.";

export const menuFooterEn =
  "The hall is rented with a fitted bar; catering and menu are not published and are still to be confirmed.";

export const servicesBg = [
  "Билярдна маса",
  "Аудио система и караоке",
  "Парти осветление",
  "Бар с хладилни витрини и чаши",
  "Съдомиялна и кафе машина",
  "Филтрираща система за питейна вода",
  "WiFi и паркинг",
];

export const servicesEn = [
  "A billiards table",
  "An audio system and karaoke",
  "Party lighting",
  "A bar with fridges and glassware",
  "A dishwasher and a coffee machine",
  "A drinking-water filter system",
  "WiFi and parking",
];

export const techBg = [
  "Билярдна маса",
  "Аудио система и караоке",
  "Парти осветление",
  "Бар с хладилни витрини и чаши",
];

export const techEn = [
  "A billiards table",
  "An audio system and karaoke",
  "Party lighting",
  "A bar with fridges and glassware",
];

export const eventsBg = [
  {
    title: "Рождени дни, годишнини и тържества",
    body: "Залата се наема частно за рождени дни, годишнини, сватбени партита и всякакви поводи.",
    fact: "частна зала",
  },
];

export const eventsEn = [
  {
    title: "Birthdays, anniversaries and celebrations",
    body: "The hall is rented privately for birthdays, anniversaries, wedding parties and occasions of every kind.",
    fact: "a private hall",
  },
];

export const performerBg = "Залата е на ул. „Инж. Асен Йорданов“ 29 в Пловдив — частно пространство с бар, билярд и парти осветление.";

export const performerEn = "The hall is at 29 Inzh. Asen Yordanov Street in Plovdiv — a private space with a bar, billiards and party lighting.";

export const gallery: { slug: string; bg: string; en: string; tall?: boolean }[] = [
  {
    slug: "zalata",
    bg: "Залата",
    en: "The hall",
  },
  {
    slug: "sedalkite",
    bg: "Сепаретата",
    en: "The booths",
  },
  {
    slug: "barat",
    bg: "Барът",
    en: "The bar",
  },
  {
    slug: "bilyardat",
    bg: "Билярдната маса",
    en: "The billiards table",
  },
  {
    slug: "loungeat",
    bg: "Лаундж зоната",
    en: "The lounge",
  },
  {
    slug: "chervenite",
    bg: "Червените дивани",
    en: "The red seating",
  },
  {
    slug: "osvetlenieto",
    bg: "Парти осветлението",
    en: "The party lighting",
  },
  {
    slug: "chashite",
    bg: "Чашите",
    en: "The glasses",
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
      hint: "денят в залата",
    },
    {
      href: "/menu/",
      label: "Мястото",
      hint: "какво е на място",
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
      hint: "the day in the hall",
    },
    {
      href: "/en/menu/",
      label: "The place",
      hint: "what is on site",
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
    menuTitle: "Залата",
    menuLead: "Парти зала Number Five не публикува меню. Ето какво съобщават за самото място:",
    servicesTitle: "Услуги",
    servicesLead: "Ето какво се знае, че стои на разположение за деня.",
    techTitle: "В залата",
    eventsTitle: "Поводи",
    eventsLead: "Залата се обявява за рождени дни, годишнини и сватби.",
    galleryTitle: "Мястото, както изглежда",
    galleryLead: "Осем от собствените им снимки: залата, барът, билярдът и лаундж зоната.",
    galleryChip: "реални снимки на залата",
    galleryEmptyTitle: "Тук стоят снимките на залата.",
    galleryEmptyBody: "Снимките са техни собствени, от сайта им numberfivebg.com.",
    performerTitle: "Мястото",
    tableBandQuote: "Стилно обзаведена зала в модерен дизайн.",
    pageTitleGallery: "Залата в снимки",
    pageTitleEvents: "Залата и поводите",
    pageTitleMenu: "Мястото, описано с техните думи",
    pageTitleServices: "Какво стои на разположение",
  },
  en: {
    inquire: "Enquire",
    menuBtn: "Menu",
    closeBtn: "Close",
    galleryMore: "The full gallery",
    exploreTitle: "Explore further",
    menuTitle: "The hall",
    menuLead: "Number Five Party Hall publishes no menu. Here is what they state about the place itself:",
    servicesTitle: "Services",
    servicesLead: "Here is what is known to be available for the day.",
    techTitle: "In the hall",
    eventsTitle: "Occasions",
    eventsLead: "The hall is offered for birthdays, anniversaries and weddings.",
    galleryTitle: "The place as it looks",
    galleryLead: "Eight of their own photographs: the hall, the bar, the billiards and the lounge.",
    galleryChip: "real photographs of the hall",
    galleryEmptyTitle: "The photographs of the hall stand here.",
    galleryEmptyBody: "The photographs are their own, from their site numberfivebg.com.",
    performerTitle: "The place",
    tableBandQuote: "A stylishly furnished hall in a modern design.",
    pageTitleGallery: "The hall in photographs",
    pageTitleEvents: "The hall and its occasions",
    pageTitleMenu: "The place, in their words",
    pageTitleServices: "What is available",
  },
} as const;
