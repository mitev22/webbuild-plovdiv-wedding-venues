/**
 * Content pack — extension.
 * The hotel publishes no menu for the hall and no price. Nothing is invented.
 * Gallery is empty: the page's gallery is JavaScript-driven and its HTML exposes no
 * image URL for the hall at all.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "zalata",
    label: "Залата",
    note: "Хотелът не публикува меню за тържества. Показано е само това, което е обявено за залата.",
    dishes: [
      {
        n: "Капацитет до 120 седящи места",
      },
      {
        n: "Модерна и уютна атмосфера",
        d: "със собствен стил и изискана обстановка",
      },
      {
        n: "Просторен и цветен детски кът",
      },
      {
        n: "Млад и професионален екип",
      },
      {
        n: "Ресторант в същата сграда",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "zalata",
    label: "The hall",
    note: "The hotel publishes no celebration menu. Only what is stated about the hall appears here.",
    dishes: [
      {
        n: "A capacity of up to 120 seated places",
      },
      {
        n: "A modern, welcoming atmosphere",
        d: "with a style and refinement of its own",
      },
      {
        n: "A spacious, colourful children's area",
      },
      {
        n: "A young, professional team",
      },
      {
        n: "A restaurant in the same building",
      },
    ],
  },
];

export const menuFooterBg = "Меню за тържества и куверт не са публикувани на страницата на залата и предстои да бъдат предоставени.";
export const menuFooterEn = "No celebration menu and no per-head price is published on the hall's page; these are still to be supplied.";

export const servicesBg = [
  "Зала за мероприятия до 120 седящи места",
  "Просторен и цветен детски кът",
  "Голям и просторен паркинг",
  "Индивидуално отношение към всяко мероприятие",
  "Хотелски стаи в същата сграда",
  "Ресторант на място",
  "Конферентни зали за фирмени събития",
];
export const servicesEn = [
  "An events hall for up to 120 seated guests",
  "A spacious, colourful children's area",
  "A large, spacious car park",
  "Individual attention to every event",
  "Hotel rooms in the same building",
  "A restaurant on site",
  "Conference rooms for corporate events",
];

export const techBg = [
  "Зала с капацитет до 120 седящи места",
  "Просторен и цветен детски кът",
  "Голям и просторен паркинг",
];
export const techEn = [
  "A hall seating up to 120",
  "A spacious, colourful children's area",
  "A large, spacious car park",
];

export const eventsBg = [
  {
    title: "Сватба",
    body: "Залата е идеалното място за провеждане на специалните ви поводи, а екипът се грижи за перфектното организиране.",
    fact: "До 120 места",
  },
  {
    title: "Рожден ден",
    body: "Модерна и уютна атмосфера, отличаваща се със собствен стил и изискана обстановка.",
    fact: "Детски кът",
  },
  {
    title: "Годишнина",
    body: "Индивидуално отношение към всяко мероприятие, независимо от повода.",
    fact: "Индивидуално отношение",
  },
  {
    title: "Фирмено парти",
    body: "Хотелът разполага и с конферентни зали за корпоративната част на деня.",
    fact: "Конферентни зали",
  },
];
export const eventsEn = [
  {
    title: "Weddings",
    body: "The hall is the ideal place for your special occasions, and the team takes care of organising it perfectly.",
    fact: "Up to 120",
  },
  {
    title: "Birthdays",
    body: "A modern, welcoming atmosphere with a style and refinement of its own.",
    fact: "Children's area",
  },
  {
    title: "Anniversaries",
    body: "Individual attention to every event, whatever the occasion.",
    fact: "Individual attention",
  },
  {
    title: "Corporate parties",
    body: "The hotel also has conference rooms for the corporate part of the day.",
    fact: "Conference rooms",
  },
];

export const performerBg =
  "Помислили сме и за най-малките: разполагаме с просторен и цветен детски кът. Младият и професионален екип ще се погрижи за страхотно изживяване и перфектното организиране на вашето събитие. Очакваме ви.";
export const performerEn =
  "We have thought of the smallest guests too: there is a spacious, colourful children's area. The young, professional team will take care of a great experience and the perfect organisation of your event. We look forward to seeing you.";

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
      hint: "сватбеният ден",
    },
    {
      href: "/menu/",
      label: "Залата",
      hint: "Авокадо Премиум",
    },
    {
      href: "/sabitia/",
      label: "Поводи",
      hint: "не само сватби",
    },
    {
      href: "/uslugi/",
      label: "Услуги",
      hint: "в хотела",
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
      label: "The hall",
      hint: "Avocado Premium",
    },
    {
      href: "/en/sabitia/",
      label: "Occasions",
      hint: "not only weddings",
    },
    {
      href: "/en/uslugi/",
      label: "Services",
      hint: "in the hotel",
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
    menuLead: "Хотелът не публикува меню за тържества. Ето какво е обявено за залата:",
    servicesTitle: "Услуги",
    servicesLead: "Залата е част от хотел, което дава стаи и ресторант в същата сграда.",
    techTitle: "В залата",
    eventsTitle: "Не само сватби",
    eventsLead: "Залата поема сватба, рожден ден, годишнина и фирмено парти.",
    galleryTitle: "Залата, както изглежда",
    galleryLead: "Галерията на настоящата страница се зарежда с JavaScript и не отдава адреси на снимки.",
    galleryChip: "предстоят реални снимки",
    galleryEmptyTitle: "Тук ще стоят снимките на залата.",
    galleryEmptyBody: "Галерията на настоящата страница на залата се зарежда с JavaScript и в HTML няма нито един адрес на снимка от самата зала. Затова тук не е пренесен нито един кадър: галерията остава празна, вместо да бъде запълнена със стокови или генерирани изображения.",
    performerTitle: "За най-малките",
    tableBandQuote: "Една дълга маса за сто и двадесет. Останалото е музика.",
    pageTitleGallery: "Снимките предстоят",
    pageTitleEvents: "Всеки повод намира своето място",
    pageTitleMenu: "Залата, с техните думи",
    pageTitleServices: "Всичко за деня, в една сграда",
  },
  en: {
    inquire: "Inquire",
    menuBtn: "Menu",
    closeBtn: "Close",
    galleryMore: "Full gallery",
    exploreTitle: "Explore more",
    menuTitle: "The hall",
    menuLead: "The hotel publishes no celebration menu. Here is what is stated about the hall:",
    servicesTitle: "Services",
    servicesLead: "The hall sits inside a hotel, which gives you rooms and a restaurant in the same building.",
    techTitle: "In the hall",
    eventsTitle: "Not only weddings",
    eventsLead: "The hall takes a wedding, a birthday, an anniversary or a corporate party.",
    galleryTitle: "The hall, as it looks",
    galleryLead: "The current page's gallery is JavaScript-driven and exposes no image addresses.",
    galleryChip: "real photos to follow",
    galleryEmptyTitle: "Photographs of the hall will live here.",
    galleryEmptyBody: "The gallery on the hall's current page is JavaScript-driven and its HTML contains not a single image address for the hall itself. No frame was carried over: the gallery stays empty rather than being filled with stock or generated imagery.",
    performerTitle: "For the smallest guests",
    tableBandQuote: "One long table for a hundred and twenty. The rest is music.",
    pageTitleGallery: "Photography to follow",
    pageTitleEvents: "Every occasion finds its place",
    pageTitleMenu: "The hall, in their words",
    pageTitleServices: "Everything for the day, in one building",
  },
} as const;
