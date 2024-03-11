import { Box, Center, useClipboard, Image, Text, IconButton, Tooltip, Flex } from "@chakra-ui/react";
import { NavButton } from "../common";
import { CopyIcon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";

export const FinalPage = () => {
  const { orderId } = useParams();
  const { hasCopied, onCopy } = useClipboard(orderId);

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Text p={8} fontSize="2xl" as="b" fontFamily="'Angkor', sans-serif">
        COMPRA FINALIZADA!
      </Text>
      <Image src="/shoppingBag.png" />
      <Text mt={8} fontSize="xl" color="black" textAlign="center">
        ID de seguimiento:
      </Text>

      <Flex justifyContent="center" alignItems="center" mt={2}>
        <Box
          fontWeight="bold"
          fontSize="xl"
          color="black"
          bg=" #818181  "
          borderRadius="md"
          p={2}
          pr={10}
          position="relative"
        >
          {orderId}
          <Tooltip
            label={hasCopied ? "Copiado!" : "Copiar ID"}
            aria-label="Copiar ID"
            placement="right"
            isOpen={hasCopied}
          >
            <IconButton
              bg="#818181 "
              aria-label="Copiar ID"
              icon={<CopyIcon />}
              onClick={onCopy}
              size="sm"
              position="absolute"
              right="5px"
              top="50%"
              transform="translateY(-50%)"
            />
          </Tooltip>
        </Box>
      </Flex>

      <Center m={4}>
        <NavButton text="Realizar otra compra" href="/" />
      </Center>
    </Box>
  );
};
