import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
} from "@chakra-ui/react";

const Count = ({ count, add, odd, stock }) => {
  return (
    <NumberInput size="sm" maxW={20} defaultValue={1} min={1} max={stock} bg="white">
      <NumberInputField fontWeight="bold" />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default Count;
