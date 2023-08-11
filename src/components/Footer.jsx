import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://avatars.githubusercontent.com/u/84964035";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.800"}
      color={"whiteAlpha.800"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"} fontSize={"lg"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Welcome to the Crypto Tracker and Guide App! We're passionate about providing you with the
            tools and information you need to navigate the exciting world of cryptocurrency trading.
            Whether you're a seasoned trader or just starting out, our app is designed to empower you
            on your crypto journey.
          </Text>
          <Text fontWeight={"bold"} fontSize={"lg"}>Our Mission</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Our mission is to make cryptocurrency trading accessible to everyone. We understand that the
            world of cryptocurrencies can be overwhelming, with thousands of coins and numerous trading 
            platforms available. Our app aims to simplify this process by offering real-time data, 
            comprehensive charts, and a curated list of trading platforms. We want to be your go-to 
            resource for all things crypto-related.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text fontSize={"lg"}>Creator</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
