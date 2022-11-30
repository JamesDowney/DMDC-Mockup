import { ChatIcon, HamburgerIcon, Icon } from "@chakra-ui/icons";
import {
  Flex,
  HStack,
  Image,
  Link,
  Spacer,
  StackDivider,
  useMediaQuery,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Drawer,
} from "@chakra-ui/react";
import React from "react";
import desktopImage from "../assets/header_title_desktop.png";
import mobileImage from "../assets/footer.png";
import MobileNavDrawer from "./MobileNavDrawer";

interface props {
  isMobile: boolean;
}

export default function NavBarMainPage(props: props) {
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
      {!props.isMobile && (
        <Flex width={"100%"} fontSize={"2xl"}>
          <Link href={"./index.html"}>
            <Image src={desktopImage} padding={10} />
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
      )}
      {props.isMobile && (
        <Flex
          width={"100%"}
          fontSize={"xl"}
          textColor={"white"}
          flexDir={"row"}
          align={"center"}
          padding={5}
        >
          <Image src={mobileImage} paddingRight={5} />
          <Text fontSize={"2xl"}>DMDC Customer Connect</Text>
          <Spacer />
          <MobileNavDrawer />
        </Flex>
      )}
    </Flex>
  );
}
