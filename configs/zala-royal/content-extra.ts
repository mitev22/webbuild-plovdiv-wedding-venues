/**
 * Content pack — extension: full section coverage of zalaroyal.com,
 * harvested verbatim 2026-07-22.
 *
 * The hall advertises "собствена кухня" but publishes NOT ONE dish, so the menu
 * section states exactly that and lists only what they do publish about the
 * kitchen. No dish is invented to fill the shape.
 *
 * ⚠ Gallery: zalaroyal.com leans on stock photographs of couples and gold
 * clip-art icons rather than photographs of its own hall. Only the four frames
 * that genuinely show THIS venue are mirrored here; the stock imagery is
 * deliberately not reused, and "real photography of the hall" is a handoff item.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "kuhnya",
    label: "Собствената кухня",
    note: "Залата разполага със собствена кухня и професионален екип, който подготвя менютата на място. Конкретни ястия и цени не са публикувани в сайта им и предстои да бъдат предоставени.",
    dishes: [
      { n: "Менюта, подготвяни на място", d: "от професионален екип в собствената кухня" },
      { n: "Висококачествени продукти", d: "залата работи само с подбрани продукти" },
      { n: "Индивидуален подбор", d: "съобразен с вкусовете и предпочитанията на младоженците и гостите" },
      { n: "Меню за всеки вкус", d: "подбира се заедно с вас в хода на организацията" },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "kuhnya",
    label: "The in-house kitchen",
    note: "The hall has its own kitchen and a professional team preparing the menus on site. No individual dishes or prices are published on their website; these are still to be supplied.",
    dishes: [
      { n: "Menus prepared on site", d: "by a professional team in the hall's own kitchen" },
      { n: "High-quality produce", d: "the hall works only with selected produce" },
      { n: "Individual selection", d: "shaped around the couple's and the guests' tastes" },
      { n: "A menu for every taste", d: "chosen together with you as the planning goes on" },
    ],
  },
];

export const menuFooterBg =
  "Собствената кухня се обявява в сайта на залата, но нито едно ястие и нито една цена не са публикувани. Пълното меню предстои да бъде предоставено.";
export const menuFooterEn =
  "The in-house kitchen is advertised on the hall's website, but not a single dish and not a single price is published. The full menu is still to be supplied.";

// ——— Услуги (zalaroyal.com, „Част от нашите предимства“ + водещ текст) ———
export const servicesBg = [
  "Цялостна организация на сватбеното тържество",
  "Планиране и избор на концепция",
  "Координация в самия ден",
  "Персонализирани декорации",
  "Сватбена декорация по вашата визия",
  "Подбор на меню за всеки вкус",
  "Собствена кухня с професионален екип",
  "Професионално осветление",
  "Озвучаване",
  "Изнесен ритуал в градината пред залата",
  "Просторен дансинг",
  "Собствен паркинг",
];
export const servicesEn = [
  "Full organisation of the wedding celebration",
  "Planning and choosing the concept",
  "Coordination on the day itself",
  "Personalised decoration",
  "Wedding decoration shaped around your vision",
  "A menu selection for every taste",
  "An in-house kitchen with a professional team",
  "Professional lighting",
  "Sound system",
  "An outdoor civil ceremony in the garden in front of the hall",
  "A spacious dance floor",
  "A private car park",
];

// ——— В залата ———
export const techBg = [
  "Просторен дансинг",
  "Професионално осветление",
  "Озвучаване",
  "Гъвкава подредба на залата",
  "Собствен паркинг",
];
export const techEn = [
  "A spacious dance floor",
  "Professional lighting",
  "Sound system",
  "A flexible room layout",
  "A private car park",
];

// ——— Какво поемаме — четирите стълба, дословно от „предимствата“ ———
export const eventsBg = [
  {
    title: "Цялостна организация",
    body: "Поемаме цялостната организация на вашата сватба, от първоначалното планиране и избора на концепция до координацията в самия ден, за да се насладите спокойно на всеки миг от празника.",
    fact: "От концепция до деня",
  },
  {
    title: "Сватбена декорация",
    body: "Предлагаме сватбена декорация, съобразена с вашата визия и стил, като всеки детайл се подбира индивидуално, за да създаде хармонична, елегантна и завършена атмосфера.",
    fact: "По вашата визия",
  },
  {
    title: "Собствена кухня",
    body: "Разполагаме със собствена кухня и професионален екип, който подготвя менюта на място. Работим само с висококачествени продукти и възможност за индивидуален подбор.",
    fact: "Менюта на място",
  },
  {
    title: "Изнесен ритуал",
    body: "Предлагаме възможност за изнесен ритуал за сключване на граждански брак в градината пред залата: стилно и романтично пространство за вашето най-важно „Да“.",
    fact: "В градината пред залата",
  },
];
export const eventsEn = [
  {
    title: "Full organisation",
    body: "We take on the entire organisation of your wedding, from the first planning and the choice of concept to coordination on the day itself, so that you can enjoy every moment in peace.",
    fact: "From concept to the day",
  },
  {
    title: "Wedding decoration",
    body: "We offer wedding decoration shaped around your vision and style, with every detail chosen individually to create a harmonious, elegant and complete atmosphere.",
    fact: "Shaped around your vision",
  },
  {
    title: "In-house kitchen",
    body: "We have our own kitchen and a professional team preparing menus on site. We work only with high-quality produce, with the option of an individual selection.",
    fact: "Menus made on site",
  },
  {
    title: "Outdoor ceremony",
    body: "We offer an outdoor civil ceremony in the garden in front of the hall: an elegant, romantic space for the most important “yes” of your life.",
    fact: "In the garden in front of the hall",
  },
];

// ——— Гъвкавостта на залата (verbatim) ———
export const performerBg =
  "С капацитет до 440 места залата предлага гъвкаво пространство, което може да бъде адаптирано изцяло според индивидуалните нужди на младоженците, като е подходяща както за по-интимни тържества от около 100 гости, така и за големи и мащабни сватби.";
export const performerEn =
  "With a capacity of up to 440 places the hall offers a flexible space that can be adapted entirely to the couple's individual needs, suiting both a more intimate celebration of around 100 guests and a large, full-scale wedding.";

// ——— Галерия — САМО кадрите, които показват тази зала ———
export const gallery: { slug: string; bg: string; en: string; tall?: boolean }[] = [
  { slug: "zalata", bg: "Залата, подредена за тържество", en: "The hall, laid for a celebration", tall: true },
  { slug: "sgradata", bg: "Сградата на залата", en: "The building" },
  { slug: "gradinata", bg: "Градината пред залата", en: "The garden in front of the hall" },
  { slug: "zalata-masi", bg: "Масите и дансингът", en: "The tables and the dance floor" },
];

export const exploreArt = [
  { src: "/photos/zalata.webp", alt: "" },
  { src: "/photos/gradinata.webp", alt: "" },
  { src: "/photos/sgradata.webp", alt: "" },
];

export const navPages = {
  bg: [
    { href: "/", label: "Начало", hint: "сватбеният ден" },
    { href: "/menu/", label: "Кухнята", hint: "собствена кухня" },
    { href: "/sabitia/", label: "Какво поемаме", hint: "цялостна организация" },
    { href: "/uslugi/", label: "Услуги", hint: "под един покрив" },
    { href: "/galeria/", label: "Галерия", hint: "реални снимки" },
    { href: "/#sboguvane", label: "Запитване", hint: "до 2 работни дни" },
  ],
  en: [
    { href: "/en/", label: "Home", hint: "the wedding day" },
    { href: "/en/menu/", label: "Kitchen", hint: "in-house kitchen" },
    { href: "/en/sabitia/", label: "What we take on", hint: "full organisation" },
    { href: "/en/uslugi/", label: "Services", hint: "under one roof" },
    { href: "/en/galeria/", label: "Gallery", hint: "real photos" },
    { href: "/en/#sboguvane", label: "Inquire", hint: "within 2 business days" },
  ],
} as const;

export const extraStrings = {
  bg: {
    menuTitle: "Кухнята",
    menuLead: "Собствена кухня и професионален екип, който подготвя менютата на място:",
    servicesTitle: "Услуги",
    servicesLead: "Залата не е само пространство, а домакин, който поема организацията. Ето какво влиза в това.",
    techTitle: "В залата",
    eventsTitle: "Какво поемаме",
    eventsLead: "Четирите неща, които залата обявява като свои: организация, декор, кухня и ритуал.",
    galleryTitle: "Залата, както изглежда",
    galleryLead: "Показани са само кадрите, които наистина показват тази зала. Стоковите снимки от настоящия сайт не са пренесени.",
    galleryChip: "реални снимки на залата",
    performerTitle: "Гъвкаво пространство",
    tableBandQuote: "Една дълга маса, подредена с внимание. Останалото е музика.",
    inquire: "Запитване",
    menuBtn: "Меню",
    closeBtn: "Затвори",
    galleryMore: "Цялата галерия",
    exploreTitle: "Разгледайте още",
    pageTitleGallery: "Реални снимки, реална зала",
    pageTitleEvents: "Организацията е част от залата",
    pageTitleMenu: "Кухнята е наша, вкусът е ваш",
    pageTitleServices: "Всичко за деня, под един покрив",
  },
  en: {
    menuTitle: "The kitchen",
    menuLead: "An in-house kitchen and a professional team preparing the menus on site:",
    servicesTitle: "Services",
    servicesLead: "The hall is not just a space but a host that takes on the organising. Here is what that covers.",
    techTitle: "In the hall",
    eventsTitle: "What we take on",
    eventsLead: "The four things the hall claims as its own: organisation, décor, kitchen and ceremony.",
    galleryTitle: "The hall, as it looks",
    galleryLead: "Only the frames that genuinely show this hall are used. The stock imagery from the current site was not carried over.",
    galleryChip: "real photos of the hall",
    performerTitle: "A flexible space",
    tableBandQuote: "One long table, laid with care. The rest is music.",
    inquire: "Inquire",
    menuBtn: "Menu",
    closeBtn: "Close",
    galleryMore: "Full gallery",
    exploreTitle: "Explore more",
    pageTitleGallery: "Real photos, a real hall",
    pageTitleEvents: "The organising is part of the hall",
    pageTitleMenu: "The kitchen is ours, the taste is yours",
    pageTitleServices: "Everything for the day, under one roof",
  },
} as const;
