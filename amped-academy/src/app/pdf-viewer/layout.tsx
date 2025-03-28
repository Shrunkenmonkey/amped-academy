import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lee Fretmap PDF Guide | Amped Academy',
  description: 'View the comprehensive Lee Fretmap guitar learning guide in our interactive PDF viewer.',
  keywords: 'Lee Fretmap PDF, guitar learning guide, fretboard stickers manual, guitar instruction PDF',
};

export default function PDFViewerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 