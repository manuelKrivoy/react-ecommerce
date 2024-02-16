import { IconButton, ButtonGroup, Box, Text, Button } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const Count = ({ count, add, odd, stock }) => {
  return (
    <div>
      <Box>
        <ButtonGroup variant="outline" spacing="6">
          <IconButton aria-label="addItem" onClick={add} icon={<AddIcon />} isDisabled={count == stock} />
          <Text fontSize="25px" as="b">
            {count}
          </Text>
          <IconButton aria-label="oddItem" onClick={odd} icon={<MinusIcon />} isDisabled={count < 2} />
        </ButtonGroup>
      </Box>
      <Box paddingTop="20px">
        <Button colorScheme="blue" variant="outline">
          Añadir al carrito
        </Button>
      </Box>
    </div>
  );
};

export default Count;
