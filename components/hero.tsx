"use client";
import Head from "next/head";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Divider,
  Flex,
  Grid,
  GridItem,
  Center,
  keyframes,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

type HeroType = {
  scrollFunction: () => void;
};

export default function Hero({ scrollFunction }: HeroType) {
  const name = ["Callum ", " Thomas"];
  const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
    40% {transform: translateY(-30px);}
    60% {transform: translateY(-15px);}`;

  return (
    <>
      <Center
        flexDirection="column"
        as={Box}
        textAlign={"center"}
        spacing={{ base: 4, md: 6 }}
        py={{ base: 16, md: 24 }}
        height="100vh"
        width="100vw"
      >
        <Divider m="0px" p="0px" />

        <Flex direction="column">
          {name.map((name, index) => (
            <Flex m="auto" key={index}>
              {Array.from(name).map((letter, index) => {
                const colours = [
                  "green.400",
                  "blue.400",
                  "red.400",
                  "yellow.400",
                  "purple.400",
                ];
                const [colourNumber, setColourNumber] = useState<number>(
                  letter === "o" ? 1 : 0
                );
                const handleClick = () => {
                  const newColourNumber =
                    colourNumber === colours.length - 1 ? 0 : colourNumber + 1;
                  setColourNumber(newColourNumber);
                  letter === "o" && scrollFunction();
                };
                return (
                  <Flex key={index}>
                    <Heading
                      fontSize={{ base: "6xl", sm: "8xl", md: "9xl" }}
                      lineHeight="90%"
                      color={colours[colourNumber]}
                      onClick={handleClick}
                      cursor="pointer"
                      style={{ userSelect: "none" }}
                      animation={
                        letter === "o"
                          ? `${bounceAnimation} 2s ease infinite`
                          : undefined
                      }
                    >
                      {letter}
                    </Heading>
                  </Flex>
                );
              })}
            </Flex>
          ))}
        </Flex>
        <Divider />

        <Text color={"gray.400"} pt={6}>
          Hi, I'm Callum and you're visiting my portfolio. Check out my{" "}
          <a
            href="https://github.com/caltho"
            rel="noopener noreferrer"
            target="_blank"
          >
            github
          </a>
          !
        </Text>
      </Center>
    </>
  );
}
