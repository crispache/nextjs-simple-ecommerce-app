import { Product } from "./cart.vm";

interface Props {
  products: Product[];
}

export const CartComponent: React.FC<Props> = (props) => {
  const { products } = props;
    return (
      <>
        <h1>CARRITO</h1>
      </>
    );
  };
  