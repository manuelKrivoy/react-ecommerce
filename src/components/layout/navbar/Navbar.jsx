import { Box, Button, Flex } from "@chakra-ui/react";
import { CartWidget } from "../../common/cartWidget/CartWidget";

export const Navbar = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" p="5">
      <Box>
        <Button variant="solid" mr="4">
          Home
        </Button>
        <Button variant="solid" mr="4">
          Selecciones
        </Button>
        <Button variant="solid" mr="4">
          Clubes
        </Button>
        <Button variant="solid">Accesorios</Button>
      </Box>
      <Box>
        <CartWidget />
      </Box>
    </Flex>
  );
};
