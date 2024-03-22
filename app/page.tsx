import styles from "./page.module.css";
import { CartProvider } from "./_core";
import { Cart, ProductList } from "./_pods";

export default function Home() {
  return (
    <main className={styles.main}>
      <CartProvider>
        <ProductList />
        <Cart />
      </CartProvider>
    </main>
  );
}
