import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { TeamProvider } from "../src/context/teamContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <TeamProvider>
        <Component {...pageProps} />
      </TeamProvider>
    </ChakraProvider>
  );
}

export default MyApp;
