/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Every fact below was harvested VERBATIM from zalaroyal.com on 2026-07-22.
 *
 * ⚠ zalaroyal.com is the PRIMARY source and it publishes "капацитет до 440 гости".
 * A second, competing site for the same hall exists at zalaroyal.asenovgradbg.com
 * and states 420. That conflict is NOT resolved here: 440 is what the primary site
 * publishes, and the contradiction itself is a handoff item and a pitch point.
 *
 * ⚠ The commercial defect: a raw-HTML grep for "<form" on zalaroyal.com returns
 * ZERO forms anywhere on the page. There is no way to enquire except copying a
 * phone number. That is what this build exists to fix.
 *
 * Capacity published, price extracted via the form. Reviews VERBATIM from their
 * own testimonials section. Empty fields stay empty.
 */

export const venue = {
  slug: "zala-royal",
  name: "Zala Royal",
  nameBg: "Сватбена зала Роял",
  wordmark: { bg: "Зала Роял", en: "Zala Royal" },
  navMark: { bg: "ЗАЛА РОЯЛ", en: "ZALA ROYAL" },
  logo: { src: "/brand/royal-logo.png?v=1", w: 150, h: 56 },
  town: "гр. Асеновград",
  type: "hall" as const,
  venueNoun: { bg: "залата", en: "the hall" },
  address: "ул. Стоян Джансъзов 46, гр. Асеновград",
  addressEn: "46 Stoyan Dzhansazov St, Asenovgrad",
  addressStructured: { street: "ул. Стоян Джансъзов 46", locality: "Асеновград" },
  phone: ["0879 22 27 75", "0888 21 79 02"],
  phoneHref: "tel:+359879222775",
  phoneE164: "+359879222775",
  email: "", // сайтът не публикува имейл адрес (handoff)
  instagram: "",
  facebook: "",
  sameAs: ["https://zalaroyal.com"],
  mapQuery: "Сватбена+зала+Роял+ул.+Стоян+Джансъзов+46+Асеновград",
  maxCapacity: 440,
  // ——— Публикувани капацитети (zalaroyal.com) ———
  capacity: [
    { configuration: "гости", max: 440 },
    { configuration: "по-интимно тържество", max: 100 },
  ],
  spaces: [
    { name: "Залата", capacity: 440, indoor: true, note: "просторен дансинг, гъвкаво пространство" },
    { name: "Градината пред залата", capacity: 0, indoor: false, note: "изнесен ритуал за сключване на граждански брак" },
  ],
  packages: [] as { name: string; menu: string; feesWaived: boolean; gift?: string }[],
  // Дословно от „Част от нашите предимства“ и водещия текст на zalaroyal.com.
  packageIncludes: [
    "Зала с капацитет до 440 гости",
    "Просторен дансинг",
    "Изнесен ритуал в градината пред залата",
    "Собствена кухня и професионален екип",
    "Менюта, подготвяни на място",
    "Персонализирани декорации",
    "Професионално осветление",
    "Озвучаване",
    "Цялостна организация на тържеството",
    "Координация в самия ден",
    "Собствен паркинг",
    "Локация на 15 км от Пловдив",
  ],
  packageAssist:
    "Екипът поема цялостната организация на тържеството, от първоначалните идеи до финалните щрихи: избор на концепция, подбор на меню за всеки вкус и координация в самия ден.",
  whyUs: [
    "Капацитет до 440 гости и просторен дансинг",
    "Гъвкаво пространство: от около 100 гости до мащабна сватба",
    "Изнесен ритуал в градината пред залата",
    "Собствена кухня с висококачествени продукти",
    "Менюта по индивидуален подбор",
    "Цялостна организация от концепция до координация в деня",
    "Сватбена декорация, съобразена с вашата визия",
    "Собствен паркинг и локация на 15 км от Пловдив",
  ],
  parking: "Собствен паркинг", // брой места непубликуван (handoff)
  seasonsAvailable: [
    "Пролет 2026", "Лято 2026", "Есен 2026", "Зима 2026",
    "Пролет 2027", "Лято 2027", "Есен 2027", "Зима 2027",
  ],
  // ——— ДОСЛОВНО от секцията с отзиви на zalaroyal.com. Дати не се публикуват. ———
  reviews: [
    {
      name: "Петя и Георги",
      date: "",
      text: "Направихме най-добрият избор! Сватбената декорация и всички детайли около сватбата бяха просто перфектни. Изказваме своите благодарности на Бисер и целия екип на Сватбена зала „Роял“, че превърнаха нашата сватба в една истинска приказка!",
    },
    {
      name: "Елена и Димитър",
      date: "",
      text: "Още от първата ни среща с екипа на Сватбена зала „Роял“ усетихме професионализъм и внимание към всеки детайл. Те поеха цялата организация и ни дадоха спокойствието да се насладим на деня си без напрежение. Залата, декорацията и атмосферата бяха точно такива, каквито си мечтаехме.",
    },
    {
      name: "Маргарита и Теодор",
      date: "",
      text: "Залата е просторна, елегантна и изключително удобна за голям брой гости. Локацията и паркингът улесниха всички, а екипът беше до нас във всеки момент. Благодарим за отношението и професионализма, бихме избрали Зала Роял отново.",
    },
  ] as { name: string; date: string; text: string }[],
  handoff: [
    "⚠ Два различни сайта с два различни капацитета за една и съща зала: zalaroyal.com публикува „до 440 гости“, а zalaroyal.asenovgradbg.com публикува 420. Този спец-сайт следва основния домейн (440). Конфликтът трябва да бъде решен от собственика, не от нас",
    "Вторият сайт носи и различен контакт (hotelchiflika@abv.bg) и футър „2008 - 2025“: да се реши кой домейн остава",
    "Куверт и пакетни цени: сайтът не публикува нито една цена",
    "Капацитет по конфигурации: седнали, бюфет, коктейл, церемония (публикувано е само общо „до 440 гости“)",
    "Имейл адрес за контакт: сайтът публикува само два телефона",
    "Собствени снимки на залата и на минали сватби: сайтът разчита основно на стокови снимки на двойки и на златни клип-арт икони, а не на фотографии на самата зала",
    "Брой паркоместа: публикувано е само „собствен паркинг“",
    "Работещ Google Maps линк: линкът „Локацията ни в Google Maps“ води към блог секцията, а не към карта",
    "Web3Forms access key за формата за запитване (сайтът им няма нито една форма)",
    "Страници във Facebook и Instagram: футърът приканва „Последвайте ни в социалните мрежи“, но не сочи профили",
    "Капацитет на градината пред залата за изнесен ритуал",
    "Меню: собствената кухня се обявява, но нито едно ястие не е публикувано",
    "Текст за политика за поверителност: преглед от юрист",
  ],
} as const;

