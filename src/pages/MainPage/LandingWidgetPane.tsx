import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  HStack,
  Link,
  ListItem,
  OrderedList,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import WidgetTile from "../../components/WidgetTile";

interface props {
  isMobile: boolean;
}

export default function LandingWidgetPane(props: props) {
  return (
    <>
      {!props.isMobile && (
        <HStack
          minHeight={420}
          spacing={"4%"}
          paddingLeft={"4%"}
          paddingRight={"4%"}
          width={"full"}
          justifyContent={"center"}
          background={"gray.200"}
        >
          <WidgetTile
            isMobile={props.isMobile}
            widgetTileTitle={"News and Updates"}
            widgetTileDescription={
              <Flex
                alignItems={"top"}
                width={"100%"}
                padding={5}
                flexDir={"row"}
              >
                <VStack alignItems={"left"} width={"100%"}>
                  <Text
                    textAlign={"left"}
                    fontWeight={"bold"}
                    textDecoration={"underline"}
                  >
                    Announcements
                  </Text>
                  <Link href={"#"} color="blue">
                    <Text textAlign={"left"}>Tricare Open Season</Text>
                  </Link>
                </VStack>
                <VStack alignItems={"right"} width={"100%"}>
                  <Text
                    textAlign={"right"}
                    fontWeight={"bold"}
                    textDecoration={"underline"}
                  >
                    Dates
                  </Text>
                  <Text textAlign={"right"}>11/14/2022 - 12/13/2022</Text>
                </VStack>
                <Spacer />
              </Flex>
            }
          />
          <WidgetTile
            isMobile={props.isMobile}
            widgetTileTitle={"Useful Websites"}
            widgetTileDescription={
              <Box width={"100%"}>
                <Accordion allowMultiple textAlign={"left"}>
                  <AccordionItem>
                    <AccordionButton
                      _expanded={{ bg: "blackAlpha.100" }}
                      fontSize={"xl"}
                    >
                      <Text>DEERS</Text>
                      <Spacer />
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                      <Link href="#" color="blue">
                        <Text>ID Card Office Online</Text>
                      </Link>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton
                      _expanded={{ bg: "blackAlpha.100" }}
                      fontSize={"xl"}
                    >
                      <Text>Education</Text>
                      <Spacer />
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                      <Link href="#" color="blue">
                        <Text>Army Ignited</Text>
                      </Link>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton
                      _expanded={{ bg: "blackAlpha.100" }}
                      fontSize={"xl"}
                    >
                      <Text>Financial</Text>
                      <Spacer />
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                      <Link href="#" color="blue">
                        <Text>Defense Finance Accounting Service (DFAS)</Text>
                      </Link>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton
                      _expanded={{ bg: "blackAlpha.100" }}
                      fontSize={"xl"}
                    >
                      <Text>Healthcare</Text>
                      <Spacer />
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                      <Link href="#" color="blue">
                        <Text>Tricare</Text>
                      </Link>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton
                      _expanded={{ bg: "blackAlpha.100" }}
                      fontSize={"xl"}
                    >
                      <Text>Veterans</Text>
                      <Spacer />
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                      <Link href="#" color="blue">
                        <Text>Veterans Affairs</Text>
                      </Link>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            }
          />
          <WidgetTile
            isMobile={props.isMobile}
            widgetTileTitle={"Top Knowledge Articles"}
            widgetTileDescription={
              <OrderedList paddingLeft={5} textAlign={"left"}>
                <Link href="#" color="blue">
                  <ListItem>Add a family member to DEERS</ListItem>
                </Link>
                <Link href="#" color="blue">
                  <ListItem>How to enroll in Tricare</ListItem>
                </Link>
                <Link href="#" color="blue">
                  <ListItem>Update my Retirement Status</ListItem>
                </Link>
                <Link href="#" color="blue">
                  <ListItem>
                    Transition Assistance Management Program (TAMP) Eligibility
                  </ListItem>
                </Link>
                <Link href="#" color="blue">
                  <ListItem>Register for a DS Logon Account</ListItem>
                </Link>
              </OrderedList>
            }
          />
        </HStack>
      )}
      {props.isMobile && (
        <VStack
          width={"100%"}
          paddingLeft={"5%"}
          paddingRight={"5%"}
          justifyContent={"center"}
          spacing={6}
          marginBottom={6}
        >
          <WidgetTile
            isMobile={props.isMobile}
            widgetTileTitle={"News and Updates"}
            widgetTileDescription={
              <Flex
                alignItems={"top"}
                width={"100%"}
                padding={5}
                flexDir={"row"}
              >
                <VStack alignItems={"left"} width={"100%"}>
                  <Text
                    textAlign={"left"}
                    fontWeight={"bold"}
                    textDecoration={"underline"}
                  >
                    Announcements
                  </Text>
                  <Link href={"#"} color="blue">
                    <Text textAlign={"left"}>Tricare Open Season</Text>
                  </Link>
                </VStack>
                <VStack alignItems={"right"} width={"100%"}>
                  <Text
                    textAlign={"right"}
                    fontWeight={"bold"}
                    textDecoration={"underline"}
                  >
                    Dates
                  </Text>
                  <Text textAlign={"right"}>11/14/2022 - 12/13/2022</Text>
                </VStack>
                <Spacer />
              </Flex>
            }
          />
          <WidgetTile
            isMobile={props.isMobile}
            widgetTileTitle={"Useful Websites"}
            widgetTileDescription={
              <Box width={"100%"}>
                <Accordion allowMultiple textAlign={"left"}>
                  <AccordionItem>
                    <AccordionButton
                      _expanded={{ bg: "blackAlpha.100" }}
                      fontSize={"xl"}
                    >
                      <Text>DEERS</Text>
                      <Spacer />
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                      <Link href="#" color="blue">
                        <Text>ID Card Office Online</Text>
                      </Link>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton
                      _expanded={{ bg: "blackAlpha.100" }}
                      fontSize={"xl"}
                    >
                      <Text>Education</Text>
                      <Spacer />
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                      <Link href="#" color="blue">
                        <Text>Army Ignited</Text>
                      </Link>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton
                      _expanded={{ bg: "blackAlpha.100" }}
                      fontSize={"xl"}
                    >
                      <Text>Financial</Text>
                      <Spacer />
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                      <Link href="#" color="blue">
                        <Text>Defense Finance Accounting Service (DFAS)</Text>
                      </Link>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton
                      _expanded={{ bg: "blackAlpha.100" }}
                      fontSize={"xl"}
                    >
                      <Text>Healthcare</Text>
                      <Spacer />
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                      <Link href="#" color="blue">
                        <Text>Tricare</Text>
                      </Link>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <AccordionButton
                      _expanded={{ bg: "blackAlpha.100" }}
                      fontSize={"xl"}
                    >
                      <Text>Veterans</Text>
                      <Spacer />
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                      <Link href="#" color="blue">
                        <Text>Veterans Affairs</Text>
                      </Link>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            }
          />
          <WidgetTile
            isMobile={props.isMobile}
            widgetTileTitle={"Top Knowledge Articles"}
            widgetTileDescription={
              <OrderedList paddingLeft={5} textAlign={"left"}>
                <Link href="#" color="blue">
                  <ListItem>Add a family member to DEERS</ListItem>
                </Link>
                <Link href="#" color="blue">
                  <ListItem>How to enroll in Tricare</ListItem>
                </Link>
                <Link href="#" color="blue">
                  <ListItem>Update my Retirement Status</ListItem>
                </Link>
                <Link href="#" color="blue">
                  <ListItem>
                    Transition Assistance Management Program (TAMP) Eligibility
                  </ListItem>
                </Link>
                <Link href="#" color="blue">
                  <ListItem>Register for a DS Logon Account</ListItem>
                </Link>
              </OrderedList>
            }
          />
        </VStack>
      )}
    </>
  );
}
