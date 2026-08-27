/**
 * Content pack — extension: full section coverage of etra.bg (harvested verbatim
 * 2026-07-22). Menus, services, technical rider, event types, gallery albums.
 * Dish names/descriptions VERBATIM from etra.bg/osnovno-menu, /vegetarianski,
 * /detsko-menu; services from /uslugi; event facts from the respective pages.
 * Gallery photos are Etra Hall's own real photographs, mirrored for the demo.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "salati",
    label: "Салати",
    dishes: [
      { n: "Салата със запечено козе сирене", d: "домат кумато, алабаш и зелени смокини", g: "300 г" },
      { n: "Салата „Ди Парма“", d: "микс от свежи салати с печени зеленчуци, моцарела, чери домати и прошуто „Ди Парма“", g: "300 г" },
      { n: "Традиционно „Капрезе“", d: "с билково песто и кедрови ядки", g: "300 г" },
      { n: "Салата „Олимпия“", d: "мус от сирена с маслини и пресни билки, домат, краставица и мариновани печени чушки, с три вида хляб", g: "300 г" },
      { n: "Микс от свежи салати", d: "с рукола, чери домати, прошуто, люспи пармезан и круша с малинов винегрет и гризини", g: "300 г" },
    ],
  },
  {
    key: "predyastia",
    label: "Предястия",
    dishes: [
      { n: "Телешко карпачо Блек Ангъс", d: "с рукола и балсамико", g: "200 г" },
      { n: "Севиче октопод и калмари", d: "с ананас, чери домат и кориандър", g: "200 г" },
      { n: "Татаки от червен тон", d: "върху крем от едамаме, черен сусам и чътни от праскова", g: "200 г" },
      { n: "Пуширан медальон от сьомга", d: "с аспержи и сос „Перно“", g: "200 г" },
      { n: "Глазирани телешки кюфтенца", d: "с горчичен сос и мащерка", g: "200 г" },
    ],
  },
  {
    key: "osnovni",
    label: "Основни ястия",
    dishes: [
      { n: "Микс от пилешки, телешки и свински медальони", d: "с горчичен сос и задушени зеленчуци", g: "350 г" },
      { n: "Пилешко филе с чесън, лимон и босилек", d: "върху рататуй със суфле от броколи и сос беарнез", g: "350 г" },
      { n: "Сочно свинско бонфиле с билкови трохи", d: "със спаначен дюксел, зелен боб и грейви сос", g: "350 г" },
      { n: "Руладина от свинско месо и пикантен колбас", d: "със сушени плодове, сос от синьо сирене и картофи „Делфиноаз“", g: "350 г" },
    ],
  },
  {
    key: "vegetarianski",
    label: "Вегетариански",
    note: "Някои от ястията в менюто могат да бъдат приготвени във вегетариански вариант.",
    dishes: [
      { n: "Рататуй с козе сирене и пресни билки", g: "300 г" },
      { n: "Талятели с чери домати, сос песто и пармезан", g: "300 г" },
      { n: "Пълнени тиквички с яйце, сирене и кашкавал", g: "350 г" },
      { n: "Картофен гратен с домати и пармезан", g: "350 г" },
      { n: "Ризото със зеленчуци", g: "250 г" },
    ],
  },
  {
    key: "detsko",
    label: "Детско меню",
    note: "За децата може да осигурим бавачка и аниматор, както и детско меню по ваш избор или детска маса.",
    dishes: [
      { n: "Пилешки филенца с млечен сос", d: "гарнитура пържени картофи, краставица и домат + сок и земел", g: "300 г" },
      { n: "Плата за детска маса", d: "мини бъргъри, пицети и пилешки филенца, пържени картофи, дипове с моркови и краставици" },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "salati",
    label: "Salads",
    dishes: [
      { n: "Baked goat-cheese salad", d: "kumato tomato, kohlrabi and green figs", g: "300 g" },
      { n: "“Di Parma” salad", d: "fresh greens with roasted vegetables, mozzarella, cherry tomatoes and Parma prosciutto", g: "300 g" },
      { n: "Traditional Caprese", d: "with herb pesto and pine nuts", g: "300 g" },
      { n: "“Olympia” salad", d: "cheese mousse with olives and fresh herbs, tomato, cucumber and marinated roasted peppers, three breads", g: "300 g" },
      { n: "Fresh greens mix", d: "rocket, cherry tomatoes, prosciutto, parmesan shavings and pear, raspberry vinaigrette and grissini", g: "300 g" },
    ],
  },
  {
    key: "predyastia",
    label: "Starters",
    dishes: [
      { n: "Black Angus beef carpaccio", d: "with rocket and balsamic", g: "200 g" },
      { n: "Octopus & calamari ceviche", d: "with pineapple, cherry tomato and coriander", g: "200 g" },
      { n: "Red tuna tataki", d: "on edamame cream, black sesame and peach chutney", g: "200 g" },
      { n: "Poached salmon medallion", d: "with asparagus and Pernod sauce", g: "200 g" },
      { n: "Glazed veal meatballs", d: "with mustard sauce and thyme", g: "200 g" },
    ],
  },
  {
    key: "osnovni",
    label: "Mains",
    dishes: [
      { n: "Chicken, veal & pork medallion mix", d: "with mustard sauce and steamed vegetables", g: "350 g" },
      { n: "Chicken fillet with garlic, lemon and basil", d: "on ratatouille with broccoli soufflé and béarnaise", g: "350 g" },
      { n: "Pork tenderloin in herb crumbs", d: "with spinach duxelles, green beans and gravy", g: "350 g" },
      { n: "Pork & spicy-sausage roulade", d: "with dried fruit, blue-cheese sauce and potatoes Dauphinoise", g: "350 g" },
    ],
  },
  {
    key: "vegetarianski",
    label: "Vegetarian",
    note: "Many dishes on the menu can be prepared in a vegetarian variant.",
    dishes: [
      { n: "Ratatouille with goat cheese and fresh herbs", g: "300 g" },
      { n: "Tagliatelle with cherry tomatoes, pesto and parmesan", g: "300 g" },
      { n: "Stuffed courgettes with egg and two cheeses", g: "350 g" },
      { n: "Potato gratin with tomatoes and parmesan", g: "350 g" },
      { n: "Vegetable risotto", g: "250 g" },
    ],
  },
  {
    key: "detsko",
    label: "Kids' menu",
    note: "We can provide a babysitter and an entertainer, plus a kids' menu of your choosing or a kids' table.",
    dishes: [
      { n: "Chicken strips in cream sauce", d: "fries, cucumber and tomato + juice and a roll", g: "300 g" },
      { n: "Kids'-table platter", d: "mini burgers, pizzette and chicken strips, fries, carrot & cucumber dips" },
    ],
  },
];

export const menuFooterBg =
  "Менюта от 3 до 5 степени, лично меню специално за вас и кетъринг при заявка. Собствена кухня с подбрани продукти.";
export const menuFooterEn =
  "Menus from 3 to 5 courses, a personal menu composed for you and catering on request. An in-house kitchen with selected produce.";

// ——— Услуги (etra.bg/uslugi, verbatim condensed) ———
export const servicesBg = [
  "Организация на всяко тържество и събитие",
  "Декорация с богат избор от собствения отдел „Декор“",
  "Флорист",
  "Открит парти бус за обиколка или извозване на гостите",
  "Аниматор за малките гости",
  "Бавачка в отделна стая в комплекса",
  "Барман за специални коктейли",
  "Координатор и хостеса",
  "Съдействие за настаняване в хотел",
  "Транспортни услуги и кола под наем с личен шофьор",
  "Собствена кухня: менюта от 3 до 5 степени, лично меню, кетъринг",
  "Бизнес етикет в обслужването и последователно сервиране",
];
export const servicesEn = [
  "Full organisation of any celebration or event",
  "Décor with a rich selection from the in-house décor department",
  "Florist",
  "Open-top party bus for city tours or guest transfers",
  "Entertainer for the little guests",
  "Babysitter in a separate room in the complex",
  "Bartender for signature cocktails",
  "Coordinator and hostess",
  "Assistance with hotel accommodation",
  "Transport services and chauffeured car hire",
  "In-house kitchen: 3-to-5-course menus, personal menus, catering",
  "Business etiquette service with synchronised plating",
];

// ——— Техника на залата (uslugi + firmeni-sabitia, verbatim) ———
export const techBg = [
  "Озвучаване",
  "Осветление",
  "185-инчов проектор",
  "Пушек машина",
  "Машина за конфети",
  "Пироефекти и заря",
  "Машина за балончета",
];
export const techEn = [
  "Sound system",
  "Stage lighting",
  "185-inch projector",
  "Smoke machine",
  "Confetti cannon",
  "Pyro effects & fireworks",
  "Bubble machine",
];

// ——— Не само сватби — event types (per-page harvest) ———
export const eventsBg = [
  {
    title: "Лични празници",
    body: "Рожден ден или юбилей, студентско парти, дипломиране, кръщене. Всеки повод, отбелязан със стил и елегантност.",
    fact: "Декор по ваше желание",
  },
  {
    title: "Фирмени събития",
    body: "Бизнес презентации, тим билдинг, семинари и конференции в просторна зала с екип за обслужване и поддръжка.",
    fact: "400 седящи места · 185″ проектор",
  },
  {
    title: "Моминско и ергенско парти",
    body: "Парти ленти, дизайнерски чаши, гривни и корони, открит парти бус и топ места в Комплекс 5 Points.",
    fact: "Парти бус за обиколка",
  },
  {
    title: "Празнични вечери",
    body: "Големите коледни и новогодишни партита под тепето: жива музика, програма и куверт с неограничени напитки.",
    fact: "Коледа · Нова година",
  },
];
export const eventsEn = [
  {
    title: "Private celebrations",
    body: "Birthdays and jubilees, graduation parties, christenings. Every occasion marked with style and elegance.",
    fact: "Décor of your choosing",
  },
  {
    title: "Corporate events",
    body: "Business presentations, team-building, seminars and conferences in a spacious hall with a full service team.",
    fact: "400 seated · 185″ projector",
  },
  {
    title: "Hen & stag parties",
    body: "Party sashes, designer glasses, bracelets and crowns, an open-top party bus and the best spots in 5 Points.",
    fact: "Party bus tours",
  },
  {
    title: "Festive nights",
    body: "The big Christmas and New Year parties under the hills: live music, a full programme and an all-inclusive cover.",
    fact: "Christmas · New Year's Eve",
  },
];

// ——— Гост-изпълнител (verbatim) ———
export const performerBg =
  "Гост-изпълнител, бенд, оркестър, квартет или трио, гайдари, ансамбъл, модерен балет или всякакъв вид програма. Екипът на Комплекс 5 Points от дълги години работи с най-добрите изпълнители на България и извън нея.";
export const performerEn =
  "A guest performer, band, orchestra, quartet or trio, bagpipers, folk ensemble, modern ballet or any programme you can imagine. The 5 Points team has worked with Bulgaria's finest performers for many years.";

// ——— Галерия — Etra Hall's OWN real photographs (mirrored album covers) ———
export const gallery: { slug: string; bg: string; en: string; tall?: boolean }[] = [
  { slug: "zalata", bg: "Залата", en: "The hall" },
  { slug: "marieta-martin", bg: "Мариета и Мартин", en: "Marieta & Martin" },
  { slug: "sofia-vlado", bg: "София и Владо", en: "Sofia & Vlado" },
  { slug: "marineli-sebastian", bg: "Маринели и Себастиан", en: "Marineli & Sebastian", tall: true },
  { slug: "maria-ivan", bg: "Мария и Иван Дзаневи", en: "Maria & Ivan Dzanevi" },
  { slug: "ng-2025", bg: "Нова година 2025", en: "New Year 2025" },
  { slug: "yubiley", bg: "Юбилей", en: "A jubilee" },
  { slug: "winnersgroup", bg: "Конференция Winnersgroup", en: "Winnersgroup conference" },
  { slug: "abiturientski", bg: "Абитуриентски бал", en: "Prom night" },
  { slug: "ng-2024", bg: "Нова година 2024", en: "New Year 2024" },
  { slug: "just-a-day", bg: "Just a Day", en: "Just a Day" },
];

// ——— Multi-page navigation ———
export const navPages = {
  bg: [
    { href: "/", label: "Начало", hint: "сватбеният ден" },
    { href: "/menu/", label: "Меню", hint: "собствена кухня" },
    { href: "/sabitia/", label: "Събития", hint: "не само сватби" },
    { href: "/uslugi/", label: "Услуги", hint: "под един покрив" },
    { href: "/galeria/", label: "Галерия", hint: "реални снимки" },
    { href: "/#sboguvane", label: "Запитване", hint: "до 2 работни дни" },
  ],
  en: [
    { href: "/en/", label: "Home", hint: "the wedding day" },
    { href: "/en/menu/", label: "Menu", hint: "in-house kitchen" },
    { href: "/en/sabitia/", label: "Events", hint: "not only weddings" },
    { href: "/en/uslugi/", label: "Services", hint: "under one roof" },
    { href: "/en/galeria/", label: "Gallery", hint: "real photos" },
    { href: "/en/#sboguvane", label: "Inquire", hint: "within 2 business days" },
  ],
} as const;

export const extraStrings = {
  bg: {
    menuTitle: "Менюто",
    menuLead: "Собствена кухня, менюта от 3 до 5 степени. Подбрани предложения от действащото меню:",
    servicesTitle: "Услуги",
    servicesLead: "Всичко за деня се случва под един покрив. Това е разликата между зала и домакин.",
    techTitle: "Техника на залата",
    eventsTitle: "Не само сватби",
    eventsLead: "Залата е дом на всеки голям повод, от кръщене до годишна конференция.",
    galleryTitle: "Спомените остават",
    galleryLead: "Истински моменти от Етра Хол. Всички снимки са от реални събития в залата.",
    galleryChip: "реални снимки от залата",
    performerTitle: "Гост-изпълнител",
    tableBandQuote: "Една дълга маса, подредена с внимание. Останалото е музика.",
    inquire: "Запитване",
    menuBtn: "Меню",
    closeBtn: "Затвори",
    galleryMore: "Цялата галерия",
    exploreTitle: "Разгледайте още",
  },
  en: {
    menuTitle: "The menu",
    menuLead: "An in-house kitchen and 3-to-5-course menus. A selection from the current menu:",
    servicesTitle: "Services",
    servicesLead: "Everything for the day happens under one roof. That is the difference between a hall and a host.",
    techTitle: "In-hall equipment",
    eventsTitle: "Not only weddings",
    eventsLead: "The hall is home to every big occasion, from a christening to an annual conference.",
    galleryTitle: "The memories remain",
    galleryLead: "Real moments from Etra Hall. All photographs are from real events in the hall.",
    galleryChip: "real photos from the venue",
    performerTitle: "Guest performers",
    tableBandQuote: "One long table, laid with care. The rest is music.",
    inquire: "Inquire",
    menuBtn: "Menu",
    closeBtn: "Close",
    galleryMore: "Full gallery",
    exploreTitle: "Explore more",
  },
} as const;
