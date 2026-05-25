"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Clock,
  ShieldCheck,
  FileText,
  Lock,
  Check,
  ArrowRight,
  ChevronRight,
  Home,
  MessageSquare,
  MessageSquarePlus,
  UserCheck,
  FlaskConical,
  TrendingUp,
  HeartPulse,
  Award
} from "lucide-react";

export default function DlaKobietIMezczyznPage() {
  const topTrustItems = [
    {
      icon: Clock,
      title: "Konsultacje",
      desc: "24/7",
    },
    {
      icon: ShieldCheck,
      title: "Dyskrecja",
      desc: "i bezpieczeństwo",
    },
    {
      icon: FileText,
      title: "E-recepta",
      desc: "w kilka minut",
    },
    {
      icon: Lock,
      title: "100% online",
      desc: "bez wychodzenia z domu",
    },
  ];

  const bottomTrustItems = [
    {
      icon: UserCheck,
      title: "Certyfikowani lekarze",
      desc: "Doświadczeni specjaliści z empatią i zaangażowaniem",
    },
    {
      icon: ShieldCheck,
      title: "Twoje dane są bezpieczne",
      desc: "Stosujemy szyfrowanie i najwyższe standardy ochrony danych",
    },
    {
      icon: Award,
      title: "Tysiące zadowolonych pacjentów",
      desc: "Zaufały nam osoby w całej Polsce",
    },
    {
      icon: HeartPulse,
      title: "Pomoc wtedy, gdy jej potrzebujesz",
      desc: "Jesteśmy dostępni 24/7 – również w nocy, weekendy i święta",
    },
  ];

  return (
    <>
      <Header transparent={false} />
      <main id="main-content" className="bg-[#FAFBFB] min-h-screen pt-24 pb-20" tabIndex={-1}>

        {/* Breadcrumbs */}
        <nav className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-slate-800 flex items-center gap-1 transition-colors">
            <Home size={14} className="mt-[-2px]" />
            Strona główna
          </Link>
          <ChevronRight size={12} className="text-slate-400" />
          <span className="text-slate-700 font-medium">Dla kobiet i mężczyzn</span>
        </nav>

        {/* Top Header section */}
        <section className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 border-b border-slate-200/60 pb-10">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Dla <span className="text-rose-500">kobiet</span> i <span className="text-blue-500">mężczyzn</span>
              </h1>
              <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed">
                Dyskretna pomoc medyczna online – szybko, bezpiecznie i bez wychodzenia z domu.
              </p>
            </div>

            {/* Top mini trust items bar */}
            <div className="grid grid-cols-2 gap-4 w-full lg:w-auto lg:max-w-md">
              {topTrustItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white border border-slate-100/85 rounded-2xl p-4 flex items-center gap-3 shadow-sm min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#DAE9E6]/30 text-[#064743] flex items-center justify-center flex-shrink-0">
                      <Icon size={20} />
                    </div>
                    <div className="leading-tight flex flex-col min-w-0">
                      <span className="text-sm font-extrabold text-slate-900 leading-snug">{item.title}</span>
                      <span className="text-xs text-slate-500 font-medium leading-normal mt-0.5">{item.desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Three Columns Grid of Services */}
        <section className="max-w-[100vw] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid gap-3 lg:grid-cols-3">

            {/* Card 1: Tabletka "dzień po" */}
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm flex flex-col justify-between overflow-hidden group hover:shadow-xl hover:border-rose-100 transition-all duration-300">

              {/* Header with integrated image overlay */}
              <div className="relative pt-8 pl-8 pb-4 pr-[42%] min-h-[220px] flex flex-col justify-center bg-[#fef5f8]" >
                {/* Badge & Title */}
                <div className="flex justify-start mb-4">
                  <span className="bg-rose-50 border border-rose-100 text-rose-500 text-xs font-extrabold px-3 py-1 rounded-lg tracking-wider uppercase">
                    Dla kobiet
                  </span>
                </div>

                <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-2">
                  Tabletka <br /> „dzień po”
                </h2>

                <p className="text-sm font-extrabold text-rose-500 leading-snug mb-3">
                  Dyskretna pomoc, kiedy liczy się czas.
                </p>

                <p className="text-sm text-slate-500 leading-relaxed">
                  Konsultacja online z e-receptą na tabletkę „dzień po”.
                </p>

                {/* Absolute Image Overlay on the right */}
                <div className="absolute top-0 right-0 bottom-0 w-[50%] overflow-hidden pointer-events-none select-none">
                  <div className="relative w-full h-full">
                    <Image
                      src="/tabletkadzienpo.jpeg"
                      alt="Tabletka dzień po"
                      fill
                      priority
                      className="object-cover object-center scale-105 transition-transform duration-500"
                    />
                    {/* Left-to-right fade overlay using gradient */}
                    <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#fef5f8]  to-transparent z-10" />
                  </div>
                </div>
              </div>

              {/* Body content with remaining details */}
              <div className="px-8 pt-10 pb-8 flex-grow flex flex-col justify-between">
                <div>
                  {/* Checklist */}
                  <ul className="space-y-3 mb-8">
                    {[
                      "Konsultacja online 24/7",
                      "E-recepta w kilka minut",
                      "Dyskrecja i pełne bezpieczeństwo",
                      "Bez konieczności wizyty stacjonarnej"
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center flex-shrink-0">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="text-sm font-semibold text-slate-700">{text}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Sub icons info bar */}
                  <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-9 h-9 rounded-full bg-rose-50/50 text-rose-500 flex items-center justify-center mb-2">
                        <MessageSquarePlus size={18} />
                      </div>
                      <span className="text-[14px] font-bold text-slate-600 leading-tight">Konsultacja online</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-9 h-9 rounded-full bg-rose-50/50 text-rose-500 flex items-center justify-center mb-2">
                        <FileText size={18} />
                      </div>
                      <span className="text-[14px] font-bold text-slate-600 leading-tight">E-recepta od ręki</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-9 h-9 rounded-full bg-rose-50/50 text-rose-500 flex items-center justify-center mb-2">
                        <ShieldCheck size={18} />
                      </div>
                      <span className="text-[14px] font-bold text-slate-600 leading-tight">Bezpiecznie i dyskretnie</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer CTA & Price block */}
              <div className="border-t border-slate-100 p-8 bg-slate-50/40">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-slate-500 font-bold">Cena konsultacji</span>
                  <span className="text-2xl font-black text-rose-500">59 zł</span>
                </div>
                <Link
                  href="/wypelnij-formularz"
                  className="w-full inline-flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-extrabold py-4 px-6 rounded-2xl shadow-lg shadow-rose-500/10 active:scale-98 transition-all group/btn"
                >
                  <span>Umów konsultację</span>
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 2: Antykoncepcja */}
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm flex flex-col justify-between overflow-hidden group hover:shadow-xl hover:border-rose-100 transition-all duration-300">

              {/* Header with integrated image overlay */}
              <div className="relative bg-[#feeff2] pt-8 pl-8 pb-4 pr-[42%] min-h-[250px] flex flex-col justify-center">
                {/* Badge & Title */}
                <div className="flex justify-start mb-4">
                  <span className="bg-rose-50 border border-rose-100 text-rose-500 text-xs font-extrabold px-3 py-1 rounded-lg tracking-wider uppercase">
                    Dla kobiet
                  </span>
                </div>

                <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-2">
                  Antykoncepcja
                </h2>

                <p className="text-sm font-extrabold text-rose-500 leading-snug mb-3">
                  Dobierz antykoncepcję dopasowaną do Ciebie.
                </p>

                <p className="text-sm text-slate-500 leading-relaxed">
                  Konsultacja online z lekarzem i e-recepta na antykoncepcję.
                </p>

                {/* Absolute Image Overlay on the right */}
                <div className="absolute top-0 right-0 bottom-0 w-[50%] overflow-hidden pointer-events-none select-none">
                  <div className="relative w-full h-full">
                    <Image
                      src="/antykoncepcja.jpeg"
                      alt="Antykoncepcja"
                      fill
                      priority
                      className="object-cover object-center scale-105 transition-transform duration-500"
                    />
                    {/* Left-to-right fade overlay using gradient */}
                    <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#feeff2] to-transparent z-10" />
                  </div>
                </div>
              </div>

              {/* Body content with remaining details */}
              <div className="px-8 pt-10 pb-8 flex-grow flex flex-col justify-between">
                <div>
                  {/* Checklist */}
                  <ul className="space-y-3 mb-8">
                    {[
                      "Dobór metod antykoncepcji",
                      "E-recepta na tabletki antykoncepcyjne",
                      "Regularne kontrole i wsparcie lekarza",
                      "Dyskrecja i wygoda konsultacji online"
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center flex-shrink-0">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="text-sm font-semibold text-slate-700">{text}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Sub icons info bar */}
                  <div className="grid grid-cols-4 gap-1 border-t border-slate-100 pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-9 h-9 rounded-full bg-rose-50/50 text-rose-500 flex items-center justify-center mb-2">
                        <MessageSquarePlus size={16} />
                      </div>
                      <span className="text-[14px] font-bold text-slate-600 leading-tight">Konsultacja 24/7</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-9 h-9 rounded-full bg-rose-50/50 text-rose-500 flex items-center justify-center mb-2">
                        <FileText size={16} />
                      </div>
                      <span className="text-[14px] font-bold text-slate-600 leading-tight">E-recepta w minuty</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-9 h-9 rounded-full bg-rose-50/50 text-rose-500 flex items-center justify-center mb-2">
                        <UserCheck size={16} />
                      </div>
                      <span className="text-[14px] font-bold text-slate-600 leading-tight">Regularna opieka</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-9 h-9 rounded-full bg-rose-50/50 text-rose-500 flex items-center justify-center mb-2">
                        <ShieldCheck size={16} />
                      </div>
                      <span className="text-[14px] font-bold text-slate-600 leading-tight">Bezpiecznie i dyskretnie</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer CTA & Price block */}
              <div className="border-t border-slate-100 p-8 bg-slate-50/40">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-slate-500 font-bold">Cena konsultacji</span>
                  <span className="text-2xl font-black text-rose-500">59 zł</span>
                </div>
                <Link
                  href="/wypelnij-formularz"
                  className="w-full inline-flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-extrabold py-4 px-6 rounded-2xl shadow-lg shadow-rose-500/10 active:scale-98 transition-all group/btn"
                >
                  <span>Umów konsultację</span>
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 3: Testosteron */}
            <div className="bg-white rounded-[32px] border border-slate-100 shadow-sm flex flex-col justify-between overflow-hidden group hover:shadow-xl hover:border-blue-100 transition-all duration-300">

              {/* Header with integrated image overlay */}
              <div className="relative bg-[#f1f4fd] pt-8 pl-8 pb-4 pr-[42%] min-h-[250px] flex flex-col justify-center">
                {/* Badge & Title */}
                <div className="flex justify-start mb-4">
                  <span className="bg-blue-50 border border-blue-100 text-blue-500 text-xs font-extrabold px-3 py-1 rounded-lg tracking-wider uppercase">
                    Dla mężczyzn
                  </span>
                </div>

                <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-2">
                  Testosteron
                </h2>

                <p className="text-sm font-extrabold text-blue-500 leading-snug mb-3">
                  Zadbaj o energię, siłę i dobre samopoczucie.
                </p>

                <p className="text-sm text-slate-500 leading-relaxed">
                  Diagnoza, plan leczenia i e-recepta na terapię testosteronem online.
                </p>

                {/* Absolute Image Overlay on the right */}
                <div className="absolute top-0 right-0 bottom-0 w-[50%] overflow-hidden pointer-events-none select-none">
                  <div className="relative w-full h-full">
                    <Image
                      src="/testosteron.jpeg"
                      alt="Testosteron"
                      fill
                      priority
                      className="object-cover object-center scale-105 transition-transform duration-500"
                    />
                    {/* Left-to-right fade overlay using gradient */}
                    <div className="absolute inset-y-0 opacity-80 left-0 w-full bg-gradient-to-r from-[#f1f4fd] to-transparent z-10" />
                  </div>
                </div>
              </div>

              {/* Body content with remaining details */}
              <div className="px-8 pt-10 pb-8 flex-grow flex flex-col justify-between">
                <div>
                  {/* Checklist */}
                  <ul className="space-y-3 mb-8">
                    {[
                      "Badanie i konsultacja online",
                      "Terapia testosteronem dopasowana do Ciebie",
                      "Poprawa energii, libido i koncentracji",
                      "Dyskretna i bezpieczna opieka medyczna"
                    ].map((text, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center flex-shrink-0">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="text-sm font-semibold text-slate-700">{text}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Sub icons info bar */}
                  <div className="grid grid-cols-4 gap-1 border-t border-slate-100 pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-9 h-9 rounded-full bg-blue-50/50 text-blue-500 flex items-center justify-center mb-2">
                        <Clock size={16} />
                      </div>
                      <span className="text-[14px] font-bold text-slate-600 leading-tight">Konsultacja 24/7</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-9 h-9 rounded-full bg-blue-50/50 text-blue-500 flex items-center justify-center mb-2">
                        <FlaskConical size={16} />
                      </div>
                      <span className="text-[14px] font-bold text-slate-600 leading-tight">Diagnostyka online</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-9 h-9 rounded-full bg-blue-50/50 text-blue-500 flex items-center justify-center mb-2">
                        <TrendingUp size={16} />
                      </div>
                      <span className="text-[14px] font-bold text-slate-600 leading-tight">Terapia dopasowana</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-9 h-9 rounded-full bg-blue-50/50 text-blue-500 flex items-center justify-center mb-2">
                        <ShieldCheck size={16} />
                      </div>
                      <span className="text-[14px] font-bold text-slate-600 leading-tight">Dyskrecja i bezp.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer CTA & Price block */}
              <div className="border-t border-slate-100 p-8 bg-slate-50/40">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-slate-500 font-bold">Cena konsultacji</span>
                  <span className="text-2xl font-black text-blue-500">59 zł</span>
                </div>
                <Link
                  href="/wypelnij-formularz"
                  className="w-full inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-extrabold py-4 px-6 rounded-2xl shadow-lg shadow-blue-500/10 active:scale-98 transition-all group/btn"
                >
                  <span>Umów konsultację</span>
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Contact Banner Bar */}
        <section className=" mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-white border border-slate-100 rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-start gap-4 max-w-2xl">
              <div className="w-12 h-12 rounded-2xl bg-[#DAE9E6]/40 text-[#064743] flex items-center justify-center flex-shrink-0">
                <MessageSquare size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="text-base md:text-lg font-bold text-slate-800">
                  Masz pytania lub nie wiesz, która usługa jest dla Ciebie?
                </h3>
                <p className="text-sm text-slate-500 font-medium">
                  Skontaktuj się z nami – doradzimy i pomożemy dobrać najlepsze rozwiązanie.
                </p>
              </div>
            </div>

            <Link
              href="/#kontakt"
              className="inline-flex items-center gap-2 bg-[#FAFBFB] hover:bg-slate-100 text-slate-700 border border-slate-200 px-6 py-3.5 rounded-xl font-bold transition-all shadow-sm flex-shrink-0 group/contactBtn"
            >
              <span>Skontaktuj się z nami</span>
              <ArrowRight size={16} className="text-[#064743] group-hover/contactBtn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Bottom Trust Items Bar */}
        <section className="border-t border-slate-200/60 pt-16  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {bottomTrustItems.map((item, idx) => {
              const TrustIcon = item.icon;
              return (
                <div key={idx} className="flex gap-4 items-start p-2">
                  <div className="w-12 h-12 rounded-2xl bg-[#DAE9E6]/30 text-[#064743] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <TrustIcon size={22} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-slate-800 text-sm md:text-base leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
