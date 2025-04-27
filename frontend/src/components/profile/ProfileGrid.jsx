import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { getTotalCarbonSaved, getTotalLogs, treeSaved } from "../../configs/common";

const ProfileGrid = () => {
    const {user} = useSelector(store=>store.user);
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
         {user?.username}
        </Text>
      </Flex>
      <Flex gap={"10%"}>
        <Box>
          <Text fontWeight={600}>Total Carbon saved</Text>
          <Text>{getTotalCarbonSaved(user)} KG</Text>
        </Box>
        <Box>
          <Text fontWeight={600}>Total Tree saved</Text>
          <Text>{treeSaved(user)}</Text>
        </Box>
        <Box>
          <Text fontWeight={600}>Total Logs</Text>
          <Text>{getTotalLogs(user?.data)}</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ProfileGrid;
