import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <div>
      <Box bg="#233239" color="white" p={4} bottom="-5" width="100%">
        <Flex justifyContent="center" alignItems="center">
          <Text>Manuel Krivoy © {new Date().getFullYear()}</Text>
        </Flex>
      </Box>
    </div>
  );
};

export default Footer;
