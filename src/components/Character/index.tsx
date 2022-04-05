import { Flex, Text, Img, Stack } from "@chakra-ui/react";

export interface CharacterProps {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  handleOnClickHeroe: () => void;
}

export const Character = ({
  name,
  thumbnail,
  description,
  handleOnClickHeroe,
  ...rest
}: CharacterProps) => {
  return (
    <Flex
      onClick={handleOnClickHeroe}
      cursor="pointer"
      borderRadius="10px 30px"
      width="270px"
      height="380px"
      bg="white"
      flexDir="column"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25);"
      {...rest}
    >
      <Flex
        borderRadius="50%"
        bg="#F5F5F5"
        position="absolute"
        width="50px"
        height="50px"
        justifyContent="center"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25);"
        top="50%"
        right="5px"
        cursor="pointer"
        transition="all 0.5s ease"
        _hover={{ background: "rgba(244, 55, 53, 0.8)" }}
      >
        <Img width="25px" src="/assets/Team.svg" />
      </Flex>
      <Img
        width="100%"
        height="60%"
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
  );
};
