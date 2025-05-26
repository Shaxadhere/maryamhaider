import { Card, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import IconBox from "../data/IconBox";
import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import APP_IMAGES from "../../config/constants/images";
import { INFORMATION } from "../../config/constants/information";

const Links = () => {
  return (
    <Card
      m="auto"
      maxW={{ base: "calc(100% - 50px)", lg: "full" }}
      bg="#000"
      h="200px"
      rounded="24px"
    >
      <Flex w="full" justify={"space-between"}>
        <Heading color="#fff" fontSize="40px">
          LINKS
        </Heading>
      </Flex>
      <Box />
      <SimpleGrid mt={2} spacing={2} columns={{ base: 4, lg: 3 }}>
        {[
          {
            title: "LinkedIn",
            link: INFORMATION.LINKS.LINKEDIN,
            image: APP_IMAGES.LINKEDIN,
          },
          {
            title: "Behance",
            link: INFORMATION.LINKS.BEHANCE,
            image: "/images/behance.jpeg",
          },
          {
            title: "Gmail",
            link: `mailto:${INFORMATION.EMAIL}`,
            image: APP_IMAGES.GMAIL,
          },
        ].map((item, index) => (
          <IconBox
            title={item.title}
            image={item.image}
            link={item.link}
            key={index}
          />
        ))}
      </SimpleGrid>
    </Card>
  );
};

export default Links;
