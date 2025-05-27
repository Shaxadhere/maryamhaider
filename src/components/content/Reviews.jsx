import { Card, CardBody } from "@chakra-ui/react";
import AutoScrollHStack from "../misc/AutoScrollHStack";
import { COLORS } from "../../config/constants/colors";

const Reviews = () => {
  const array = [
    {
      name: "Meta Certified Creative Strategy Professional (2025)",
      description: "Meta",
      creds:"https://www.credly.com/badges/ad020dfb-6365-4757-b519-027454bc8b41/linked_in?t=svkydi",
      provider:"https://meta.com"
    },
  ];

  return (
    <Card
      m="auto"
      maxW={{ base: "calc(100% - 50px)", lg: "full" }}
      bg={COLORS.BABY_PINK}
      h={{ base: "fit-content", lg: "full" }}
      rounded="24px"
    >
      <CardBody overflowX="auto" className="scrollbar-hidden">
        <AutoScrollHStack data={array} />
      </CardBody>
    </Card>
  );
};

export default Reviews;
