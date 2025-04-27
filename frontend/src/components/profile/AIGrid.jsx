import { Box, Button, Flex, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAITip } from "../../redux/slices/user.slice";

const AIGrid = () => {
  const dispatch = useDispatch();
  const { aiTip, isLoading } = useSelector((store) => store.user);

  const handleAIResponse = () => {
    dispatch(fetchAITip());
  };

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
        <Flex
          p={"15px"}
          fontWeight={600}
          alignItems={"center"}
          w={"90%"}
          gap={"3%"}
        >
          <Text>Will take your data and give Suggestion!!!</Text>
          <Button
            onClick={handleAIResponse}
            bg={"#3F7D58"}
            p={"15px"}
            color={"white"}
            disabled={isLoading}
            isLoading={isLoading}
          >
            {isLoading ? <Spinner /> : "Ask AI For Suggestion"}
          </Button>
        </Flex>
        <Flex
          bg={"white"}
          borderRadius={"15px"}
          p={"15px"}
          justifyContent={"center"}
          w={"90%"}
          textAlign={"center"}
        >
          <Text>{aiTip}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AIGrid;
