import { Text } from "@chakra-ui/react";
import { Platform } from "./../hooks/useGames";
interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <>
      {platforms.map((platform) => (
        <Text>{platform.name}</Text>
      ))}
    </>
  );
};

export default PlatformIconList;
