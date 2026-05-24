import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  Clock,
  ShieldCheck,
  Heart,
  Activity,
  Stethoscope,
  ClipboardList,
  ArrowRight,
  Lock,
  ChevronRight,
  Home,
  FileText
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kontynuacja terapii bez wychodzenia z domu | Platforma",
  description: "Bezpieczne przedłużenie leczenia dla osób przewlekle chorych. Zamów e-receptę na leki stałe online.",
  keywords: ["kontynuacja terapii", "przedłużenie recepty", "choroby przewlekłe", "recepta online"],
};

export default function TherapyContinuationPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen pt-8 pb-20" id="main-content">
        <div className="w-[90vw] mx-auto px-6 relative">

          {/* Breadcrumbs */}
          <nav className="mb-14 relative z-20" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-slate-500 font-medium">
              <li><Link href="/" className="hover:text-emerald-700 transition-colors">Strona główna</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li><Link href="/baza-wiedzy" className="hover:text-emerald-700 transition-colors">Baza wiedzy</Link></li>
              <li><ChevronRight className="w-4 h-4" /></li>
              <li className="text-slate-800 font-semibold truncate">Kontynuacja terapii chorób przewlekłych</li>
            </ol>
          </nav>

          {/* Hero Area */}
          <section className="relative mb-24 min-h-[400px] lg:min-h-[500px] flex flex-col justify-center mt-4">

            {/* Background Image with Fade */}
            <div className="absolute inset-y-0 right-0 w-full lg:w-[50%] z-0 pointer-events-none flex justify-end">
              <div className="relative w-full h-full max-w-4xl" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 60%)', maskImage: 'linear-gradient(to right, transparent, black 55%)' }}>
                <img
                  src="/how_it_works_senior_woman.png"
                  alt="Seniorka z telefonem"
                  className="w-full h-full object-cover object-[center_top] lg:object-[center_right] opacity-95"
                />
              </div>
            </div>

            {/* Content Container */}
            <div className="relative z-20 w-full">
              <div className="max-w-2xl pt-10 pb-20 lg:py-0">
                <h1 className="text-4xl md:text-5xl lg:text-[64px] font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                  Kontynuacja terapii <br className="hidden sm:block" />bez wychodzenia z domu
                </h1>
                <p className="text-slate-800 text-lg md:text-xl max-w-sm leading-relaxed mb-0 font-medium">
                  Bezpieczne przedłużenie leczenia dla osób przewlekle chorych.
                </p>
              </div>
            </div>

            {/* Floating Shield */}
            <div className="absolute bottom-[30%] right-[10%] sm:right-[20%] lg:right-[42%] lg:bottom-[15%] z-20 animate-bounce-slow">
              <svg width="90" height="108" viewBox="0 0 24 24" fill="#3B8262" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
                <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" />
                <path d="M9 12L11 14L15 10" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </section>

          {/* 4 badges row */}
          <section className="mb-24 relative z-20 -mt-10">
            <div className="bg-white rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-50 p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
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
                <Heart className="w-6 h-6 text-emerald-700" strokeWidth={1.5} />
                <span className="font-semibold text-slate-700 text-sm md:text-base">Dla przewlekle chorych</span>
              </div>
            </div>
          </section>

          {/* Two Column details: Kiedy warto skorzystac & Dla kogo */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
            {/* Left: Kiedy warto skorzystać */}
            <div className="col-span-1 lg:col-span-6 bg-white border border-slate-100 p-10 md:p-12 rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <h3 className="font-extrabold text-slate-900 text-2xl md:text-3xl mb-6">Kiedy warto skorzystać?</h3>
              <p className="text-slate-600 text-sm sm:text-base mb-8">Jeśli stale przyjmujesz leki i potrzebujesz:</p>

              <ul className="space-y-5">
                <li className="flex items-center gap-4 text-slate-700 text-sm sm:text-base">
                  <div className="w-8 h-8 rounded-[0.6rem] bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <span className="font-medium">przedłużenia recepty</span>
                </li>
                <li className="flex items-center gap-4 text-slate-700 text-sm sm:text-base">
                  <div className="w-8 h-8 rounded-[0.6rem] bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <span className="font-medium">konsultacji kontrolnej</span>
                </li>
                <li className="flex items-center gap-4 text-slate-700 text-sm sm:text-base">
                  <div className="w-8 h-8 rounded-[0.6rem] bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <span className="font-medium">omówienia leczenia</span>
                </li>
              </ul>
            </div>

            {/* Right: Dla kogo */}
            <div className="col-span-1 lg:col-span-6 bg-white border border-slate-100 p-10 md:p-12 rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <div className="flex flex-col sm:flex-row gap-8 justify-between items-center h-full">
                <div className="flex-1 w-full">
                  <h3 className="font-extrabold text-slate-900 text-2xl md:text-3xl mb-6">Dla kogo?</h3>
                  <p className="text-slate-600 text-sm sm:text-base mb-8">Usługa dla pacjentów z chorobami przewlekłymi m.in.:</p>

                  <div className="grid grid-cols-2 gap-5 text-slate-700 text-sm sm:text-base">
                    <div className="flex items-center gap-3">
                      <Activity className="w-5 h-5 text-emerald-700" strokeWidth={2} />
                      <span className="font-medium">nadciśnienie</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Activity className="w-5 h-5 text-emerald-700" strokeWidth={2} />
                      <span className="font-medium">cukrzyca</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Activity className="w-5 h-5 text-emerald-700" strokeWidth={2} />
                      <span className="font-medium">astma</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Activity className="w-5 h-5 text-emerald-700" strokeWidth={2} />
                      <span className="font-medium">choroby tarczycy</span>
                    </div>
                    <div className="flex items-center gap-3 col-span-2">
                      <Activity className="w-5 h-5 text-emerald-700" strokeWidth={2} />
                      <span className="font-medium">i inne</span>
                    </div>
                  </div>
                </div>

                {/* Vector Group Icon next to diseases grid */}
                <div className="hidden sm:flex w-32 h-32 rounded-2xl bg-emerald-50 border border-emerald-100 items-center justify-center shrink-0">
                  <Stethoscope className="w-16 h-16 text-emerald-700" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </section>

          {/* Jak wyglada proces */}
          <section className="bg-white border border-slate-100 p-10 md:p-14 rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.04)] mb-24">
            <h3 className="font-extrabold text-slate-900 text-3xl md:text-4xl text-center mb-16">Jak wygląda proces?</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-12">
              {/* Step 1 */}
              <div className="text-center flex flex-col items-center relative z-10">
                <div className="w-16 h-16 rounded-[1.25rem] bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center font-extrabold text-2xl mb-6 shadow-sm">
                  1
                </div>
                <h4 className="font-bold text-lg md:text-xl text-slate-900 mb-3">Wypełnij formularz</h4>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-[250px]">
                  Krótki wywiad medyczny online. Opisz swój stan i aktualne leczenie.
                </p>

                {/* Layout Arrow 1 -> 2 */}
                <div className="hidden md:block absolute top-8 -right-8 translate-x-1/2 text-slate-200">
                  <ArrowRight className="w-8 h-8" strokeWidth={1.5} />
                </div>
              </div>

              {/* Step 2 */}
              <div className="text-center flex flex-col items-center relative z-10">
                <div className="w-16 h-16 rounded-[1.25rem] bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center mb-6 shadow-sm">
                  <ClipboardList className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h4 className="font-bold text-lg md:text-xl text-slate-900 mb-3">Lekarz analizuje zgłoszenie</h4>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-[250px]">
                  Weryfikacja historii leczenia i analiza informacji przez lekarza.
                </p>

                {/* Layout Arrow 2 -> 3 */}
                <div className="hidden md:block absolute top-8 -right-8 translate-x-1/2 text-slate-200">
                  <ArrowRight className="w-8 h-8" strokeWidth={1.5} />
                </div>
              </div>

              {/* Step 3 */}
              <div className="text-center flex flex-col items-center relative z-10">
                <div className="w-16 h-16 rounded-[1.25rem] bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center font-extrabold text-2xl mb-6 shadow-sm">
                  3
                </div>
                <h4 className="font-bold text-lg md:text-xl text-slate-900 mb-3">Otrzymujesz dokumenty</h4>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed max-w-[250px]">
                  E-recepta lub dalsze zalecenia trafiają do Ciebie online.
                </p>
              </div>
            </div>

            {/* Warning box */}
            <div className="bg-slate-50/80 border border-slate-100 p-6 md:p-8 rounded-2xl flex items-start gap-5 text-left max-w-4xl mx-auto">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center shrink-0 shadow-sm">
                <Lock className="w-6 h-6 text-slate-700" strokeWidth={1.5} />
              </div>
              <div>
                <span className="font-bold text-slate-900 text-base md:text-lg block mb-1">Bezpieczeństwo terapii</span>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  Każda konsultacja realizowana jest indywidualnie przez lekarza zgodnie z aktualną dokumentacją medyczną i obowiązującymi standardami.
                </p>
              </div>
            </div>
          </section>


          {/* Continuation Banner with image on the right */}
          <section className="bg-[#F4F9F8] rounded-[2rem] shadow-[0_4px_24px_rgba(0,0,0,0.04)] mb-24 overflow-hidden relative min-h-[280px] flex items-center">

            {/* Background Image with Fade */}
            <div className="absolute inset-y-0 right-0 w-full lg:w-[60%] z-0 pointer-events-none flex justify-end">
              <div className="relative w-full h-full" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 30%)', maskImage: 'linear-gradient(to right, transparent, black 30%)' }}>
                <img
                  src="/lek.png"
                  alt="Przedłużenie leczenia chorób przewlekłych"
                  className="w-full h-full object-cover object-[center_right]"
                />
              </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full p-10 md:p-14">
              <div className="max-w-xl text-left">
                <h3 className="text-2xl md:text-[28px] font-extrabold text-slate-900 mb-2 tracking-tight">Kontynuuj leczenie bez wychodzenia z domu</h3>
                <p className="text-slate-600 text-sm md:text-base mb-8 leading-relaxed font-medium">
                  Szybko, wygodnie i bezpiecznie.
                </p>
                <a
                  href="/wypelnij-formularz"
                  className="inline-flex items-center justify-center gap-3 bg-[#064743] hover:bg-[#1A5D54] text-white font-semibold text-sm sm:text-base px-8 py-4 rounded-xl shadow-md transition cursor-pointer hover:-translate-y-0.5"
                >
                  Kontynuuj leczenie online
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
