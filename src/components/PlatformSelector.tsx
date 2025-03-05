import { Platform } from "@/hooks/useGames";
import usePlatform from "@/hooks/usePlatform";
import { Button, HStack } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react/menu";
import { BsChevronDown } from "react-icons/bs";

interface Pros {
  onSelectedPlatform: (platform: Platform | null) => void;
  selectedPlatform?: Platform | null;
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Pros) => {
  const { data, error } = usePlatform();

  if (error) {
    return null;
  }
  return (
    <HStack position="relative">
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline">
            {selectedPlatform?.name || "Platform"} <BsChevronDown />
          </Button>
        </MenuTrigger>
        <MenuContent position="absolute" top="50px" width="180px">
          <MenuItem
            key="all"
            value="all"
            onClick={() => {
              onSelectedPlatform(null);
            }}
          >
            All
          </MenuItem>
          {data.map((platform) => (
            <MenuItem
              key={platform.id}
              value={platform.slug}
              onClick={() => {
                onSelectedPlatform(platform);
              }}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </HStack>
  );
};

export default PlatformSelector;
