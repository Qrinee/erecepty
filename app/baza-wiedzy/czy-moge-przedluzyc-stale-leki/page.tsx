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
  MessageSquare,
  Stethoscope,
  Phone,
  Home,
  Info,
  Clock,
  ClipboardList,
  Store,
  FileSearch,
  HeartPulse,
  Pill,
  Droplet,
  Activity,
  Flower,
  Wind,
  Wallet,
  Smartphone
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ArticlePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "Czy każda recepta może być przedłużona online?", a: "Większość stałych leków na choroby przewlekłe może być przedłużona. Wyjątkiem są leki psychotropowe, narkotyczne oraz te, które wymagają ścisłego monitorowania stacjonarnego (lekarz online może odmówić ich wypisania)." },
    { q: "Czy lekarz może odmówić przedłużenia recepty?", a: "Tak. Jeśli podczas wywiadu medycznego lekarz uzna, że Twój stan zdrowia wymaga fizycznego badania lub dodatkowych wyników badań laboratoryjnych, może zalecić wizytę w gabinecie." },
    { q: "Na jak długo mogę otrzymać receptę?", a: "Zazwyczaj podczas konsultacji online lekarz przedłuża terapię na okres do 3 miesięcy, w zależności od rodzaju przyjmowanych leków i Twojej historii medycznej." },
    { q: "Czy potrzebuję wyników badań, aby przedłużyć leki?", a: "Zależy to od Twojej choroby. W niektórych przypadkach (np. leczenie chorób tarczycy) lekarz może poprosić o najnowsze wyniki badań przed wystawieniem kolejnej e-recepty." },
    { q: "Czy mogę otrzymać receptę na leki kontrolowane?", a: "Niektóre silne leki uspokajające, nasenne i przeciwbólowe (np. z grupy psychotropów) podlegają ścisłym regulacjom i często nie mogą zostać przepisane podczas pierwszej e-konsultacji z nowym lekarzem." },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow pt-8 pb-16 px-4 sm:px-8 xl:px-16 max-w-[90vw] mx-auto w-full">

        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8 flex-wrap">
          <Link href="/" className="hover:text-slate-800 transition-colors flex items-center">Strona główna</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <Link href="/baza-wiedzy" className="hover:text-slate-800 transition-colors flex items-center">Baza wiedzy</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <Link href="/baza-wiedzy?kategoria=recepty-i-leki" className="hover:text-slate-800 transition-colors flex items-center">Recepty i leki</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <span className="text-slate-800">Czy mogę przedłużyć stałe leki bez wizyty stacjonarnej?</span>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="flex-1 space-y-6">
            <span className="inline-block bg-[#EAF3F0] text-[#147A60] px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
              RECEPTY I LEKI
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
              Czy mogę przedłużyć<br /> stałe leki bez wizyty<br /> stacjonarnej?
            </h1>
            <p className="text-slate-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mb-8">
              Tak. W wielu przypadkach lekarz online może wystawić e-receptę na Twoje stałe leki podczas konsultacji online – bez konieczności wizyty stacjonarnej.
            </p>

            <div className="flex flex-wrap gap-3.5 pt-2">
              <div className="inline-flex items-center gap-2 bg-[#F5FAF9] text-slate-700 text-sm sm:text-base font-semibold px-5 py-2.5 rounded-full border border-[#DAE9E6]/60 shadow-sm">
                <Home className="w-5 h-5 text-[#147A60] stroke-[2]" /> Bez wychodzenia z domu
              </div>
              <div className="inline-flex items-center gap-2 bg-[#F5FAF9] text-slate-700 text-sm sm:text-base font-semibold px-5 py-2.5 rounded-full border border-[#DAE9E6]/60 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#147A60] stroke-[2]" /> Szybko i wygodnie
              </div>
              <div className="inline-flex items-center gap-2 bg-[#F5FAF9] text-slate-700 text-sm sm:text-base font-semibold px-5 py-2.5 rounded-full border border-[#DAE9E6]/60 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#147A60] stroke-[2]" /> Bezpiecznie
              </div>
              <div className="inline-flex items-center gap-2 bg-[#F5FAF9] text-slate-700 text-sm sm:text-base font-semibold px-5 py-2.5 rounded-full border border-[#DAE9E6]/60 shadow-sm">
                <FileText className="w-5 h-5 text-[#147A60] stroke-[2]" /> E-recepta online
              </div>
            </div>

            <div className="text-xs sm:text-sm text-slate-400 font-medium pt-6 flex items-center gap-2">
              <CalendarDays className="w-4 h-4" /> Ostatnia aktualizacja: 22.05.2024
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="relative w-full  max-w-[620px] aspect-[4/3] rounded-2xl overflow-hidden">
              <img src="/bazawiedzy/5.png" alt="E-recepta na stałe leki" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Main Column */}
          <div className="lg:col-span-8 space-y-16">

            {/* Step by step */}
            <section>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 pb-4 border-b border-slate-100">Jak przedłużyć stałe leki online?</h2>
              <p className="text-slate-600 text-base sm:text-lg mb-10 leading-relaxed max-w-3xl">To proste i szybkie – cały proces zajmuje tylko kilka kroków.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mb-8">
                {[
                  { icon: CalendarDays, step: 1, title: "Umów konsultację", desc: "Wybierz dogodny termin konsultacji online z lekarzem." },
                  { icon: User, step: 2, title: "Porozmawiaj z lekarzem", desc: "Lekarz przeprowadzi wywiad, zapyta o stan zdrowia i stosowane leki." },
                  { icon: ClipboardList, step: 3, title: "Ocena i decyzja", desc: "Jeśli wszystko jest w porządku, lekarz może wystawić e-receptę na Twoje leki." },
                  { icon: FileText, step: 4, title: "Otrzymujesz e-receptę", desc: "Recepta zostanie wysłana na e-mail i będzie dostępna na IKP." },
                  { icon: Store, step: 5, title: "Wykup leki w aptece", desc: "Zrealizuj e-receptę w dowolnej aptece, podając kod lub PESEL." }
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

              <div className="bg-[#F8FAF9] border border-[#EAF3F0] rounded-xl p-4 flex gap-4 items-start mt-8">
                <div className="w-6 h-6 rounded-full border border-[#147A60] flex items-center justify-center flex-shrink-0 text-[#147A60] font-serif italic text-xs">i</div>
                <p className="text-[13px] font-medium text-slate-600 leading-relaxed pt-0.5">
                  Lekarz może nie wystawić recepty, jeśli uzna to za niebezpieczne dla Twojego zdrowia. W takiej sytuacji poinformuje Cię o dalszym postępowaniu.
                </p>
              </div>
            </section>

            {/* When can doctor extend? */}
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-2">Kiedy lekarz może przedłużyć receptę online?</h2>
              <p className="text-slate-600 font-medium mb-8 text-[15px]">W większości przypadków tak, jeśli:</p>

              <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                {[
                  { icon: ShieldCheck, title: "Leczenie jest kontynuacją", desc: "Stosujesz lek stale i wcześniej był przepisany przez lekarza." },
                  { icon: FileSearch, title: "Nie ma przeciwwskazań", desc: "Lek nie wymaga kontroli stacjonarnej ani badań na już." },
                  { icon: HeartPulse, title: "Stan zdrowia jest stabilny", desc: "Nie występują nowe objawy ani pogorszenie samopoczucia." },
                  { icon: Calendar, title: "Minęło wystarczająco mało czasu", desc: "Zwykle możliwe jest przedłużenie leczenia na okres do 3 miesięcy." },
                  { icon: Pill, title: "Lek nie podlega szczególnym ograniczeniom", desc: "Nie dotyczy to np. niektórych leków psychotropowych." }
                ].map((card, i) => (
                  <div key={i} className="flex flex-col items-center text-center p-5 border border-slate-200 rounded-xl bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] h-full">
                    <div className="w-12 h-12 flex items-center justify-center mb-4 bg-white border border-slate-100 rounded-full">
                      <card.icon className="w-6 h-6 text-[#147A60] stroke-[1.5]" />
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-[12px] leading-snug mb-2">{card.title}</h4>
                    <p className="text-[10px] text-slate-500 font-medium leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#F8FAF9] border border-[#EAF3F0] rounded-xl p-4 flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full border border-[#147A60] flex items-center justify-center flex-shrink-0 text-[#147A60] font-serif italic text-xs">i</div>
                <p className="text-[13px] font-medium text-slate-600 leading-relaxed pt-0.5">
                  Ostateczną decyzję zawsze podejmuje lekarz podczas konsultacji online.
                </p>
              </div>
            </section>

            {/* Which meds? */}
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-2">Jakie leki można przedłużyć online?</h2>
              <p className="text-slate-600 font-medium mb-6 text-[15px]">Najczęściej są to leki stosowane w leczeniu chorób przewlekłych, m.in.:</p>

              <div className="flex flex-wrap justify-center sm:justify-start gap-y-8 gap-x-6">
                {[
                  { icon: HeartPulse, text: "Nadciśnienie tętnicze" },
                  { icon: Droplet, text: "Cukrzyca" },
                  { icon: Activity, text: "Cholesterol (wysoki)" },
                  { icon: ShieldCheck, text: "Tarczyca" },
                  { icon: Flower, text: "Alergie" },
                  { icon: Wind, text: "Astma" },
                  { icon: User, text: "Inne choroby przewlekłe" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center w-[120px] text-center">
                    <div className="w-12 h-12 flex items-center justify-center mb-3">
                      <item.icon className="w-8 h-8 text-[#147A60] stroke-[1.5]" />
                    </div>
                    <h4 className="font-extrabold text-base sm:text-lg text-slate-900 leading-tight">{item.text}</h4>
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
              <h3 className="font-black text-slate-900 mb-4 text-[15px]">W tej kategorii</h3>
              <div className="space-y-1">
                {[
                  { icon: FileText, label: "E-recepty", active: false },
                  { icon: FileText, label: "L4 online", active: false },
                  { icon: FileText, label: "Skierowania", active: false },
                  { icon: ShieldCheck, label: "Antykoncepcja online", active: false },
                  { icon: Phone, label: "Telekonsultacje", active: false },
                  { icon: FileSearch, label: "Wyniki badań", active: false },
                  { icon: MessageSquare, label: "Poradniki pacjenta", active: false },
                ].map((cat, i) => (
                  <Link key={i} href="#" className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${cat.active ? "bg-white text-[#147A60] font-bold border border-[#EAF3F0] shadow-sm" : "text-slate-600 font-semibold hover:bg-white hover:text-slate-900 border border-transparent"}`}>
                    <cat.icon className={`w-4 h-4 ${cat.active ? "text-[#147A60]" : "text-slate-400"}`} /> {cat.label}
                  </Link>
                ))}
              </div>
              <Link href="/baza-wiedzy" className="mt-4 w-full py-2.5 border border-slate-200 bg-white rounded-lg text-xs font-bold text-slate-700 flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors">
                Zobacz wszystkie <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Popular Articles */}
            <div className="p-2">
              <h3 className="font-black text-slate-900 mb-6 text-[15px]">Popularne artykuły</h3>
              <div className="space-y-5">
                {[
                  { icon: Smartphone, title: "Czy lekarz online może wystawić receptę?" },
                  { icon: Wallet, title: "Jak wygląda płatność za konsultację?" },
                  { icon: ShieldCheck, title: "Jak skonsultować wynik badań?" },
                  { icon: FileText, title: "Czy konsultacje online są legalne i bezpieczne?" }
                ].map((art, i) => (
                  <Link key={i} href="#" className="flex gap-4 items-center group">
                    <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <art.icon className="w-6 h-6 text-[#147A60] stroke-[1.5]" />
                    </div>
                    <h4 className="text-[13px] font-bold text-slate-700 group-hover:text-[#147A60] transition-colors leading-snug">{art.title}</h4>
                  </Link>
                ))}
              </div>
              <Link href="/baza-wiedzy" className="mt-6 w-full py-2.5 border border-slate-200 bg-white rounded-lg text-xs font-bold text-slate-700 flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors">
                Zobacz wszystkie <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Contact Box */}
            <div className="bg-[#EAF3F0] rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#064743] text-white rounded-xl flex items-center justify-center mb-5">
                <Headset className="w-6 h-6" />
              </div>
              <h3 className="font-black text-slate-900 mb-2 text-[15px]">Masz pytania?</h3>
              <p className="text-[13px] font-medium text-slate-600 mb-6">Nasz zespół chętnie pomoże i odpowie na Twoje pytania.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-[12px] font-bold text-slate-700"><CheckCircle2 className="w-4 h-4 text-[#147A60]" /> Szybka odpowiedź</li>
                <li className="flex items-center gap-2 text-[12px] font-bold text-slate-700"><CheckCircle2 className="w-4 h-4 text-[#147A60]" /> Pomoc w doborze konsultacji</li>
                <li className="flex items-center gap-2 text-[12px] font-bold text-slate-700"><CheckCircle2 className="w-4 h-4 text-[#147A60]" /> Wygodny kontakt online</li>
              </ul>
              <Link href="/kontakt" className="w-full py-3 bg-[#064743] hover:bg-slate-900 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-colors">
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
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-2">Umów wizytę w celu przedłużenia leków</h3>
              <p className="text-base sm:text-lg text-slate-600">Szybka konsultacja medyczna i e-recepta na Twoje stałe leki.</p>
            </div>
          </div>
          <Link href="/wypelnij-formularz" className="bg-[#064743] hover:bg-slate-900 text-white px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-3 transition-colors shrink-0 shadow-md">
            Rozpocznij wywiad <ArrowRight className="w-5 h-5" />
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
