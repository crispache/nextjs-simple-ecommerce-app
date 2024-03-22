

export interface Product {
    id: number;
    name: string;
    price: string;
    priceNoFormat: number;
    imageUrl: string;
}


export interface CartActionsReducer {
    type: "ADD_TO_CART"; // Añadir el resto de actions
    payload: Product;
}


export interface CartContextModel {
    cart: Product[];
    addToCart: (product: Product) => void;
    isProductAddedToCart: (productId: number) => boolean;
}