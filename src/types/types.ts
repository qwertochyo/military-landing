type TDirection =
  | "Ремонт автомобилей"
  | "Боевая техника"
  | "Тыловое обеспечение"
  | "Связь"
  | "Ремонт самолётов"
  | "ПВО";

type TRole =
  | "Механик"
  | "Оператор бронетехники"
  | "Специалист тыла"
  | "Радист"
  | "Авиационный техник"
  | "Оператор ПВО";

export interface IBaseCard {
  id: string;
  name: string;
  age: number;
}

export interface ICardItem extends IBaseCard {
  direction: TDirection;
  role: TRole;
  image: string;
  description: string;
  skills: string[];
}