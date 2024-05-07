import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "./Footer";
import "./globals.css";

const roboto = Montserrat({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fugoku",
  description: "Fugoku",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
