import { extendTheme } from "@chakra-ui/react";
import "./fonts.css"; //Importo fuentes para poder utilizarlas en cualquier parte del proyecto
//Este archivo reemplaza al index.css. Chakra UI no me dejaba setear un background global con body
//Esta librería provee esta posibilidad de crear aspectos globales

const theme = extendTheme({
  //Este bloque define fuentes globales para el proyecto.
  // fonts: {
  //   body: "'Protest Riot', sans-serif",
  //   heading: " sans-serif",
  // },

  styles: {
    global: {
      body: {
        bg: "#d1d9e6",
      },
    },
  },
});

export default theme;
