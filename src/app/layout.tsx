import type { Metadata } from "next";
import { Archivo, Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { Toaster } from "react-hot-toast";

const archivo = Archivo({
  variable: "--archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--roboto-mono",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ReadmeEasy - AI-Powered README Generator",
  description:
    "Generate clean, professional README.md files effortlessly using AI. Just fill out a simple form and let ReadmeEasy handle the rest.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${roboto.variable} ${robotoMono.variable} antialiased min-h-screen flex flex-col font-roboto`}
      >
        <Toaster position="bottom-center" reverseOrder={false} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
