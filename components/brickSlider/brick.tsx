"use client";

import {
  Flex,
  SimpleGrid,
  Box,
  Heading,
  Image,
  Text,
  Center,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

type Brick = {
  title: string;
  image: string;
  link: string;
  blurb: string;
  colour: string;
};

export default function Brick({ title, image, link, blurb, colour }: Brick) {
  return (
    <Flex p={6} flexDirection="column">
      <Heading
        color="gray.800"
        textAlign="center"
        p={3}
        fontSize={{ base: "md", sm: "xl", md: "3xl" }}
      >
        {title}
      </Heading>

      <Image
        p={3}
        alignSelf="center"
        style={{
          maxWidth: "60%",
          maxHeight: "200px",
          aspectRatio: "1",
        }}
        src={image}
      />
      <Text>{blurb}</Text>
      <Text>
        <a href={link} rel="noopener noreferrer" target="_blank">
          Github
        </a>
      </Text>
    </Flex>
  );
}
