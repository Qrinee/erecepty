// app/layout.tsx
import { Inter } from "next/font/google";
import './globals.css';
import SkipLink from '@/components/SkipLink';

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: 'Lekarze i terapeuci - Konsultacje online bez wychodzenia z domu',
  description: 'Nowoczesna platforma telemedyczna umożliwiająca szybki i bezpieczny dostęp do profesjonalnych konsultacji zdrowotnych bez wychodzenia z domu.',
  icons: {
    icon: [
      { url: '/logo.png', sizes: 'any' }
    ],
  },
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
