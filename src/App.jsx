import NavbarContainer from "./components/layout/navbar/NavbarContainer.jsx";
import ItemListContainer from "./components/pages/itemList/ItemListContainer.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer.jsx";
import theme from "./theme.jsx"; // Reemplaza el index.css
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/pages/Cart/Cart.jsx";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <NavbarContainer /> {/*  Navbar va a afuera de Routes porque siempre se muestra*/}
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
