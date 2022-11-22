import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  VStack,
  HStack,
  Spacer,
  SimpleGrid,
  Link,
  Box,
  Text,
} from "@chakra-ui/react";

import React from "react";

export default function FakeCalendar() {
  return (
    <VStack width={"100%"}>
      <Box backgroundColor={"orange.400"} width={"50%"} minWidth={"70%"}>
        <Text textColor={"black"}>Planned Outages/Maintenance (EST-PST)</Text>
      </Box>
      <HStack justify={"center"}>
        <Link>
          <ArrowLeftIcon color={"black"} left={10} />
        </Link>
        <Spacer />
        <Link fontSize={"3xl"} textColor={"black"}>
          November 2022
        </Link>
        <Spacer />
        <Link>
          <ArrowRightIcon color={"black"} right={10} />
        </Link>
      </HStack>
      <SimpleGrid
        columns={7}
        spacing={0.5}
        width={"50%"}
        minWidth={"70%"}
        backgroundColor={"gray.700"}
        borderColor={"gray.700"}
        padding={0.5}
      >
        <Box backgroundColor={"gray.600"} minHeight="-moz-fit-content">
          <Text textColor={"white"}>Sunday</Text>
        </Box>
        <Box backgroundColor={"gray.600"} minHeight="-moz-fit-content">
          <Text textColor={"white"}>Monday</Text>
        </Box>
        <Box backgroundColor={"gray.600"} minHeight="-moz-fit-content">
          <Text textColor={"white"}>Tuesday</Text>
        </Box>
        <Box backgroundColor={"gray.600"} minHeight="-moz-fit-content">
          <Text textColor={"white"}>Wednesday</Text>
        </Box>
        <Box backgroundColor={"gray.600"} minHeight="-moz-fit-content">
          <Text textColor={"white"}>Thursday</Text>
        </Box>
        <Box backgroundColor={"gray.600"} minHeight="-moz-fit-content">
          <Text textColor={"white"}>Friday</Text>
        </Box>
        <Box backgroundColor={"gray.600"} minHeight="-moz-fit-content">
          <Text textColor={"white"}>Saturday</Text>
        </Box>
        <Box bg="gray.400" textColor={"gray"} padding={1} minHeight="50px">
          <Text textAlign={"right"}>30</Text>
        </Box>
        <Box bg="gray.400" textColor={"gray"} padding={1} minHeight="50px">
          <Text textAlign={"right"}>31</Text>
        </Box>
        <Box
          bg="gray.200"
          textColor={"black"}
          padding={1}
          minHeight="50px"
          _hover={{ bg: "gray.300" }}
        >
          <Text textAlign={"right"}>1</Text>
        </Box>
        <Box
          bg="gray.200"
          textColor={"black"}
          padding={1}
          minHeight="50px"
          _hover={{ bg: "gray.300" }}
        >
          <Text textAlign={"right"}>2</Text>
        </Box>
        <Box
          bg="gray.200"
          textColor={"black"}
          padding={1}
          minHeight="50px"
          _hover={{ bg: "gray.300" }}
        >
          <Text textAlign={"right"}>3</Text>
        </Box>
        <Box
          bg="gray.200"
          textColor={"black"}
          padding={1}
          minHeight="50px"
          _hover={{ bg: "gray.300" }}
        >
          <Text textAlign={"right"}>4</Text>
        </Box>
        <Box
          bg="gray.200"
          textColor={"black"}
          padding={1}
          minHeight="50px"
          _hover={{ bg: "gray.300" }}
        >
          <Text textAlign={"right"}>5</Text>
        </Box>
        <Box
          bg="gray.200"
          textColor={"black"}
          padding={1}
          minHeight="50px"
          _hover={{ bg: "gray.300" }}
        >
          <Text textAlign={"right"}>6</Text>
        </Box>
        <Box
          bg="gray.200"
          textColor={"black"}
          padding={1}
          minHeight="50px"
          _hover={{ bg: "gray.300" }}
        >
          <Text textAlign={"right"}>7</Text>
        </Box>
        <Box
          bg="gray.200"
          textColor={"black"}
          padding={1}
          minHeight="50px"
          _hover={{ bg: "gray.300" }}
        >
          <Text textAlign={"right"}>8</Text>
        </Box>
        <Box
          bg="gray.200"
          textColor={"black"}
          padding={1}
          minHeight="50px"
          _hover={{ bg: "gray.300" }}
        >
          <Text textAlign={"right"}>9</Text>
          <Link href={"#"} textColor={"blue"}>
            RAPIDS 1800-2000
          </Link>
        </Box>
        <Box
          bg="gray.200"
          textColor={"black"}
          padding={1}
          minHeight="50px"
          _hover={{ bg: "gray.300" }}
        >
          <Text textAlign={"right"}>10</Text>
        </Box>
        <Box
          bg="gray.200"
          textColor={"black"}
          padding={1}
          minHeight="50px"
          _hover={{ bg: "gray.300" }}
        >
          <Text textAlign={"right"}>11</Text>
        </Box>
        <Box
          bg="gray.200"
          textColor={"black"}
          padding={1}
          minHeight="50px"
          _hover={{ bg: "gray.300" }}
        >
          <Text textAlign={"right"}>12</Text>
        </Box>
        <Box
          bg="gray.200"
          textColor={"black"}
          padding={1}
          minHeight="50px"
          _hover={{ bg: "gray.300" }}
        >
          <Text textAlign={"right"}>13</Text>
        </Box>
        <Box
          bg="gray.200"
          textColor={"black"}
          padding={1}
          minHeight="50px"
          _hover={{ bg: "gray.300" }}
        >
          <Text textAlign={"right"}>14</Text>
        </Box>
        <Box
          bg="gray.200"
          textColor={"black"}
          padding={1}
          minHeight="50px"
          _hover={{ bg: "gray.300" }}
        >
          <Text textAlign={"right"}>15</Text>
        </Box>
        <Box
          bg="gray.200"
          textColor={"black"}
          padding={1}
          minHeight="50px"
          _hover={{ bg: "gray.300" }}
        >
          <Text textAlign={"right"}>16</Text>
        </Box>
        <Box
          bg="gray.200"
          textColor={"black"}
          padding={1}
          minHeight="50px"
          _hover={{ bg: "gray.300" }}
        >
          <Text textAlign={"right"}>17</Text>
        </Box>
        <Box
          bg="gray.200"
          textColor={"black"}
          padding={1}
          minHeight="50px"
          _hover={{ bg: "gray.300" }}
        >
          <Text textAlign={"right"}>18</Text>
        </Box>
        <Box
          bg="gray.200"
          textColor={"black"}
          padding={1}
          minHeight="50px"
          _hover={{ bg: "gray.300" }}
        >
          <Text textAlign={"right"}>19</Text>
        </Box>
        <Box
          bg="gray.200"
          textColor={"black"}
          padding={1}
          minHeight="50px"
          _hover={{ bg: "gray.300" }}
        >
          <Text textAlign={"right"}>20</Text>
        </Box>
        <Box
          bg="gray.200"
          textColor={"black"}
          padding={1}
          minHeight="50px"
          _hover={{ bg: "gray.300" }}
        >
          <Text textAlign={"right"}>21</Text>
          <Link href={"#"} textColor={"blue"}>
            CC WEB APP 1730-2300
          </Link>
        </Box>
        <Box
          bg="gray.200"
          textColor={"black"}
          padding={1}
          minHeight="50px"
          _hover={{ bg: "gray.300" }}
        >
          <Text textAlign={"right"}>22</Text>
        </Box>
        <Box
          bg="gray.200"
          textColor={"black"}
          padding={1}
          minHeight="50px"
          _hover={{ bg: "gray.300" }}
        >
          <Text textAlign={"right"}>23</Text>
        </Box>
        <Box
          bg="gray.200"
          textColor={"black"}
          padding={1}
          minHeight="50px"
          _hover={{ bg: "gray.300" }}
        >
          <Text textAlign={"right"}>24</Text>
        </Box>
        <Box
          bg="gray.200"
          textColor={"black"}
          padding={1}
          minHeight="50px"
          _hover={{ bg: "gray.300" }}
        >
          <Text textAlign={"right"}>25</Text>
        </Box>
        <Box
          bg="gray.200"
          textColor={"black"}
          padding={1}
          minHeight="50px"
          _hover={{ bg: "gray.300" }}
        >
          <Text textAlign={"right"}>26</Text>
        </Box>
        <Box
          bg="gray.200"
          textColor={"black"}
          padding={1}
          minHeight="50px"
          _hover={{ bg: "gray.300" }}
        >
          <Text textAlign={"right"}>27</Text>
        </Box>
        <Box
          bg="gray.200"
          textColor={"black"}
          padding={1}
          minHeight="50px"
          _hover={{ bg: "gray.300" }}
        >
          <Text textAlign={"right"}>28</Text>
        </Box>
        <Box
          bg="gray.200"
          textColor={"black"}
          padding={1}
          minHeight="50px"
          _hover={{ bg: "gray.300" }}
        >
          <Text textAlign={"right"}>29</Text>
        </Box>
        <Box
          bg="gray.200"
          textColor={"black"}
          padding={1}
          minHeight="50px"
          _hover={{ bg: "gray.300" }}
        >
          <Text textAlign={"right"}>30</Text>
        </Box>
        <Box bg="gray.400" textColor={"gray"} padding={1} minHeight="50px">
          <Text textAlign={"right"}>1</Text>
        </Box>
        <Box bg="gray.400" textColor={"gray"} padding={1} minHeight="50px">
          <Text textAlign={"right"}>2</Text>
        </Box>
        <Box bg="gray.400" textColor={"gray"} padding={1} minHeight="50px">
          <Text textAlign={"right"}>3</Text>
        </Box>
      </SimpleGrid>
    </VStack>
  );
}
