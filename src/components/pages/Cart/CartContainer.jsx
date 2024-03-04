import { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
export const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice } = useContext(CartContext);
  let cartValue = getTotalPrice();

  const clearCartAlert = () => {
    Swal.fire({
      title: "¿Desea limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Confirmar",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Carrito limpiado!", "", "success");
        clearCart();
      }
    });
  };

  const removeByIdAlert = (id) => {
    Swal.fire({
      title: "¿Desea eliminar este producto?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Confirmar",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Producto eliminado!", "", "success");
        removeById(id);
      }
    });
  };
  return <Cart cart={cart} clearCart={clearCartAlert} removeById={removeByIdAlert} cartValue={cartValue} />;
};
