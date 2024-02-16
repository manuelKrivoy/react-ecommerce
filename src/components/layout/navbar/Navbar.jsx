import { Box, Button, Flex } from "@chakra-ui/react";
import { CartWidget } from "../../common/cartWidget/CartWidget";

export const Navbar = () => {
  return (
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
        <CartWidget />
      </Box>
    </Flex>
  );
};
