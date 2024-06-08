import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Renomeie para GoogleMontserrat
import "./globals.css";
import iconNek from "@/public/icons/iconeNek.png"
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nek - Marketing digital para aumentar suas vendas!",
  description: "Nek | Marketing digital - Aumente suas vendas no digital, Desenvolvimento de software, Marketing Digital, Manunteção de sistemas, Gestão de Tráfego",
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
