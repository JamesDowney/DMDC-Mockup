import {
  Button,
  ChakraProvider,
  Text,
  Input,
  Spacer,
  VStack,
  Flex,
  HStack,
  Box,
  Link,
} from "@chakra-ui/react";
import React from "react";
import DropZone from "../components/DropZone";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import theme from "../themes/theme";

export const RegisterPage = () => (
  <ChakraProvider theme={theme}>
    <VStack backgroundColor={"gray.200"}>
      <NavBar loginLink={"./partnerLogin.html"} />
      <Spacer minH={150} />
      <Text fontSize={"5xl"} paddingBottom={20}>
        Register for an Account
      </Text>
      <Flex
        textAlign="center"
        backgroundSize={"100%"}
        backgroundAttachment={"fixed"}
        backgroundPosition={"top"}
        backgroundRepeat={"no-repeat"}
        backgroundColor={"gray.200"}
        width={"100%"}
        height={"80vh"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <VStack width={"60%"} align="center" justifySelf={"center"} spacing={4}>
          <HStack width={"100%"} justify={"center"}>
            <Box width={"30%"}>
              <Text textAlign={"left"} width="100%">
                First Name:
              </Text>
              <Input
                width={"100%"}
                background={"white"}
                borderColor={"black"}
                textColor={"black"}
              />
            </Box>
            <Spacer />
            <Box width={"30%"}>
              <Text textAlign={"left"} width="100%">
                Middle Name:
              </Text>
              <Input
                width={"100%"}
                background={"white"}
                borderColor={"black"}
                textColor={"black"}
              />
            </Box>
            <Spacer />
            <Box width={"30%"}>
              <Text textAlign={"left"} width="100%">
                Last Name:
              </Text>
              <Input
                width={"100%"}
                background={"white"}
                borderColor={"black"}
                textColor={"black"}
              />
            </Box>
          </HStack>
          <Box width={"100%"}>
            <Text textAlign={"left"} width="100%">
              DoD EDI Number:
            </Text>
            <Input
              width={"100%"}
              background={"white"}
              borderColor={"black"}
              textColor={"black"}
            />
          </Box>
          <HStack width={"100%"} justify={"center"}>
            <Box width={"47%"}>
              <Text textAlign={"left"} width="100%">
                .mil Email Address:
              </Text>
              <Input
                width={"100%"}
                background={"white"}
                borderColor={"black"}
                textColor={"black"}
              />
            </Box>
            <Spacer />
            <Box width={"47%"}>
              <Text textAlign={"left"} width="100%">
                Personal Email Address:
              </Text>
              <Input
                width={"100%"}
                background={"white"}
                borderColor={"black"}
                textColor={"black"}
              />
            </Box>
          </HStack>
          <Box width={"100%"}>
            <Text textAlign={"left"} width="100%">
              Phone Number:
            </Text>
            <Input
              width={"100%"}
              background={"white"}
              borderColor={"black"}
              textColor={"black"}
            />
          </Box>
          <DropZone />
          <Link href={"./knowledge.html"}>
            <Button colorScheme={"blue"}>Submit </Button>
          </Link>
        </VStack>
      </Flex>
      <Footer />
    </VStack>
  </ChakraProvider>
);
