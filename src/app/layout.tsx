import type { Metadata } from "next";
import "./globals.css";
import { HeaderHome } from "./components/home/headerHome";

export const metadata: Metadata = {
  title: "Loja Jota",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="">
        <HeaderHome />

        <main className="mx-4">{children}</main>
        <footer>...</footer>
      </body>
    </html>
  );
}
