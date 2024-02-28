import { Card, CardBody, Heading, Stack, Text, Image, CardFooter, Button } from "@chakra-ui/react";

const CartCard = ({ id, img, title, price, quantity, removeById }) => {
  return (
    <Card direction={{ base: "column", sm: "row" }} overflow="hidden" variant="outline">
      <Image objectFit="cover" maxW={{ base: "100%", sm: "200px" }} src={img} />

      <Stack>
        <CardBody>
          <Heading size="md">{title}</Heading>
          <p>Precio: ${price}</p>
          <p>Cantidad: {quantity}</p>
          <p>
            <b>Total:: ${price * quantity}</b>
          </p>
        </CardBody>

        <CardFooter>
          <Button
            onClick={() => {
              removeById(id);
            }}
            variant="solid"
            colorScheme="blue"
          >
            Eliminar
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default CartCard;
