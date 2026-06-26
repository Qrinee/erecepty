import Link from "next/link";
import {
  Shield, Users, Zap, Clock, Heart, Lock, ShieldCheck,
  Phone, Mail, MessageSquare, Facebook, Instagram, Youtube, ChevronRight
} from "lucide-react";

export default function Footer() {
  const benefits = [
    {
      icon: Shield,
      title: "Bezpieczeństwo",
      desc: "RODO, szyfrowanie i pełna ochrona danych"
    },
    {
      icon: Users,
      title: "Lekarze z PWZ",
      desc: "Zawsze licencjonowani specjaliści z doświadczeniem"
    },
    {
      icon: Zap,
      title: "Szybka realizacja",
      desc: "Nawet w 15 minut od złożenia formularza"
    },
    {
      icon: Clock,
      title: "Dostęp 24/7",
      desc: "Jesteśmy zawsze dostępni dla Ciebie"
    },
    {
      icon: Heart,
      title: "Wynik gwarancja",
      desc: "Zadowolenie naszych pacjentów"
    },
  ];

  return (
    <footer className="bg-[#030d1a] text-slate-300 py-16 relative overflow-hidden" role="contentinfo">
      <div className="w-full px-4 sm:px-8 xl:px-16 relative z-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-[#08182d]/40 border border-slate-800/40 hover:border-[#147A60]/30 rounded-2xl p-6 text-center flex flex-col items-center justify-center transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#147A60]/10 text-[#00E19D] flex items-center justify-center mb-4 filter drop-shadow-[0_0_8px_rgba(0,225,157,0.25)] transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-white font-extrabold text-[15px] mb-1.5">{benefit.title}</h4>
                <p className="text-slate-400 text-xs font-semibold leading-relaxed max-w-[170px]">{benefit.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="w-full h-px bg-slate-800/50 mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">

          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center gap-2">
              <img src="/logo.png" alt="Lekarze i Terapeuci" className="h-30 w-auto object-contain brightness-110" />
            </div>
            <p className="text-[13px] text-slate-400 font-semibold leading-relaxed mb-4 max-w-sm">
              Nowoczesna platforma telemedyczna z dostępem do konsultacji zdrowotnych bez wychodzenia z domu.
            </p>
            <p className="text-[11px] text-slate-500 font-medium leading-relaxed mb-6 max-w-sm">
              Podmiot leczniczy wpisany do Rejestru podmiotów wykonujących działalność leczniczą pod numerem: 000000305622
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                <Lock className="w-4 h-4 text-[#00E19D]" />
                <span>100% bezpieczne płatności</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#00E19D]" />
                <span>Zgodne z polskim prawem</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                <Users className="w-4 h-4 text-[#00E19D]" />
                <span>Ponad 50 000 zadowolonych pacjentów</span>
              </div>
            </div>
          </div>

          <nav aria-label="Usługi" className="flex flex-col">
            <h4 className="text-white font-extrabold text-sm mb-6 uppercase tracking-wider">Usługi</h4>
            <ul className="space-y-3.5 text-xs sm:text-[13px] font-bold text-slate-400">
              <li>
                <Link href="/wypelnij-formularz?service=e-Recepta+online" className="hover:text-white transition flex items-center justify-between group py-0.5">
                  <span>e-Recepta online</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#147A60] opacity-80 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </li>
              <li>
                <Link href="/wypelnij-formularz?service=L4+online" className="hover:text-white transition flex items-center justify-between group py-0.5">
                  <span>L4 online</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#147A60] opacity-80 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </li>
              <li>
                <Link href="/wypelnij-formularz" className="hover:text-white transition flex items-center justify-between group py-0.5">
                  <span>Konsultacja online</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#147A60] opacity-80 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </li>
              <li>
                <Link href="/wypelnij-formularz" className="hover:text-white transition flex items-center justify-between group py-0.5">
                  <span>Kontynuacja leczenia</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#147A60] opacity-80 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Firma" className="flex flex-col">
            <h4 className="text-white font-extrabold text-sm mb-6 uppercase tracking-wider">Firma</h4>
            <ul className="space-y-3.5 text-xs sm:text-[13px] font-bold text-slate-400">
              <li><Link href="/jak-to-dziala" className="hover:text-white transition block py-0.5">Jak to działa</Link></li>
              <li><Link href="/baza-wiedzy" className="hover:text-white transition block py-0.5">Baza wiedzy</Link></li>
              <li><Link href="/dla-lekarzy" className="hover:text-white transition block py-0.5">Dla lekarzy</Link></li>
              <li><Link href="/dla-firm" className="hover:text-white transition block py-0.5">Dla firm</Link></li>
              <li><Link href="/dla-kobiet-i-mezczyzn" className="hover:text-white transition block py-0.5">Dla kobiet i mężczyzn</Link></li>
            </ul>
          </nav>

          <nav aria-label="Prawne" className="flex flex-col">
            <h4 className="text-white font-extrabold text-sm mb-6 uppercase tracking-wider">Prawne</h4>
            <ul className="space-y-3.5 text-xs sm:text-[13px] font-bold text-slate-400">
              <li><Link href="/polityka-prywatnosci" className="hover:text-white transition block py-0.5">Regulamin Organizacyjny</Link></li>
              <li><Link href="/regulamin" className="hover:text-white transition block py-0.5">Regulamin</Link></li>
              <li><Link href="/polityka-cookies" className="hover:text-white transition block py-0.5">Polityka Prywatności</Link></li>
              <li><Link href="/warunki-umowy" className="hover:text-white transition block py-0.5">Pliki Cookies</Link></li>
            </ul>
          </nav>

          <div className="flex flex-col">
            <h4 className="text-white font-extrabold text-sm mb-6 uppercase tracking-wider">Kontakt</h4>
            <div className="space-y-5">

              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-[#147A60]/10 text-[#00E19D] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-left leading-tight">
                  <a href="tel:+48881238227" className="text-[13px] font-extrabold text-white hover:text-[#00E19D] transition">+48 881 238 227</a>
                  <div className="text-[10px] text-slate-400 font-bold mt-1">Pon-Pt 8:00–20:00</div>
                  <div className="text-[10px] text-slate-400 font-bold">Sb-Nd 9:00–18:00</div>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-[#147A60]/10 text-[#00E19D] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-left leading-tight">
                  <a href="mailto:kontakt@lekarzeiterapeuci.pl" className="text-[13px] font-extrabold text-white hover:text-[#00E19D] transition">kontakt@lekarzeiterapeuci.pl</a>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-[#147A60]/10 text-[#00E19D] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="text-left leading-tight">
                  <Link href="#kontakt" className="text-[13px] font-extrabold text-white hover:text-[#00E19D] transition">Czat na żywo</Link>
                  <div className="text-[10px] text-slate-400 font-bold mt-1">Dostępny 24/7</div>
                </div>
              </div>

            </div>
          </div>

        </div>
        <div className="w-full h-px bg-slate-800/50 mb-8"></div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-2">

          <p className="text-xs text-slate-400 font-bold order-3 lg:order-1 text-center lg:text-left">
            © Lekarze i Terapeuci. Wszelkie prawa zastrzeżone.
          </p>

          <div className="w-full max-w-[420px] flex items-center gap-2 order-1 lg:order-2">
            <div className="relative flex-grow">
              <input
                type="email"
                placeholder="Wpisz email..."
                className="bg-[#0B1E36]/30 border border-slate-800/80 text-slate-200 placeholder-slate-500 rounded-full px-5 py-2.5 text-xs md:text-sm w-full focus:outline-none focus:border-[#147A60] transition-colors font-bold"
              />
            </div>
            <button className="bg-[#147A60] hover:bg-[#064743] text-white px-5 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-extrabold transition-colors flex items-center gap-1.5 flex-shrink-0 cursor-pointer shadow-md shadow-emerald-800/10">
              <span>Zapisz się</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-3 order-2 lg:order-3">
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-[#0B1E36]/50 border border-slate-800 text-slate-400 hover:text-white hover:border-[#147A60]/30 hover:bg-[#147A60]/10 transition flex items-center justify-center cursor-pointer"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/lekarzeiterapeuci.pl?igsh=MWx0ZW16YmR4NWkxYw=="
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-[#0B1E36]/50 border border-slate-800 text-slate-400 hover:text-white hover:border-[#147A60]/30 hover:bg-[#147A60]/10 transition flex items-center justify-center cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}