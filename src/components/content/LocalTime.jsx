import React, { useEffect } from "react";
import { Card, CardBody, Flex, Box, Heading, Text } from "@chakra-ui/react";
import moment from "moment-timezone";
import APP_IMAGES from "../../config/constants/images";
import useForceUpdate from "../../config/hooks/useForceUpdate";
import { INFORMATION } from "../../config/constants/information";
import { COLORS } from "../../config/constants/colors";

const LocalTime = () => {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card
      m="auto"
      maxW={{ base: "calc(100% - 50px)", lg: "full" }}
      h="full"
      role="group" // This allows Chakra's _groupHover prop to apply to nested elements
      bg={COLORS.BABY_PINK}
      rounded="24px"
      overflow="hidden" // Prevents overflow when background image changes
    >
      <CardBody
        position="relative"
        rounded="24px"
        overflow="hidden" // Keep content from overflowing when the image fades
        bgSize="cover"
        bgPos="center"
        transition="all 0.5s ease-in-out"
        filter="brightness(1)" // Default darker background for contrast
        _groupHover={{
          bgImage: `url(${INFORMATION.CITY_PICTURE})`,
        }}
      >
        {/* Dark overlay for text contrast */}
        <Box
          position="absolute"
          top="0"
          left="0"
          h="100%"
          w="100%"
          bg={COLORS.DARK_PINK}
          transition="all 0.5s ease-in-out"
          _groupHover={{
            bg: "rgba(0, 0, 0, 0.4)", // Remove the overlay on hover
          }}
        />

        <Flex
          color="#fff"
          h="full"
          flexDir={"column"}
          justify={"space-between"}
          position="relative" // Ensure the text appears above the background and overlay
          zIndex="1"
        >
          <Heading fontSize="40px">
            {moment(new Date()).tz(INFORMATION.LOCAL_TIME_ZONE).format("HH:mm")}
          </Heading>
          <Box>
            <Heading fontSize="24px">LOCAL TIME</Heading>
            <Text>{INFORMATION.CITY},</Text>
            <Text>{INFORMATION.COUNTRY}</Text>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default LocalTime;
