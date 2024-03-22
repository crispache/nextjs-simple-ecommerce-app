'use client'

import Image from "next/image";
import { Product } from "../../cart.vm";
import styles from './cart-product-item.module.css';
import { useCartContext } from "@/app/_core";

interface Props {
  product: Product;
}

export const CartProductItem: React.FC<Props> = (props) => {
  const { product } = props;
  const { removeFromCart } = useCartContext();
  return (
    <>
       <Image
          src={product.imageUrl}
          width={70}
          height={70}
          alt="Imagen del producto"
          className={styles.productItemImage}
        />
      <h3 className={styles.productItemName}> {product.name} </h3>
      <p className={styles.productItemPrice}> {product.price} </p>
      <button className={styles.productItemTrashButton} onClick={()=> removeFromCart(product)}>
        <Image
          src="/icons/trash.png"
          width={20}
          height={20}
          alt="Papelera"
        />
      </button>
    </>
  );
};
