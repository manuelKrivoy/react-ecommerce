import ItemDetail from "./ItemDetail";
import { useState, useEffect, useContext } from "react";
import "./ItemDetail.css";
import { useNavigate, useParams } from "react-router-dom";
import { LoadingSpinner } from "../../common";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const { id } = useParams(); //Hook exclusivo de react router dom, detecta el parametro que ingresamos al navegador
  const { getTotalQuantityById } = useContext(CartContext);
  let totalQuantity = getTotalQuantityById(id);
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const navigate = useNavigate();
  const { addToCart } = useContext(CartContext); //traigo contexto para agregar productos al carrito
  useEffect(() => {
    let productCollection = collection(db, "products"); //Traigo colección
    let refDoc = doc(productCollection, id); //Me traigo el documento que tenga el id del useParams
    getDoc(refDoc)
      .then((res) => {
        setItem({ ...res.data(), id: res.id }); //seteo item con el documento
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  const onAdd = (cantidad) => {
    Swal.fire({
      icon: "success",
      title: "Producto agregado!",
      showConfirmButton: false,
      timer: 1000,
    });
    let infoProducto = {
      ...item,
      quantity: cantidad,
    };
    addToCart(infoProducto);
    // navigate("/cart"); //Quiero viajar al carrito despues de añadir producto
  };
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <ItemDetail item={item} onAdd={onAdd} totalQuantity={totalQuantity} />
    </>
  );
};
