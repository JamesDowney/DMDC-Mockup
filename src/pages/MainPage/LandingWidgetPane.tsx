import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
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

export default function LandingWidgetPane() {
  return (
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
        widgetTileTitle={"Announcements"}
        widgetTileDescription={
          <HStack alignItems={"top"}>
            <VStack alignItems={"left"}>
              <Text
                textAlign={"left"}
                fontWeight={"bold"}
                textDecoration={"underline"}
              >
                Date
              </Text>
              <Text textAlign={"left"}>11/02/2022</Text>
            </VStack>
            <Spacer />
            <VStack alignItems={"right"}>
              <Text
                textAlign={"right"}
                fontWeight={"bold"}
                textDecoration={"underline"}
              >
                Announcement
              </Text>
              <Link href={"#"} color="blue">
                <Text textAlign={"right"}>
                  DSLOGON: Issues with DS Logon Ticket Number: #INC000444
                </Text>
              </Link>
            </VStack>
          </HStack>
        }
      />
      <WidgetTile
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
  );
}
