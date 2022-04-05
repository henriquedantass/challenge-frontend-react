import { Flex, FlexProps, Img, Text } from "@chakra-ui/react";
import { CharacterProps } from "../../src/components/Character";

interface CharacterPerfilProps extends FlexProps {
  heroe: CharacterProps;
}

export const CharacterPerfil = ({ heroe, ...rest }: CharacterPerfilProps) => {
  return (
    <Flex
      marginTop="50px"
      padding="50px 100px"
      width="100%"
      bg="white"
      borderRadius="10px 50px"
      boxShadow=" 0px 4px 4px rgba(0, 0, 0, 0.25)"
      {...rest}
    >
      <Img
        borderRadius="50%"
        src={`${heroe?.thumbnail.path}/standard_fantastic.jpg`}
      />
      <Flex flexDir="column">
        <Text
          color="#212121"
          fontWeight="bold"
          fontSize="42px"
          marginLeft="30px"
        >
          {heroe?.name}
        </Text>
        <Text
          color="#212121"
          lineHeight="28px"
          mt="20px"
          fontSize="24px"
          marginLeft="30px"
        >
          {heroe?.description}
        </Text>
      </Flex>
    </Flex>
  );
};
