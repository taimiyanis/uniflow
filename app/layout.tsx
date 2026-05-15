import type { Metadata } from 'next';
import { Nunito, Syne } from 'next/font/google';
import Sidebar from '@/components/layout/Sidebar';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-nunito',
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
    <html lang="en" className={`${nunito.variable} ${syne.variable}`}>
      <body className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto px-9 py-8" style={{ background: 'var(--uniflow-bg)' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
