import React from 'react';
import { SelectedServicesProps } from './types';
import styles from './SelectedServices.module.css';

const SelectedServices: React.FC<SelectedServicesProps> = ({
  selectedServices,
  onRemove,
  onOrder,
}) => {
  const totalAmount = selectedServices.reduce(
    (sum, service) => sum + service.price * service.quantity,
    0
  );

  const handleOrder = () => {
    alert(`Заказ оформлен! Сумма: ${totalAmount.toLocaleString()} ₽`);
    onOrder();
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Выбранные услуги</h3>

      {selectedServices.length === 0 ? (
        <div className={styles.empty}>Нет выбранных услуг</div>
      ) : (
        <>
          <div className={styles.list}>
            {selectedServices.map(service => (
              <div key={service.id} className={styles.item}>
                <div className={styles.itemName}>{service.name}</div>
                <div className={styles.itemActions}>
                  <div className={styles.itemPrice}>
                    {(service.price * service.quantity).toLocaleString()} ₽
                  </div>
                  <button
                    className={styles.removeButton}
                    onClick={() => onRemove(service.id)}
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.total}>
            <div className={styles.totalRow}>
              <div className={styles.totalLabel}>Итого:</div>
              <div className={styles.totalAmount}>{totalAmount.toLocaleString()} ₽</div>
            </div>

            <button
              className={styles.orderButton}
              onClick={handleOrder}
              disabled={selectedServices.length === 0}
            >
              Оформить заказ
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SelectedServices;