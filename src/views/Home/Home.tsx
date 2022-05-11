import { Flex } from "components/Box";
import FlexLayout from "components/layout/Flex";
import React from "react";

const Home: React.FC = () => {
  return (
    <Flex flexDirection="column" mr={["8px", 0]}>
      <FlexLayout>Home page</FlexLayout>
    </Flex>
  );
};

export default Home;
