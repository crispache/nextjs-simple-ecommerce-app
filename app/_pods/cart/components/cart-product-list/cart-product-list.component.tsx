import { Product } from "../../cart.vm";
import { CartProductItem } from "../cart-product-item/cart-product-item.component";
import styles from './cart-product-list.module.css';

interface Props {
  products: Product[];
}

export const CartProductList: React.FC<Props> = (props) => {
  const { products } = props;
  return (
    <ul className={styles.cartProductList}>
      {products.map((product) => (
        <li key={product.id} className={styles.cartProductItem}>
          <CartProductItem product={product} />
        </li>
      ))}
    </ul>
  );
};
