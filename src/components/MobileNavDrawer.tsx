import { IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link, List, ListItem } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
} from "@chakra-ui/modal";
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
        <DrawerContent>
          <DrawerHeader>
            <DrawerCloseButton boxSize={12} size={"lg"} />
          </DrawerHeader>
          <DrawerBody padding={5}>
            <List fontSize={"6xl"} textAlign={"center"}>
              <Link>
                <ListItem _hover={{ backgroundColor: "blackAlpha.200" }}>
                  Home
                </ListItem>
              </Link>
              <Link>
                <ListItem _hover={{ backgroundColor: "blackAlpha.200" }}>
                  Knowledge
                </ListItem>
              </Link>
              <Link>
                <ListItem _hover={{ backgroundColor: "blackAlpha.200" }}>
                  Chat
                </ListItem>
              </Link>
              <Link>
                <ListItem _hover={{ backgroundColor: "blackAlpha.200" }}>
                  Beneficiary Portal
                </ListItem>
              </Link>
              <Link>
                <ListItem _hover={{ backgroundColor: "blackAlpha.200" }}>
                  Partner Portal
                </ListItem>
              </Link>
              <Link>
                <ListItem _hover={{ backgroundColor: "blackAlpha.200" }}>
                  Technical Support
                </ListItem>
              </Link>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
