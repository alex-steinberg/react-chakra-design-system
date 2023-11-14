import React, { FC, useRef } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
  useRadioGroup,
  useTheme,
} from "@chakra-ui/react";

import { RadioUIProps } from "../../../models/forms";
import CustomRadio from "../../../common/CustomRadio";

import MaleIcon from "../../../assets/images/mars-symbol.svg?react";
import MaleIconActive from "../../../assets/images/mars-symbol--white.svg?react";
import FemaleIcon from "../../../assets/images/venus-symbol.svg?react";
import FemaleIconActive from "../../../assets/images/venus-symbol--white.svg?react";
import CardIcon from "../../../assets/images/card.svg?react";
import CardIconActive from "../../../assets/images/card--white.svg?react";

const ChallengeForm: FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const theme = useTheme();
  const placement = useBreakpointValue(
    { base: "bottom", md: "right" },
    { ssr: false },
  );
  const firstField = useRef<HTMLInputElement>(null);

  const {
    getRootProps: getGenderRootProps,
    getRadioProps: getGenderRadioProps,
  } = useRadioGroup({
    name: "gender",
    defaultValue: "male",
  });

  // Membership Radio Group
  const {
    getRootProps: getMembershipRootProps,
    getRadioProps: getMembershipRadioProps,
  } = useRadioGroup({
    name: "membership",
    defaultValue: "classic",
  });

  const genderRadio: RadioUIProps[] = [
    {
      name: "male",
      Icon: MaleIcon,
      IconActive: MaleIconActive,
      display: "Male",
    },
    {
      name: "female",
      Icon: FemaleIcon,
      IconActive: FemaleIconActive,
      display: "Female",
    },
  ];

  const membershipRadio: RadioUIProps[] = [
    {
      name: "classic",
      Icon: CardIcon,
      IconActive: CardIconActive,
      display: "Classic",
    },
    {
      name: "silver",
      Icon: CardIcon,
      IconActive: CardIconActive,
      display: "Silver",
    },
    {
      name: "gold",
      Icon: CardIcon,
      IconActive: CardIconActive,
      display: "Gold",
    },
  ];

  return (
    <Drawer
      isOpen={isOpen}
      initialFocusRef={firstField}
      onClose={onClose}
      size={{
        base: "full",
        md: "xl",
      }}
      placement={placement as any}
    >
      <DrawerOverlay />
      <DrawerContent backgroundColor="white.100">
        <DrawerBody p={{ base: "4", md: "8", lg: "14" }}>
          <Stack spacing="6">
            <Stack direction={{ base: "column", md: "row" }}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                ref={firstField}
                id="name"
                placeholder="Please enter your name"
              />
            </Stack>

            <Stack direction={{ base: "column", md: "row" }}>
              <FormLabel htmlFor="gender">Gender</FormLabel>
              <HStack {...getGenderRootProps()}>
                {genderRadio.map((props) => {
                  return (
                    <CustomRadio
                      key={props.name}
                      {...getGenderRadioProps({ value: props.name })}
                      {...props}
                    >
                      {props.display}
                    </CustomRadio>
                  );
                })}
              </HStack>
            </Stack>

            <Stack direction={{ base: "column", md: "row" }}>
              <FormLabel htmlFor="dob">Date of Birth</FormLabel>
              <Input
                type="date"
                id="dob"
                placeholder="Please enter your date of birth"
              />
            </Stack>

            <Stack direction={{ base: "column", md: "row" }}>
              <FormLabel
                htmlFor="email"
                color="accent.500"
                position="relative"
                _before={{
                  content: "'•'",
                  position: "absolute",
                  top: "0",
                  left: "-16px",
                  fontSize: "2xl",
                  marginRight: "4px",
                }}
              >
                Email
              </FormLabel>
              <VStack w="100%" spacing="1">
                <Input
                  type="email"
                  id="email"
                  placeholder="Please enter your email"
                  isInvalid
                  errorBorderColor="accent.500"
                />
                <Text
                  fontSize="sm"
                  color="accent.500"
                  textAlign="right"
                  w="100%"
                >
                  Invalid email address
                </Text>
              </VStack>
            </Stack>

            <Stack direction={{ base: "column", md: "row" }}>
              <FormLabel htmlFor="mobile">Mobile</FormLabel>
              <Input
                type="tel"
                id="mobile"
                placeholder="Please enter your mobile number"
              />
            </Stack>

            <Stack direction={{ base: "column", md: "row" }}>
              <FormLabel htmlFor="customerId">Customer ID</FormLabel>
              <Input
                id="customerId"
                placeholder="Please enter your customer ID"
              />
            </Stack>

            <Stack direction={{ base: "column", md: "row" }}>
              <FormLabel htmlFor="gender">Membership</FormLabel>
              <Stack
                direction={{ base: "column", md: "row" }}
                {...getGenderRootProps()}
              >
                {membershipRadio.map((props) => {
                  return (
                    <CustomRadio
                      key={props.name}
                      {...getGenderRadioProps({ value: props.name })}
                      {...props}
                    >
                      {props.display}
                    </CustomRadio>
                  );
                })}
              </Stack>
            </Stack>
          </Stack>
        </DrawerBody>

        <DrawerFooter borderTopWidth="1px" p="8">
          <Stack
            direction={{ base: "column-reverse", md: "row" }}
            spacing={6}
            w="100%"
            justifyContent="flex-end"
          >
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button>Save</Button>
          </Stack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ChallengeForm;
