import ItemListContainer from "./components/pages/itemList/ItemListContainer.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer.jsx";
import theme from "./theme.jsx"; // Reemplaza el index.css
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/pages/Cart/Cart.jsx";
import Layout from "./components/layout/Layout.jsx";
import NotFound from "./components/pages/NotFound.jsx";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* Es ruta padre */}
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/checkout" element={<ItemListContainer />} />
          </Route>
          <Route path="*" element={<NotFound />} /> {/* Para todo lo que no esta definido */}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
