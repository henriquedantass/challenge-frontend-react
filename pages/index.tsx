import api from "../src/services/api";
import type { NextPage } from "next";
import { Template } from "../src/utils/Template";
import { Flex, Text, Spinner, useToast } from "@chakra-ui/react";
import { Search } from "../src/components/Search";
import { useCallback, useContext, useEffect, useState } from "react";
import { Character, CharacterProps } from "../src/components/Character";
import { useRouter } from "next/router";
import { SectionHeader } from "../src/components/SectionHeader";
import { teamContext } from "../src/context/teamContext";

const Home: NextPage = () => {
  const [heroes, setHeroes] = useState<CharacterProps[]>([]);
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState<number>(1);
  const [isLoadingCharacters, setIsLoadingCharacters] = useState(true);
  const { team, addCharacterOnTeam } = useContext(teamContext);
  const router = useRouter();
  const toast = useToast();

  // pagination
  function handleNextCharactersPage() {
    if (lastPage > page) {
      setPage(page + 10);
    }
  }

  // pagination
  function handleBackCharactersPage() {
    if (page > 0) {
      setPage(page - 10);
    }
  }

  // search for a hero
  function handleSearchCharacter(name: string) {
    api
      .get(`characters?name=${name}`, {
        params: {
          apikey: process.env.NEXT_PUBLIC_API_KEY,
          limit: 10,
          offset: page,
        },
      })
      .then((response) => {
        const { results } = response.data.data;

        // dont find any heroe with the name of search
        if (results.length <= 0) {
          toast({
            status: "error",
            description: "Personagem não encontrado!",
            duration: 9000,
            isClosable: true,
            position: "top-right",
          });

          return;
        }

        // find a heroe
        const heroeId = results[0].id;
        router.push(`/character/${heroeId}`);
      })
      .catch(() => {
        toast({
          status: "error",
          description: "Ops! algo errado aconteceu",
          duration: 9000,
          isClosable: true,
          position: "top-right",
        });
      });
  }

  // LIST HEROES
  useEffect(() => {
    setIsLoadingCharacters(true);

    api
      .get("/characters", {
        params: {
          apikey: process.env.NEXT_PUBLIC_API_KEY,
          limit: 10,
          offset: page,
        },
      })
      .then((response) => {
        const { results, total } = response.data.data;

        setIsLoadingCharacters(false);
        setLastPage(total);
        setHeroes(results);
      });
  }, [page]);

  return (
    <Template>
      <Flex flexDir="column" alignItems="center" width="100%">
        <Search onSubmit={(value) => handleSearchCharacter(value)} />
        <Flex mt="34px" width="100%" flexDir="column">
          <SectionHeader mb="20px" title="Characters" subtitle="#results" />
          <Flex
            flexWrap="wrap"
            gap="20px 30px"
            justifyContent="center"
            alignItems="center"
            minHeight="400px"
          >
            {isLoadingCharacters ? (
              <Spinner />
            ) : (
              <>
                {heroes.map((heroe) => (
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
              </>
            )}
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

            <Text
              onClick={handleNextCharactersPage}
              cursor="pointer"
              fontSize="20px"
              fontWeight="bold"
            >
              Next
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Template>
  );
};

export default Home;
