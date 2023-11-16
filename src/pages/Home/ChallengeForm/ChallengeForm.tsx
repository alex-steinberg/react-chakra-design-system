import React, { FC, useRef, useState } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
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
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [customerId, setCustomerId] = useState("");

  const showCloseButton = useBreakpointValue({ base: true, md: false });

  const placement = useBreakpointValue(
    { base: "bottom", md: "right" },
    { ssr: false },
  );
  const firstField = useRef<HTMLInputElement>(null);

  const {
    getRootProps: getGenderRootProps,
    getRadioProps: getGenderRadioProps,
    setValue: setGenderValue,
  } = useRadioGroup({
    name: "gender",
    defaultValue: "male",
  });

  const genderGroup = getGenderRootProps();

  const {
    getRootProps: getMembershipRootProps,
    getRadioProps: getMembershipRadioProps,
    setValue: setMembershipValue,
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

  const handleReset = () => {
    // Reset input fields
    setName("");
    setDob("");
    setEmail("");
    setMobile("");
    setCustomerId("");

    // Reset radio groups
    setGenderValue("male");
    setMembershipValue("classic");
  };

  return (
    <Drawer
      isOpen={isOpen}
      initialFocusRef={firstField}
      onClose={onClose}
      size={{
        base: "full",
        md: "lg",
        lg: "xl",
      }}
      placement={placement as any}
    >
      <DrawerOverlay />
      <DrawerContent backgroundColor="white.100">
        {showCloseButton && <DrawerCloseButton />}
        <DrawerBody p={{ base: "4", md: "8", lg: "14" }}>
          <Stack spacing="6">
            <Stack direction={{ base: "column", md: "row" }}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                ref={firstField}
                id="name"
                placeholder="Please enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Stack>

            <Stack direction={{ base: "column", md: "row" }}>
              <FormLabel htmlFor="gender">Gender</FormLabel>
              <HStack {...genderGroup}>
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
                value={dob}
                onChange={(e) => setDob(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </Stack>

            <Stack direction={{ base: "column", md: "row" }}>
              <FormLabel htmlFor="customerId">Customer ID</FormLabel>
              <Input
                id="customerId"
                placeholder="Please enter your customer ID"
                value={customerId}
                onChange={(e) => setCustomerId(e.target.value)}
              />
            </Stack>

            <Stack direction={{ base: "column", md: "row" }}>
              <FormLabel htmlFor="membership">Membership</FormLabel>
              <Stack
                direction={{ base: "column", md: "row" }}
                {...getMembershipRootProps()}
              >
                {membershipRadio.map((props) => {
                  return (
                    <CustomRadio
                      key={props.name}
                      {...getMembershipRadioProps({ value: props.name })}
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
            <Button variant="outline" onClick={handleReset}>
              Clear
            </Button>
            <Button>Save</Button>
          </Stack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ChallengeForm;
