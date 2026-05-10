import Link from "next/link";
import { Mail, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white py-16" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2 font-semibold text-slate-900">
              <span className="text-blue-600" aria-hidden="true">◆</span>
              <span>Platforma</span>
            </div>
            <p className="text-sm text-slate-600">
              Nowoczesna platforma telemedyczna umożliwiająca szybki i bezpieczny
              dostęp do konsultacji zdrowotnych bez wychodzenia z domu.
            </p>
          </div>

          {/* Services */}
          <nav aria-label="Usługi">
            <h4 className="mb-4 text-sm font-semibold text-slate-900">
              Usługi
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/baza-wiedzy" className="hover:text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">Baza wiedzy</Link></li>
              <li><Link href="/jak-to-dziala" className="hover:text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">Konsultacja lekarska</Link></li>
              <li><Link href="/consultation" className="hover:text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">Konsultacja online</Link></li>
            </ul>
          </nav>

          {/* Support */}
          <nav aria-label="Wsparcie">
            <h4 className="mb-4 text-sm font-semibold text-slate-900">
              Wsparcie
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/jak-to-dziala" className="hover:text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">FAQ</Link></li>
              <li><Link href="/baza-wiedzy" className="hover:text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">Baza wiedzy</Link></li>
              <li><a href="#" className="hover:text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">Polityka prywatności</a></li>
              <li><a href="#" className="hover:text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">Regulamin</a></li>
            </ul>
          </nav>


        </div>

        <div className="mt-12 border-t border-stone-200 pt-6 text-center text-xs text-slate-500">
          © 2024 Platforma. Wszystkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
