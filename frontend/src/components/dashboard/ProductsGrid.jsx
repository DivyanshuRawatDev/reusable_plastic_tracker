import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import recycle from "../../assets/recycle.svg";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { fetchAddProducts, fetchTopFive } from "../../redux/slices/user.slice";

const MotionBox = motion(Box);

const ProductsGrid = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const { allProducts } = useSelector((store) => store.user);

  const handleAddProduct = (productData) => {
    console.log(productData + "asdas");
    dispatch(fetchAddProducts(productData));
    dispatch(fetchTopFive());
  };

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
      <Flex alignItems={"center"} gap={"20px"}>
        <Box>
          <Image src={recycle} />
        </Box>
        <Flex flexDirection={"column"} gap={"10px"}>
          <Text>Total Points</Text>
          <Text fontWeight={700}>{user?.totalPoints}</Text>
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
            style={{ width: `${((user?.totalPoints / 1500) * 100).toFixed(0)}%` }}
          >
            {user?.totalPoints > 1500
              ? "You are pro now"
              : `${((user?.totalPoints / 1500) * 100).toFixed(0)}% (${
                  user?.totalPoints
                }/1500)`}
          </div>
        </div>
      </Box>

      <Flex gap={"20px"} overflowX="auto" flexWrap="nowrap" py={2}>
        {allProducts?.map((data, idx) => (
          <MotionBox
            onClick={() => {
              handleAddProduct(data);
            }}
            key={idx}
            w="120px"
            h="180px"
            p={4}
            borderRadius="md"
            bg="white"
            boxShadow="md"
            whileHover={{ scale: 1.1, cursor: "pointer" }}
            whileTap={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
            textAlign="center"
            flexShrink={0}
          >
            <Image w={"80px"} h={"80px"} mx="auto" src={data?.icon} />
            <Text mt={3}>{data?.name}</Text>
            <Text fontWeight={700}>{data?.points}</Text>
          </MotionBox>
        ))}
      </Flex>
    </Flex>
  );
};

export default ProductsGrid;
