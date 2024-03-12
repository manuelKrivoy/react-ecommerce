import { CheckOut } from "./CheckOut";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import * as Yup from "yup";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const CheckOutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const totalPrice = getTotalPrice();
  const navigate = useNavigate(); // Hook para navegar entre rutas

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Muestra una alerta de confirmación al usuario
    const result = await Swal.fire({
      title: "Confirmar Compra",
      text: "¿Estás seguro de que deseas realizar la compra?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, Comprar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    });

    // Si el usuario confirma la compra, envía el formulario
    if (result.isConfirmed) {
      handleSubmit(e);
    }
  };

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
        // Navegar a la ruta con el orderId
        navigate(`/checkout/${orderRef.id}`);
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

  return (
    <CheckOut
      orderId={orderId}
      handleChange={handleChange}
      handleSubmit={handleFormSubmit}
      errors={errors}
      totalPrice={totalPrice}
    />
  );
};
