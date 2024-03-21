import Image from "next/image";
import { Product } from "../product-list.vm";
import styles from "./product-item.module.css";

interface Props {
  product: Product;
}

export const ProductItem: React.FC<Props> = (props) => {
  const { product } = props;
  return (
    <>
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
    </>
  );
};
