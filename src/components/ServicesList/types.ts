import { Service, SelectedService } from '../../shared/types';

export interface ServicesListProps {
  services: Service[];
  selectedServices: SelectedService[];
  onAddService: (service: Service) => void;
}

export interface ServicesListState {
  // Для будущего расширения, например, фильтрация или сортировка
  filter?: string;
  sortBy?: 'name' | 'price';
}

export type ServiceCategory = 'all' | 'baggage' | 'food' | 'comfort';