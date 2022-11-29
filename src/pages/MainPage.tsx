import { SearchIcon } from "@chakra-ui/icons";
import {
  ChakraProvider,
  Box,
  VStack,
  Spacer,
  Text,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";
import LandingMainPane from "./MainPage/LandingMainPane";
import LandingWidgetPane from "./MainPage/LandingWidgetPane";
import NavBar from "../components/NavBar";
import theme from "../themes/theme";
import backgroundImage from "../assets/191111-A-IW468-502.jpg";

export const MainPage = () => (
  <ChakraProvider theme={theme}>
    <VStack backgroundColor={"gray.200"}>
      <NavBar />
      <Box
        textAlign="center"
        backgroundImage={backgroundImage}
        backgroundSize={"100%"}
        backgroundAttachment={"fixed"}
        backgroundPosition={"top"}
        backgroundRepeat={"no-repeat"}
        backgroundColor={"gray.200"}
        minWidth={"100%"}
        minHeight={"90vh"}
      >
        <VStack>
          <Spacer minH={160} />
          <Text
            width={"fit-content"}
            fontSize={"8xl"}
            paddingLeft={5}
            textShadow={
              "-2px 2px 0 #000, 2px 2px 0 #000, 2px -2px 0 #000, -2px -2px 0 #000;"
            }
            textColor={"white"}
          >
            DMDC Customer Connect
          </Text>
          <Spacer minH={200} />
          <VStack width={"60%"} align={"left"}>
            <Text
              width={"fit-content"}
              fontSize={"5xl"}
              paddingLeft={5}
              textShadow={
                "-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000;"
              }
              textColor={"white"}
            >
              Ask a Question
            </Text>
            <InputGroup>
              <InputRightElement children={<SearchIcon color="gray.300" />} />
              <Input
                placeholder={"Type your question here..."}
                _placeholder={{ color: "grey" }}
                background={"white"}
                borderColor={"black"}
                textColor={"black"}
              />
            </InputGroup>
          </VStack>
          <Box background={"gray.200"} minWidth={"100%"}>
            <LandingMainPane />
            <Spacer minHeight={5} />
            <LandingWidgetPane />
          </Box>
        </VStack>
      </Box>
      <Footer />
    </VStack>
  </ChakraProvider>
);
