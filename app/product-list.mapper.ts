import { ProductApi } from "./_api";
import { Product } from "./product-list.vm";
import { formatCurrency } from "./_common";

export const mapProductListFromApiToVm = (
  products: ProductApi[]
): Product[] => {
  if (Array.isArray(products)) {
    return products.map((product) => mapProductFromApiToVm(product));
  } else {
    return [];
  }
};

const mapProductFromApiToVm = (product: ProductApi): Product => ({
  id: product.id,
  name: product.name,
  price: formatCurrency(product.price),
});
