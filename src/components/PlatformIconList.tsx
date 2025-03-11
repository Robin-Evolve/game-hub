import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "@/hooks/usePlatform";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface Pros {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Pros) => {
  const platformIcons: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    linux: FaLinux,
    android: FaAndroid,
    mac: FaApple,
    nintendo: SiNintendo,
    web: BsGlobe,
  };

  return (
    <HStack marginY={2}>
      {platforms.map((platform) => {
        return (
          <Icon
            as={platformIcons[platform.slug] || BsGlobe}
            key={platform.id}
            color="gray.500"
          />
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;
