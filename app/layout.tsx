import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Link from "next/link";
import { Box } from "@chakra-ui/next-js";
import SidebarWithHeader from "@/layouts/sidebar";
import * as React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "P-Cal",
  description: "Perpetual Calendar App",
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
        <Providers>
          <SidebarWithHeader>{children}</SidebarWithHeader>
        </Providers>
      </body>
    </html>
  );
}
