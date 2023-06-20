import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import * as React from "react";
import SimpleSidebar from "@/layouts/sidebar";
import { Container } from "@chakra-ui/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Callum Thomas",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header></header>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
