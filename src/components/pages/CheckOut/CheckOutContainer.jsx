import { useState } from "react";
import { CheckOut } from "./CheckOut";
export const CheckOutContainer = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    direccion: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return <CheckOut handleInputChange={handleInputChange} handleSubmit={handleSubmit} />;
};
