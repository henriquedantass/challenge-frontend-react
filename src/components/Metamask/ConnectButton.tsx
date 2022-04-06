// ConnectButton.tsx
import { Button, Flex } from "@chakra-ui/react";
import { useEthers } from "@usedapp/core";

export default function ConnectButton() {
  const { activateBrowserWallet } = useEthers();

  function handleConnectWallet() {
    activateBrowserWallet();
  }

  return (
    <Flex alignItems="center" justifyContent="center">
      <Button
        background="#F43735"
        colorScheme="none"
        color="white"
        onClick={handleConnectWallet}
      >
        Connect Metamask
      </Button>
    </Flex>
  );
}
