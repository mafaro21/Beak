import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import ThemeInitializer from "@/components/ThemeInitializer";
// import { useEffect, useState } from "react";

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'], // choose the weights you need
  variable: '--font-lato',
  display: 'swap'
});


export const metadata: Metadata = {
  title: "Beak",
  description: "A Twitter/ X Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${lato.variable} antialiased`}
      >
        <ThemeInitializer />
        {children}
      </body>
    </html>
  );
}
