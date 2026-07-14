import type { Metadata } from "next";
import Link from "next/link";
import {
  Clock,
  CheckCircle,
  Home,
  ClipboardList,
  FolderOpen,
  Monitor,
  ShieldCheck,
  Phone,
  ArrowRight,
  ChevronRight,
  Pill,
  FileText,
  Stethoscope,
  Armchair,
  Wifi,
  Headset,
  ClipboardCheck,
  User
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Jak przygotować się do telekonsultacji? | Lekarze i Terapeuci",
  description: "Kilka prostych kroków, dzięki którym konsultacja online przebiegnie szybko, komfortowo i skutecznie.",
  keywords: ["telekonsultacja", "przygotowanie do wizyty", "e-konsultacja", "e-recepta"],
};

export default function TeleconsultationPrepPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen relative overflow-hidden" id="main-content">

        {}
        <section className="bg-white pt-6 pb-12">
          <div className="w-full px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36 2xl:px-44">

            {}
            <nav className="mb-4" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <li><Link href="/" className="hover:text-[#064743] transition-colors">Strona główna</Link></li>
                <li><ChevronRight className="w-3 h-3 text-slate-400" /></li>
                <li><Link href="/baza-wiedzy" className="hover:text-[#064743] transition-colors">Baza wiedzy</Link></li>
                <li><ChevronRight className="w-3 h-3 text-slate-400" /></li>
                <li className="text-slate-700 font-semibold truncate">Jak przygotować się do telekonsultacji</li>
              </ol>
            </nav>

            {}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {}
              <div className="col-span-1 lg:col-span-7 pr-0 lg:pr-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 mb-4 leading-[1.15] tracking-tight">
                  Jak przygotować <br className="hidden sm:inline" />się do telekonsultacji?
                </h1>
                <p className="text-slate-600 text-base md:text-base lg:text-lg xl:text-xl mb-8 leading-relaxed max-w-4xl">
                  Kilka prostych kroków, dzięki którym konsultacja online przebiegnie szybko, komfortowo i skutecznie.
                </p>

                {}
                <div className="flex flex-wrap gap-3.5">
                  <span className="inline-flex items-center gap-2 bg-[#F5FAF9] text-slate-700 text-sm sm:text-base font-semibold px-5 py-2.5 rounded-full border border-[#DAE9E6]/60 shadow-sm">
                    <Clock className="w-5 h-5 text-[#064743] stroke-[2]" />
                    5 minut przygotowania
                  </span>
                  <span className="inline-flex items-center gap-2 bg-[#F5FAF9] text-slate-700 text-sm sm:text-base font-semibold px-5 py-2.5 rounded-full border border-[#DAE9E6]/60 shadow-sm">
                    <CheckCircle className="w-5 h-5 text-[#064743] stroke-[2]" />
                    100% online
                  </span>
                  <span className="inline-flex items-center gap-2 bg-[#F5FAF9] text-slate-700 text-sm sm:text-base font-semibold px-5 py-2.5 rounded-full border border-[#DAE9E6]/60 shadow-sm">
                    <Home className="w-5 h-5 text-[#064743] stroke-[2]" />
                    Bez wychodzenia z domu
                  </span>
                </div>
              </div>

              {}
              <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-end select-none">
                <div className="relative w-full xl:max-w-[850px] transform hover:scale-[1.01] transition-transform duration-300">
                  <img
                    src="/nxt.jpeg"
                    alt="Jak przygotować się do telekonsultacji"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

            </div>

          </div>
        </section>

        {}
        <section className="pb-24 relative bg-white">
          <div className="w-full px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36 2xl:px-44 -mt-10 relative z-10">

            {}
            <div className="bg-white border border-slate-100 rounded-[2rem] shadow-sm p-8 sm:p-12 mb-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-slate-100">

                {}
                <div className="p-4 sm:p-6 text-center flex flex-col items-center first:pl-0 last:pr-0">
                  <div className="w-20 h-20 rounded-3xl bg-white text-[#064743] flex items-center justify-center mb-6 shadow-md border border-slate-100">
                    <ClipboardList className="w-10 h-10 stroke-[1.25]" />
                  </div>
                  <h3 className="font-extrabold text-base sm:text-lg md:text-xl text-slate-800 mb-3">Przygotuj informacje</h3>
                  <p className="text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed max-w-[220px]">
                    Zbierz najważniejsze informacje o swoim zdrowiu, lekach i objawach.
                  </p>
                </div>

                {}
                <div className="p-4 sm:p-6 text-center flex flex-col items-center">
                  <div className="w-20 h-20 rounded-3xl bg-white text-[#064743] flex items-center justify-center mb-6 shadow-md border border-slate-100">
                    <Armchair className="w-10 h-10 stroke-[1.25]" />
                  </div>
                  <h3 className="font-extrabold text-base sm:text-lg md:text-xl text-slate-800 mb-3">Zadbaj o miejsce</h3>
                  <p className="text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed max-w-[220px]">
                    Wybierz ciche, dobrze oświetlone miejsce z dostępem do internetu.
                  </p>
                </div>

                {}
                <div className="p-4 sm:p-6 text-center flex flex-col items-center">
                  <div className="w-20 h-20 rounded-3xl bg-white text-[#064743] flex items-center justify-center mb-6 shadow-md border border-slate-100">
                    <FileText className="w-10 h-10 stroke-[1.25]" />
                  </div>
                  <h3 className="font-extrabold text-base sm:text-lg md:text-xl text-slate-800 mb-3">Przygotuj dokumenty</h3>
                  <p className="text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed max-w-[220px]">
                    Miej pod ręką dowód osobisty, wyniki badań i wcześniejsze recepty.
                  </p>
                </div>

                {}
                <div className="p-4 sm:p-6 text-center flex flex-col items-center">
                  <div className="w-20 h-20 rounded-3xl bg-white text-[#064743] flex items-center justify-center mb-6 shadow-md border border-slate-100">
                    <Wifi className="w-10 h-10 stroke-[1.25]" />
                  </div>
                  <h3 className="font-extrabold text-base sm:text-lg md:text-xl text-slate-800 mb-3">Sprawdź sprzęt</h3>
                  <p className="text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed max-w-[220px]">
                    Upewnij się, że kamera, mikrofon i internet działają prawidłowo.
                  </p>
                </div>

                {}
                <div className="p-4 sm:p-6 text-center flex flex-col items-center">
                  <div className="w-20 h-20 rounded-3xl bg-white text-[#064743] flex items-center justify-center mb-6 shadow-md border border-slate-100">
                    <ShieldCheck className="w-10 h-10 stroke-[1.25]" />
                  </div>
                  <h3 className="font-extrabold text-base sm:text-lg md:text-xl text-slate-800 mb-3">Po konsultacji</h3>
                  <p className="text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed max-w-[220px]">
                    Otrzymujesz e-receptę, e-zwolnienie lub inne zalecenia online.
                  </p>
                </div>

              </div>
            </div>

            {}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">

              {}
              <div className="col-span-1 lg:col-span-8 bg-white border border-slate-100 rounded-[2rem] p-8 sm:p-12 shadow-sm flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-8 pb-6 border-b border-slate-100">
                    Szczegółowy przewodnik
                  </h2>

                  <div className="divide-y divide-slate-100">

                    {}
                    <div className="flex items-center gap-6 py-6 first:pt-0">
                      <div className="w-9 h-9 rounded-full bg-[#064743] text-white flex items-center justify-center font-bold text-sm sm:text-base shrink-0 shadow-sm">
                        1
                      </div>
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100/50 flex items-center justify-center text-[#064743] shrink-0">
                        <ClipboardList className="w-7 h-7 stroke-[1.5]" />
                      </div>
                      <div className="flex-1 ml-1">
                        <h4 className="font-extrabold text-slate-900 text-base sm:text-lg md:text-xl mb-1.5">Przygotuj najważniejsze informacje</h4>
                        <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                          Zanotuj swoje objawy, aktualnie przyjmowane leki, wyniki badań oraz pytania do lekarza. Im więcej informacji przekażesz, tym trafniejsza będzie konsultacja.
                        </p>
                      </div>
                    </div>

                    {}
                    <div className="flex items-center gap-6 py-6">
                      <div className="w-9 h-9 rounded-full bg-[#064743] text-white flex items-center justify-center font-bold text-sm sm:text-base shrink-0 shadow-sm">
                        2
                      </div>
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100/50 flex items-center justify-center text-[#064743] shrink-0">
                        <User className="w-7 h-7 stroke-[1.5]" />
                      </div>
                      <div className="flex-1 ml-1">
                        <h4 className="font-extrabold text-slate-900 text-base sm:text-lg md:text-xl mb-1.5">Zadbaj o spokojne miejsce</h4>
                        <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                          Wybierz ciche, dobrze oświetlone miejsce z dostępem do stabilnego internetu. To zapewni komfort i jakość rozmowy z lekarzem.
                        </p>
                      </div>
                    </div>

                    {}
                    <div className="flex items-center gap-6 py-6">
                      <div className="w-9 h-9 rounded-full bg-[#064743] text-white flex items-center justify-center font-bold text-sm sm:text-base shrink-0 shadow-sm">
                        3
                      </div>
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100/50 flex items-center justify-center text-[#064743] shrink-0">
                        <FileText className="w-7 h-7 stroke-[1.5]" />
                      </div>
                      <div className="flex-1 ml-1">
                        <h4 className="font-extrabold text-slate-900 text-base sm:text-lg md:text-xl mb-1.5">Przygotuj dokumenty</h4>
                        <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                          Miej pod ręką dowód osobisty, numer PESEL, wcześniejsze recepty, wyniki badań lub inną dokumentację medyczną.
                        </p>
                      </div>
                    </div>

                    {}
                    <div className="flex items-center gap-6 py-6">
                      <div className="w-9 h-9 rounded-full bg-[#064743] text-white flex items-center justify-center font-bold text-sm sm:text-base shrink-0 shadow-sm">
                        4
                      </div>
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100/50 flex items-center justify-center text-[#064743] shrink-0">
                        <Wifi className="w-7 h-7 stroke-[1.5]" />
                      </div>
                      <div className="flex-1 ml-1">
                        <h4 className="font-extrabold text-slate-900 text-base sm:text-lg md:text-xl mb-1.5">Sprawdź sprzęt</h4>
                        <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                          Upewnij się, że mikrofon, kamera i połączenie internetowe działają poprawnie. Naładuj urządzenie, aby uniknąć przerwania konsultacji.
                        </p>
                      </div>
                    </div>

                    {}
                    <div className="flex items-center gap-6 py-6 last:pb-0">
                      <div className="w-9 h-9 rounded-full bg-[#064743] text-white flex items-center justify-center font-bold text-sm sm:text-base shrink-0 shadow-sm">
                        5
                      </div>
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100/50 flex items-center justify-center text-[#064743] shrink-0">
                        <Headset className="w-7 h-7 stroke-[1.5]" />
                      </div>
                      <div className="flex-1 ml-1">
                        <h4 className="font-extrabold text-slate-900 text-base sm:text-lg md:text-xl mb-1.5">Po konsultacji</h4>
                        <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                          Po zakończonej konsultacji otrzymasz dokumenty online: e-receptę, e-zwolnienie lub zalecenia lekarskie.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {}
              <div className="col-span-1 lg:col-span-4">
                <div className="bg-[#E8F3F1]/40 border border-[#DAE9E6]/40 p-8 sm:p-10 rounded-[2rem] h-full flex flex-col justify-between">
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl lg:text-2xl mb-8 border-b border-[#DAE9E6]/60 pb-6">
                      Co możesz otrzymać?
                    </h3>

                    <div className="space-y-8">

                      {}
                      <div className="flex items-start gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-[#DAE9E6] text-[#064743] flex items-center justify-center shrink-0 shadow-md">
                          <ClipboardCheck className="w-7 h-7 stroke-[1.5]" />
                        </div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-800 mb-1">e-recepta</h4>
                          <p className="text-xs sm:text-sm text-slate-500 leading-normal">Szybkie i bezpieczne recepty online.</p>
                        </div>
                      </div>

                      {}
                      <div className="flex items-start gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-[#DAE9E6] text-[#064743] flex items-center justify-center shrink-0 shadow-md">
                          <FileText className="w-7 h-7 stroke-[1.5]" />
                        </div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-800 mb-1">e-zwolnienie (L4)</h4>
                          <p className="text-xs sm:text-sm text-slate-500 leading-normal">Zwolnienie lekarskie bez wychodzenia z domu.</p>
                        </div>
                      </div>

                      {}
                      <div className="flex items-start gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-[#DAE9E6] text-[#064743] flex items-center justify-center shrink-0 shadow-md">
                          <Stethoscope className="w-7 h-7 stroke-[1.5]" />
                        </div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-800 mb-1">Skierowanie na badania</h4>
                          <p className="text-xs sm:text-sm text-slate-500 leading-normal">Skierowanie na badania laboratoryjne i obrazowe.</p>
                        </div>
                      </div>

                      {}
                      <div className="flex items-start gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-white border border-[#DAE9E6] text-[#064743] flex items-center justify-center shrink-0 shadow-md">
                          <ShieldCheck className="w-7 h-7 stroke-[1.5]" />
                        </div>
                        <div>
                          <h4 className="font-extrabold text-sm sm:text-base text-slate-800 mb-1">Zalecenia lekarskie</h4>
                          <p className="text-xs sm:text-sm text-slate-500 leading-normal">Indywidualne zalecenia i plan leczenia.</p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>

            {}
            <div className="bg-[#E8F3F1]/30 border border-[#DAE9E6]/60 rounded-[2rem] p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-8 shadow-sm text-slate-800">
              <div className="flex items-center gap-6 text-left">
                <div className="w-20 h-20 rounded-full bg-white text-[#064743] flex items-center justify-center shrink-0 shadow-md border border-slate-50">
                  <Headset className="w-10 h-10 stroke-[1.25]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-lg sm:text-xl lg:text-2xl text-slate-900">Masz pytania?</h4>
                  <p className="text-sm sm:text-base text-slate-500 mt-1">
                    Nasz zespół jest dostępny 24/7.
                  </p>
                </div>
              </div>
              <a
                href="/wypelnij-formularz"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#064743] hover:bg-[#1A5D54] text-white font-bold text-sm sm:text-base px-8 py-5 rounded-2xl shadow-md transition cursor-pointer min-h-[52px]"
              >
                Umów telekonsultację
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {}
          <div className="absolute bottom-0 left-0 w-24 h-48 pointer-events-none select-none opacity-20 hidden md:block z-0">
            <img
              src="/hiw_left_decor.png"
              alt="dekoracja liść"
              className="w-full h-full object-contain object-left-bottom"
            />
          </div>

        </section>

      </main>
      <Footer />
    </>
  );
}
