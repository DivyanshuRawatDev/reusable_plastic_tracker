import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

const Login = () => {
  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50" px={4}>
      <Box
        bg="white"
        w={{ base: "100%", sm: "80%", md: "30%" }}
        p={10}
        borderRadius="lg"
        boxShadow="lg"
      >
        <Box marginBottom="20px" textAlign="center">
          <Text fontSize="2xl" color="green.600" fontWeight={600}>
            LOGIN
          </Text>
        </Box>

        <Box display="flex" flexDirection="column" gap="10px">
          <Input
            placeholder="email"
            variant="outline"
            focusBorderColor="green.400"
          />
          <Input
            placeholder="password"
            variant="outline"
            focusBorderColor="green.400"
          />
        </Box>

        <Box marginTop="20px">
          <Button
            w="100%"
            bg="#4da73d"
            color="white"
            _hover={{ bg: "#3d8c2f" }}
          >
            LOGIN
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
