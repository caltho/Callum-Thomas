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
} from "@chakra-ui/react";

export default function CallToActionWithAnnotation() {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 4, md: 6 }}
          py={{ base: 16, md: 24 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Callum Thomas <br />
            <Text
              fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
              as={"span"}
              color={"green.400"}
            >
              Software Engineer
            </Text>
          </Heading>
          <Text color={"gray.500"}>Check out my projects below!</Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          ></Stack>
        </Stack>
      </Container>
    </>
  );
}
