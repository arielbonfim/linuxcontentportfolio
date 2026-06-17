import type { Metadata } from 'next';
import { JetBrains_Mono, Roboto } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ariel Bonfim | Linux Video Editor & Writer',
  description:
    'Video editor and writer with 3+ years at Diolinux — the largest Linux and open source media outlet in Brazil. Nearly 200 edited videos, 2,500+ published articles. I daily drive Linux Mint.',
  keywords: ['Linux video editor', 'Diolinux', 'open source content', 'video editing', 'DaVinci Resolve'],
  openGraph: {
    title: 'Ariel Bonfim | Linux Video Editor & Writer',
    description: 'Your Linux content, edited by someone who actually runs Linux.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ariel Bonfim | Linux Video Editor & Writer',
    description: 'Your Linux content, edited by someone who actually runs Linux.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
