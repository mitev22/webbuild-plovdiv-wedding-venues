/**
 * Content pack (extension) — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Комплекс „Острова“. Harvested 2026-08-26 from: собствения им сайт ostrova-plovdiv.com — снимки, капацитет, контакти; събрани 2026-08-27. Стокови снимки (Shutterstock/iStock) от сайта им са изключени..
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "denyat",
    label: "Денят",
    note: "„Острова“ не публикува куверт. Ето какво сами съобщават за организацията.",
    dishes: [
      {
        n: "160 седящи места",
        d: "в ресторанта",
      },
      {
        n: "Обособен дансинг",
      },
      {
        n: "Меню по желание",
        d: "съставя се с младоженците",
      },
      {
        n: "Безплатен паркинг",
        d: "за гостите",
      },
      {
        n: "Препоръки за изпълнители",
        d: "украса, звук, осветление, фото и видео",
      },
      {
        n: "Запитване",
        d: "088 774 2011 · hotelostrova@abv.bg",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "denyat",
    label: "The day",
    note: "Ostrova publishes no per-head price. Here is what they state about the planning.",
    dishes: [
      {
        n: "160 seats",
        d: "in the restaurant",
      },
      {
        n: "A dedicated dance floor",
      },
      {
        n: "A menu to your wishes",
        d: "built together with the couple",
      },
      {
        n: "Free parking",
        d: "for guests",
      },
      {
        n: "Supplier recommendations",
        d: "decoration, sound, lighting, photo and video",
      },
      {
        n: "Enquiries",
        d: "088 774 2011 · hotelostrova@abv.bg",
      },
    ],
  },
];

export const menuFooterBg =
  "Менюто се съставя по желание на младоженците. Куверт не е публикуван и предстои да бъде предоставен.";

export const menuFooterEn =
  "The menu is put together to the couple's wishes. A per-head price is not published and is still to be supplied.";

export const servicesBg = [
  "Ресторант със 160 седящи места и обособен дансинг",
  "Комплексът е до Гребния канал, край реката",
  "Градина, двор и басейн на място",
  "Безплатен паркинг за гостите",
  "Съдействие с координацията на деня и с менюто",
  "Препоръки за украса, звук, осветление и фотограф",
  "Стаи за гостите, които остават",
];

export const servicesEn = [
  "A restaurant seating 160 with its own dance floor",
  "The complex sits by the Rowing Canal, beside the river",
  "A garden, a courtyard and a pool on site",
  "Free parking for guests",
  "Help with coordinating the day and building the menu",
  "Recommendations for decoration, sound, lighting and a photographer",
  "Rooms for guests who stay",
];

export const techBg = [
  "Обособен дансинг в ресторанта",
  "Безплатен паркинг за гостите",
  "Басейн и релакс център в комплекса",
  "Стаи и студиа за нощувка",
];

export const techEn = [
  "A dedicated dance floor in the restaurant",
  "Free parking for guests",
  "A pool and a relax centre in the complex",
  "Rooms and studios for the night",
];

export const eventsBg = [
  {
    title: "Сватби край реката",
    body: "Комплексът поема сватбени тържества в ресторанта със 160 места и дансинг, а гостите могат да останат за нощувка.",
    fact: "160 места",
  },
];

export const eventsEn = [
  {
    title: "Weddings by the river",
    body: "The complex takes on weddings in its 160-seat restaurant with a dance floor, and guests can stay the night.",
    fact: "160 seats",
  },
];

export const performerBg = "Комплексът е на ул. „Парк култура и отдих“ 40, до Гребния канал в Пловдив, сред зеленина край реката.";

export const performerEn = "The complex is at 40 Park kultura i otdih Street, by the Rowing Canal in Plovdiv, in greenery beside the river.";

export const gallery: { slug: string; bg: string; en: string; tall?: boolean }[] = [
  {
    slug: "rekata",
    bg: "Мястото край реката",
    en: "The place by the river",
  },
  {
    slug: "otgore",
    bg: "Комплексът отгоре",
    en: "The complex from above",
  },
  {
    slug: "masite",
    bg: "Масите",
    en: "The tables",
  },
  {
    slug: "tsvetnata-stena",
    bg: "Цветната стена",
    en: "The flower wall",
  },
  {
    slug: "mladozhentsite",
    bg: "Масата на младоженците",
    en: "The couple's table",
  },
  {
    slug: "zalata",
    bg: "Залата",
    en: "The hall",
  },
  {
    slug: "pod-navesa",
    bg: "Под навеса",
    en: "Under the canopy",
  },
  {
    slug: "dulgata-masa",
    bg: "Дългата маса",
    en: "The long table",
  },
  {
    slug: "ukrasata",
    bg: "Украсата",
    en: "The decoration",
    tall: true,
  },
  {
    slug: "buketite",
    bg: "Букетите",
    en: "The bouquets",
    tall: true,
  },
  {
    slug: "lampichkite",
    bg: "Лампичките",
    en: "The lights",
    tall: true,
  },
  {
    slug: "gradinata-vecher",
    bg: "Градината вечер",
    en: "The garden at night",
    tall: true,
  },
  {
    slug: "gradinata",
    bg: "Градината",
    en: "The garden",
  },
  {
    slug: "alejata",
    bg: "Алеята",
    en: "The path",
  },
  {
    slug: "dvorat",
    bg: "Дворът",
    en: "The courtyard",
  },
  {
    slug: "restorantat",
    bg: "Ресторантът",
    en: "The restaurant",
  },
  {
    slug: "basejnat",
    bg: "Басейнът",
    en: "The pool",
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
    menuTitle: "Денят",
    menuLead: "Менюто се съставя с младоженците. Ето какво сами съобщават за организацията.",
    servicesTitle: "Услуги",
    servicesLead: "Ето какво се знае, че стои на разположение за деня.",
    techTitle: "В комплекса",
    eventsTitle: "Поводи",
    eventsLead: "Мястото се предлага за поводи от всякакъв вид.",
    galleryTitle: "Мястото, както изглежда",
    galleryLead: "Седемнайсет от собствените им снимки: мястото край реката, залата, градината и подредените маси.",
    galleryChip: "реални снимки на комплекса",
    galleryEmptyTitle: "Тук стоят снимките на комплекса.",
    galleryEmptyBody: "Снимките са техни собствени, от сайта им ostrova-plovdiv.com.",
    performerTitle: "Мястото",
    tableBandQuote: "Комплекс, запазен за деня.",
    pageTitleGallery: "Мястото в снимки",
    pageTitleEvents: "Поводите на мястото",
    pageTitleMenu: "Денят, с техните думи",
    pageTitleServices: "Какво стои на разположение",
  },
  en: {
    inquire: "Enquire",
    menuBtn: "Menu",
    closeBtn: "Close",
    galleryMore: "The full gallery",
    exploreTitle: "Explore further",
    menuTitle: "The day",
    menuLead: "The menu is built with the couple. Here is what they state about the planning.",
    servicesTitle: "Services",
    servicesLead: "Here is what is known to be available for the day.",
    techTitle: "In the complex",
    eventsTitle: "Occasions",
    eventsLead: "The place is offered for occasions of every kind.",
    galleryTitle: "The place as it looks",
    galleryLead: "Seventeen of their own photographs: the place by the river, the hall, the garden and the laid tables.",
    galleryChip: "real photographs of the complex",
    galleryEmptyTitle: "The photographs of the complex stand here.",
    galleryEmptyBody: "The photographs are their own, from their site ostrova-plovdiv.com.",
    performerTitle: "The place",
    tableBandQuote: "A complex kept for the day.",
    pageTitleGallery: "The place in photographs",
    pageTitleEvents: "Occasions at the venue",
    pageTitleMenu: "The day, in their words",
    pageTitleServices: "What is available",
  },
} as const;
