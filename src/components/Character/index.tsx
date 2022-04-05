import { Flex, Text, Img, Stack, Icon } from "@chakra-ui/react";
import { MdGroup } from "react-icons/md";

export interface CharacterProps {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  handleOnClickHeroe: () => void;
  handleOnClickIcon: () => void;
  alreadyOnTeam: boolean;
}

export const Character = ({
  name,
  thumbnail,
  description,
  handleOnClickHeroe,
  handleOnClickIcon,
  alreadyOnTeam = false,
}: CharacterProps) => {
  return (
    <Flex
      borderRadius="10px 30px"
      width="270px"
      height="380px"
      bg="white"
      flexDir="column"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25);"
    >
      <Flex
        onClick={handleOnClickIcon}
        borderRadius="50%"
        bg={alreadyOnTeam ? "#F43735" : "#F5F5F5"}
        color={alreadyOnTeam ? "#FFF" : "#000"}
        position="absolute"
        width="50px"
        height="50px"
        justifyContent="center"
        alignItems="center"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25);"
        top="50%"
        right="5px"
        cursor="pointer"
        transition="all 0.5s ease"
        _hover={{
          background: alreadyOnTeam ? "#FFF" : "#F43735",
          color: alreadyOnTeam ? "#000" : "#FFF",
        }}
      >
        <Icon fontSize="28px" as={MdGroup} />
      </Flex>
      <Flex
        cursor="pointer"
        width="100%"
        height="100%"
        flexDir="column"
        onClick={handleOnClickHeroe}
      >
        <Img
          width="100%"
          height="100%"
          maxHeight="220px"
          src={`${thumbnail.path}/standard_fantastic.jpg`}
        />
        <Stack padding="15px 20px">
          <Text isTruncated fontSize="30px" fontWeight="bold">
            {name}
          </Text>
          <Text noOfLines={3} fontSize="16px">
            {description.length > 0 ? description : "No registered description"}
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
};
