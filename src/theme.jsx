import { extendTheme } from "@chakra-ui/react";

//Este archivo reemplaza al index.css. Chakra UI no me dejaba setear un background global con body
//Esta librería provee esta posibilidad de crear aspectos globales

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#d1d9e6",
      },
    },
  },
});

export default theme;
