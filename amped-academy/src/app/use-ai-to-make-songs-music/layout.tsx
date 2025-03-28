import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI-Powered Music Tools | Amped Academy",
  description: "Enhance your music learning and creation with Amped Academy's cutting-edge AI tools for composition, practice, performance analysis, and more.",
  keywords: ["music AI tools", "AI composition tools", "AI music education", "machine learning in music", "AI-powered music practice"],
};

export default function AIToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 