import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap' 
});

export const metadata: Metadata = {
  title: "Lee Fretmap - Visual Guitar Learning System | Amped Academy",
  description: "Transform your guitar playing with the Lee Fretmap visual learning system. Color-coded fretboard stickers to master scales, chords, and modes.",
  keywords: ["guitar learning", "fretmap", "music education", "scales", "chords", "modes"],
  authors: [{ name: "Amped Academy" }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
