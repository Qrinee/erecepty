import Link from "next/link";
import { Shield, Users, Zap, Clock, Heart } from "lucide-react";

export default function Footer() {
  const benefits = [
    { icon: Shield, title: "Bezpieczenstw", desc: "RODO, szyfrowanie" },
    { icon: Users, title: "Lekarze z PWZ", desc: "Zawsze licencjonowani specjaliści" },
    { icon: Zap, title: "Szybka realizacja", desc: "Nawet w 15 minut" },
    { icon: Clock, title: "Dostęp 24/7", desc: "Jesteśmy zawsze dostępni" },
    { icon: Heart, title: "Wynik gwarancja", desc: "Zadowoleni pacjenci" },
  ];

  return (
    <footer className="bg-slate-900 text-white py-12" role="contentinfo">
      {/* Benefits row */}
      <div className="border-t border-b border-slate-800 py-8 mb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="text-center flex flex-col items-center">
                  <Icon className="w-8 h-8 text-[#1A5D54] mb-2" />
                  <h4 className="font-bold text-sm mb-1">{benefit.title}</h4>
                  <p className="text-xs text-slate-400">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-4 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2 font-semibold text-white">
              <div className="w-6 h-6 bg-[#064743] rotate-45 rounded-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-sm" />
              </div>
              <span>Platforma</span>
            </div>
            <p className="text-sm text-slate-400">
              Nowoczesna platforma telemedyczna z dostępem do konsultacji zdrowotnych bez wychodzenia z domu.
            </p>
          </div>

          {/* Services */}
          <nav aria-label="Usługi">
            <h4 className="mb-4 text-sm font-bold text-white">Usługi</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/consultation" className="hover:text-[#1A5D54] transition">e-Recepta online</Link></li>
              <li><Link href="/medical-leave" className="hover:text-[#1A5D54] transition">L4 online</Link></li>
              <li><Link href="/consultation" className="hover:text-[#1A5D54] transition">Konsultacja online</Link></li>
              <li><Link href="/consultation" className="hover:text-[#1A5D54] transition">Kontynuacja leczenia</Link></li>
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Firma">
            <h4 className="mb-4 text-sm font-bold text-white">Firma</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/jak-to-dziala" className="hover:text-[#1A5D54] transition">Jak to działa</Link></li>
              <li><Link href="/baza-wiedzy" className="hover:text-[#1A5D54] transition">Baza wiedzy</Link></li>
              <li><a href="#" className="hover:text-[#1A5D54] transition">O nas</a></li>
              <li><a href="#" className="hover:text-[#1A5D54] transition">Praca</a></li>
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Prawne">
            <h4 className="mb-4 text-sm font-bold text-white">Prawne</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-[#1A5D54] transition">Polityka prywatności</a></li>
              <li><a href="#" className="hover:text-[#1A5D54] transition">Regulamin</a></li>
              <li><a href="#" className="hover:text-[#1A5D54] transition">Polityka cookies</a></li>
              <li><a href="#" className="hover:text-[#1A5D54] transition">Warunki umowy</a></li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-slate-400">© 2024 Platforma. Wszystkie prawa zastrzeżone.</p>
          <input
            type="email"
            placeholder="Wpisz email..."
            className="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm mt-4 md:mt-0 focus:outline-none focus:ring-2 focus:ring-[#DAE9E6]/50"
          />
          <button className="bg-[#064743] text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-[#1A5D54] transition ml-2 mt-4 md:mt-0">
            Zaloguj się
          </button>
        </div>
      </div>
    </footer>
  );
}