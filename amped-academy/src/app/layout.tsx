import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/next';
import Providers from "./providers";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap' 
});

export const metadata: Metadata = {
  title: "Amped Academy Visual Guitar Learning System AI tools",
  description: "Transform your guitar playing with the Lee Fretmap visual learning system. Color-coded fretboard stickers to master scales, chords, and modes.",
  keywords: ["guitar learning", "fretmap", "music education", "scales", "chords", "modes"],
  authors: [{ name: "Amped Academy" }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/favicon package/lightning-favicon pwa 512px.png', sizes: '512x512', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: '/images/favicon package/lightning-favicon pwa 512px.png',
  },
  manifest: '/manifest.json',
  themeColor: '#1e1b4b',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/favicon package/lightning-favicon pwa 512px.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/favicon package/lightning-favicon pwa 512px.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e1b4b" />
        <meta name="msapplication-TileColor" content="#1e1b4b" />
        <meta name="msapplication-config" content="none" />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
