import React, { useState } from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  Flex,
  Button,
} from "@chakra-ui/react";

const Count = ({ stock, onAdd, totalQuantity = 1 }) => {
  // Estado local para almacenar el valor actual del input
  const [value, setValue] = useState(totalQuantity);

  return (
    <Flex alignItems="center">
      <NumberInput
        size="sm"
        maxW={20}
        defaultValue={totalQuantity}
        min={1}
        max={stock}
        bg="white"
        value={value} // Usamos el valor del estado local
        onChange={(newValue) => setValue(newValue)} // Actualizamos el estado local cuando cambia el valor
      >
        <NumberInputField fontWeight="bold" />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <Button
        ml="10px"
        variant="solid"
        background="#3FBD41"
        onClick={() => {
          // Llamamos a la función onAdd pasando el valor actual
          onAdd(value);
          console.log("value es:", value);
        }}
      >
        Añadir al carrito
      </Button>
    </Flex>
  );
};

export default Count;
