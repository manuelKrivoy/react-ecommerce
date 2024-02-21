import { Flex, Box, Text, Link, Button, Image, Img } from "@chakra-ui/react";
import NavButton from "../../common/NavButton";
import { CartWidget } from "../../common/cartWidget/CartWidget";

export const Navbar = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" p="5" background="#233239">
      <Box display="flex" alignItems="center">
        <NavButton text={<Image src="/logo.png" alt="Logo" boxSize="40px" />} href="/" />
        <NavButton text="Selecciones" href="/category/Selecciones" />
        <NavButton text="Clubes" href="/category/Clubes" />
        <NavButton text="Accesorios" href="/category/Accesorios" />
      </Box>
      <Flex alignItems="center">
        <Box>
          <Text fontSize="3xl" color="#D8731F" as="em" fontFamily="'Protest Riot', sans-serif">
            MANSIÓN DE FÚTBOL
          </Text>
        </Box>
        <Box ml="15px">
          <Image src="/logo.png" alt="Logo" boxSize="50px" />
        </Box>
      </Flex>
      <Box>
        <Link href="/cart">
          <CartWidget />
        </Link>
      </Box>
    </Flex>
  );
};
