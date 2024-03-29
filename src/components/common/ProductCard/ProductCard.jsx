import { Card, CardBody, CardFooter, Image, Heading, Text, Divider, Stack, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export const ProductCard = ({ id, img, title, price }) => {
  return (
    <Link to={`/item/${id}`} className="card-link">
      <Card maxW="sm">
        <CardBody className="card-body">
          <Image className="card-image" src={img} />
          <div className="card-title">
            <Stack>
              <Heading size="md">{title}</Heading>
            </Stack>
          </div>
        </CardBody>
        <Divider paddingTop="10px" />
        <CardFooter className="card-footer">
          <Box textAlign="center">
            <Text className="card-price">${price}</Text>
          </Box>
        </CardFooter>
      </Card>
    </Link>
  );
};
