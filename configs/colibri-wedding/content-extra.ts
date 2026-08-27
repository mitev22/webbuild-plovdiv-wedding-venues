/**
 * Content pack — extension.
 * Colibri publishes no menu and no dish list, so the /menu/ route carries what they
 * DO describe: the furnishing of the hall itself. Gallery is empty on purpose — their
 * only images are portal interface icons, not photographs of the venue.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "zalata",
    label: "Обзавеждането",
    note: "Colibri не публикува меню. Показано е само това, което сами описват за залата.",
    dishes: [
      {
        n: "Масивни маси",
        d: "изработени от 100% естествени материали с невероятни рустик шарки",
      },
      {
        n: "Столове от евкалиптово дърво",
      },
      {
        n: "Трислоен паркет",
      },
      {
        n: "Отваряем покрив",
        d: "най-силното качество на залата",
      },
      {
        n: "Детски кът",
        d: "оборудван и обезопасен, с безплатен аниматор",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "zalata",
    label: "The furnishing",
    note: "Colibri publishes no menu. Only what they describe about the hall itself appears here.",
    dishes: [
      {
        n: "Substantial tables",
        d: "made from 100% natural materials with striking rustic grain",
      },
      {
        n: "Eucalyptus-wood chairs",
      },
      {
        n: "Three-layer parquet",
      },
      {
        n: "A retractable roof",
        d: "the hall's strongest quality",
      },
      {
        n: "Children's area",
        d: "equipped and secured, with a free entertainer",
      },
    ],
  },
];

export const menuFooterBg = "Меню, куверт и кетъринг условия не са публикувани никъде и предстои да бъдат предоставени.";
export const menuFooterEn = "No menu, per-head price or catering terms are published anywhere; these are still to be supplied.";

export const servicesBg = [
  "Остъклена зала от 350 кв.м",
  "Отваряем покрив",
  "Басейн с кристално чиста вода",
  "Тропически растения в градината",
  "Оборудван и обезопасен детски кът",
  "Безплатен аниматор за децата",
  "Масивни маси и столове от евкалиптово дърво",
  "Трислоен паркет",
  "Изглед към Родопа планина",
  "Colibri Pool & Garden в същия комплекс",
];
export const servicesEn = [
  "A 350 sq m glazed hall",
  "A retractable roof",
  "A pool with crystal-clear water",
  "Tropical planting in the garden",
  "An equipped, secured children's area",
  "A free entertainer for the children",
  "Solid tables and eucalyptus-wood chairs",
  "Three-layer parquet",
  "A view of the Rhodope mountains",
  "Colibri Pool & Garden in the same complex",
];

export const techBg = [
  "Отваряем покрив",
  "Трислоен паркет",
  "Масивни маси от естествени материали",
  "Столове от евкалиптово дърво",
];
export const techEn = [
  "A retractable roof",
  "Three-layer parquet",
  "Solid tables of natural materials",
  "Eucalyptus-wood chairs",
];

export const eventsBg = [
  {
    title: "Сватби край басейна",
    body: "Тържествата се организират в остъклената зала и около басейна, с изглед към Родопа планина и залеза.",
    fact: "230 места",
  },
  {
    title: "Детски празници",
    body: "Оборудваният и обезопасен детски кът с безплатен аниматор поема най-малките гости.",
    fact: "Безплатен аниматор",
  },
  {
    title: "Летен сезон край водата",
    body: "Colibri Pool е сравнително нов басейн в покрайнините на Пловдив и е част от същия комплекс.",
    fact: "Colibri Pool & Garden",
  },
  {
    title: "Празници под открито небе",
    body: "Отваряемият покрив превръща закритата зала в открита площадка за минути.",
    fact: "Отваряем покрив",
  },
];
export const eventsEn = [
  {
    title: "Poolside weddings",
    body: "Celebrations are held in the glazed hall and around the pool, looking out to the Rhodopes and the sunset.",
    fact: "230 places",
  },
  {
    title: "Children's parties",
    body: "The equipped, secured children's area with a free entertainer takes care of the youngest guests.",
    fact: "Free entertainer",
  },
  {
    title: "Summer by the water",
    body: "Colibri Pool is a relatively new pool on the edge of Plovdiv and part of the same complex.",
    fact: "Colibri Pool & Garden",
  },
  {
    title: "Celebrations under open sky",
    body: "The retractable roof turns the enclosed hall into an open terrace in minutes.",
    fact: "Retractable roof",
  },
];

export const performerBg =
  "Стартираме сезон 2022 с едно атрактивно допълнение: тента, оборудвана с красиви масивни маси, изработени от 100% естествени материали с невероятни рустик шарки, столове от евкалиптово дърво, трислоен паркет, оборудван и обезопасен детски кът с безплатен аниматор. Най-страхотното от всички тези неща ще бъде отваряемият покрив, който ще ви остави без дъх.";
export const performerEn =
  "We open season 2022 with one attractive addition: a canopy fitted with beautiful solid tables made from 100% natural materials with striking rustic grain, eucalyptus-wood chairs, three-layer parquet and an equipped, secured children's area with a free entertainer. The finest of all of it is the retractable roof, which will leave you breathless.";

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
      hint: "денят край басейна",
    },
    {
      href: "/menu/",
      label: "Залата",
      hint: "350 кв.м",
    },
    {
      href: "/sabitia/",
      label: "Поводи",
      hint: "не само сватби",
    },
    {
      href: "/uslugi/",
      label: "Услуги",
      hint: "в комплекса",
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
      hint: "the day by the pool",
    },
    {
      href: "/en/menu/",
      label: "The hall",
      hint: "350 sq m",
    },
    {
      href: "/en/sabitia/",
      label: "Occasions",
      hint: "not only weddings",
    },
    {
      href: "/en/uslugi/",
      label: "Services",
      hint: "in the complex",
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
    menuTitle: "Залата",
    menuLead: "Colibri не публикува меню. Ето какво описват за самата зала:",
    servicesTitle: "Услуги",
    servicesLead: "Залата, басейнът и градината са част от един комплекс. Ето какво стои на разположение.",
    techTitle: "В залата",
    eventsTitle: "Не само сватби",
    eventsLead: "Отваряемият покрив и басейнът поемат всеки повод, от детски празник до лятна вечер.",
    galleryTitle: "Залата, както изглежда",
    galleryLead: "Colibri няма публикувани собствени фотографии на обекта.",
    galleryChip: "предстоят реални снимки",
    galleryEmptyTitle: "Тук ще стоят снимките на залата и басейна.",
    galleryEmptyBody: "Colibri няма собствен сайт, а порталните профили не съдържат фотографии на обекта: наличните файлове са интерфейсни икони. Галерията остава празна нарочно, вместо да бъде запълнена със стокови или генерирани кадри. Реалната фотография е първа точка в списъка за предаване.",
    performerTitle: "Сезонът, с техните думи",
    tableBandQuote: "Една дълга маса под покрив, който се отваря. Останалото е музика.",
    pageTitleGallery: "Снимките предстоят",
    pageTitleEvents: "Всеки повод намира своето място",
    pageTitleMenu: "Залата, описана с техните думи",
    pageTitleServices: "Всичко за деня, край водата",
  },
  en: {
    inquire: "Inquire",
    menuBtn: "Menu",
    closeBtn: "Close",
    galleryMore: "Full gallery",
    exploreTitle: "Explore more",
    menuTitle: "The hall",
    menuLead: "Colibri publishes no menu. Here is what they describe about the room itself:",
    servicesTitle: "Services",
    servicesLead: "The hall, the pool and the garden are one complex. Here is what is at your disposal.",
    techTitle: "In the hall",
    eventsTitle: "Not only weddings",
    eventsLead: "The retractable roof and the pool carry every occasion, from a children's party to a summer evening.",
    galleryTitle: "The hall, as it looks",
    galleryLead: "Colibri publishes no photographs of the venue itself.",
    galleryChip: "real photos to follow",
    galleryEmptyTitle: "Photographs of the hall and pool will live here.",
    galleryEmptyBody: "Colibri has no website of its own, and the portal profiles contain no photographs of the venue: the available files are interface icons. This gallery is deliberately left empty rather than filled with stock or generated imagery. Real photography is the first item on the handover list.",
    performerTitle: "The season, in their words",
    tableBandQuote: "One long table under a roof that opens. The rest is music.",
    pageTitleGallery: "Photography to follow",
    pageTitleEvents: "Every occasion finds its place",
    pageTitleMenu: "The hall, in their own words",
    pageTitleServices: "Everything for the day, by the water",
  },
} as const;
