import { Flex, FlexProps, Img, Text } from "@chakra-ui/react";
import { CharacterProps } from "../../src/components/Character";

interface CharacterPerfilProps extends FlexProps {
  heroe: CharacterProps;
}

export const CharacterPerfil = ({ heroe, ...rest }: CharacterPerfilProps) => {
  return (
    <Flex
      marginTop="50px"
      padding={["30px 20px", "50px 100px", "50px 100px"]}
      width="100%"
      bg="white"
      borderRadius="10px 50px"
      boxShadow=" 0px 4px 4px rgba(0, 0, 0, 0.25)"
      flexDir={["column", "column", "row"]}
      {...rest}
    >
      <Img
        borderRadius="50%"
        marginRight="15px"
        alignSelf={["center", "", ""]}
        maxWidth={["200px", "fit-content"]}
        src={`${heroe?.thumbnail.path}/standard_fantastic.jpg`}
      />
      <Flex flexDir="column">
        <Text
          color="#212121"
          fontWeight="bold"
          fontSize={["28px", "42px"]}
          marginLeft="30px"
        >
          {heroe?.name}
        </Text>
        <Text
          color="#212121"
          lineHeight="28px"
          mt="20px"
          fontSize={["15px", "24px"]}
          marginLeft="30px"
          noOfLines={[5, 7, 7]}
        >
          {heroe?.description.length > 0
            ? heroe.description
            : "This heroe dont have any description registred"}
        </Text>
      </Flex>
    </Flex>
  );
};
