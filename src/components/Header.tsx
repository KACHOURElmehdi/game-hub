import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/batman_logo.svg";

function Header() {
  return (
    <HStack>
      <Image src={logo} boxSize={"60px"} />
      <Text>cdd</Text>
    </HStack>
  );
}

export default Header;
