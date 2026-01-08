import React, { useState, useCallback } from 'react';
import ServicesList from './components/ServicesList/ServicesList';
import SelectedServices from './components/SelectedServices/SelectedServices';
import { services } from './shared/data/services';
import { Service, SelectedService } from './shared/types';
import styles from './App.module.css';

const App: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);

  const handleAddService = useCallback((service: Service) => {
    setSelectedServices(prev => {
      const existing = prev.find(s => s.id === service.id);
      if (existing) {
        return prev.map(s =>
          s.id === service.id ? { ...s, quantity: s.quantity + 1 } : s
        );
      }
      return [...prev, { ...service, quantity: 1 }];
    });
  }, []);

  const handleRemoveService = useCallback((id: number) => {
    setSelectedServices(prev => prev.filter(service => service.id !== id));
  }, []);

  const handleOrder = useCallback(() => {
    setSelectedServices([]);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Дополнительные услуги для авиапассажиров</h1>
      </div>

      <div className={styles.main}>
        <SelectedServices
          selectedServices={selectedServices}
          onRemove={handleRemoveService}
          onOrder={handleOrder}
        />

        <ServicesList
          services={services}
          selectedServices={selectedServices}
          onAddService={handleAddService}
        />
      </div>
    </div>
  );
};

export default App;