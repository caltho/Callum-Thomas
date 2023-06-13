"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Metadata } from "next";
import { Divider, Flex, Center, VStack } from "@chakra-ui/react";
import CallToActionWithAnnotation from "@/components/hero";
import ArticleList from "@/components/portfolio";
import About from "@/components/about";
import TechStack from "@/components/techStack";
import ContactForm from "@/components/contactForm";

type TimePeriod = {
  headingText: string;
};

export default function Page() {
  return (
    <Flex maxWidth="1000px">
      <VStack>
        <section id="Title"></section>
        <CallToActionWithAnnotation />
        <section id="AboutMe"></section>
        <About />
        <section id="Portfolio"></section>
        <ArticleList />
        <section id="TechStack"></section>
        <TechStack />
        <section id="Contact"></section>
        <ContactForm />
      </VStack>
    </Flex>
  );
}
