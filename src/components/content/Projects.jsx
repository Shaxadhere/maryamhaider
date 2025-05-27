import { Box, Flex, Heading } from "@chakra-ui/react";
import { INFORMATION } from "../../config/constants/information";
import AutoScrollVStack from "../misc/AutoScrollVStack";
import { COLORS } from "../../config/constants/colors";

const Projects = () => {
  return (
    <Box m="auto" maxW={{ base: "calc(100% - 50px)", lg: "full" }}>
      <Flex mb={2} justify="space-between" align="center">
        <Heading color={COLORS.PINK_TEXT} fontSize="24px">
          Experience
        </Heading>
      </Flex>
      <AutoScrollVStack data={INFORMATION.EXPIRIENCE_LIST} />
    </Box>
  );
};

export default Projects;
