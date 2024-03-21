import styles from "./page.module.css";
import { mockProducts } from "@/app/_mock/products";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <article>
        <ul className={styles.productList}>
          {mockProducts.map((product) => (
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
    </main>
  );
}
