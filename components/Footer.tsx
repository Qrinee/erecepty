import { Mail, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white py-16" role="contentinfo">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2 font-semibold text-slate-900">
              <span className="text-blue-600" aria-hidden="true">◆</span>
              <span>E-Recepta PL</span>
            </div>
            <p className="text-sm text-slate-600">
              Nowoczesna platforma telemedyczna umożliwiająca szybki i bezpieczny
              dostęp do e-recept bez wychodzenia z domu.
            </p>
          </div>

          {/* Services */}
          <nav aria-label="Usługi">
            <h4 className="mb-4 text-sm font-semibold text-slate-900">
              Usługi
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">E-Recepta online</a></li>
              <li><a href="#" className="hover:text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">Konsultacja lekarska</a></li>
              <li><a href="#" className="hover:text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">Przedłużenie leków</a></li>
              <li><a href="#" className="hover:text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">Cennik</a></li>
            </ul>
          </nav>

          {/* Support */}
          <nav aria-label="Wsparcie">
            <h4 className="mb-4 text-sm font-semibold text-slate-900">
              Wsparcie
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">Baza wiedzy</a></li>
              <li><a href="#" className="hover:text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">Polityka prywatności</a></li>
              <li><a href="#" className="hover:text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">Regulamin</a></li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-900">
              Kontakt
            </h4>
            <address className="not-italic space-y-3 text-sm text-slate-600">
              <li className="flex items-center gap-2 list-none">
                <Mail size={16} aria-hidden="true" />
                <a href="mailto:kontakt@e-recepta.pl" className="hover:text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">
                  kontakt@e-recepta.pl
                </a>
              </li>
              <li className="flex items-center gap-2 list-none">
                <Phone size={16} aria-hidden="true" />
                <a href="tel:+48123456789" className="hover:text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">
                  +48 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-2 list-none">
                <Clock size={16} aria-hidden="true" />
                <span>Codziennie 08:00 – 22:00</span>
              </li>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-stone-200 pt-6 text-center text-xs text-slate-500">
          © 2024 E-Recepta PL. Wszystkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
