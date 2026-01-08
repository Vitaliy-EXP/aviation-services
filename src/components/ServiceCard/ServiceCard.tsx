import React from 'react';
import { ServiceCardProps } from './types';
import styles from './ServiceCard.module.css';

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onAdd,
  isAdded
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.name}>{service.name}</div>
        <div className={styles.price}>{service.price.toLocaleString()} ₽</div>
      </div>
      <button
        className={styles.button}
        onClick={() => onAdd(service)}
        disabled={isAdded}
      >
        {isAdded ? 'Добавлено' : 'Добавить'}
      </button>
    </div>
  );
};

export default ServiceCard;