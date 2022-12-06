import { DownloadIcon } from "@chakra-ui/icons";
import { Flex, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { useDropzone, FileWithPath } from "react-dropzone";

export default function DropZone(props: any) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file: FileWithPath) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <Flex
      className="container"
      flexDir={"column"}
      width="50%"
      border={"1px"}
      borderRadius={"md"}
      padding={5}
      marginBottom={5}
    >
      <Text fontSize={"2xl"}>Upload Files</Text>
      <Flex
        {...getRootProps({ className: "dropzone" })}
        border={"1px"}
        borderStyle={"dashed"}
        width={"100%"}
        height={"100px"}
        alignItems={"center"}
        justifyContent={"center"}
        cursor={"pointer"}
        flexDir={"column"}
      >
        <input {...getInputProps()} />
        <DownloadIcon boxSize={10} color={"blue"} />
        <Text>Drag files here, or click to select files</Text>
      </Flex>
      <Flex width={"100%"} justifyItems={"left"} flexDir={"column"}>
        <Text fontSize={"xl"}>Files</Text>
        <UnorderedList>{files}</UnorderedList>
      </Flex>
    </Flex>
  );
}
