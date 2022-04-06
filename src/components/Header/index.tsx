import { Flex, Text } from "@chakra-ui/react";
import { AccountInfo } from "../Metamask/AccountInfo";
import { Logo } from "./Logo";
import { TeamButton } from "./TeamButton";

export const Header = () => {
  return (
    <Flex
      w="100%"
      bg="#202020"
      height="200px"
      padding="25px"
      position="relative"
      flexDir="column"
    >
      <Flex
        width="100%"
        height="100%"
        justifyContent="space-around"
        alignItems="center"
      >
        <Logo />
        <TeamButton />
      </Flex>
      <Flex
        width="100%"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
      >
        <Text mb="10px" color="white">
          Your Adress
        </Text>
        <AccountInfo />
      </Flex>
    </Flex>
  );
};
