import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.800"} justifyContent="space-evenly">
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/exchanges">Platforms</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/coins">Currencies</Link>
      </Button>
    </HStack>
  );
};

export default Header;
