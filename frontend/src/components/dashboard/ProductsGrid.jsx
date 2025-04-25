import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import recycle from "../../assets/recycle.svg";
import bottle from "../../assets/bottle.svg";
const ProductsGrid = () => {
  return (
    <Flex
      w={"80%"}
      bg={"#FDFAF6"}
      flexDirection={"column"}
      p={"25px"}
      borderRadius={"15px"}
      gap={"20px"}
      border={"1px solid grey"}
      justifyContent={"center"}
    >
      <Flex alignItems={"center"} gap={"20px"} >
        <Box>
          <Image src={recycle} />
        </Box>
        <Flex flexDirection={"column"} gap={"10px"}>
          <Text>Total Points</Text>
          <Text fontWeight={700}>120</Text>
        </Flex>
      </Flex>
      <Box w={"90%"}>
        <div className="progress">
          <div
            className="progress-bar progress-bar-success progress-bar-striped"
            role="progressbar"
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "40%" }}
          >
            40% Complete (success)
          </div>
        </div>
      </Box>
      <Flex gap={"20px"}>
        <Box>
          <Box>
            <Image src={bottle} />
          </Box>
          <Box textAlign={"center"}>
            <Text>Bottle</Text>
            <Text fontWeight={700}>10</Text>
          </Box>
        </Box>
        <Box>
          <Box>
            <Image src={bottle} />
          </Box>
          <Box textAlign={"center"}>
            <Text>Bottle</Text>
            <Text fontWeight={700}>10</Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ProductsGrid;
