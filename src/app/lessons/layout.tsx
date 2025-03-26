import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lee Fretmap Lessons | Amped Academy',
  description: 'Detailed lessons and guide for using Lee Fretmap stickers to learn guitar faster and more effectively.',
  keywords: 'Lee Fretmap lessons, guitar learning guide, fretboard stickers guide',
};

export default function LessonsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 