import { Card, CardBody, CardFooter, Image, Heading, Text, Divider, Link, Stack, Box } from "@chakra-ui/react";

export const ProductCard = ({ img, title, price }) => {
  return (
    <Link href="#" _hover={{ transform: "scale(1.02)" }}>
      <Card maxW="sm">
        <CardBody>
          <Image src={img} borderRadius="lg" />
          <div style={{ width: "100%", height: "50px" }}>
            <Stack mt="6">
              <Heading size="md">{title}</Heading>
            </Stack>
          </div>
        </CardBody>
        <Divider paddingTop="10px" />
        <CardFooter justifyContent="center">
          <Box textAlign="center">
            <Text color="blue.600" fontSize="2xl">
              ${price}
            </Text>
          </Box>
        </CardFooter>
      </Card>
    </Link>
  );
};
