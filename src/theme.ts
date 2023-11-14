import {
  extendTheme,
  defineStyleConfig,
  createMultiStyleConfigHelpers,
} from "@chakra-ui/react";
import { inputAnatomy } from "@chakra-ui/anatomy";

const formInputHeight = "52px";
const Text = defineStyleConfig({
  baseStyle: {
    fontSize: "xl",
  },
});

const Heading = defineStyleConfig({
  baseStyle: {
    fontWeight: 600,
    fontSize: { base: "md", md: "lg", lg: "xl" },
    marginBottom: 6,
  },
});

const Link = defineStyleConfig({
  baseStyle: {
    fontWeight: 700,
    textDecoration: "underline",
    _hover: {
      color: "gray.400",
    },
  },
});

const Button = defineStyleConfig({
  baseStyle: {
    textTransform: "uppercase",
    width: {
      base: "100%",
      md: "auto",
    },
  },
  sizes: {
    lg: {
      px: 12,
    },
  },
  variants: {
    solid: {
      bg: "blueGreen.500",
      color: "gray.50",
      _hover: {
        bg: "blueGreen.300",
      },
      minWidth: "200px",
    },
    outline: {
      bg: "gray.50",
      color: "gray.500",
      border: "1px solid",
      borderColor: "gray.50",
      _hover: {
        bg: "gray.100",
      },
      minWidth: "200px",
    },
  },
  defaultProps: {
    size: "lg",
    variant: "solid",
  },
});

const IconButton = defineStyleConfig({
  baseStyle: {
    width: "30px !important",
    minWidth: "30px !important",
  },
});

const FormLabel = defineStyleConfig({
  baseStyle: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 0,
    height: formInputHeight,
    minWidth: "180px",
  },
});

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const inputBaseStyle = definePartsStyle({
  field: {
    backgroundColor: "gray.50 !important", // not sure why `bg` without `!important` doesn't work here
    color: "gray.300",
    fontWeight: 600,
    borderRadius: "4",
    height: formInputHeight,
    _placeholder: {
      fontWeight: 400,
      color: "gray.300",
      fontStyle: "italic",
    },
    _active: {
      backgroundColor: "white.100 !important",
      borderWidth: "2px !important",
      borderStyle: "solid !important",
      borderColor: "gray.100 !important",
      outline: "none!important",
      boxShadow: "none !important",
      color: "gray.500",
    },
    _focus: {
      backgroundColor: "white.100 !important",
      borderWidth: "2px !important",
      borderStyle: "solid !important",
      borderColor: "gray.100 !important",
      outline: "none!important",
      boxShadow: "none !important",
      color: "gray.500",
    },
    _invalid: {
      borderColor: "accent.500 !important",
      color: "accent.500",
    },
  },
});

const inputTheme = defineMultiStyleConfig({ baseStyle: inputBaseStyle });

const primaryColor = "#ffd300";
const secondaryColor = "#ff9200";

export const leftProportion = "44%";

const theme = extendTheme({
  fonts: {
    heading: "'Nunito Sans', sans-serif",
    body: "'Nunito Sans', sans-serif",
  },
  initialColorMode: "light",
  useSystemColorMode: false,
  colors: {
    brand: {
      50: "#fffde7", // lightest
      100: "#fffacc",
      200: "#fff6b0",
      300: "#fff294",
      400: "#ffed78",
      500: primaryColor, // default brand color
      600: "#e6cb29",
      700: "#ccb423",
      800: "#b39e1d",
      900: "#998717", // darkest
    },
    accent: {
      50: "#FFEDE0", // lightest
      100: "#FFDBB8",
      200: "#FFC990",
      300: "#FFB768",
      400: "#FFA540",
      500: secondaryColor, // default accent color, secondaryColor
      600: "#D88732",
      700: "#BF762D",
      800: "#A66628",
      900: "#8D5523", // darkest
    },
    gray: {
      50: "#f5f8f9", // pale gray
      100: "#cad7dd", // cloudy blue
      200: "#A3A3A3",
      300: "#858585",
      400: "#676767",
      500: "#373d40", // charcoal gray
      600: "#323232",
      700: "#2D2D2D",
      800: "#272727",
      900: "#1C1C1C", // darkest
    },
    blueGreen: {
      50: "#e5f9f4",
      100: "#c3efe3",
      200: "#9fe5d2",
      300: "#7bdbc1",
      400: "#57d1b0",
      500: "#49c8a8", // blue green
      600: "#3fb59a",
      700: "#35a18b",
      800: "#2b8d7c",
      900: "#21796e",
    },
    white: {
      100: "#ffffff",
    },
  },
  components: {
    Text,
    Heading,
    Link,
    Button,
    IconButton,
    Input: inputTheme,
    FormLabel,
  },
  styles: {
    global: {
      body: {
        fontSize: "18px",
        bg: {
          base: "#F8D748",
          md: `linear-gradient(90deg, ${primaryColor} 0%, ${primaryColor} ${leftProportion}, ${secondaryColor} ${leftProportion}, ${secondaryColor} 100%)`,
        },
        color: "gray.500",
        fontFamily:
          '"Nunito Sans", system-ui, Avenir, Helvetica, Arial, sans-serif',
      },
    },
  },
});

export default theme;
