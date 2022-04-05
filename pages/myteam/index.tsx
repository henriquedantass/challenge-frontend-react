import { Text, Flex, Img } from "@chakra-ui/react";
import { useContext } from "react";
import { ReturnPage } from "../../src/components/ReturnPage";
import { teamContext } from "../../src/context/teamContext";
import { Template } from "../../src/utils/Template";

export default function MyTeam() {
  const { team } = useContext(teamContext);

  console.log(team);

  return (
    <Template>
      <Flex width="100%" flexDir="column" position="relative" mb="100px">
        <ReturnPage />
        {team.length > 0 ? (
          <Text
            marginTop="100px"
            fontWeight="bold"
            fontSize="42px"
            color="white"
          >
            Here is your own strike <br /> team choice
          </Text>
        ) : (
          <Text
            marginTop="100px"
            fontWeight="bold"
            fontSize="42px"
            color="white"
          >
            Sorry, but you dont have <br /> any heroe on your team
          </Text>
        )}
      </Flex>
    </Template>
  );
}
