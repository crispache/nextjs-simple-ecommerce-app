import styles from "./page.module.css";
import { mockProducts } from "@/app/_mock/products";
import { ProductList } from "./_components";
import { mapProductListFromApiToVm } from "./product-list.mapper";

export default function Home() {
  return (
    <main className={styles.main}>
      <ProductList products={mapProductListFromApiToVm(mockProducts)} />
    </main>
  );
}
