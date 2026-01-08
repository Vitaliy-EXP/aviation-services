import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import { ServicesListProps } from './types';
import styles from './ServicesList.module.css';

const ServicesList: React.FC<ServicesListProps> = ({
  services,
  selectedServices,
  onAddService,
}) => {
  const isServiceAdded = (serviceId: number) => {
    return selectedServices.some(service => service.id === serviceId);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Дополнительные услуги</h3>
      <p className={styles.subtitle}>Выберите услуги для добавления к заказу</p>

      <div className={styles.list}>
        {services.map(service => (
          <ServiceCard
            key={service.id}
            service={service}
            onAdd={onAddService}
            isAdded={isServiceAdded(service.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesList;