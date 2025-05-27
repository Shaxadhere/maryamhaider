import { Image, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { COLORS } from "../../config/constants/colors";

const IconBox = ({ title, link = "#", image, imageProps, icon, ...rest }) => {
  return (
    <Flex
      h={{ base: "45px", lg: "75px" }}
      w={{ base: "full", lg: "75px" }}
      rounded="8px"
      justify={"center"}
      align={"center"}
      bg={COLORS.DARK_PINK}
      maxW="full"
      as="a"
      target="_blank"
      href={link}
      role="group"
      overflow="hidden"
      flexDir="column"
      {...rest}
    >
      <Icon
        as={icon}
        maxW="full"
        maxH="55px"
        w="55px"
        h="full"
        src={image}
        color={COLORS.PINK_TEXT}
        {...imageProps}
      />
    </Flex>
  );
};

export default IconBox;
