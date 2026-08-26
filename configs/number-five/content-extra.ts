/**
 * Content pack (extension) — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Парти зала Number Five. Harvested 2026-08-26 from: собствения им сайт numberfivebg.com и Google Business профила.
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "Залата",
    note: "Парти зала Number Five не публикува меню. Показано е само това, което сами съобщават.",
    dishes: [
      {
        n: "Бар",
        d: "с хладилни витрини и чаши",
      },
      {
        n: "Аудио система и караоке",
      },
      {
        n: "Парти осветление",
      },
      {
        n: "Билярд маса",
      },
      {
        n: "Кафе машина и съдомиялна",
      },
      {
        n: "Водна филтрация",
      },
      {
        n: "Санитарни помещения",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "The hall",
    note: "Number Five Party Hall publishes no menu. Only what they state themselves appears here.",
    dishes: [
      {
        n: "A bar",
        d: "with refrigerated displays and glassware",
      },
      {
        n: "An audio system and karaoke",
      },
      {
        n: "Party lighting",
      },
      {
        n: "A billiard table",
      },
      {
        n: "A coffee machine and a dishwasher",
      },
      {
        n: "Water filtration",
      },
      {
        n: "Sanitary facilities",
      },
    ],
  },
];

export const menuFooterBg =
  "Меню, куверт и кетъринг условия не са публикувани никъде и предстои да бъдат предоставени.";

export const menuFooterEn =
  "The menu, the per-head price and the catering terms are published nowhere and are still to be supplied.";

export const servicesBg = [
  "Стилно обзаведена зала в модерен дизайн",
  "Бар с хладилни витрини и чаши",
  "Аудио система и караоке",
  "Парти осветление",
  "Билярд маса",
  "Кафе машина и съдомиялна",
  "Водна филтрация",
  "Санитарни помещения",
];

export const servicesEn = [
  "A stylishly furnished hall in a modern design",
  "A bar with refrigerated displays and glassware",
  "An audio system and karaoke",
  "Party lighting",
  "A billiard table",
  "A coffee machine and a dishwasher",
  "Water filtration",
  "Sanitary facilities",
];

export const techBg = [
  "Аудио система",
  "Караоке",
  "Парти осветление",
  "Билярд маса",
];

export const techEn = [
  "An audio system",
  "Karaoke",
  "Party lighting",
  "A billiard table",
];

export const eventsBg = [
  {
    title: "Сватбени тържества",
    body: "Домакините обявяват залата и за сватби, наред с рождените дни и годишнините.",
    fact: "По техните думи",
  },
  {
    title: "Рождени дни и годишнини",
    body: "Залата е обзаведена и оборудвана за поводи през цялата година.",
    fact: "Целогодишно",
  },
];

export const eventsEn = [
  {
    title: "Wedding celebrations",
    body: "The hosts offer the hall for weddings as well as birthdays and anniversaries.",
    fact: "In their own words",
  },
  {
    title: "Birthdays and anniversaries",
    body: "The hall is furnished and equipped for occasions throughout the year.",
    fact: "All year round",
  },
];

export const performerBg = "Домакините сами описват залата така: стилно обзаведена зала в модерен дизайн, подходяща за рождени дни, годишнини, сватби и други тържества.";

export const performerEn = "The hosts describe the hall themselves: a stylishly furnished hall in a modern design, suitable for birthdays, anniversaries, weddings and other celebrations.";

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
    galleryLead: "Парти зала Number Five няма публикувани собствени фотографии на обекта.",
    galleryChip: "предстоят реални снимки",
    galleryEmptyTitle: "Тук ще стоят снимките на залата.",
    galleryEmptyBody: "Настоящият им сайт не съдържа фотографии на залата, годни за публикуване.",
    performerTitle: "Сезонът, с техните думи",
    tableBandQuote: "Стилно обзаведена зала в модерен дизайн.",
    pageTitleGallery: "Снимките предстоят",
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
    galleryLead: "Number Five Party Hall has no published photographs of the venue.",
    galleryChip: "real photographs to come",
    galleryEmptyTitle: "The photographs of the hall will stand here.",
    galleryEmptyBody: "Their current website holds no publishable photographs of the hall.",
    performerTitle: "The season, in their words",
    tableBandQuote: "A stylishly furnished hall in a modern design.",
    pageTitleGallery: "Photographs to come",
    pageTitleEvents: "The hall and its occasions",
    pageTitleMenu: "The place, in their words",
    pageTitleServices: "What is available",
  },
} as const;
