import { Flex, Img, Text, useBreakpointValue } from "@chakra-ui/react";

export const Logo = () => {
  const isWideSize = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex width="fit-content" alignItems="center" gap="19px">
      <Img width="70px" src="/assets/IronMan.svg" />
      {isWideSize && (
        <Text color="white" fontWeight="bold" fontSize="36px">
          Marvel Strike Team
        </Text>
      )}
    </Flex>
  );
};
