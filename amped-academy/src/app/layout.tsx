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
      { url: '/images/favicon-package/lightning-favicon-windows-48px.png', type: 'image/png' },
      { url: '/images/favicon-package/lightning-favicon-android-192px.png', type: 'image/png', sizes: '192x192' },
      { url: '/images/favicon-package/lightning-favicon-pwa-512px.png', type: 'image/png', sizes: '512x512' }
    ],
    shortcut: '/images/favicon-package/lightning-favicon-windows-48px.png',
    apple: '/images/favicon-package/lightning-favicon-apple-180px.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/images/favicon-package/lightning-favicon-android-192px.png',
      }
    ]
  },
  manifest: '/manifest.json',
  themeColor: '#1e1b4b',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Amped Academy'
  },
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
        <link rel="icon" type="image/png" sizes="48x48" href="/images/favicon-package/lightning-favicon-windows-48px.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/favicon-package/lightning-favicon-android-192px.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/images/favicon-package/lightning-favicon-pwa-512px.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon-package/lightning-favicon-apple-180px.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e1b4b" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
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
