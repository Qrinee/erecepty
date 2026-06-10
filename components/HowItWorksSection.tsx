"use client";

import { ArrowRight, Shield, Zap, Home, Clock, Users, Calendar, Send, Timer } from "lucide-react";
import Image from "next/image";

export default function HowItWorksSection() {
  return (
    <section id="jak-to-dziala" className="bg-gradient-to-b from-white to-[#EBF5F2]  mx-auto py-20 bg-white relative overflow-hidden">
      <div className="mx-auto px-4 max-w-[80vw]">
        {/* Header grid containing Clock (left), Center content (title + horizontal trust badges), Phone mockup (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">

          {/* Column 1: Clock (desktop only) */}
          <div className="hidden lg:flex lg:col-span-3 justify-center select-none animate-fadeIn">
            <div className="relative group">
              <Image
                src="/hiw_left_decor.webp"
                alt="Zegar i roślina ozdobna"
                width={500}
                height={500}
                className="object-contain relative transform hover:-rotate-3 hover:scale-105 transition-all duration-500 ease-out"
              />
            </div>
          </div>

          {/* Column 2: Main title & horizontal trust badges */}
          <div className="col-span-1 lg:col-span-6 text-center flex flex-col items-center">
            <span className="inline-flex items-center gap-2 bg-white border border-[#0CA953]/20 text-[#0CA953] text-sm font-bold px-4 py-1.5 rounded-full mb-6 shadow-sm">
              <Users size={16} />
              Jak przebiega proces
            </span>

            <h2 className="text-3xl md:text-[38px] font-extrabold text-[#052840] tracking-tight leading-[1.15] mb-4">
              Zamów konsultację online w kilka minut
            </h2>
            <p className="text-slate-600  mb-10 text-[15px] md:text-base font-medium">
              Szybka pomoc medyczna w 4 prostych krokach — bez kolejek i bez wychodzenia z domu
            </p>

            {/* 4 horizontal trust badges */}
            <div className="grid grid-cols-2  md:grid-cols-4 gap-4 ">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="flex flex-col items-center  gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#0CA953] text-white flex items-center justify-center shrink-0">
                    <Shield className="w-3 h-3" strokeWidth={3} />
                  </div>
                  <p className="font-extrabold text-[#052840]">Bezpiecznie</p>
                </div>
                <p className="text-[11px] font-medium text-slate-500 leading-snug">Twoje dane są u nas<br />bezpieczne</p>
              </div>

              <div className="flex flex-col items-center text-center gap-2">
                <div className="flex flex-col  items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#0CA953] text-white flex items-center justify-center shrink-0">
                    <Clock className="w-3 h-3" strokeWidth={3} />
                  </div>
                  <p className=" font-extrabold text-[#052840]">Szybko</p>
                </div>
                <p className="text-[11px] font-medium text-slate-500 leading-snug">Konsultacja nawet<br />w 15 minut</p>
              </div>

              <div className="flex flex-col items-center text-center gap-2">
                <div className="flex flex-col items-center  gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#0CA953] text-white flex items-center justify-center shrink-0">
                    <span className="text-[11px] font-bold">%</span>
                  </div>
                  <p className=" font-extrabold text-[#052840]">Przystępnie</p>
                </div>
                <p className="text-[11px] font-medium text-slate-500 leading-snug">Atrakcyjne ceny<br />bez ukrytych opłat</p>
              </div>

              <div className="flex flex-col items-center  text-center gap-2">
                <div className="flex flex-col items-center  gap-2">
                  <div className="w-10 h-10 rounded-full bg-[#0CA953] text-white flex items-center justify-center shrink-0">
                    <Home className="w-3 h-3" strokeWidth={3} />
                  </div>
                  <p className="font-extrabold text-[#052840] leading-tight">Bez wychodzenia<br />z domu</p>
                </div>
                <p className="text-[11px] font-medium text-slate-500 leading-snug">Załatw wszystko online,<br />bez kolejek</p>
              </div>
            </div>
          </div>

          {/* Column 3: Floating Phone mockup (desktop only) */}
          <div className="hidden lg:flex lg:col-span-3 justify-center select-none animate-fadeIn">
            <div className="relative group">
              <Image
                src="/hiw_right_decor.png"
                alt="Telefon z aplikacją medyczną"
                width={500}
                height={500}
                className="object-contain relative transform hover:rotate-3 hover:scale-105 transition-all duration-500 ease-out"
              />
            </div>
          </div>

        </div>

        {/* Stepper Grid */}
        <div className="relative mt-24  mx-auto">

          {/* Connecting Dotted Line for Desktop (horizontal) */}
          <div className="hidden lg:block absolute top-5 left-[12.5%] right-[12.5%] h-0 border-t-[5px] border-dotted border-[#0CA953] opacity-50 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">

            {/* Step 1 */}
            <div className="relative pt-10 flex flex-col group h-full">
              {/* Step Number Circle */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#0CA953] text-white flex items-center justify-center font-bold text-lg z-10 group-hover:bg-[#0A8742] transition-colors duration-300 shadow-sm">
                1
              </div>
              {/* Card Body */}
              <div className="mt-5 bg-white rounded-[24px] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-slate-200 transition-all duration-300 p-8 pt-8 text-left flex-grow flex flex-col">
                {/* Step Illustration */}
                <div className="h-[180px] flex items-center justify-center mb-6">
                  <img
                    src="/hiw_step1.png"
                    alt="Krok 1: Wybierz usługę"
                    className="h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="font-extrabold text-[17px] text-[#052840] mb-3">Wybierz usługę</h3>
                <p className="text-slate-500 text-[13px] font-medium leading-relaxed mb-6">
                  Określ, czego potrzebujesz — e-recepty, L4 lub konsultacji ze specjalistą.
                </p>

                {/* Pills row (Service selector mockup) */}
                <div className="mt-auto pt-4 flex flex-col gap-2">
                  <span className="text-[11px] font-semibold text-slate-400">Przykłady usług:</span>
                  <div className="bg-[#F8FDFB] rounded-xl p-2.5 flex flex-wrap gap-1.5 items-center justify-start border border-[#EAF5F1]">
                    <span className="text-[10px] font-bold text-slate-600 bg-white px-2.5 py-1 rounded-md shadow-sm border border-slate-100">
                      e-Recepta
                    </span>
                    <span className="text-[10px] font-bold text-slate-600 bg-white px-2.5 py-1 rounded-md shadow-sm border border-slate-100">
                      L4 Online
                    </span>
                    <span className="text-[10px] font-bold text-slate-600 bg-white px-2.5 py-1 rounded-md shadow-sm border border-slate-100">
                      Konsultacja
                    </span>
                    <span className="text-[11px] font-extrabold text-slate-400 px-1">
                      +
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative pt-10 flex flex-col group h-full">
              {/* Step Number Circle */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#0CA953] text-white flex items-center justify-center font-bold text-lg z-10 group-hover:bg-[#0A8742] transition-colors duration-300 shadow-sm">
                2
              </div>
              {/* Card Body */}
              <div className="mt-5 bg-white rounded-[24px] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-slate-200 transition-all duration-300 p-8 pt-8 text-left flex-grow flex flex-col">
                {/* Step Illustration */}
                <div className="h-[180px] flex items-center justify-center mb-6">
                  <img
                    src="/hiw_step2.png"
                    alt="Krok 2: Wybierz specjalistę"
                    className="h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="font-extrabold text-[17px] text-[#052840] mb-3">Wybierz specjalistę</h3>
                <p className="text-slate-500 text-[13px] font-medium leading-relaxed mb-6">
                  Znajdź lekarza dopasowanego do swoich potrzeb i sprawdź jego dostępne terminy.
                </p>

                {/* Trust Badge / Info Box */}
                <div className="mt-auto pt-4">
                  <div className="flex items-center gap-3 bg-[#F4F9F7] px-4 py-3 rounded-xl w-full">
                    <Users className="w-5 h-5 text-[#0CA953] shrink-0" strokeWidth={2.5} />
                    <span className="text-[11px] font-bold text-[#052840] leading-[1.3]">
                      Ponad 50 specjalistów<br />
                      <span className="font-medium text-slate-600">do Twojej dyspozycji</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative pt-10 flex flex-col group h-full">
              {/* Step Number Circle */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#0CA953] text-white flex items-center justify-center font-bold text-lg z-10 group-hover:bg-[#0A8742] transition-colors duration-300 shadow-sm">
                3
              </div>
              {/* Card Body */}
              <div className="mt-5 bg-white rounded-[24px] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-slate-200 transition-all duration-300 p-8 pt-8 text-left flex-grow flex flex-col">
                {/* Step Illustration */}
                <div className="h-[180px] flex items-center justify-center mb-6">
                  <img
                    src="/hiw_step3.png"
                    alt="Krok 3: Umów termin online"
                    className="h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="font-extrabold text-[17px] text-[#052840] mb-3">Umów termin online</h3>
                <p className="text-slate-500 text-[13px] font-medium leading-relaxed mb-6">
                  Wybierz dogodną datę i godzinę konsultacji telefonicznej lub wideo.
                </p>

                {/* Trust Badge / Info Box */}
                <div className="mt-auto pt-4">
                  <div className="flex items-center gap-3 bg-[#F4F9F7] px-4 py-3 rounded-xl w-full">
                    <Calendar className="w-5 h-5 text-[#0CA953] shrink-0" strokeWidth={2.5} />
                    <span className="text-[11px] font-bold text-[#052840] leading-[1.3]">
                      Konsultacje nawet<br />
                      <span className="font-medium text-slate-600">tego samego dnia</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative pt-10 flex flex-col group h-full">
              {/* Step Number Circle */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#0CA953] text-white flex items-center justify-center font-bold text-lg z-10 group-hover:bg-[#0A8742] transition-colors duration-300 shadow-sm">
                4
              </div>
              {/* Card Body */}
              <div className="mt-5 bg-white rounded-[24px] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-slate-200 transition-all duration-300 p-8 pt-8 text-left flex-grow flex flex-col">
                {/* Step Illustration */}
                <div className="h-[180px] flex items-center justify-center mb-6">
                  <img
                    src="/hiw_step4.png"
                    alt="Krok 4: Rozmawiaj z lekarzem"
                    className="h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="font-extrabold text-[17px] text-[#052840] mb-3">Rozmawiaj z lekarzem</h3>
                <p className="text-slate-500 text-[13px] font-medium leading-relaxed mb-6">
                  Skonsultuj się z lekarzem online i otrzymaj e-receptę lub dokumenty bez wychodzenia z domu.
                </p>

                {/* Trust Badge / Info Box */}
                <div className="mt-auto pt-4">
                  <div className="flex items-center gap-3 bg-[#F4F9F7] px-4 py-3 rounded-xl w-full">
                    <Send className="w-5 h-5 text-[#0CA953] shrink-0" strokeWidth={2.5} />
                    <span className="text-[11px] font-bold text-[#052840] leading-[1.3]">
                      e-Recepty i zwolnienia<br />
                      <span className="font-medium text-slate-600">wysyłane online</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-[#F4F9F7] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto shadow-sm">
          <div className="flex items-center gap-5 text-left">
            <Timer className="w-10 h-10 text-[#0CA953] animate-pulse shrink-0" strokeWidth={2} />
            <div>
              <h4 className="font-extrabold text-[#052840] text-[17px] mb-0.5">Szybko, wygodnie i bezpiecznie</h4>
              <p className="text-[13px] text-slate-500 font-medium">
                Cały proces zajmuje mniej niż 2 minuty.
              </p>
            </div>
          </div>
          <a
            href="/wypelnij-formularz"
            id="how-it-works-cta"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#0CA953] hover:bg-[#0A8742] text-white font-extrabold text-[15px] px-8 py-4 rounded-xl shadow-[0_8px_20px_rgba(12,169,83,0.25)] hover:shadow-[0_12px_25px_rgba(12,169,83,0.35)] -translate-y-0.5 hover:-translate-y-1 transition-all duration-300 cursor-pointer min-h-[48px] group"
          >
            Zamów konsultację
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
          </a>
        </div>

      </div>
    </section>
  );
}
