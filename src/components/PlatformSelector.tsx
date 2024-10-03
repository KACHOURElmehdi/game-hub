import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Text } from '@chakra-ui/react'

function PlatformSelector() {
  const { data, error } = usePlatforms();

  {error && <Text>{error}</Text>}

  return (
    <Menu>
      <MenuButton margin={"0 10px"} width="fit-content" as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.slug}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
