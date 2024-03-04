import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { BsCartFill } from "react-icons/bs";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  let totalItems = getTotalItems();
  return (
    <>
      <Button variant="solid" mr="4" background="#3FBD41">
        <BsCartFill />
        <p>{totalItems}</p>
      </Button>
    </>
  );
};
