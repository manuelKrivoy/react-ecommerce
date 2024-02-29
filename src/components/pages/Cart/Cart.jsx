import { Flex, Button, Stack, Text } from "@chakra-ui/react";
import { NavButton } from "../../common";
import { CartCardContainer } from "../../common";
import EmptyCart from "./EmptyCart";

const Cart = ({ cart, removeById, clearCart, cartValue }) => {
  if (cart.length > 0) {
    return (
      <Flex justify="center">
        <Stack p="10px" width="100%">
          {cart.map(({ id, img, title, price, quantity }) => (
            <CartCardContainer
              key={id}
              id={id}
              img={img}
              title={title}
              price={price}
              quantity={quantity}
              removeById={removeById}
            />
          ))}
          <Flex justify="center">
            <Text fontSize="3xl" as="b" color="#D8731F">
              ${cartValue}
            </Text>
          </Flex>
          <Flex justify="center">
            <NavButton text="Finalizar compra" href="/checkout"></NavButton>
            <Button onClick={clearCart} colorScheme="teal" mr="10px">
              Limpiar Carrito
            </Button>
          </Flex>
        </Stack>
      </Flex>
    );
  } else {
    return <EmptyCart />;
  }
};

export default Cart;
