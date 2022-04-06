import { Button, Box, Text, Flex, Img } from "@chakra-ui/react";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
import Identicon from "./Identicon";

export const AccountInfo = () => {
  const { account } = useEthers();
  const etherBalance = useEtherBalance(account);

  return (
    <Box
      width="fit-content"
      display="flex"
      alignItems="center"
      background="white"
      borderRadius="xl"
    >
      <Button
        bg="white"
        border="1px solid transparent"
        borderRadius="xl"
        m="1px"
        px={3}
        height="38px"
      >
        <Text color="#000" fontSize="md" fontWeight="medium" mr="2">
          {account &&
            `${account.slice(0, 20)}...${account.slice(
              account.length - 4,
              account.length
            )}`}
        </Text>
        <Identicon />
      </Button>
    </Box>
  );
};
