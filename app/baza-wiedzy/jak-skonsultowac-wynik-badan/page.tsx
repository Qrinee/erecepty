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
  MessageSquare,
  Stethoscope,
  Phone,
  Home,
  CloudUpload,
  Info,
  Clock,
  FileSearch,
  ClipboardList,
  Droplet,
  Monitor,
  Activity,
  Shield,
  Microscope,
  Video,
  Smartphone,
  Wallet,
  FileType2,
  Upload
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ArticlePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "Czy lekarz wystawi zalecenia lub e-receptę po konsultacji wyników badań?", a: "Tak, jeśli po przeanalizowaniu wyników lekarz uzna to za konieczne, może wystawić e-receptę, e-skierowanie na dalsze badania lub e-zwolnienie (L4). Całość zaleceń zostanie przesłana po wizycie." },
    { q: "Jakie pliki mogę przesłać z wynikami badań?", a: "Możesz przesłać wyraźne zdjęcia (np. w formacie JPG, PNG) lub dokumenty PDF z laboratorium. Upewnij się, że są one czytelne, a na wynikach znajdują się Twoje dane ułatwiające weryfikację." },
    { q: "Czy konsultacja online zastępuje wizytę stacjonarną?", a: "W wielu przypadkach e-konsultacja jest w zupełności wystarczająca do interpretacji wyników i wdrożenia leczenia. Lekarz może jednak w razie wątpliwości lub nieprawidłowości poprosić o wizytę stacjonarną." },
    { q: "Czy mogę porozmawiać z lekarzem o wynikach badań dziecka?", a: "Tak, pod warunkiem, że jesteś jego prawnym opiekunem. Pamiętaj, aby podać w formularzu dane dziecka, a podczas konsultacji mieć pod ręką jego historię medyczną." },
    { q: "Ile trwa konsultacja wyników badań?", a: "Czas trwania konsultacji jest elastyczny i zależy od złożoności Twoich wyników. Lekarz poświęci tyle czasu, ile to konieczne, by omówić z Tobą parametry i odpowiedzieć na wszystkie pytania." },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow pt-8  pb-16 px-4 sm:px-8 xl:px-16 max-w-[90vw] mx-auto w-full">

        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8 flex-wrap">
          <Link href="/" className="hover:text-slate-800 transition-colors  flex items-center">Strona główna</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <Link href="/baza-wiedzy" className="hover:text-slate-800 transition-colors  flex items-center">Baza wiedzy</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <Link href="/baza-wiedzy?kategoria=wyniki-badan" className="hover:text-slate-800 transition-colors  flex items-center">Wyniki badań</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <span className="text-slate-800">Jak skonsultować wynik badań?</span>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="flex-1 space-y-6">
            <span className="inline-block bg-[#EAF3F0] text-[#147A60] px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
              WYNIKI BADAŃ
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
              Jak skonsultować wynik<br /> badań przez internet?
            </h1>
            <p className="text-slate-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mb-8">
              Konsultacja wyniku badań online to szybki i wygodny sposób na uzyskanie profesjonalnej interpretacji bez wychodzenia z domu.
            </p>

            <div className="flex flex-wrap gap-3.5 pt-2">
              <div className="inline-flex items-center gap-2 bg-[#F5FAF9] text-slate-700 text-sm sm:text-base font-semibold px-5 py-2.5 rounded-full border border-[#DAE9E6]/60 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#147A60] stroke-[2]" /> Szybka ocena wyników
              </div>
              <div className="inline-flex items-center gap-2 bg-[#F5FAF9] text-slate-700 text-sm sm:text-base font-semibold px-5 py-2.5 rounded-full border border-[#DAE9E6]/60 shadow-sm">
                <Upload className="w-5 h-5 text-[#147A60] stroke-[2]" /> Wygodne wgrywanie plików
              </div>
              <div className="inline-flex items-center gap-2 bg-[#F5FAF9] text-slate-700 text-sm sm:text-base font-semibold px-5 py-2.5 rounded-full border border-[#DAE9E6]/60 shadow-sm">
                <Stethoscope className="w-5 h-5 text-[#147A60] stroke-[2]" /> Opinia lekarza specjalisty
              </div>
              <div className="inline-flex items-center gap-2 bg-[#F5FAF9] text-slate-700 text-sm sm:text-base font-semibold px-5 py-2.5 rounded-full border border-[#DAE9E6]/60 shadow-sm">
                <FileText className="w-5 h-5 text-[#147A60] stroke-[2]" /> Ewentualna e-recepta
              </div>
            </div>

            <div className="text-xs sm:text-sm text-slate-400 font-medium pt-6 flex items-center gap-2">
              <CalendarDays className="w-4 h-4" /> Ostatnia aktualizacja: 22.05.2024
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="relative w-full  max-w-[620px] aspect-[4/3] rounded-2xl overflow-hidden">
              <img src="/bazawiedzy/7.jpeg" alt="Jak skonsultować wynik badań?" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Main Column */}
          <div className="lg:col-span-8 space-y-16">

            {/* Step by step */}
            <section>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 pb-4 border-b border-slate-100">Kroki do interpretacji wyników</h2>
              <p className="text-slate-600 text-base sm:text-lg mb-10 leading-relaxed max-w-3xl">Wysłanie wyników do konsultacji to tylko 4 proste kroki.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { icon: Upload, step: 1, title: "Wgraj wyniki", desc: "Zrób zdjęcie lub załącz plik PDF ze swoimi wynikami badań." },
                  { icon: ClipboardList, step: 2, title: "Opisz objawy", desc: "Wypełnij krótki formularz podając powód wykonania badań i swoje objawy." },
                  { icon: Stethoscope, step: 3, title: "Analiza lekarza", desc: "Lekarz dokładnie przeanalizuje Twoje wyniki pod kątem medycznym." },
                  { icon: MessageSquare, step: 4, title: "Otrzymaj zalecenia", desc: "Dostaniesz odpowiedź z interpretacją oraz zaleceniami co do dalszego leczenia." }
                ].map((s, i) => (
                  <div key={i} className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-sm flex flex-col items-center text-center">
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
                  W nagłych przypadkach skontaktuj się bezpośrednio z lekarzem lub udaj się do placówki medycznej.
                </p>
              </div>
            </section>

            {/* Preparation */}
            <section>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 pb-4 border-b border-slate-100">Co przygotować przed konsultacją?</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { icon: FileType2, title: "Czytelne pliki", desc: "Upewnij się, że zdjęcia lub skany wyników są ostre i czytelne." },
                  { icon: ShieldCheck, title: "Komplet wyników", desc: "Załącz wszystkie strony wyników, a nie tylko wybrane parametry." },
                  { icon: Activity, title: "Opis dolegliwości", desc: "Przygotuj krótki opis powodów wykonania badań i swoich objawów." }
                ].map((m, i) => (
                  <div key={i} className="flex flex-col p-6 border border-slate-100 rounded-[2rem] bg-white shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-[#F5FAF9] border border-[#DAE9E6] flex items-center justify-center mb-4">
                      <m.icon className="w-6 h-6 text-[#147A60]" />
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-base sm:text-lg mb-2">{m.title}</h4>
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-6">Co zyskujesz dzięki konsultacji online?</h2>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                  { icon: Clock, title: "Szybki dostęp do lekarza", desc: "Bez kolejek i długiego czekania na wizytę." },
                  { icon: FileSearch, title: "Zrozumiałe wyjaśnienie wyników", desc: "Lekarz wytłumaczy wyniki i ich znaczenie." },
                  { icon: ClipboardList, title: "Indywidualne zalecenia", desc: "Otrzymasz zalecenia oraz dalsze kroki postępowania." },
                  { icon: Lock, title: "Poufność i bezpieczeństwo", desc: "Twoje dane i wyniki są chronione zgodnie z przepisami." }
                ].map((card, i) => (
                  <div key={i} className="flex flex-col items-center text-center p-6 border border-slate-200 rounded-2xl bg-white shadow-sm h-full">
                    <div className="w-12 h-12 flex items-center justify-center mb-4 bg-[#F8FAF9] rounded-full">
                      <card.icon className="w-6 h-6 text-[#147A60] stroke-[1.5]" />
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-[13px] leading-snug mb-2">{card.title}</h4>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#EAF3F0]/50 border border-[#147A60]/20 rounded-xl p-5 flex gap-5 items-start">
                <div className="w-10 h-10 rounded-full bg-[#147A60]/10 flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-[#147A60]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A5F4A] text-[14px] mb-1">Wskazówka lekarza</h4>
                  <p className="text-[13px] font-medium text-slate-600 leading-relaxed">
                    Podczas konsultacji przygotuj listę przyjmowanych leków oraz opisz swoje dolegliwości. To ułatwi lekarzowi dokładną ocenę wyników.
                  </p>
                </div>
              </div>
            </section>

            {/* Which results can I consult? */}
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-2">Jakie badania możesz skonsultować?</h2>
              <p className="text-slate-600 font-medium mb-6 text-[15px]">Możesz przesłać praktycznie każde wyniki badań, m.in.:</p>

              <div className="flex flex-wrap gap-4">
                {[
                  { icon: Droplet, text: "Badania krwi i moczu" },
                  { icon: Monitor, text: "Badania obrazowe", sub: "(RTG, USG, MRI, TK)" },
                  { icon: Activity, text: "Badania hormonalne" },
                  { icon: Shield, text: "Badania alergiczne i immunologiczne" },
                  { icon: Microscope, text: "Inne wyniki laboratoryjne" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 w-[calc(50%-8px)] lg:w-auto p-3">
                    <item.icon className="w-8 h-8 text-[#147A60] stroke-[1.5] flex-shrink-0" />
                    <div>
                      <h4 className="font-extrabold text-[12px] text-slate-900 leading-tight">{item.text}</h4>
                      {item.sub && <span className="text-[10px] text-slate-500 font-medium">{item.sub}</span>}
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

            {/* Categories */}
            <div className="bg-[#F8FAF9] rounded-2xl p-6">
              <h3 className="font-black text-slate-900 mb-4 text-[15px]">W tej kategorii</h3>
              <div className="space-y-1">
                {[
                  { icon: FileText, label: "E-recepty", href: "/baza-wiedzy?kategoria=e-recepty", active: false },
                  { icon: FileText, label: "L4 online", href: "/baza-wiedzy?kategoria=l4-online", active: false },
                  { icon: FileText, label: "Skierowania", href: "/baza-wiedzy?kategoria=skierowania", active: false },
                  { icon: ShieldCheck, label: "Antykoncepcja online", href: "/baza-wiedzy?kategoria=antykoncepcja-online", active: false },
                  { icon: Phone, label: "Telekonsultacje", href: "/baza-wiedzy?kategoria=telekonsultacje", active: false },
                  { icon: FileSearch, label: "Wyniki badań", active: true },
                  { icon: MessageSquare, label: "Poradniki pacjenta", href: "/baza-wiedzy?kategoria=poradniki-pacjenta", active: false },
                ].map((cat, i) => (
                  <Link key={i} href={cat.href || "#"} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${cat.active ? "bg-white text-[#147A60] font-bold border border-[#EAF3F0] shadow-sm" : "text-slate-600 font-semibold hover:bg-white hover:text-slate-900 border border-transparent"}`}>
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
                  { icon: Smartphone, title: "Czy lekarz online może wystawić receptę?", href: "/baza-wiedzy/czy-lekarz-online-moze-wystawic-recepte" },
                  { icon: ShieldCheck, title: "Czy mogę przedłużyć stałe leki bez wizyty stacjonarnej?", href: "/baza-wiedzy/czy-moge-przedluzyc-stale-leki" },
                  { icon: Wallet, title: "Jak wygląda płatność za konsultację?", href: "/baza-wiedzy/jak-wyglada-platnosc-za-konsultacje" },
                  { icon: CreditCard, title: "Jak uzyskać antykoncepcję online?", href: "/baza-wiedzy/jak-uzyskac-antykoncepcje-online" }
                ].map((art, i) => (
                  <Link key={i} href={art.href || "#"} className="flex gap-4 items-center group">
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
              <Link href="/#kontakt" className="w-full py-3 bg-[#064743] hover:bg-slate-900 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-colors">
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
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-2">Skonsultuj wyniki już teraz</h3>
              <p className="text-base sm:text-lg text-slate-600">Szybka profesjonalna weryfikacja Twoich wyników bez kolejek.</p>
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
