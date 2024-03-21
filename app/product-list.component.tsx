import { Product } from "./product-list.vm";
import styles from "./product-list.module.css";
import Image from "next/image";

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
            <h3 className={styles.productName}> {product.name} </h3>
            <p className={styles.productPrice}> {product.price} </p>
            <button className={styles.productAddToCartButton}>
              <Image
                src="/icons/add-to-cart.png"
                width={50}
                height={28}
                alt="Imagen del producto"
              />
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
};
