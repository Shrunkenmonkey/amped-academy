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
  title: "Lee Fretmap - Visual Guitar Learning System | Amped Academy",
  description: "Transform your guitar playing with the Lee Fretmap visual learning system. Color-coded fretboard stickers to master scales, chords, and modes.",
  keywords: ["guitar learning", "fretmap", "music education", "scales", "chords", "modes"],
  authors: [{ name: "Amped Academy" }],
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/images/favicon package/lightning-favicon pwa 512px.png', sizes: '512x512', type: 'image/png' },
      { url: '/images/favicon package/lightning-favicon android 192px.png', sizes: '192x192', type: 'image/png' }
    ],
    apple: [
      { url: '/images/favicon package/lightning-favicon apple 180px.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: '/images/favicon package/lightning-favicon pwa 512px.png'
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: "Amped Academy"
  },
  themeColor: '#000000',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#000000',
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
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
