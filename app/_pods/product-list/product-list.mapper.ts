import { formatCurrency } from "@/app/_common";
import { ProductApi } from "./api";
import { Product } from "./product-list.vm";

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
  priceNoFormat: product.price,
  imageUrl: product.imageUrl,
});
