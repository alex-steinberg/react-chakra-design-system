import { FC, ReactNode } from "react";
import { Box, chakra, useColorModeValue } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import LogoSVG from "../assets/images/react.svg?react";

const AppContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return <Box>{children}</Box>;
};

export default AppContainer;
