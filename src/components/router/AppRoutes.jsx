import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import Layout from "../layout/Layout";
import { CartContext } from "../../context/CartContext";
import { CheckOutContainer, NotFound } from "../pages";
import { useContext } from "react";

export const AppRoutes = () => {
  function ProtectedCheckout() {
    //Solo se puede ir a /checkout si el carrito tiene items
    const { cart } = useContext(CartContext);
    return cart.length > 0 ? <CheckOutContainer /> : <Navigate to="/" />;
  }
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Utiliza paréntesis en lugar de llaves dentro del mapeo */}
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
