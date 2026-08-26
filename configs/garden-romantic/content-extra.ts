/**
 * Content pack (extension) — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Ресторант „Романтик“. Harvested 2026-08-26 from: Facebook страницата им и Google Business профила.
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "Мястото",
    note: "Ресторант „Романтик“ не публикува меню. Показано е само това, което сами съобщават.",
    dishes: [
      {
        n: "Континентална кухня",
        d: "както сами описват заведението",
      },
      {
        n: "Градина",
        d: "места за гости на открито",
      },
      {
        n: "Отворен до полунощ",
        d: "всеки ден",
      },
      {
        n: "Резервация по телефон",
        d: "087 700 7375",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "The place",
    note: "Restaurant Romantic publishes no menu. Only what they state themselves appears here.",
    dishes: [
      {
        n: "Continental cuisine",
        d: "as they describe the place themselves",
      },
      {
        n: "A garden",
        d: "outdoor seating for guests",
      },
      {
        n: "Open until midnight",
        d: "every day",
      },
      {
        n: "Booking by telephone",
        d: "087 700 7375",
      },
    ],
  },
];

export const menuFooterBg =
  "Меню, куверт и кетъринг условия не са публикувани никъде и предстои да бъдат предоставени.";

export const menuFooterEn =
  "The menu, the per-head price and the catering terms are published nowhere and are still to be supplied.";

export const servicesBg = [
  "Ресторант с градина в жк Тракия",
  "Места за гости на открито",
  "Отворен всеки ден до полунощ",
  "Континентална кухня",
];

export const servicesEn = [
  "A restaurant with a garden in the Trakia district",
  "Outdoor seating for guests",
  "Open every day until midnight",
  "Continental cuisine",
];

export const techBg = [
  "Градина с места на открито",
  "Континентална кухня",
];

export const techEn = [
  "A garden with outdoor seating",
  "Continental cuisine",
];

export const eventsBg = [
  {
    title: "Всеки повод",
    body: "Домакините описват мястото като атмосфера, която превръща всеки повод в празник.",
    fact: "Градина на открито",
  },
];

export const eventsEn = [
  {
    title: "Any occasion",
    body: "The hosts describe the place as an atmosphere that turns any occasion into a celebration.",
    fact: "An open-air garden",
  },
];

export const performerBg = "Домакините сами го описват така: вкус, който събира хората, и уют, който предразполага към дълги разговори.";

export const performerEn = "The hosts describe it themselves: a taste that brings people together, and a comfort that invites long conversations.";

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
    menuLead: "Ресторант „Романтик“ не публикува меню. Ето какво съобщават за самото място:",
    servicesTitle: "Услуги",
    servicesLead: "Ето какво се знае, че стои на разположение за деня.",
    techTitle: "В градината",
    eventsTitle: "Поводи",
    eventsLead: "Мястото се предлага за поводи от всякакъв вид.",
    galleryTitle: "Мястото, както изглежда",
    galleryLead: "Ресторант „Романтик“ няма публикувани собствени фотографии на обекта.",
    galleryChip: "предстоят реални снимки",
    galleryEmptyTitle: "Тук ще стоят снимките на градината.",
    galleryEmptyBody: "Домакините нямат собствен сайт, а снимките им живеят само във Facebook и не са предоставени за публикуване.",
    performerTitle: "Сезонът, с техните думи",
    tableBandQuote: "Вкус, който събира хората.",
    pageTitleGallery: "Снимките предстоят",
    pageTitleEvents: "Всеки повод намира мястото си",
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
    menuLead: "Restaurant Romantic publishes no menu. Here is what they state about the place itself:",
    servicesTitle: "Services",
    servicesLead: "Here is what is known to be available for the day.",
    techTitle: "In the garden",
    eventsTitle: "Occasions",
    eventsLead: "The place is offered for occasions of every kind.",
    galleryTitle: "The place as it looks",
    galleryLead: "Restaurant Romantic has no published photographs of the venue.",
    galleryChip: "real photographs to come",
    galleryEmptyTitle: "The photographs of the garden will stand here.",
    galleryEmptyBody: "The hosts have no website of their own, and their photographs live only on Facebook and have not been released for publication.",
    performerTitle: "The season, in their words",
    tableBandQuote: "A taste that brings people together.",
    pageTitleGallery: "Photographs to come",
    pageTitleEvents: "Every occasion finds its place",
    pageTitleMenu: "The place, in their words",
    pageTitleServices: "What is available",
  },
} as const;
