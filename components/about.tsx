"use client";

import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";

export default function About() {
  return (
    <Box p={12} pt={6}>
      <Heading>About me</Heading>
      <Text
        as="p"
        marginTop="2"
        color={useColorModeValue("gray.700", "gray.200")}
        fontSize="lg"
      >
        Hi, I&apos;m Callum and you are visiting my portfolio!
        <br />
        <br />I am a Software Engineer who is passionate about the dynamic and
        fast-changing world of technology. With a strong background in
        engineering and finance, I bring a unique perspective to the field of
        coding, combining my analytical mindset, problem-solving skills, and
        attention to detail to create efficient and effective software
        solutions.
        <br />
        <br />
        When I&apos;m not coding you will find me practicing jiu jitsu, playing
        volleyball, or cycling around the city. If you would like to get in
        touch, let me know!
      </Text>
    </Box>
  );
}
