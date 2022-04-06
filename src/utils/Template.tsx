import { ReactNode } from "react";
import { Flex, Img, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import AccountModal from "../components/Metamask/AccountModal";
import { useEthers } from "@usedapp/core";

interface TemplateProps {
  children: ReactNode;
}

export const Template = ({ children }: TemplateProps) => {
  const { account } = useEthers();

  return (
    <Flex flexDir="column" height="100vh" position="relative">
      <Header />
      <Flex position="relative" width="100%" height="100%" flexDir="column">
        <Img
          zIndex={100}
          position="absolute"
          width="100%"
          height="490px"
          src="/assets/Background.png"
        />
        <Flex
          margin={["0px 10px", "0px 50px", "0px 215px"]}
          zIndex={200}
          height="100%"
        >
          {!account && <AccountModal isOpen onClose={() => alert("fechou")} />}
          {children}
        </Flex>
        <Flex
          zIndex={200}
          width="100%"
          height="80px"
          bg="#202020"
          justifyContent="space-around"
          alignItems="center"
          position="fixed"
          bottom="0"
          flexDir={["column", "row"]}
        >
          <Text color="white">Data provided by Marvel. © 2020 MARVEL</Text>
          <Text color="white">Developed by Giovani and Luís</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
