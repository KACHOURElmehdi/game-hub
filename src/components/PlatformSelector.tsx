import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

function PlatformSelector( { onSelectPlatform, selectedPlatform }: Props ) {
  const { data, error } = usePlatforms();

  if(error) return null;

  return (
    <Menu>
      <MenuButton margin={"0 10px"} width="fit-content" as={Button} rightIcon={<BsChevronDown />}>
        { selectedPlatform?.name || 'Platforms' }
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.slug}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
