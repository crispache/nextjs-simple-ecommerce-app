"use client";

import React from "react";
import { CartContextModel } from "./cart.model";

export const CartContext = React.createContext<CartContextModel | null>(null);

export const useCartContext = () => {
  const context = React.useContext(CartContext);
  if (context === null) {
    throw "useCanvasSchemaContext: looks like you have forgotten to add the provider on top of the app :)";
  }

  return context;
};
