import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import './globals.css'

import StyledComponentsRegistry from "./registry";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mks Sistemas",
  description: "Teste de vaga front-end",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className} suppressHydrationWarning={true}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
