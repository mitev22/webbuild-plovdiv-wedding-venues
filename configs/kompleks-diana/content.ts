/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Every fact below was harvested VERBATIM from komplex-diana.com on 2026-07-22
 * (raw curl with -k: the certificate is issued for www.s815.sureserver.com and
 * does not cover the domain, so browsers hard-block the site).
 * Rules honoured: capacity published, price extracted via the form; reviews
 * verbatim-or-absent (absent — the site publishes none); empty fields stay empty.
 */

export const venue = {
  slug: "kompleks-diana",
  name: "Complex Diana",
  nameBg: "Комплекс Диана",
  // Nav lockup + the giant hero wordmark (Likova move)
  wordmark: { bg: "Комплекс Диана", en: "Complex Diana" },
  navMark: { bg: "КОМПЛЕКС ДИАНА", en: "COMPLEX DIANA" },
  logo: { src: "/brand/diana-logo.png?v=1", w: 180, h: 26 },
  town: "с. Червен, общ. Асеновград",
  type: "hotel" as const,
  // The venue's own space, used in alt text (garden, not "hall")
  venueNoun: { bg: "градината", en: "the garden" },
  address: "село Червен, община Асеновград",
  addressEn: "Cherven village, Asenovgrad municipality",
  addressStructured: { street: "село Червен", locality: "Асеновград" },
  phone: ["0888 767807", "0889 441165"],
  phoneHref: "tel:+359888767807",
  phoneE164: "+359888767807",
  email: "kompleks_diana@abv.bg",
  instagram: "", // няма профил, посочен в сайта → празно остава празно (handoff)
  facebook: "",
  sameAs: ["https://komplex-diana.com"],
  mapQuery: "Комплекс+Диана+село+Червен+община+Асеновград",
  maxCapacity: 140,
  // ——— Публикувани капацитети (about.htm, спецификация на комплекса) ———
  capacity: [
    { configuration: "лятна градина", max: 140 },
    { configuration: "ресторант", max: 60 }, // сайтът пише „55-60 места“
    { configuration: "механа", max: 20 },
  ],
  spaces: [
    { name: "Лятна градина", capacity: 140, indoor: false, note: "със собствена пещ и детски кът" },
    { name: "Ресторант", capacity: 60, indoor: true, note: "зимен ресторант, традиционни родопски ястия" },
    { name: "Механа", capacity: 20, indoor: true, note: "напълно оборудвана, наем 80 лв/вечер" },
    { name: "Барбекю", capacity: 20, indoor: false, note: "скара с дървени въглища и пещ за агнета и пълнен шаран" },
  ],
  // Няма публикувани сватбени пакети и няма публикуван куверт. Вместо цена
  // показваме буквален инвентар от реално обявените услуги (Cannon Green модел).
  packages: [] as { name: string; menu: string; feesWaived: boolean; gift?: string }[],
  packageIncludes: [
    "Лятна градина със 140 места и собствена пещ",
    "Ресторант с традиционни родопски ястия",
    "Печено агне, пълнен шаран или пъстърва на скара",
    "Механа с капацитет 20 човека",
    "Барбекю със скара на дървени въглища",
    "Открит басейн с шезлонги",
    "Сауна, парна баня и солариум",
    "Настаняване в хотела и в три самостоятелни вили",
    "Денонощен паркинг",
    "Собствен транспорт на комплекса",
  ],
  packageAssist:
    "Организиране на пикник, тържества на открито и градински партита, масажи, велосипеди под наем, конна езда, хранителен магазин и интернет достъп.",
  whyUs: [
    "Лятна градина със 140 места, оградена от родопска природа",
    "Собствена пещ в градината за печено агне и пълнен шаран",
    "Тържества на открито и градински партита",
    "Открит басейн с шезлонги за гостите",
    "Настаняване на място: шест двойни стаи, апартамент и три вили",
    "Кухня с традиционни родопски ястия",
    "Денонощен паркинг и собствен транспорт",
    "Тишина и персонално отношение на домакините",
  ],
  parking: "Денонощен паркинг", // брой места непубликуван (handoff)
  seasonsAvailable: [
    "Пролет 2026", "Лято 2026", "Есен 2026", "Зима 2026",
    "Пролет 2027", "Лято 2027", "Есен 2027", "Зима 2027",
  ],
  reviews: [] as { name: string; date: string; text: string }[], // verbatim-or-absent → absent
  handoff: [
    "Реални снимки на лятната градина, механата, басейна и минали тържества",
    "Куверт и ценообразуване за сватбено тържество: сайтът публикува само цени за нощувки и наем на механата (80 лв/вечер)",
    "Капацитет по конфигурации за лятната градина: седнали, бюфет, коктейл, церемония",
    "Противоречие в публикувания капацитет на ресторанта: началната страница пише „ресторант с четиридесет места“, а спецификацията в „за комплекса“ пише „ресторант - 55-60 места“",
    "Валиден TLS сертификат: сертификатът на komplex-diana.com е издаден за www.s815.sureserver.com и браузърите блокират сайта с предупреждение на цял екран",
    "Адресът reservations@complex-diana.com е обявен като „скоро!“ от 2008 година и още не работи",
    "Работно време на ресторанта и на градината",
    "Брой паркоместа: публикувано е само „денонощен паркинг“",
    "Web3Forms access key за формата за запитване",
    "Страница във Facebook или Instagram: в сайта няма нито един линк към социална мрежа",
    "Работеща Google Maps локация",
    "Актуалност на цените за нощувки: 35 € / 68,45 лв и 45 € / 88 лв стоят непроменени от 2008 година",
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

// ——— UI strings, BG primary / EN secondary ———
export const dict = {
  bg: {
    langCode: "bg",
    otherLangHref: "/en/",
    otherLangLabel: "EN",
    metaTitle: "Комплекс Диана | Градински сватби и тържества край Асеновград",
    metaDescription:
      "Комплекс Диана в село Червен, община Асеновград: лятна градина със 140 места, ресторант с родопска кухня, басейн и настаняване на място. Изпратете запитване за вашата дата.",
    navCity: "с. Червен",
    navSpot: "Асеновград",
    navSeats: "140 места в градината",
    inquire: "Запитване",
    call: "Обадете се",
    atmosphereNote: "атмосферни визуализации, предстои добавяне на снимки на градината",
    seasonHint: "Една градина в четири сезона. Изберете вашия.",
    scrollCue: "Разгледайте деня",
    chapters: [
      { id: "pristigane", label: "Пристигане" },
      { id: "ceremonia", label: "Церемония" },
      { id: "vecherya", label: "Вечеря" },
      { id: "tanci", label: "Танци" },
      { id: "sboguvane", label: "Сбогуване" },
    ],
    ch1Title: "Комплекс Диана. Градински тържества в полите на Родопите.",
    ch1Lead:
      "Денят започва с пристигането. Гостите ви оставят колите на денонощния паркинг в село Червен, община Асеновград, и влизат в двор с открит басейн и лятна градина със сто и четиридесет места.",
    gettingHere: "Как се стига",
    gettingHereRows: [
      ["Адрес", "село Червен, община Асеновград"],
      ["Паркинг", "Денонощен паркинг"],
      ["За гости отвън", "Настаняване на място: хотел и три самостоятелни вили"],
    ],
    mapCta: "Вижте на картата",
    whyTitle: "Защо младоженците избират Комплекс Диана",
    ch2Title: "Церемонията под открито небе",
    ch2Lead:
      "Комплексът предлага тържества на открито и градински партита. Ритуалът може да се случи в самата градина, на няколко крачки от масите.",
    ch2Body:
      "Построен с вкус, комплексът съчетава удобствата на съвременния стил и строителните традиции на родопските майстори. Чарът на българското село, тишината и персоналното отношение на домакините остават с гостите ви дълго след деня.",
    ch3Title: "Вечерята излиза от собствената пещ",
    ch3Lead:
      "Менюто на кухнята е изпълнено с традиционни родопски ястия. Домакините могат да ви нагостят с прясно приготвено печено агне, пълнен шаран или пъстърва на скара, уловена лично от вас.",
    packagesTitle: "Какво включва мястото",
    packagesLead:
      "Комплекс Диана не публикува куверт. Вместо цена показваме буквално какво стои на разположение за вашия ден. Опишете тържеството си във формата и ще получите оферта за вашата дата и брой гости.",
    includesTitle: "На разположение за вашето тържество",
    ch4Title: "Танците продължават до последната песен",
    ch4Lead:
      "Градината и механата поемат празника, когато вечерята свърши. Механата е напълно оборудвана, с капацитет двадесет човека и наем осемдесет лева за вечер.",
    ch4Body:
      "Барбекюто е изградено през лятото на 2010 година. Разполага със скара с дървени въглища и пещ за печене на агнета и пълнен шаран, а капацитетът му е двадесет човека.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead:
      "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Публикуваме капацитета открито, а офертата е лична.",
    reviewsTitle: "Отзиви",
    reviewsLead: "Комплексът не публикува отзиви. Разделът остава празен, докато не бъдат предоставени истински.",
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
      "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Комплекс Диана.",
    footerRights: "Комплекс Диана · село Червен",
    // ——— Капацитетна лента: САМО публикувани числа ———
    capacityStats: [
      { value: "140", count: 140, label: "места в лятната градина" },
      { value: "55-60", label: "места в ресторанта" },
      { value: "20", count: 20, label: "места в механата" },
      { value: "Денонощен", label: "паркинг" },
    ],
  },
  en: {
    langCode: "en",
    otherLangHref: "/",
    otherLangLabel: "БГ",
    metaTitle: "Complex Diana | Garden weddings and celebrations near Asenovgrad",
    metaDescription:
      "Complex Diana in the village of Cherven, Asenovgrad: a summer garden seating 140, a restaurant serving Rhodope cuisine, a pool and accommodation on site. Send an enquiry for your date.",
    navCity: "Cherven",
    navSpot: "Asenovgrad",
    navSeats: "140 in the garden",
    inquire: "Inquire",
    call: "Call us",
    atmosphereNote: "atmospheric visualisations, garden photography to follow",
    seasonHint: "One garden across four seasons. Choose yours.",
    scrollCue: "Walk through the day",
    chapters: [
      { id: "pristigane", label: "Arrival" },
      { id: "ceremonia", label: "Ceremony" },
      { id: "vecherya", label: "Dinner" },
      { id: "tanci", label: "Dancing" },
      { id: "sboguvane", label: "Farewell" },
    ],
    ch1Title: "Complex Diana. Garden celebrations in the foothills of the Rhodopes.",
    ch1Lead:
      "The day begins with the arrival. Your guests leave their cars in the round-the-clock car park in the village of Cherven, Asenovgrad, and walk into a courtyard with an outdoor pool and a summer garden seating one hundred and forty.",
    gettingHere: "Getting here",
    gettingHereRows: [
      ["Address", "Cherven village, Asenovgrad municipality"],
      ["Parking", "Round-the-clock car park"],
      ["Out-of-town guests", "Accommodation on site: the hotel and three private villas"],
    ],
    mapCta: "View on the map",
    whyTitle: "Why couples choose Complex Diana",
    ch2Title: "The ceremony under an open sky",
    ch2Lead:
      "The complex hosts outdoor celebrations and garden parties. The ritual itself can take place in the garden, a few steps from the tables.",
    ch2Body:
      "Built with taste, the complex combines the comforts of a contemporary style with the building traditions of the Rhodope master craftsmen. The charm of the Bulgarian village, the quiet and the hosts' personal attention stay with your guests long after the day.",
    ch3Title: "Dinner comes out of the garden's own oven",
    ch3Lead:
      "The kitchen's menu is built on traditional Rhodope dishes. The hosts can serve you freshly roasted lamb, stuffed carp or grilled trout that you caught yourself.",
    packagesTitle: "What the place includes",
    packagesLead:
      "Complex Diana publishes no per-head price. Instead of a figure we show you literally what is at your disposal for the day. Describe your celebration in the form and you will receive an offer for your date and guest count.",
    includesTitle: "At your disposal for the celebration",
    ch4Title: "The dancing goes on until the last song",
    ch4Lead:
      "The garden and the mehana carry the party once dinner is over. The mehana is fully equipped, seats twenty and is let for eighty leva an evening.",
    ch4Body:
      "The barbecue was built in the summer of 2010. It has a charcoal grill and an oven for roasting lamb and stuffed carp, and it seats twenty.",
    ch5Title: "The farewell is a new beginning",
    ch5Lead:
      "Describe your day: season, guest count, anticipated budget. We publish our capacity openly, and the offer is personal.",
    reviewsTitle: "Reviews",
    reviewsLead: "The complex publishes no reviews. This section stays empty until real ones are supplied.",
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
      "Spec demonstration site by Meridian Solutions. Not the official Complex Diana website.",
    footerRights: "Complex Diana · Cherven",
    capacityStats: [
      { value: "140", count: 140, label: "seats in the summer garden" },
      { value: "55-60", label: "seats in the restaurant" },
      { value: "20", count: 20, label: "seats in the mehana" },
      { value: "Round-the-clock", label: "car park" },
    ],
  },
} as const;

export type Lang = keyof typeof dict;

export const seasonNamesEn: Record<Season, string> = {
  spring: "Spring", summer: "Summer", autumn: "Autumn", winter: "Winter",
};

export const packageNamesEn: Record<string, string> = {};

export const packageIncludesEn = [
  "A summer garden seating 140, with its own oven",
  "A restaurant serving traditional Rhodope dishes",
  "Roast lamb, stuffed carp or grilled trout",
  "A mehana tavern seating 20",
  "A barbecue with a charcoal grill",
  "An outdoor pool with sun loungers",
  "Sauna, steam room and solarium",
  "Accommodation in the hotel and three private villas",
  "A round-the-clock car park",
  "The complex's own transport",
];

export const packageAssistEn =
  "Picnics, outdoor celebrations and garden parties, massages, bicycle hire, horse riding, a food shop and internet access.";

export const whyUsEn = [
  "A summer garden seating 140, framed by Rhodope woodland",
  "The garden's own oven for roast lamb and stuffed carp",
  "Outdoor celebrations and garden parties",
  "An outdoor pool with sun loungers for your guests",
  "Accommodation on site: six double rooms, an apartment and three villas",
  "A kitchen built on traditional Rhodope dishes",
  "A round-the-clock car park and the complex's own transport",
  "Quiet, and the hosts' personal attention",
];
