import { ChakraProvider } from "@chakra-ui/react"; //Chakra UI
import theme from "./theme.jsx"; // Reemplaza el index.css

import { CartContainer, CheckOutContainer, ItemDetailContainer, ItemListContainer, NotFound } from "./components/pages";

import { BrowserRouter, Routes, Route } from "react-router-dom"; //Router

import Layout from "./components/layout/Layout.jsx";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* Es ruta padre */}
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/checkout" element={<CheckOutContainer />} />
          </Route>
          <Route path="*" element={<NotFound />} /> {/* Para todo lo que no esta definido */}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
