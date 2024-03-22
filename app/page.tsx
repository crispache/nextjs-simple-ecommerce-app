import styles from "./page.module.css";
import { ProductList } from "./_pods/product-list";
import { Cart } from "./_pods/cart";

export default function Home() {
  return (
    <main className={styles.main}>
      <ProductList />
      <Cart />
    </main>
  );
}
