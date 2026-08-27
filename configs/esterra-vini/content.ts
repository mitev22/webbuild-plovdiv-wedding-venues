/**
 * Content pack — INDUSTRY-wedding-venues.md §6 schema.
 * Every fact below was harvested VERBATIM on 2026-07-22 from esterra.anita.bg
 * and its sub-pages (/events, /food, /vtourism, /accommodation, /sports, /offers).
 *
 * ⚠ THE DEFECT THIS SITE EXISTS TO FIX: Esterra Vini has no domain of its own.
 * The "site" that surfaces in search is a sub-domain of a DIFFERENT business —
 * its footer reads "© 2026 Anita Guest House All Rights Reserved" and the prices
 * it shows (410,72 лв / 136,91 лв per night) are Anita's ROOM rates, not Esterra
 * event pricing. That page also still ships lorem ipsum in its newsletter block.
 *
 * Capacity published, price extracted via the form. Reviews are VERBATIM from
 * their own "Книга за гости" (guest book) — no dates are published, so none are
 * invented. Empty fields stay empty; every gap is on the handoff list.
 */

export const venue = {
  slug: "esterra-vini",
  name: "Esterra Vini",
  nameBg: "Естера Вини",
  wordmark: { bg: "Естера Вини", en: "Esterra Vini" },
  navMark: { bg: "ЕСТЕРА ВИНИ", en: "ESTERRA VINI" },
  logo: { src: "", w: 0, h: 0 }, // няма собствено лого за огледане (handoff)
  town: "гр. Перущица",
  type: "estate" as const,
  venueNoun: { bg: "имението", en: "the estate" },
  address: "местност Пастуша, гр. Перущица",
  addressEn: "Pastusha locality, Perushtitsa",
  addressStructured: { street: "местност Пастуша", locality: "Перущица" },
  phone: ["0884 675 777"],
  phoneHref: "tel:+359884675777",
  phoneE164: "+359884675777",
  email: "reservations@anita.bg", // ⚠ адресът е на Anita Guest House (handoff)
  instagram: "https://www.instagram.com/esterravini/",
  facebook: "https://www.facebook.com/Esterra-Vini-Pool-137361743556852/",
  sameAs: ["https://esterra.anita.bg"],
  mapQuery: "Esterra+Vini+Pool+Перущица",
  maxCapacity: 180,
  // ——— Публикувани капацитети (собствените страници на комплекса) ———
  capacity: [
    { configuration: "сватбено тържество на открито", max: 180 },
    { configuration: "около басейна", max: 35 },
    { configuration: "общо помещение (зима)", max: 30 },
    { configuration: "настаняване в четирите къщи", max: 28 },
  ],
  spaces: [
    { name: "Около басейна", capacity: 180, indoor: false, note: "сватбените тържества се организират на открито около басейна" },
    { name: "Открит басейн", capacity: 35, indoor: false, note: "отопляем, с шезлонги и шатри" },
    { name: "Общо помещение (Сграда Барбекю)", capacity: 30, indoor: true, note: "зимен сезон: маси и столове, мека мебел, бар плот, самостоятелни санитарни възли" },
    { name: "Къщи Естера Вини", capacity: 28, indoor: true, note: "4 броя, общ капацитет 24-28 човека, всяка с 3 двойни стаи и 2 бани" },
  ],
  packages: [] as { name: string; menu: string; feesWaived: boolean; gift?: string }[],
  // Дословно от /events: „Ние ви предлагаме: НАСТАНЯВАНЕ, КОКТЕЙЛ ЗА ДОБРЕ ДОШЛИ,
  // БРАЧНА ЦЕРЕМОНИЯ / ИЗНЕСЕН РИТУАЛ, ПРАЗНИЧНА ВЕЧЕРЯ ...и други“
  packageIncludes: [
    "Настаняване в четирите къщи на място",
    "Коктейл за добре дошли",
    "Брачна церемония и изнесен ритуал",
    "Празнична вечеря",
    "Кетъринг обслужване по предварителна заявка",
    "Отопляем открит басейн с 35 места",
    "Външно джакузи и дървена сауна под открито небе",
    "Летен бар непосредствено до басейна",
    "Външно барбекю на дървени въглища",
    "Винени дегустации в избата",
    "Горски детски кът",
    "Трансфери от летище, автогара или населено място",
  ],
  packageAssist:
    "Плащане с карта VISA, MasterCard, MAESTRO и VISA Electron. През зимния сезон общото закрито помещение с тридесет места поема събитието, непосредствено до къщите.",
  whyUs: [
    "Сватбено тържество на открито около басейна, до 180 човека",
    "Лозя, борова гора и отопляем басейн в един двор",
    "Четири къщи за гости на място, за 24 до 28 човека",
    "Външно джакузи и дървена сауна под открито небе",
    "Летен бар в сянката на боровата гора",
    "Вино собствено производство и дегустации в избата",
    "На 15 км от Пловдив и на 120 км от София",
    "Трансфери от летище, автогара или населено място",
  ],
  parking: "Паркинг на разположение на гостите", // брой места непубликуван (handoff)
  seasonsAvailable: [
    "Пролет 2026", "Лято 2026", "Есен 2026", "Зима 2026",
    "Пролет 2027", "Лято 2027", "Есен 2027", "Зима 2027",
  ],
  // ——— ДОСЛОВНО от „Книга за гости“ на esterra.anita.bg. Дати не се публикуват. ———
  reviews: [
    {
      name: "сем. Палавееви",
      date: "",
      text: "Перфектен екстериор на къщата, подходящ за подножието на Родопите. Интериор на стаите, даващ чувството за простор и успокояваща атмосфера. Салон в същия стил, идеално преценен. Браво! За нас беше удоволствие!",
    },
    {
      name: "Е. Цанков и М. Георгиева",
      date: "",
      text: "Пожелаваме да имате силата и волята да бъдете добри стопани и управници на това прекрасно място. Бъдете здрави, успешни и нека винаги да имате доволни гости. Рекламирайте това място, ние също ще го направим. Много успехи от сърце!",
    },
    {
      name: "Випуск 1989 г. на ВИИ „Карл Маркс“",
      date: "",
      text: "Просто бяхме изненадани от наличието на това малко бижу в полите на Родопите. Има много вкус в това, което сте направили. Пожелаваме и обслужването да бъде на ниво след откриването на къщата. Успех!",
    },
  ] as { name: string; date: string; text: string }[],
  handoff: [
    "Собствен домейн: сайтът, който излиза при търсене, е поддомейн на друг бизнес (esterra.anita.bg), а футърът му гласи „© 2026 Anita Guest House All Rights Reserved“",
    "Цените на този поддомейн са на Anita Guest House (КЪЩА 210,00 € / 410,72 лв и ДВОЙНА СТАЯ 70,00 € / 136,91 лв на нощувка), а не цени за събитие в Естера Вини",
    "Куверт и пакетни цени за сватбено тържество: не са публикувани никъде",
    "Разминаване в капацитета: собствената страница „Мероприятия“ пише максимален капацитет 180 човека, а портални профили сочат 150 гости",
    "Разминаване в работното време: в горната лента пише 09:00-20:00, а във футъра пише пон.-събота 09:00-18:00",
    "Латински плейсхолдър текст (lorem ipsum) в блока за бюлетин на живата страница: „Suspendisse sed sollicitudin nisl, at dignissim libero...“",
    "Собствено лого и фирмена палитра: Естера Вини няма собствена визуална идентичност за извличане, затова палитрата тук е изведена от самото имение",
    "Собствен имейл адрес: резервациите се приемат на reservations@anita.bg, адрес на друг бизнес",
    "Брой паркоместа: публикувано е само „паркинг“",
    "Общ брой стаи: портален профил сочи 27, а собствената страница описва 4 къщи с общ капацитет 24-28 човека",
    "Реални снимки от сватбено тържество в имението",
    "Web3Forms access key за формата за запитване",
    "Работещ Google Maps линк и точен адрес с пощенски код",
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
    metaTitle: "Esterra Vini | Сватби сред лозя и борова гора край Перущица",
    metaDescription:
      "Комплекс Естера Вини в местност Пастуша, Перущица: сватбени тържества до 180 човека около басейна, къщи за настаняване, лозя и борова гора. На 15 км от Пловдив.",
    navCity: "Перущица",
    navSpot: "Пастуша",
    navSeats: "до 180 гости",
    inquire: "Запитване",
    call: "Обадете се",
    atmosphereNote: "атмосферни визуализации, предстои добавяне на снимки от сватба в имението",
    seasonHint: "Едно имение в четири сезона. Изберете вашия.",
    scrollCue: "Разгледайте деня",
    chapters: [
      { id: "pristigane", label: "Пристигане" },
      { id: "ceremonia", label: "Церемония" },
      { id: "vecherya", label: "Вечеря" },
      { id: "tanci", label: "Танци" },
      { id: "sboguvane", label: "Сбогуване" },
    ],
    ch1Title: "Естера Вини. Сватби сред лозя, борова гора и вода.",
    ch1Lead:
      "Денят започва с пристигането. Имението е в местност Пастуша, малко преди входа на Перущица, в подножието на Родопите. На петнадесет километра от Пловдив и на сто и двадесет от София.",
    gettingHere: "Как се стига",
    gettingHereRows: [
      ["Адрес", "местност Пастуша, гр. Перущица"],
      ["От Пловдив", "15 км"],
      ["От София", "120 км"],
      ["Трансфери", "от летище, автогара или населено място"],
    ],
    mapCta: "Вижте на картата",
    whyTitle: "Защо младоженците избират Естера Вини",
    ch2Title: "Церемонията се случва край водата",
    ch2Lead:
      "Сватбените тържества се организират на открито около басейна на комплекса и са с максимален капацитет сто и осемдесет човека. Брачната церемония и изнесеният ритуал са част от предложението.",
    ch2Body:
      "Романтичната разходка по тесните пътечки сред ароматните лозя ще ви пренесе в духа на Тоскана. Сред тишината и спокойствието на природата можете да релаксирате край открития и отопляем басейн с изглед към величествената борова гора.",
    ch3Title: "Вечерята идва от собствената кухня и от собствената изба",
    ch3Lead:
      "Кетъринг обслужване по предварителна заявка: закуска, обяд и вечеря, сервирани на порции или на блок маса. Гостите могат да се насладят на първокачествено вино собствено производство.",
    packagesTitle: "Какво включва имението",
    packagesLead:
      "Естера Вини не публикува куверт. Вместо цена показваме буквално какво стои на разположение за деня ви. Опишете тържеството си във формата и ще получите оферта за вашата дата и брой гости.",
    includesTitle: "На разположение за вашето тържество",
    ch4Title: "Вечерта продължава край летния бар",
    ch4Lead:
      "Летният бар е разположен непосредствено до басейна, сред тишината и спокойствието на величествената борова гора, и предлага разнообразие от освежаващи напитки и коктейли.",
    ch4Body:
      "В двора ви очакват външно джакузи с хидромасажни дюзи и дървена сауна под открито небе. През зимния сезон общото закрито помещение с тридесет места поема събитието, непосредствено до къщите.",
    ch5Title: "Сбогуването е ново начало",
    ch5Lead:
      "Опишете деня си: сезон, брой гости, ориентировъчен бюджет. Публикуваме капацитета открито, а офертата е лична.",
    reviewsTitle: "Книга за гости",
    reviewsLead: "Записите са дословни от книгата за гости на комплекса.",
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
      "Демонстрационен сайт (spec) от Meridian Solutions. Не е официалният сайт на Комплекс Естера Вини.",
    footerRights: "Комплекс Естера Вини · Перущица",
    capacityStats: [
      { value: "180", count: 180, label: "гости на открито" },
      { value: "35", count: 35, label: "места около басейна" },
      { value: "30", count: 30, label: "места на закрито през зимата" },
      { value: "24-28", label: "гости в четирите къщи" },
    ],
  },
  en: {
    langCode: "en",
    otherLangHref: "/",
    otherLangLabel: "БГ",
    metaTitle: "Esterra Vini | Vineyard weddings near Perushtitsa, Bulgaria",
    metaDescription:
      "Esterra Vini estate in Pastusha, Perushtitsa: outdoor wedding celebrations for up to 180 guests around the pool, guest houses, vineyards and pine forest. 15 km from Plovdiv.",
    navCity: "Perushtitsa",
    navSpot: "Pastusha",
    navSeats: "up to 180 guests",
    inquire: "Inquire",
    call: "Call us",
    atmosphereNote: "atmospheric visualisations, wedding photography from the estate to follow",
    seasonHint: "One estate across four seasons. Choose yours.",
    scrollCue: "Walk through the day",
    chapters: [
      { id: "pristigane", label: "Arrival" },
      { id: "ceremonia", label: "Ceremony" },
      { id: "vecherya", label: "Dinner" },
      { id: "tanci", label: "Dancing" },
      { id: "sboguvane", label: "Farewell" },
    ],
    ch1Title: "Esterra Vini. Weddings among vineyards, pine forest and water.",
    ch1Lead:
      "The day begins with the arrival. The estate sits in the Pastusha locality, just before the entrance to Perushtitsa, in the foothills of the Rhodopes. Fifteen kilometres from Plovdiv and one hundred and twenty from Sofia.",
    gettingHere: "Getting here",
    gettingHereRows: [
      ["Address", "Pastusha locality, Perushtitsa"],
      ["From Plovdiv", "15 km"],
      ["From Sofia", "120 km"],
      ["Transfers", "from the airport, coach station or any town"],
    ],
    mapCta: "View on the map",
    whyTitle: "Why couples choose Esterra Vini",
    ch2Title: "The ceremony happens by the water",
    ch2Lead:
      "Wedding celebrations are held outdoors around the estate's pool, with a maximum capacity of one hundred and eighty people. The marriage ceremony and the outdoor civil ritual are part of the offer.",
    ch2Body:
      "A romantic walk along the narrow paths through the fragrant vineyards carries you into the spirit of Tuscany. In the quiet of the countryside you can unwind beside the open, heated pool, looking out over the great pine forest.",
    ch3Title: "Dinner comes from the estate's own kitchen and its own cellar",
    ch3Lead:
      "Catering to advance order: breakfast, lunch and dinner, served plated or as a buffet. Guests can enjoy first-quality wine of the estate's own production.",
    packagesTitle: "What the estate includes",
    packagesLead:
      "Esterra Vini publishes no per-head price. Instead of a figure we show you literally what is at your disposal for the day. Describe your celebration in the form and you will receive an offer for your date and guest count.",
    includesTitle: "At your disposal for the celebration",
    ch4Title: "The evening carries on at the summer bar",
    ch4Lead:
      "The summer bar sits directly beside the pool, in the quiet of the great pine forest, and offers a range of refreshing drinks and cocktails.",
    ch4Body:
      "In the courtyard an outdoor jacuzzi with hydromassage jets and a wooden sauna under the open sky await you. In winter the indoor common room, seating thirty, takes the celebration, right next to the houses.",
    ch5Title: "The farewell is a new beginning",
    ch5Lead:
      "Describe your day: season, guest count, anticipated budget. We publish our capacity openly, and the offer is personal.",
    reviewsTitle: "Guest book",
    reviewsLead: "Entries from the estate's own guest book, kept in the original Bulgarian exactly as they were written.",
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
      "Spec demonstration site by Meridian Solutions. Not the official Esterra Vini website.",
    footerRights: "Esterra Vini · Perushtitsa",
    capacityStats: [
      { value: "180", count: 180, label: "guests outdoors" },
      { value: "35", count: 35, label: "places around the pool" },
      { value: "30", count: 30, label: "indoor places in winter" },
      { value: "24-28", label: "guests in the four houses" },
    ],
  },
} as const;