export type Season = "spring" | "summer" | "autumn" | "winter";

export const seasons: { key: Season; bg: string; en: string }[] = [
  { key: "spring", bg: "Пролет", en: "Spring" },
  { key: "summer", bg: "Лято", en: "Summer" },
  { key: "autumn", bg: "Есен", en: "Autumn" },
  { key: "winter", bg: "Зима", en: "Winter" },
];

export const dict = {
  bg: {
    langCode: "bg",
    otherLangHref: "/en/",
    otherLangLabel: "EN",
    metaTitle: "Сватбена зала Роял | Сватби до 440 гости в Асеновград",
    metaDescription:
      "Сватбена зала Роял в Асеновград: капацитет до 440 гости, собствена кухня, изнесен ритуал в градината пред залата и собствен паркинг. На 15 км от Пловдив.",
    navCity: "Асеновград",
    navSpot: "Стоян Джансъзов 46",
    navSeats: "до 440 гости",
    inquire: "Запитване",
    call: "Обадете се",
    atmosphereNote: "атмосферни визуализации, предстои добавяне на снимки на залата",
    seasonHint: "Една зала в четири сезона. Изберете вашия.",
    scrollCue: "Разгледайте деня",
    chapters: [
      { id: "pristigane", label: "Пристигане" },
      { id: "ceremonia", label: "Церемония" },
      { id: "vecherya", label: "Вечеря" },
      { id: "tanci", label: "Танци" },
      { id: "sboguvane", label: "Сбогуване" },
    ],
    ch1Title: "Сватбена зала Роял. До 440 гости в Асеновград.",
    ch1Lead:
      "Денят започва с пристигането. Залата се намира на улица „Стоян Джансъзов“ 46 в Асеновград, само на петнадесет километра от Пловдив. На разположение е собствен паркинг, който осигурява спокойствие през целия сватбен ден.",
    gettingHere: "Как се стига",
    gettingHereRows: [
      ["Адрес", "ул. Стоян Джансъзов 46, гр. Асеновград"],
      ["От Пловдив", "15 км"],
      ["Паркинг", "Собствен паркинг"],
    ],
    mapCta: "Вижте на картата",
    whyTitle: "Защо младоженците избират Зала Роял",
    ch2Title: "Ритуалът се случва в градината пред залата",
    ch2Lead:
      "Залата предлага възможност за изнесен ритуал за сключване на граждански брак в градината пред нея: стилно и романтично пространство, което създава тържествена и емоционална атмосфера за вашето най-важно „Да“.",
    ch2Body:
      "Екипът не само осигурява красива и функционална зала, но и поема цялостната организация на тържеството, от първоначалните идеи до финалните щрихи.",
    ch3Title: "Вечерята идва от собствената кухня",
    ch3Lead:
      "Залата разполага със собствена кухня и професионален екип, който подготвя менютата на място. Работи се само с висококачествени продукти и с възможност за индивидуален подбор според вкусовете на младоженците и гостите.",
    packagesTitle: "Какво включва залата",
    packagesLead:
      "Зала Роял не публикува куверт. Вместо цена показваме буквално какво стои на разположение за вашия ден. Опишете тържеството си във формата и ще получите оферта за вашата дата и брой гости.",
    includesTitle: "На разположение за вашето тържество",
    ch4Title: "Дансингът е проектиран за 440 души",
    ch4Lead:
      "Просторен дансинг и внимание към всеки детайл. Залата е проектирана специално да посреща най-вълнуващите моменти от живота ви в стилна, изискана и романтична обстановка.",
    ch4Body:
      "Пространството е гъвкаво и може да бъде адаптирано изцяло според индивидуалните нужди на младоженците, като е подходящо както за по-интимни тържества от около сто гости, така и за големи и мащабни сватби.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead:
      "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Публикуваме капацитета открито, а офертата е лична.",
    reviewsTitle: "Какво казват клиентите",
    reviewsLead: "Отзивите са дословни от сайта на залата.",
    formName: "Вашите имена",
    formContact: "Телефон или имейл",
    formSeason: "Сезон / дата",
    formSeasonPlaceholder: "Изберете сезон",
    formDateOptional: "Точна дата (по избор)",
    formGuests: "Брой гости",
    formBudget: "Ориентировъчен бюджет (лв.)",
    formBudgetHint: "Само число. Помага ни да предложим точния вариант.",
    formMessage: "Разкажете ни за вашия ден",
    formConsent: "Съгласен/на съм личните ми данни да бъдат използвани за отговор на запитването.",
    formSubmit: "Изпратете запитване",
    formPromise: "Ще Ви отговорим до 2 работни дни.",
    formSuccess: "Благодарим ви! Запитването е прието. Ще се свържем с вас до 2 работни дни.",
    formDemo: "(спец-демо: формата ще бъде активирана при предаване на сайта)",
    errRequired: "Задължително поле",
    errBudget: "Моля, въведете число",
    errContact: "Въведете валиден телефон или имейл",
    privacy: "Политика за поверителност",
    privacyHref: "/poveritelnost/",
    footerDemo:
      "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Сватбена зала Роял.",
    footerRights: "Сватбена зала Роял · Асеновград",
    capacityStats: [
      { value: "440", count: 440, label: "гости в залата" },
      { value: "100", count: 100, label: "гости при по-интимно тържество" },
      { value: "Собствен", label: "паркинг" },
      { value: "15", count: 15, label: "км от Пловдив" },
    ],
  },
  en: {
    langCode: "en",
    otherLangHref: "/",
    otherLangLabel: "БГ",
    metaTitle: "Zala Royal | Weddings for up to 440 guests in Asenovgrad",
    metaDescription:
      "Zala Royal wedding hall in Asenovgrad: capacity for up to 440 guests, an in-house kitchen, an outdoor civil ceremony in the garden and private parking. 15 km from Plovdiv.",
    navCity: "Asenovgrad",
    navSpot: "46 Stoyan Dzhansazov St",
    navSeats: "up to 440 guests",
    inquire: "Inquire",
    call: "Call us",
    atmosphereNote: "atmospheric visualisations, venue photography to follow",
    seasonHint: "One hall across four seasons. Choose yours.",
    scrollCue: "Walk through the day",
    chapters: [
      { id: "pristigane", label: "Arrival" },
      { id: "ceremonia", label: "Ceremony" },
      { id: "vecherya", label: "Dinner" },
      { id: "tanci", label: "Dancing" },
      { id: "sboguvane", label: "Farewell" },
    ],
    ch1Title: "Zala Royal. Up to 440 guests in Asenovgrad.",
    ch1Lead:
      "The day begins with the arrival. The hall stands at 46 Stoyan Dzhansazov Street in Asenovgrad, just fifteen kilometres from Plovdiv. Private parking is available, which keeps the whole wedding day calm.",
    gettingHere: "Getting here",
    gettingHereRows: [
      ["Address", "46 Stoyan Dzhansazov St, Asenovgrad"],
      ["From Plovdiv", "15 km"],
      ["Parking", "Private car park"],
    ],
    mapCta: "View on the map",
    whyTitle: "Why couples choose Zala Royal",
    ch2Title: "The ritual happens in the garden in front of the hall",
    ch2Lead:
      "The hall offers an outdoor civil ceremony in the garden in front of it: an elegant, romantic space that creates a ceremonial and emotional setting for the most important “yes” of your life.",
    ch2Body:
      "The team does not only provide a beautiful, functional hall; it takes on the entire organisation of your celebration, from the first ideas to the finishing touches.",
    ch3Title: "Dinner comes from the in-house kitchen",
    ch3Lead:
      "The hall has its own kitchen and a professional team that prepares the menus on site. They work only with high-quality produce, with the option of an individual selection to suit the couple's and the guests' tastes.",
    packagesTitle: "What the hall includes",
    packagesLead:
      "Zala Royal publishes no per-head price. Instead of a figure we show you literally what is at your disposal for the day. Describe your celebration in the form and you will receive an offer for your date and guest count.",
    includesTitle: "At your disposal for the celebration",
    ch4Title: "The dance floor is built for 440",
    ch4Lead:
      "A spacious dance floor and attention to every detail. The hall was designed specifically to host the most exciting moments of your life in a stylish, refined and romantic setting.",
    ch4Body:
      "The space is flexible and can be adapted entirely to the couple's needs, suiting both a more intimate celebration of around one hundred guests and a large, full-scale wedding.",
    ch5Title: "The farewell is a new beginning",
    ch5Lead:
      "Describe your day: season, guest count, anticipated budget. We publish our capacity openly, and the offer is personal.",
    reviewsTitle: "What clients say",
    reviewsLead: "Testimonials from the hall's own website, kept in the original Bulgarian exactly as they were written.",
    formName: "Your names",
    formContact: "Phone or email",
    formSeason: "Season / date",
    formSeasonPlaceholder: "Choose a season",
    formDateOptional: "Exact date (optional)",
    formGuests: "Guest count",
    formBudget: "Anticipated budget (BGN)",
    formBudgetHint: "Numerical values only. It helps us propose the right option.",
    formMessage: "Tell us about your day",
    formConsent: "I agree that my personal data may be used to reply to this enquiry.",
    formSubmit: "Send enquiry",
    formPromise: "We will reply within 2 business days.",
    formSuccess: "Thank you! Your enquiry has been received. We will be in touch within 2 business days.",
    formDemo: "(spec demo: the form will be activated on handover)",
    errRequired: "This field is required",
    errBudget: "Please enter a number",
    errContact: "Enter a valid phone or email",
    privacy: "Privacy policy",
    privacyHref: "/en/privacy/",
    footerDemo:
      "Spec demonstration site by Meridian Solutions. Not the official Zala Royal website.",
    footerRights: "Zala Royal · Asenovgrad",
    capacityStats: [
      { value: "440", count: 440, label: "guests in the hall" },
      { value: "100", count: 100, label: "guests for a more intimate day" },
      { value: "Private", label: "car park" },
      { value: "15", count: 15, label: "km from Plovdiv" },
    ],
  },
} as const;

