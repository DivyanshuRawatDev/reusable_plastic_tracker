import React from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Box, Flex, Text } from "@chakra-ui/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const LeaderboardChart = ({ data }) => {
  const chartData = {
    labels: data.map((user) => user.name),
    datasets: [
      {
        label: "LEADER BOARD",
        data: data.map((user) => user.points),
        backgroundColor: [
          "#FE3D00",
          "#FE8125",
          "#FFB714",
          "#DF51D0",
          "#A138DF",
        ],
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <Box
        w={"80%"}
        p={"25px"}
        bg={"#FDFAF6"}
        border={"1px solid gray"}
        borderRadius={"15px"}
      >
        <Bar
          style={{ backgroundColor: "white" }}
          data={chartData}
          options={options}
        />
        <Box bg={"white"} p={"20px"}>
          <Text textAlign={"center"} fontSize={"20px"} fontWeight={600}>
            Leader Board
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default LeaderboardChart;
