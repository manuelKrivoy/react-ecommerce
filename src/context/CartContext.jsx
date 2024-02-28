import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (isInCart(product.id)) {
      //Verifico si el producto ya está en el carrito de antes (no debo agregarlo al carrito como item nuevo si está)
      let newArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: parseInt(elemento.quantity) + parseInt(product.quantity),
          };
        } else {
          return elemento;
        }
      });

      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    let existe = cart.some((elemento) => elemento.id === id);
    return existe;
  };

  const removeById = (id) => {
    console.log("hola");
    let newArray = cart.filter((elemento) => elemento.id !== id);
    setCart(newArray);
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    removeById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
