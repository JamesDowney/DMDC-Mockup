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
import image from "../assets/220528-F-JV039-1001T.jpg";
import NavBar from "../components/NavBar";
import AskAQuestion from "../components/AskAQuestion";

export function PartnerLoggedOutPage() {
  return (
    <ChakraProvider theme={theme}>
      <VStack backgroundColor={"gray.200"}>
        <NavBar loginLink={"./partnerLogin.html"} />
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
              DMDC Partner Portal
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
                The DMDC Customer Contact Center Partner Portal is for DMDC
                partner organizations such as Tricare, Dental, and Service
                Project Offices who support service member, their family
                members, other eligible beneficiaries when there is a problem
                with their personal, personnel or benefits and entitlement data
                in the DEERS database.
              </Text>
              <Box width="50%" marginTop={10}>
                <Text fontSize={"3xl"} textDecoration="underline">
                  Why you should register for an account?
                </Text>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque voluptates accusamus autem error qui ut ad sequi,
                  tempore odio aliquam rem, cupiditate ducimus laborum
                  repudiandae laudantium pariatur sed fugiat unde?
                </Text>
                <Text>
                  {" "}
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
