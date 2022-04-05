import { Template } from "../../src/utils/Template";
import { Text, Flex, Img, Spinner, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "../../src/services/api";
import { CharacterProps } from "../../src/components/Character";
import { GetServerSideProps } from "next";
import { CharacterPerfil } from "./CharacterPerfil";
import { SectionHeader } from "../../src/components/SectionHeader";
import { Comic, ComicItemProps } from "./Comic";

interface CharacterPage {
  params: {
    Slug: string;
  };
}

export default function CharacterPage({ params }: CharacterPage) {
  const router = useRouter();
  const [heroe, setHeroe] = useState<CharacterProps[]>([]);
  const [heroeComics, setHeroeComics] = useState<ComicItemProps[]>([]);
  const [isLoadingHeroe, setIsLoadingHeroe] = useState(true);

  useEffect(() => {
    setIsLoadingHeroe(true);
    api
      .get(`/characters/${params.Slug}`, {
        params: {
          apikey: process.env.NEXT_PUBLIC_API_KEY,
        },
      })
      .then((response) => {
        const { results } = response.data.data;

        setHeroe(results);

        setIsLoadingHeroe(false);
      });
  }, []);

  useEffect(() => {
    api
      .get(`/characters/${params.Slug}/comics`, {
        params: {
          apikey: process.env.NEXT_PUBLIC_API_KEY,
          limit: 5,
        },
      })
      .then((response) => {
        const { results } = response.data.data;

        setHeroeComics(results);
      });
  }, []);

  return (
    <Template>
      <Flex width="100%" flexDir="column" position="relative" mb="100px ">
        {isLoadingHeroe ? (
          <Spinner />
        ) : (
          <>
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

            <Text
              marginTop="100px"
              fontWeight="bold"
              fontSize="42px"
              color="white"
            >
              Discover all comics this <br /> character took part in
            </Text>
            <CharacterPerfil heroe={heroe[0]} />
            <Flex marginTop="40px" width="100%" flexDir="column">
              <SectionHeader title="Comics" subtitle="#results" />
              <Stack width="100%" spacing="50px" marginTop="40px">
                {heroeComics.map((comicItem: ComicItemProps) => (
                  <Comic comic={comicItem} />
                ))}
              </Stack>
            </Flex>
          </>
        )}
      </Flex>
    </Template>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  return {
    props: {
      params,
    },
  };
};
