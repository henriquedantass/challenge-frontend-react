import { Flex, Text, Input, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface SearchProps {
  onSubmit: (value: string) => void;
}

export const Search = ({ onSubmit }: SearchProps) => {
  const [searchValue, setSearchValue] = useState<string>("");

  function handleClickSearch() {
    if (searchValue.length > 0) {
      onSubmit(searchValue);
    }
  }

  return (
    <Flex
      margin={["150px 30px", "150px 0"]}
      width="fit-content"
      flexDir="column"
    >
      <Text
        width="100%"
        justifySelf="left"
        fontSize={["30px", "42px"]}
        fontWeight="bold"
        color="white"
      >
        Explore the most powerful <br /> characters in Marvel
      </Text>
      <Flex background="white" width="100%" borderRadius="5px 20px">
        <Input
          onChange={(e) => setSearchValue(e.target.value)}
          height="70px"
          borderRadius="5px 0px 0px 20px"
          padding="0 20px"
          variant="unstyled"
        />
        <IconButton
          onClick={handleClickSearch}
          height="70px"
          width="90px"
          fontSize="28px"
          borderRadius="5px 20px 5px 0px"
          background="#F43735"
          color="white"
          aria-label="Search database"
          transition="all 0.5s ease"
          _hover={{ color: "#FFDD4D" }}
          icon={<AiOutlineSearch />}
        />
      </Flex>
    </Flex>
  );
};
