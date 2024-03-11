import { CheckOut } from "./CheckOut";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

export const CheckOutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const totalPrice = getTotalPrice();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      tel: "",
      email: "",
      direccion: "",
    },
    onSubmit: async (data) => {
      const order = {
        buyer: data,
        items: cart,
        total: totalPrice,
      };

      try {
        const ordersCollection = collection(db, "orders");
        const orderRef = await addDoc(ordersCollection, order);
        setOrderId(orderRef.id);
        cart.forEach(async (product) => {
          const productRef = doc(db, "products", product.id);
          await updateDoc(productRef, { stock: product.stock - product.quantity });
        });

        clearCart();
      } catch (error) {
        console.error("Error al enviar la orden:", error);
      }
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("El nombre es requerido").min(2, "El nombre debe tener al menos 2 caracteres"),
      apellido: Yup.string()
        .required("El apellido es requerido")
        .min(2, "El apellido debe tener al menos 2 caracteres"),
      tel: Yup.string()
        .required("El teléfono es requerido")
        .matches(/^\d+$/, "El teléfono solo puede contener números"),
      email: Yup.string().email("Ingrese un correo electrónico válido").required("El correo electrónico es requerido"),
      direccion: Yup.string().required("La dirección es requerida"),
    }),
    validateOnChange: false,
  });

  return <CheckOut orderId={orderId} handleChange={handleChange} handleSubmit={handleSubmit} errors={errors} />;
};
