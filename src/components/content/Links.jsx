import { Card, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import IconBox from "../data/IconBox";
import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import APP_IMAGES from "../../config/constants/images";
import { INFORMATION } from "../../config/constants/information";
import { COLORS } from "../../config/constants/colors";
import {
  LiaBehance,
  LiaBehanceSquare,
  LiaEnvelopeSquareSolid,
  LiaLinkedin,
} from "react-icons/lia";

const Links = () => {
  return (
    <Card
      m="auto"
      maxW={{ base: "calc(100% - 50px)", lg: "full" }}
      bg={COLORS.BABY_PINK}
      h="200px"
      rounded="24px"
      padding={"1.25rem"}
    >
      <Flex w="full" justify={"space-between"} mt="4px">
        <Heading color={COLORS.PINK_TEXT} fontSize="36px">
          LINKS
        </Heading>
      </Flex>
      <Box />
      <Flex
        w="full"
        mt={"28px"}
        columns={{ base: 4, lg: 3 }}
        alignSelf={"center"}
        gap={2}
        className={"links-stack"}
      >
        {[
          {
            title: "LinkedIn",
            link: INFORMATION.LINKS.LINKEDIN,
            image: APP_IMAGES.LINKEDIN,
            icon: LiaLinkedin,
          },
          {
            title: "Behance",
            link: INFORMATION.LINKS.BEHANCE,
            image: "/images/behance.jpeg",
            icon: LiaBehanceSquare,
          },
          {
            title: "Gmail",
            link: `mailto:${INFORMATION.EMAIL}`,
            image: APP_IMAGES.GMAIL,
            icon: LiaEnvelopeSquareSolid,
          },
        ].map((item, index) => (
          <IconBox
            title={item.title}
            image={item.image}
            link={item.link}
            icon={item.icon}
            key={index}
          />
        ))}
      </Flex>
    </Card>
  );
};

export default Links;
