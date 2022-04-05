import { Flex, Text, HStack, Img, Stack } from "@chakra-ui/react";
import { formatPrice, formattedDate } from "../../src/utils/Formats";

export interface ComicItemProps {
  title: string;
  description: string;
  dates: [
    {
      date: Date;
      type: string;
    }
  ];
  prices: [
    {
      price: number;
      type: string;
    }
  ];
  thumbnail: {
    path: string;
    extension: string;
  };
  pageCount: number;
}

interface ComicProps {
  comic: ComicItemProps;
}

export const Comic = ({ comic }: ComicProps) => {
  return (
    <Flex
      width="100%"
      height="fit-content"
      borderRadius="10px 70px"
      background="white"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      flexDir={["column", "row"]}
    >
      <Img
        width={["100%", "22%"]}
        height={["40%", "100%"]}
        maxW={["", "250px"]}
        borderRadius={["0", "10px 0px 0px 70px"]}
        src={`${comic.thumbnail.path}/standard_fantastic.${comic.thumbnail.extension}`}
      />
      <Stack color="#212121" padding="19px 70px 19px 34px" spacing="20px">
        <Text fontSize="30px" fontWeight="bold" lineHeight="35px">
          {comic.title}
        </Text>
        <HStack spacing="20px" fontSize="18px" lineHeight="21px">
          <Text>{formattedDate(comic.dates[0].date)}</Text>
          <Text>{comic.pageCount} pages</Text>
          <Text>{formatPrice(comic.prices[0].price)}</Text>
        </HStack>
        <Text fontSize="20px" lineHeight="23px" noOfLines={4}>
          {comic.description}
        </Text>
      </Stack>
    </Flex>
  );
};
