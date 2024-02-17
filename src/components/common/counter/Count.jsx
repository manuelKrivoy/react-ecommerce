import { IconButton, ButtonGroup, Box, Text, Button } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import "./Count.css";

const Count = ({ count, add, odd, stock }) => {
  return (
    <div className="count-wrapper">
      <Box>
        <ButtonGroup variant="outline" spacing="6">
          <IconButton aria-label="addItem" onClick={add} icon={<AddIcon />} isDisabled={count == stock} />
          <Text className="count-button" as="b">
            {count}
          </Text>
          <IconButton aria-label="oddItem" onClick={odd} icon={<MinusIcon />} isDisabled={count == 1} />
        </ButtonGroup>
      </Box>
      <Box paddingTop="10px">
        <Button colorScheme="blue" variant="outline">
          Añadir al carrito
        </Button>
      </Box>
    </div>
  );
};

export default Count;
