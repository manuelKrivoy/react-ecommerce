import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Stack,
} from "@chakra-ui/react";

export const ProductCard = ({ img, title, description, price }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={img} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Text color="blue.600" fontSize="2xl">
            ${price}
          </Text>
          <Button variant="solid" colorScheme="blue">
            Buy
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
