"use client";

import {
  Flex,
  SimpleGrid,
  Box,
  Heading,
  VStack,
  Image,
  Text,
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
    <VStack style={{ zIndex: 100 }} bgColor={colour}>
      <Heading fontSize={{ base: "md", sm: "xl", md: "xl" }}>{title}</Heading>
      <Text>{blurb}</Text>
      <a href={link} rel="noopener noreferrer" target="_blank">
        <img
          src={image}
          style={{
            maxWidth: "60%",
            maxHeight: "200px",
            aspectRatio: "1",
            transition: "transform 0.3s ease-in-out",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform =
              "scale(1.1) rotate(10deg) skew(2deg)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "none";
          }}
          alt="Image"
        />
      </a>
    </VStack>
  );
}
