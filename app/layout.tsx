// app/layout.tsx
import { Inter } from "next/font/google";
import './globals.css';
import SkipLink from '@/components/SkipLink';

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: 'E-Recepta.pl - Recepta online bez wychodzenia z domu',
  description: 'Nowoczesna platforma telemedyczna umożliwiająca szybki i bezpieczny dostęp do e-recept bez wychodzenia z domu.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
