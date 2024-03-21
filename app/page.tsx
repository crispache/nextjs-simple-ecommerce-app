import styles from "./page.module.css";
import { ProductList } from "./_pods/product-list";

export default function Home() {
  return (
    <main className={styles.main}>
      <ProductList />
    </main>
  );
}
