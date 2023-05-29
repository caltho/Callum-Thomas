"use client";

import { Box, Center, SimpleGrid, Heading, Icon } from "@chakra-ui/react";
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

export default function TechStack() {
  const size: number = 20;
  return (
    <Box pt={12}>
      <Heading>Tech Stack</Heading>
      <Center pt={6}>
        <SimpleGrid columns={4} spacing={6}>
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
  );
}

// firebase, mysql, php, visual basic
