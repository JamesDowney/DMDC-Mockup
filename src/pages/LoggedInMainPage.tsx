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
import LandingWidgetPane from "./MainPage/LandingWidgetPane";
import theme from "../themes/theme";
import LoggedInNavBar from "../components/LoggedInNavBar";
import LoggedLandingMainPane from "./MainPage/LoggedLandingMainPane";
import backgroundImage from "../assets/191111-A-IW468-502.jpg";

export const LoggedInMainPage = () => (
  <ChakraProvider theme={theme}>
    <VStack backgroundColor={"gray.200"}>
      <LoggedInNavBar />
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
          <Spacer minH={420} />
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
            <LoggedLandingMainPane />
            <Spacer minHeight={5} />
            <LandingWidgetPane />
          </Box>
        </VStack>
      </Box>
      <Footer />
    </VStack>
  </ChakraProvider>
);
