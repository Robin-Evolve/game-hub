import usePlatform from "@/hooks/usePlatform";
import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/store";
import { Button, HStack } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react/menu";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  const setSelectedPlatformID = useGameQueryStore((s) => s.setPlatformID);
  const selectedPlatformID = useGameQueryStore((s) => s.gameQuery.platformID);

  const selectedPlatform = usePlatform(selectedPlatformID);

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
          {data?.results.map((platform) => (
            <MenuItem
              key={platform.id}
              value={platform.slug}
              onClick={() => {
                setSelectedPlatformID(platform.id);
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
