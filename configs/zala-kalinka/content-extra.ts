/**
 * Content pack (extension) — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Зала „Калинка“. Harvested 2026-08-26 from: Google Business профила им (нямат сайт).
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "Мястото",
    note: "Зала „Калинка“ не публикува меню. Показано е само това, което сами съобщават.",
    dishes: [
      {
        n: "Зала за тържества",
        d: "в местност Беломорски",
      },
      {
        n: "Организация на място",
        d: "домакините поемат подготовката",
      },
      {
        n: "Работно време",
        d: "от 9 до 21 часа",
      },
      {
        n: "Уговаряне по телефон",
        d: "089 829 2880",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "The place",
    note: "Kalinka Hall publishes no menu. Only what they state themselves appears here.",
    dishes: [
      {
        n: "A hall for celebrations",
        d: "in the Belomorski locality",
      },
      {
        n: "Organised on site",
        d: "the hosts handle the preparation",
      },
      {
        n: "Opening hours",
        d: "from 9 until 21",
      },
      {
        n: "Arranged by telephone",
        d: "089 829 2880",
      },
    ],
  },
];

export const menuFooterBg =
  "Меню, куверт и кетъринг условия не са публикувани никъде и предстои да бъдат предоставени.";

export const menuFooterEn =
  "The menu, the per-head price and the catering terms are published nowhere and are still to be supplied.";

export const servicesBg = [
  "Зала за събития в местност Беломорски",
  "Организация на тържества на място",
  "Работно време от 9 до 21 часа",
  "Дати се уговарят по телефон",
];

export const servicesEn = [
  "An event hall in the Belomorski locality",
  "Celebrations are organised on site",
  "Open from 9 in the morning until 9 in the evening",
  "Dates are arranged by telephone",
];

export const techBg = [
  "Зала за тържества",
  "Организация на място",
];

export const techEn = [
  "A hall for celebrations",
  "Organised on site",
];

export const eventsBg = [
  {
    title: "Сватбени тържества",
    body: "Залата се предлага за сватби, а подготовката на деня се поема от домакините.",
    fact: "4.8 в Google",
  },
];

export const eventsEn = [
  {
    title: "Wedding celebrations",
    body: "The hall is offered for weddings, and the preparation of the day is handled by the hosts.",
    fact: "4.8 on Google",
  },
];

export const performerBg = "Залата работи от девет сутринта до девет вечерта, а гостите ѝ дават 4.8 в Google.";

export const performerEn = "The hall is open from nine in the morning until nine in the evening, and its guests rate it 4.8 on Google.";

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
      hint: "в залата",
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
      hint: "in the hall",
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
    menuLead: "Зала „Калинка“ не публикува меню. Ето какво съобщават за самото място:",
    servicesTitle: "Услуги",
    servicesLead: "Ето какво се знае, че стои на разположение за деня.",
    techTitle: "В залата",
    eventsTitle: "Поводи",
    eventsLead: "Залата се предлага за тържества, а организацията се поема на място.",
    galleryTitle: "Мястото, както изглежда",
    galleryLead: "Зала „Калинка“ няма публикувани собствени фотографии на обекта.",
    galleryChip: "предстоят реални снимки",
    galleryEmptyTitle: "Тук ще стоят снимките на залата.",
    galleryEmptyBody: "Домакините нямат собствен сайт, а профилът им в Google не съдържа фотографии на залата, годни за публикуване.",
    performerTitle: "Сезонът, с техните думи",
    tableBandQuote: "Една зала, която поема целия ден.",
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
    menuTitle: "The place",
    menuLead: "Kalinka Hall publishes no menu. Here is what they state about the place itself:",
    servicesTitle: "Services",
    servicesLead: "Here is what is known to be available for the day.",
    techTitle: "In the hall",
    eventsTitle: "Occasions",
    eventsLead: "The hall is offered for celebrations, with the organising handled on site.",
    galleryTitle: "The place as it looks",
    galleryLead: "Kalinka Hall has no published photographs of the venue.",
    galleryChip: "real photographs to come",
    galleryEmptyTitle: "The photographs of the hall will stand here.",
    galleryEmptyBody: "The hosts have no website of their own, and their Google profile holds no publishable photographs of the hall.",
    performerTitle: "The season, in their words",
    tableBandQuote: "One hall that takes on the whole day.",
    pageTitleGallery: "Photographs to come",
    pageTitleEvents: "The hall and its occasions",
    pageTitleMenu: "The place, in their words",
    pageTitleServices: "What is available",
  },
} as const;
