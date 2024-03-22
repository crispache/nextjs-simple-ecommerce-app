
import Image from "next/image";
import { Product } from "../../cart.vm";
import styles from './cart-product-item.module.css';

interface Props {
  product: Product;
}

export const CartProductItem: React.FC<Props> = (props) => {
  const { product } = props;
  return (
    <>
       <Image
          src={product.imageUrl}
          width={80}
          height={80}
          alt="Imagen del producto"
          className={styles.productItemImage}
        />
      <h3 className={styles.productItemName}> {product.name} </h3>
      <p className={styles.productItemPrice}> {product.price} </p>
    </>
  );
};
