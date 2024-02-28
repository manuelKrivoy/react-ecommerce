import { Center, Flex, Button, Box } from "@chakra-ui/react";
import { NavButton } from "../../common";
import { CartCardContainer } from "../../common";
import EmptyCart from "./EmptyCart";

const Cart = ({ cart, removeById, clearCart }) => {
  if (cart.length > 0) {
    return (
      <Flex>
        <div>
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
          <Button m="10px" onClick={clearCart} colorScheme="teal">
            Limpiar Carrito
          </Button>
        </div>
        <Center pl="5px">
          <Box mt="5px">
            <NavButton text="Finalizar compra" href="/checkout" />
          </Box>
        </Center>
      </Flex>
    );
  } else {
    return <EmptyCart />;
  }
};

export default Cart;
