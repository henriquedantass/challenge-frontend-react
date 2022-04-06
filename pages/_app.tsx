import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { TeamProvider } from "../src/context/teamContext";
import { DAppProvider } from "@usedapp/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DAppProvider config={{}}>
      <ChakraProvider theme={theme}>
        <TeamProvider>
          <Component {...pageProps} />
        </TeamProvider>
      </ChakraProvider>
    </DAppProvider>
  );
}

export default MyApp;
