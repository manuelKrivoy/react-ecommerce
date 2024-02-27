import { Center, Box, Image, Text } from "@chakra-ui/react";
import { NavButton } from "../common/NavButton";

export const NotFound = () => {
  return (
    <Center>
      <Box boxSize="lg">
        <Image src="/404.gif" maxH="100%" maxW="100%" />
        <Box position="absolute" top="100%" left="50%" transform="translate(-50%, -50%)">
          <NavButton mt="10px" text="Volver al inicio" href="/" />
        </Box>
      </Box>
    </Center>
  );
};

export default NotFound;
