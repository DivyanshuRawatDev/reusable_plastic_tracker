import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import badge1 from "../../assets/badge1.svg";

const BadgesGrid = () => {
  return (
    <Flex justifyContent={"center"} w={"50%"} >
      <Box   p={"25px"} bg={"#FDFAF6"} w={"80%"} borderRadius={"15px"} border={"1px solid black"}>
        <Text fontSize={"20px"} textAlign={"center"} mb={"10%"} fontWeight={600}>Badges</Text>
        <Flex justifyContent={"space-around"}>
          <Image src={badge1} />
          <Image src={badge1} />
          <Image src={badge1} />
        </Flex>
      </Box>
    </Flex>
  );
};

export default BadgesGrid;
