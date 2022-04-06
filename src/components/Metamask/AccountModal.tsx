import {
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Text,
} from "@chakra-ui/react";
import ConnectButton from "./ConnectButton";

type Props = {
  isOpen: any;
  onClose?: any;
};

export default function AccountModal({ isOpen, onClose }: Props) {
  return (
    <Modal
      closeOnEsc={false}
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size="lg"
    >
      <ModalOverlay />
      <ModalContent
        height="200px"
        background="white"
        border="1px"
        padding="10px"
        borderRadius="3xl"
      >
        <ModalHeader color="#000" px={4} fontSize="lg" fontWeight="medium">
          Connect your wallet!
        </ModalHeader>
        <ModalBody pt={0} px={4}>
          <Flex flexDir="column" width="100%" height="100%">
            <Text m="10px 0">
              To acess the aplication you need to connect your metamask!
            </Text>
            <ConnectButton />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
