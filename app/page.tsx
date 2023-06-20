"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Metadata } from "next";
import {
  Divider,
  Flex,
  Center,
  VStack,
  Container,
  Box,
} from "@chakra-ui/react";
import Hero from "@/components/hero";
import ArticleList from "@/components/portfolio";
import About from "@/components/about";
import TechStack from "@/components/techStack";
import ContactForm from "@/components/contactForm";
import BrickSlider from "@/components/brickSlider";
import Typewriter from "@/components/typewriter";
import { useEffect, useState } from "react";
import { Element, scroller } from "react-scroll";

type TimePeriod = {
  headingText: string;
};

export default function Page() {
  const [scrollEnabled, setScrollEnabled] = useState(false);

  const scrollToAbout = () => {
    scrollEnabled
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
    setScrollEnabled(true);

    scroller.scrollTo("AboutMe", {
      smooth: true,
      offset: -50, // Adjust the offset as needed to align with your layout
    });

    console.log("ok");
  };

  return (
    <Box
      display="block"
      overflowY={scrollEnabled ? "hidden" : "hidden"}
      overflowX="hidden"
      height={scrollEnabled ? "100%" : "100vh"}
      flexDirection="column"
    >
      <Element name="Title"></Element>
      <Hero scrollFunction={scrollToAbout} />
      <Element name="AboutMe"></Element>
      <About />
      <Element name="Portfolio"></Element>
      <BrickSlider />
      <ArticleList />
      <Element name="TechStack"></Element>
      <TechStack />
      <Element name="Contact"></Element>
      <ContactForm />
    </Box>
  );
}
