import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./searchInput";

interface Pros {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Pros) => {
  return (
    <HStack p={4}>
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
