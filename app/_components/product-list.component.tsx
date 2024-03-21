import styles from "./product-list.module.css";
import { ProductItem } from "./product-item.component";
import { Product } from "../product-list.vm";

interface Props {
  products: Product[];
}

export const ProductList: React.FC<Props> = (props) => {
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
