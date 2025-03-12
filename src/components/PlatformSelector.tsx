import { Platform } from "@/hooks/usePlatforms";
import usePlatforms from "@/hooks/usePlatforms";
import { Button, HStack } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react/menu";
import { BsChevronDown } from "react-icons/bs";

interface Pros {
  onSelectedPlatformID: (platform: Platform | null) => void;
  selectedPlatformID?: number;
}

const PlatformSelector = ({
  onSelectedPlatformID,
  selectedPlatformID,
}: Pros) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = data?.results.find(
    (p) => p.id === selectedPlatformID
  );

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
              onSelectedPlatformID(null);
            }}
          >
            All
          </MenuItem>
          {data?.results.map((platform) => (
            <MenuItem
              key={platform.id}
              value={platform.slug}
              onClick={() => {
                onSelectedPlatformID(platform);
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
