import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from 'tailwind-merge'

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elden Ring DLC Release Date",
  description: "When will the Elden Ring DLC be released? Live countdown timer to the DLC release date.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased bg-black overflow-hidden">
      <body className={twMerge(inter.className, "overflow-hidden")}>{children}</body>
    </html>
  );
}
