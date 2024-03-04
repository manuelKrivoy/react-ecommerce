import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (isInCart(product.id)) {
      //Verifico si el producto ya está en el carrito de antes (no debo agregarlo al carrito como item nuevo si está)
      let newArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          //Le sumo al carrito el valor de los nuevos elementos agregados
          return {
            ...elemento,
            quantity: parseInt(product.quantity),
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
    // Filtra el arreglo cart para eliminar el elemento con el ID especificado
    const newArray = cart.filter((elemento) => elemento.id !== id);
    // Actualiza el estado cart con el nuevo arreglo filtrado
    setCart(newArray);
  };

  const getTotalItems = () => {
    let total = cart.reduce((acc, elem) => {
      return acc + parseInt(elem.quantity);
    }, 0);

    return total;
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elem) => {
      return acc + elem.quantity * elem.price;
    }, 0);

    return total;
  };

  const getTotalQuantityById = (id) => {
    let product = cart.find((el) => +el.id === +id);
    if (product) {
      return +product.quantity;
    } else {
      return product;
    }
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    removeById,
    getTotalItems,
    getTotalPrice,
    getTotalQuantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
