import { SelectedService } from '../../shared/types';

export interface SelectedServicesProps {
  selectedServices: SelectedService[];
  onRemove: (id: number) => void;
  onOrder: () => void;
}

export interface SelectedServicesState {
  // Для будущего расширения, например, если нужно будет добавить загрузку
  isLoading?: boolean;
  error?: string;
}

export type OrderStatus = 'pending' | 'success' | 'error';