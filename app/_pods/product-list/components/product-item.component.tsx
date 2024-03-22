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
  const { addToCart, isProductAddedToCart } = useCartContext();
  // TODO: REVISAR (performance)
  const productPriceClass = isProductAddedToCart(product.id)
    ? styles.productPriceDisabled
    : styles.productPrice;

  return (
    <>
      <h3 className={styles.productName}> {product.name} </h3>
      <p className={productPriceClass}>{product.price}</p>
      <button
        className={styles.productAddToCartButton}
        onClick={() => addToCart(product)}
        disabled={isProductAddedToCart(product.id)}
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
