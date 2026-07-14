"use client";

import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import {
  ClipboardList,
  UserCheck,
  MessageSquare,
  FileText,
  Clock,
  Lock,
  Calendar,
  Phone,
  Mail,
  MessageCircle,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  Shield,
  Home
} from "lucide-react";

export default function JakToDzialaPage() {
  const steps = [
    {
      number: "1",
      icon: ClipboardList,
      title: "Wypełnij formularz",
      description: "Uzupełnij krótki formularz medyczny o swoim stanie zdrowia i historii leczenia."
    },
    {
      number: "2",
      icon: UserCheck,
      title: "Lekarz analizuje zgłoszenie",
      description: "Specjalista dokładnie analizuje Twoje informacje i przygotowuje rekomendację."
    },
    {
      number: "3",
      icon: MessageSquare,
      title: "Otrzymaj decyzję",
      description: "Lekarz kontaktuje się z Tobą i udziela porady lub wystawia zalecenia."
    },
    {
      number: "4",
      icon: FileText,
      title: "Odbierz e-receptę",
      description: "Otrzymujesz kod e-recepty SMS-em i e-mailem. Zrealizujesz ją w każdej aptece."
    }
  ];

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="bg-slate-50/50">

        {}
        <section className="relative bg-gradient-to-br from-[#F5FAF9] via-[#F8FBFB] to-white overflow-hidden pb-0 border-b border-slate-100">
          {}
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#DAE9E6]/30 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#DAE9E6]/25 rounded-full blur-3xl -z-10" />

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {}
              <div className="col-span-1 lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start pt-4 pb-12 lg:pb-16 relative z-10">
                <span className="inline-flex items-center gap-2 bg-[#EAF5F2] text-[#0E6C5F] text-xs font-bold px-3 py-1.5 rounded-full mb-6 shadow-sm">
                  <Clock className="w-3.5 h-3.5" />
                  Nawet w 15 minut
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                  Jak działa <br />
                  <span className="text-[#0E6C5F]">
                    konsultacja online?
                  </span>
                </h1>

                <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl mb-8">
                  To proste! Wystarczą 4 kroki, aby uzyskać profesjonalną poradę bez wychodzenia z domu, bez kolejek i bez zbędnego stresu.
                </p>

                <div className="w-full flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <a
                    href="/wypelnij-formularz"
                    className="inline-flex items-center justify-center gap-2 bg-[#0E6C5F] hover:bg-[#0A4E45] text-white px-8 py-4 rounded-2xl font-extrabold text-sm transition shadow-md hover:shadow-lg group min-h-[44px]"
                  >
                    Rozpocznij konsultację
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-4">
                  {}
                  <div className="flex items-center gap-2 bg-white border border-[#E3ECEB]/80 px-4 py-2.5 rounded-xl shadow-sm">
                    <Clock className="w-4 h-4 text-[#0E6C5F] shrink-0" />
                    <span className="text-slate-700 text-xs font-bold">Nawet w 15 minut</span>
                  </div>
                  {}
                  <div className="flex items-center gap-2 bg-white border border-[#E3ECEB]/80 px-4 py-2.5 rounded-xl shadow-sm">
                    <UserCheck className="w-4 h-4 text-[#0E6C5F] shrink-0" />
                    <span className="text-slate-700 text-xs font-bold">Lekarze z PWZ</span>
                  </div>
                  {}
                  <div className="flex items-center gap-2 bg-white border border-[#E3ECEB]/80 px-4 py-2.5 rounded-xl shadow-sm">
                    <Home className="w-4 h-4 text-[#0E6C5F] shrink-0" />
                    <span className="text-slate-700 text-xs font-bold">Bez wychodzenia z domu</span>
                  </div>
                </div>
              </div>

              {}
              <div className="block lg:hidden col-span-1 w-full pb-8">
                <div className="relative w-full aspect-[2.27/1] overflow-hidden">
                  <Image
                    src="/how_it_works_hero_new.png"
                    alt="Konsultacja lekarska online"
                    fill
                    className="object-contain"
                  />
                  {}
                  <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#F5FAF9] to-transparent z-10" />
                  <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#F5FAF9] to-transparent z-10" />
                  <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10" />
                </div>
              </div>

            </div>
          </div>

          {}
          <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[60%] xl:w-[55%] z-0 pointer-events-none">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/howitworkshero.png"
                alt="Konsultacja lekarska online"
                fill
                priority
                className="object-cover object-right-bottom"
              />
              {}
              <div className="absolute inset-y-0 left-0 w-[25%] bg-gradient-to-r from-[#F5FAF9] via-[#F8FBFB]/80 to-transparent z-10" />
            </div>
          </div>
        </section>


        {}
        <section className="py-20 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4">

            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                4 proste kroki do recepty
              </h2>
              <p className="text-slate-600 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                Cały proces jest intuicyjny i zajmuje tylko kilka minut. Nie musisz instalować żadnych aplikacji ani zakładać kont.
              </p>
            </div>

            <div className="relative mt-20">
              {}
              <div className="hidden lg:block absolute top-[55px] left-[12.5%] right-[12.5%] h-0.5 border-t-2 border-dashed border-[#DAE9E6]" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, idx) => (
                  <div key={idx} className="relative flex flex-col bg-white rounded-2xl border border-slate-100 p-6 pt-12 shadow-sm hover:shadow-xl hover:border-[#DAE9E6] transition-all duration-300 group">

                    {}
                    <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-[#064743] group-hover:bg-[#1A5D54] text-white flex items-center justify-center font-bold text-lg border-4 border-white shadow-md transition-colors duration-300">
                      {step.number}
                    </div>

                    {}
                    <div className="w-14 h-14 rounded-2xl bg-[#F5FAF9] text-[#064743] flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-7 h-7" />
                    </div>

                    <h3 className="font-extrabold text-lg text-slate-800 mb-2 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {step.description}
                    </p>

                    {idx < steps.length - 1 && (
                      <div className="md:hidden absolute bottom-6 right-4 text-slate-300">
                        <ChevronRight className="w-5 h-5" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>


        {}
        <section className="py-20 bg-slate-50/30 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4">

            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                Dlaczego pacjenci wybierają nas?
              </h2>
              <p className="text-slate-600 max-w-lg mx-auto text-sm">
                Dbamy o najwyższe standardy obsługi pacjenta, bezpieczeństwo danych medycznych oraz pełny komfort.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              {}
              <div className="flex items-start gap-4 bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#DAE9E6] text-[#064743] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-800 text-sm mb-1">Konsultacje nawet w 15 minut</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">Szybka pomoc wtedy, kiedy jej potrzebujesz.</p>
                </div>
              </div>

              {}
              <div className="flex items-start gap-4 bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#DAE9E6] text-[#064743] flex items-center justify-center shrink-0">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-800 text-sm mb-1">Lekarze z PWZ</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">Wszyscy nasi lekarze posiadają ważne prawo wykonywania zawodu.</p>
                </div>
              </div>

              {}
              <div className="flex items-start gap-4 bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#DAE9E6] text-[#064743] flex items-center justify-center shrink-0">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-800 text-sm mb-1">Bezpieczne płatności</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">Twoje dane i płatności są w pełni bezpieczne i szyfrowane.</p>
                </div>
              </div>

              {}
              <div className="flex items-start gap-4 bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#DAE9E6] text-[#064743] flex items-center justify-center shrink-0">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-800 text-sm mb-1">Pomoc 7 dni w tygodniu</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">Jesteśmy dostępni codziennie, także w weekendy i święta.</p>
                </div>
              </div>

            </div>

          </div>
        </section>


        {}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full bg-[#F4F8F7] border border-[#E3ECEB]/60 rounded-3xl overflow-hidden shadow-sm">

              {}
              <div className="px-6 py-8 lg:py-6 lg:pl-10 lg:pr-4 shrink-0 text-center lg:text-left max-w-md">
                <h3 className="text-2xl xl:text-3xl font-extrabold text-[#064743] tracking-tight mb-2">
                  Masz pytania?
                </h3>
                <p className="text-[#5A7A75] text-xs xl:text-sm font-medium leading-relaxed">
                  Skontaktuj się z nami – jesteśmy do Twojej dyspozycji
                </p>
              </div>

              {}
              <div className="flex flex-col sm:flex-row gap-3 xl:gap-4 px-6 lg:px-4 py-4 lg:py-6 grow justify-center w-full lg:w-auto">
                {}
                <a
                  href="tel:+48881238227"
                  className="bg-white border border-[#E3ECEB]/60 p-4 rounded-2xl shadow-sm hover:shadow-md hover:border-[#0E6C5F]/30 transition-all duration-300 flex flex-col justify-between grow lg:grow-0 w-full sm:w-1/3 lg:w-[250px] xl:w-[300px] min-h-[110px] group"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Phone className="w-4 h-4 text-[#0E6C5F] group-hover:scale-110 transition-transform shrink-0" />
                      <span className="font-extrabold text-xs text-slate-800">Telefon</span>
                    </div>
                    <div className="font-extrabold text-xs xl:text-sm text-[#064743] group-hover:text-[#0E6C5F] transition-colors mb-1">
                      +48 881 238 227
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-400 font-semibold leading-tight mt-1">
                    Pn-Pt 8:00-20:00, Sb-Nd 9:00-18:00
                  </div>
                </a>

                {}
                <a
                  href="mailto:kontakt@lekarzeiterapeuci.pl"
                  className="bg-white border border-[#E3ECEB]/60 p-4 rounded-2xl shadow-sm hover:shadow-md hover:border-[#0E6C5F]/30 transition-all duration-300 flex flex-col justify-between grow lg:grow-0 w-full sm:w-1/3 lg:w-[250px] xl:w-[300px] min-h-[110px] group"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Mail className="w-4 h-4 text-[#0E6C5F] group-hover:scale-110 transition-transform shrink-0" />
                      <span className="font-extrabold text-xs text-slate-800">E-mail</span>
                    </div>
                    <div className="font-extrabold text-xs xl:text-sm text-[#0E6C5F] group-hover:underline mb-1 break-all">
                      kontakt@lekarzeiterapeuci.pl
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-400 font-semibold leading-tight mt-1">
                    Odpowiadamy w ciągu 15 minut
                  </div>
                </a>

              </div>

              {}
              <div className="relative self-stretch w-[240px] xl:w-[280px] hidden lg:block overflow-hidden shrink-0 select-none">
                <img
                  src="/support_agent_new.png"
                  alt="Masz pytania? Skontaktuj się z nami"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                {}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F4F8F7] to-transparent pointer-events-none" />
              </div>

            </div>
          </div>
        </section>


        {}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-[#064743] rounded-[2.5rem] text-white p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-xl">

              {}
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#DAE9E6]/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="text-center lg:text-left max-w-xl">
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-tight">
                    Porozmawiaj z lekarzem bez wychodzenia z domu
                  </h2>
                  <p className="text-[#DAE9E6]/80 text-sm md:text-base">
                    Uzyskaj e-receptę, L4 lub konsultację nawet w 15 minut.
                  </p>
                </div>

                <div className="flex flex-col items-center shrink-0 w-full lg:w-auto">
                  <a
                    href="/wypelnij-formularz"
                    className="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#DAE9E6] text-[#064743] font-extrabold text-base px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 min-h-[44px] group"
                  >
                    Rozpocznij konsultację
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#DAE9E6]/70 mt-3.5 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    100% bezpiecznie i zgodnie z prawem
                  </span>
                </div>
              </div>

              {}
              <div className="relative z-10 border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-10 text-xs text-white/70">
                <div className="flex items-center gap-2 border border-white/10 px-3.5 py-2 rounded-xl bg-white/5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <div>
                    <span className="font-extrabold text-white block">SSL</span>
                    <span className="text-[10px] opacity-75">Szyfrowane połączenie</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 border border-white/10 px-3.5 py-2 rounded-xl bg-white/5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <div>
                    <span className="font-extrabold text-white block">RODO</span>
                    <span className="text-[10px] opacity-75">Twoje dane są chronione</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 border border-white/10 px-3.5 py-2 rounded-xl bg-white/5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <div>
                    <span className="font-extrabold text-white block">Zaufanie</span>
                    <span className="text-[10px] opacity-75">Tysiące pacjentów nam ufa</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {}
        <FAQSection />

      </main>
      <Footer />
    </>
  );
}
