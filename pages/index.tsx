import type { NextPage } from "next";
import { Template } from "../src/utils/Template";
import { Flex, Text, Spinner } from "@chakra-ui/react";
import { Search } from "../src/components/Search";
import { useEffect, useState } from "react";
import api from "../src/services/api";
import { Character, CharacterProps } from "../src/components/Character";

const Home: NextPage = () => {
  const [heroes, setHeroes] = useState<CharacterProps[]>([]);
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState<number>(1);
  const [isLoadingCharacters, setIsLoadingCharacters] = useState(true);

  function handleNextCharactersPage() {
    if (lastPage > page) {
      setPage(page + 10);
    }
  }

  function handleBackCharactersPage() {
    if (page > 0) {
      setPage(page - 10);
    }
  }

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
        <Search />
        <Flex mt="34px" width="100%" flexDir="column">
          <Flex
            mb="20px"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text fontSize="42px" fontWeight="bold">
              Characters
            </Text>
            <Text fontSize="24px" fontWeight="bold">
              #results
            </Text>
          </Flex>
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
          <Flex m="40px 0" width="100%" gap="20px" justifyContent="flex-end">
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
