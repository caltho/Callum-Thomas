"use client";

import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { IconButton, useBreakpointValue } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={3}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="teal" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const LanguageTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={3}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const ArticleList = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1">Portfolio</Heading>

      <TrafficToolsPortfolio />

      <Divider m={6} />
      <CentreSafePortfolio />
    </Container>
  );
};

function TrafficToolsPortfolio() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const headingText = "Traffic Tools";
  const typeTags = ["Community", "Open-source", "Engineering"];
  const techTags = ["Next.js", "Firebase", "TypeScript", "ChartJS"];
  const logo = "Traffic Tools Logo.png";

  return (
    <>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Center
            width={{ base: "100%", sm: "85%" }}
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Link
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
              onClick={onOpen}
            >
              <Image
                borderRadius="2xl"
                bgColor="#212529"
                aspectRatio="1"
                p={3}
                src={logo}
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Center>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <BlogTags tags={typeTags} />
          <LanguageTags tags={techTags} />
          <Heading marginTop="1">
            <Link
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
              onClick={onOpen}
            >
              {headingText}
            </Link>
          </Heading>
          <Text as="i" color="green.500">
            <Link
              href="https://www.traffictools.com.au"
              target="_blank"
              rel="noopener noreferrer"
            >
              traffictools.com.au
            </Link>
          </Text>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            Traffic Tools is an open-source and free webapp created for use by
            anyone within the town-planning industry. In developing the webapp I
            aimed to create a tool that would be useful for professionals and
            laypeople, while encouraging innovation and knowledge-sharing within
            the profession.
            <br />
            <br />I built Traffic Tools using next.js with typescript,
            google-firebase for user authentication, Chakra-UI for the component
            library, and the chart.js plugin for creating charts.
          </Text>
        </Box>
      </Box>

      <Modal onClose={onClose} isOpen={isOpen} isCentered size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Screenshots</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Carousel
              cards={[
                "TT-Trip Generation Calculator.png",
                "TT - Parking Rates.png",
                "TT - Ramp Design.png",
                "TT- Turn Treatment Calculator.png",
              ]}
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function CentreSafePortfolio() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const headingText = "CentreSafe";
  const typeTags = ["Engineering", "SAAS", "Safety"];
  const techTags = ["PHP", "MySQL", "AWS"];
  const logo = "CTS Logo - Negative.svg";

  return (
    <>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Center
            width={{ base: "100%", sm: "85%" }}
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Link
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
              onClick={onOpen}
            >
              <Image
                height="100%"
                width="100%"
                borderRadius="2xl"
                bgColor="#212529"
                aspectRatio="1"
                p={3}
                src={logo}
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Center>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <BlogTags tags={typeTags} />
          <LanguageTags tags={techTags} />
          <Heading marginTop="1">
            <Link
              textDecoration="none"
              _hover={{ textDecoration: "none" }}
              onClick={onOpen}
            >
              {headingText}
            </Link>
          </Heading>
          <Text as="i" color="green.500">
            <Link href="www.centresafe.com">centresafe.com</Link>
          </Text>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            CentreSafe is a risk management service created for use by large
            companies and NGOs. The CentreSafe portal allows users to quickly
            understand where the critical risks lie within their organisation,
            and to forecast upcoming risks. Risk management data within
            Centresafe is immutable which allows organisations to clearly see
            the risk treatment process from identification to mitigation and
            elimination. <br />
            <br />I built CentreSafe using the LAMP software stack, which
            includes PHP, MySQL and hosting via AWS.
          </Text>
        </Box>
      </Box>

      <Modal onClose={onClose} isOpen={isOpen} isCentered size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Screenshots</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Carousel
              cards={["CS - Centres.png", "CS - Orgs.png", "CS -Form.png"]}
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

type CarouselType = {
  cards: string[];
};
function Carousel({ cards }: CarouselType) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            p={3}
            m={3}
            key={index}
            height={"6xl"}
            position="relative"
            backgroundPosition="top"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            backgroundImage={url}
          />
        ))}
      </Slider>
    </Box>
  );
}

export default ArticleList;
