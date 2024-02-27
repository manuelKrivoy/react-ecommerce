import { Box, FormControl, FormLabel, Input, Stack, Button, Center } from "@chakra-ui/react";

export const CheckOut = ({ handleInputChange, handleSubmit }) => {
  return (
    <Box height="80vh" p="100px">
      <Box bg="gray.100" p={8} borderRadius="md">
        <FormControl as="form" onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <FormLabel htmlFor="nombre">Nombre</FormLabel>
            <Input id="nombre" placeholder="Nombre" size="md" name="nombre" onChange={handleInputChange} />
            <FormLabel htmlFor="apellido">Apellido</FormLabel>
            <Input id="apellido" placeholder="Apellido" size="md" name="apellido" onChange={handleInputChange} />
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" placeholder="Email" size="md" type="email" name="email" onChange={handleInputChange} />
          </Stack>
          <Center>
            <Button mt="10px" type="submit" variant="solid" background="#3FBD41" marginLeft="auto" marginRight="auto">
              Enviar
            </Button>
          </Center>
        </FormControl>
      </Box>
    </Box>
  );
};
