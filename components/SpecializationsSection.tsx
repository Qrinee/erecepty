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
    <section id="specjalizacje" className="py-10 md:py-12 bg-white scroll-mt-20 relative overflow-hidden">
      
      {}
      <div className="absolute top-8 left-12 w-40 h-40 hidden xl:flex flex-col items-center justify-center opacity-[0.12] pointer-events-none select-none text-[#064743]">
        {}
        <svg className="w-12 h-12 mb-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 3.06 1.38 5.8 3.56 7.65L3.71 21.36l1.42 1.42 1.94-1.94C8.74 21.57 10.32 22 12 22s3.26-.43 4.93-1.16l1.94 1.94 1.42-1.42-1.85-1.71C20.62 17.8 22 15.06 22 12c0-5.52-4.48-10-10-10zm-1 15v-5H9v-2h2V8h2v2h2v2h-2v5h-2z"/>
        </svg>
        {}
        <Stethoscope className="w-12 h-12" />
      </div>

      {}
      <div className="absolute top-8 right-12 w-44 h-40 hidden xl:flex flex-row items-center justify-center gap-2 opacity-[0.12] pointer-events-none select-none text-[#064743]">
        <MessageSquareMore className="w-10 h-10 self-start transform -scale-x-100" />
        <div className="flex flex-col items-center">
          {}
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="5" y="2" width="14" height="20" rx="3" />
            <circle cx="12" cy="18" r="1.5" fill="currentColor" />
            <path d="M9 5h6" />
          </svg>
          {}
          <svg className="w-6 h-6 mt-1" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 19h12v2H6v-2zm3-6h6v4H9v-4zm-4-4c2 0 3.5 1.5 3.5 3.5v.5h-7v-.5C4.5 10.5 6 9 5 9zm14 0c1 0 2.5 1.5 2.5 3.5v.5h-7v-.5c0-2 1.5-3.5 4.5-3.5zm-7-6c.8 0 1.5.7 1.5 1.5V6h-3V4.5c0-.8.7-1.5 1.5-1.5z" />
          </svg>
        </div>
      </div>

      <div className="w-full px-4 sm:px-8 xl:px-16 relative z-10">
        
        {}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
            Konsultacje z doświadczonymi specjalistami
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium">
            Wybierz lekarza dopasowanego do swoich potrzeb
          </p>
        </div>

        {}
        <DesktopCarousel>
          
          {specialties.map((spec, idx) => {
            const Icon = spec.icon;
            return (
              <div
                key={idx}
                className="w-[88vw] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] min-w-[88vw] sm:min-w-[calc(50%-12px)] lg:min-w-[calc(25%-18px)] max-w-[88vw] sm:max-w-[calc(50%-12px)] lg:max-w-[calc(25%-18px)] snap-center shrink-0 bg-white rounded-[24px] border border-slate-100 p-5 md:p-6 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.01)] hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div>
                  {}
                  <div className="w-8 h-8 rounded-full bg-[#E8F3F1] border border-[#D5EAE6] text-[#064743] flex items-center justify-center absolute top-4 left-4 shadow-sm">
                    <Icon className="w-4 h-4" />
                  </div>

                  {}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-slate-50 border border-slate-200/60 mx-auto mb-4 flex items-center justify-center text-slate-300 relative shadow-inner">
                    <svg className="w-9 h-9 md:w-10 md:h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>

                  {}
                  <h3 className="font-extrabold text-slate-800 text-base md:text-[17px] text-center mb-1 group-hover:text-[#064743] transition-colors">{spec.name}</h3>

                  {}
                  <p className="text-[11px] md:text-xs font-bold text-[#147A60] text-center mb-3">{spec.title}</p>

                  {}
                  <p className="text-[11px] md:text-xs text-slate-400 text-center leading-relaxed mb-4 min-h-[40px] font-semibold">{spec.desc}</p>
                </div>

                <div>
                  {}
                  <div className="flex items-center justify-between text-[11px] md:text-xs font-bold text-slate-400 border-t border-slate-100/80 pt-4 mb-4">
                    <span>{spec.exp} lat doświadczenia</span>
                    <span className="flex items-center gap-0.5 text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span>{spec.rating}</span>
                    </span>
                  </div>

                  {}
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

          {}
          <div className="w-[88vw] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] min-w-[88vw] sm:min-w-[calc(50%-12px)] lg:min-w-[calc(25%-18px)] max-w-[88vw] sm:max-w-[calc(50%-12px)] lg:max-w-[calc(25%-18px)] snap-center shrink-0 bg-white rounded-[24px] border border-slate-100 p-5 md:p-6 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.01)] hover:shadow-md transition-shadow relative overflow-hidden group">
            <div>
              {}
              <div className="w-8 h-8 rounded-full bg-[#E8F3F1] border border-[#D5EAE6] text-[#064743] flex items-center justify-center absolute top-4 left-4 shadow-sm">
                <MessageSquareMore className="w-4 h-4" />
              </div>

              {}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-slate-50 border border-slate-200/60 mx-auto mb-4 flex items-center justify-center text-slate-300 relative shadow-inner">
                <span className="text-slate-400 font-extrabold text-xl">...</span>
              </div>

              {}
              <h3 className="font-extrabold text-slate-800 text-base md:text-[17px] text-center mb-1">Więcej specjalizacji</h3>

              {}
              <p className="text-[11px] md:text-xs text-slate-400 text-center leading-relaxed mb-4 min-h-[40px] font-semibold">
                Sprawdź pełną listę dostępnych specjalistów na naszej stronie.
              </p>
            </div>

            <div>
              {}
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

        {}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 pt-8 border-t border-slate-100">
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

