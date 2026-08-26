/**
 * Content pack (extension) — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Crystal Palace. Harvested 2026-08-26 from: Facebook страницата им (facebook.com/crystalpalaceplovdiv) и Google Business профила.
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "Мястото",
    note: "Crystal Palace не публикува меню. Показано е само това, което сами съобщават.",
    dishes: [
      {
        n: "Сватбен салон",
        d: "салонът се използва само за сватбени тържества",
      },
      {
        n: "Места на открито",
        d: "част от местата за гости са навън",
      },
      {
        n: "Хранене на място",
      },
      {
        n: "Онлайн резервация",
        d: "дата може да се запази и онлайн",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "The place",
    note: "Crystal Palace publishes no menu. Only what they state themselves appears here.",
    dishes: [
      {
        n: "Wedding salon",
        d: "the salon is used for weddings only",
      },
      {
        n: "Outdoor seating",
        d: "some of the guest seating is outdoors",
      },
      {
        n: "Dining on site",
      },
      {
        n: "Online reservation",
        d: "a date can also be held online",
      },
    ],
  },
];

export const menuFooterBg =
  "Меню, куверт и кетъринг условия не са публикувани никъде и предстои да бъдат предоставени.";

export const menuFooterEn =
  "The menu, the per-head price and the catering terms are published nowhere and are still to be supplied.";

export const servicesBg = [
  "Сватбен салон в Пловдив",
  "Места за гости на открито",
  "Хранене на място",
  "Онлайн резервация на дата",
  "Свободни дати, обявявани сезон по сезон",
];

export const servicesEn = [
  "A wedding salon in Plovdiv",
  "Outdoor seating for guests",
  "Dining on site",
  "Online reservation of a date",
  "Free dates announced season by season",
];

export const techBg = [
  "Салон само за сватби",
  "Открита част за гости",
];

export const techEn = [
  "A weddings-only salon",
  "An outdoor area for guests",
];

export const eventsBg = [
  {
    title: "Сватби",
    body: "Салонът се обявява като сватбен и това е единственият повод, за който домакините го предлагат.",
    fact: "Единствената специализация",
  },
];

export const eventsEn = [
  {
    title: "Weddings",
    body: "The salon is listed as a wedding venue and that is the only occasion the hosts offer it for.",
    fact: "The only specialism",
  },
];

export const performerBg = "Свободните дати за следващия сезон се обявяват от самите домакини на страницата им.";

export const performerEn = "Free dates for the coming season are announced by the hosts themselves on their page.";

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
    menuLead: "Crystal Palace не публикува меню. Ето какво съобщават за самия салон:",
    servicesTitle: "Услуги",
    servicesLead: "Ето какво се знае, че стои на разположение за деня.",
    techTitle: "В салона",
    eventsTitle: "Поводи",
    eventsLead: "Салонът се предлага само за сватбени тържества.",
    galleryTitle: "Салонът, както изглежда",
    galleryLead: "Crystal Palace няма публикувани собствени фотографии на обекта.",
    galleryChip: "предстоят реални снимки",
    galleryEmptyTitle: "Тук ще стоят снимките на салона.",
    galleryEmptyBody: "Домакините нямат собствен сайт, а страницата им във Facebook не съдържа фотографии на залата, годни за публикуване.",
    performerTitle: "Сезонът, с техните думи",
    tableBandQuote: "Един салон, който прави само сватби.",
    pageTitleGallery: "Снимките предстоят",
    pageTitleEvents: "Салон само за сватби",
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
    menuLead: "Crystal Palace publishes no menu. Here is what they state about the salon itself:",
    servicesTitle: "Services",
    servicesLead: "Here is what is known to be available for the day.",
    techTitle: "In the salon",
    eventsTitle: "Occasions",
    eventsLead: "The salon is offered for weddings only.",
    galleryTitle: "The salon as it looks",
    galleryLead: "Crystal Palace has no published photographs of the venue.",
    galleryChip: "real photographs to come",
    galleryEmptyTitle: "The photographs of the salon will stand here.",
    galleryEmptyBody: "The hosts have no website of their own, and their Facebook page holds no publishable photographs of the hall.",
    performerTitle: "The season, in their words",
    tableBandQuote: "A salon that does weddings only.",
    pageTitleGallery: "Photographs to come",
    pageTitleEvents: "A weddings-only salon",
    pageTitleMenu: "The place, in their words",
    pageTitleServices: "What is available",
  },
} as const;
