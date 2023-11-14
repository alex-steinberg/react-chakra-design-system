import { HStack, RadioProps, Text, Box, useRadio } from "@chakra-ui/react";
import React, { FC } from "react";
import { RadioUIProps } from "../models/forms";

const CustomRadio: FC<RadioProps & RadioUIProps> = (props) => {
  const {
    getInputProps,
    getRadioProps,
    state: { isChecked },
  } = useRadio(props);

  const input = getInputProps();
  const radio = getRadioProps();

  const iconStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "999px",
    width: "50px",
    height: "50px",
  };

  const checkedStyle = {
    backgroundColor: "gray.100",
    color: "white",
  };

  const focusStyle = {
    boxShadow: "none !important",
    outline: "none !important",
  };

  return (
    <HStack as="label" cursor="pointer" borderRadius="3xl" px={3} py={3}>
      <input {...input} />
      {isChecked ? (
        <Box
          {...radio}
          style={iconStyle}
          _checked={checkedStyle}
          _focus={focusStyle}
        >
          <props.IconActive />
        </Box>
      ) : (
        <Box style={iconStyle} _checked={checkedStyle} _focus={focusStyle}>
          <props.Icon />
        </Box>
      )}
      <Text fontSize="md" ml="2">
        {props.children}
      </Text>
    </HStack>
  );
};

export default CustomRadio;
