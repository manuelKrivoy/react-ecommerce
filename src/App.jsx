import NavbarContainer from "./components/layout/navbar/NavbarContainer.jsx";
import ItemListContainer from "./components/pages/itemList/ItemListContainer.jsx";
import { ChakraProvider, background } from "@chakra-ui/react";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer.jsx";
import "./index.css";

function App() {
  return (
    <ChakraProvider>
      <div>
        <NavbarContainer />
        <p></p>
        <ItemListContainer></ItemListContainer>
        {/* <ItemDetailContainer /> */}
      </div>
    </ChakraProvider>
  );
}

export default App;
