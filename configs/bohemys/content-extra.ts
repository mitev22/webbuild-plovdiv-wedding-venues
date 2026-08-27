/**
 * Content pack (extension) — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Bohemy’s Friends. Harvested 2026-08-26 from: Google Business профила им (нямат сайт) | заглавна снимка от публичната им Facebook страница (https://www.facebook.com/p/Bohemys-Friends-100086960432432/), 2026-08-27.
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "Мястото",
    note: "Bohemy’s Friends не публикува меню. Показано е само това, което сами съобщават.",
    dishes: [
      {
        n: "Ирландски пъб и ресторант",
        d: "както сами се определят",
      },
      {
        n: "Меню с QR код",
        d: "в чужд портал, не в собствен сайт",
      },
      {
        n: "Обедни предложения",
        d: "обявявани всеки ден",
      },
      {
        n: "Резервация по телефон",
        d: "087 770 3104",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "mqstoto",
    label: "The place",
    note: "Bohemy’s Friends publishes no menu. Only what they state themselves appears here.",
    dishes: [
      {
        n: "An Irish pub and restaurant",
        d: "as they describe themselves",
      },
      {
        n: "A QR-code menu",
        d: "on a third-party portal, not their own site",
      },
      {
        n: "Lunch offers",
        d: "posted every day",
      },
      {
        n: "Booking by telephone",
        d: "087 770 3104",
      },
    ],
  },
];

export const menuFooterBg =
  "Меню, куверт и кетъринг условия не са публикувани никъде и предстои да бъдат предоставени.";

export const menuFooterEn =
  "The menu, the per-head price and the catering terms are published nowhere and are still to be supplied.";

export const servicesBg = [
  "Заведението на ул. „Недялка Шилева“ 11, Пловдив",
  "Отворено по всяко време",
  "Ирландски пъб и ресторант",
  "Менюто се разглежда с QR код",
  "Обедни предложения всеки ден",
];

export const servicesEn = [
  "The place at 11 Nedyalka Shileva St, Plovdiv",
  "Open at any hour",
  "An Irish pub and restaurant",
  "The menu is read from a QR code",
  "Lunch offers every day",
];

export const techBg = [
  "Ирландски пъб и ресторант",
  "Менюто се разглежда с QR код",
  "Обедни предложения всеки ден",
];

export const techEn = [
  "An Irish pub and restaurant",
  "The menu is read from a QR code",
  "Lunch offers every day",
];

export const eventsBg = [
  {
    title: "Частни поводи",
    body: "Заведението е отворено по всяко време и поема частни поводи.",
    fact: "4.7 в Google",
  },
];

export const eventsEn = [
  {
    title: "Private occasions",
    body: "The place is open at any hour and takes on private occasions.",
    fact: "4.7 on Google",
  },
];

export const performerBg = "Заведението е ирландски пъб и ресторант на ул. „Недялка Шилева“ 11, отворено по всяко време.";

export const performerEn = "The place is an Irish pub and restaurant at 11 Nedyalka Shileva Street, open at any hour.";

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
    menuLead: "Bohemy’s Friends не публикува меню. Ето какво съобщават за самото място:",
    servicesTitle: "Услуги",
    servicesLead: "Ето какво се знае, че стои на разположение за деня.",
    techTitle: "В заведението",
    eventsTitle: "Поводи",
    eventsLead: "Мястото се предлага за поводи от всякакъв вид.",
    galleryTitle: "Мястото, както изглежда",
    galleryLead: "Bohemy’s Friends няма публикувани собствени фотографии на обекта.",
    galleryChip: "предстоят реални снимки",
    galleryEmptyTitle: "Тук ще стоят снимките на заведението.",
    galleryEmptyBody: "Заглавната снимка е тяхна, от Facebook. Останалите снимки на мястото предстоят от домакините.",
    performerTitle: "Сезонът, с техните думи",
    tableBandQuote: "Пъб, ресторант и обедно меню на едно място.",
    pageTitleGallery: "Снимките предстоят",
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
    menuTitle: "The place",
    menuLead: "Bohemy’s Friends publishes no menu. Here is what they state about the place itself:",
    servicesTitle: "Services",
    servicesLead: "Here is what is known to be available for the day.",
    techTitle: "In the place",
    eventsTitle: "Occasions",
    eventsLead: "The place is offered for occasions of every kind.",
    galleryTitle: "The place as it looks",
    galleryLead: "Bohemy’s Friends has no published photographs of the venue.",
    galleryChip: "real photographs to come",
    galleryEmptyTitle: "The photographs of the place will stand here.",
    galleryEmptyBody: "The header photograph is theirs, from Facebook. The rest of the venue photography is still to come from the hosts.",
    performerTitle: "The season, in their words",
    tableBandQuote: "A pub, a restaurant and a lunch menu in one place.",
    pageTitleGallery: "Photographs to come",
    pageTitleEvents: "Occasions at the venue",
    pageTitleMenu: "The place, in their words",
    pageTitleServices: "What is available",
  },
} as const;
