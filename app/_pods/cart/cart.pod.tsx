import { CartComponent } from "./cart.component";
import { Product } from "./cart.vm";

/* Mock data - Store Cart */
const mockProducts: Product[] = [
  {
    id: 1,
    name: "Lajusticia colágeno con magnesio 450comp",
    price: '14.35 €',
    priceNoFormat: 14.35,
    imageUrl: "/products/lajusticia-colageno.jpg",
  },
  {
    id: 2,
    name: "Xhekpon® crema facial 40ml",
    price: '6.49 €',
    priceNoFormat: 6.49,
    imageUrl: "/products/xhekpon-crema.jpg",
  },
  {
    id: 3,
    name: "Cerave ® Crema Hidratante 340ml",
    price: '11.7 €',
    priceNoFormat: 11.7,
    imageUrl: "/products/cerave-crema.jpg",
  }
];

export const Cart: React.FC = () => {
  return (
    <>
      <CartComponent products={mockProducts}/>
    </>
  );
};
