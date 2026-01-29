import { Mail, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2 font-semibold text-slate-900">
              <span className="text-blue-600">◆</span>
              E-Recepta PL
            </div>
            <p className="text-sm text-slate-500">
              Nowoczesna platforma telemedyczna umożliwiająca szybki i bezpieczny
              dostęp do e-recept bez wychodzenia z domu.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-900">
              Usługi
            </h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>E-Recepta online</li>
              <li>Konsultacja lekarska</li>
              <li>Przedłużenie leków</li>
              <li>Cennik</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-900">
              Wsparcie
            </h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>FAQ</li>
              <li>Baza wiedzy</li>
              <li>Polityka prywatności</li>
              <li>Regulamin</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-slate-900">
              Kontakt
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex items-center gap-2">
                <Mail size={16} /> kontakt@e-recepta.pl
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> +48 123 456 789
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} /> Codziennie 08:00 – 22:00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-stone-200 pt-6 text-center text-xs text-slate-400">
          © 2024 E-Recepta PL. Wszystkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
