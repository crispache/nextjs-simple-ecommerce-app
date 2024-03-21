import { Product } from "./cart.vm";
import styles from './cart.module.css';
import { CartHeader } from "./components";
interface Props {
  products: Product[];
}

export const CartComponent: React.FC<Props> = (props) => {
  const { products } = props;
    return (
      <article className={styles.cart}>
        <CartHeader />
      </article>
    );
  };
  