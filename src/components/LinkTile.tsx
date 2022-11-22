import {
  LinkBox,
  Flex,
  LinkOverlay,
  Text,
  LinkBoxProps,
  useDisclosure,
  Spacer,
} from "@chakra-ui/react";
import React from "react";

interface LinkTileProps extends LinkBoxProps {
  linkTileBackgroundImage?: string;
  linkTileTitle: string;
  linkTileDescription?: string;
  linkTileHeight?: number;
  linkAddress: string;
}

function LinkTile(props: LinkTileProps) {
  const { isOpen = false, onOpen, onClose } = useDisclosure();

  return (
    <LinkBox
      backgroundImage={props.linkTileBackgroundImage}
      backgroundPosition={"center"}
      backgroundSize={600}
      minHeight={400}
      height={props.linkTileHeight}
      minWidth={"30%"}
      boxShadow={"dark-lg"}
      onMouseOver={onOpen}
      onMouseLeave={onClose}
    >
      <Flex
        minHeight={50}
        minWidth={"30%"}
        textColor={"white"}
        background={"blackAlpha.600"}
        shadow={"md"}
        justifyContent={"center"}
      >
        <Text fontSize={"x-large"} alignSelf={"center"} justifySelf={"center"}>
          <LinkOverlay href={props.linkAddress}>
            {props.linkTileTitle}
          </LinkOverlay>
        </Text>
      </Flex>
      <Spacer />
      <Flex
        minHeight={50}
        minWidth={"100%"}
        position={"absolute"}
        bottom={0}
        textColor={"white"}
        background={"blackAlpha.600"}
        shadow={"md"}
        justifyContent={"center"}
        hidden={!isOpen}
      >
        <Text fontSize={"large"} alignSelf={"center"} justifySelf={"center"}>
          <LinkOverlay href={props.linkAddress}>
            {props.linkTileDescription}
          </LinkOverlay>
        </Text>
      </Flex>
    </LinkBox>
  );
}

export default LinkTile;
