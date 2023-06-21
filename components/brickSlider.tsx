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
  Grid,
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
      colour: "yellow.400",
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
      colour: "blue.400",
      link: "",
    },
    {
      x: 1,
      y: 1,
      value: "Box3",
      clicked: false,
      title: "Portfolio",
      blurb: "My portfolio website - you're here right now!",
      image: "Portfolio.png",
      colour: "green.400",
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
      colour: "orange.400",
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
      colour: "red.400",
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
    <Flex height="100vh" width="100%" flexDirection="column">
      <Heading
        color="gray.300"
        fontSize="2rem"
        width="100%"
        textAlign="center"
        p={6}
      >
        CHECK OUT MY LATEST PROJECTS
      </Heading>

      <Grid templateColumns="repeat(3, 1fr)" gap={0} w="100%">
        {sortGrid(grid).map((box, index) => (
          <GridItem key={index}>
            <SlidingBlock
              box={box}
              grid={grid}
              handleUpdateGrid={handleUpdateGrid}
            />
          </GridItem>
        ))}
      </Grid>
    </Flex>
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
    <Box
      width="100%"
      aspectRatio={1}
      onClick={isAdjacent ? handleBoxClick : undefined}
      border={box.value !== "empty" ? "1px" : ""}
      cursor="pointer"
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
