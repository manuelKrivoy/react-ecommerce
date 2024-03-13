import { Flex, Box, Text, Image, IconButton, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CartWidget, NavButton } from "../../common";
import { GiHamburgerMenu } from "react-icons/gi"; // Importa el ícono de hamburguesa

export const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure(); // Usa useDisclosure para abrir y cerrar el menú

  return (
    <Flex justifyContent="space-between" alignItems="center" p="5" background="#233239">
      <Box display={{ base: "block", md: "none" }}>
        <IconButton icon={<GiHamburgerMenu />} aria-label="Abrir menú" bg="#3FBD41" onClick={onToggle} />
      </Box>
      <Flex
        display={{ base: isOpen ? "flex" : "none", md: "flex" }}
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        mb={{ base: "4", md: "10" }}
      >
        <NavButton text={<Image src="/logo.png" alt="Logo" boxSize="40px" />} href="/" />
        <NavButton text="Selecciones" href="/category/Selecciones" />
        <NavButton text="Clubes" href="/category/Clubes" />
        <NavButton text="Accesorios" href="/category/Accesorios" />
      </Flex>
      <Flex alignItems="center">
        <Box>
          <Text fontSize={{ base: "xl", md: "3xl" }} color="#D8731F" as="em" fontFamily="'Protest Riot', sans-serif">
            MANSIÓN DE FÚTBOL
          </Text>
        </Box>
        <Box ml={{ base: "0", md: "15px" }}>
          <Image src="/logoColor.png" alt="Logo" boxSize={{ base: "40px", md: "55px" }} />
        </Box>
      </Flex>
      <Box>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </Box>
    </Flex>
  );
};
