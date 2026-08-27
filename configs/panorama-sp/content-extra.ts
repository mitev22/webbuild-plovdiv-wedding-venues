/**
 * Content pack (extension) — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Ресторант „Панорама“. Harvested 2026-08-26 from: собствения им сайт sphotel.net (Парк хотел „Санкт Петербург“, страница /dining/panorama и /halls) — снимки, капацитет, кухня; събрани 2026-08-27.
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "kuhnyata",
    label: "Кухнята",
    note: "„Панорама“ не публикува куверт за тържество. Ето какво сами съобщават за кухнята.",
    dishes: [
      {
        n: "Гръцка и средиземноморска кухня",
      },
      {
        n: "Остъклена кухня",
        d: "ястията се приготвят пред гостите",
      },
      {
        n: "120 места",
        d: "на 22-ия етаж",
      },
      {
        n: "Лятна градина",
        d: "на открито",
      },
      {
        n: "Работно време",
        d: "18:00 – 24:00",
      },
      {
        n: "Запитване",
        d: "088 868 6817",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "kuhnyata",
    label: "The kitchen",
    note: "Panorama publishes no per-head price for a celebration. Here is what they state about the kitchen.",
    dishes: [
      {
        n: "Greek and Mediterranean cooking",
      },
      {
        n: "A glass-walled kitchen",
        d: "dishes prepared in view of the guests",
      },
      {
        n: "120 seats",
        d: "on the 22nd floor",
      },
      {
        n: "A summer garden",
        d: "outdoors",
      },
      {
        n: "Open",
        d: "18:00 – 24:00",
      },
      {
        n: "Enquiries",
        d: "088 868 6817",
      },
    ],
  },
];

export const menuFooterBg =
  "Кухнята е гръцка и средиземноморска, приготвяна в остъклена кухня пред очите на гостите. Куверт за тържество не е публикуван и предстои да бъде предоставен.";

export const menuFooterEn =
  "The kitchen is Greek and Mediterranean, cooked in a glass-walled kitchen in view of the guests. A per-head price for a celebration is not published and is still to be supplied.";

export const servicesBg = [
  "Ресторант на 22-ия етаж със 120 места",
  "Панорамен изглед към Пловдив и Родопите",
  "Открита лятна градина",
  "Гръцка и средиземноморска кухня от остъклена кухня",
  "Зали Пълдин, Нева и Дружба в хотела",
];

export const servicesEn = [
  "A restaurant on the 22nd floor seating 120",
  "A panoramic view over Plovdiv and the Rhodopes",
  "An open summer garden",
  "Greek and Mediterranean cooking from a glass-walled kitchen",
  "The Puldin, Neva and Druzhba halls in the hotel",
];

export const techBg = [
  "Ресторантът работи от 18:00 до 24:00",
  "Остъклена кухня, видима за гостите",
  "Зала Пълдин: 5.20 × 17.30 м, до 300 места театрално",
  "Зала Нева: 5.20 × 11.90 м · Зала Дружба: 6.40 × 12 м",
];

export const techEn = [
  "The restaurant is open 18:00–24:00",
  "A glass-walled kitchen, visible to guests",
  "Puldin hall: 5.20 × 17.30 m, up to 300 theatre-style",
  "Neva hall: 5.20 × 11.90 m · Druzhba hall: 6.40 × 12 m",
];

export const eventsBg = [
  {
    title: "Семейни празненства над града",
    body: "Ресторантът се предлага за семейни празненства и събирания, а за по-големите поводи хотелът има зали на по-долните етажи.",
    fact: "120 места",
  },
];

export const eventsEn = [
  {
    title: "Family celebrations above the city",
    body: "The restaurant is offered for family celebrations and gatherings, and for larger occasions the hotel has halls on the lower floors.",
    fact: "120 seats",
  },
];

export const performerBg = "Ресторантът е на 22-ия етаж на Парк хотел „Санкт Петербург“, с панорамен изглед към Пловдив и Родопите.";

export const performerEn = "The restaurant is on the 22nd floor of Park Hotel Sankt Peterburg, with a panoramic view over Plovdiv and the Rhodopes.";

export const gallery: { slug: string; bg: string; en: string; tall?: boolean }[] = [
  {
    slug: "izgledat",
    bg: "Изгледът от 22-ия етаж",
    en: "The view from the 22nd floor",
    tall: true,
  },
  {
    slug: "restorantat",
    bg: "Ресторантът",
    en: "The restaurant",
  },
  {
    slug: "zalata",
    bg: "Залата",
    en: "The dining room",
  },
  {
    slug: "masata",
    bg: "Подредената маса",
    en: "The laid table",
  },
  {
    slug: "parviyat-tants",
    bg: "Първият танц",
    en: "The first dance",
  },
  {
    slug: "gostite",
    bg: "Гостите на масата",
    en: "Guests at the table",
  },
  {
    slug: "grada-nosht",
    bg: "Градът вечер",
    en: "The city at night",
  },
  {
    slug: "kulata",
    bg: "Хотелът отвън",
    en: "The hotel from outside",
  },
  {
    slug: "pianoto",
    bg: "Пианото",
    en: "The piano",
  },
  {
    slug: "vinoto",
    bg: "Чашите",
    en: "The glasses",
  },
  {
    slug: "vhodat",
    bg: "Входът към залата",
    en: "The entrance to the hall",
  },
  {
    slug: "tsvetyata",
    bg: "Цветята",
    en: "The flowers",
  },
  {
    slug: "dvoykata",
    bg: "Преди повода",
    en: "Before the occasion",
  },
  {
    slug: "foayeto",
    bg: "Фоайето",
    en: "The foyer",
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
    menuTitle: "Кухнята",
    menuLead: "Гръцка и средиземноморска кухня, приготвяна в остъклена кухня пред гостите.",
    servicesTitle: "Услуги",
    servicesLead: "Ето какво се знае, че стои на разположение за деня.",
    techTitle: "В сградата",
    eventsTitle: "Поводи",
    eventsLead: "Мястото се предлага за поводи от всякакъв вид.",
    galleryTitle: "Мястото, както изглежда",
    galleryLead: "Четиринайсет от собствените им снимки: изгледът, ресторантът и вечерите в него.",
    galleryChip: "реални снимки на ресторанта",
    galleryEmptyTitle: "Тук стоят снимките на ресторанта.",
    galleryEmptyBody: "Снимките са техни собствени, от сайта им sphotel.net.",
    performerTitle: "Мястото",
    tableBandQuote: "Двайсет и два етажа над всичко останало.",
    pageTitleGallery: "Мястото в снимки",
    pageTitleEvents: "Поводите на мястото",
    pageTitleMenu: "Кухнята",
    pageTitleServices: "Какво стои на разположение",
  },
  en: {
    inquire: "Enquire",
    menuBtn: "Menu",
    closeBtn: "Close",
    galleryMore: "The full gallery",
    exploreTitle: "Explore further",
    menuTitle: "The kitchen",
    menuLead: "Greek and Mediterranean cooking, prepared in a glass-walled kitchen in view of the guests.",
    servicesTitle: "Services",
    servicesLead: "Here is what is known to be available for the day.",
    techTitle: "In the building",
    eventsTitle: "Occasions",
    eventsLead: "The place is offered for occasions of every kind.",
    galleryTitle: "The place as it looks",
    galleryLead: "Fourteen of their own photographs: the view, the restaurant and the evenings in it.",
    galleryChip: "real photographs of the restaurant",
    galleryEmptyTitle: "The photographs of the restaurant stand here.",
    galleryEmptyBody: "The photographs are their own, from their site sphotel.net.",
    performerTitle: "The place",
    tableBandQuote: "Twenty-two floors above everything else.",
    pageTitleGallery: "The place in photographs",
    pageTitleEvents: "Occasions at the venue",
    pageTitleMenu: "The kitchen",
    pageTitleServices: "What is available",
  },
} as const;
