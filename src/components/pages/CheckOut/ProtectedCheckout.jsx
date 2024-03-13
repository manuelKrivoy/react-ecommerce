import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { CheckOutContainer } from "./CheckOutContainer";
import { Navigate } from "react-router-dom";

export const ProtectedCheckout = () => {
  //Solo se puede ir a /checkout si el carrito tiene items
  const { cart } = useContext(CartContext);
  return cart.length > 0 ? <CheckOutContainer /> : <Navigate to="/" />;
};
