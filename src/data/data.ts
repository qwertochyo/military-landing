import type { ICardItem } from "../types/types"
import Image1 from "../assets/image1.jpg"
import Image2 from "../assets/image2.jpg"
import Image3 from "../assets/image3.jpg"
import Image4 from "../assets/image4.jpg"
import Image5 from "../assets/image5.jpg"
import Image6 from "../assets/image6.jpg"

export const CARDS_DATA: ICardItem[] = [
  {
    id: "001",
    name: "Алиса",
    age: 19,
    direction: "Ремонт автомобилей",
    role: "Механик",
    image: Image1,
    description:
      "Быстро нахожу и устраняю неисправности техники даже в полевых условиях.",
    skills: ["Диагностика", "Двигатели", "МТО АТ"],
  },
  {
    id: "002",
    name: "Вера",
    age: 21,
    direction: "Боевая техника",
    role: "Оператор бронетехники",
    image: Image2,
    description:
      "Уверенно управляю боевой техникой и координирую действия экипажа.",
    skills: ["Тактика", "Навигация", "Управление техникой"],
  },
  {
    id: "003",
    name: "София",
    age: 22,
    direction: "Тыловое обеспечение",
    role: "Специалист тыла",
    image: Image3,
    description:
      "Организую снабжение и доставку ресурсов без сбоев и задержек.",
    skills: ["Логистика", "Координация", "Планирование"],
  },
  {
    id: "004",
    name: "Елена",
    age: 20,
    direction: "Связь",
    role: "Радист",
    image: Image4,
    description:
      "Обеспечиваю стабильную связь и защищённую передачу информации.",
    skills: ["Радиодело", "Шифрование", "Коммуникации"],
  },
  {
    id: "005",
    name: "Татьяна",
    age: 23,
    direction: "Ремонт самолётов",
    role: "Авиационный техник",
    image: Image5,
    description:
      "Провожу обслуживание и ремонт авиационной техники перед вылетом.",
    skills: ["Авиамеханика", "Точность", "Технический контроль"],
  },
  {
    id: "006",
    name: "Ольга",
    age: 21,
    direction: "ПВО",
    role: "Оператор ПВО",
    image: Image6,
    description:
      "Контролирую воздушное пространство и мгновенно реагирую на угрозы.",
    skills: ["РЛС", "Реакция", "Тактический анализ"],
  },
];