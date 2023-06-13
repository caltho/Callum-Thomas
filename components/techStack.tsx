"use client";

import { Box, Center, SimpleGrid, Heading, Icon, Flex } from "@chakra-ui/react";
import {
  TbBrandCss3,
  TbBrandFirebase,
  TbBrandJavascript,
  TbBrandMysql,
  TbBrandNextjs,
  TbBrandPhp,
  TbBrandReact,
  TbHtml,
} from "react-icons/tb";
import MainHeader from "./header";

export default function TechStack() {
  const size: number = 20;
  return (
    <>
      <Box width="100%" p={12} pt={6}>
        <MainHeader title="Tech Stack" />
        <Center pt={6}>
          <SimpleGrid columns={4} spacing={6} width="100%">
            <Center flexDirection="column">
              <Icon boxSize={size} as={TbBrandNextjs} />
              <Heading size="md">next.js</Heading>
            </Center>
            <Center flexDirection="column">
              <Icon boxSize={size} as={TbBrandReact} />
              <Heading size="md">React</Heading>
            </Center>
            <Center flexDirection="column">
              <Icon boxSize={size} as={TbBrandJavascript} />
              <Heading size="md">Javascript</Heading>
            </Center>

            <Center flexDirection="column">
              <Icon boxSize={size} as={TbHtml} />
              <Heading size="md">HTML</Heading>
            </Center>

            <Center flexDirection="column">
              <Icon boxSize={size} as={TbBrandCss3} />
              <Heading size="md">CSS</Heading>
            </Center>
            <Center flexDirection="column">
              <Icon boxSize={size} as={TbBrandFirebase} />
              <Heading size="md">Firebase</Heading>
            </Center>
            <Center flexDirection="column">
              <Icon boxSize={size} as={TbBrandMysql} />
              <Heading size="md">MySQL</Heading>
            </Center>
            <Center flexDirection="column">
              <Icon boxSize={size} as={TbBrandPhp} />
              <Heading size="md">PHP</Heading>
            </Center>
          </SimpleGrid>
        </Center>
      </Box>
    </>
  );
}

// firebase, mysql, php, visual basic
