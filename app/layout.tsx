import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import ThemeInitializer from "@/components/ThemeInitializer";
import Providers from './providers'
import { Toaster } from "@/components/ui/sonner"
import SplashScreen from "@/components/splashScreen";

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'swap'
});


export const metadata: Metadata = {
  title: "Beak.",
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
        <Providers>
          <Toaster
            position="bottom-center"
          />
          <SplashScreen />
          {children}
        </Providers>
      </body>
    </html>
  );
}
