/**
 * Content pack — extension.
 * Кадифе publishes no dish list, no capacity and no price. Nothing is invented.
 * Gallery is empty ON PURPOSE: every image on their live site is generic stock
 * photography of models (couples toasting, a checklist notebook, a disco ball) or blog
 * illustration — not one photograph of the restaurant itself.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "kuhnya",
    label: "Кухнята",
    note: "Кадифе не публикува меню с ястия и цени. Показано е само това, което е обявено за кухнята и обслужването.",
    dishes: [
      {
        n: "Собствена кухня",
        d: "перфектна кухня, по думите на самия ресторант",
      },
      {
        n: "Професионални кетъринг услуги",
        d: "за частни партита, семейни тържества, годежи, сватби и фирмени събития",
      },
      {
        n: "Уютна зала и голям дансинг",
      },
      {
        n: "Приветлив и усмихнат персонал",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "kuhnya",
    label: "The kitchen",
    note: "Kadife publishes no dish list and no prices. Only what is stated about the kitchen and the service appears here.",
    dishes: [
      {
        n: "An in-house kitchen",
        d: "an excellent kitchen, in the restaurant's own words",
      },
      {
        n: "Professional catering services",
        d: "for private parties, family celebrations, engagements, weddings and corporate events",
      },
      {
        n: "A warm hall and a large dance floor",
      },
      {
        n: "Welcoming, cheerful staff",
      },
    ],
  },
];

export const menuFooterBg = "Меню с ястия, куверт и ценоразпис не са публикувани никъде на сайта им и предстои да бъдат предоставени.";
export const menuFooterEn = "No dish menu, per-head price or price list is published anywhere on their site; these are still to be supplied.";

export const servicesBg = [
  "Цялостно планиране и организация на тържеството",
  "Сватби",
  "Годежи",
  "Кръщенки",
  "Частни и фирмени партита",
  "Абитуриентски и абсолвентски тържества",
  "Декорация",
  "Професионални кетъринг услуги",
  "Собствена кухня",
  "Уютна зала с голям дансинг",
];
export const servicesEn = [
  "Full planning and organisation of the celebration",
  "Weddings",
  "Engagements",
  "Christenings",
  "Private and corporate parties",
  "Graduation celebrations",
  "Decoration",
  "Professional catering services",
  "An in-house kitchen",
  "A warm hall with a large dance floor",
];

export const techBg = [
  "Уютна зала",
  "Голям дансинг",
  "Собствена кухня",
];
export const techEn = [
  "A warm hall",
  "A large dance floor",
  "An in-house kitchen",
];

export const eventsBg = [
  {
    title: "Сватби",
    body: "Кадифе се откроява с дългогодишния си опит и с професионалния си подход към планирането на най-романтичния ден.",
    fact: "Цялостна организация",
  },
  {
    title: "Кръщенки",
    body: "Заведението организира и кръщенки, със същото планиране от начало до край.",
    fact: "Планиране от край до край",
  },
  {
    title: "Абитуриентски бал",
    body: "Абитуриентски и абсолвентски тържества, с декорация към повода.",
    fact: "Декорация",
  },
  {
    title: "Фирмени партита",
    body: "Частни и фирмени партита, както и кетъринг за събития извън залата.",
    fact: "Кетъринг",
  },
];
export const eventsEn = [
  {
    title: "Weddings",
    body: "Kadife stands out for its long experience and its professional approach to planning the most romantic day.",
    fact: "Full organisation",
  },
  {
    title: "Christenings",
    body: "The venue also organises christenings, with the same planning from start to finish.",
    fact: "End-to-end planning",
  },
  {
    title: "Graduation balls",
    body: "Graduation and school-leavers' celebrations, with decoration to match the occasion.",
    fact: "Decoration",
  },
  {
    title: "Corporate parties",
    body: "Private and corporate parties, plus catering for events beyond the hall.",
    fact: "Catering",
  },
];

export const performerBg =
  "Като типични пловдивчани знаем не само да се веселим, ние сме перфекционисти и се стремим да превърнем всеки тържествен повод в изключително парти. Обадете ни се, споделете желанията си и ние ще изготвим подходяща и разумна оферта.";
export const performerEn =
  "As true Plovdiv people we know how to celebrate, and we are perfectionists who set out to turn every occasion into an exceptional party. Call us, tell us what you want, and we will put together a fair and sensible offer.";

export const gallery: { slug: string; bg: string; en: string; tall?: boolean }[] = [
  { slug: "zalata", bg: "Залата", en: "The hall" },
  { slug: "zalata-vecher", bg: "Залата вечер", en: "The hall in the evening" },
  { slug: "masite", bg: "Масите", en: "The tables" },
  { slug: "mladozhentsite", bg: "Младоженците", en: "The couple", tall: true },
  { slug: "arkata", bg: "Цветната арка", en: "The flower arch" },
  { slug: "zelenata-stena", bg: "Зелената стена", en: "The green wall" },
  { slug: "kanapetata", bg: "Хапките", en: "The canapés" },
  { slug: "tartaletite", bg: "Тарталетите", en: "The tartlets" },
  { slug: "predyastieto", bg: "Предястието", en: "The starter" },
  { slug: "zlatnite-stolove", bg: "Златните столове", en: "The gold chairs" },
  { slug: "krashtenkite", bg: "Кръщенките", en: "Christenings" },
  { slug: "tortata", bg: "Тортата", en: "The cake" },
  { slug: "detaylite", bg: "Детайлите", en: "The details" },
  { slug: "tsvetyata", bg: "Цветята", en: "The flowers" },
];

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
      hint: "сватбеният ден",
    },
    {
      href: "/menu/",
      label: "Кухнята",
      hint: "собствена",
    },
    {
      href: "/sabitia/",
      label: "Поводи",
      hint: "не само сватби",
    },
    {
      href: "/uslugi/",
      label: "Услуги",
      hint: "цялостна организация",
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
      label: "Kitchen",
      hint: "in-house",
    },
    {
      href: "/en/sabitia/",
      label: "Occasions",
      hint: "not only weddings",
    },
    {
      href: "/en/uslugi/",
      label: "Services",
      hint: "full organisation",
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
    menuLead: "Кадифе не публикува меню с ястия. Ето какво е обявено за кухнята:",
    servicesTitle: "Услуги",
    servicesLead: "Кадифе продава организация, не само зала. Ето какво поемат.",
    techTitle: "В залата",
    eventsTitle: "Не само сватби",
    eventsLead: "Заведението организира всеки повод, от кръщенка до фирмено парти.",
    galleryTitle: "Залата, както изглежда",
    galleryLead: "Четиринайсет техни собствени снимки на залата, кухнята и декора.",
    galleryChip: "реални снимки от залата",
    galleryEmptyTitle: "Тук стоят снимките на ресторанта.",
    galleryEmptyBody: "Снимките са техни собствени, от галерията на kadife-bg.com. Стоковите кадри на модели и блог илюстрациите от настоящия им сайт не са пренесени: те не показват ресторанта и ползването им е лицензионен въпрос.",
    performerTitle: "С техните думи",
    tableBandQuote: "Една дълга маса и голям дансинг. Останалото е музика.",
    tableBandAlt: "Залата, подредена за тържество",
    pageTitleGallery: "Залата в снимки",
    pageTitleEvents: "Всеки повод намира своето място",
    pageTitleMenu: "Кухнята, с техните думи",
    pageTitleServices: "Всичко за деня, под един покрив",
  },
  en: {
    inquire: "Inquire",
    menuBtn: "Menu",
    closeBtn: "Close",
    galleryMore: "Full gallery",
    exploreTitle: "Explore more",
    menuTitle: "The kitchen",
    menuLead: "Kadife publishes no dish menu. Here is what is stated about the kitchen:",
    servicesTitle: "Services",
    servicesLead: "Kadife sells organisation, not just a room. Here is what they take on.",
    techTitle: "In the hall",
    eventsTitle: "Not only weddings",
    eventsLead: "The venue organises every occasion, from a christening to a corporate party.",
    galleryTitle: "The hall, as it looks",
    galleryLead: "Fourteen of their own photographs of the hall, the kitchen and the decor.",
    galleryChip: "real photographs of the hall",
    galleryEmptyTitle: "The photographs of the restaurant live here.",
    galleryEmptyBody: "The photographs are their own, from the gallery on kadife-bg.com. The stock model shots and blog illustration on their current site were not carried over: they do not show the restaurant and reusing them is a licensing question.",
    performerTitle: "In their words",
    tableBandQuote: "One long table and a large dance floor. The rest is music.",
    tableBandAlt: "The hall, laid for a celebration",
    pageTitleGallery: "The hall in photographs",
    pageTitleEvents: "Every occasion finds its place",
    pageTitleMenu: "The kitchen, in their words",
    pageTitleServices: "Everything for the day, under one roof",
  },
} as const;
