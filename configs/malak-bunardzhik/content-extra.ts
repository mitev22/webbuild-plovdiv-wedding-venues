/**
 * Content pack — extension.
 * The venue publishes no menu, no AV rider and no prices. Nothing is invented to fill
 * those shapes. Gallery is empty: the group page exposes no photograph of this site.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "kuhnya",
    label: "Кухнята",
    note: "Заведението не публикува меню и ценоразпис. Показано е само това, което е обявено за самото място.",
    dishes: [
      {
        n: "Кухня на място",
      },
      {
        n: "Работно време 10:00 – 01:00 ч.",
        d: "всеки ден от седмицата",
      },
      {
        n: "Зала и градина",
        d: "използвани заедно за големи тържества",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "kuhnya",
    label: "The kitchen",
    note: "The venue publishes no menu and no price list. Only what is actually stated about the place appears here.",
    dishes: [
      {
        n: "A kitchen on site",
      },
      {
        n: "Open 10:00 – 01:00",
        d: "every day of the week",
      },
      {
        n: "Hall and garden",
        d: "used together for large celebrations",
      },
    ],
  },
];

export const menuFooterBg = "Меню, куверт и ценоразпис не са публикувани никъде и предстои да бъдат предоставени.";
export const menuFooterEn = "No menu, per-head price or price list is published anywhere; these are still to be supplied.";

export const servicesBg = [
  "Зала в парк „Бунарджик“",
  "Градина под дърветата",
  "Кухня на място",
  "Работно време до 01:00 часа",
  "Локация в центъра на Пловдив",
  "Част от Ресторанти „Южен Полъх“",
];
export const servicesEn = [
  "A hall in Bunardzhik Park",
  "A garden under the trees",
  "A kitchen on site",
  "Open until 01:00",
  "A central Plovdiv location",
  "Part of Yuzhen Polah Restaurants",
];

export const techBg = [];
export const techEn = [];

export const eventsBg = [
  {
    title: "Сватбени тържества",
    body: "Залата и градината се използват заедно, когато гостите са много.",
    fact: "Зала и градина",
  },
  {
    title: "Семейни празници",
    body: "Кръщенета, юбилеи и семейни вечери в заведение с дългогодишна история в Пловдив.",
    fact: "В парка",
  },
  {
    title: "Летни вечери в градината",
    body: "Градината е част от парк „Бунарджик“ и работи до един часа след полунощ.",
    fact: "До 01:00 часа",
  },
  {
    title: "Фирмени вечери",
    body: "Централната локация спестява транспорт на гостите от целия град.",
    fact: "Център на Пловдив",
  },
];
export const eventsEn = [
  {
    title: "Wedding celebrations",
    body: "The hall and the garden are used together when the guest list is large.",
    fact: "Hall and garden",
  },
  {
    title: "Family celebrations",
    body: "Christenings, anniversaries and family dinners in a restaurant with a long Plovdiv history.",
    fact: "In the park",
  },
  {
    title: "Summer evenings in the garden",
    body: "The garden is part of Bunardzhik Park and serves until one in the morning.",
    fact: "Until 01:00",
  },
  {
    title: "Corporate dinners",
    body: "The central location saves your guests a drive from anywhere in the city.",
    fact: "Central Plovdiv",
  },
];

export const performerBg =
  "Заведението е част от групата Ресторанти „Южен Полъх“, която стопанисва още „Южен Полъх“ на бул. Свобода, „Тракия New Place“, „Полиграфия“ и обекта в Кичук Париж. Връзка с Малкия Бунарджик: 0878 711 777, 0884 174 045 и 032 642 640.";
export const performerEn =
  "The venue belongs to the Yuzhen Polah restaurant group, which also runs Yuzhen Polah on Svoboda Blvd, Trakia New Place, Poligrafia and the Kichuk Paris site. To reach Malkia Bunardzhik: 0878 711 777, 0884 174 045 and 032 642 640.";

export const gallery: { slug: string; bg: string; en: string; tall?: boolean }[] = [];

export const exploreArt = [
  { src: "/atmosphere/m-s1-table-840.webp?v=1", alt: "" },
  { src: "/atmosphere/dusk-band-840.webp?v=1", alt: "" },
  { src: "/atmosphere/og-card.jpg?v=1", alt: "" },
];

export const navPages = {
  bg: [
    {
      href: "/",
      label: "Начало",
      hint: "денят в парка",
    },
    {
      href: "/menu/",
      label: "Кухнята",
      hint: "ресторантът",
    },
    {
      href: "/sabitia/",
      label: "Поводи",
      hint: "не само сватби",
    },
    {
      href: "/uslugi/",
      label: "Услуги",
      hint: "в заведението",
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
      hint: "the day in the park",
    },
    {
      href: "/en/menu/",
      label: "Kitchen",
      hint: "the restaurant",
    },
    {
      href: "/en/sabitia/",
      label: "Occasions",
      hint: "not only weddings",
    },
    {
      href: "/en/uslugi/",
      label: "Services",
      hint: "at the venue",
    },
    {
      href: "/en/galeria/",
      label: "Gallery",
      hint: "to follow",
    },
    {
      href: "/en/#sboguvane",
      label: "Inquire",
      hint: "within 2 business days",
    },
  ],
} as const;

export const extraStrings = {
  bg: {
    inquire: "Запитване",
    menuBtn: "Меню",
    closeBtn: "Затвори",
    galleryMore: "Цялата галерия",
    exploreTitle: "Разгледайте още",
    menuTitle: "Кухнята",
    menuLead: "Заведението не публикува меню. Ето какво е обявено за мястото:",
    servicesTitle: "Услуги",
    servicesLead: "Мястото е зала и градина в един парк. Ето какво е обявено.",
    techTitle: "В залата",
    eventsTitle: "Не само сватби",
    eventsLead: "Залата и градината поемат всеки повод в центъра на Пловдив.",
    galleryTitle: "Мястото, както изглежда",
    galleryLead: "Груповият сайт не показва фотографии на този обект.",
    galleryChip: "предстоят реални снимки",
    galleryEmptyTitle: "Тук ще стоят снимките на залата и градината.",
    galleryEmptyBody: "Малкия Бунарджик няма своя страница: обектът е един ред на груповия сайт, а в HTML на тази страница няма нито една фотография на заведението. Галерията остава празна нарочно, вместо да бъде запълнена със стокови или генерирани кадри.",
    performerTitle: "Групата",
    tableBandQuote: "Една дълга маса под дърветата на парка. Останалото е музика.",
    pageTitleGallery: "Снимките предстоят",
    pageTitleEvents: "Всеки повод намира своето място",
    pageTitleMenu: "Кухнята, с техните думи",
    pageTitleServices: "Всичко за деня, в парка",
  },
  en: {
    inquire: "Inquire",
    menuBtn: "Menu",
    closeBtn: "Close",
    galleryMore: "Full gallery",
    exploreTitle: "Explore more",
    menuTitle: "The kitchen",
    menuLead: "The venue publishes no menu. Here is what is actually stated about the place:",
    servicesTitle: "Services",
    servicesLead: "The place is a hall and a garden inside a park. Here is what is stated.",
    techTitle: "In the hall",
    eventsTitle: "Not only weddings",
    eventsLead: "The hall and the garden carry every occasion in central Plovdiv.",
    galleryTitle: "The place, as it looks",
    galleryLead: "The group site shows no photographs of this venue.",
    galleryChip: "real photos to follow",
    galleryEmptyTitle: "Photographs of the hall and garden will live here.",
    galleryEmptyBody: "Malkia Bunardzhik has no page of its own: it is one entry on the group site, and that page's HTML contains not a single photograph of the venue. This gallery is deliberately left empty rather than filled with stock or generated imagery.",
    performerTitle: "The group",
    tableBandQuote: "One long table under the trees of the park. The rest is music.",
    pageTitleGallery: "Photography to follow",
    pageTitleEvents: "Every occasion finds its place",
    pageTitleMenu: "The kitchen, in their words",
    pageTitleServices: "Everything for the day, in the park",
  },
} as const;
