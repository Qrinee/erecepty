// app/baza-wiedzy/[slug]/ArticlePageClient.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  Share2,
  Bookmark,
  ChevronRight,
  CheckCircle,
  ShieldCheck,
  Home,
  Cloud,
  ClipboardList,
  UserCheck,
  MessageSquare,
  FileText,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  Shield,
  Pill,
  Star,
  Lock,
  Heart,
  Activity,
  Check,
  Stethoscope
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ArticleSection {
  title: string;
  content: string[];
}

interface ArticleData {
  tag: string;
  tagColor: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  slug: string;
  author?: string;
  publishedDate?: string;
  readTime?: string;
  sections?: ArticleSection[];
  relatedArticles?: string[];
}

interface RelatedArticle {
  tag: string;
  tagColor: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

interface ArticlePageClientProps {
  article: ArticleData;
  relatedArticles: RelatedArticle[];
}

// -------------------------------------------------------------
// GUIDE 1: Jak przygotować się do telekonsultacji?
// -------------------------------------------------------------
function TeleconsultationPrepPage() {
  return (
    <div className="bg-slate-50/50 min-h-screen pt-[90px] sm:pt-[110px] pb-16">
      <div className="w-full max-w-none px-4 sm:px-8 md:px-12 lg:px-16 mx-auto">
        
        {/* Breadcrumbs */}
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <li><Link href="/" className="hover:text-[#064743]">Strona główna</Link></li>
            <li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li><Link href="/baza-wiedzy" className="hover:text-[#064743]">Baza wiedzy</Link></li>
            <li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li className="text-slate-800 font-bold truncate">Jak przygotować się do telekonsultacji</li>
          </ol>
        </nav>

        {/* Hero Area */}
        <section className="bg-white rounded-3xl border border-slate-100 p-8 md:p-12 shadow-sm mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left text */}
            <div className="col-span-1 lg:col-span-7">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#E8F3F1] text-[#064743] border border-[#DAE9E6] mb-4">
                PORADNIK
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
                Jak przygotować się do telekonsultacji?
              </h1>
              <p className="text-slate-600 text-sm md:text-base mb-8 leading-relaxed">
                Kilka prostych kroków, dzięki którym konsultacja online przebiegnie szybko, komfortowo i skutecznie.
              </p>

              {/* 3 badges row */}
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 bg-[#E8F3F1] text-[#064743] text-xs font-bold px-3.5 py-2 rounded-xl border border-[#DAE9E6]">
                  <Clock className="w-4 h-4 text-[#064743]" />
                  5 minut przygotowania
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#E8F3F1] text-[#064743] text-xs font-bold px-3.5 py-2 rounded-xl border border-[#DAE9E6]">
                  <Cloud className="w-4 h-4 text-[#064743]" />
                  100% online
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#E8F3F1] text-[#064743] text-xs font-bold px-3.5 py-2 rounded-xl border border-[#DAE9E6]">
                  <Home className="w-4 h-4 text-[#064743]" />
                  Bez wychodzenia z domu
                </span>
              </div>
            </div>

            {/* Right graphic: Doctor inside laptop screen */}
            <div className="col-span-1 lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[340px] aspect-[4/3] bg-slate-900 rounded-t-2xl p-2.5 pb-0 shadow-2xl border-4 border-slate-800">
                {/* Screen content */}
                <div className="w-full h-full bg-[#E8F3F1] rounded-t-lg overflow-hidden relative border border-slate-700">
                  <img
                    src="/doctor_3d.png"
                    alt="Lekarz na ekranie komputera"
                    className="w-full h-full object-cover"
                  />
                  {/* Call overlay */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-slate-950/80 text-white text-[10px] px-3 py-1.5 rounded-full flex items-center gap-3">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    <span>Połączenie wideo...</span>
                  </div>
                </div>
                {/* Laptop base */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[112%] h-3 bg-slate-700 rounded-b-xl shadow-md border-t border-slate-600" />
              </div>
            </div>

          </div>
        </section>


        {/* 5 Core Steps Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          
          {/* Card 1 */}
          <div className="bg-white border border-[#DAE9E6] p-5 rounded-2xl shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#E8F3F1] text-[#064743] border border-[#DAE9E6] flex items-center justify-center mb-4 shadow-sm">
              <ClipboardList className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-sm text-slate-800 mb-1.5">Przygotuj informacje</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">Zbierz informacje o zdrowiu, lekach i objawach.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-[#DAE9E6] p-5 rounded-2xl shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#E8F3F1] text-[#064743] border border-[#DAE9E6] flex items-center justify-center mb-4 shadow-sm">
              <Home className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-sm text-slate-800 mb-1.5">Zadbaj o miejsce</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">Wybierz ciche, dobrze oświetlone miejsce w domu.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-[#DAE9E6] p-5 rounded-2xl shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#E8F3F1] text-[#064743] border border-[#DAE9E6] flex items-center justify-center mb-4 shadow-sm">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-sm text-slate-800 mb-1.5">Przygotuj dokumenty</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">Miej pod ręką dowód, wyniki badań i recepty.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-[#DAE9E6] p-5 rounded-2xl shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#E8F3F1] text-[#064743] border border-[#DAE9E6] flex items-center justify-center mb-4 shadow-sm">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-sm text-slate-800 mb-1.5">Sprawdź sprzęt</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">Upewnij się, że kamera i mikrofon działają.</p>
          </div>

          {/* Card 5 */}
          <div className="bg-white border border-[#DAE9E6] p-5 rounded-2xl shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#E8F3F1] text-[#064743] border border-[#DAE9E6] flex items-center justify-center mb-4 shadow-sm">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-sm text-slate-800 mb-1.5">Po konsultacji</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">Otrzymasz e-receptę lub e-zwolnienie online.</p>
          </div>

        </section>


        {/* Detailed Guide and Co Możesz Otrzymać */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Left: Detailed Steps */}
          <div className="col-span-1 lg:col-span-8 bg-white border border-slate-100 p-6 md:p-8 rounded-3xl shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-8 border-b border-slate-100 pb-4">
              Szczegółowy przewodnik
            </h2>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#064743] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                  1
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm mb-1">Przygotuj najważniejsze informacje</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Zanotuj swoje objawy, aktualnie przyjmowane leki, wyniki badań oraz pytania do lekarza. Im więcej informacji przekażesz, tym trafniejsza będzie konsultacja.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#064743] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                  2
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm mb-1">Zadbaj o spokojne miejsce</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Wybierz ciche, dobrze oświetlone miejsce z dostępem do stabilnego internetu. To zapewni komfort i jakość rozmowy z lekarzem.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#064743] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                  3
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm mb-1">Przygotuj dokumenty</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Miej pod ręką dowód osobisty, numer PESEL, wcześniejsze recepty, wyniki badań lub inną dokumentację medyczną.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#064743] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                  4
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm mb-1">Sprawdź sprzęt</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Upewnij się, że mikrofon, kamera i połączenie internetowe działają poprawnie. Naładuj urządzenie, aby uniknąć przerwania konsultacji.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#064743] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                  5
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm mb-1">Po konsultacji</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Po zakończonej konsultacji otrzymasz dokumenty online: e-receptę, e-zwolnienie lub zalecenia lekarskie.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Co Możesz Otrzymać */}
          <div className="col-span-1 lg:col-span-4">
            <div className="bg-[#DAE9E6]/30 border border-[#DAE9E6] p-6 rounded-3xl shadow-sm h-full flex flex-col">
              <h3 className="font-extrabold text-slate-900 text-base mb-6 border-b border-[#DAE9E6] pb-3">
                Co możesz otrzymać?
              </h3>

              <div className="space-y-5 flex-1">
                {/* Item 1 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white text-[#064743] flex items-center justify-center shrink-0 shadow-sm">
                    <Pill className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-800">e-recepta</h4>
                    <p className="text-[10px] text-slate-500 leading-normal mt-0.5">Szybkie i bezpieczne recepty online.</p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white text-[#064743] flex items-center justify-center shrink-0 shadow-sm">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-800">e-zwolnienie (L4)</h4>
                    <p className="text-[10px] text-slate-500 leading-normal mt-0.5">Zwolnienie lekarskie bez wychodzenia z domu.</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white text-[#064743] flex items-center justify-center shrink-0 shadow-sm">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-800">Skierowanie na badania</h4>
                    <p className="text-[10px] text-slate-500 leading-normal mt-0.5">Skierowanie na badania laboratoryjne i obrazowe.</p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-white text-[#064743] flex items-center justify-center shrink-0 shadow-sm">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-800">Zalecenia lekarskie</h4>
                    <p className="text-[10px] text-slate-500 leading-normal mt-0.5">Indywidualne zalecenia i plan leczenia.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>


        {/* Bottom Contact Banner */}
        <div className="bg-white border border-[#DAE9E6] rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm text-slate-800">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-[#E8F3F1] text-[#064743] flex items-center justify-center shrink-0 border border-[#DAE9E6]">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm md:text-base text-slate-900">Masz pytania?</h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Nasz zespół jest dostępny 24/7.
              </p>
            </div>
          </div>
          <a
            href="/wypelnij-formularz"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#064743] hover:bg-[#1A5D54] text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow-md transition cursor-pointer min-h-[44px]"
          >
            Umów telekonsultację
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}

// -------------------------------------------------------------
// GUIDE 2: Wszystko o konsultacjach online
// -------------------------------------------------------------
function OnlineConsultationsOverviewPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Jak działa konsultacja online?",
      a: "Wybierasz usługę, wypełniasz formularz medyczny i kontaktujesz się z lekarzem bez wychodzenia z domu. Lekarz analizuje informacje i udziela konsultacji online."
    },
    {
      q: "Czy konsultacja jest legalna?",
      a: "Tak, wszystkie e-wizyty i e-recepty w Polsce są w pełni legalne i regulowane odpowiednimi przepisami Ministerstwa Zdrowia."
    },
    {
      q: "Czy lekarz może wystawić receptę?",
      a: "Tak, na podstawie wywiadu lekarskiego specjalista ma prawo wystawić e-receptę na potrzebne leki stałe lub doraźne."
    },
    {
      q: "Ile trwa konsultacja?",
      a: "Średni czas weryfikacji i wdrożenia decyzji przez lekarza wynosi około 15 minut od momentu przesłania formularza medycznego."
    },
    {
      q: "Jak wygląda płatność?",
      a: "Płatność odbywa się bezpiecznie online przy użyciu systemów BLIK, karty płatniczej lub szybkiego przelewu internetowego bezpośrednio po wypełnieniu wywiadu."
    },
    {
      q: "Czy moje dane są bezpieczne?",
      a: "Tak, całe połączenie i przesył danych są szyfrowane certyfikatem SSL. Twoje dane medyczne są ściśle chronione zgodnie z wytycznymi RODO."
    }
  ];

  return (
    <div className="bg-slate-50/50 min-h-screen pt-[90px] sm:pt-[110px] pb-16">
      <div className="w-full max-w-none px-4 sm:px-8 md:px-12 lg:px-16 mx-auto">
        
        {/* Breadcrumbs */}
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <li><Link href="/" className="hover:text-[#064743]">Strona główna</Link></li>
            <li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li><Link href="/baza-wiedzy" className="hover:text-[#064743]">Baza wiedzy</Link></li>
            <li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li className="text-slate-800 font-bold truncate">Wszystko o konsultacjach online</li>
          </ol>
        </nav>

        {/* Hero Area */}
        <section className="bg-white rounded-3xl border border-slate-100 p-8 md:p-12 shadow-sm mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left text */}
            <div className="col-span-1 lg:col-span-7">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#E8F3F1] text-[#064743] border border-[#DAE9E6] mb-4">
                KOMPENDIUM
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
                Wszystko o <br />konsultacjach online
              </h1>
              <p className="text-slate-600 text-sm md:text-base mb-8 leading-relaxed">
                Dowiedz się jak działają e-wizyty, recepty online i konsultacje ze specjalistami w jednym miejscu.
              </p>

              {/* 4 badges row */}
              <div className="flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 bg-[#E8F3F1] text-[#064743] text-[10px] sm:text-xs font-bold px-3 py-2 rounded-xl border border-[#DAE9E6]">
                  <CheckCircle className="w-4 h-4 text-[#064743]" />
                  Bez kolejek
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#E8F3F1] text-[#064743] text-[10px] sm:text-xs font-bold px-3 py-2 rounded-xl border border-[#DAE9E6]">
                  <Clock className="w-4 h-4 text-[#064743]" />
                  Dostępne 24/7
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#E8F3F1] text-[#064743] text-[10px] sm:text-xs font-bold px-3 py-2 rounded-xl border border-[#DAE9E6]">
                  <ShieldCheck className="w-4 h-4 text-[#064743]" />
                  Bezpieczne
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#E8F3F1] text-[#064743] text-[10px] sm:text-xs font-bold px-3 py-2 rounded-xl border border-[#DAE9E6]">
                  <UserCheck className="w-4 h-4 text-[#064743]" />
                  Certyfikowani lekarze
                </span>
              </div>
            </div>

            {/* Right graphic: Smartphone Mockup */}
            <div className="col-span-1 lg:col-span-5 flex justify-center">
              <div className="relative group max-w-[240px]">
                {/* Floating checkmark badge */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#064743] text-white border-2 border-white flex items-center justify-center shadow-lg z-10">
                  <Check className="w-5 h-5 stroke-[3]" />
                </div>
                <div className="absolute inset-0 bg-[#064743]/5 rounded-full blur-xl group-hover:bg-[#064743]/10 transition-all duration-500" />
                <img
                  src="/how_it_works_phone.png"
                  alt="Makieta telefonu e-konsultacji"
                  className="w-full h-auto object-contain relative transform group-hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>

          </div>
        </section>


        {/* FAQ Accordion Section */}
        <section className="bg-white border border-slate-100 p-6 md:p-8 rounded-3xl shadow-sm mb-12">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-8 border-b border-slate-100 pb-4">
            Najczęściej zadawane pytania
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="border border-slate-100 rounded-xl overflow-hidden shadow-sm transition-all duration-300 bg-white">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 p-4 text-left font-bold text-slate-800 text-xs sm:text-sm hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className={`transition-transform duration-300 ${isOpen ? "rotate-90 text-[#064743]" : "text-slate-400"}`}>
                      <ChevronRight className="w-4.5 h-4.5" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-1 border-t border-slate-50 bg-[#F5FAF9]/20 text-slate-600 text-xs leading-relaxed animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>


        {/* Outcomes grid */}
        <section className="mb-12">
          <h3 className="text-xl font-extrabold text-slate-900 text-center mb-8">
            Co możesz otrzymać podczas konsultacji?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-[#DAE9E6] p-6 rounded-2xl shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#E8F3F1] text-[#064743] border border-[#DAE9E6] flex items-center justify-center mb-4">
                <Pill className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-sm text-slate-800 mb-1">e-recepta</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">Recepty online na potrzebne leki.</p>
            </div>

            <div className="bg-white border border-[#DAE9E6] p-6 rounded-2xl shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#E8F3F1] text-[#064743] border border-[#DAE9E6] flex items-center justify-center mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-sm text-slate-800 mb-1">e-zwolnienie (L4)</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">Zwolnienie lekarskie bez wychodzenia.</p>
            </div>

            <div className="bg-white border border-[#DAE9E6] p-6 rounded-2xl shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#E8F3F1] text-[#064743] border border-[#DAE9E6] flex items-center justify-center mb-4">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-sm text-slate-800 mb-1">Skierowanie</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">Skierowanie na badania laboratoryjne.</p>
            </div>

            <div className="bg-white border border-[#DAE9E6] p-6 rounded-2xl shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-[#E8F3F1] text-[#064743] border border-[#DAE9E6] flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-sm text-slate-800 mb-1">Zalecenia lekarskie</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">Indywidualne zalecenia i plan leczenia.</p>
            </div>
          </div>
        </section>


        {/* Gotowy na konsultacje banner */}
        <section className="bg-[#E8F3F1] border border-[#DAE9E6] rounded-3xl p-8 shadow-sm mb-12 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="col-span-1 md:col-span-7 text-left">
              <h4 className="font-extrabold text-slate-900 text-lg md:text-xl mb-2">Gotowy na konsultację online?</h4>
              <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                Skorzystaj z profesjonalnej pomocy lekarskiej bez konieczności wychodzenia z domu.
              </p>
              <a
                href="/wypelnij-formularz"
                className="inline-flex items-center justify-center gap-2 bg-[#064743] hover:bg-[#1A5D54] text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow-md transition cursor-pointer min-h-[44px]"
              >
                Rozpocznij konsultację online
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            {/* Laptop Mockup with checkmark */}
            <div className="col-span-1 md:col-span-5 flex justify-center md:justify-end relative">
              <div className="relative pt-4">
                {/* Cup and plant decoration */}
                <div className="absolute -left-8 bottom-0 w-6 h-8 bg-amber-100 rounded-t-md border-t-2 border-amber-600 hidden sm:block shadow-sm" title="kubek" />
                <div className="absolute -right-8 bottom-0 w-6 h-10 bg-[#064743]/80 rounded-t-full hidden sm:block shadow-sm" title="roślina" />
                
                <div className="relative w-44 h-28 bg-slate-900 border-4 border-slate-800 rounded-t-lg flex items-center justify-center shadow-lg">
                  <div className="w-full h-full bg-white rounded-t-sm flex items-center justify-center p-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600 shadow-sm">
                      <Check className="w-6 h-6 stroke-[3]" />
                    </div>
                  </div>
                  {/* Keyboard base */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[114%] h-2 bg-slate-700 rounded-b-lg border-t border-slate-600 shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Testimonials */}
        <section className="bg-white border border-slate-100 p-6 md:p-8 rounded-3xl shadow-sm mb-12">
          <h3 className="text-xl font-extrabold text-slate-900 text-center mb-8">
            Co mówią pacjenci?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100">
              <div className="flex gap-1 mb-3 text-emerald-500">
                <Star className="w-4 h-4 fill-emerald-500" />
                <Star className="w-4 h-4 fill-emerald-500" />
                <Star className="w-4 h-4 fill-emerald-500" />
                <Star className="w-4 h-4 fill-emerald-500" />
                <Star className="w-4 h-4 fill-emerald-500" />
              </div>
              <p className="text-slate-600 text-xs leading-relaxed mb-4">
                "Bardzo szybka i profesjonalna pomoc. Recepta i kod PIN otrzymane w 15 minut tego samego dnia."
              </p>
              <div className="font-bold text-xs text-slate-800">Katarzyna, 32 lata</div>
            </div>

            <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100">
              <div className="flex gap-1 mb-3 text-emerald-500">
                <Star className="w-4 h-4 fill-emerald-500" />
                <Star className="w-4 h-4 fill-emerald-500" />
                <Star className="w-4 h-4 fill-emerald-500" />
                <Star className="w-4 h-4 fill-emerald-500" />
                <Star className="w-4 h-4 fill-emerald-500" />
              </div>
              <p className="text-slate-600 text-xs leading-relaxed mb-4">
                "Wygodnie, bezpiecznie, bez stania w kolejce do przychodni. Genialne rozwiązanie na e-zwolnienia."
              </p>
              <div className="font-bold text-xs text-slate-800">Marek, 45 lat</div>
            </div>

            <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100">
              <div className="flex gap-1 mb-3 text-emerald-500">
                <Star className="w-4 h-4 fill-emerald-500" />
                <Star className="w-4 h-4 fill-emerald-500" />
                <Star className="w-4 h-4 fill-emerald-500" />
                <Star className="w-4 h-4 fill-emerald-500" />
                <Star className="w-4 h-4 fill-emerald-500" />
              </div>
              <p className="text-slate-600 text-xs leading-relaxed mb-4">
                "Świetna platforma, pełen profesjonalizm lekarzy i brak jakichkolwiek problemów z realizacją w aptece."
              </p>
              <div className="font-bold text-xs text-slate-800">Anna, 28 lat</div>
            </div>
          </div>
        </section>


        {/* Security badges at bottom */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-[#DAE9E6]/30 border border-[#DAE9E6]/60 p-4 rounded-xl">
            <span className="font-extrabold text-[#064743] text-xs">Dostępne 24/7</span>
            <p className="text-[10px] text-slate-500 mt-0.5">Konsultacje o każdej porze</p>
          </div>
          <div className="bg-[#DAE9E6]/30 border border-[#DAE9E6]/60 p-4 rounded-xl">
            <span className="font-extrabold text-[#064743] text-xs">Bez wychodzenia</span>
            <p className="text-[10px] text-slate-500 mt-0.5">100% z Twojego domu</p>
          </div>
          <div className="bg-[#DAE9E6]/30 border border-[#DAE9E6]/60 p-4 rounded-xl">
            <span className="font-extrabold text-[#064743] text-xs">Bezpieczne dane</span>
            <p className="text-[10px] text-slate-500 mt-0.5">Szyfrowanie SSL i RODO</p>
          </div>
          <div className="bg-[#DAE9E6]/30 border border-[#DAE9E6]/60 p-4 rounded-xl">
            <span className="font-extrabold text-[#064743] text-xs">Certyfikowani lekarze</span>
            <p className="text-[10px] text-slate-500 mt-0.5">Polskie PWZ weryfikowane</p>
          </div>
        </section>

      </div>
    </div>
  );
}

// -------------------------------------------------------------
// GUIDE 3: Kontynuacja terapii chorób przewlekłych online
// -------------------------------------------------------------
function TherapyContinuationPage() {
  return (
    <div className="bg-slate-50/50 min-h-screen pt-[90px] sm:pt-[110px] pb-16">
      <div className="w-full max-w-none px-4 sm:px-8 md:px-12 lg:px-16 mx-auto">
        
        {/* Breadcrumbs */}
        <nav className="mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <li><Link href="/" className="hover:text-[#064743]">Strona główna</Link></li>
            <li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li><Link href="/baza-wiedzy" className="hover:text-[#064743]">Baza wiedzy</Link></li>
            <li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li className="text-slate-800 font-bold truncate">Kontynuacja terapii chorób przewlekłych</li>
          </ol>
        </nav>

        {/* Hero Area */}
        <section className="bg-white rounded-3xl border border-slate-100 p-8 md:p-12 shadow-sm mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left text */}
            <div className="col-span-1 lg:col-span-7">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#E8F3F1] text-[#064743] border border-[#DAE9E6] mb-4">
                BEZPIECZEŃSTWO
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
                Kontynuacja terapii <br />bez wychodzenia z domu
              </h1>
              <p className="text-slate-600 text-sm md:text-base mb-8 leading-relaxed">
                Bezpieczne przedłużenie leczenia dla pacjentów ze zdiagnozowanymi chorobami przewlekłymi.
              </p>

              {/* 4 badges row */}
              <div className="flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-1.5 bg-[#E8F3F1] text-[#064743] text-[10px] sm:text-xs font-bold px-3.5 py-2 rounded-xl border border-[#DAE9E6]">
                  <Check className="w-4 h-4 text-[#064743]" />
                  Bez kolejek
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#E8F3F1] text-[#064743] text-[10px] sm:text-xs font-bold px-3.5 py-2 rounded-xl border border-[#DAE9E6]">
                  <Clock className="w-4 h-4 text-[#064743]" />
                  Dostępne 24/7
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#E8F3F1] text-[#064743] text-[10px] sm:text-xs font-bold px-3.5 py-2 rounded-xl border border-[#DAE9E6]">
                  <ShieldCheck className="w-4 h-4 text-[#064743]" />
                  Bezpieczne
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#E8F3F1] text-[#064743] text-[10px] sm:text-xs font-bold px-3.5 py-2 rounded-xl border border-[#DAE9E6]">
                  <Heart className="w-4 h-4 text-[#064743]" />
                  Dla przewlekle chorych
                </span>
              </div>
            </div>

            {/* Right graphic: Portrait of senior woman using phone */}
            <div className="col-span-1 lg:col-span-5 flex justify-center">
              <div className="relative group max-w-[280px]">
                {/* Floating green checkmark badge overlapping the senior woman's image */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#064743] text-white border-2 border-white flex items-center justify-center shadow-lg z-10">
                  <Check className="w-5 h-5 stroke-[3]" />
                </div>
                <div className="absolute inset-0 bg-[#064743]/5 rounded-3xl blur-2xl group-hover:bg-[#064743]/10 transition-all duration-500" />
                <img
                  src="/how_it_works_senior_woman.png"
                  alt="Seniorka z telefonem"
                  className="w-full h-auto object-contain relative rounded-3xl shadow-sm group-hover:scale-102 transition-all duration-300"
                />
              </div>
            </div>

          </div>
        </section>


        {/* Two Column details: Kiedy warto skorzystac & Dla kogo */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left: Kiedy warto skorzystać */}
          <div className="col-span-1 lg:col-span-6 bg-white border border-slate-100 p-6 md:p-8 rounded-3xl shadow-sm">
            <h3 className="font-extrabold text-slate-900 text-lg mb-4">Kiedy warto skorzystać?</h3>
            <p className="text-slate-600 text-xs mb-6">Jeśli stale przyjmujesz leki i potrzebujesz szybkiego, bezpiecznego przedłużenia leczenia:</p>
            
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-700 text-xs">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Przedłużenia recepty na przyjmowane leki stałe</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700 text-xs">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Konsultacji kontrolnej dotyczącej postępu terapii</span>
              </li>
              <li className="flex items-center gap-3 text-slate-700 text-xs">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Omówienia wyników okresowych badań kontrolnych</span>
              </li>
            </ul>
          </div>

          {/* Right: Dla kogo */}
          <div className="col-span-1 lg:col-span-6 bg-white border border-slate-100 p-6 md:p-8 rounded-3xl shadow-sm">
            <div className="flex flex-col sm:flex-row gap-6 justify-between items-center h-full">
              <div className="flex-1 w-full">
                <h3 className="font-extrabold text-slate-900 text-lg mb-4">Dla kogo?</h3>
                <p className="text-slate-600 text-xs mb-6">Usługa skierowana do pacjentów z chorobami przewlekłymi, takimi jak:</p>
                
                <div className="grid grid-cols-2 gap-3.5 text-slate-700 text-xs">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4.5 h-4.5 text-[#064743]" />
                    <span>Nadciśnienie</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="w-4.5 h-4.5 text-[#064743]" />
                    <span>Cukrzyca</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="w-4.5 h-4.5 text-[#064743]" />
                    <span>Astma</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="w-4.5 h-4.5 text-[#064743]" />
                    <span>Choroby tarczycy</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2">
                    <Activity className="w-4.5 h-4.5 text-[#064743]" />
                    <span>Inne schorzenia stałe</span>
                  </div>
                </div>
              </div>

              {/* Vector Group Icon placeholder next to diseases grid */}
              <div className="hidden sm:flex w-24 h-24 rounded-2xl bg-[#E8F3F1] border border-[#DAE9E6] items-center justify-center shrink-0">
                <Stethoscope className="w-12 h-12 text-[#064743]" />
              </div>
            </div>
          </div>
        </section>


        {/* Jak wyglada proces */}
        <section className="bg-white border border-slate-100 p-6 md:p-8 rounded-3xl shadow-sm mb-12">
          <h3 className="font-extrabold text-slate-900 text-xl text-center mb-8">Jak wygląda proces?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-8">
            {/* Step 1 */}
            <div className="text-center flex flex-col items-center relative">
              <div className="w-12 h-12 rounded-full bg-[#E8F3F1] text-[#064743] border border-[#DAE9E6] flex items-center justify-center font-extrabold text-base mb-4 shadow-sm">
                1
              </div>
              <h4 className="font-extrabold text-sm text-slate-800 mb-1.5">Wypełnij formularz</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed max-w-xs">
                Krótki wywiad medyczny online. Opisz swój stan i aktualnie stosowane leczenie.
              </p>

              {/* Layout Arrow 1 -> 2 */}
              <div className="hidden md:block absolute top-6 -right-4 translate-x-1/2 text-[#DAE9E6]">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center flex flex-col items-center relative">
              {/* ClipboardList icon badge on Step 2 */}
              <div className="w-12 h-12 rounded-full bg-[#E8F3F1] text-[#064743] border border-[#DAE9E6] flex items-center justify-center mb-4 shadow-sm">
                <ClipboardList className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-sm text-slate-800 mb-1.5">Lekarz analizuje zgłoszenie</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed max-w-xs">
                Weryfikacja historii leczenia, dokumentacji oraz analiza przesłanych informacji.
              </p>

              {/* Layout Arrow 2 -> 3 */}
              <div className="hidden md:block absolute top-6 -right-4 translate-x-1/2 text-[#DAE9E6]">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#E8F3F1] text-[#064743] border border-[#DAE9E6] flex items-center justify-center font-extrabold text-base mb-4 shadow-sm">
                3
              </div>
              <h4 className="font-extrabold text-sm text-slate-800 mb-1.5">Otrzymujesz dokumenty</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed max-w-xs">
                Kod e-recepty w wiadomości SMS oraz dokumentacja medyczna na wskazany adres e-mail.
              </p>
            </div>
          </div>

          {/* Warning box */}
          <div className="bg-[#F5FAF9]/30 border border-[#DAE9E6] p-4 rounded-xl flex items-start gap-3 text-left">
            <Lock className="w-5 h-5 text-[#064743] shrink-0 mt-0.5" />
            <div>
              <span className="font-extrabold text-slate-800 text-[10px] uppercase tracking-wider block">Bezpieczeństwo terapii</span>
              <p className="text-[11px] text-slate-600 leading-relaxed mt-0.5">
                Każda konsultacja realizowana jest indywidualnie przez lekarza, zgodnie z aktualną dokumentacją medyczną pacjenta i obowiązującymi w Polsce standardami etyki lekarskiej.
              </p>
            </div>
          </div>
        </section>


        {/* Continuation Banner with image on the right */}
        <section className="bg-[#E8F3F1] border border-[#DAE9E6] rounded-3xl p-8 shadow-sm mb-12 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="col-span-1 md:col-span-7 text-left">
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-2">Kontynuuj leczenie bez wychodzenia z domu</h3>
              <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                Szybko, wygodnie i w pełni bezpiecznie przedłużysz swoje stałe leczenie online.
              </p>
              <a
                href="/wypelnij-formularz"
                className="inline-flex items-center justify-center gap-2 bg-[#064743] hover:bg-[#1A5D54] text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow-md transition cursor-pointer min-h-[44px]"
              >
                Kontynuuj leczenie online
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            {/* Medicine 3D illustration on the right */}
            <div className="col-span-1 md:col-span-5 flex justify-center md:justify-end">
              <div className="relative w-44 h-32 transform hover:scale-105 transition-all duration-300">
                <img
                  src="/continuation_3d.png"
                  alt="Przedłużenie leczenia chorób przewlekłych"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>


        {/* Why Us section */}
        <section className="mb-12">
          <h3 className="text-xl font-extrabold text-slate-900 text-center mb-8">Dlaczego warto?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#E8F3F1] text-[#064743] border border-[#DAE9E6] flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-sm text-slate-800 mb-1">Oszczędność czasu</h4>
              <p className="text-[10px] text-slate-500 leading-relaxed">Bez stania w długich kolejkach w przychodni.</p>
            </div>

            <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#E8F3F1] text-[#064743] border border-[#DAE9E6] flex items-center justify-center mb-4">
                <Home className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-sm text-slate-800 mb-1">Wygoda</h4>
              <p className="text-[10px] text-slate-500 leading-relaxed">Przedłużenie leczenia z dowolnego miejsca.</p>
            </div>

            <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#E8F3F1] text-[#064743] border border-[#DAE9E6] flex items-center justify-center mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-sm text-slate-800 mb-1">Stałość leczenia</h4>
              <p className="text-[10px] text-slate-500 leading-relaxed">Nie przerywaj terapii chorób stałych.</p>
            </div>

            <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#E8F3F1] text-[#064743] border border-[#DAE9E6] flex items-center justify-center mb-4">
                <Stethoscope className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-sm text-slate-800 mb-1">Profesjonalna opieka</h4>
              <p className="text-[10px] text-slate-500 leading-relaxed">Opieka wykwalifikowanych, sprawdzonych lekarzy.</p>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
}

// -------------------------------------------------------------
// DEFAULT / FALLBACK ARTICLE COMPONENTS (ORIGINAL VIEW)
// -------------------------------------------------------------
function FloatingBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#DAE9E6]/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/3 -left-20 w-60 h-60 bg-gradient-to-tr from-emerald-100/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-1/4 w-40 h-40 bg-gradient-to-r from-orange-100/20 to-transparent rounded-full blur-3xl" />
    </div>
  );
}

function DefaultBreadcrumb({ slug }: { slug: string }) {
  return (
    <nav className="mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <Link
            href="/baza-wiedzy"
            className="text-slate-500 hover:text-[#064743] transition-colors flex items-center gap-1"
          >
            <ArrowLeft size={14} />
            Baza wiedzy
          </Link>
        </li>
        <li className="text-slate-300">
          <ChevronRight size={14} />
        </li>
        <li className="text-slate-900 font-medium truncate">{slug.replace(/-/g, " ")}</li>
      </ol>
    </nav>
  );
}

function DefaultArticleHero({ article }: { article: ArticleData }) {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-[#DAE9E6] pt-8 pb-12">
      <FloatingBackground />
      <div className="max-w-4xl mx-auto px-6 relative">
        <DefaultBreadcrumb slug={article.slug} />

        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${article.tagColor} mb-4`}
        >
          {article.tag}
        </span>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
          {article.title}
        </h1>

        {article.subtitle && (
          <p className="text-xl text-slate-600 mb-6">{article.subtitle}</p>
        )}

        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          {article.description}
        </p>
      </div>
    </section>
  );
}

function DefaultArticleImage({ image, title }: { image: string; title: string }) {
  return (
    <section className="max-w-5xl mx-auto px-6 -mt-8 relative z-10">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}

function DefaultArticleContent({ sections }: { sections?: ArticleSection[] }) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <section className="py-12">
      <div className="max-w-3xl mx-auto px-6">
        <div className="prose prose-lg max-w-none">
          {sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {section.title}
              </h2>
              {section.content.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="text-slate-600 mb-4 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DefaultKeyTakeaways({ sections }: { sections?: ArticleSection[] }) {
  if (!sections || sections.length === 0) {
    return null;
  }

  const keyPoints: string[] = [];
  sections.forEach((section) => {
    section.content.forEach((paragraph) => {
      const sentences = paragraph.split(". ");
      if (sentences[0]) {
        keyPoints.push(sentences[0].replace(/^"/, "").replace(/"$/, "") + ".");
      }
    });
  });

  if (keyPoints.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-gradient-to-br from-[#DAE9E6] to-emerald-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <CheckCircle className="text-emerald-500" size={24} />
            Najważniejsze informacje
          </h3>
          <ul className="space-y-4">
            {keyPoints.slice(0, 5).map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-emerald-600 text-sm font-bold">
                    {index + 1}
                  </span>
                </div>
                <p className="text-slate-700">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function DefaultRelatedArticlesSection({
  articles,
}: {
  articles: RelatedArticle[];
}) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">
          Powiązane artykuły
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Link
              key={index}
              href={`/baza-wiedzy/${article.slug}`}
              className="group block bg-white rounded-2xl border-2 border-slate-100 overflow-hidden hover:border-[#1A5D54] hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-40">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span
                  className={`absolute left-3 top-3 px-2 py-1 rounded-full text-xs font-semibold text-white ${article.tagColor}`}
                >
                  {article.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-[#064743] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-500 line-clamp-2">
                  {article.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function DefaultCTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#064743] to-[#1A5D54]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Potrzebujesz konsultacji lekarskiej?
        </h2>
        <p className="text-[#DAE9E6] mb-8 text-lg">
          Skorzystaj z telekonsultacji i otrzymaj e-receptę bez wychodzenia z
          domu. Szybko, bezpiecznie, online.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/add-medicine"
            className="px-8 py-4 bg-white text-[#064743] rounded-full font-semibold hover:bg-[#DAE9E6] transition-colors"
          >
            Rozpocznij konsultację
          </Link>
          <Link
            href="/jak-to-dziala"
            className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
          >
            Dowiedz się jak to działa
          </Link>
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// MAIN CLIENT COMPONENT
// -------------------------------------------------------------
export default function ArticlePageClient({
  article,
  relatedArticles,
}: ArticlePageClientProps) {
  
  // Choose page render based on article slug
  const renderContent = () => {
    switch (article.slug) {
      case "jak-sie-przygotowac-do-telekonsultacji":
        return <TeleconsultationPrepPage />;
      case "wszystko-o-konsultacjach-online":
        return <OnlineConsultationsOverviewPage />;
      case "kontynuacja-terapii-online":
        return <TherapyContinuationPage />;
      default:
        return (
          <main className="min-h-screen bg-white pt-24 pb-16">
            <DefaultArticleHero article={article} />
            <DefaultArticleImage image={article.image} title={article.title} />
            <DefaultArticleContent sections={article.sections} />
            <DefaultKeyTakeaways sections={article.sections} />
            <DefaultRelatedArticlesSection articles={relatedArticles} />
            <DefaultCTASection />
          </main>
        );
    }
  };

  return (
    <>
      <Header />
      {renderContent()}
      <Footer />
    </>
  );
}
