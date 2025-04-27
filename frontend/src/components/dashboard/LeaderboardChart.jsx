import React, { useEffect } from "react";
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
import { getTopFive } from "../../configs/common";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const LeaderboardChart = ({ data }) => {
  const {topFive} = useSelector(store=>store.user);
  const chartData = {
    labels: topFive.map((user) => user?.username),
    datasets: [
      {
        label: "LEADER BOARD",
        data: topFive.map((user) => user.totalPoints),
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

  useEffect(() => {
    getTopFive(data);
  }, []);

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
