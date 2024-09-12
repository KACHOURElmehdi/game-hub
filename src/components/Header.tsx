import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/batman_logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";

function Header() {
  return (
    <HStack justifyContent={"space-between"} padding={"0 20px"}>
      <Image src={logo} boxSize={"60px"} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default Header;
