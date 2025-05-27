import { Button } from "@chakra-ui/react";
import { INFORMATION } from "../../config/constants/information";
import { DownloadIcon } from "@chakra-ui/icons";
import { COLORS } from "../../config/constants/colors";

const Thanks = () => {
  return (
    <Button
      as="a"
      target="_blank"
      href={INFORMATION.RESUME}
      cursor={"pointer"}
      download={true}
      color={COLORS.PINK_TEXT}
      rightIcon={<DownloadIcon />}
    >
      Resume
    </Button>
  );
};

export default Thanks;
