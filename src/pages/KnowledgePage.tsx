import { Box, ChakraProvider, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";
import NavBarMainPage from "../components/NavBarMainPage";
import theme from "../themes/theme";

export const KnowledgePage = () => (
  <ChakraProvider theme={theme}>
    <VStack backgroundColor={"gray.200"}>
      <NavBarMainPage />
      <Box
        textAlign="center"
        backgroundSize={"100%"}
        backgroundAttachment={"fixed"}
        backgroundPosition={"top"}
        backgroundRepeat={"no-repeat"}
        backgroundColor={"gray.200"}
        minWidth={"100%"}
        minHeight={"90vh"}
      >
        <Text
          top={"40%"}
          fontSize={"7xl"}
          position={"absolute"}
          textAlign={"center"}
          width={"100%"}
        >
          Currently under construction.
        </Text>
      </Box>
      <Footer />
    </VStack>
  </ChakraProvider>
);
