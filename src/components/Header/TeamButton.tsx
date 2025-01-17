import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdGroups } from "react-icons/md";

export const TeamButton = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push("/myteam")}
      padding="30px"
      borderRadius="5px 20px"
      color="white"
      fontSize="24px"
      bg="#F43735"
      transition="all 0.5s ease"
      _hover={{ color: "#FFDD4D" }}
      rightIcon={<MdGroups style={{ marginLeft: "10px", fontSize: "40px" }} />}
    >
      Your Team
    </Button>
  );
};
