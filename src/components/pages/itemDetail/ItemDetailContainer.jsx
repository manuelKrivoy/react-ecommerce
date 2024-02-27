import ItemDetail from "./ItemDetail";
import { getProduct } from "../../../productMock";
import { useState, useEffect } from "react";
import "./ItemDetail.css";
import { useNavigate, useParams } from "react-router-dom";
import { LoadingSpinner } from "../../common";

export const ItemDetailContainer = () => {
  const { id } = useParams(); //Hook exclusivo de react router dom, detecta el parametro que ingresamos al navegador
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    // Convertir el ID a un número entero
    const itemId = parseInt(id);
    getProduct(itemId)
      .then((resp) => setItem(resp))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, [id]);

  const onAdd = (cantidad) => {
    console.log("se ha pasado: ", cantidad);

    navigate("/cart"); //Quiero viajar al carrito despues de añadir producto
  };

  return <>{isLoading ? <LoadingSpinner /> : <ItemDetail item={item} onAdd={onAdd} />}</>;
};
