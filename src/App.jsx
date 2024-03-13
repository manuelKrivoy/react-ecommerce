//Chakra UI
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.jsx";

//Por el context
import CartContextProvider from "./context/CartContext.jsx";

//Rutas
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./components/router/AppRoutes.jsx";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <CartContextProvider>
          <AppRoutes></AppRoutes>
        </CartContextProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
