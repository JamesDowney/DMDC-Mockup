import { ChatIcon } from "@chakra-ui/icons";
import {
  Flex,
  HStack,
  Image,
  Link,
  Spacer,
  StackDivider,
} from "@chakra-ui/react";
import React from "react";
import image from "../assets/header_title_desktop.png";

export default function NavBarMainPage() {
  return (
    <Flex
      as={"header"}
      height={"100px"}
      align={"center"}
      backgroundImage={"linear-gradient(to bottom,#036ddb 0,#01509f 100%)"}
      flexDirection={"row"}
      position={"fixed"}
      width={"100%"}
      zIndex={200}
    >
      <Flex width={"100%"} fontSize={"x-large"}>
        <Link href={"./index.html"}>
          <Image
            src={image}
            height={"fit-content"}
            width={"fit-content"}
            padding={10}
          />
        </Link>
        <Spacer />
        <HStack
          maxHeight={100}
          divider={<StackDivider />}
          spacing={10}
          paddingEnd={10}
          marginY={10}
          textColor={"white"}
        >
          <Link href={"./index.html"}>Home</Link>
          <Link href={"./knowledge.html"}>Knowledge</Link>
          <Link href={"./knowledge.html"}>
            <ChatIcon />
          </Link>
        </HStack>
      </Flex>
    </Flex>
  );
}
