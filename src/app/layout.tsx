import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Renomeie para GoogleMontserrat
import "./globals.css";
import iconNek from "@/public/icons/iconeNek.png"
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eduzin e Pitica",
  description: "Casal do seculo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className }>{children}</body>
    </html>
  );
}
