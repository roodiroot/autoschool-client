import {
  AdvantagesType,
  DescriptionCatType,
  DescriptionCategoryType,
  InsructorsType,
  MenuLinkType,
  QuestionType,
  SOCIALType,
  SocialLinkType,
  StepType,
} from "./types";

// СПИСОК ССЫЛОК МЕНЮ
export const navLinks: MenuLinkType[] = [
  { id: 1, name: "advantages", text: "Преимущества" },
  { id: 2, name: "categories", text: "Категории" },
  { id: 3, name: "instructors", text: "Инструктора" },
  { id: 4, name: "feedback", text: "Обратная связь" },
];

// СПИСОК ПРЕИМУЩЕСТВ
export const advantagesList: AdvantagesType[] = [
  { id: 1, description: "Индивидуальный подход", icon: "rooby" },
  { id: 2, description: "Безопасность превыше всего", icon: "lock" },
  {
    id: 3,
    description: "Подготовка к реальному вождению",
    icon: "stellar",
  },
  {
    id: 4,
    description: "Постоянное обновление программ",
    icon: "grand",
  },
  {
    id: 5,
    description: "Всегда на связи с 8:00 до 19:00",
    icon: "dindin",
  },
  {
    id: 6,
    description: "Поможем на всех этапах",
    icon: "lamp",
  },
];

// БЛОГ ШАГОВ "ДО РЕЗУЛЬТАТА"
export const step_list: StepType[] = [
  {
    id: 1,
    img: "/photo/steps/1.jpg",
    title: "Теоретическое обучение с погружением в процеc",
    description: "",
  },
  {
    id: 2,
    img: "/photo/steps/2.jpg",
    title: "Практические занятия на учебной площадке ",
    description: "",
  },
  {
    id: 3,
    img: "/photo/steps/3.jpg",
    title: "Подготовка к экзаменам с нашими экспертами",
    description: "",
  },
];

// БЛОК КАТЕГОРИЙ

export const description_cat_A: DescriptionCatType = {
  title: "Мотоциклы",
  description:
    "Категория А — мотоциклы, обычные двухколесные и с коляской, с бензиновым двигателем объемом более 50 см³, способные ехать быстрее 50 км/ч.",
};
export const description_cat_B: DescriptionCatType = {
  title: "Автомобили",
  description:
    "Категория В — к данному виду водительских удостоверений относятся права на легковые автомобили, джипы, пикапы, микроавтобусы и лёгкие грузовики.",
};

export const category_descA: DescriptionCategoryType[] = [
  { id: 1, title: "Срок обучения", description: "1.5 месяца" },
  {
    id: 2,
    title: "Оформление свидетельства об окончании",
    description: "включительно",
  },
  {
    id: 3,
    title: "Оформление документов для ГИБДД",
    description: "включительно",
  },
  {
    id: 4,
    title: "Количество часов теоретических курсов",
    description: "108 часов",
  },
  { id: 5, title: "Стоимость теории", description: "10 000 руб." },
  {
    id: 6,
    title: "Стоимость вождения (1 час)",
    description: "500 руб.",
  },
];
export const category_descB: DescriptionCategoryType[] = [
  { id: 1, title: "Срок обучения", description: "2.5 месяца" },
  {
    id: 2,
    title: "Оформление свидетельства об окончании",
    description: "включительно",
  },
  {
    id: 3,
    title: "Оформление документов для ГИБДД",
    description: "включительно",
  },
  {
    id: 4,
    title: "Количество часов теоретических курсов",
    description: "130 часов",
  },
  { id: 5, title: "Стоимость теории", description: "10 000 руб." },
  {
    id: 6,
    title: "Стоимость вождения (1 час 30 мин.)",
    description: "900 руб.",
  },
];

