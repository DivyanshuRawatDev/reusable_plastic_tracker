import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const AIGrid = () => {
  return (
    <Flex justifyContent={"center"} w={"50%"}>
      <Flex
        borderRadius={"15px"}
        border={"1px solid black"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={""}
        bg={"#FDFAF6"}
        w={"80%"}
      >
        <Flex p={"15px"} fontWeight={600} alignItems={"center"} w={"90%"} gap={"3%"}>
          <Text>Will take your data and give Suggestion!!!</Text>
          <Button bg={"#3F7D58"} p={"15px"} color={"white"}>
            Ask AI For Suggestion
          </Button>
        </Flex>
        <Flex bg={"white"} borderRadius={"15px"}  p={"15px"} justifyContent={"center"} w={"90%"} textAlign={"center"}>
          <Text>
            Thinking my journey's come to an end Sending out a farewell to my
            friends, for inner peace
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AIGrid;
