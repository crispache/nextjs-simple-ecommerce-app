import { Product } from "./cart.vm";
import styles from "./cart.module.css";
import { CartHeader, CartProductList, CartSummary } from "./components";
interface Props {
  products: Product[];
}

export const CartComponent: React.FC<Props> = (props) => {
  const { products } = props;
  return (
    <article className={styles.cart}>
      <CartHeader />
      <CartProductList products={products} />
      <CartSummary />
    </article>
  );
};
