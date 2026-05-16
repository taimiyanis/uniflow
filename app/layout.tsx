import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Syne } from 'next/font/google';
import Sidebar from '@/components/layout/Sidebar';
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

export const metadata: Metadata = {
  title: 'UNIFLOW — Student Portal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${syne.variable}`}>
      <body className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto px-9 py-8" style={{ background: 'var(--uniflow-bg)' }}>
          {children}
        </main>
        <CommandBar />
      </body>
    </html>
  );
}
