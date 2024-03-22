

export interface Product {
    id: number;
    name: string;
    price: string;
    priceNoFormat: number;
    imageUrl: string;
}


export interface CartActionsReducer {
    type: 'ADD_TO_CART' | 'REMOVE_FROM_CART';
    payload: Product;
}


export enum CART_ACTION_TYPE {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

export interface CartContextModel {
    cart: Product[];
    addToCart: (product: Product) => void;
    isProductAddedToCart: (productId: number) => boolean;
    removeFromCart: (product: Product) => void;
}