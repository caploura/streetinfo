import "./globals.css";

export const metadata = {
  title: "Informação Ruas",
  description: "Esta página contém a informção sobre todas as ruas que dão o nome às mesas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
