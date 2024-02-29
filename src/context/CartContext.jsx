import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartValue, setCartValue] = useState(0);

  const addToCart = (product) => {
    if (isInCart(product.id)) {
      //Verifico si el producto ya está en el carrito de antes (no debo agregarlo al carrito como item nuevo si está)
      let newArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          //Le sumo al carrito el valor de los nuevos elementos agregados
          return {
            ...elemento,
            quantity: parseInt(elemento.quantity) + parseInt(product.quantity),
          };
        } else {
          return elemento;
        }
      });
      setCartValue(cartValue + product.quantity * product.price);
      setCart(newArray);
    } else {
      setCart([...cart, product]);
      setCartValue(cartValue + product.quantity * product.price);
    }
  };

  const clearCart = () => {
    setCart([]);
    setCartValue(0);
  };

  const isInCart = (id) => {
    let existe = cart.some((elemento) => elemento.id === id);
    return existe;
  };

  const removeById = (id) => {
    // Filtra el arreglo cart para eliminar el elemento con el ID especificado
    const newArray = cart.filter((elemento) => elemento.id !== id);

    // Encuentra el elemento que se va a eliminar
    const removedItem = cart.find((elemento) => elemento.id === id);
    // Calcula el nuevo valor total del carrito después de eliminar el elemento
    const newCartValue = cartValue - removedItem.price * removedItem.quantity;

    // Actualiza el estado cart con el nuevo arreglo filtrado
    setCart(newArray);
    // Actualiza el estado cartValue con el nuevo valor total del carrito
    setCartValue(newCartValue);
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    removeById,
    cartValue,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
