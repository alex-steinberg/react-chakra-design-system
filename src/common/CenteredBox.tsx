import React, { FC, ReactNode } from "react";
import { Box, BoxProps } from "@chakra-ui/react";

const CenteredBox: FC<BoxProps & { children: ReactNode }> = ({
  children,
  ...props
}) => {
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      h="100%"
      p="4"
      pt={{ base: "4", md: "8", lg: "14" }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default CenteredBox;
