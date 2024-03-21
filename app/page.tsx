import styles from "./page.module.css";
import { ProductList } from "./_components";
import { mapProductListFromApiToVm } from "./product-list.mapper";
import { mockProducts } from "./_api";

export default function Home() {
  return (
    <main className={styles.main}>
      <ProductList products={mapProductListFromApiToVm(mockProducts)} />
    </main>
  );
}
