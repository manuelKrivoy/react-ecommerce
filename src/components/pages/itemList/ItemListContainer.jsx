import { useParams } from "react-router-dom";
import { getProducts } from "../../../productMock"; // Importa solo los productos, no la función getProducts
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import Loading from "../../common/LoadingSpinner";

const ItemListContainer = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProducts().then((resp) => {
      // Verifico si existe una category en el parámetro
      if (category) {
        const productsFilter = resp.filter((product) => product.category === category);
        // Guardamos los productos filtrados por categoría en nuestro state products
        setItems(productsFilter);
      } else {
        // Si no tenemos una category almacenamos todos los productos
        setItems(resp);
      }

      setIsLoading(false);
    });
  }, [category]);
  return <>{isLoading ? <Loading /> : <ItemList items={items} />}</>;
};

export default ItemListContainer;
