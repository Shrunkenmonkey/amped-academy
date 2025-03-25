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
  description: "Amped Academy presents the Lee Fretmap visual learning system. Transform your guitar playing with color-coded fretboard stickers to master scales, chords, and modes.",
  keywords: ["guitar learning", "fretmap", "music education", "scales", "chords", "modes"],
  authors: [{ name: "Amped Academy" }],
  icons: {
    icon: [
      { url: '/images/favicon package/favicon package/lightning-favicon windows 48px.png', sizes: '48x48', type: 'image/png' },
      { url: '/images/favicon package/favicon package/lightning-favicon pwa 512px.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [
      { url: '/images/favicon package/favicon package/lightning-favicon apple 180px.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/images/favicon package/favicon package/lightning-favicon pwa 512px.png' }
    ]
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Amped Academy'
  },
  applicationName: 'Amped Academy',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
