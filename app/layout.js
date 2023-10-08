"use client";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import HeightContext from "./components/heightContext/heigthContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Who We Are",
  description: "test tasck",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeightContext>
          <Header />
          <main>{children}</main>
          <Footer />
        </HeightContext>
      </body>
    </html>
  );
}
{
  /* <Home height={height}/> */
}
