import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Renomeie para GoogleMontserrat
import Head from "next/head"; // Importação do componente Head
import "./globals.css";
import iconNek from "@/public/icons/iconeNek.png";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SmartMemory",
  description: "SmartMemory: Melhore com técnicas comprovadas, dicas e exercícios práticos. Treine sua mente para aumentar o foco, retenção e produtividade, foco ENEM 2024.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Head>
      <link rel="icon" href="/favicon.ico" sizes="any" />


        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1084363376617287');
              fbq('track', 'PageView');
            `,
          }}
        />
      </Head>
      <body className={montserrat.className}>
        {/* NoScript para Meta Pixel */}
        <noscript>
          
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1084363376617287&ev=PageView&noscript=1"
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}