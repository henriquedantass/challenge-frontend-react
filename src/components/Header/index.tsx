import { Flex, Img } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { TeamButton } from "./TeamButton";

export const Header = () => {
  return (
    <Flex
      w="100%"
      bg="#202020"
      height="150px"
      padding="20px"
      justifyContent="space-around"
      alignItems="center"
    >
      <Logo />
      <TeamButton />
    </Flex>
  );
};
