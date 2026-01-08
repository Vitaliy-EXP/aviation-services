//базовый тип для услуги
export interface Service {
  id: number;
  name: string;
  price: number;
}

//тип для выбранной услуги
export interface SelectedService extends Service {
  quantity: number;
}