import { Box, Button, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const EmptyCart = () => {
  return (
    <Box textAlign="center" p="4">
      <Heading as="h2" size="lg" mb="4">
        No tienes items en tu carrito!
      </Heading>
      <Image src="/emptyCart.gif" alt="Empty Cart" mx="auto" mb="4" />
      <Link to="/">
        <Button colorScheme="teal" variant="outline">
          Descubre nuestros productos
        </Button>
      </Link>
    </Box>
  );
};

export default EmptyCart;
