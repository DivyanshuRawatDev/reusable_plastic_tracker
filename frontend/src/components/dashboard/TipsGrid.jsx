import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const TipsGrid = () => {
  return (
    <Box w={"80%"} p={"25px"} bg={"#FDFAF6"} border={"1px solid grey"} borderRadius={"15px"}>
      <Text fontWeight={700} fontSize={"20px"}>Today's Eco Tip</Text>
      <Flex gap={"15px"}>
        <Image borderRadius={"10px"} w={"30%"} src="https://media.istockphoto.com/id/1061166684/photo/environment-earth-day-in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female.jpg?s=612x612&w=0&k=20&c=MSEmq6cgasUu3XlpdjCmQgp05WecZF8xCzwS32SOe-A=" />
        <Text>
          Awesome efrort so tar! How about carrying your metal straw to boost
          your impact more.
        </Text>
      </Flex>
    </Box>
  );
};

export default TipsGrid;
