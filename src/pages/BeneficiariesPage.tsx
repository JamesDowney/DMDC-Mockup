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
import Footer from "../components/Footer";
import LoggedInNavBar from "../components/LoggedInNavBar";
import theme from "../themes/theme";
import image from "../assets/200704-N-IQ655-1063M.jpg";

export function BeneficiariesPage() {
  return (
    <ChakraProvider theme={theme}>
      <VStack backgroundColor={"gray.200"}>
        <LoggedInNavBar homeLink={"./beneficiaries.html"} />
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
              DMDC Beneficiary Support Portal
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
            <HStack
              width={"100%"}
              backgroundColor={"gray.200"}
              spacing={"5%"}
              padding={5}
              align={"top"}
              justify={"center"}
            >
              <Flex width={"45%"}>
                <VStack width="100%" spacing={10}>
                  <Box
                    minHeight={300}
                    width={"100%"}
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
                  <Box width={"100%"}>
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
                </VStack>
              </Flex>
              <Box width={"45%"} shadow="dark-lg" padding={5}>
                <Text fontSize={"3xl"} textDecoration={"underline"}>
                  Frequently Asked Questions
                </Text>
                <Accordion allowMultiple textAlign={"left"} width={"100%"}>
                  <AccordionItem>
                    <AccordionButton
                      _expanded={{ bg: "blackAlpha.100" }}
                      fontSize={"xl"}
                    >
                      <Text>Common Issues on Other Websites</Text>
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
                      <Text>Common DS Logon Issues</Text>
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
                      <Text>Health Care Eligibility</Text>
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
                      <Text>
                        How can I add / update a Family Member’s Information in
                        DEERS
                      </Text>
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
                      <Text>
                        How can I add / update Personal Information in DEERS
                      </Text>
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
                              I have an applicant that has incorrect personal
                              information DEERS, what can I do?
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
                      <Text>ID / CAC Common Questions</Text>
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
                              I have an applicant that has incorrect personal
                              information DEERS, what can I do?
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
                      <Text>
                        Important Links to DEERS Information / Tools ( CAC or DS
                        Logon Account Needed)
                      </Text>
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
                              I have an applicant that has incorrect personal
                              information DEERS, what can I do?
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
                      <Text>Military Service Personnel Record</Text>
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
                              I have an applicant that has incorrect personal
                              information DEERS, what can I do?
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
                      <Text>Other Websites We Support</Text>
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
                              I have an applicant that has incorrect personal
                              information DEERS, what can I do?
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
                      <Text>Transfer of Educational Benefits</Text>
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
                              I have an applicant that has incorrect personal
                              information DEERS, what can I do?
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
                      <Text>Trending Topics</Text>
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
                              I have an applicant that has incorrect personal
                              information DEERS, what can I do?
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
                      <Text>Understand Medicare and Tricare </Text>
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
                              I have an applicant that has incorrect personal
                              information DEERS, what can I do?
                            </Text>
                          </ListItem>
                        </Link>
                      </UnorderedList>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            </HStack>
          </VStack>
        </Box>
        <Footer />
      </VStack>
    </ChakraProvider>
  );
}
