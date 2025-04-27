import { Box, Flex, Image, Text, useSelect } from "@chakra-ui/react";
import React from "react";
import badge1 from "../../assets/badge1.svg";
import badge2 from "../../assets/badge2.svg";
import badge3 from "../../assets/badge3.svg";
import { useSelector } from "react-redux";

const BadgesGrid = () => {
  const { user } = useSelector((store) => store.user);
  const badgePoints = [500, 1000, 1500];
  return (
    <Flex justifyContent={"center"} w={"50%"}>
      <Box
        p={"25px"}
        bg={"#FDFAF6"}
        w={"80%"}
        borderRadius={"15px"}
        border={"1px solid black"}
      >
        <Text
          fontSize={"20px"}
          textAlign={"center"}
          mb={"10%"}
          fontWeight={600}
        >
          Badges
        </Text>
        <Flex justify="space-around" align="center" wrap="wrap" gap={6} mt={6}>
          {[badge3, badge2, badge1].map((badge, index) => (
            <>
           <Flex flexDirection={"column"} alignItems={"center"} gap={"20px"}>

          
            <Box
              key={index}
              p={3}
              borderRadius="lg"
              border={
                user?.totalPoints >= badgePoints[index]
                  ? "2px solid green"
                  : "2px solid gray"
              }
              boxShadow={
                user?.totalPoints >= badgePoints[index] ? "lg" : "none"
              }
              transform={
                user?.totalPoints >= badgePoints[index]
                  ? "scale(1.1)"
                  : "scale(1)"
              }
              transition="all 0.3s ease"
            >
              <Image
                src={badge}
                alt={`Badge ${index + 1}`}
                opacity={user?.totalPoints >= badgePoints[index] ? 1 : 0.5}
                w="80px"
                h="80px"
                objectFit="cover"
              />
            </Box>
            <Text>{badgePoints[index]}</Text>
            </Flex>
            </>
          ))}
         
        </Flex>
      </Box>
    </Flex>
  );
};

export default BadgesGrid;
