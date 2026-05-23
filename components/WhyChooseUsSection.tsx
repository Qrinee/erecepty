"use client";

import { UserCheck, Clock, ShieldCheck, FileText, ArrowRight, Heart, Star, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-[#F8FAF9] overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid: Left Laptop Image, Right Content (Title + 2x2 Cards Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">

          {/* Left Column: Doctor-Laptop Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full rounded-[32px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.025)] border border-slate-100 bg-white p-3">
              <img
                src="/dlaczegopacjenci.jpeg"
                alt="Konsultacja z lekarzem w Lekarze i Terapeuci"
                className="w-full h-auto object-contain rounded-[24px]"
              />
            </div>
          </div>

          {/* Right Column: Title and 2x2 Cards Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">

            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#064743] leading-tight mb-4 tracking-tight">
                Dlaczego pacjenci <br /> wybierają nas?
              </h2>
              <p className="text-slate-500 font-semibold text-base sm:text-lg max-w-xl">
                Szybka konsultacja online, doświadczeni lekarze i pomoc medyczna dostępna bez wychodzenia z domu.
              </p>
            </div>

            {/* 2x2 Grid of Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

              {/* Card 1: Zweryfikowani lekarze */}
              <div className="bg-white rounded-[24px] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.015)] border border-slate-100 flex flex-col justify-between group hover:shadow-md transition duration-300">
                <div className="flex flex-col items-center gap-4 mb-4">
                  <div className="w-22 h-22 rounded-full bg-[#E8F3EE] text-[#138A56] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition duration-300">
                    <UserCheck className="w-10 h-10" />
                  </div>
                  <h3 className="font-extrabold text-slate-800 text-base sm:text-lg text-center leading-tight">Zweryfikowani lekarze</h3>
                </div>
                <p className="text-slate-500 text-sm text-center font-semibold leading-relaxed">
                  Nasi specjaliści posiadają licencje i doświadczenie.
                </p>
              </div>

              {/* Card 2: Konsultacja online 24/7 */}
              <div className="bg-white rounded-[24px] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.015)] border border-slate-100 flex flex-col justify-between group hover:shadow-md transition duration-300">
                <div className="flex flex-col items-center gap-4 mb-4">
                  <div className="w-22 h-22 rounded-full bg-[#E8F3EE] text-[#138A56] flex items-center justify-center flex-shrink-0 relative group-hover:scale-110 transition duration-300">
                    <Clock className="w-10 h-10" />
                    <span className="absolute -top-1 -right-1 bg-[#10B981] text-white text-[8px] font-extrabold px-1.5 py-0.5 rounded-full border border-white uppercase tracking-wider scale-90">
                      24/7
                    </span>
                  </div>
                  <h3 className="font-extrabold text-center text-slate-800 text-base sm:text-lg leading-tight">Konsultacja online 24/7</h3>
                </div>
                <p className="text-slate-500 text-center text-sm font-semibold leading-relaxed">
                  Dostęp do lekarzy o każdej porze dnia i nocy.
                </p>
              </div>

              {/* Card 3: Bezpieczne i poufne */}
              <div className="bg-white rounded-[24px] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.015)] border border-slate-100 flex flex-col justify-between group hover:shadow-md transition duration-300">
                <div className="flex flex-col items-center gap-4 mb-4">
                  <div className="w-22 h-22 rounded-full bg-[#E8F3EE] text-[#138A56] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition duration-300">
                    <ShieldCheck className="w-10 h-10" />
                  </div>
                  <h3 className="text-center font-extrabold text-slate-800 text-base sm:text-lg leading-tight">Bezpieczne i poufne</h3>
                </div>
                <p className="text-center text-slate-500 text-sm font-semibold leading-relaxed">
                  Twoje dane i płatności są w pełni chronione.
                </p>
              </div>



            </div>

          </div>

        </div>

        {/* Stats Row */}
        <div className="bg-white border border-slate-100 rounded-[32px] p-8 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.02)] mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">

            {/* Stat 1 */}
            <div className="flex items-center gap-5 justify-center md:justify-start px-6 pb-6 md:pb-0">
              <div className="w-14 h-14 rounded-full bg-[#E8F3EE] text-[#138A56] flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#064743]">50 000+</div>
                <div className="text-slate-800 font-extrabold text-xs mt-0.5">konsultacji</div>
                <div className="text-slate-400 font-semibold text-[11px] mt-0.5">Zrealizowanych online</div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-5 justify-center px-6 py-6 md:py-0">
              <div className="w-14 h-14 rounded-full bg-[#E8F3EE] text-[#138A56] flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6 fill-[#138A56]" />
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#064743]">4.9 / 5</div>
                <div className="text-slate-800 font-extrabold text-xs mt-0.5">średnia ocen</div>
                <div className="text-slate-400 font-semibold text-[11px] mt-0.5">Na podstawie 2000+ opinii</div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-5 justify-center md:justify-end px-6 pt-6 md:pt-0">
              <div className="w-14 h-14 rounded-full bg-[#E8F3EE] text-[#138A56] flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6 fill-[#138A56]" />
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#064743]">98%</div>
                <div className="text-slate-800 font-extrabold text-xs mt-0.5">zadowolonych pacjentów</div>
                <div className="text-slate-400 font-semibold text-[11px] mt-0.5">Wraca do nas po pomoc</div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-[#064743] rounded-[28px] p-6 sm:p-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg shadow-emerald-950/10">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#0E5B55] border border-[#126B63] text-emerald-400 flex items-center justify-center flex-shrink-0 hidden sm:flex">
              <Heart className="w-6 h-6 fill-emerald-400" />
            </div>
            <div>
              <h4 className="text-white font-extrabold text-base sm:text-lg mb-1 leading-snug">
                Twoje zdrowie jest w dobrych rękach
              </h4>
              <p className="text-emerald-200/80 font-medium text-xs sm:text-sm">
                Dołącz do tysięcy pacjentów, którzy zaufali naszym specjalistom.
              </p>
            </div>
          </div>

          <Link
            href="/wypelnij-formularz"
            className="w-full md:w-auto bg-[#10B981] hover:bg-[#059669] text-[#064743] font-bold text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 transition duration-300 shadow-md shadow-emerald-950/10 cursor-pointer text-sm sm:text-base whitespace-nowrap hover:scale-[1.02]"
          >
            <span className="font-extrabold text-white">Umów konsultację online</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
