import { HStack, Image, Button } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import logo from "../assets/logo.webp";

const NavBar = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <HStack p={4} justify="space-between">
      <Image src={logo} boxSize="60px" />
      <Button variant="outline" onClick={toggleColorMode}>
        Toggle Mode
      </Button>
    </HStack>
  );
};

export default NavBar;
