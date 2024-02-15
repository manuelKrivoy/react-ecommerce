import { products } from "../../../productMock";
import ItemList from "./ItemList";
import { useState, useEffect } from "react";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(products);
  }, []);

  return (
    <>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
