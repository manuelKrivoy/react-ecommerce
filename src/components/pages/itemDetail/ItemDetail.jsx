import { Box, Image, Text, Heading, Flex } from "@chakra-ui/react";
import { CountContainer, LoadingSpinner } from "../../common";

const ItemDetail = ({ item, onAdd, totalQuantity }) => {
  // Verificar si item es null antes de intentar acceder a sus propiedades
  if (!item) {
    return <LoadingSpinner />;
  }

  return (
    <Flex
      direction={{ base: "column", md: "row" }} // Cambia la dirección de columna a fila en dispositivos móviles
      alignItems="flex-start"
      justifyContent="flex-start"
      p="20px"
      pl={{ base: "20px", md: "40px" }} // Ajusta el padding izquierdo en dispositivos móviles
    >
      <Image
        src={item.img}
        alt={item.title}
        boxSize={{ base: "300px", md: "400px" }} // Ajusta el tamaño de la imagen para dispositivos móviles
        objectFit="contain"
        border="1px solid black"
        mr={{ base: "0", md: "40px" }} // Ajusta el margen derecho en dispositivos móviles
        mb={{ base: "20px", md: "0" }} // Ajusta el margen inferior en dispositivos móviles
        borderRadius="10%"
        _hover={{ opacity: "70%", transform: "scale(1.009)", cursor: "default" }}
        bg="white"
      />
      <Box>
        <Heading as="h2" fontSize={{ base: "35px", md: "55px" }} mb="20px">
          {" "}
          {/* Ajusta el tamaño del título para dispositivos móviles */}
          {item.title}
        </Heading>
        <Text mb="20px" fontSize="20px">
          {item.description}
        </Text>
        <Text fontSize="30px" fontWeight="bold" mb="20px" color="#3FBD41">
          ${item.price}
        </Text>

        {totalQuantity && (
          <Text fontWeight="bold" fontSize="15px" color="#FF5733">
            Ya tienes de esto en tu carrito! ({totalQuantity} unidades)
          </Text>
        )}
        <CountContainer stock={item.stock} onAdd={onAdd} totalQuantity={totalQuantity} />
      </Box>
    </Flex>
  );
};

export default ItemDetail;
