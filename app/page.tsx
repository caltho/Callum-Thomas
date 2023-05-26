"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Metadata } from "next";
import { Divider, Flex } from "@chakra-ui/react";
import CallToActionWithAnnotation from "@/components/hero";
import ArticleList from "@/components/portfolio";
import About from "@/components/about";
import TechStack from "@/components/techStack";
import ContactForm from "@/components/contactForm";

type TimePeriod = {
  headingText: string;
};

export default function Page() {
  const timePeriod: TimePeriod = {
    headingText: "This week.",
  };

  return (
    <Flex direction="column">
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
    </Flex>
  );
}
