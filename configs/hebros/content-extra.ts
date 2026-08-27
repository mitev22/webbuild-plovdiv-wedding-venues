/**
 * Content pack (extension) — INDUSTRY-wedding-venues.md §6 schema.
 * Venue: Хотел и ресторант „Хеброс“. Harvested 2026-08-26 from: собствения им сайт oldlegends.bg (Хотел и Ресторант Old Legends / Хеброс) — снимки, история, стаи, ресторант; събрани 2026-08-27. Google Business профил за отзивите..
 * Unknown facts stay empty (never invented). Reviews verbatim-or-absent.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "kuhnyata",
    label: "Кухнята",
    note: "Ресторант Old Legends не публикува куверт за тържество. Ето какво сами съобщават за кухнята и виното.",
    dishes: [
      {
        n: "Ресторант на годината",
        d: "на сп. Бакхус — 2016 и 2003",
      },
      {
        n: "Модерна кухня",
        d: "стъпила на традиционната българска",
      },
      {
        n: "Винена листа",
        d: "подбрани вина от цял свят",
      },
      {
        n: "Slow Food",
        d: "философията, която следват",
      },
      {
        n: "Градината",
        d: "вечеря на открито сред зеленина",
      },
      {
        n: "Запитване",
        d: "032 260 180 · reservation@oldlegends.bg",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "kuhnyata",
    label: "The kitchen",
    note: "Restaurant Old Legends publishes no per-head price for a celebration. Here is what they state themselves about the kitchen and the wine.",
    dishes: [
      {
        n: "Restaurant of the Year",
        d: "Bacchus magazine — 2016 and 2003",
      },
      {
        n: "Modern cooking",
        d: "rooted in the Bulgarian tradition",
      },
      {
        n: "Wine list",
        d: "selected wines from around the world",
      },
      {
        n: "Slow Food",
        d: "the philosophy they follow",
      },
      {
        n: "The garden",
        d: "dinner outdoors among the greenery",
      },
      {
        n: "Enquiries",
        d: "032 260 180 · reservation@oldlegends.bg",
      },
    ],
  },
];

export const menuFooterBg =
  "Кухнята е модерна, но стъпва на традиционната българска кухня, а виното е подбрано от цял свят. Конкретното меню и куверт за тържество предстои да бъдат предоставени.";

export const menuFooterEn =
  "The kitchen is modern but rooted in traditional Bulgarian cooking, and the wine is selected from around the world. The specific menu and per-head price for a celebration are still to be supplied.";

export const servicesBg = [
  "Възрожденска къща на ул. „Константин Стоилов“ 51, под Балабановата къща",
  "Ресторант с награда „Ресторант на годината“ на сп. Бакхус (2016 и 2003)",
  "Двор и градина с маси на открито",
  "Зимна градина под стъклен покрив",
  "Стаи и апартамент с автентично обзавеждане за гостите, които остават",
];

export const servicesEn = [
  "A Revival house at 51 Konstantin Stoilov St, below Balabanov House",
  "A restaurant named Restaurant of the Year by Bacchus magazine (2016 and 2003)",
  "A courtyard and garden with tables outdoors",
  "A winter garden under a glass roof",
  "Rooms and an apartment in period furniture for guests who stay",
];

export const techBg = [
  "Възрожденска къща, реставрирана със запазен първоначален вид",
  "Автентично обзавеждане от XIX век",
  "Климатик, сателитна телевизия, безжичен интернет и мини бар в стаите",
];

export const techEn = [
  "A Revival house, restored with its original form kept",
  "Authentic 19th-century furnishings",
  "Air conditioning, satellite television, Wi-Fi and a mini bar in the rooms",
];

export const eventsBg = [
  {
    title: "Тържества в Стария град",
    body: "Къщата поема поводи в историческата част на Пловдив — в салоните, в зимната градина или в двора, а гостите могат да останат за нощувка.",
    fact: "Стаи на място",
  },
];

export const eventsEn = [
  {
    title: "Celebrations in the Old Town",
    body: "The house takes on occasions in the historic part of Plovdiv — in the salons, the winter garden or the courtyard, and guests can stay the night.",
    fact: "Rooms on site",
  },
];

export const performerBg = "Къщата е строена преди около 200 години от богат пловдивски търговец на платове и кожи, по-късно е на рода Нешеви, реставрирана е през 1986 г. със запазен първоначален вид и от 1999 г. отново приема гости.";

export const performerEn = "The house was built some 200 years ago by a wealthy Plovdiv merchant in cloth and leather, later belonged to the Neshevi family, was restored in 1986 with its original form kept, and has received guests again since 1999.";

export const gallery: { slug: string; bg: string; en: string; tall?: boolean }[] = [
  {
    slug: "fasadata",
    bg: "Къщата отвън",
    en: "The house from outside",
  },
  {
    slug: "dvorat",
    bg: "Дворът",
    en: "The courtyard",
  },
  {
    slug: "gradinata",
    bg: "Градината",
    en: "The garden",
    tall: true,
  },
  {
    slug: "masite-v-dvora",
    bg: "Масите в двора",
    en: "Tables in the courtyard",
  },
  {
    slug: "zimnata-gradina",
    bg: "Зимната градина",
    en: "The winter garden",
  },
  {
    slug: "pod-stakloto",
    bg: "Под стъклото",
    en: "Under the glass roof",
  },
  {
    slug: "salonat",
    bg: "Салонът",
    en: "The salon",
  },
  {
    slug: "sinyat-salon",
    bg: "Синият салон с пианото",
    en: "The blue salon and the piano",
  },
  {
    slug: "restorantat",
    bg: "Ресторантът",
    en: "The restaurant",
  },
  {
    slug: "masata",
    bg: "Подредената маса",
    en: "The laid table",
  },
  {
    slug: "zakuskata",
    bg: "Закуската",
    en: "Breakfast",
  },
  {
    slug: "vinata",
    bg: "Витрината с вината",
    en: "The wine cabinet",
  },
  {
    slug: "nagradata",
    bg: "Ресторант на годината",
    en: "Restaurant of the Year",
  },
  {
    slug: "stayata",
    bg: "Стаята",
    en: "A room",
  },
  {
    slug: "apartamentat",
    bg: "Апартаментът",
    en: "The apartment",
  },
  {
    slug: "terasata",
    bg: "Сянка в двора",
    en: "Shade in the courtyard",
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
    menuLead: "Ресторант Old Legends — модерна кухня, стъпила на българската традиция, и подбрано вино.",
    servicesTitle: "Услуги",
    servicesLead: "Ето какво се знае, че стои на разположение за деня.",
    techTitle: "В къщата",
    eventsTitle: "Поводи",
    eventsLead: "Мястото се предлага за поводи от всякакъв вид.",
    galleryTitle: "Мястото, както изглежда",
    galleryLead: "Шестнайсет от собствените им снимки: къщата, дворът, салоните, ресторантът и стаите.",
    galleryChip: "реални снимки на хотела",
    galleryEmptyTitle: "Тук стоят снимките на хотела.",
    galleryEmptyBody: "Снимките са техни собствени, от сайта им oldlegends.bg.",
    performerTitle: "Историята на къщата",
    tableBandQuote: "Вечер и нощувка сред възрожденските къщи.",
    pageTitleGallery: "Мястото в снимки",
    pageTitleEvents: "Поводите на мястото",
    pageTitleMenu: "Кухнята и виното",
    pageTitleServices: "Какво стои на разположение",
  },
  en: {
    inquire: "Enquire",
    menuBtn: "Menu",
    closeBtn: "Close",
    galleryMore: "The full gallery",
    exploreTitle: "Explore further",
    menuTitle: "The kitchen",
    menuLead: "Restaurant Old Legends — modern cooking rooted in Bulgarian tradition, with a selected wine list.",
    servicesTitle: "Services",
    servicesLead: "Here is what is known to be available for the day.",
    techTitle: "In the house",
    eventsTitle: "Occasions",
    eventsLead: "The place is offered for occasions of every kind.",
    galleryTitle: "The place as it looks",
    galleryLead: "Sixteen of their own photographs: the house, the courtyard, the salons, the restaurant and the rooms.",
    galleryChip: "real photographs of the hotel",
    galleryEmptyTitle: "The photographs of the hotel stand here.",
    galleryEmptyBody: "The photographs are their own, from their site oldlegends.bg.",
    performerTitle: "The story of the house",
    tableBandQuote: "An evening and a night among the revival houses.",
    pageTitleGallery: "The place in photographs",
    pageTitleEvents: "Occasions at the venue",
    pageTitleMenu: "The kitchen and the wine",
    pageTitleServices: "What is available",
  },
} as const;
