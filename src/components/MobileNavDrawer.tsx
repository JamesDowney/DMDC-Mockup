import { IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
} from "@chakra-ui/modal";
import { StackDivider, VStack } from "@chakra-ui/react";
import React from "react";

export default function MobileNavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <IconButton
        aria-label="Navigation Menu"
        backgroundColor={"transparent"}
        _hover={{ backgroundColor: "whiteAlpha.200" }}
        _active={{ backgroundColor: "whiteAlpha.400" }}
        ref={btnRef}
        icon={<HamburgerIcon boxSize={12} />}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"full"}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor={"gray.200"}>
          <DrawerHeader>
            <DrawerCloseButton boxSize={12} size={"lg"} />
          </DrawerHeader>
          <DrawerBody padding={5}>
            <VStack
              fontSize={"4xl"}
              textAlign={"center"}
              textColor={"blue"}
              divider={
                <StackDivider
                  borderColor={"gray.400"}
                  borderWidth={2}
                  width={"80%"}
                  alignSelf={"center"}
                />
              }
            >
              <Link>Home</Link>
              <Link>Knowledge</Link>
              <Link>Chat</Link>
              <Link>Beneficiary Portal</Link>
              <Link>Partner Portal</Link>
              <Link>Technical Support</Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
