/**
 * Content pack — extension.
 * Руж publishes no menu, no dish list and no AV rider. Nothing is invented. Gallery is
 * empty: the portal's image files are interface icons, not photographs of the venue.
 */

export type Dish = { n: string; d?: string; g?: string };

export const menuBg: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "zalata",
    label: "Залата",
    note: "Руж не публикува меню и ценоразпис. Показано е само това, което сами описват за залата.",
    dishes: [
      {
        n: "Интериорна зала",
        d: "впечатляваща със своя чар, уют и спокойствие",
      },
      {
        n: "Максимален капацитет",
        d: "до 120 места",
      },
      {
        n: "Изнесен ритуал",
        d: "залата има разрешение",
      },
      {
        n: "Червени светлини и свещи",
        d: "обстановката се преобразява в късните часове",
      },
    ],
  },
];

export const menuEn: { key: string; label: string; note?: string; dishes: Dish[] }[] = [
  {
    key: "zalata",
    label: "The room",
    note: "Ruzh publishes no menu and no price list. Only what they describe about the room appears here.",
    dishes: [
      {
        n: "An interior room",
        d: "striking for its charm, warmth and calm",
      },
      {
        n: "Maximum capacity",
        d: "up to 120 places",
      },
      {
        n: "Outdoor civil ritual",
        d: "the venue holds permission",
      },
      {
        n: "Red light and candles",
        d: "the room transforms in the late hours",
      },
    ],
  },
];

export const menuFooterBg = "Меню, куверт и ценоразпис не са публикувани на страница, която ресторантът контролира, и предстои да бъдат предоставени.";
export const menuFooterEn = "No menu, per-head price or price list is published on any page the restaurant controls; these are still to be supplied.";

export const servicesBg = [
  "Интериорна зала до 120 места",
  "Разрешение за изнесен ритуал",
  "Денонощна жива охрана",
  "Паркинг към сградата",
  "Мероприятия до ранни зори",
  "Осветление за късните часове",
];
export const servicesEn = [
  "An interior room for up to 120",
  "Permission for an outdoor civil ritual",
  "Round-the-clock live security",
  "Parking at the building",
  "Celebrations into the early hours",
  "Lighting for the late hours",
];

export const techBg = [
  "Осветление за късните часове",
  "Свещи",
  "Интериорна зала без колони в средата",
];
export const techEn = [
  "Lighting for the late hours",
  "Candles",
  "An interior room",
];

export const eventsBg = [
  {
    title: "Сватбени тържества",
    body: "Интериорната зала е подходяща за сватбено тържество с разрешение за изнесен ритуал.",
    fact: "До 120 места",
  },
  {
    title: "Празници до зори",
    body: "Локацията позволява необезпокоявани мероприятия до ранни зори.",
    fact: "Без ограничение в часа",
  },
  {
    title: "Семейни поводи",
    body: "Залата е с чар, уют и спокойствие, подходяща и за по-камерни поводи.",
    fact: "Интериорна зала",
  },
  {
    title: "Вечери с програма",
    body: "Под червени светлини и свещи обстановката се преобразява за танци.",
    fact: "Червени светлини",
  },
];
export const eventsEn = [
  {
    title: "Wedding celebrations",
    body: "The interior room suits a wedding celebration and holds permission for an outdoor ritual.",
    fact: "Up to 120",
  },
  {
    title: "Celebrations till dawn",
    body: "The location allows undisturbed celebrations into the early hours.",
    fact: "No curfew",
  },
  {
    title: "Family occasions",
    body: "The room has charm, warmth and calm, and suits more intimate occasions too.",
    fact: "Interior room",
  },
  {
    title: "Evenings with a programme",
    body: "Under red light and candles the room transforms for dancing.",
    fact: "Red light",
  },
];

export const performerBg =
  "Обстановката се преобразява в късните часове и под червени светлини и свещи ресторантът се превръща в място, където може да се развихрите, да танцувате и да се наслаждавате на празника си. Контакт за запитвания: Магдалена Кабурова, 0898 940 490.";
export const performerEn =
  "The room transforms in the late hours: under red light and candles the restaurant becomes a place to let go, dance and enjoy your celebration. For enquiries: Magdalena Kaburova, 0898 940 490.";

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
      hint: "интериорна",
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
      label: "The room",
      hint: "interior",
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
    menuLead: "Руж не публикува меню. Ето какво описват за самата зала:",
    servicesTitle: "Услуги",
    servicesLead: "Залата, охраната и паркингът са на един адрес. Ето какво е обявено.",
    techTitle: "В залата",
    eventsTitle: "Не само сватби",
    eventsLead: "Една зала, която работи до зори, поема всеки повод.",
    galleryTitle: "Залата, както изглежда",
    galleryLead: "Руж няма публикувани собствени фотографии на залата.",
    galleryChip: "предстоят реални снимки",
    galleryEmptyTitle: "Тук ще стоят снимките на залата.",
    galleryEmptyBody: "Руж няма собствен сайт, а порталният профил не съдържа фотографии на обекта: наличните файлове са интерфейсни икони. Галерията остава празна нарочно, вместо да бъде запълнена със стокови или генерирани кадри.",
    performerTitle: "Късните часове",
    tableBandQuote: "Една дълга маса под свещи. Останалото е музика.",
    pageTitleGallery: "Снимките предстоят",
    pageTitleEvents: "Всеки повод намира своето място",
    pageTitleMenu: "Залата, с техните думи",
    pageTitleServices: "Всичко за деня, на един адрес",
  },
  en: {
    inquire: "Inquire",
    menuBtn: "Menu",
    closeBtn: "Close",
    galleryMore: "Full gallery",
    exploreTitle: "Explore more",
    menuTitle: "The room",
    menuLead: "Ruzh publishes no menu. Here is what they describe about the room:",
    servicesTitle: "Services",
    servicesLead: "The room, the security and the parking are at one address. Here is what is stated.",
    techTitle: "In the room",
    eventsTitle: "Not only weddings",
    eventsLead: "One room that runs till dawn carries every occasion.",
    galleryTitle: "The room, as it looks",
    galleryLead: "Ruzh publishes no photographs of the room itself.",
    galleryChip: "real photos to follow",
    galleryEmptyTitle: "Photographs of the room will live here.",
    galleryEmptyBody: "Ruzh has no website of its own, and the portal profile contains no photographs of the venue: the available files are interface icons. This gallery is deliberately left empty rather than filled with stock or generated imagery.",
    performerTitle: "The late hours",
    tableBandQuote: "One long table under candles. The rest is music.",
    pageTitleGallery: "Photography to follow",
    pageTitleEvents: "Every occasion finds its place",
    pageTitleMenu: "The room, in their words",
    pageTitleServices: "Everything for the day, at one address",
  },
} as const;
