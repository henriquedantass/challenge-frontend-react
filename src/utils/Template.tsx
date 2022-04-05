import { ReactNode } from "react";
import { Flex, Img, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";

interface TemplateProps {
  children: ReactNode;
}

export const Template = ({ children }: TemplateProps) => {
  return (
    <Flex flexDir="column">
      <Header />
      <Flex position="relative" width="100%" height="100%">
        <Img
          zIndex={100}
          position="absolute"
          width="100%"
          height="490px"
          src="/assets/Background.png"
        />
        <Flex
          margin={["0px 10px", "0px 50px", "0px 215px"]}
          width="100%"
          zIndex={200}
          height="100%"
        >
          {children}
        </Flex>
      </Flex>
      <Flex
        width="100%"
        height="80px"
        bg="#202020"
        justifyContent="space-around"
        alignItems="center"
        flexDir={["column", "row"]}
      >
        <Text color="white">Data provided by Marvel. © 2020 MARVEL</Text>
        <Text color="white">Developed by Giovani and Luís</Text>
      </Flex>
    </Flex>
  );
};
