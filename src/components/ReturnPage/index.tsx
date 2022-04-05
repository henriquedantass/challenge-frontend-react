import { Flex, Text, Img } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const ReturnPage = () => {
  const router = useRouter();

  return (
    <Flex
      cursor="pointer"
      onClick={() => router.back()}
      marginLeft="auto"
      gap="10px"
    >
      <Text color="#FFCDD2" fontWeight="bold" fontSize="24px">
        Return to the previous page
      </Text>
      <Img src="/assets/BackArrow.svg" />
    </Flex>
  );
};
