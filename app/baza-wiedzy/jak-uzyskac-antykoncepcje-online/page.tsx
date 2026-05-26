"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ShieldCheck,
  Home,
  Clock,
  CalendarDays,
  User,
  FileText,
  MessageSquare,
  Store,
  CheckCircle2,
  Info,
  ChevronDown,
  Headset,
  Calendar,
  Lock,
  ArrowRight,
  Phone,
  UserCheck,
  TriangleAlert,
  Heart,
  Grip,
  CircleDot,
  Disc,
  Wand2,
  Smartphone,
  Pill,
  MousePointerClick,
  ClipboardList,
  CreditCard,
  AlertCircle,
  Wallet
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ArticlePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "Czy mogę otrzymać antykoncepcję bez wcześniejszego stosowania?", a: "Jeśli to Twój pierwszy raz z antykoncepcją hormonalną, konieczna jest pogłębiona konsultacja lekarska. Lekarz dokładnie oceni Twój stan zdrowia, aby dobrać bezpieczny preparat." },
    { q: "Czy potrzebuję badań przed konsultacją?", a: "Niektóre formy antykoncepcji mogą wymagać aktualnych wyników badań (np. cytologii lub badań krwi). Lekarz poinformuje Cię o tym podczas wizyty." },
    { q: "Czy e-recepta na antykoncepcję jest płatna?", a: "Tak, wystawienie e-recepty następuje podczas płatnej e-konsultacji z ginekologiem." },
    { q: "Jak długo ważna jest e-recepta?", a: "Standardowa e-recepta na leki gotowe (w tym antykoncepcyjne) jest ważna przez 30 dni od daty wystawienia. W przypadku recept rocznych, pierwszą paczkę należy wykupić w ciągu pierwszych 30 dni." },
    { q: "Czy konsultacja jest odpowiednia dla nastolatek?", a: "Osoby niepełnoletnie muszą odbyć wizytę stacjonarną z udziałem rodzica lub opiekuna prawnego. E-konsultacje przeznaczone są co do zasady dla pełnoletnich pacjentek." },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow pt-8 pb-16 px-4 sm:px-8 xl:px-16 max-w-[90vw] mx-auto w-full">

        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8 flex-wrap">
          <Link href="/" className="hover:text-slate-800 transition-colors">Strona główna</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <Link href="/baza-wiedzy" className="hover:text-slate-800 transition-colors">Baza wiedzy</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <Link href="/baza-wiedzy?kategoria=antykoncepcja-online" className="hover:text-slate-800 transition-colors">Antykoncepcja online</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
          <span className="text-slate-800">Jak uzyskać antykoncepcję online?</span>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16 w-full">
          <div className="flex-1 space-y-6">
            <span className="inline-block bg-[#EAF3F0] text-[#147A60] px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
              ANTYKONCEPCJA ONLINE
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4">
              Jak uzyskać antykoncepcję<br /> online?
            </h1>
            <p className="text-slate-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-4xl mb-8">
              Konsultacja z lekarzem ginekologiem online to wygodny i bezpieczny sposób na uzyskanie e-recepty na antykoncepcję dopasowaną do Twoich potrzeb.
            </p>

            <div className="flex flex-wrap gap-3.5 pt-2">
              <div className="inline-flex items-center gap-2 bg-[#F5FAF9] text-slate-700 text-sm sm:text-base font-semibold px-5 py-2.5 rounded-full border border-[#DAE9E6]/60 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#147A60] stroke-[2]" /> Dyskretnie
              </div>
              <div className="inline-flex items-center gap-2 bg-[#F5FAF9] text-slate-700 text-sm sm:text-base font-semibold px-5 py-2.5 rounded-full border border-[#DAE9E6]/60 shadow-sm">
                <Home className="w-5 h-5 text-[#147A60] stroke-[2]" /> Bez wychodzenia z domu
              </div>
              <div className="inline-flex items-center gap-2 bg-[#F5FAF9] text-slate-700 text-sm sm:text-base font-semibold px-5 py-2.5 rounded-full border border-[#DAE9E6]/60 shadow-sm">
                <Pill className="w-5 h-5 text-[#147A60] stroke-[2]" /> Szybka e-recepta
              </div>
              <div className="inline-flex items-center gap-2 bg-[#F5FAF9] text-slate-700 text-sm sm:text-base font-semibold px-5 py-2.5 rounded-full border border-[#DAE9E6]/60 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#147A60] stroke-[2]" /> W 100% bezpieczne
              </div>
            </div>

            <div className="text-xs sm:text-sm text-slate-400 font-medium pt-6 flex items-center gap-2">
              <CalendarDays className="w-4 h-4" /> Ostatnia aktualizacja: 22.05.2024
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[620px] aspect-[4/3] rounded-2xl overflow-hidden">
              <img src="/bazawiedzy/4.png" alt="Antykoncepcja online" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Main Column */}
          <div className="lg:col-span-8 space-y-14">

            {/* Step by step */}
            <section>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 pb-4 border-b border-slate-100">Kroki do uzyskania e-recepty</h2>
              <p className="text-slate-600 text-base sm:text-lg mb-10 leading-relaxed max-w-3xl">Proces jest bardzo prosty i zajmuje zazwyczaj nie więcej niż kilka minut.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { icon: MousePointerClick, step: 1, title: "Wybierz rodzaj konsultacji", desc: "Znajdź usługę 'Antykoncepcja' na naszej platformie." },
                  { icon: ClipboardList, step: 2, title: "Wypełnij wywiad", desc: "Odpowiedz szczerze na kilka pytań dotyczących Twojego zdrowia." },
                  { icon: CreditCard, step: 3, title: "Opłać wizytę", desc: "Zrealizuj szybką płatność online." },
                  { icon: MessageSquare, step: 4, title: "Otrzymaj e-receptę", desc: "Kod recepty otrzymasz wkrótce po weryfikacji przez lekarza." }
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
                  Lekarz zawsze indywidualnie ocenia, czy antykoncepcja jest dla Ciebie odpowiednia i bezpieczna. W razie potrzeby może zlecić dodatkowe badania.
                </p>
              </div>
            </section>

            {/* Types of contraception */}
            <section>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-6 pb-4 border-b border-slate-100">Kiedy z niej skorzystać?</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { icon: Pill, title: "Tabletki antykoncepcyjne", desc: "Przedłużenie recepty na pigułki jednoskładnikowe lub dwuskładnikowe." },
                  { icon: AlertCircle, title: "Antykoncepcja awaryjna", desc: "Jeśli potrzebujesz tzw. tabletki 'po' w sytuacjach nagłych." },
                  { icon: ShieldCheck, title: "Plastry i krążki", desc: "E-recepty na inne hormonalne metody antykoncepcji." }
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

              <div className="bg-[#FFFBEB] border border-[#FEF3C7] rounded-xl p-4 flex gap-4 items-start mt-8">
                <TriangleAlert className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-[13px] font-medium text-amber-900 leading-relaxed pt-0.5">
                  Nie przepisujemy antykoncepcji „na zapas”. Recepta będzie wystawiona zgodnie z medyczną oceną Twojego stanu zdrowia.
                </p>
              </div>
            </section>

            {/* Is it safe? */}
            <section>
              <h2 className="text-2xl font-black text-slate-900 mb-2">Czy antykoncepcja online jest bezpieczna?</h2>
              <p className="text-slate-600 font-medium mb-6 text-[15px]">Tak, o ile nie ma przeciwwskazań zdrowotnych.</p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { icon: ShieldCheck, title: "Konsultacja z ginekologiem", desc: "Wywiad medyczny pozwala ocenić, czy antykoncepcja jest dla Ciebie odpowiednia." },
                  { icon: Lock, title: "Dane są bezpieczne", desc: "Twoje dane są chronione zgodnie z przepisami i RODO." },
                  { icon: CheckCircle2, title: "Legalne i zgodne z prawem", desc: "Recepty wystawiane są zgodnie z obowiązującymi przepisami." },
                  { icon: Heart, title: "Wygodnie i dyskretnie", desc: "Konsultacja bez wychodzenia z domu - w komfortowej i dyskretnej atmosferze." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center flex-shrink-0 mt-1">
                      <item.icon className="w-4 h-4 text-[#147A60]" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[14px] text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-[12px] font-medium text-slate-500 leading-relaxed">{item.desc}</p>
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
              <h3 className="font-extrabold text-slate-900 mb-6 text-lg sm:text-xl">W tej kategorii</h3>
              <div className="space-y-1">
                {[
                  { icon: FileText, label: "E-recepty", active: false },
                  { icon: FileText, label: "L4 online", active: false },
                  { icon: FileText, label: "Skierowania", active: false },
                  { icon: ShieldCheck, label: "Antykoncepcja online", active: true },
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
                  { icon: Smartphone, title: "Czy lekarz online może wystawić receptę?" },
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
      <div className="w-full bg-[#E8F3F1]/40 border-t border-b border-[#DAE9E6]/60 py-16 mt-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white border border-[#DAE9E6] rounded-2xl shadow-sm flex items-center justify-center hidden sm:flex shrink-0">
              <Calendar className="w-8 h-8 text-[#147A60]" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-2">Umów e-konsultację antykoncepcyjną</h3>
              <p className="text-base sm:text-lg text-slate-600">Szybka weryfikacja i wystawienie e-recepty w kilka minut.</p>
            </div>
          </div>
          <Link href="/wypelnij-formularz" className="bg-[#064743] hover:bg-slate-900 text-white px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-3 transition-colors shrink-0 shadow-md">
            Rozpocznij wywiad <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
