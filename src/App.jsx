import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.jsx";
import {
  CartContainer,
  CheckOutContainer,
  FinalPage,
  ItemDetailContainer,
  ItemListContainer,
  NotFound,
} from "./components/pages";
import CartContextProvider, { CartContext } from "./context/CartContext.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import { useContext } from "react";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/category/:category" element={<ItemListContainer />} />
              {/* Verificar si el carrito tiene elementos, si no, redirigir a la página de inicio */}
              <Route path="/checkout" element={<ProtectedCheckout />} />
              <Route path="/checkout/:orderId" element={<FinalPage />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
}

function ProtectedCheckout() {
  //Solo se puede ir a /checkout si el carrito tiene items
  const { cart } = useContext(CartContext);
  return cart.length > 0 ? <CheckOutContainer /> : <Navigate to="/" />;
}

export default App;
