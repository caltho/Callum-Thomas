"use client";

import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import MainHeader from "./header";
import Typewriter from "./typewriter";

type About = {
  enableTypewriter: boolean;
};

export default function About({ enableTypewriter }: About) {
  return (
    <Box height="100vh" m={6} p={12}>
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
        <Box
          p={12}
          pt={6}
          background="white"
          style={{ boxShadow: "1rem 1rem #48bb78" }}
        >
          <Flex
            background="green.400"
            position="relative"
            top="-3rem"
            left="-5"
          >
            <Heading color="white" m={2} p="auto">
              About
            </Heading>
          </Flex>
          <Spacer />
          <Text fontSize="lg" mt={-6}>
            I am a Software Engineer who is passionate about the dynamic and
            fast-changing world of technology. I am dedicated to continual
            learning and practising agile methodologies and seek to be involved
            in useful and impactful projects.
            <br />
            <br />
            With a strong background in engineering and finance, I bring a
            unique perspective to the field of coding, combining my analytical
            mindset, problem-solving skills, and attention to detail to create
            efficient and effective software solutions.
            <br />
            <br />
            When I&apos;m not coding you will find me practicing jiu jitsu,
            playing volleyball, or cycling around the city. If you would like to
            get in touch, let me know by filling out the Google form at the
            bottom of this page!
          </Text>
        </Box>

        <Center pt={12} pb={12} h="100%" color="orange.100">
          <Typewriter enableTypewriter={enableTypewriter} />
        </Center>
      </Grid>
    </Box>
  );
}
