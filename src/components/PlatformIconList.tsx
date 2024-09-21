import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
} from "react-icons/fa";
import { BsAndroid2, BsGlobe, BsNintendoSwitch } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { Platform } from "./../hooks/useGames";
import { IconType } from "react-icons";
interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    macos: FaApple,
    linux: FaLinux,
    android: BsAndroid2,
    nintendo: BsNintendoSwitch,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  const uniquePlatforms = [
    ...new Set(
      platforms.map((platform) => platform.slug.replace(/[0-9]|(-.*)/g, ""))
    ),
  ];

  return (
    <HStack gap={2}>
      {uniquePlatforms.map((slug) => (
        <Icon
          key={slug}
          as={iconMap[slug]}
          color={"gray.400"}
          fontSize={"lg"}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
