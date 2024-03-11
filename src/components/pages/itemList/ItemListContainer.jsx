import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { LoadingSpinner } from "../../common";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore"; //Metodo collection sirve para apuntar a una colección especifica, y getDocs para traer documentos de la colección

export const ItemListContainer = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let productsCollection = collection(db, "products"); // dentro de la bdd quiero la colección products
    let consulta = productsCollection;

    if (category) {
      let productsFiltered = query(productsCollection, where("category", "==", category));
      consulta = productsFiltered;
    }

    getDocs(consulta)
      .then((res) => {
        let arrayProducts = res.docs.map((elemento) => {
          return {
            ...elemento.data(),
            id: elemento.id,
          };
        });

        setItems(arrayProducts);
      })
      .finally(() => setIsLoading(false));
  }, [category]);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
