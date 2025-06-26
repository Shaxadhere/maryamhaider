import {
  Card,
  CardBody,
  Flex,
  Heading,
  Text,
  Button,
  chakra,
  Box,
  keyframes,
} from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import React from "react";
import { INFORMATION } from "../../config/constants/information";
import Thanks from "../misc/Thanks";
import { COLORS } from "../../config/constants/colors";

const shine = keyframes`
  0% { left: -100%; }
  100% { left: 100%; }
`;

const Brief = () => {
  return (
    <Card
      m="auto"
      maxW={{ base: "calc(100% - 50px)", lg: "full" }}
      bg={COLORS.BABY_PINK}
      h="full"
      rounded="24px"
    >
      <CardBody>
        <Flex flexDir="column" h="full" justify="space-around" color={COLORS.PINK_TEXT}>
          <Flex
            mb={{ base: 2, lg: 0 }}
            flexDir={{ base: "column", lg: "row" }}
            justify="space-between"
            gap={2}
          >
            <Heading>I'M MARYAM</Heading>
            <Flex gap={1}>
              <Thanks />
              <Button
                as="a"
                target="_blank"
                href={INFORMATION.LINKS.CONTACT_LINK}
                position="relative"
                overflow="hidden"
                px={6}
                py={3}
                color="white"
                fontSize="lg"
                fontWeight="bold"
                bg={COLORS.DARK_PINK}
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "xl",
                }}
                _active={{ color: "dark" }}
                transition="all 0.3s ease-in-out"
              >
                <Text zIndex={1} color={COLORS.PINK_TEXT}>Hire me</Text>
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bg="white"
                  opacity={0.25}
                  transform="skew(-12deg) scale(1.5)"
                  animation={`${shine} 3s infinite`}
                />
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bgGradient="linear(to-r, transparent, #c1daf3, transparent)"
                  opacity={0.5}
                  transform="skew(-12deg) scale(1.5)"
                  animation={`${shine} 3s infinite 0.3s`}
                />
              </Button>
            </Flex>
          </Flex>
          <Text>{INFORMATION.BRIEF}</Text>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Brief;
