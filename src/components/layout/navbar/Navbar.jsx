import { Helmet } from "react-helmet";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { CartWidget } from "../../common/cartWidget/CartWidget";

export const Navbar = () => {
  return (
    <>
      <Helmet>
        {/* Utilizamos Helmet para agregar etiquetas <link> necesarias para Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Protest+Riot&display=swap" rel="stylesheet" />
      </Helmet>
      <Flex justifyContent="space-between" alignItems="center" p="5" background="#233239">
        <Box>
          <Button variant="solid" mr="4" background="#3FBD41">
            <img src="logo.png" alt="Logo" style={{ width: "30px", height: "30px" }} />
          </Button>
          <Button variant="solid" mr="4" background="#3FBD41">
            Selecciones
          </Button>
          <Button variant="solid" mr="4" background="#3FBD41">
            Clubes
          </Button>
          <Button variant="solid" mr="4" background="#3FBD41">
            Accesorios
          </Button>
        </Box>
        <Box>
          <Text fontSize="3xl" color="#D8731F" as="em" fontFamily="'Protest Riot', sans-serif">
            MANSIÓN DE FÚTBOL
          </Text>
        </Box>
        <Box>
          <CartWidget />
        </Box>
      </Flex>
    </>
  );
};
