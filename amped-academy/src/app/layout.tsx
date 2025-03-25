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
  title: "Amped Academy Visual Guitar Learning System lee fretmap",
  description: "Transform your guitar playing with the Lee Fretmap visual learning system. Color-coded fretboard stickers to master scales, chords, and modes.",
  keywords: ["guitar learning", "fretmap", "music education", "scales", "chords", "modes"],
  authors: [{ name: "Amped Academy" }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: "Amped Academy Visual Guitar Learning System lee fretmap",
  },
  manifest: '/manifest.json',
  icons: {
    shortcut: '/images/favicon package/amped-favicon-png.png',
    icon: [
      { url: '/images/favicon package/amped-favicon-png.png', sizes: '32x32' },
      { url: '/images/favicon package/lightning-favicon-webp.webp', type: 'image/webp', sizes: '32x32' }
    ],
    apple: [
      { 
        url: '/images/favicon package/lightning-favicon-apple-180px.png',
        sizes: '180x180',
        type: 'image/png',
        media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)'
      }
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/images/favicon package/lightning-favicon-android-192px.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/images/favicon package/lightning-favicon-pwa-512px.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '48x48',
        url: '/images/favicon package/lightning-favicon-windows-48px.png'
      }
    ]
  }
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
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
