/**
 * Content pack — extension.
 * The full service catalogue below was recovered from the var_dump leaking on their
 * live homepage — it is the only place the site publishes it in full. Prices are theirs,
 * verbatim. Only two photographs are used: the ones with no identifiable guests.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "ritualite",
    label: "Ритуалите",
    note: "Сватбен Дом публикува цени за ритуалите. Показани са дословно.",
    dishes: [
      {
        n: "Изнесен ритуал",
        d: "воали и изкуствени цветя за пътеката, естествени цветя за ротондата, украса на столовете и пейките, украса на масата за подписа, знамена, озвучаване и чаши за външно даряване",
        g: "150,00 лв",
      },
      {
        n: "Фолклорно посрещане",
        d: "допълнителна услуга по български обичай",
        g: "150 лв",
      },
      {
        n: "Църковен ритуал",
        d: "възможност да встъпите в църковен брак или да кръстите децата си в храм",
      },
    ],
  },
  {
    key: "nastanyavane",
    label: "Настаняване",
    note: "Хотелската част е на разположение само на сватбените тържества. Всяка стая има санитарен възел и климатик.",
    dishes: [
      {
        n: "Нощувка за младоженците",
        d: "подарък от дома",
        g: "подарък",
      },
      {
        n: "Единична стая",
        g: "50,00 лв",
      },
      {
        n: "Двойна стая",
        g: "70 лв",
      },
      {
        n: "Тройка",
        g: "100 лв",
      },
      {
        n: "Дете",
        g: "20,00 лв",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "ritualite",
    label: "The rituals",
    note: "Svatben Dom publishes prices for the rituals. They are shown verbatim.",
    dishes: [
      {
        n: "Outdoor ritual",
        d: "veils and artificial flowers for the aisle, fresh flowers for the rotunda, decoration of the chairs and benches, decoration of the signing table, flags, sound and glasses for the traditional pouring",
        g: "150.00 BGN",
      },
      {
        n: "Folk welcome",
        d: "an additional service in the Bulgarian tradition",
        g: "150 BGN",
      },
      {
        n: "Church ritual",
        d: "the option of a church wedding or a christening for your children",
      },
    ],
  },
  {
    key: "nastanyavane",
    label: "Accommodation",
    note: "The hotel wing is available only to wedding parties. Every room has its own bathroom and air conditioning.",
    dishes: [
      {
        n: "The couple's night",
        d: "a gift from the house",
        g: "a gift",
      },
      {
        n: "Single room",
        g: "50.00 BGN",
      },
      {
        n: "Double room",
        g: "70 BGN",
      },
      {
        n: "Triple room",
        g: "100 BGN",
      },
      {
        n: "Child",
        g: "20.00 BGN",
      },
    ],
  },
];

export const menuFooterBg = "Куверт за сватбено тържество не е публикуван. Цените по-горе са дословно тези, които Сватбен Дом обявява за ритуалите и за нощувките.";
export const menuFooterEn = "No per-head price for a wedding celebration is published. The prices above are verbatim those Svatben Dom states for the rituals and the rooms.";

export const servicesBg = [
  "Изнесен ритуал с ротонда и пътека",
  "Пълна украса за ритуала",
  "Озвучаване",
  "Чаши за външно даряване",
  "Фолклорно посрещане",
  "Църковен брак и кръщене",
  "Хотелска част само за сватбарите",
  "Стаи със санитарен възел и климатик",
  "Нощувка подарък за младоженците",
  "20 години опит в организацията",
];
export const servicesEn = [
  "An outdoor ritual with a rotunda and aisle",
  "Full decoration for the ritual",
  "Sound",
  "Glasses for the traditional pouring",
  "A folk welcome",
  "A church wedding and christening",
  "A hotel wing for the wedding party only",
  "Rooms with a bathroom and air conditioning",
  "The couple's night as a gift",
  "20 years of organising experience",
];

export const techBg = [
  "Санитарен възел във всяка стая",
  "Климатик",
  "Озвучаване за ритуала",
  "Ротонда за изнесения ритуал",
];
export const techEn = [
  "An en-suite bathroom in every room",
  "Air conditioning",
  "Sound for the ritual",
  "A rotunda for the outdoor ritual",
];

export const eventsBg = [
  {
    title: "Изнесен ритуал",
    body: "Допълнителна услуга, която се записва в община Родопи. Украсата и озвучаването са включени.",
    fact: "150,00 лв",
  },
  {
    title: "Фолклорно посрещане",
    body: "Посрещане по български обичай, с наричания за новия дом.",
    fact: "150 лв",
  },
  {
    title: "Църковен брак и кръщене",
    body: "Домът предлага възможност да встъпите в църковен брак или да кръстите децата си в храм.",
    fact: "От 2015 година",
  },
  {
    title: "Гости, които остават",
    body: "Хотелската част е на разположение само на сватбените тържества.",
    fact: "От 20 лв за дете",
  },
];
export const eventsEn = [
  {
    title: "Outdoor ritual",
    body: "An additional service registered with the Rodopi municipality. Decoration and sound are included.",
    fact: "150.00 BGN",
  },
  {
    title: "Folk welcome",
    body: "A welcome in the Bulgarian tradition, with blessings for the new home.",
    fact: "150 BGN",
  },
  {
    title: "Church wedding and christening",
    body: "The house offers the option of a church wedding or a christening for your children.",
    fact: "Since 2015",
  },
  {
    title: "Guests who stay",
    body: "The hotel wing is available only to wedding parties.",
    fact: "From 20 BGN per child",
  },
];

export const performerBg =
  "С двадесет годишен опит в организирането на сватбени тържества решихме да създадем това бижу, единствено по рода си в региона на град Пловдив. Всичко, за да сте Принц и Принцеса на вашия ден.";
export const performerEn =
  "With twenty years of experience organising wedding celebrations we decided to create this jewel, one of a kind in the Plovdiv region. Everything, so that you can be the Prince and Princess of your day.";

export const gallery: { slug: string; bg: string; en: string; tall?: boolean }[] = [
  {
    slug: "sgradata",
    bg: "Домът, видян през ротондата",
    en: "The house, seen through the rotunda",
    tall: true,
  },
  {
    slug: "zalata",
    bg: "Залата преди гостите",
    en: "The hall before the guests",
  },
];

export const exploreArt = [
  {
    src: "/photos/zalata.webp",
    alt: "",
  },
  {
    src: "/atmosphere/m-s1-table-840.webp?v=1",
    alt: "",
  },
  {
    src: "/photos/sgradata.webp",
    alt: "",
  },
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
      label: "Ритуалите",
      hint: "с цени",
    },
    {
      href: "/sabitia/",
      label: "Поводи",
      hint: "не само сватби",
    },
    {
      href: "/uslugi/",
      label: "Услуги",
      hint: "на място",
    },
    {
      href: "/galeria/",
      label: "Галерия",
      hint: "реални снимки",
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
      label: "The rituals",
      hint: "with prices",
    },
    {
      href: "/en/sabitia/",
      label: "Occasions",
      hint: "not only weddings",
    },
    {
      href: "/en/uslugi/",
      label: "Services",
      hint: "on site",
    },
    {
      href: "/en/galeria/",
      label: "Gallery",
      hint: "real photos",
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
    menuTitle: "Ритуалите и настаняването",
    menuLead: "Сватбен Дом публикува цени за ритуалите и за нощувките. Ето ги дословно:",
    servicesTitle: "Услуги",
    servicesLead: "Домът продава ритуала и престоя, не само залата. Ето какво влиза.",
    techTitle: "В стаите и на ритуала",
    eventsTitle: "Не само сватби",
    eventsLead: "Ритуал, посрещане, църковен брак и нощувка: всичко на едно място.",
    galleryTitle: "Домът, както изглежда",
    galleryLead: "Снимките са собствени на Сватбен Дом. Кадрите с разпознаваеми младоженци и гости са изключени от демонстрацията.",
    galleryChip: "реални снимки на дома",
    galleryEmptyTitle: "Тук ще стоят снимките на дома.",
    galleryEmptyBody: "Реалната фотография предстои да бъде предоставена.",
    performerTitle: "Двадесет години",
    tableBandQuote: "Една дълга маса, близо до града и извън него. Останалото е музика.",
    pageTitleGallery: "Реални снимки, реален дом",
    pageTitleEvents: "Всеки повод намира своето място",
    pageTitleMenu: "Ритуалите, с техните цени",
    pageTitleServices: "Всичко за деня, близо до града",
  },
  en: {
    inquire: "Inquire",
    menuBtn: "Menu",
    closeBtn: "Close",
    galleryMore: "Full gallery",
    exploreTitle: "Explore more",
    menuTitle: "The rituals and the rooms",
    menuLead: "Svatben Dom publishes prices for the rituals and the rooms. Here they are verbatim:",
    servicesTitle: "Services",
    servicesLead: "The house sells the ritual and the stay, not just the hall. Here is what that covers.",
    techTitle: "In the rooms and at the ritual",
    eventsTitle: "Not only weddings",
    eventsLead: "Ritual, welcome, church wedding and a bed: all in one place.",
    galleryTitle: "The house, as it looks",
    galleryLead: "The photographs belong to Svatben Dom. Frames showing identifiable couples and guests are excluded from this demonstration.",
    galleryChip: "real photos of the house",
    galleryEmptyTitle: "Photographs of the house will live here.",
    galleryEmptyBody: "Real photography is still to be supplied.",
    performerTitle: "Twenty years",
    tableBandQuote: "One long table, close to the city and outside it. The rest is music.",
    pageTitleGallery: "Real photos, a real house",
    pageTitleEvents: "Every occasion finds its place",
    pageTitleMenu: "The rituals, with their prices",
    pageTitleServices: "Everything for the day, close to the city",
  },
} as const;
