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
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import FakeCalendar from "../components/FakeCalendar";
import Footer from "../components/Footer";
import LoggedInNavBar from "../components/LoggedInNavBar";
import theme from "../themes/theme";
import image from "../assets/200704-N-IQ655-1063M.jpg";

export function BeneficiariesPage() {
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
            <Flex
              minHeight={300}
              width={"100%"}
              backgroundColor={"gray.200"}
              padding={"5"}
            >
              <HStack alignItems={"top"}>
                <VStack spacing={5}>
                  <FakeCalendar />
                  <Box
                    minHeight={300}
                    minWidth={"70%"}
                    border={"1px"}
                    borderRadius={"md"}
                    padding={5}
                  >
                    <VStack width={"100%"}>
                      <Text fontSize={"3xl"} textDecoration={"underline"}>
                        Current Ticket Status
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
                </VStack>
                <VStack spacing={5} width={"50%"}>
                  <HStack width={"full"} zIndex={100}>
                    <Spacer />
                    <Button colorScheme={"blue"}>Report an Outage</Button>
                    <Button colorScheme={"blue"}>Create a Ticket</Button>
                  </HStack>
                  <Box
                    minHeight={300}
                    minWidth={"100%"}
                    border={"1px"}
                    borderRadius={"md"}
                    padding={5}
                  >
                    <Text fontSize={"3xl"} textDecoration={"underline"}>
                      Current Ticket Status
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
                  <Box
                    minWidth={"100%"}
                    border={"1px"}
                    borderRadius={"md"}
                    padding={5}
                    zIndex={100}
                  >
                    <Text fontSize={"3xl"} textDecoration={"underline"}>
                      Support Information
                    </Text>
                    <Accordion allowMultiple textAlign={"left"}>
                      <AccordionItem>
                        <AccordionButton
                          _expanded={{ bg: "blackAlpha.100" }}
                          fontSize={"xl"}
                        >
                          <Text>ATIMS/NEATS Frequently Asked Questions</Text>
                          <Spacer />
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                          <UnorderedList>
                            <Link href="#" color="blue">
                              <ListItem>
                                <Text>?????????????????????????????</Text>
                              </ListItem>
                            </Link>
                          </UnorderedList>
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <AccordionButton
                          _expanded={{ bg: "blackAlpha.100" }}
                          fontSize={"xl"}
                        >
                          <Text>DBIDS Frequently Asked Questions</Text>
                          <Spacer />
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                          <UnorderedList>
                            <Link href="#" color="blue">
                              <ListItem>
                                <Text>
                                  My enrollment workstation / access control
                                  workstation is locked, how can I unlock it?
                                </Text>
                              </ListItem>
                            </Link>
                            <Link href="#" color="blue">
                              <ListItem>
                                <Text>
                                  Why does my Crossmatch handheld scanner not
                                  connect to the server?
                                </Text>
                              </ListItem>
                            </Link>
                          </UnorderedList>
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <AccordionButton
                          _expanded={{ bg: "blackAlpha.100" }}
                          fontSize={"xl"}
                        >
                          <Text>Hardware Replacement Information</Text>
                          <Spacer />
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                          <UnorderedList>
                            <Link href="#" color="blue">
                              <ListItem>
                                <Text>
                                  Defense Finance Accounting Service (DFAS)
                                </Text>
                              </ListItem>
                            </Link>
                          </UnorderedList>
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <AccordionButton
                          _expanded={{ bg: "blackAlpha.100" }}
                          fontSize={"xl"}
                        >
                          <Text>RAPIDS Frequently Asked Questions</Text>
                          <Spacer />
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                          <UnorderedList>
                            <Link href="#" color="blue">
                              <ListItem>
                                <Text>Tricare</Text>
                              </ListItem>
                            </Link>
                          </UnorderedList>
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <AccordionButton
                          _expanded={{ bg: "blackAlpha.100" }}
                          fontSize={"xl"}
                        >
                          <Text>TASS Frequently Asked Questions</Text>
                          <Spacer />
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                          <UnorderedList>
                            <Link href="#" color="blue">
                              <ListItem>
                                <Text>Why is my TASS account suspended?</Text>
                              </ListItem>
                            </Link>
                            <Link href="#" color="blue">
                              <ListItem>
                                <Text>
                                  I have an applicant that has incorrect
                                  personal information DEERS, what can I do?
                                </Text>
                              </ListItem>
                            </Link>
                          </UnorderedList>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  </Box>
                </VStack>
                <Spacer />
              </HStack>
            </Flex>
          </VStack>
        </Box>
        <Footer />
      </VStack>
    </ChakraProvider>
  );
}
