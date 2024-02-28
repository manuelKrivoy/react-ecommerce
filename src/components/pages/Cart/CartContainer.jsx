import { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../../context/CartContext";

export const CartContainer = () => {
  const { cart, clearCart, removeById } = useContext(CartContext);
  return <Cart cart={cart} clearCart={clearCart} removeById={removeById} />;
};
