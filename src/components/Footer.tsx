import {
  Box,
  Link,
  Image,
  Spacer,
  Flex,
  HStack,
  StackDivider,
} from "@chakra-ui/react";
import React from "react";
import image from "../assets/header_title_desktop.png";

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
        <Box>
          <Image src={image} />
        </Box>
        <Spacer />
        <HStack spacing={4} divider={<StackDivider />}>
          <Link href={"#"}>Accessibility/Section 508</Link>
          <Link href={"#"}>USA.gov</Link>
          <Link href={"#"}>No Fear Act Notice</Link>
          <Link href={"#"}>Privacy & Security Notice</Link>
          <Link href={"#"}>Security Statement</Link>
          <Link href={"#"}>Contact DMDC</Link>
          <Link href={"#"}>DMDC Home Page</Link>
          <Link href={"#"}>DHRA Home Page</Link>
        </HStack>
      </Flex>
    </Box>
  );
}
