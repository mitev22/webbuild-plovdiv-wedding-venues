/**
 * Content pack (extension) — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Сватбена зала „Фиеста“. Harvested 2026-08-26 from: собствения им сайт svatbensalonfiesta.com и Google Business профила | заглавна снимка от публичната им Facebook страница (https://www.facebook.com/p/Сватбена-зала-Фиеста-100057313455163/), 2026-08-27.
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "Мястото",
    note: "Сватбена зала „Фиеста“ не публикува меню. Показано е само това, което сами съобщават.",
    dishes: [
      {
        n: "Сватбена зала",
        d: "на бул. „Васил Априлов“ 152А",
      },
      {
        n: "Отворена всеки ден",
        d: "от 9 до 23 часа",
      },
      {
        n: "Северната част на Пловдив",
        d: "с лесен достъп от целия град",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "The place",
    note: "Fiesta Wedding Hall publishes no menu. Only what they state themselves appears here.",
    dishes: [
      {
        n: "A wedding hall",
        d: "at 152A Vasil Aprilov Boulevard",
      },
      {
        n: "Open every day",
        d: "from 9 until 23",
      },
      {
        n: "The northern part of Plovdiv",
        d: "easily reached from across the city",
      },
    ],
  },
];

export const menuFooterBg =
  "Меню, куверт и кетъринг условия не са публикувани никъде и предстои да бъдат предоставени.";

export const menuFooterEn =
  "The menu, the per-head price and the catering terms are published nowhere and are still to be supplied.";

export const servicesBg = [
  "Сватбена зала на бул. „Васил Априлов“ 152А",
  "Работно време всеки ден от 9 до 23 часа",
  "Северната част на Пловдив",
];

export const servicesEn = [
  "A wedding hall at 152A Vasil Aprilov Boulevard",
  "Open every day from 9 in the morning until 11 at night",
  "The northern part of Plovdiv",
];

export const techBg = [
  "Сватбена зала",
  "Отворена всеки ден",
];

export const techEn = [
  "A wedding hall",
  "Open every day",
];

export const eventsBg = [
  {
    title: "Сватбени тържества",
    body: "Залата се обявява като сватбена и това е единственият повод, за който се предлага.",
    fact: "5.0 в Google",
  },
];

export const eventsEn = [
  {
    title: "Wedding celebrations",
    body: "The hall is listed as a wedding venue and that is the only occasion it is offered for.",
    fact: "5.0 on Google",
  },
];

export const performerBg = "Залата работи всеки ден от девет сутринта до единайсет вечерта.";

export const performerEn = "The hall is open every day from nine in the morning until eleven at night.";

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
      hint: "сватбеният ден",
    },
    {
      href: "/menu/",
      label: "Мястото",
      hint: "какво се знае",
    },
    {
      href: "/sabitia/",
      label: "Поводи",
      hint: "само сватби",
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
      hint: "the wedding day",
    },
    {
      href: "/en/menu/",
      label: "The place",
      hint: "what is known",
    },
    {
      href: "/en/sabitia/",
      label: "Occasions",
      hint: "weddings only",
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
    menuLead: "Сватбена зала „Фиеста“ не публикува меню. Ето какво съобщават за самото място:",
    servicesTitle: "Услуги",
    servicesLead: "Ето какво се знае, че стои на разположение за деня.",
    techTitle: "В залата",
    eventsTitle: "Поводи",
    eventsLead: "Залата се предлага само за сватбени тържества.",
    galleryTitle: "Мястото, както изглежда",
    galleryLead: "Сватбена зала „Фиеста“ няма публикувани собствени фотографии на обекта.",
    galleryChip: "предстоят реални снимки",
    galleryEmptyTitle: "Тук ще стоят снимките на залата.",
    galleryEmptyBody: "Заглавната снимка е тяхна, от Facebook. Останалите снимки на мястото предстоят от домакините.",
    performerTitle: "Сезонът, с техните думи",
    tableBandQuote: "Сватбена зала, отворена всеки ден.",
    pageTitleGallery: "Снимките предстоят",
    pageTitleEvents: "Зала само за сватби",
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
    menuLead: "Fiesta Wedding Hall publishes no menu. Here is what they state about the place itself:",
    servicesTitle: "Services",
    servicesLead: "Here is what is known to be available for the day.",
    techTitle: "In the hall",
    eventsTitle: "Occasions",
    eventsLead: "The hall is offered for wedding celebrations only.",
    galleryTitle: "The place as it looks",
    galleryLead: "Fiesta Wedding Hall has no published photographs of the venue.",
    galleryChip: "real photographs to come",
    galleryEmptyTitle: "The photographs of the hall will stand here.",
    galleryEmptyBody: "The header photograph is theirs, from Facebook. The rest of the venue photography is still to come from the hosts.",
    performerTitle: "The season, in their words",
    tableBandQuote: "A wedding hall, open every day.",
    pageTitleGallery: "Photographs to come",
    pageTitleEvents: "A weddings-only hall",
    pageTitleMenu: "The place, in their words",
    pageTitleServices: "What is available",
  },
} as const;
