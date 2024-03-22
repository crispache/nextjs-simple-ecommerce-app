
import { ProductListComponent } from "./product-list.component";
import { mapProductListFromApiToVm } from "./product-list.mapper";
import { mockProducts } from "./api";

export const ProductList: React.FC = () => {
  return (
    <>
      <ProductListComponent products={mapProductListFromApiToVm(mockProducts)} />
    </>
  );
};
