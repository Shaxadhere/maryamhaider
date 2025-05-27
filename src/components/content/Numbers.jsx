import { Heading, SimpleGrid, chakra } from "@chakra-ui/react";
import { INFORMATION } from "../../config/constants/information";
import moment from "moment";
import { calculateDuration } from "../../utils/date.utils";
import TextSwitch from "../misc/TextSwitch";
import { COLORS } from "../../config/constants/colors";

const Numbers = () => {
  const { CARRIER_START_DATE } = INFORMATION;
  const totalYarsOfExp =
    new Date().getFullYear() - new Date(CARRIER_START_DATE).getFullYear();

  //total duration of exp like 5 years 3 months 26 days use moment.js to get this duration
  const totalDuration = calculateDuration(CARRIER_START_DATE);
  console.log(totalDuration, "totalDuration");
  return (
    <SimpleGrid
      columns={{ base: 1, lg: 3 }}
      m="auto"
      maxW={{ base: "calc(100% - 50px)", lg: "full" }}
      px={3}
      h="full"
      justify="space-between"
      align="center"
      spacing={5}
    >
      <TextSwitch initalValue={totalYarsOfExp} hoveredValue={totalDuration} />

      <Heading
        textAlign={{ base: "center", lg: "left" }}
        color={COLORS.PINK_TEXT}
        fontSize="24px"
      >
        <chakra.span fontSize="32px">{INFORMATION.FREELANCE}+</chakra.span>
        <br />
        YEARS <br /> FREELANCE
      </Heading>
      <Heading
        textAlign={{ base: "center", lg: "left" }}
        color={COLORS.PINK_TEXT}
        fontSize="24px"
      >
        <chakra.span fontSize="32px">60+</chakra.span>
        <br />
        CAMPAIGNS
        <br /> EXECUTED
      </Heading>
    </SimpleGrid>
  );
};

export default Numbers;