export type Lang = keyof typeof dict;

export const seasonNamesEn: Record<Season, string> = {
  spring: "Spring", summer: "Summer", autumn: "Autumn", winter: "Winter",
};

export const packageNamesEn: Record<string, string> = {};

export const packageIncludesEn = [
  "Accommodation in the four houses on site",
  "A welcome cocktail",
  "The marriage ceremony and outdoor civil ritual",
  "A celebration dinner",
  "Catering to advance order",
  "A heated outdoor pool with 35 places",
  "An outdoor jacuzzi and a wooden sauna under the open sky",
  "A summer bar right beside the pool",
  "An outdoor charcoal barbecue",
  "Wine tastings in the cellar",
  "A forest play area for children",
  "Transfers from the airport, coach station or any town",
];

export const packageAssistEn =
  "Card payment by VISA, MasterCard, MAESTRO and VISA Electron. In the winter season the indoor common room, seating thirty, takes the celebration, right next to the houses.";

export const whyUsEn = [
  "An outdoor wedding celebration around the pool, for up to 180 people",
  "Vineyards, pine forest and a heated pool in one courtyard",
  "Four guest houses on site, for 24 to 28 people",
  "An outdoor jacuzzi and a wooden sauna under the open sky",
  "A summer bar in the shade of the pine forest",
  "Wine of the estate's own production, and tastings in the cellar",
  "15 km from Plovdiv and 120 km from Sofia",
  "Transfers from the airport, coach station or any town",
];
