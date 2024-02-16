import { Button } from "@chakra-ui/react";
import { BsCartFill } from "react-icons/bs";

export const CartWidget = () => {
  return (
    <>
      <Button variant="solid" mr="4" background="#3FBD41">
        <BsCartFill />
        <p>0</p>
      </Button>
    </>
  );
};
