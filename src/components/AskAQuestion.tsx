import { SearchIcon } from "@chakra-ui/icons";
import {
  VStack,
  InputGroup,
  InputRightElement,
  Input,
  Text,
  Link,
} from "@chakra-ui/react";
import React from "react";

export default function AskAQuestion() {
  return (
    <VStack width={"60%"} align={"left"}>
      <Text
        width={"100%"}
        fontSize={"5xl"}
        paddingLeft={5}
        textShadow={
          "-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000;"
        }
        textColor={"white"}
        textAlign={"left"}
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
      <Link
        width={"100%"}
        fontSize={"2xl"}
        paddingLeft={5}
        textShadow={
          "-1px 1px 0 #000, 1px 1px 0 #000, 1px -1px 0 #000, -1px -1px 0 #000;"
        }
        textColor={"white"}
        textAlign={"right"}
        href={"/knowledge.html"}
      >
        Search by Category
      </Link>
    </VStack>
  );
}
