"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ShieldCheck,
  CalendarDays,
  User,
  FileText,
  CheckCircle2,
  ChevronDown,
  Headset,
  Calendar,
  Lock,
  ArrowRight,
  CreditCard,
  Mail,
  Stethoscope,
  Info,
  Building,
  Smartphone,
  Percent,
  CircleDollarSign,
  Apple,
  Wallet,
  Phone,
  MessageSquare,
  Clock,
  Monitor
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ArticlePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "Czy muszę płacić przed konsultacją?", a: "Tak, płatność pobierana jest przed rozpoczęciem konsultacji. Dzięki temu lekarz ma pewność, że termin jest zarezerwowany specjalnie dla Ciebie, a Ty od razu po wypełnieniu formularza możesz oczekiwać na kontakt ze specjalistą." },
    { q: "Czy mogę otrzymać fakturę za konsultację?", a: "Tak, pod koniec procesu rezerwacji możesz podać dane do faktury. Faktura zostanie przesłana automatycznie na Twój adres e-mail po opłaceniu usługi." },
    { q: "Czy płatność jest bezpieczna?", a: "Wszystkie płatności są realizowane przez certyfikowanych, zewnętrznych operatorów płatności. Nie przechowujemy danych Twoich kart płatniczych ani danych logowania do banku." },
    { q: "Czy mogę anulować wizytę i otrzymać zwrot?", a: "Zgodnie z naszym regulaminem, wizytę można odwołać i otrzymać pełny zwrot środków, jeśli anulacja nastąpi na określony czas przed umówionym terminem konsultacji." },
    { q: "Czy są dodatkowe opłaty?", a: "Nie, cena widoczna przed płatnością jest kwotą ostateczną. Nie ponosisz żadnych dodatkowych kosztów (np. za wystawienie recepty, L4, czy wysłanie SMS-a z kodem)." },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow pt-8 pb-16 px-4 sm:px-8 xl:px-16 max-w-[90vw] mx-auto w-full">

        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8 flex-wrap">
          <Link href="/" className="hover:text-slate-800 transition-colors  flex items-center">Strona główna</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <Link href="/baza-wiedzy" className="hover:text-slate-800 transition-colors  flex items-center">Baza wiedzy</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <Link href="/baza-wiedzy?kategoria=platnosci" className="hover:text-slate-800 transition-colors  flex items-center">Płatności</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <span className="text-slate-800">Jak wygląda płatność za konsultację?</span>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="flex-1 space-y-6">
            <span className="inline-block bg-[#EAF3F0] text-[#147A60] px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
              PŁATNOŚCI
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
              Jak wygląda płatność<br /> za konsultację?
            </h1>
            <p className="text-slate-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mb-8">
              Płatność za konsultację online jest szybka, wygodna i w pełni bezpieczna. Zawsze dokonujesz jej przed konsultacją - bez ukrytych opłat.
            </p>

            <div className="flex flex-wrap gap-3.5 pt-2">
              <div className="inline-flex items-center gap-2 bg-[#F5FAF9] text-slate-700 text-sm sm:text-base font-semibold px-5 py-2.5 rounded-full border border-[#DAE9E6]/60 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#147A60] stroke-[2]" /> Szybko i bezpiecznie
              </div>
              <div className="inline-flex items-center gap-2 bg-[#F5FAF9] text-slate-700 text-sm sm:text-base font-semibold px-5 py-2.5 rounded-full border border-[#DAE9E6]/60 shadow-sm">
                <Lock className="w-5 h-5 text-[#147A60] stroke-[2]" /> Ochrona danych
              </div>
              <div className="inline-flex items-center gap-2 bg-[#F5FAF9] text-slate-700 text-sm sm:text-base font-semibold px-5 py-2.5 rounded-full border border-[#DAE9E6]/60 shadow-sm">
                <CreditCard className="w-5 h-5 text-[#147A60] stroke-[2]" /> Różne metody płatności
              </div>
              <div className="inline-flex items-center gap-2 bg-[#F5FAF9] text-slate-700 text-sm sm:text-base font-semibold px-5 py-2.5 rounded-full border border-[#DAE9E6]/60 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#147A60] stroke-[2]" /> Szyfrowane połączenie
              </div>
            </div>

            <div className="text-xs sm:text-sm text-slate-400 font-medium pt-6 flex items-center gap-2">
              <CalendarDays className="w-4 h-4" /> Ostatnia aktualizacja: 22.05.2024
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="relative w-full  max-w-[620px] aspect-[4/3] rounded-2xl overflow-hidden">
              <img src="/bazawiedzy/3.png" alt="Płatność za konsultację" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Main Column */}
          <div className="lg:col-span-8 space-y-16">

            {/* Step by step */}
            <section>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 pb-4 border-b border-slate-100">Kiedy pobierana jest płatność?</h2>
              <p className="text-slate-600 text-base sm:text-lg mb-10 leading-relaxed max-w-3xl">Płatność zawsze pobierana jest z góry, przed rozpoczęciem konsultacji lekarskiej.</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: FileText, title: "1. Wypełniasz formularz", desc: "Podajesz dane i odpowiadasz na pytania o zdrowie." },
                  { icon: CreditCard, title: "2. Dokonujesz opłaty", desc: "Wybierasz metodę płatności i opłacasz wizytę." },
                  { icon: Stethoscope, title: "3. Lekarz weryfikuje", desc: "Po zaksięgowaniu wpłaty, formularz trafia do lekarza." }
                ].map((s, i) => (
                  <div key={i} className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-sm flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#F5FAF9] text-[#147A60] flex items-center justify-center mb-6 shadow-sm border border-[#DAE9E6]">
                      <s.icon className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-base sm:text-lg mb-3">{s.title}</h4>
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Methods */}
            <section>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 pb-4 border-b border-slate-100">Dostępne metody płatności</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "BLIK", desc: "Najszybsza i najpopularniejsza metoda płatności. Wpisz kod i zatwierdź w aplikacji bankowej." },
                  { title: "Przelewy24 (PayU / Tpay)", desc: "Szybki przelew internetowy. Zostaniesz przekierowany do swojego banku." },
                  { title: "Karta płatnicza", desc: "Możesz zapłacić kartą Visa lub Mastercard, podając jej dane." },
                  { title: "Apple Pay / Google Pay", desc: "Zapłać błyskawicznie korzystając z portfela w swoim telefonie." }
                ].map((m, i) => (
                  <div key={i} className="flex gap-4 p-6 border border-slate-100 rounded-[2rem] bg-white shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-[#F5FAF9] border border-[#DAE9E6] flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-[#147A60]" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-base sm:text-lg mb-1">{m.title}</h4>
                      <p className="text-sm sm:text-base text-slate-500 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-8 pb-4 border-b border-slate-100">Najczęściej zadawane pytania</h2>
              <div className="space-y-0 border-t border-slate-100">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-slate-100">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full py-6 flex items-center justify-between text-left focus:outline-none hover:bg-slate-50 px-4 rounded-xl transition-colors"
                    >
                      <span className="font-extrabold text-base sm:text-lg text-slate-900 pr-4">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform flex-shrink-0 ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    {openFaq === i && (
                      <div className="pb-6 pt-2 px-4 pr-8">
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">

            <div className="bg-[#F8FAF9] rounded-2xl p-6">
              <h3 className="font-extrabold text-slate-900 mb-6 text-lg sm:text-xl">W tej kategorii</h3>
              <div className="space-y-1">
                {[
                  { icon: FileText, label: "E-recepty", href: "/baza-wiedzy?kategoria=e-recepty", active: false },
                  { icon: FileText, label: "L4 online", href: "/baza-wiedzy?kategoria=l4-online", active: false },
                  { icon: FileText, label: "Skierowania", href: "/baza-wiedzy?kategoria=skierowania", active: false },
                  { icon: ShieldCheck, label: "Antykoncepcja online", href: "/baza-wiedzy?kategoria=antykoncepcja-online", active: false },
                  { icon: Phone, label: "Telekonsultacje", href: "/baza-wiedzy?kategoria=telekonsultacje", active: false },
                  { icon: Wallet, label: "Płatności", href: "/baza-wiedzy?kategoria=platnosci", active: true },
                  { icon: MessageSquare, label: "Poradniki pacjenta", href: "/baza-wiedzy?kategoria=poradniki-pacjenta", active: false },
                ].map((cat, i) => (
                  <Link key={i} href={cat.href || "#"} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm sm:text-base transition-colors ${cat.active ? "bg-white text-[#147A60] font-bold border border-[#EAF3F0] shadow-sm" : "text-slate-600 font-semibold hover:bg-white hover:text-slate-900 border border-transparent"}`}>
                    <cat.icon className={`w-4 h-4 ${cat.active ? "text-[#147A60]" : "text-slate-400"}`} /> {cat.label}
                  </Link>
                ))}
              </div>
              <Link href="/baza-wiedzy" className="mt-4 w-full py-2.5 border border-slate-200 bg-white rounded-lg text-sm sm:text-base font-bold text-slate-700 flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors">
                Zobacz wszystkie <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Popular Articles */}
            <div className="p-2">
              <h3 className="font-extrabold text-slate-900 mb-6 text-lg sm:text-xl">Popularne artykuły</h3>
              <div className="space-y-5">
                {[
                  { icon: Smartphone, title: "Czy lekarz online może wystawić receptę?", href: "/baza-wiedzy/czy-lekarz-online-moze-wystawic-recepte" },
                  { icon: ShieldCheck, title: "Czy mogę przedłużyć stałe leki bez wizyty stacjonarnej?", href: "/baza-wiedzy/czy-moge-przedluzyc-stale-leki" },
                  { icon: Monitor, title: "Jak skonsultować wynik badań?" },
                  { icon: CreditCard, title: "Jak uzyskać antykoncepcję online?", href: "/baza-wiedzy/jak-uzyskac-antykoncepcje-online" }
                ].map((art, i) => (
                  <Link key={i} href={art.href || "#"} className="flex gap-4 items-center group">
                    <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <art.icon className="w-6 h-6 text-[#147A60] stroke-[1.5]" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-700 group-hover:text-[#147A60] transition-colors leading-snug">{art.title}</h4>
                  </Link>
                ))}
              </div>
              <Link href="/baza-wiedzy" className="mt-6 w-full py-2.5 border border-slate-200 bg-white rounded-lg text-sm sm:text-base font-bold text-slate-700 flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors">
                Zobacz wszystkie <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Contact Box */}
            <div className="bg-[#EAF3F0] rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#064743] text-white rounded-xl flex items-center justify-center mb-5">
                <Headset className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 mb-2 text-lg sm:text-xl">Masz pytania?</h3>
              <p className="text-sm sm:text-base font-medium text-slate-600 mb-6">Nasz zespół chętnie pomoże i odpowie na Twoje pytania.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm sm:text-base font-bold text-slate-700"><CheckCircle2 className="w-4 h-4 text-[#147A60]" /> Szybka odpowiedź</li>
                <li className="flex items-center gap-2 text-sm sm:text-base font-bold text-slate-700"><CheckCircle2 className="w-4 h-4 text-[#147A60]" /> Pomoc w doborze usługi</li>
                <li className="flex items-center gap-2 text-sm sm:text-base font-bold text-slate-700"><CheckCircle2 className="w-4 h-4 text-[#147A60]" /> Bezpieczny kontakt</li>
              </ul>
              <Link href="/#kontakt" className="w-full py-3 bg-[#064743] hover:bg-slate-900 text-white rounded-lg text-sm sm:text-base font-bold flex items-center justify-center gap-2 transition-colors">
                Skontaktuj się z nami <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </main>

      {/* Bottom Banner Full Width */}
      <div className="w-full bg-[#E8F3F1]/40 border-t border-b border-[#DAE9E6]/60 py-16 mt-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white border border-[#DAE9E6] rounded-2xl shadow-sm flex items-center justify-center hidden sm:flex shrink-0">
              <Calendar className="w-8 h-8 text-[#147A60]" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-2">Opłać bezpiecznie i uzyskaj pomoc</h3>
              <p className="text-base sm:text-lg text-slate-600">Szybka konsultacja medyczna w kilku prostych krokach.</p>
            </div>
          </div>
          <Link href="/wypelnij-formularz" className="bg-[#064743] hover:bg-slate-900 text-white px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-3 transition-colors shrink-0 shadow-md">
            Wypełnij formularz medyczny <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Feature strip at the very bottom */}
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex gap-5">
            <div className="w-12 h-12 rounded-full bg-[#F5FAF9] border border-[#DAE9E6] flex items-center justify-center shrink-0"><User className="w-6 h-6 text-[#147A60]" /></div>
            <div>
              <h5 className="font-extrabold text-base sm:text-lg text-slate-900 mb-1">Bez kolejek</h5>
              <p className="text-sm sm:text-base text-slate-500 leading-snug">Konsultujesz się bez wychodzenia z domu</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-12 h-12 rounded-full bg-[#F5FAF9] border border-[#DAE9E6] flex items-center justify-center shrink-0"><Clock className="w-6 h-6 text-[#147A60]" /></div>
            <div>
              <h5 className="font-extrabold text-base sm:text-lg text-slate-900 mb-1">Szybka obsługa</h5>
              <p className="text-sm sm:text-base text-slate-500 leading-snug">Sprawna weryfikacja płatności</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-12 h-12 rounded-full bg-[#F5FAF9] border border-[#DAE9E6] flex items-center justify-center shrink-0"><ShieldCheck className="w-6 h-6 text-[#147A60]" /></div>
            <div>
              <h5 className="font-extrabold text-base sm:text-lg text-slate-900 mb-1">Certyfikowani lekarze</h5>
              <p className="text-sm sm:text-base text-slate-500 leading-snug">Specjaliści z doświadczeniem</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="w-12 h-12 rounded-full bg-[#F5FAF9] border border-[#DAE9E6] flex items-center justify-center shrink-0"><Lock className="w-6 h-6 text-[#147A60]" /></div>
            <div>
              <h5 className="font-extrabold text-base sm:text-lg text-slate-900 mb-1">Bezpieczne płatności</h5>
              <p className="text-sm sm:text-base text-slate-500 leading-snug">Szybkie płatności online i ochrona danych</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
