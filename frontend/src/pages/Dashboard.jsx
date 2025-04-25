import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import ProductsGrid from "../components/dashboard/ProductsGrid";
import TipsGrid from "../components/dashboard/TipsGrid";
import LeaderboardChart from "../components/dashboard/LeaderboardChart";

const Dashboard = () => {
  const data = [
    { name: "Vinay", points: 120 },
    { name: "Aisha", points: 110 },
    { name: "Raj", points: 100 },
    { name: "Divyanshu", points: 900 },
    { name: "Aryan", points: 1500 },
  ];
  return (
    <Flex
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      backgroundImage={`url("https://plus.unsplash.com/premium_photo-1675127366598-f6c344e5233b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JlZW5lcnl8ZW58MHx8MHx8fDA%3D")`}
    >
      <Flex
        flexDirection={"column"}
        justifyContent={"space-around"}
        alignItems={"center"}
        w={"50%"}
        h="calc(100vh - 60px)"
      >
        <ProductsGrid />
        <TipsGrid />
      </Flex>
      <Flex
        w={"50%"}
        h="calc(100vh - 60px)"
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <LeaderboardChart data={data} />
      </Flex>
    </Flex>
  );
};

export default Dashboard;
