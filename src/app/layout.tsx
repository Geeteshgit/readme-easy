import type { Metadata } from "next";
import { Archivo, Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--archivo",
  subsets: ["latin"],
  weight: ["100", "200", "300","400", "500", "600","700", "800", "900"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--roboto",
  subsets: ["latin"],
  weight: ["100", "200", "300","400", "500", "600","700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Readme Easy - AI-Powered README Generator",
  description: "Generate clean, professional README.md files effortlessly using AI. Just fill out a simple form and let Readme Easy handle the rest.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} ${roboto.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
