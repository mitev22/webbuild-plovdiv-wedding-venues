/**
 * Content pack (extension) — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Родопска къща. Harvested 2026-08-26 from: Facebook страницата им и Google Business профила.
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "Мястото",
    note: "Родопска къща не публикува меню. Показано е само това, което сами съобщават.",
    dishes: [
      {
        n: "Традиционен ресторант",
        d: "както сами описват заведението",
      },
      {
        n: "Уютен хотел",
        d: "стаи за гостите на място",
      },
      {
        n: "Безплатен паркинг",
      },
      {
        n: "Места на открито",
      },
      {
        n: "Сватби, годежи и балове",
        d: "сами обявяват, че ги организират",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "The place",
    note: "Rodopska Kashta publishes no menu. Only what they state themselves appears here.",
    dishes: [
      {
        n: "A traditional restaurant",
        d: "as they describe it themselves",
      },
      {
        n: "A comfortable hotel",
        d: "rooms for guests on site",
      },
      {
        n: "Free parking",
      },
      {
        n: "Outdoor seating",
      },
      {
        n: "Weddings, engagements and balls",
        d: "they state they organise them",
      },
    ],
  },
];

export const menuFooterBg =
  "Меню, куверт и кетъринг условия не са публикувани никъде и предстои да бъдат предоставени.";

export const menuFooterEn =
  "The menu, the per-head price and the catering terms are published nowhere and are still to be supplied.";

export const servicesBg = [
  "Традиционен ресторант и хотел в Асеновград",
  "Организация на сватби, годежи и балове",
  "Безплатен паркинг за гостите",
  "Места за гости на открито",
  "Стаи за гости на място",
];

export const servicesEn = [
  "A traditional restaurant and hotel in Asenovgrad",
  "Weddings, engagements and balls are organised here",
  "Free parking for guests",
  "Outdoor seating for guests",
  "Guest rooms on site",
];

export const techBg = [
  "Традиционен ресторант",
  "Стаи за гости на място",
  "Безплатен паркинг",
  "Места на открито",
];

export const techEn = [
  "A traditional restaurant",
  "Guest rooms on site",
  "Free parking",
  "Outdoor seating",
];

export const eventsBg = [
  {
    title: "Сватби и годежи",
    body: "Домакините сами обявяват, че организират сватби, годежи и балове.",
    fact: "По техните думи",
  },
  {
    title: "Рождени и имени дни",
    body: "Ресторантът поема и по-малките поводи през годината.",
    fact: "Целогодишно",
  },
];

export const eventsEn = [
  {
    title: "Weddings and engagements",
    body: "The hosts state themselves that they organise weddings, engagements and balls.",
    fact: "In their own words",
  },
  {
    title: "Birthdays and name days",
    body: "The restaurant also takes on the smaller occasions of the year.",
    fact: "All year round",
  },
];

export const performerBg = "Домакините сами го описват така: традиционен ресторант и уютен хотел с безплатен паркинг, където се организират сватби, годежи и балове.";

export const performerEn = "The hosts describe it themselves: a traditional restaurant and a comfortable hotel with free parking, where weddings, engagements and balls are organised.";

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
      hint: "сватби и годежи",
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
      hint: "weddings and engagements",
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
    menuLead: "Родопска къща не публикува меню. Ето какво съобщават за самото място:",
    servicesTitle: "Услуги",
    servicesLead: "Ето какво се знае, че стои на разположение за деня.",
    techTitle: "В ресторанта",
    eventsTitle: "Поводи",
    eventsLead: "Домакините обявяват сватби, годежи, балове и фирмени събития.",
    galleryTitle: "Мястото, както изглежда",
    galleryLead: "Родопска къща няма публикувани собствени фотографии на обекта.",
    galleryChip: "предстоят реални снимки",
    galleryEmptyTitle: "Тук ще стоят снимките на ресторанта.",
    galleryEmptyBody: "Домакините нямат собствен сайт, а снимките им живеят само във Facebook и не са предоставени за публикуване.",
    performerTitle: "Сезонът, с техните думи",
    tableBandQuote: "Традиционен ресторант и уютен хотел.",
    pageTitleGallery: "Снимките предстоят",
    pageTitleEvents: "Сватби, годежи и балове",
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
    menuLead: "Rodopska Kashta publishes no menu. Here is what they state about the place itself:",
    servicesTitle: "Services",
    servicesLead: "Here is what is known to be available for the day.",
    techTitle: "In the restaurant",
    eventsTitle: "Occasions",
    eventsLead: "The hosts advertise weddings, engagements, balls and company events.",
    galleryTitle: "The place as it looks",
    galleryLead: "Rodopska Kashta has no published photographs of the venue.",
    galleryChip: "real photographs to come",
    galleryEmptyTitle: "The photographs of the restaurant will stand here.",
    galleryEmptyBody: "The hosts have no website of their own, and their photographs live only on Facebook and have not been released for publication.",
    performerTitle: "The season, in their words",
    tableBandQuote: "A traditional restaurant and a comfortable hotel.",
    pageTitleGallery: "Photographs to come",
    pageTitleEvents: "Weddings, engagements and balls",
    pageTitleMenu: "The place, in their words",
    pageTitleServices: "What is available",
  },
} as const;
