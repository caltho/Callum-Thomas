"use client";

import {
  Flex,
  SimpleGrid,
  Box,
  Heading,
  VStack,
  Text,
  Button,
  Center,
  GridItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Brick from "./brickSlider/brick";

type GridElement = {
  x: number;
  y: number;
  value: string;
  clicked: boolean;
  title: string;
  blurb: string;
  image: string;
  colour: string;
  link: string;
};

export default function BrickSlider() {
  const [grid, setGrid] = useState<GridElement[]>([
    {
      x: 0,
      y: 0,
      value: "empty",
      clicked: false,
      title: "",
      blurb: "",
      image: "",
      colour: "",
      link: "",
    },
    {
      x: 0,
      y: 1,
      value: "Box1",
      clicked: false,
      title: "Traffic Tools",
      blurb: "My traffic tools website",
      image: "Traffic Tools Logo.png",
      colour: "gray.700",
      link: "",
    },
    {
      x: 1,
      y: 0,
      value: "Box2",
      clicked: false,
      title: "CentreSafe",
      blurb: "My traffic tools website",
      image: "CTS Favicon - Original.svg",
      colour: "orange.100",
      link: "",
    },
    {
      x: 1,
      y: 1,
      value: "Box3",
      clicked: false,
      title: "Callum Thomas",
      blurb: "This is me",
      image: "CT.svg",
      colour: "green.100",
      link: "",
    },
    {
      x: 0,
      y: 2,
      value: "Box4",
      clicked: false,
      title: "Connect Five",
      blurb: "Two-player connect five game",
      image: "",
      colour: "red.700",
      link: "",
    },
    {
      x: 1,
      y: 2,
      value: "Box5",
      clicked: false,
      title: "Sliding Tiles",
      blurb: "You're looking at it!",
      image: "",
      colour: "yellow.800",
      link: "",
    },
  ]);

  const handleUpdateGrid = (value: string) => {
    const clickedBox: GridElement = grid.find(
      (item) => item.value === value
    ) as GridElement;
    const emptyBox: GridElement = grid.find(
      (box) => box.value === "empty"
    ) as GridElement;

    const updatedGrid: GridElement[] = grid.map((box: GridElement) => {
      if (box.value === "empty") {
        return { ...box, x: clickedBox?.x, y: clickedBox?.y };
      } else if (box.x === clickedBox?.x && box.y === clickedBox?.y) {
        return { ...box, x: emptyBox?.x, y: emptyBox?.y };
      } else {
        return box;
      }
    });
    setGrid(updatedGrid);
  };

  const sortGrid = (inputGrid: GridElement[]) => {
    return [...inputGrid].sort((a, b) => {
      if (a.x === b.x) {
        return a.y - b.y;
      }
      return a.x - b.x;
    });
  };

  const coordinates = (x: number, y: number) => {
    const text = `Coordinates: (${x}, ${y})`;
    return text;
  };
  return (
    <VStack position="relative">
      <Box
        style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
        height="100%"
        width="100%"
      >
        <Center h="100%" w="100%">
          <VStack>
            <Heading color="gray.300" fontSize="8rem">
              CHECK OUT MY
            </Heading>
            <Heading color="gray.300" fontSize="7rem">
              LATEST PROJECTS
            </Heading>
          </VStack>
        </Center>
      </Box>
      <SimpleGrid columns={3} spacing={0} style={{ zIndex: 0 }}>
        {sortGrid(grid).map((box, index) => (
          <SlidingBlock
            key={index}
            box={box}
            grid={grid}
            handleUpdateGrid={handleUpdateGrid}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

type SlidingBlock = {
  box: GridElement;
  grid: GridElement[];
  handleUpdateGrid: (value: string) => void;
};
const SlidingBlock = ({ box, grid, handleUpdateGrid }: SlidingBlock) => {
  const emptyBox = grid.find((item) => item.value === "empty");
  const isAdjacent =
    (box.x === emptyBox?.x && Math.abs(box.y - emptyBox?.y) === 1) ||
    (box.y === emptyBox?.y && Math.abs(box.x - emptyBox?.x) === 1);

  const slideDistance = "100%";

  const slideDirection =
    box.x === emptyBox?.x
      ? box.y > emptyBox?.y
        ? `(-${slideDistance},0,0)`
        : "(100%,0,0)"
      : box.y === emptyBox?.y
      ? box.x > emptyBox?.x
        ? "(0,-100%,0)"
        : "(0,100%,0)"
      : "";

  const slideAnimation = isAdjacent
    ? {
        transform: `translate3d${slideDirection}`,
        transition: "transform 0.8s ease-in-out",
      }
    : {};

  const [isSliding, setIsSliding] = useState(false);

  const handleBoxClick = () => {
    console.log("hello");
    setIsSliding(true);
    // After a delay, update the final position of the box
    setTimeout(() => {
      setIsSliding(false);
      handleUpdateGrid(box.value); // Call the original handleBoxClick to update the grid state
    }, 800);
  };

  return (
    <Box position="relative">
      <Box
        aspectRatio={1}
        onClick={isAdjacent ? handleBoxClick : undefined}
        border={box.value !== "empty" ? "8px" : ""}
        cursor="pointer"
        maxWidth="300px"
        padding="10px"
        margin="0.1em"
        borderRadius="2xl"
        background={box.colour}
        style={
          !isSliding
            ? {}
            : {
                ...slideAnimation,
              }
        }
      >
        {box.value !== "empty" ? (
          <Brick
            title={box.title}
            image={box.image}
            blurb={box.blurb}
            link={box.link}
            colour={box.colour}
          />
        ) : undefined}
      </Box>
      {/*<Box
                style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
                height="300px"
                width="300px"
              >
                <Center h="100%">
                  <Heading color="gray.300" as="i">
                    Portfolio
                  </Heading>
                </Center>
                </Box>*/}
    </Box>
  );
};
