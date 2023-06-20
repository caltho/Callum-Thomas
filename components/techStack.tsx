"use client";

import {
  Box,
  Center,
  SimpleGrid,
  Heading,
  Icon,
  Flex,
  VStack,
} from "@chakra-ui/react";
import {
  TbBrandCss3,
  TbBrandFirebase,
  TbBrandJavascript,
  TbBrandMysql,
  TbBrandNextjs,
  TbBrandPhp,
  TbBrandReact,
  TbHtml,
} from "react-icons/tb";
import MainHeader from "./header";
import React, { useState } from "react";
import { IconType } from "react-icons";

export default function TechStack() {
  return (
    <>
      <Box width="100%" p={12} pt={6}>
        <MainHeader title="Tech Stack" />
        <Center pt={6}>
          <SimpleGrid columns={4} spacing={6} width="100%">
            <CustomIcon iconName={TbBrandNextjs} title="next.js" />
            <CustomIcon iconName={TbBrandReact} title="React" />
            <CustomIcon iconName={TbBrandJavascript} title="Javascript" />
            <CustomIcon iconName={TbHtml} title="HTML" />
            <CustomIcon iconName={TbBrandCss3} title="CSS" />
            <CustomIcon iconName={TbBrandFirebase} title="Firebase" />
            <CustomIcon iconName={TbBrandMysql} title="MySQL" />
            <CustomIcon iconName={TbBrandPhp} title="PHP" />
          </SimpleGrid>
        </Center>
      </Box>
    </>
  );
}

type CustomIcon = {
  iconName: IconType;
  title: string;
};

const CustomIcon = ({ iconName, title }: CustomIcon) => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = () => {
    setIsSpinning(!isSpinning);
  };

  const iconStyle = {
    transition: "transform 0.7s",
    transform: isSpinning ? "rotate(360deg)" : "rotate(0)",
  };

  return (
    <Center flexDirection="column">
      <Icon
        as={iconName}
        boxSize={20}
        onClick={handleClick}
        style={iconStyle}
      />
      <Heading size="md">{title}</Heading>
    </Center>
  );
};
