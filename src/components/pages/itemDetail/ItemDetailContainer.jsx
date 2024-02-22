import ItemDetail from "./ItemDetail";
import { getProduct } from "../../../productMock";
import { useState, useEffect } from "react";
import "./ItemDetail.css";
import { useParams } from "react-router-dom";
import Loading from "../../common/LoadingSpinner";

const ItemDetailContainer = () => {
  const { id } = useParams(); //Hook exclusivo de react router dom, detecta el parametro que ingresamos al navegador
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Convertir el ID a un número entero
    const itemId = parseInt(id);
    getProduct(itemId)
      .then((resp) => setItem(resp))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, [id]);

  return <>{isLoading ? <Loading /> : <ItemDetail item={item} />}</>;
};

export default ItemDetailContainer;
