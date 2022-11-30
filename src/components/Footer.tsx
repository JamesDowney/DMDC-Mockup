import {
  Box,
  Link,
  Image,
  Spacer,
  Flex,
  HStack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import image from "../assets/footer.png";

export default function Footer() {
  return (
    <Box
      bg={"gray.900"}
      color={"gray.200"}
      as={"footer"}
      width={"100%"}
      bottom={"0"}
      minH={"10vh"}
    >
      <Flex
        flexDir={"row"}
        width={"100%"}
        align={"center"}
        paddingTop={4}
        paddingBottom={4}
        paddingStart={10}
        paddingEnd={10}
      >
        <Flex dir="row" align={"center"}>
          <Image src={image} />
          <Text paddingLeft={4} fontSize={"2xl"} textAlign="center">
            Defense Manpower Data Center
          </Text>
        </Flex>
        <Spacer />
        <HStack
          spacing={4}
          divider={<StackDivider />}
          width="100%"
          justifyContent={"right"}
        >
          <Link
            target={"_blank"}
            href={"https://dodcio.defense.gov/DoDSection508/Std_Stmt.aspx"}
          >
            Accessibility/Section 508
          </Link>
          <Link target={"_blank"} href={"https://www.usa.gov/"}>
            USA.gov
          </Link>
          <Link
            target={"_blank"}
            href={"https://www.dhra.mil/website/headquarters/info/nofear.shtml"}
          >
            No Fear Act Notice
          </Link>
          <Link
            target={"_blank"}
            href={"https://dwp.dmdc.osd.mil/dwp/app/privacy-security"}
          >
            Privacy & Security Notice
          </Link>
          <Link
            target={"_blank"}
            href={"https://dwp.dmdc.osd.mil/dwp/app/security-statement"}
          >
            Security Statement
          </Link>
          <Link
            target={"_blank"}
            href={"https://dwp.dmdc.osd.mil/dwp/app/faqs"}
          >
            Contact DMDC
          </Link>
          <Link
            target={"_blank"}
            href={"https://dwp.dmdc.osd.mil/dwp/app/main"}
          >
            DMDC Home Page
          </Link>
          <Link target={"_blank"} href={"https://www.dhra.mil/"}>
            DHRA Home Page
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}
