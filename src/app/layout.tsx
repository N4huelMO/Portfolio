import "./globals.css";

import type { Metadata } from "next";

import { Gabarito } from "next/font/google";

import Header from "@/components/Header";

const gabarito = Gabarito({
  subsets: ["latin"],
  variable: "--font-gabarito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Nahuel Mesa",
  description:
    "My portfolio, where you can see all my projects and what technologies i know",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${gabarito.variable}`}>
      <body className="bg-neutral-800 p-0 m-0 text-white">
        <Header />

        <section className="w-11/12 m-auto">{children}</section>
      </body>
    </html>
  );
}
