import styles from "./page.module.css";
import { mockProducts } from "@/app/_mock/products";
import { ProductList } from "./product-list.component";

export default function Home() {
  return (
    <main className={styles.main}>
      <ProductList products={mockProducts} />
    </main>
  );
}
