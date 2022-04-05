import { Text, Flex, Img } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCallback, useContext, useState } from "react";
import { Character } from "../../src/components/Character";
import { ReturnPage } from "../../src/components/ReturnPage";
import { teamContext } from "../../src/context/teamContext";
import { Template } from "../../src/utils/Template";

export default function MyTeam() {
  const { team, addCharacterOnTeam } = useContext(teamContext);
  const [page, setPage] = useState(0);
  const router = useRouter();

  const totalOfHeroes = team.length;

  const paginatedHeroes = team.slice(page, page + 10);

  // pagination
  function handleNextCharactersPage() {
    if (totalOfHeroes > page) {
      setPage(page + 10);
    }
  }

  // pagination
  function handleBackCharactersPage() {
    if (page > 0) {
      setPage(page - 10);
    }
  }

  return (
    <Template>
      <Flex width="100%" height="100%" flexDir="column" position="relative">
        <ReturnPage />
        {team.length > 0 ? (
          <>
            <Text
              marginTop="100px"
              fontWeight="bold"
              fontSize="42px"
              color="white"
            >
              Here is your own strike <br /> team choice
            </Text>
            <Flex
              flexWrap="wrap"
              gap="20px 30px"
              justifyContent="center"
              alignItems="center"
              mt="100px"
            >
              {paginatedHeroes.map((heroe) => (
                <Character
                  handleOnClickHeroe={() =>
                    router.push(`/character/${heroe.id}`)
                  }
                  handleOnClickIcon={() => addCharacterOnTeam(heroe)}
                  key={heroe.id}
                  name={heroe.name}
                  id={heroe.id}
                  description={heroe.description}
                  thumbnail={heroe.thumbnail}
                />
              ))}
            </Flex>
            <Flex
              m="40px 0"
              width="100%"
              gap="20px"
              justifyContent="flex-end"
              paddingBottom="100px"
            >
              {page !== 0 && (
                <Text
                  onClick={handleBackCharactersPage}
                  cursor="pointer"
                  fontSize="20px"
                  fontWeight="bold"
                >
                  Prev
                </Text>
              )}

              {page + 10 < totalOfHeroes && (
                <Text
                  onClick={handleNextCharactersPage}
                  cursor="pointer"
                  fontSize="20px"
                  fontWeight="bold"
                >
                  Next
                </Text>
              )}
            </Flex>
          </>
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
