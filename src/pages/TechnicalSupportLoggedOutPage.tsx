import {
  ChakraProvider,
  Box,
  VStack,
  Spacer,
  Text,
  Flex,
  Link,
} from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";
import theme from "../themes/theme";
import image from "../assets/220619-N-IS885-0016Y.jpg";
import NavBar from "../components/NavBar";
import AskAQuestion from "../components/AskAQuestion";

export function TechnicalSupportLoggedOutPage() {
  return (
    <ChakraProvider theme={theme}>
      <VStack backgroundColor={"gray.200"}>
        <NavBar loginLink={"./technicalSupportLogin.html"} />
        <Box
          textAlign="center"
          backgroundImage={image}
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
              DMDC Technical Support Portal
            </Text>
            <Spacer minH={160} />
            <AskAQuestion />
            <Flex
              width={"100%"}
              backgroundColor={"gray.200"}
              padding={5}
              flexDir={"column"}
              minHeight={"400px"}
              alignItems={"center"}
              textAlign={"left"}
            >
              <Text width={"80%"}>
                The DMDC Customer Contact Center Technical Support area provides
                24 / 7/ 365 worldwide Tier 1 Contact Center Support to the
                entire DMDC infrastructure of systems and applications.
              </Text>
              <Box width="50%" marginTop={10}>
                <Text fontSize={"3xl"} textDecoration="underline">
                  Why you should register for an account?
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  corrupti aspernatur veritatis sit est velit? Corporis,
                  molestias sint ipsa natus provident sed? Eos odio dolor beatae
                  sint ad similique deleniti.
                </Text>
                <Text>
                  Select{" "}
                  <Link
                    textColor={"blue"}
                    textDecoration={"underline"}
                    href={"./register.html"}
                  >
                    Register
                  </Link>{" "}
                  for additional information on how to register for an account.
                </Text>
              </Box>
            </Flex>
          </VStack>
        </Box>
        <Footer />
      </VStack>
    </ChakraProvider>
  );
}
