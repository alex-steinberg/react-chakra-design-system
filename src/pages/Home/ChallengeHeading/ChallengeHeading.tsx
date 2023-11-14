import React, { FC } from "react";
import {
  Box,
  Heading,
  IconButton,
  Text,
  useBreakpointValue,
  useToken,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";
import CenteredBox from "../../../common/CenteredBox";
import FaceSVG from "../../../assets/images/face.svg?react";

const ChallengeHeading: FC<{
  buttonAction: () => void;
  drawerIsOpen: boolean;
}> = ({ buttonAction, drawerIsOpen }) => {
  const [bodyColor, lightBodyColor] = useToken("colors", [
    "gray.500",
    "gray.300",
  ]) as any;

  const drawerButtonProps = {
    w: "12",
    h: "12",
    color: "brand.500",
  };

  const openDrawerIcon = useBreakpointValue({
    base: drawerIsOpen ? (
      <ChevronUpIcon {...drawerButtonProps} />
    ) : (
      <ChevronDownIcon {...drawerButtonProps} />
    ),
    md: drawerIsOpen ? (
      <ChevronLeftIcon {...drawerButtonProps} />
    ) : (
      <ChevronRightIcon {...drawerButtonProps} />
    ),
  });

  return (
    <CenteredBox
      display="flex"
      flexFlow="column nowrap"
      alignItems="center"
      px={{ base: "4", md: "8", lg: "14" }}
      height="100vh"
    >
      <FaceSVG style={{ maxWidth: "180px", maxHeight: "180px" }} />
      <Box
        display="flex"
        flexFlow="column nowrap"
        alignItems="center"
        mt={{ base: "2", md: "8" }}
      >
        <Heading as="h1" mt={{ base: "2", md: "8" }} textAlign="center">
          Front-end challenge!
        </Heading>
        <Text textAlign="center">
          This is a design that you will need to code up and impress us.
        </Text>
        <IconButton
          onClick={buttonAction}
          aria-label="Open form"
          isRound={true}
          icon={openDrawerIcon}
          backgroundColor={bodyColor}
          _hover={{ backgroundColor: lightBodyColor }}
          size="lg"
          width="14"
          height="14"
          minWidth="0"
          mt="12"
        />
      </Box>
    </CenteredBox>
  );
};

export default ChallengeHeading;
