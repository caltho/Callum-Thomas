"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme, CSSReset } from "@chakra-ui/react";
import "@fontsource/montserrat/500.css";

const theme = extendTheme({
  fonts: {
    body: "montserrat, sans-serif",
    heading: "montserrat, sans-serif",
    link: "montserrat, sans-serif",
    // Add more font styles as needed
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider resetCSS theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
