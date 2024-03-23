import { useMemo } from 'react';
import styles from './cart-summary.module.css';
import { Product } from '../../cart.vm';
import { formatCurrency } from '@/app/_common';

interface Props {
  products: Product[];
}

export const CartSummary: React.FC<Props> = (props) => {
    const { products } = props;

    const totalPrice = useMemo(() => {
      const total: number = products.reduce((acc, product) => acc + product.priceNoFormat, 0);
      return formatCurrency(total);
    }, [products]);

    return (
      <div className={styles.cartSummary}>
        <h2 className={styles.cartSummaryTitle}> TOTAL </h2>
        <p className={styles.cartSummaryTotalProducts}> ({products.length} productos)</p>
        <p className={styles.cartSummaryTotalPrice}> { totalPrice } </p>
      </div>
    );
  };
  