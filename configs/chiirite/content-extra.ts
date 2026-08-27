/**
 * Content pack (extension) — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Хотел „Чиирите“. Harvested 2026-08-26 from: собствения им сайт chiirite.bg — снимки, капацитет, контакти; събрани 2026-08-27.
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "Мястото",
    note: "Хотел „Чиирите“ не публикува куверт. Ето какво сами съобщават.",
    dishes: [
      {
        n: "Ресторант със 70 места",
      },
      {
        n: "Работно време",
        d: "7:30 – 23:00",
      },
      {
        n: "Мултифункционална зала",
        d: "с мултимедия",
      },
      {
        n: "Тераса и градина",
        d: "с изглед към планината",
      },
      {
        n: "Стаи за гостите",
        d: "луксозни, двойни и единични",
      },
      {
        n: "Запитване",
        d: "032 202 600 · manager@chiirite.bg",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "The place",
    note: "Chiirite publishes no per-head price. Here is what they state themselves.",
    dishes: [
      {
        n: "A restaurant seating 70",
      },
      {
        n: "Open",
        d: "7:30 – 23:00",
      },
      {
        n: "A multifunctional hall",
        d: "with multimedia",
      },
      {
        n: "Terrace and garden",
        d: "facing the mountain",
      },
      {
        n: "Rooms for guests",
        d: "luxury, double and single",
      },
      {
        n: "Enquiries",
        d: "032 202 600 · manager@chiirite.bg",
      },
    ],
  },
];

export const menuFooterBg =
  "Куверт и меню за тържество не са публикувани и предстои да бъдат предоставени.";

export const menuFooterEn =
  "A per-head price and celebration menu are not published and are still to be supplied.";

export const servicesBg = [
  "Ресторант със 70 места, работещ от 7:30 до 23:00",
  "Мултифункционална зала с мултимедийно оборудване",
  "Тераса и градина с изглед към планината",
  "Лоби бар и фоайе",
  "Стаи за гостите — луксозни, двойни и единични",
  "Паркинг на място",
];

export const servicesEn = [
  "A restaurant seating 70, open 7:30 to 23:00",
  "A multifunctional hall with multimedia equipment",
  "A terrace and garden with a view to the mountain",
  "A lobby bar and foyer",
  "Rooms for guests — luxury, double and single",
  "Parking on site",
];

export const techBg = [
  "Мултимедийно оборудване в залата",
  "Лоби бар",
  "Стаи: луксозни, двойни и единични",
  "Паркинг",
];

export const techEn = [
  "Multimedia equipment in the hall",
  "A lobby bar",
  "Rooms: luxury, double and single",
  "Parking",
];

export const eventsBg = [
  {
    title: "Сватбени тържества",
    body: "Хотелът поема сватбени тържества, фирмени събития и семинари, а гостите могат да останат за нощувка.",
    fact: "70 места",
  },
];

export const eventsEn = [
  {
    title: "Wedding celebrations",
    body: "The hotel takes on weddings, corporate events and seminars, and guests can stay the night.",
    fact: "70 seats",
  },
];

export const performerBg = "Хотелът е на Околовръстния път, местност Чиирите, с тераса и градина с изглед към планината.";

export const performerEn = "The hotel is on the ring road, in the Chiirite locality, with a terrace and garden facing the mountain.";

export const gallery: { slug: string; bg: string; en: string; tall?: boolean }[] = [
  {
    slug: "podredena-zala",
    bg: "Подредено за повод",
    en: "Set for an occasion",
  },
  {
    slug: "zalata",
    bg: "Залата",
    en: "The hall",
  },
  {
    slug: "restorantat",
    bg: "Ресторантът",
    en: "The restaurant",
  },
  {
    slug: "masite",
    bg: "Масите",
    en: "The tables",
  },
  {
    slug: "salonat",
    bg: "Салонът",
    en: "The salon",
  },
  {
    slug: "masata",
    bg: "Подредената маса",
    en: "The laid table",
  },
  {
    slug: "kuvertat",
    bg: "Кувертът",
    en: "The place setting",
  },
  {
    slug: "rozite",
    bg: "Розите и виното",
    en: "Roses and wine",
  },
  {
    slug: "yagodite",
    bg: "Ягоди и мехурчета",
    en: "Strawberries and bubbles",
    tall: true,
  },
  {
    slug: "barat",
    bg: "Барът",
    en: "The bar",
  },
  {
    slug: "foayeto",
    bg: "Фоайето",
    en: "The foyer",
  },
  {
    slug: "receptsiyata",
    bg: "Рецепцията",
    en: "Reception",
  },
  {
    slug: "sgradata",
    bg: "Хотелът отвън",
    en: "The hotel from outside",
  },
  {
    slug: "terasata",
    bg: "Терасата",
    en: "The terrace",
  },
  {
    slug: "gradinata",
    bg: "Градината",
    en: "The garden",
  },
  {
    slug: "izgledat",
    bg: "Изгледът",
    en: "The view",
  },
  {
    slug: "stayata",
    bg: "Стаята",
    en: "A room",
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
    menuTitle: "Залата и ресторантът",
    menuLead: "Хотел „Чиирите“ не публикува меню. Ето какво съобщават за самото място:",
    servicesTitle: "Услуги",
    servicesLead: "Ето какво се знае, че стои на разположение за деня.",
    techTitle: "В хотела",
    eventsTitle: "Поводи",
    eventsLead: "Домакините обявяват сватбени тържества, семинари и тиймбилдинг.",
    galleryTitle: "Мястото, както изглежда",
    galleryLead: "Седемнайсет от собствените им снимки: залата, подредените маси, фоайето и терасата.",
    galleryChip: "реални снимки на хотела",
    galleryEmptyTitle: "Тук стоят снимките на хотела.",
    galleryEmptyBody: "Снимките са техни собствени, от сайта им chiirite.bg.",
    performerTitle: "Мястото",
    tableBandQuote: "Зала, ресторант и стаи на един адрес.",
    pageTitleGallery: "Мястото в снимки",
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
    menuTitle: "The hall and the restaurant",
    menuLead: "Hotel Chiirite publishes no menu. Here is what they state about the place itself:",
    servicesTitle: "Services",
    servicesLead: "Here is what is known to be available for the day.",
    techTitle: "In the hotel",
    eventsTitle: "Occasions",
    eventsLead: "The hosts advertise wedding celebrations, seminars and team building.",
    galleryTitle: "The place as it looks",
    galleryLead: "Seventeen of their own photographs: the hall, the laid tables, the foyer and the terrace.",
    galleryChip: "real photographs of the hotel",
    galleryEmptyTitle: "The photographs of the hotel stand here.",
    galleryEmptyBody: "The photographs are their own, from their site chiirite.bg.",
    performerTitle: "The place",
    tableBandQuote: "A hall, a restaurant and rooms at one address.",
    pageTitleGallery: "The place in photographs",
    pageTitleEvents: "Occasions at the venue",
    pageTitleMenu: "The place, in their words",
    pageTitleServices: "What is available",
  },
} as const;
