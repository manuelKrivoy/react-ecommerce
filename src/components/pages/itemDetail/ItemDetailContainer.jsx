import ItemDetail from "./ItemDetail";
import { getProduct } from "../../../productMock";
import { useState, useEffect, useContext } from "react";
import "./ItemDetail.css";
import { useNavigate, useParams } from "react-router-dom";
import { LoadingSpinner } from "../../common";
import { CartContext } from "../../../context/CartContext";

export const ItemDetailContainer = () => {
  const { id } = useParams(); //Hook exclusivo de react router dom, detecta el parametro que ingresamos al navegador
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const navigate = useNavigate();
  const { addToCart } = useContext(CartContext); //traigo contexto para agregar productos al carrito
  useEffect(() => {
    // Convertir el ID a un número entero
    const itemId = parseInt(id);
    getProduct(itemId)
      .then((resp) => setItem(resp))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, [id]);

  const onAdd = (cantidad) => {
    let infoProducto = {
      ...item,
      quantity: cantidad,
    };

    console.log("se ha comprado:  ", infoProducto);
    addToCart(infoProducto);
    // navigate("/cart"); //Quiero viajar al carrito despues de añadir producto
  };

  return <>{isLoading ? <LoadingSpinner /> : <ItemDetail item={item} onAdd={onAdd} />}</>;
};
