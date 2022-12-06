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
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";
import LandingMainPane from "./MainPage/LandingMainPane";
import LandingWidgetPane from "./MainPage/LandingWidgetPane";
import theme from "../themes/theme";
import backgroundImage from "../assets/191111-A-IW468-502.jpg";
import NavBarMainPage from "../components/NavBarMainPage";
import AskAQuestion from "../components/AskAQuestion";

export function MainPage() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <ChakraProvider theme={theme}>
      <VStack backgroundColor={"gray.200"}>
        <NavBarMainPage isMobile={isMobile} />
        {!isMobile && (
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
              <Spacer minH={160} />
              <AskAQuestion />
              <Box background={"gray.200"} minWidth={"100%"}>
                <LandingMainPane isMobile={isMobile} />
                <Spacer minHeight={5} />
                <LandingWidgetPane isMobile={isMobile} />
              </Box>
            </VStack>
          </Box>
        )}
        {isMobile && (
          <>
            <Spacer minH={100} />
            <VStack width={"100%"} align={"left"} padding={5}>
              <Text width={"fit-content"} fontSize={"5xl"} paddingLeft={5}>
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
            <Box background={"gray.200"} width={"100%"}>
              <LandingMainPane isMobile={isMobile} />
              <Spacer height={6} />
              <LandingWidgetPane isMobile={isMobile} />
            </Box>
          </>
        )}
        <Footer />
      </VStack>
    </ChakraProvider>
  );
}
