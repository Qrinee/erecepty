"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  UserCheck,
  Clock,
  Lock,
  ArrowRight,
  ChevronRight,
  Home,
  Users,
  Star,
  Check,
  Server,
  MessageSquare,
  Headset,
  FileText,
  Shield,
  Briefcase
} from "lucide-react";

export default function DlaczegoWartoNamZaufacPage() {
  const commitments = [
    {
      icon: UserCheck,
      title: "Zweryfikowani lekarze",
      description: "Współpracujemy wyłącznie z lekarzami posiadającymi aktywny numer PWZ i doświadczenie w telemedycynie."
    },
    {
      icon: Shield,
      title: "Bezpieczeństwo danych",
      description: "Twoje dane są szyfrowane i chronione zgodnie z RODO. Korzystamy z najnowszych technologii zabezpieczeń."
    },
    {
      icon: Clock,
      title: "Szybkość i wygoda",
      description: "E-recepta nawet w 15 minut, bez kolejek i wychodzenia z domu. Działamy wtedy, kiedy tego potrzebujesz."
    },
    {
      icon: FileText,
      title: "Zgodność z prawem",
      description: "Cały proces odbywa się zgodnie z polskimi przepisami oraz standardami medycznymi. Legalnie i odpowiedzialnie."
    },
    {
      icon: MessageSquare,
      title: "Transparentność",
      description: "Jasne zasady, brak ukrytych kosztów. Wiesz, co się dzieje na każdym etapie procesu."
    },
    {
      icon: Headset,
      title: "Wsparcie 24/7",
      description: "Nasz zespół obsługi klienta jest dostępny codziennie, aby odpowiedzieć na Twoje pytania i rozwiać wątpliwości."
    }
  ];

  return (
    <>
      <Header transparent={false} />
      <main id="main-content" className="bg-white min-h-screen" tabIndex={-1}>

        {/* Breadcrumbs */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-slate-800 flex items-center gap-1 transition-colors">
            <Home size={14} className="mt-[-2px]" />
            Strona główna
          </Link>
          <ChevronRight size={12} className="text-slate-400" />
          <span className="text-slate-700 font-medium">Dlaczego warto nam zaufać?</span>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 md:py-20 bg-gradient-to-br from-[#EAF3EF] via-white to-transparent">
          {/* Background decorative circles */}
          <div className="absolute top-10 left-10 w-48 h-48 bg-[#DAE9E6]/40 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-50 rounded-full blur-3xl -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Hero text (left side) */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
                  Dlaczego warto <br className="hidden sm:inline" />
                  nam <span className="text-[#138A56]">zaufać?</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                  Twoje zdrowie i bezpieczeństwo są dla nas najważniejsze. Stawiamy na profesjonalizm, przejrzystość i zgodność z prawem.
                </p>
                <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-2xl px-5 py-3 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[#E8F3EE] text-[#138A56] flex items-center justify-center">
                    <ShieldCheck size={22} />
                  </div>
                  <span className="text-sm font-semibold text-slate-800 text-left">
                    Zaufaj ekspertom. Zadbamy o Ciebie.
                  </span>
                </div>
              </div>

              {/* Hero graphic (right side) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[420px] aspect-[4/5] sm:aspect-square md:aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-slate-50">
                  <img
                    src="/why_trust_us_hero.png"
                    alt="Telefon z gotową e-receptą"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commitments Section (Co nas wyróżnia?) */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-[#138A56] text-xs font-extrabold tracking-widest uppercase block mb-3">
                NASZE ZOBOWIĄZANIA
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Co nas wyróżnia?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {commitments.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-[24px] p-8 shadow-sm border border-slate-100/80 hover:border-emerald-300 hover:shadow-md transition-all duration-300 flex flex-col items-start gap-5 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#E8F3EE] text-[#138A56] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Security Section (Bezpieczeństwo na pierwszym miejscu) */}
        <section className="py-20 bg-[#F8FAF9] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16 items-center">

              {/* Graphic element (left side) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[380px] h-[380px] flex items-center justify-center">
                  {/* Decorative orbital rings */}
                  <div className="absolute w-[300px] h-[300px] border border-dashed border-slate-200 rounded-full animate-[spin_40s_linear_infinite]" />
                  <div className="absolute w-[220px] h-[220px] border border-dashed border-emerald-100 rounded-full" />

                  {/* Center Shield node */}
                  <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-tr from-[#138A56] to-[#2ECC71] text-white flex items-center justify-center shadow-xl shadow-emerald-500/20">
                    <ShieldCheck size={48} className="drop-shadow-md" />
                  </div>

                  {/* Satellite nodes */}
                  {/* SSL */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl border border-slate-100 px-3 py-2 shadow-md flex items-center gap-2 hover:scale-105 transition-transform">
                    <Lock size={16} className="text-[#138A56]" />
                    <span className="text-xs font-bold text-slate-700 whitespace-nowrap">Szyfrowanie SSL</span>
                  </div>

                  {/* RODO */}
                  <div className="absolute right-0 top-1/3 translate-x-2 bg-white rounded-2xl border border-slate-100 px-3 py-2 shadow-md flex items-center gap-2 hover:scale-105 transition-transform">
                    <Shield size={16} className="text-[#138A56]" />
                    <span className="text-xs font-bold text-slate-700 whitespace-nowrap">Zgodność z RODO</span>
                  </div>

                  {/* Serwery */}
                  <div className="absolute left-0 bottom-1/3 -translate-x-2 bg-white rounded-2xl border border-slate-100 px-3 py-2 shadow-md flex items-center gap-2 hover:scale-105 transition-transform">
                    <Server size={16} className="text-[#138A56]" />
                    <span className="text-xs font-bold text-slate-700 whitespace-nowrap">Bezpieczne serwery</span>
                  </div>

                  {/* Przepisy */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl border border-slate-100 px-3 py-2 shadow-md flex items-center gap-2 hover:scale-105 transition-transform">
                    <FileText size={16} className="text-[#138A56]" />
                    <span className="text-xs font-bold text-slate-700 whitespace-nowrap">Polskie przepisy</span>
                  </div>
                </div>
              </div>

              {/* Text elements (right side) */}
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  Bezpieczeństwo na pierwszym miejscu
                </h2>
                <p className="text-slate-600 leading-relaxed font-light">
                  Stosujemy zaawansowane zabezpieczenia, aby chronić Twoje dane na każdym etapie. Twoje zdrowie i prywatność są w dobrych rękach.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  {[
                    "Szyfrowanie SSL 256-bit",
                    "Zgodność z RODO",
                    "Bezpieczne serwery w Polsce",
                    "Regularne audyty i aktualizacje systemów"
                  ].map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100/50">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-sm font-semibold text-slate-700">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Stats Row Section */}
        <section className="py-12 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Users, stat: "250 000+", label: "Zadowolonych pacjentów" },
                { icon: UserCheck, stat: "1000+", label: "Zweryfikowanych lekarzy" },
                { icon: Clock, stat: "15 min", label: "Średni czas realizacji" },
                { icon: ShieldCheck, stat: "99,9%", label: "Bezpiecznych konsultacji" }
              ].map((statItem, idx) => {
                const StatIcon = statItem.icon;
                return (
                  <div key={idx} className="flex items-center gap-4 p-2">
                    <div className="w-12 h-12 rounded-full bg-[#E8F3EE] text-[#138A56] flex items-center justify-center flex-shrink-0">
                      <StatIcon size={24} />
                    </div>
                    <div>
                      <div className="text-xl md:text-2xl font-black text-[#138A56] leading-none mb-1">
                        {statItem.stat}
                      </div>
                      <div className="text-xs md:text-sm text-slate-500 font-medium">
                        {statItem.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom Banner CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-[#EAF3EF] to-[#D5E6E0] rounded-[40px] overflow-hidden p-8 md:p-12 lg:p-16 relative">

              {/* Graphic details */}
              <div className="absolute top-0 right-0 w-[45%] h-full hidden lg:block select-none pointer-events-none">
                <img
                  src="/doctor_recruitment.png"
                  alt="Lekarze"
                  className="w-full h-full object-cover object-center "
                />

                {/* Floating trust badge inside image container */}
                <div className="absolute bottom-12 right-12 bg-white rounded-2xl p-4 shadow-lg border border-slate-100/50 flex flex-col items-center gap-1.5 w-52">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Zaufanie</span>
                  <span className="text-[11px] font-extrabold text-slate-700 text-center">potwierdzone przez pacjentów</span>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#FACC15] text-[#FACC15]" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Text content & buttons */}
              <div className="lg:w-[55%] space-y-6 z-10 relative">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                  Twoje zdrowie jest <br />
                  w dobrych rękach
                </h2>
                <p className="text-slate-600 max-w-xl leading-relaxed font-light">
                  Dołącz do tysięcy pacjentów, którzy nam zaufali i cieszą się wygodną oraz bezpieczną nowoczesną opieką medyczną online.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link
                    href="/wypelnij-formularz"
                    className="inline-flex items-center justify-center gap-2 bg-[#0A4740] hover:bg-[#073530] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-md active:scale-95"
                  >
                    Umów wizytę
                  </Link>
                  <Link
                    href="/jak-to-dziala"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-8 py-4 rounded-xl font-bold transition-all shadow-sm active:scale-95 group"
                  >
                    Jak to działa?
                    <ArrowRight size={16} className="text-[#138A56] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Mobile version badge */}
                <div className="lg:hidden mt-8 inline-flex bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex-col items-start gap-1 w-full max-w-[240px]">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Zaufanie</span>
                  <span className="text-[11px] font-extrabold text-slate-700">potwierdzone przez pacjentów</span>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#FACC15] text-[#FACC15]" />
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
