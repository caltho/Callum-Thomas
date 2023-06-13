"use client";
import { Heading } from "@chakra-ui/react";

type MainHeader = {
  title: string;
};

export default function MainHeader({ title }: MainHeader) {
  return <Heading>{title}</Heading>;
}
