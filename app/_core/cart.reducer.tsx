import { useReducer } from "react";
import { CART_ACTION_TYPE, CartActionsReducer, Product } from "./cart.model";

const cartInitialState: Product[] = [];
const cartReducer = (state: Product[], action: CartActionsReducer): Product[] => {
    const { type, payload } = action;
    switch (type) {
      case CART_ACTION_TYPE.ADD_TO_CART:
        return [
          ...state,
          payload
        ];

        case CART_ACTION_TYPE.REMOVE_FROM_CART: {
          const { id } = payload;
          return state.filter(product => product.id !== id);
        }
       
      default:
        return state;
    }
};


export const useCartReducer = () => {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);

    const addToCart = (product: Product) => dispatch({
        type: CART_ACTION_TYPE.ADD_TO_CART, 
        payload: product
    });

    const removeFromCart = (product: Product) => dispatch({
      type: CART_ACTION_TYPE.REMOVE_FROM_CART, 
      payload: product
  });

    const isProductAddedToCart = (productId: number): boolean => {
      return state.some(product => product.id === productId);
    }

    return { state, addToCart, isProductAddedToCart, removeFromCart }
}