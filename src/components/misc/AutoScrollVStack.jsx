import React, { useEffect, useRef, useState } from "react";
import { VStack, Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { COLORS } from "../../config/constants/colors";

const AutoScrollVStack = ({ data }) => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (
          scrollContainer.scrollTop + scrollContainer.clientHeight >=
          scrollContainer.scrollHeight
        ) {
          // Smooth scroll to the top
          // scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          scrollContainer.scrollTop += 1; // Scroll down slowly
        }
      }, 50); // Adjust speed by changing the interval time
    };

    const stopScrolling = () => {
      clearInterval(scrollInterval);
    };

    if (!isHovered) {
      startScrolling();
    } else {
      stopScrolling();
    }

    return () => {
      clearInterval(scrollInterval);
    };
  }, [isHovered]);

  return (
    <VStack
      className="scrollbar-hidden"
      align="stretch"
      maxH={{ base: "auto", lg: "600px" }}
      overflowY="auto"
      gap={3}
      ref={scrollRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {data.map((item, index) => (
        <Box
          key={index}
          rounded="12px"
          color={COLORS.PINK_TEXT}
          py="16px"
          px="12px"
          cursor="pointer"
          as="a"
          target="_blank"
          href={item.link}
          role="group"
          pos={"relative"}
          bg={COLORS.BABY_PINK}
          _hover={{
            shadow: "md",
            bg: COLORS.DARK_PINK,
            transition: "all 0.3s ease-in-out",
          }}
        >
          <Flex flexDir={"column"}>
            <Heading fontSize="16px">{item.designation}</Heading>
            <Text>{item.company}</Text>
          </Flex>
          <Text color={COLORS.PINK_TEXT}>{item.timeline}</Text>
          {item.logo && (
            <Image
              pos={"absolute"}
              right={0}
              bottom={0}
              opacity={0.2}
              filter={"invert(1) grayscale(1)"}
              src={item.logo}
              h="auto"
              alt={item.company}
              transition={"all 0.3s ease"}
              {...item.logoStyles}
            />
          )}
        </Box>
      ))}
    </VStack>
  );
};

export default AutoScrollVStack;
