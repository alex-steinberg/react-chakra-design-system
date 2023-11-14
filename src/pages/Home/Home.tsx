import React, { FC } from "react";
import { Box, useDisclosure } from "@chakra-ui/react";

import CenteredBox from "../../common/CenteredBox";
import ChallengeHeading from "./ChallengeHeading/ChallengeHeading";
import { leftProportion } from "../../theme";
import ChallengeBlurb from "./ChallengeBlurb/ChallengeBlurb";
import ChallengeForm from "./ChallengeForm/ChallengeForm";

const Home: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return (
    <Box display="flex" flexFlow={{ base: "column nowrap", md: "row nowrap" }}>
      <ChallengeForm isOpen={isOpen} onClose={onClose} />
      <CenteredBox w={{ base: "100%", md: leftProportion }}>
        <ChallengeHeading buttonAction={onOpen} drawerIsOpen={isOpen} />
      </CenteredBox>
      <CenteredBox
        backgroundColor="accent.500"
        h={{ base: "auto", md: "100%" }}
        w={{ base: "100%", md: `calc(100% - ${leftProportion})` }}
      >
        <ChallengeBlurb />
      </CenteredBox>
    </Box>
  );
};

export default Home;