// ИНСТРУКТОРА
export const instructors_array: InsructorsType[] = [
  {
    id: 1,
    experience: "водительский стаж 28 лет",
    rating: "5.0",
    name: "Шваб Георгий Алексеевич",
    img: "/photo/instructor/1.jpg",
  },
  {
    id: 2,
    experience: "водительский стаж 12 лет",
    rating: "4.8",
    name: "Овчинников Сергей Иванович",
    img: "/photo/instructor/2.jpg",
  },
  {
    id: 3,
    experience: "водительский стаж 8 лет",
    rating: "5.0",
    name: "Бубликова Наталья Тимофеевна",
    img: "/photo/instructor/3.jpg",
  },
  {
    id: 4,
    experience: "водительский стаж 13 лет",
    rating: "4.9",
    name: "Санин Василий Игнатьевич",
    img: "/photo/instructor/4.jpg",
  },
  {
    id: 5,
    experience: "водительский стаж 9 лет",
    rating: "4.9",
    name: "Иванов Алексей Дмитриевич",
    img: "/photo/instructor/5.jpg",
  },
  {
    id: 6,
    experience: "водительский стаж 6 лет",
    rating: "4.8",
    name: "Алуев Николай Петрович",
    img: "/photo/instructor/6.jpg",
  },
];

// ПУТИ ДО КАРТИНОК ДЛЯ БЛОКА "ФОТО НАШИХ СТУДЕНТОВ"
export const reviews_list = [
  "/photo/reviews/1.jpg",
  "/photo/reviews/2.jpg",
  "/photo/reviews/3.jpg",
  "/photo/reviews/4.jpg",
  "/photo/reviews/5.jpg",
  "/photo/reviews/6.jpg",
  "/photo/reviews/7.jpg",
];

// КАТЕГОРИИ "ЧАВО"
export const questions_list: QuestionType[] = [
  {
    question: "Как просходит зачисление в автошколу?",
    answer:
      "Для поступления нужно всего пару шагов. Хватаете паспорт и СНИЛС. Делаете фото 3*4 (желательно на матовой бумаге). И вперед к нам!",
  },
  {
    question: "Можно ли приехать посмотреть как у вас все устроено?",
    answer:
      "Да, конечно. Мы всегда рады новым гостям. Такая практика распространена и не является чем-то сверхъестественным. Также, те кто приезжают, задают ряд вопросов на которые мы с радостью отвечаем.",
  },
  {
    question: "Что важно учитывать при сдече экзамена?",
    answer:
      "Что касается самого кандидата в водители, то для него сдача внутреннего экзамена является обязательной, поскольку только после нее он может получить документ о прохождении обучения, который необходим для допуска к экзамену в ГИБДД в 2023 году.",
  },
  {
    question: "Есть ли помощь обучаемся?",
    answer:
      "Есть. Мы тщательно готовим своих учеников и к теории , и к практическому вождению. Поверьте! Мы доведем вас до результата!",
  },
  {
    question: "На какие категории и как вы учите?",
    answer:
      "Мы учим на категории А и В. У нас в школе доступно обучение как в очной форме так и дистанционно. Вы найдете для себя то что искали.",
  },
  {
    question: "Бывают ли студенты которые не сдают экзамен?",
    answer:
      "Тут можно провести простой пример. А есть ли троечники в школе ? Как и в любом обучающем деле, все зависит от ученика. Если он выполняет все задания, не пропускает занятия и хорошо подготовлен к сдаче экзаменов, то таких случаев НЕТ!",
  },
  {
    question: "Что будет если я провалю экзамен в ГАИ?",
    answer:
      "Такие случаи скорее исключение чем правило. Но даже в этом случае мы не бросим вас на произвол судьбы а проработаем дальнейший план действий.",
  },
  {
    question: "Могут ли меня отчислить?",
    answer:
      "Если вы не будете нарушать стандарты дисциплны, вы будете отчислены только с правами на руках))).",
  },
  {
    question: "Можно ли перенести обучение после оплаты?",
    answer:
      "Конечно, вы можете сообщить не менее чем за 10 дней до начала группы. И мы вместе найдем для вас лучшее время для обучения.",
  },
];

// СОЦИАЛЬНЫЕ СЕТИ
export const link_list: SOCIALType[] = [
  { icon: "ws", bg: "#25D366", link: process.env.NEXT_PUBLIC_WS },
  { icon: "tg", bg: "#0088cc", link: process.env.NEXT_PUBLIC_TG },
  // { icon: "vk", bg: "#0077FF", link: process.env.NEXT_PUBLIC_VK },
];
export const socials: SocialLinkType[] = [
  {
    name: "vkontakte",
    link: process.env.NEXT_PUBLIC_VK,
    element: "vk",
  },
  {
    name: "telegram",
    link: process.env.NEXT_PUBLIC_TG,
    element: "tg",
  },
  {
    name: "whatsapp",
    link: process.env.NEXT_PUBLIC_WS,
    element: "ws",
  },
];
