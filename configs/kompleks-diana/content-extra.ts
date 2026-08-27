/**
 * Content pack — extension: full section coverage of komplex-diana.com
 * (harvested verbatim 2026-07-22 via `curl -k`).
 * Комплекс Диана publishes NO dish list, NO AV rider and NO wedding packages,
 * so nothing here is invented to fill those shapes: the kitchen tab carries only
 * the three dishes they actually name, and the gaps sit on the handoff list.
 * Gallery photos are the venue's OWN photographs (i/gallery/2017/*), mirrored for
 * the demo. Frames containing identifiable guests were deliberately excluded.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "rodopska",
    label: "Родопска кухня",
    note: "Менюто на кухнята е изпълнено с традиционни родопски ястия. Комплексът не публикува пълно меню, затова тук стоят само ястията, които са назовани в сайта им.",
    dishes: [
      { n: "Печено агне", d: "прясно приготвено, от пещта на градината" },
      { n: "Пълнен шаран", d: "от пещта за печене" },
      { n: "Пъстърва на скара", d: "уловена лично от вас" },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "rodopska",
    label: "Rhodope kitchen",
    note: "The kitchen's menu is built on traditional Rhodope dishes. The complex publishes no full menu, so only the dishes they actually name appear here.",
    dishes: [
      { n: "Roast lamb", d: "freshly prepared, from the garden's own oven" },
      { n: "Stuffed carp", d: "from the roasting oven" },
      { n: "Grilled trout", d: "caught by you" },
    ],
  },
];

export const menuFooterBg =
  "Домакините могат да ви нагостят с прясно приготвено печено агне, пълнен шаран или пъстърва на скара. Пълното меню и цените предстои да бъдат предоставени от комплекса.";
export const menuFooterEn =
  "The hosts can serve you freshly roasted lamb, stuffed carp or grilled trout. The full menu and its prices are still to be supplied by the complex.";

// ——— Услуги (about.htm, „Допълнителни услуги“, verbatim) ———
export const servicesBg = [
  "Тържества на открито и градински партита",
  "Организиране на пикник",
  "Барбекю за ползване от гостите",
  "Открит басейн с шезлонги",
  "Сауна, парна баня и солариум",
  "Масажи",
  "Велосипеди под наем",
  "Конна езда",
  "Хранителен магазин в комплекса",
  "Собствен транспорт",
  "Денонощен паркинг",
  "Интернет достъп",
];
export const servicesEn = [
  "Outdoor celebrations and garden parties",
  "Picnics arranged on request",
  "A barbecue for guests to use",
  "An outdoor pool with sun loungers",
  "Sauna, steam room and solarium",
  "Massages",
  "Bicycle hire",
  "Horse riding",
  "A food shop within the complex",
  "The complex's own transport",
  "A round-the-clock car park",
  "Internet access",
];

// ——— Стаите: обзавеждането, дословно от index.htm ———
// (Комплексът не публикува техника за озвучаване/осветление — списъкът остава
//  за оборудването на стаите, а не за сценичен райдер.)
export const techBg = [
  "Локално парно на дизел",
  "Собствена баня с WC",
  "Мини бар",
  "Кабелна телевизия",
  "Интернет",
  "Тераса",
];
export const techEn = [
  "Local diesel central heating",
  "En-suite bathroom with WC",
  "Mini bar",
  "Cable television",
  "Internet",
  "A terrace",
];

// ——— Не само сватби — поводите, които комплексът реално обявява ———
export const eventsBg = [
  {
    title: "Градински партита",
    body: "Комплексът обявява тържества на открито и градински партита. Лятната градина е със сто и четиридесет места и разполага със собствена пещ и детски кът.",
    fact: "Лятна градина, 140 места",
  },
  {
    title: "Барбекю в градината",
    body: "Изградено през лятото на 2010 година. Разполага със скара с дървени въглища и пещ за печене на агнета и пълнен шаран.",
    fact: "Капацитет 20 човека",
  },
  {
    title: "Механата",
    body: "Напълно оборудвана механа, най-новата придобивка на комплекса. Подходяща за по-малка компания, отделена от градината.",
    fact: "20 човека, наем 80 лв/вечер",
  },
  {
    title: "Пикник и разходки",
    body: "Организиране на пикник, велосипеди под наем и конна езда за гостите, които остават повече от една вечер.",
    fact: "Велосипеди и конна езда",
  },
];
export const eventsEn = [
  {
    title: "Garden parties",
    body: "The complex advertises outdoor celebrations and garden parties. The summer garden seats one hundred and forty and has its own oven and a children's corner.",
    fact: "Summer garden, 140 seats",
  },
  {
    title: "Barbecue in the garden",
    body: "Built in the summer of 2010. It has a charcoal grill and an oven for roasting lamb and stuffed carp.",
    fact: "Seats 20",
  },
  {
    title: "The mehana",
    body: "A fully equipped mehana tavern, the complex's newest addition. Suited to a smaller party, set apart from the garden.",
    fact: "20 people, 80 BGN an evening",
  },
  {
    title: "Picnics and rides",
    body: "Picnics arranged on request, bicycle hire and horse riding for guests who stay more than one evening.",
    fact: "Bicycles and horse riding",
  },
];

// ——— Настаняване (index.htm, verbatim) ———
export const performerBg =
  "Шест двойни стаи и един апартамент в семейния хотел, а от юни 2008 година и три отделни вили за гости. Вилите са двуетажни и във всяка от тях могат да се настанят до десет човека, разположени в двойни и тройни стаи или луксозни стаи с двойно легло.";
export const performerEn =
  "Six double rooms and one apartment in the family hotel, and since June 2008 three separate guest villas as well. The villas are two-storey and each sleeps up to ten people, in double and triple rooms or luxury rooms with a double bed.";

// ——— Галерия — снимките са СОБСТВЕНИ на комплекса (i/gallery/2017), огледални ———
export const gallery: { slug: string; bg: string; en: string; tall?: boolean }[] = [
  { slug: "gradina", bg: "Комплексът", en: "The complex" },
  { slug: "vila", bg: "Пещта под навеса", en: "The oven under the canopy", tall: true },
  { slug: "dvor", bg: "Главната сграда", en: "The main building" },
  { slug: "besedka", bg: "Изглед от терасата", en: "The view from the terrace" },
  { slug: "gradina-vecher", bg: "Терасите", en: "The terraces" },
  { slug: "kompleks", bg: "Сградата", en: "The building" },
  { slug: "alea", bg: "Входовете към стаите", en: "The room entrances" },
  { slug: "staya", bg: "Двойна стая", en: "A double room" },
];

// ——— Разгледайте още: изкуството за трите карти ———
export const exploreArt = [
  { src: "/photos/vila.webp", alt: "" },
  { src: "/atmosphere/m-s1-table-840.webp?v=1", alt: "" },
  { src: "/photos/besedka.webp", alt: "" },
];

// ——— Multi-page navigation ———
export const navPages = {
  bg: [
    { href: "/", label: "Начало", hint: "денят в градината" },
    { href: "/menu/", label: "Кухнята", hint: "родопски ястия" },
    { href: "/sabitia/", label: "Поводи", hint: "не само сватби" },
    { href: "/uslugi/", label: "Услуги", hint: "в комплекса" },
    { href: "/galeria/", label: "Галерия", hint: "реални снимки" },
    { href: "/#sboguvane", label: "Запитване", hint: "до 2 работни дни" },
  ],
  en: [
    { href: "/en/", label: "Home", hint: "the day in the garden" },
    { href: "/en/menu/", label: "Kitchen", hint: "Rhodope dishes" },
    { href: "/en/sabitia/", label: "Occasions", hint: "not only weddings" },
    { href: "/en/uslugi/", label: "Services", hint: "in the complex" },
    { href: "/en/galeria/", label: "Gallery", hint: "real photos" },
    { href: "/en/#sboguvane", label: "Inquire", hint: "within 2 business days" },
  ],
} as const;

export const extraStrings = {
  bg: {
    menuTitle: "Кухнята",
    menuLead: "Традиционни родопски ястия, печени в собствената пещ на градината:",
    servicesTitle: "Услуги",
    servicesLead: "Комплексът е място за цял ден, не само за една вечеря. Ето какво стои на разположение на гостите ви.",
    techTitle: "Обзавеждане на стаите",
    eventsTitle: "Не само сватби",
    eventsLead: "Градината, механата и барбекюто поемат всеки повод, от кръщене до сбирка на класа.",
    galleryTitle: "Комплексът, както изглежда",
    galleryLead: "Снимките са собствени на Комплекс Диана. Кадрите с разпознаваеми гости са изключени от демонстрацията.",
    galleryChip: "реални снимки на комплекса",
    performerTitle: "Гостите остават",
    tableBandQuote: "Една дълга маса в градината. Останалото е музика.",
    inquire: "Запитване",
    menuBtn: "Меню",
    closeBtn: "Затвори",
    galleryMore: "Цялата галерия",
    exploreTitle: "Разгледайте още",
    pageTitleGallery: "Реални снимки, реален двор",
    pageTitleEvents: "Всеки повод намира своето място",
    pageTitleMenu: "Родопска кухня, приготвена на място",
    pageTitleServices: "Всичко за деня, в един двор",
  },
  en: {
    menuTitle: "The kitchen",
    menuLead: "Traditional Rhodope dishes, roasted in the garden's own oven:",
    servicesTitle: "Services",
    servicesLead: "The complex is a place for a whole day, not just one dinner. Here is what is at your guests' disposal.",
    techTitle: "In the rooms",
    eventsTitle: "Not only weddings",
    eventsLead: "The garden, the mehana and the barbecue carry every occasion, from a christening to a class reunion.",
    galleryTitle: "The complex, as it looks",
    galleryLead: "The photographs belong to Complex Diana. Frames containing identifiable guests are excluded from this demonstration.",
    galleryChip: "real photos of the complex",
    performerTitle: "Where the guests stay",
    tableBandQuote: "One long table in the garden. The rest is music.",
    inquire: "Inquire",
    menuBtn: "Menu",
    closeBtn: "Close",
    galleryMore: "Full gallery",
    exploreTitle: "Explore more",
    pageTitleGallery: "Real photos, a real courtyard",
    pageTitleEvents: "Every occasion finds its place",
    pageTitleMenu: "Rhodope cooking, prepared on site",
    pageTitleServices: "Everything for the day, in one courtyard",
  },
} as const;
