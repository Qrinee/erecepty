"use client";

import { useRouter } from "next/navigation";
import DesktopCarousel from "@/components/ui/DesktopCarousel";
import { 
  ArrowRight, Clock, Star, UserCheck, Lock, ShieldCheck, Percent,
  Stethoscope, Baby, Activity, Brain, ScanSearch, Eye, Ear, Pill, 
  Smile, Calendar, MessageSquareMore 
} from "lucide-react";

export default function SpecializationsSection() {
  const router = useRouter();

  const specialties = [
    { 
      name: "dr Anna Kowalska",
      title: "Internista", 
      icon: Stethoscope,
      desc: "Pomaga w diagnostyce i leczeniu infekcji oraz chorób wewnętrznych.",
      exp: 12,
      rating: "4.9",
      href: "/wypelnij-formularz?specialization=Internista"
    },
    { 
      name: "dr Paweł Nowak",
      title: "Pediatra", 
      icon: Baby,
      desc: "Konsultacje i porady medyczne dla dzieci i młodzieży.",
      exp: 10,
      rating: "4.9",
      href: "/wypelnij-formularz?specialization=Pediatra"
    },
    { 
      name: "dr Michał Zieliński",
      title: "Kardiolog", 
      icon: Activity,
      desc: "Diagnostyka i leczenie chorób serca oraz nadciśnienia tętniczego.",
      exp: 14,
      rating: "4.9",
      href: "/wypelnij-formularz?specialization=Kardiolog"
    },
    { 
      name: "dr Anna Woźniak",
      title: "Psychiatra", 
      icon: Brain,
      desc: "Pomoc w leczeniu depresji, lęków, ADHD i zaburzeń snu.",
      exp: 13,
      rating: "5.0",
      href: "/wypelnij-formularz?specialization=Psychiatra"
    },
    { 
      name: "dr Martyna Lewandowska",
      title: "Dermatolog", 
      icon: ScanSearch,
      desc: "Konsultacje zmian skórnych, leczenie trądziku i chorób skóry.",
      exp: 9,
      rating: "4.8",
      href: "/wypelnij-formularz?specialization=Dermatolog"
    }
  ];

  return (
    <section id="specjalizacje" className="py-20 bg-white scroll-mt-20 relative overflow-hidden">
      
      {/* Decorative Left Illustration in background (plant + stethoscope - desktop only) */}
      <div className="absolute top-12 left-12 w-40 h-40 hidden xl:flex flex-col items-center justify-center opacity-[0.12] pointer-events-none select-none text-[#064743]">
        {/* Plant silhouette */}
        <svg className="w-14 h-14 mb-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 3.06 1.38 5.8 3.56 7.65L3.71 21.36l1.42 1.42 1.94-1.94C8.74 21.57 10.32 22 12 22s3.26-.43 4.93-1.16l1.94 1.94 1.42-1.42-1.85-1.71C20.62 17.8 22 15.06 22 12c0-5.52-4.48-10-10-10zm-1 15v-5H9v-2h2V8h2v2h2v2h-2v5h-2z"/>
        </svg>
        {/* Stethoscope */}
        <Stethoscope className="w-14 h-14" />
      </div>

      {/* Decorative Right Illustration in background (phone + speech bubbles - desktop only) */}
      <div className="absolute top-12 right-12 w-44 h-40 hidden xl:flex flex-row items-center justify-center gap-2 opacity-[0.12] pointer-events-none select-none text-[#064743]">
        <MessageSquareMore className="w-12 h-12 self-start transform -scale-x-100" />
        <div className="flex flex-col items-center">
          {/* Smartphone */}
          <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="5" y="2" width="14" height="20" rx="3" />
            <circle cx="12" cy="18" r="1.5" fill="currentColor" />
            <path d="M9 5h6" />
          </svg>
          {/* Potted plant */}
          <svg className="w-8 h-8 mt-1" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 19h12v2H6v-2zm3-6h6v4H9v-4zm-4-4c2 0 3.5 1.5 3.5 3.5v.5h-7v-.5C4.5 10.5 6 9 5 9zm14 0c1 0 2.5 1.5 2.5 3.5v.5h-7v-.5c0-2 1.5-3.5 4.5-3.5zm-7-6c.8 0 1.5.7 1.5 1.5V6h-3V4.5c0-.8.7-1.5 1.5-1.5z" />
          </svg>
        </div>
      </div>

      <div className="w-full px-4 sm:px-8 xl:px-16 relative z-10">
        
        {/* Headings */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Konsultacje z doświadczonymi specjalistami
          </h2>
          <p className="text-slate-500 text-base sm:text-lg font-medium">
            Wybierz lekarza dopasowanego do swoich potrzeb
          </p>
        </div>

        {/* Doctor Desktop Carousel */}
        <DesktopCarousel>
          
          {specialties.map((spec, idx) => {
            const Icon = spec.icon;
            return (
              <div
                key={idx}
                className="min-w-[85vw] sm:min-w-[calc(33.333%-16px)] lg:min-w-[calc(16.666%-20px)] snap-center shrink-0 bg-white rounded-[28px] border border-slate-100 p-6 md:p-8 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.01)] hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div>
                  {/* Top-left small circular icon badge */}
                  <div className="w-9 h-9 rounded-full bg-[#E8F3F1] border border-[#D5EAE6] text-[#064743] flex items-center justify-center absolute top-4 left-4 shadow-sm">
                    <Icon className="w-4.5 h-4.5" />
                  </div>

                  {/* Circular Avatar Placeholder - Left Empty per request */}
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-slate-50 border border-slate-200/60 mx-auto mb-5 flex items-center justify-center text-slate-300 relative shadow-inner">
                    <svg className="w-11 h-11 md:w-12 md:h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>

                  {/* Doctor Name */}
                  <h3 className="font-extrabold text-slate-800 text-base md:text-lg text-center mb-1 group-hover:text-[#064743] transition-colors">{spec.name}</h3>

                  {/* Specialty Title */}
                  <p className="text-xs md:text-sm font-bold text-[#147A60] text-center mb-4">{spec.title}</p>

                  {/* Description */}
                  <p className="text-xs md:text-[13px] text-slate-400 text-center leading-relaxed mb-5 min-h-[48px] font-semibold">{spec.desc}</p>
                </div>

                <div>
                  {/* Exp / Rating Row */}
                  <div className="flex items-center justify-between text-[11px] md:text-xs font-bold text-slate-400 border-t border-slate-100/80 pt-4 mb-4">
                    <span>{spec.exp} lat doświadczenia</span>
                    <span className="flex items-center gap-0.5 text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span>{spec.rating}</span>
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => router.push(spec.href)}
                    className="border border-slate-200 bg-white hover:border-[#147A60] hover:text-[#147A60] rounded-xl py-3 w-full text-xs md:text-sm font-extrabold text-slate-700 flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Umów konsultację</span>
                  </button>
                </div>
              </div>
            );
          })}

          {/* Card 12 - Więcej specjalizacji */}
          <div className="min-w-[85vw] sm:min-w-[calc(33.333%-16px)] lg:min-w-[calc(16.666%-20px)] snap-center shrink-0 bg-white rounded-[28px] border border-slate-100 p-6 md:p-8 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.01)] hover:shadow-md transition-shadow relative overflow-hidden group">
            <div>
              {/* Top-left small circular icon badge */}
              <div className="w-9 h-9 rounded-full bg-[#E8F3F1] border border-[#D5EAE6] text-[#064743] flex items-center justify-center absolute top-4 left-4 shadow-sm">
                <MessageSquareMore className="w-4.5 h-4.5" />
              </div>

              {/* Circular Avatar Placeholder */}
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-slate-50 border border-slate-200/60 mx-auto mb-5 flex items-center justify-center text-slate-300 relative shadow-inner">
                <span className="text-slate-400 font-extrabold text-xl">...</span>
              </div>

              {/* Title */}
              <h3 className="font-extrabold text-slate-800 text-base md:text-lg text-center mb-2">Więcej specjalizacji</h3>

              {/* Description */}
              <p className="text-xs md:text-[13px] text-slate-400 text-center leading-relaxed mb-5 min-h-[48px] font-semibold">
                Sprawdź pełną listę dostępnych specjalistów na naszej stronie.
              </p>
            </div>

            <div>
              {/* CTA Button */}
              <button
                onClick={() => router.push("/wypelnij-formularz")}
                className="border border-slate-200 bg-white hover:border-[#147A60] hover:text-[#147A60] rounded-xl py-3 w-full text-xs md:text-sm font-extrabold text-slate-700 flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
              >
                <span>Zobacz wszystkie</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </DesktopCarousel>

        {/* Bottom Trust/Guarantees Row under Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-10 border-t border-slate-100">
          {[
            { icon: ShieldCheck, title: "Bezpiecznie", desc: "Twoje dane są u nas bezpieczne i chronione." },
            { icon: Clock, title: "Szybko", desc: "Konsultacja nawet w 15 minut." },
            { icon: Percent, title: "Przystępnie", desc: "Atrakcyjne ceny bez ukrytych opłat." },
            { icon: Lock, title: "Bez wychodzenia z domu", desc: "Załatw wszystko online, bez kolejek." },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#E8F3F1] border border-[#D5EAE6] flex items-center justify-center text-[#064743] flex-shrink-0 shadow-sm">
                  {idx === 0 ? (
                    <Icon className="w-4.5 h-4.5 fill-[#064743] text-white" strokeWidth={2.5} />
                  ) : (
                    <Icon className="w-4.5 h-4.5" strokeWidth={2.5} />
                  )}
                </div>
                <div>
                  <div className="font-extrabold text-slate-800 text-sm leading-snug">{item.title}</div>
                  <div className="text-xs text-slate-500 mt-1 leading-snug">{item.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

