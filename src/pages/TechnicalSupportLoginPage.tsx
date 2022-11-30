import {
  Box,
  Button,
  ChakraProvider,
  Text,
  HStack,
  Input,
  Link,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import theme from "../themes/theme";

export const TechnicalSupportLoginPage = () => (
  <ChakraProvider theme={theme}>
    <VStack backgroundColor={"gray.200"}>
      <NavBar loginLink="./technicalSupportLogin.html" />
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
        <VStack>
          <Spacer minH={300} />
          <Tabs
            variant={"line"}
            defaultIndex={0}
            width={"100%"}
            justifyContent={"center"}
          >
            <TabList justifyContent={"center"}>
              <Tab>DS Logon</Tab>
              <Tab>CAC</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Spacer minH={100} />
                <VStack width={"100%"} align={"center"} spacing={5}>
                  <Input
                    width={"20%"}
                    placeholder={"Username"}
                    _placeholder={{ color: "grey" }}
                    background={"white"}
                    borderColor={"black"}
                    textColor={"black"}
                  />
                  <Input
                    width={"20%"}
                    placeholder={"Password"}
                    _placeholder={{ color: "grey" }}
                    background={"white"}
                    borderColor={"black"}
                    textColor={"black"}
                  />
                  <Link href="./technicalSupport.html">
                    <Button
                      fontSize={"medium"}
                      borderRadius={"md"}
                      colorScheme={"blue"}
                      variant={"solid"}
                      color={"white"}
                    >
                      Login
                    </Button>
                  </Link>
                  <HStack spacing={10}>
                    <Link>Forgot Username?</Link>
                    <Link>Forgot Password?</Link>
                  </HStack>
                  <Link>Register for an Account</Link>
                </VStack>
              </TabPanel>
              <TabPanel>
                <Spacer minH={100} />
                <VStack width={"100%"} align={"center"} spacing={5}>
                  <Text>Use your Common Access Card to login.</Text>
                  <Link href="./technicalSupport.html">
                    <Button
                      fontSize={"medium"}
                      borderRadius={"md"}
                      colorScheme={"blue"}
                      variant={"solid"}
                      color={"white"}
                    >
                      Login
                    </Button>
                  </Link>
                </VStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </Box>
      <Footer />
    </VStack>
  </ChakraProvider>
);
