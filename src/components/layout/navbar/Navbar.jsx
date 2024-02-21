import { Flex, Box, Text, Link, Button } from "@chakra-ui/react";
import NavButton from "../../common/NavButton";
import { CartWidget } from "../../common/cartWidget/CartWidget";

export const Navbar = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" p="5" background="#233239">
      <Box>
        <Link href="/">
          <Button variant="solid" mr="4" background="#3FBD41">
            <img src="/logo.png" alt="Logo" style={{ width: "30px", height: "30px" }} />
          </Button>
        </Link>
        <NavButton text="Selecciones" href="/category/Selecciones" />
        <NavButton text="Clubes" href="/category/Clubes" />
        <NavButton text="Accesorios" href="/category/Accesorios" />
      </Box>
      <Box>
        <Text fontSize="3xl" color="#D8731F" as="em" fontFamily="'Protest Riot', sans-serif">
          MANSIÓN DE FÚTBOL
        </Text>
      </Box>
      <Box>
        <Link href="/cart">
          <CartWidget />
        </Link>
      </Box>
    </Flex>
  );
};
