"use client";

import Image from "next/image";
import { Product } from "../product-list.vm";
import styles from "./product-item.module.css";
import { useCartContext } from "@/app/_core";

interface Props {
  product: Product;
}

export const ProductItem: React.FC<Props> = (props) => {
  const { product } = props;
  const { addToCart } = useCartContext();
  return (
    <>
      <h3 className={styles.productName}> {product.name} </h3>
      <p className={styles.productPrice}> {product.price} </p>
      <button
        className={styles.productAddToCartButton}
        onClick={() => addToCart(product)}
      >
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
