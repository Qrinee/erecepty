"use client";

import Link from "next/link";
import { useState } from "react";
import {
  CheckCircle,
  Clock,
  ShieldCheck,
  UserCheck,
  ChevronRight,
  ChevronDown,
  Pill,
  FileText,
  Stethoscope,
  Lock,
  CreditCard,
  FileSignature
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function OnlineConsultationsClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Jak działa konsultacja online?",
      a: "Wybierasz usługę, wypełniasz formularz medyczny i kontaktujesz się z lekarzem bez wychodzenia z domu. Lekarz analizuje informacje i udziela konsultacji online.",
      icon: UserCheck
    },
    {
      q: "Czy konsultacja jest legalna?",
      a: "Tak, wszystkie e-wizyty i e-recepty w Polsce są w pełni legalne i regulowane odpowiednimi przepisami Ministerstwa Zdrowia.",
      icon: FileSignature
    },
    {
      q: "Czy lekarz może wystawić receptę?",
      a: "Tak, na podstawie wywiadu lekarskiego specjalista ma prawo wystawić e-receptę na potrzebne leki stałe lub doraźne.",
      icon: Pill
    },
    {
      q: "Ile trwa konsultacja?",
      a: "Średni czas weryfikacji i wdrożenia decyzji przez lekarza wynosi około 15 minut od momentu przesłania formularza medycznego.",
      icon: Clock
    },
    {
      q: "Jak wygląda płatność?",
      a: "Płatność odbywa się bezpiecznie online przy użyciu systemów BLIK, karty płatniczej lub szybkiego przelewu internetowego bezpośrednio po wypełnieniu wywiadu.",
      icon: CreditCard
    },
    {
      q: "Czy moje dane są bezpieczne?",
      a: "Tak, całe połączenie i przesył danych są szyfrowane certyfikatem SSL. Twoje dane medyczne są ściśle chronione zgodnie z wytycznymi RODO.",
      icon: Lock
    }
  ];

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen pt-8 pb-20" id="main-content">
        <div className="w-[80vw] mx-auto px-6">

          {}
          <nav className="mb-14" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-slate-500 font-medium">
              <li><Link href="/" className="hover:text-emerald-700 transition-colors">Strona główna</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li><Link href="/baza-wiedzy" className="hover:text-emerald-700 transition-colors">Baza wiedzy</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li className="text-slate-800 font-semibold truncate">Wszystko o konsultacjach online</li>
            </ol>
          </nav>

          {}
          <section className="mb-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

              {}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                  Wszystko o <br className="hidden lg:block" />konsultacjach online
                </h1>
                <p className="text-slate-600 text-lg md:text-xl mb-0 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Dowiedz się jak działają e-wizyty, recepty online i konsultacje ze specjalistami.
                </p>
              </div>

              {}
              <div className="flex-1 flex justify-center lg:justify-end">
                <img
                  src="/app.png"
                  alt="Makieta telefonu e-konsultacji"
                  className="w-full max-w-[540px] md:max-w-[580px] h-auto object-contain"
                />
              </div>

            </div>
          </section>

          {}
          <section className="mb-24">
            <div className="bg-white rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-50 p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-emerald-700" strokeWidth={1.5} />
                <span className="font-semibold text-slate-700 text-sm md:text-base">Bez kolejek</span>
              </div>
              <div className="hidden md:block w-px h-8 bg-slate-100"></div>
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-emerald-700" strokeWidth={1.5} />
                <span className="font-semibold text-slate-700 text-sm md:text-base">Dostępne 24/7</span>
              </div>
              <div className="hidden md:block w-px h-8 bg-slate-100"></div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-700" strokeWidth={1.5} />
                <span className="font-semibold text-slate-700 text-sm md:text-base">Bezpieczne</span>
              </div>
              <div className="hidden md:block w-px h-8 bg-slate-100"></div>
              <div className="flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-emerald-700" strokeWidth={1.5} />
                <span className="font-semibold text-slate-700 text-sm md:text-base">Certyfikowani lekarze</span>
              </div>
            </div>
          </section>

          {}
          <section className="mb-24">
            <h2 className="text-2xl md:text-[28px] font-bold text-slate-900 mb-8">
              Najczęściej zadawane pytania
            </h2>

            <div className="bg-white border border-slate-100 rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                const IconComponent = faq.icon;
                return (
                  <div key={idx} className="border-b border-slate-100 last:border-b-0">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full flex items-center gap-5 p-6 md:px-8 md:py-6 text-left hover:bg-slate-50/50 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center shrink-0">
                        <IconComponent className="w-6 h-6 text-emerald-700" strokeWidth={1.5} />
                      </div>
                      <span className="flex-1 font-bold text-slate-800 text-base md:text-lg">{faq.q}</span>
                      <span className={`transition-transform duration-300 text-slate-400 ${isOpen ? "rotate-180" : ""}`}>
                        <ChevronDown className="w-5 h-5" />
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 md:px-8 pb-6 pl-[88px] text-slate-600 text-sm md:text-base leading-relaxed animate-fadeIn -mt-2">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {}
          <section>
            <h2 className="text-2xl md:text-[28px] font-bold text-slate-900 mb-8">
              Co możesz otrzymać podczas konsultacji?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 rounded-[1.25rem] border border-slate-100 flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-emerald-700" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-3">e-recepta</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Recepty online na potrzebne leki.</p>
              </div>

              <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 rounded-[1.25rem] border border-slate-100 flex items-center justify-center mb-6">
                  <FileSignature className="w-8 h-8 text-emerald-700" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-3">e-zwolnienie (L4)</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Zwolnienie lekarskie bez wychodzenia z domu.</p>
              </div>

              <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 rounded-[1.25rem] border border-slate-100 flex items-center justify-center mb-6">
                  <Stethoscope className="w-8 h-8 text-emerald-700" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-3">Skierowanie</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Skierowania na badania laboratoryjne i obrazowe.</p>
              </div>

              <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 rounded-[1.25rem] border border-slate-100 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-8 h-8 text-emerald-700" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-3">Zalecenia lekarskie</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Indywidualne zalecenia i plan leczenia.</p>
              </div>

            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
