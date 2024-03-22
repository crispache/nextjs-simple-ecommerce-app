import styles from "./product-list.module.css";
import { Product } from "./product-list.vm";
import { ProductItem } from "./components";

interface Props {
  products: Product[];
}

export const ProductListComponent: React.FC<Props> = (props) => {
  const { products } = props;
  return (
    <article>
      <ul className={styles.productList}>
        {products.map((product) => (
          <li key={product.id} className={styles.product}>
            <ProductItem product={product} />
          </li>
        ))}
      </ul>
    </article>
  );
};
