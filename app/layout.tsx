import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Syne, Space_Grotesk, DM_Sans } from 'next/font/google';
import Sidebar from '@/components/layout/Sidebar';
import TopBar from '@/components/layout/TopBar';
import CommandBar from '@/components/command/CommandBar';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-syne',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'UNIFLOW — Student Portal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${syne.variable} ${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden" style={{ background: 'var(--uniflow-bg)' }}>
          <TopBar />
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
        <CommandBar />
      </body>
    </html>
  );
}
