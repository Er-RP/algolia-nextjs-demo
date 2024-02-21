import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'instantsearch.css/themes/satellite.css';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Algolia Next Demo App",
  description: "Demo App for NextJSv14 and ALgolia using App router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
