import { Box, Image, Text, Heading, Flex } from "@chakra-ui/react";
import { CountContainer, LoadingSpinner } from "../../common";

const ItemDetail = ({ item, onAdd, totalQuantity }) => {
  // Verificar si item es null antes de intentar acceder a sus propiedades
  if (!item) {
    return <LoadingSpinner />;
  }

  return (
    <Flex alignItems="flex-start" justifyContent="flex-start" p="20px" pl="40px">
      <Image
        src={item.img}
        alt={item.title}
        boxSize="400px"
        objectFit="contain"
        border="1px solid black"
        mr="40px"
        borderRadius="10%"
        _hover={{ opacity: "70%", transform: "scale(1.009)", cursor: "default" }}
        bg="white"
      />
      <Box>
        <Heading as="h2" fontSize="55px" mb="20px">
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
