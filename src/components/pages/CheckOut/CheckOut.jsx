import {
  Box,
  FormControl,
  Input,
  Stack,
  Button,
  Center,
  FormErrorMessage,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { HiMiniHome } from "react-icons/hi2";
import { FinalPage } from "../index.js";

export const CheckOut = ({ orderId, handleChange, handleSubmit, errors }) => {
  return (
    <div>
      {orderId ? (
        <FinalPage orderId={orderId} />
      ) : (
        <Box height="80vh" p={8}>
          <Box bg="gray.100" borderRadius="md" m="10px" p={8}>
            <FormControl as="form" onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <FormControl isInvalid={errors.nombre}>
                  <Input name="nombre" onChange={handleChange} variant="flushed" placeholder="Nombre" size="lg" />
                  <FormErrorMessage>{errors.nombre}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.apellido}>
                  <Input name="apellido" onChange={handleChange} variant="flushed" placeholder="Apellido" size="lg" />
                  <FormErrorMessage>{errors.apellido}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.tel}>
                  <InputGroup>
                    <InputLeftElement>
                      <PhoneIcon />
                    </InputLeftElement>
                    <Input name="tel" onChange={handleChange} variant="flushed" placeholder="Telefono" size="lg" />
                  </InputGroup>
                  <FormErrorMessage>{errors.tel}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.email}>
                  <InputGroup>
                    <InputLeftElement>
                      <EmailIcon />
                    </InputLeftElement>
                    <Input name="email" onChange={handleChange} variant="flushed" placeholder="Email" size="lg" />
                  </InputGroup>
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.direccion}>
                  <InputGroup>
                    <InputLeftElement>
                      <HiMiniHome />
                    </InputLeftElement>
                    <Input
                      name="direccion"
                      onChange={handleChange}
                      variant="flushed"
                      placeholder="Dirección"
                      size="lg"
                    />
                  </InputGroup>
                  <FormErrorMessage>{errors.direccion}</FormErrorMessage>
                </FormControl>
              </Stack>
              <Center>
                <Button
                  mt="10px"
                  type="submit"
                  variant="solid"
                  background="#3FBD41"
                  marginLeft="auto"
                  marginRight="auto"
                >
                  Comprar
                </Button>
              </Center>
            </FormControl>
          </Box>
        </Box>
      )}
    </div>
  );
};
