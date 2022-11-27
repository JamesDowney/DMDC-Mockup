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
  SimpleGrid,
  HStack,
  Button,
  Flex,
  Link,
} from "@chakra-ui/react";
import React from "react";
import Footer from "../components/Footer";
import LoggedInNavBar from "../components/LoggedInNavBar";
import theme from "../themes/theme";
import image from "../assets/220528-F-JV039-1001T.jpg";

export function PartnerPortalPage() {
  return (
    <ChakraProvider theme={theme}>
      <VStack backgroundColor={"gray.200"}>
        <LoggedInNavBar />
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
            <VStack width={"100%"} backgroundColor={"gray.200"} padding={"5"}>
              <Flex width={"100%"}>
                <HStack
                  alignItems={"top"}
                  width="100%"
                  justifyContent={"center"}
                  spacing={"5%"}
                >
                  <Box
                    minHeight={300}
                    width={"45%"}
                    shadow={"dark-lg"}
                    padding={5}
                  >
                    <VStack width={"100%"}>
                      <Text fontSize={"3xl"} textDecoration={"underline"}>
                        Announcements/System Outages
                      </Text>
                      <HStack alignItems={"top"} width={"100%"}>
                        <VStack alignItems={"left"}>
                          <Text textAlign={"left"} textDecoration={"underline"}>
                            Date
                          </Text>
                          <Text textAlign={"left"}>11/02/2022</Text>
                        </VStack>
                        <Spacer />
                        <VStack alignItems={"right"}>
                          <Text
                            textAlign={"right"}
                            textDecoration={"underline"}
                          >
                            Announcement
                          </Text>
                          <Link href={"#"} color="blue">
                            <Text textAlign={"right"}>
                              DSLOGON: Issues with DS Logon Ticket Number:
                              #INC000444
                            </Text>
                          </Link>
                        </VStack>
                      </HStack>
                    </VStack>
                  </Box>
                  <Box width={"45%"}>
                    <Flex
                      minHeight={300}
                      width={"100%"}
                      shadow={"dark-lg"}
                      padding={5}
                      flexDir={"column"}
                    >
                      <Box width={"100%"}>
                        <Text fontSize={"3xl"} textDecoration={"underline"}>
                          My Cases
                        </Text>
                        <SimpleGrid columns={3} spacing={1}>
                          <Text fontSize={"2xl"} textDecoration={"underline"}>
                            Case Number
                          </Text>
                          <Text fontSize={"2xl"} textDecoration={"underline"}>
                            Created
                          </Text>
                          <Text fontSize={"2xl"} textDecoration={"underline"}>
                            Status
                          </Text>
                          <Link textColor={"blue"}>DSC001123</Link>
                          <Text>10/31/2022</Text>
                          <Text>Open</Text>
                        </SimpleGrid>
                      </Box>
                      <Spacer />
                      <HStack width={"full"}>
                        <Spacer />
                        <Button colorScheme={"blue"}>Create a Case</Button>
                        <Button colorScheme={"blue"}>View all my Cases</Button>
                      </HStack>
                    </Flex>
                  </Box>
                </HStack>
              </Flex>
            </VStack>
          </VStack>
        </Box>
        <Footer />
      </VStack>
    </ChakraProvider>
  );
}
