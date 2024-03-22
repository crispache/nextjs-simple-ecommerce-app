'use client'

import { CartContext } from "./cart.context";
import { useCartReducer } from "./cart.reducer";

interface Props {
    children: React.ReactNode;
}

export const CartProvider: React.FC<Props> = ({ children }) => {
    const { state, addToCart, isProductAddedToCart, removeFromCart } = useCartReducer();
    return (
      <CartContext.Provider
        value={{
            cart: state,
            addToCart: addToCart,
            isProductAddedToCart,
            removeFromCart
        }}>
        {children}
      </CartContext.Provider>
    );
};