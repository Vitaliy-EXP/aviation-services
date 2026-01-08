import { Service } from "../../shared/types";

export interface ServiceCardProps {
  service: Service;
  onAdd: (service: Service) => void;
  isAdded: boolean;
}