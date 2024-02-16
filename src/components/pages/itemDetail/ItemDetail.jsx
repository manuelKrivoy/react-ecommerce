import { Box, Image, Text, Heading, Flex } from "@chakra-ui/react";
import CounterContainer from "../../common/counter/CounterContainer";

const ItemDetail = ({ item }) => {
  // Verificar si item es null antes de intentar acceder a sus propiedades
  if (!item) {
    return <div>Cargando...</div>; // O cualquier otro indicador de carga que desees mostrar
  }

  return (
    <Flex alignItems="flex-start" justifyContent="flex-start" p="20px">
      <Image src={item.img} alt={item.title} boxSize="400px" objectFit="contain" border="2px solid black" mr="40px" />
      <Box>
        <Heading as="h2" fontSize="55px" mb="20px">
          {item.title}
        </Heading>
        <Text mb="20px" fontSize="30px">
          {item.description}
        </Text>
        <Text fontSize="40px" fontWeight="bold" mb="20px" color="green">
          ${item.price}
        </Text>
        <CounterContainer stock={item.stock} />
      </Box>
    </Flex>
  );
};

export default ItemDetail;
