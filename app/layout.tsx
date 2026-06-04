// app/layout.tsx
import { Inter } from "next/font/google";
import './globals.css';
import SkipLink from '@/components/SkipLink';
import PWARegistration from "@/components/PWARegistration";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: 'Lekarze i terapeuci - Konsultacje online bez wychodzenia z domu',
  description: 'Nowoczesna platforma telemedyczna umożliwiająca szybki i bezpieczny dostęp do profesjonalnych konsultacji zdrowotnych bez wychodzenia z domu.',
  manifest: '/manifest.json',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <ScrollToTop />
        <PWARegistration />
        <SkipLink />
        {children}
      </body>
    </html>
  );
}

