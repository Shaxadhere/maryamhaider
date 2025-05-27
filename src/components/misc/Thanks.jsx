import { Button } from "@chakra-ui/react";
import { INFORMATION } from "../../config/constants/information";
import { DownloadIcon } from "@chakra-ui/icons";

const Thanks = () => {
  return (
    <Button
      as="a"
      target="_blank"
      href={INFORMATION.RESUME}
      cursor={"pointer"}
      download={true}
      rightIcon={<DownloadIcon />}
    >
      Resume
    </Button>
  );
};

export default Thanks;
