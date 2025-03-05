import usePlatform from "@/hooks/usePlatform";
import { Button } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react/menu";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const { data, error } = usePlatform();

  if (error) {
    return null;
  }
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" marginX={5} marginY={3}>
          Platform <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent marginX={5}>
        {data.map((platform) => (
          <MenuItem key={platform.id} value={platform.slug}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
