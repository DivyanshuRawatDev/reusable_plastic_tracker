import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const ProfileGrid = () => {
  return (
    <Flex
      p={"25px"}
      bg={"#FDFAF6"}
      flexDirection={"column"}
      gap={"40px"}
      w={"90%"}
      borderRadius={"15px"}
    >
      <Flex alignItems={"center"} gap={"25px"}>
        <Image
          w={"8%"}
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        />
        <Text fontSize={"20px"} m={0} fontWeight={600}>
          Divyanshu Rawat
        </Text>
      </Flex>
      <Flex gap={"10%"}>
        <Box>
          <Text>Total Carbon saved</Text>
          <Text>4.2KG</Text>
        </Box>
        <Box>
          <Text>Total Tree saved</Text>
          <Text>10</Text>
        </Box>
        <Box>
          <Text>Total Logs</Text>
          <Text>30</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ProfileGrid;
