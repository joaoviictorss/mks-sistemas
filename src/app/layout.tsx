import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import StyledComponentsRegistry from "./registry";
import { ReactQueryProvider } from "@/components/Provider/ReactQueryProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mks Sistemas",
  description: "E-commerce Mks Sistemas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className} suppressHydrationWarning={true}>
        <StyledComponentsRegistry>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