export type Lang = keyof typeof dict;

export const seasonNamesEn: Record<Season, string> = {
  spring: "Spring", summer: "Summer", autumn: "Autumn", winter: "Winter",
};

export const packageNamesEn: Record<string, string> = {};

export const packageIncludesEn = [
  "A hall seating up to 440 guests",
  "A spacious dance floor",
  "An outdoor civil ceremony in the garden in front of the hall",
  "An in-house kitchen and a professional team",
  "Menus prepared on site",
  "Personalised decoration",
  "Professional lighting",
  "Sound system",
  "Full organisation of the celebration",
  "Coordination on the day itself",
  "A private car park",
  "A location 15 km from Plovdiv",
];

export const packageAssistEn =
  "The team takes on the entire organisation of the celebration, from the first ideas to the finishing touches: choosing the concept, selecting a menu for every taste and coordinating the day itself.";

export const whyUsEn = [
  "Capacity for up to 440 guests and a spacious dance floor",
  "A flexible space: from around 100 guests to a full-scale wedding",
  "An outdoor civil ceremony in the garden in front of the hall",
  "An in-house kitchen working with high-quality produce",
  "Menus chosen individually",
  "Full organisation, from concept to coordination on the day",
  "Wedding decoration shaped around your vision",
  "A private car park and a location 15 km from Plovdiv",
];
