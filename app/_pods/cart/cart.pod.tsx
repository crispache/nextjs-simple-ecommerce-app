'use client'

import { CartComponent } from "./cart.component";
import { useCartContext } from "@/app/_core";

export const Cart: React.FC = () => {
  const { cart } = useCartContext();
  return (
    <>
      <CartComponent products={cart}/>
    </>
  );
};
