import { createSystem, defaultConfig } from "@chakra-ui/react";

// Define theme configuration
const config = {
  ...defaultConfig,
  initialColorMode: "light",
};

// Extend theme
const theme = createSystem(config);

export default theme;
