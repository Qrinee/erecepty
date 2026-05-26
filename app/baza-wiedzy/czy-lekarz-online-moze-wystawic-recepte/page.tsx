"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ShieldCheck,
  Home,
  Clock,
  ThumbsUp,
  CalendarDays,
  User,
  FileText,
  MessageSquare,
  Store,
  CheckCircle2,
  Info,
  MessageSquarePlus,
  Smartphone,
  Laptop,
  ChevronDown,
  Headset,
  Calendar,
  Lock,
  ArrowRight,
  Phone,
  Wallet,
  Monitor,
  CreditCard
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ArticlePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "Czy każdy lekarz online może wystawić receptę?", a: "Tak, lekarz konsultujący pacjenta przez internet ma takie same uprawnienia do wystawienia e-recepty jak podczas wizyty stacjonarnej, o ile przeprowadzony wywiad medyczny to uzasadnia." },
    { q: "Czy e-recepta jest płatna?", a: "Samo wystawienie e-recepty jest częścią płatnej konsultacji medycznej. Nie ponosisz dodatkowych kosztów za sam dokument recepty." },
    { q: "Jak długo jest ważna e-recepta?", a: "Standardowa e-recepta jest ważna 30 dni od daty wystawienia. W niektórych przypadkach (np. antybiotyki) ważność może wynosić 7 dni, a w innych (choroby przewlekłe) do 365 dni." },
    { q: "Czy mogę otrzymać receptę na leki psychotropowe?", a: "Większość platform telemedycznych posiada ograniczenia w wystawianiu leków silnie uzależniających, psychotropowych i narkotycznych. Decyzję zawsze podejmuje lekarz na podstawie dokumentacji." },
    { q: "Czy e-receptę można zrealizować w każdej aptece?", a: "Tak, e-receptę z kodem i numerem PESEL można zrealizować w dowolnej aptece w całej Polsce." },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow pt-8 pb-16 px-4 sm:px-8 xl:px-16 max-w-[90vw] mx-auto w-full">

        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 mb-8 flex-wrap">
          <Link href="/" className="hover:text-slate-800 transition-colors">Strona główna</Link>
          <ChevronRight className="w-4 h-4 text-slate-300" />
          <Link href="/baza-wiedzy" className="hover:text-slate-800 transition-colors">Baza wiedzy</Link>
          <ChevronRight className="w-4 h-4 text-slate-300" />
          <Link href="/baza-wiedzy?kategoria=e-recepty" className="hover:text-slate-800 transition-colors">E-recepty</Link>
          <ChevronRight className="w-4 h-4 text-slate-300" />
          <span className="text-slate-800">Czy lekarz online może wystawić receptę?</span>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="flex-1 space-y-6">
            <span className="inline-block bg-[#EAF3F0] text-[#147A60] px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
              E-RECEPTY
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
              Czy lekarz online może<br /> wystawić receptę?
            </h1>
            <p className="text-slate-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mb-8">
              Tak. Jeśli stan zdrowia pacjenta na to pozwala, lekarz może wystawić e-receptę podczas konsultacji online. To szybkie, bezpieczne i w pełni legalne rozwiązanie.
            </p>

            <div className="flex flex-wrap gap-3.5 pt-2">
              <div className="inline-flex items-center gap-2 bg-[#F5FAF9] text-slate-700 text-sm sm:text-base font-semibold px-5 py-2.5 rounded-full border border-[#DAE9E6]/60 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#147A60] stroke-[2]" /> Legalne i bezpieczne
              </div>
              <div className="inline-flex items-center gap-2 bg-[#F5FAF9] text-slate-700 text-sm sm:text-base font-semibold px-5 py-2.5 rounded-full border border-[#DAE9E6]/60 shadow-sm">
                <Home className="w-5 h-5 text-[#147A60] stroke-[2]" /> Bez wychodzenia z domu
              </div>
              <div className="inline-flex items-center gap-2 bg-[#F5FAF9] text-slate-700 text-sm sm:text-base font-semibold px-5 py-2.5 rounded-full border border-[#DAE9E6]/60 shadow-sm">
                <Clock className="w-5 h-5 text-[#147A60] stroke-[2]" /> Szybka realizacja
              </div>
              <div className="inline-flex items-center gap-2 bg-[#F5FAF9] text-slate-700 text-sm sm:text-base font-semibold px-5 py-2.5 rounded-full border border-[#DAE9E6]/60 shadow-sm">
                <ThumbsUp className="w-5 h-5 text-[#147A60] stroke-[2]" /> Wygodna forma
              </div>
            </div>

            <div className="text-xs sm:text-sm text-slate-400 font-medium pt-6 flex items-center gap-2">
              <CalendarDays className="w-4 h-4" /> Ostatnia aktualizacja: 22.05.2024
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[620px] aspect-[4/3] rounded-2xl overflow-hidden">
              <img src="/recipe_3d.png" alt="Czy lekarz online może wystawić receptę?" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Main Column */}
          <div className="lg:col-span-8 space-y-14">

            {/* Step by step */}
            <section>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 pb-4 border-b border-slate-100">Jak działa e-recepta online?</h2>
              <p className="text-slate-600 text-base sm:text-lg mb-10 leading-relaxed max-w-3xl">To bardzo proste. Cały proces zajmuje tylko kilka minut.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mb-8">
                {[
                  { icon: CalendarDays, step: 1, title: "Umawiasz konsultację online", desc: "Wybierz dogodny termin wizyty z lekarzem." },
                  { icon: User, step: 2, title: "Rozmowa z lekarzem", desc: "Lekarz przeprowadzi wywiad medyczny i oceni Twój stan zdrowia." },
                  { icon: FileText, step: 3, title: "Wystawienie e-recepty", desc: "Jeśli jest to możliwe, lekarz wystawi e-receptę na potrzebne leki." },
                  { icon: MessageSquare, step: 4, title: "Otrzymujesz kod", desc: "Kod e-recepty otrzymasz SMS-em, e-mailem lub znajdziesz na koncie pacjenta." },
                  { icon: Store, step: 5, title: "Realizacja w aptece", desc: "Kod podajesz w aptece i odbierasz swoje leki." }
                ].map((s, i) => (
                  <div key={i} className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-sm flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#F5FAF9] text-[#147A60] flex items-center justify-center mb-6 shadow-sm border border-[#DAE9E6]">
                      <s.icon className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    <div className="w-6 h-6 bg-[#147A60] text-white rounded-full text-xs font-bold flex items-center justify-center mb-4">
                      {s.step}
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-base sm:text-lg mb-3">{s.title}</h4>
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* When can doctor prescribe online */}
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-2">Kiedy lekarz może wystawić receptę online?</h2>
              <p className="text-slate-600 font-medium mb-6 text-[15px]">E-receptę można otrzymać m.in. w sytuacjach takich jak:</p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                {[
                  "kontynuacja leczenia chorób przewlekłych",
                  "zakończona diagnostyka i znana historia leczenia",
                  "leczenie infekcji (o ile nie wymaga badania fizykalnego)",
                  "przedłużenie stałych leków",
                  "dolegliwości sezonowe (np. alergie)",
                  "inne przypadki, w których stan zdrowia pozwala na zdalną ocenę"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#147A60] flex-shrink-0" />
                    <span className="text-[13px] font-semibold text-slate-700 pt-0.5">{text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-[#F8FAF9] border border-[#EAF3F0] rounded-xl p-4 flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full border border-[#147A60] flex items-center justify-center flex-shrink-0 text-[#147A60] font-serif italic text-xs">i</div>
                <p className="text-[13px] font-medium text-slate-600 leading-relaxed pt-0.5">
                  W niektórych sytuacjach lekarz może uznać, że konieczna jest wizyta stacjonarna. Zawsze kierujemy się Twoim bezpieczeństwem.
                </p>
              </div>
            </section>

            {/* How to receive and fulfill */}
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-2">Jak otrzymać i zrealizować e-receptę?</h2>
              <p className="text-slate-600 font-medium mb-6 text-[15px]">Po wystawieniu recepty otrzymasz 4-cyfrowy kod.</p>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: MessageSquarePlus, title: "Otrzymasz kod", desc: "Kod e-recepty wyślemy do Ciebie SMS-em, e-mailem lub znajdziesz go na swoim koncie pacjenta." },
                  { icon: Smartphone, title: "Zrealizujesz w aptece", desc: "Pokaż kod w aptece (na ekranie telefonu lub wydruk) oraz podaj swój numer PESEL. Farmaceuta zrealizuje receptę." },
                  { icon: Laptop, title: "Wszystko online", desc: "Bez papieru, bez wychodzenia z domu, bez kolejek." }
                ].map((card, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <div className="w-full aspect-[4/3] border border-slate-200 rounded-2xl flex items-center justify-center mb-4 relative overflow-hidden group hover:border-[#147A60] transition-colors">
                      <card.icon className="w-10 h-10 text-[#147A60] stroke-[1.5]" />
                      {/* Decorative small green line at bottom of box */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#147A60] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-sm mb-2">{card.title}</h4>
                    <p className="text-[12px] text-slate-500 font-medium leading-relaxed">{card.desc}</p>
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

            {/* Categories */}
            <div className="bg-[#F8FAF9] rounded-2xl p-6">
              <h3 className="font-extrabold text-slate-900 mb-6 text-lg sm:text-xl">W tej kategorii</h3>
              <div className="space-y-1">
                {[
                  { icon: FileText, label: "E-recepty", active: true },
                  { icon: FileText, label: "L4 online", active: false },
                  { icon: FileText, label: "Skierowania", active: false },
                  { icon: ShieldCheck, label: "Antykoncepcja online", active: false },
                  { icon: Phone, label: "Telekonsultacje", active: false },
                  { icon: Wallet, label: "Płatności", active: false },
                  { icon: MessageSquare, label: "Poradniki pacjenta", active: false },
                ].map((cat, i) => (
                  <Link key={i} href="#" className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm sm:text-base transition-colors ${cat.active ? "bg-white text-[#147A60] font-bold border border-[#EAF3F0] shadow-sm" : "text-slate-600 font-semibold hover:bg-white hover:text-slate-900 border border-transparent"}`}>
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
                  { icon: Monitor, title: "Jak skonsultować wynik badań?" },
                  { icon: ShieldCheck, title: "Czy mogę przedłużyć stałe leki bez wizyty stacjonarnej?" },
                  { icon: Wallet, title: "Jak wygląda płatność za konsultację?" },
                  { icon: CreditCard, title: "Jak uzyskać antykoncepcję online?" }
                ].map((art, i) => (
                  <Link key={i} href="#" className="flex gap-4 items-center group">
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
              <Link href="/kontakt" className="w-full py-3 bg-[#064743] hover:bg-slate-900 text-white rounded-lg text-sm sm:text-base font-bold flex items-center justify-center gap-2 transition-colors">
                Skontaktuj się z nami <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </main>

      {/* Bottom Banner Full Width */}
      <div className="w-full bg-[#F8FAF9] border-t border-b border-[#EAF3F0] py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 xl:px-16 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center justify-center hidden sm:flex">
              <Calendar className="w-6 h-6 text-[#147A60]" />
            </div>
            <div>
              <h3 className="text-[20px] font-black text-slate-900 mb-1">Umów konsultację online</h3>
              <p className="text-[13px] font-medium text-slate-600">Skorzystaj z profesjonalnej pomocy lekarza bez wychodzenia z domu.</p>
            </div>
          </div>
          <Link href="/wypelnij-formularz" className="bg-[#064743] hover:bg-slate-900 text-white px-8 py-3.5 rounded-lg text-[13px] font-bold flex items-center gap-2 transition-colors flex-shrink-0">
            Umów wizytę <ArrowRight className="w-4 h-4" />
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
