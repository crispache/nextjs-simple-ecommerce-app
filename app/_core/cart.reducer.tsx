import { useReducer } from "react";
import { CartActionsReducer, Product } from "./cart.model";

const cartInitialState: Product[] = [];
const cartReducer = (state: Product[], action: CartActionsReducer): Product[] => {
    const { type, payload } = action;
    switch (type) {
      case 'ADD_TO_CART':
        return [
          ...state,
          payload
        ];
    
      default:
        return state;
    }
};


export const useCartReducer = () => {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);

    const addToCart = (product: Product) => dispatch({
        type: 'ADD_TO_CART', 
        payload: product
    });

    const isProductAddedToCart = (productId: number): boolean => {
      return state.some(product => product.id === productId);
    }

    return { state, addToCart, isProductAddedToCart }
}