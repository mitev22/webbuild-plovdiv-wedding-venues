/**
 * Content pack — extension: full section coverage of Esterra Vini's own pages
 * (esterra.anita.bg /events /food /vtourism /accommodation /sports /offers),
 * harvested verbatim 2026-07-22.
 *
 * The estate publishes no dish list and no per-head price, so the "menu" section
 * carries what it DOES publish: its own wine, the cellar tastings with their three
 * published variants, the catering service and the outdoor cooking. Nothing is
 * invented. Gallery photos are the estate's own, mirrored; frames whose subject is
 * an identifiable guest were excluded.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "vino",
    label: "Виното",
    note: "Гостите могат да се насладят на първокачествено вино собствено производство: богат асортимент от бели и червени вина от най-добрите реколти.",
    dishes: [
      { n: "Каберне Совиньон", d: "червено, с гарантирано наименование за произход „Пълдин“" },
      { n: "Мерло", d: "червено, с гарантирано наименование за произход „Пълдин“" },
      { n: "Мавруд", d: "местен тракийски сорт" },
      { n: "Рубин", d: "български сорт" },
      { n: "Селекции и резерви", d: "от лозя по северните склонове на Родопите" },
    ],
  },
  {
    key: "degustacii",
    label: "Дегустации",
    note: "Винен тур и дегустация във Винарска изба „Виноград“, Перущица. Турът включва разходка в производствените помещения, придружена с тематична дискусия от технолог. Продължителност един час.",
    dishes: [
      { n: "Вариант I", d: "дегустация на 3 вина: 1 бяло и 2 червени, с месни и млечни продукти, хляб и минерална вода" },
      { n: "Вариант II", d: "дегустация на 4 вина: 1 бяло и 3 червени, с месни и млечни продукти, хляб и минерална вода" },
      { n: "Вариант III", d: "дегустация на 5 вина: 2 бели и 3 червени, с месни и млечни продукти, хляб и минерална вода" },
    ],
  },
  {
    key: "keturing",
    label: "Кетъринг",
    note: "Кетъринг обслужване по предварителна заявка. Екипът от готвачи съдейства за избора на меню и приготвя и предложения извън него.",
    dishes: [
      { n: "Закуска, обяд и вечеря", d: "заявява се предварително при резервация за настаняване" },
      { n: "Сервиз на порции", d: "храната се сервира в общото помещение" },
      { n: "Блок маса", d: "храната се сервира в общото помещение" },
    ],
  },
  {
    key: "otkrito",
    label: "На открито",
    dishes: [
      { n: "Външно барбекю на дървени въглища", d: "неизменна част от всеки грил празник" },
      { n: "Летен бар", d: "до басейна, с освежаващи напитки и коктейли" },
      { n: "Собствена кухня във всяка къща", d: "пълно кухненско оборудване и трапезария с 6 места" },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "vino",
    label: "The wine",
    note: "Guests can enjoy first-quality wine of the estate's own production: a broad range of whites and reds from the best vintages.",
    dishes: [
      { n: "Cabernet Sauvignon", d: "red, with the “Pulden” protected designation of origin" },
      { n: "Merlot", d: "red, with the “Pulden” protected designation of origin" },
      { n: "Mavrud", d: "a local Thracian variety" },
      { n: "Rubin", d: "a Bulgarian variety" },
      { n: "Selections and reserves", d: "from vineyards on the northern slopes of the Rhodopes" },
    ],
  },
  {
    key: "degustacii",
    label: "Tastings",
    note: "A wine tour and tasting at the “Vinograd” winery in Perushtitsa. The tour walks through the production halls with a themed discussion led by a technologist. It lasts one hour.",
    dishes: [
      { n: "Option I", d: "a tasting of 3 wines: 1 white and 2 reds, with charcuterie, cheeses, bread and mineral water" },
      { n: "Option II", d: "a tasting of 4 wines: 1 white and 3 reds, with charcuterie, cheeses, bread and mineral water" },
      { n: "Option III", d: "a tasting of 5 wines: 2 whites and 3 reds, with charcuterie, cheeses, bread and mineral water" },
    ],
  },
  {
    key: "keturing",
    label: "Catering",
    note: "Catering to advance order. The kitchen team helps you choose a menu and will prepare dishes beyond it on request.",
    dishes: [
      { n: "Breakfast, lunch and dinner", d: "ordered in advance with the accommodation booking" },
      { n: "Plated service", d: "served in the common room" },
      { n: "Buffet", d: "served in the common room" },
    ],
  },
  {
    key: "otkrito",
    label: "Outdoors",
    dishes: [
      { n: "Outdoor charcoal barbecue", d: "a fixed part of every grill celebration" },
      { n: "Summer bar", d: "beside the pool, with refreshing drinks and cocktails" },
      { n: "A kitchen in every house", d: "fully equipped, with a dining table for 6" },
    ],
  },
];

export const menuFooterBg =
  "Виното е собствено производство, а дегустациите се провеждат в самата изба. Куверт и пакетни цени за тържество не са публикувани и предстои да бъдат предоставени.";
export const menuFooterEn =
  "The wine is the estate's own, and the tastings take place in the cellar itself. Per-head and package pricing for a celebration is not published and is still to be supplied.";

// ——— Услуги (собствените страници, verbatim) ———
export const servicesBg = [
  "Кетъринг обслужване по предварителна заявка",
  "Оборудвана кухня и трапезария с 6 места във всяка къща",
  "Външно барбекю на дървени въглища",
  "Летен бар непосредствено до басейна",
  "Отопляем открит басейн с шезлонги и шатри",
  "Външно джакузи с хидромасажни дюзи",
  "Дървена сауна под открито небе",
  "Горски детски кът",
  "Винени дегустации във Винарска изба „Виноград“",
  "Трансфери от летище, автогара или населено място",
  "Плащане с карта: VISA, MasterCard, MAESTRO, VISA Electron",
  "Паркинг на разположение на гостите",
];
export const servicesEn = [
  "Catering to advance order",
  "A fitted kitchen and a dining table for 6 in every house",
  "An outdoor charcoal barbecue",
  "A summer bar right beside the pool",
  "A heated outdoor pool with loungers and canopies",
  "An outdoor jacuzzi with hydromassage jets",
  "A wooden sauna under the open sky",
  "A forest play area for children",
  "Wine tastings at the “Vinograd” winery",
  "Transfers from the airport, coach station or any town",
  "Card payment: VISA, MasterCard, MAESTRO, VISA Electron",
  "Parking available to guests",
];

// ——— Къщите: обзавеждането, дословно от /accommodation ———
export const techBg = [
  "3 двойни стаи във всяка къща",
  "2 бани",
  "Кухня с трапезария за 6 места",
  "Веранда с изглед към лозята",
  "LCD телевизор",
  "Климатик",
];
export const techEn = [
  "3 double rooms in each house",
  "2 bathrooms",
  "A kitchen with a dining table for 6",
  "A veranda looking over the vineyards",
  "An LCD television",
  "Air conditioning",
];

// ——— Не само сватби — поводите, които имението реално обявява ———
export const eventsBg = [
  {
    title: "Тиймбилдинг",
    body: "Отлични условия за провеждане на вашето мероприятие, далеч от суматохата на забързаното ежедневие, сред живителните сили на природата.",
    fact: "Изхранване, работно пространство, тематичен бар",
  },
  {
    title: "Изнесен офис",
    body: "В градината, в гората, край басейна или на верандата с изглед към лозята. Работно пространство за семинари и обучения, с кетъринг обслужване и уютни стаи за настаняване.",
    fact: "Бърз интернет",
  },
  {
    title: "Рожден ден",
    body: "В уютната и слънчева градина и общото помещение можете да споделите този незабравим празник с всички любими хора.",
    fact: "Празнично пространство и тържествена вечеря",
  },
  {
    title: "Тематично парти",
    body: "Детско парти, абитуриентски бал, ергенско или моминско парти, сбирка на класа. На разположение е и топлият басейн.",
    fact: "Празнично меню",
  },
];
export const eventsEn = [
  {
    title: "Team building",
    body: "Excellent conditions for your event, away from the rush of everyday life, among the restorative forces of nature.",
    fact: "Meals, work space, themed bar",
  },
  {
    title: "Off-site office",
    body: "In the garden, in the forest, by the pool or on the veranda overlooking the vineyards. Work space for seminars and training, with catering and comfortable rooms to stay.",
    fact: "Fast internet",
  },
  {
    title: "Birthdays",
    body: "In the sunny garden and the common room you can share this unforgettable day with everyone you love.",
    fact: "Celebration space and dinner",
  },
  {
    title: "Themed parties",
    body: "A children's party, a prom, a hen or stag party, a class reunion. The warm pool is at your disposal too.",
    fact: "Celebration menu",
  },
];

// ——— Винен туризъм (verbatim, /vtourism) ———
export const performerBg =
  "Организираме винен тур и дегустация във Винарска изба „Виноград“ в Перущица, създадена през 1932-1933 година като кооперация за изкупуване и преработка на грозде. Днес избата обработва гроздето от 3200 хектара лозя по северните склонове на Родопите. Турът включва разходка в производствените помещения, цеха за първично винопроизводство и за бутилиране, придружени с тематична дискусия от технолог.";
export const performerEn =
  "We arrange a wine tour and tasting at the “Vinograd” winery in Perushtitsa, founded in 1932-1933 as a cooperative for buying and processing grapes. Today the winery works the fruit of 3,200 hectares of vineyards on the northern slopes of the Rhodopes. The tour walks through the production halls, the primary winemaking works and the bottling line, with a themed discussion led by a technologist.";

// ——— Галерия — снимките са СОБСТВЕНИ на комплекса, огледални ———
export const gallery: { slug: string; bg: string; en: string; tall?: boolean }[] = [
  { slug: "gal15", bg: "Стъклената сграда по здрач", en: "The glass pavilion at dusk", tall: true },
  { slug: "ev2", bg: "Маса край басейна", en: "A table by the pool" },
  { slug: "gal18", bg: "Басейнът и боровата гора", en: "The pool and the pine forest" },
  { slug: "gal16", bg: "Боровата гора", en: "The pine forest" },
  { slug: "house9", bg: "Външното джакузи", en: "The outdoor jacuzzi" },
  { slug: "gal20", bg: "Общото помещение", en: "The common room" },
  { slug: "gal17", bg: "Дворът и басейнът", en: "The grounds and the pool" },
  { slug: "house11", bg: "Горският детски кът", en: "The forest play area" },
  { slug: "ev12", bg: "Дълга маса в гората", en: "A long table in the forest" },
  { slug: "gal22", bg: "Кухня в къщите", en: "A kitchen in the houses" },
  { slug: "gal23", bg: "Двойна стая", en: "A double room" },
  { slug: "gal14", bg: "Верандата", en: "The veranda" },
];

export const exploreArt = [
  { src: "/photos/gal22.webp", alt: "" },
  { src: "/photos/ev12.webp", alt: "" },
  { src: "/photos/house9.webp", alt: "" },
];

export const navPages = {
  bg: [
    { href: "/", label: "Начало", hint: "денят в имението" },
    { href: "/menu/", label: "Виното", hint: "собствена изба" },
    { href: "/sabitia/", label: "Поводи", hint: "не само сватби" },
    { href: "/uslugi/", label: "Услуги", hint: "в имението" },
    { href: "/galeria/", label: "Галерия", hint: "реални снимки" },
    { href: "/#sboguvane", label: "Запитване", hint: "до 2 работни дни" },
  ],
  en: [
    { href: "/en/", label: "Home", hint: "the day on the estate" },
    { href: "/en/menu/", label: "The wine", hint: "our own cellar" },
    { href: "/en/sabitia/", label: "Occasions", hint: "not only weddings" },
    { href: "/en/uslugi/", label: "Services", hint: "on the estate" },
    { href: "/en/galeria/", label: "Gallery", hint: "real photos" },
    { href: "/en/#sboguvane", label: "Inquire", hint: "within 2 business days" },
  ],
} as const;

export const extraStrings = {
  bg: {
    menuTitle: "Виното и трапезата",
    menuLead: "Вино собствено производство, дегустации в самата изба и кетъринг по заявка:",
    servicesTitle: "Услуги",
    servicesLead: "Имението поема целия престой, не само вечерята. Ето какво стои на разположение на гостите ви.",
    techTitle: "Във всяка къща",
    eventsTitle: "Не само сватби",
    eventsLead: "Лозята, басейнът и боровата гора поемат всеки повод, от тиймбилдинг до сбирка на класа.",
    galleryTitle: "Имението, както изглежда",
    galleryLead: "Снимките са собствени на Комплекс Естера Вини. Кадрите, чийто сюжет са разпознаваеми гости, са изключени от демонстрацията.",
    galleryChip: "реални снимки на имението",
    performerTitle: "Винен туризъм",
    tableBandQuote: "Една дълга маса между лозята и водата. Останалото е музика.",
    inquire: "Запитване",
    menuBtn: "Меню",
    closeBtn: "Затвори",
    galleryMore: "Цялата галерия",
    exploreTitle: "Разгледайте още",
    pageTitleGallery: "Реални снимки, реално имение",
    pageTitleEvents: "Всеки повод намира своето място",
    pageTitleMenu: "Виното е собствено, трапезата също",
    pageTitleServices: "Всичко за деня, между лозята и водата",
  },
  en: {
    menuTitle: "The wine and the table",
    menuLead: "Wine of our own production, tastings in the cellar itself and catering to order:",
    servicesTitle: "Services",
    servicesLead: "The estate carries the whole stay, not just the dinner. Here is what is at your guests' disposal.",
    techTitle: "In every house",
    eventsTitle: "Not only weddings",
    eventsLead: "The vineyards, the pool and the pine forest carry every occasion, from team building to a class reunion.",
    galleryTitle: "The estate, as it looks",
    galleryLead: "The photographs belong to Esterra Vini. Frames whose subject is an identifiable guest are excluded from this demonstration.",
    galleryChip: "real photos of the estate",
    performerTitle: "Wine tourism",
    tableBandQuote: "One long table between the vines and the water. The rest is music.",
    inquire: "Inquire",
    menuBtn: "Menu",
    closeBtn: "Close",
    galleryMore: "Full gallery",
    exploreTitle: "Explore more",
    pageTitleGallery: "Real photos, a real estate",
    pageTitleEvents: "Every occasion finds its place",
    pageTitleMenu: "The wine is ours, and so is the table",
    pageTitleServices: "Everything for the day, between the vines and the water",
  },
} as const;
