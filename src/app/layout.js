import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Informação Ruas",
  description: "Esta página contém a informção sobre todas as ruas que dão o nome às mesas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href='https://fonts.googleapis.com/css?family=Crimson Pro' rel='stylesheet'/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
