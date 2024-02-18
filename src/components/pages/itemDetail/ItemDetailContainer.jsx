import ItemDetail from "./ItemDetail";
import { products } from "../../../productMock";
import { useState, useEffect } from "react";
import "./ItemDetail.css";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  let id = 15;

  useEffect(() => {
    const filteredItem = products.find((product) => product.id === id);
    setItem(filteredItem);
  }, []);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
