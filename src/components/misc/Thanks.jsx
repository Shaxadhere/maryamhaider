import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  IconButton,
  useDisclosure,
  VStack,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { INFORMATION } from "../../config/constants/information";
import { DownloadIcon } from "@chakra-ui/icons";
import IconBox from "../data/IconBox";
import APP_IMAGES from "../../config/constants/images";

let timeout;

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
