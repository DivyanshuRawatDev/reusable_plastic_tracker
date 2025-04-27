import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import ProfileGrid from "../components/profile/ProfileGrid";
import AIGrid from "../components/profile/AIGrid";
import BadgesGrid from "../components/profile/BadgesGrid";

const Profile = () => {
  
  return (
    <Flex
      backgroundImage={`url("https://plus.unsplash.com/premium_photo-1675127366598-f6c344e5233b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JlZW5lcnl8ZW58MHx8MHx8fDA%3D")`}
      h="calc(100vh - 60px)"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      flexDirection={"column"}
      justifyContent={"space-around"}
      gap={"25px"}
    >
      <Flex justifyContent={"center"}>
        <ProfileGrid />
      </Flex>
      <Flex>
        <AIGrid />
        <BadgesGrid />
      </Flex>
    </Flex>
  );
};

export default Profile;
