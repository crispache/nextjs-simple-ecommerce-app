import styles from './cart-summary.module.css';

export const CartSummary: React.FC = () => {

    return (
      <div className={styles.cartSummary}>
        <h2> TOTAL </h2>
        <p className={styles.cartSummaryTotalProducts}> (3 productos)</p>
        <p className={styles.cartSummaryTotalPrice}> 27.06 € </p>
      </div>
    );
  };
  