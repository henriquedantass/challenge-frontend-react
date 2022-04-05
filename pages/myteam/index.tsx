import { Text, Flex, Img } from "@chakra-ui/react";
import { ReturnPage } from "../../src/components/ReturnPage";
import { Template } from "../../src/utils/Template";

export default function MyTeam() {
  return (
    <Template>
      <Flex width="100%" flexDir="column" position="relative" mb="100px ">
        <ReturnPage />

        <Text marginTop="100px" fontWeight="bold" fontSize="42px" color="white">
          Here is your own strike <br /> team choice
        </Text>
      </Flex>
    </Template>
  );
}
