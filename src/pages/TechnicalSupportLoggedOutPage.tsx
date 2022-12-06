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
import image from "../assets/200704-N-IQ655-1063M.jpg";
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
                The DMDC Customer Contact Center Beneficiary Support Portal is
                the access point for information and assistance on DoD
                entitlements, benefits, medical readiness, and DMDC website
                issues for uniformed service members, veterans, retirees, other
                eligible beneficiaries, and their families.
              </Text>
              <Box width="50%" marginTop={10}>
                <Text fontSize={"3xl"} textDecoration="underline">
                  Why you should register for an account?
                </Text>
                <Text>
                  This Portal is designed to help you with all of your benefits
                  and entitlements support questions as well as website
                  questions. You can save time be asking your question online.
                  You can check frequently asked questions to find answers for
                  common questions that we receive. You can also create a case,
                  check your case status, and upload documents to our Case
                  Management team. Select{" "}
                  <Link textColor={"blue"} textDecoration={"underline"}>
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
