"use client";

import { ArrowRight, CheckCircle, Shield, Zap, Home, Clock } from "lucide-react";

export default function HowItWorksSection() {
  return (
    <section id="jak-to-dziala" className="py-20 bg-gradient-to-b from-[#F5FAF9] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#DAE9E6]/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#DAE9E6]/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4">
        {/* Header grid containing Clock (left), Center content (title + horizontal trust badges), Phone mockup (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Column 1: Clock (desktop only) */}
          <div className="hidden lg:flex lg:col-span-3 justify-center select-none animate-fadeIn">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#064743]/5 rounded-full blur-xl group-hover:bg-[#064743]/10 transition-all duration-500" />
              <img
                src="/how_it_works_clock.png"
                alt="Zegar i roślina ozdobna"
                className="w-48 h-48 object-contain relative transform hover:rotate-3 hover:scale-105 transition-all duration-500 ease-out"
              />
            </div>
          </div>
          
          {/* Column 2: Main title & horizontal trust badges */}
          <div className="col-span-1 lg:col-span-6 text-center flex flex-col items-center">
            <span className="text-xs font-semibold tracking-wider text-[#1A5D54] uppercase bg-[#DAE9E6] px-3 py-1.5 rounded-full mb-4">
              Jak to działa?
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#064743] tracking-tight leading-tight mb-4">
              Zamów konsultację online <br className="hidden md:inline" /> w kilka minut
            </h2>
            <p className="text-slate-600 max-w-lg mb-8 text-sm md:text-base">
              Przejdź przez cztery proste kroki, aby otrzymać e-receptę, e-zwolnienie lub skonsultować się z lekarzem online bez wychodzenia z domu.
            </p>

            {/* 4 horizontal trust badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-2xl">
              <div className="flex items-center gap-2 bg-white border border-slate-100 shadow-sm px-3 py-2 rounded-xl text-left hover:shadow-md transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-[#DAE9E6] text-[#064743] flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">Bezpiecznie</p>
                  <p className="text-[10px] text-slate-500">Dane szyfrowane</p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white border border-slate-100 shadow-sm px-3 py-2 rounded-xl text-left hover:shadow-md transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-[#DAE9E6] text-[#064743] flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">Szybko</p>
                  <p className="text-[10px] text-slate-500">Nawet w 15 min</p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white border border-slate-100 shadow-sm px-3 py-2 rounded-xl text-left hover:shadow-md transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-[#DAE9E6] text-[#064743] flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold">%</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">Przystępnie</p>
                  <p className="text-[10px] text-slate-500">Niska cena</p>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white border border-slate-100 shadow-sm px-3 py-2 rounded-xl text-left hover:shadow-md transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-[#DAE9E6] text-[#064743] flex items-center justify-center shrink-0">
                  <Home className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">100% online</p>
                  <p className="text-[10px] text-slate-500">Bez wychodzenia</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Column 3: Floating Phone mockup (desktop only) */}
          <div className="hidden lg:flex lg:col-span-3 justify-center select-none animate-fadeIn">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#064743]/5 rounded-full blur-xl group-hover:bg-[#064743]/10 transition-all duration-500" />
              <img
                src="/how_it_works_phone.png"
                alt="Telefon z aplikacją medyczną"
                className="w-48 h-48 object-contain relative transform hover:-rotate-3 hover:scale-105 transition-all duration-500 ease-out"
              />
            </div>
          </div>

        </div>

        {/* Stepper Grid */}
        <div className="relative mt-20">
          
          {/* Connecting Dotted Line for Desktop (horizontal) */}
          <div className="hidden lg:block absolute top-[90px] left-[12.5%] right-[12.5%] h-0.5 border-t-2 border-dashed border-[#DAE9E6]" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Step 1 */}
            <div className="relative flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#DAE9E6] transition-all duration-300 p-6 pt-10 text-center h-full group">
              {/* Step Number Circle */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#064743] text-white flex items-center justify-center font-bold text-lg border-4 border-white shadow-md z-10 group-hover:bg-[#1A5D54] transition-colors duration-300">
                1
              </div>
              
              {/* Step Illustration */}
              <div className="h-28 flex items-center justify-center mb-4">
                <img
                  src="/how_it_works_step1.png"
                  alt="Krok 1: Wybierz usługę"
                  className="h-24 object-contain transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <h3 className="font-extrabold text-lg text-slate-800 mb-2">Wybierz usługę</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-6">
                Zdecyduj, czy potrzebujesz nowej recepty, kontynuacji leczenia, czy zwolnienia lekarskiego L4.
              </p>
              
              {/* Pills row (Service selector mockup) */}
              <div className="mt-auto pt-4 flex flex-wrap gap-1.5 justify-center">
                <span className="text-[10px] font-semibold text-[#064743] bg-[#DAE9E6] px-2 py-1 rounded-full">
                  e-Recepta
                </span>
                <span className="text-[10px] font-semibold text-[#064743] bg-[#DAE9E6] px-2 py-1 rounded-full">
                  L4 Online
                </span>
                <span className="text-[10px] font-semibold text-[#064743] bg-[#DAE9E6] px-2 py-1 rounded-full">
                  Konsultacja
                </span>
                <span className="text-[10px] font-semibold text-white bg-[#064743] px-2 py-1 rounded-full font-bold">
                  +
                </span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#DAE9E6] transition-all duration-300 p-6 pt-10 text-center h-full group">
              {/* Step Number Circle */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#064743] text-white flex items-center justify-center font-bold text-lg border-4 border-white shadow-md z-10 group-hover:bg-[#1A5D54] transition-colors duration-300">
                2
              </div>
              
              {/* Step Illustration */}
              <div className="h-28 flex items-center justify-center mb-4">
                <img
                  src="/how_it_works_step2.png"
                  alt="Krok 2: Wypełnij wywiad"
                  className="h-24 object-contain transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <h3 className="font-extrabold text-lg text-slate-800 mb-2">Wypełnij formularz</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-6">
                Uzupełnij bezpieczny formularz medyczny online, podając dane zdrowotne oraz objawy.
              </p>
              
              {/* Trust Badge / Info Box */}
              <div className="mt-auto pt-4">
                <div className="inline-flex items-center gap-1.5 bg-[#DAE9E6]/30 border border-[#DAE9E6] text-[#064743] px-3 py-1.5 rounded-lg w-full justify-center">
                  <Shield className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-[9px] font-bold tracking-tight">Dane chronione RODO & SSL</span>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#DAE9E6] transition-all duration-300 p-6 pt-10 text-center h-full group">
              {/* Step Number Circle */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#064743] text-white flex items-center justify-center font-bold text-lg border-4 border-white shadow-md z-10 group-hover:bg-[#1A5D54] transition-colors duration-300">
                3
              </div>
              
              {/* Step Illustration */}
              <div className="h-28 flex items-center justify-center mb-4">
                <img
                  src="/how_it_works_step3.png"
                  alt="Krok 3: Szybka weryfikacja"
                  className="h-24 object-contain transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <h3 className="font-extrabold text-lg text-slate-800 mb-2">Opłać i wyślij</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-6">
                Opłać konsultację za pomocą bezpiecznych płatności online. Lekarz przeanalizuje Twoje zgłoszenie.
              </p>
              
              {/* Trust Badge / Info Box */}
              <div className="mt-auto pt-4">
                <div className="inline-flex items-center gap-1.5 bg-[#DAE9E6]/30 border border-[#DAE9E6] text-[#064743] px-3 py-1.5 rounded-lg w-full justify-center">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-[9px] font-bold tracking-tight">Weryfikacja nawet w 15 min</span>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#DAE9E6] transition-all duration-300 p-6 pt-10 text-center h-full group">
              {/* Step Number Circle */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#064743] text-white flex items-center justify-center font-bold text-lg border-4 border-white shadow-md z-10 group-hover:bg-[#1A5D54] transition-colors duration-300">
                4
              </div>
              
              {/* Step Illustration */}
              <div className="h-28 flex items-center justify-center mb-4">
                <img
                  src="/how_it_works_step4.png"
                  alt="Krok 4: Odbierz e-receptę"
                  className="h-24 object-contain transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <h3 className="font-extrabold text-lg text-slate-800 mb-2">Odbierz kod SMS</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-6">
                Otrzymaj e-receptę (kod SMS/email) lub L4 na wskazane dane. Szybko, prosto, bez kolejek.
              </p>
              
              {/* Trust Badge / Info Box */}
              <div className="mt-auto pt-4">
                <div className="inline-flex items-center gap-1.5 bg-[#DAE9E6]/30 border border-[#DAE9E6] text-[#064743] px-3 py-1.5 rounded-lg w-full justify-center">
                  <CheckCircle className="w-3.5 h-3.5 shrink-0 text-[#064743]" />
                  <span className="text-[9px] font-bold tracking-tight">Kod SMS i PDF na e-mail</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-[#E8F3F1] border border-[#DAE9E6] rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-white text-[#064743] flex items-center justify-center shrink-0 shadow-sm">
              <Clock className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-800 text-sm md:text-base">Ekspresowa ścieżka pacjenta</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Szybko, wygodnie i bezpiecznie. Cały proces wypełnienia formularza zajmuje mniej niż 2 minuty.
              </p>
            </div>
          </div>
          <a
            href="/wypelnij-formularz"
            id="how-it-works-cta"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#064743] hover:bg-[#1A5D54] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer min-h-[44px] group"
          >
            Zamów konsultację
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
