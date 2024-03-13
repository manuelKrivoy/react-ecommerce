import { routes } from "./routes";
import Layout from "../layout/Layout";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "../pages";

export const AppRoutes = () => {
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
