import NavbarContainer from "./components/layout/navbar/NavbarContainer.jsx";
import ItemListContainer from "./components/pages/itemList/ItemListContainer.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer.jsx";
import theme from "./theme.jsx"; // Reemplaza el index.css

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <NavbarContainer />
        <ItemListContainer></ItemListContainer>
        <ItemDetailContainer />
      </div>
    </ChakraProvider>
  );
}

export default App;
