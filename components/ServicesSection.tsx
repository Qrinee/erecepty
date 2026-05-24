"use client";

import Link from "next/link";
import DesktopCarousel from "@/components/ui/DesktopCarousel";
import {
  ArrowRight, Clock, Star, UserCheck, Lock, Users
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "e-Recepta online",
      desc: "Otrzymaj e-receptę nawet w 15 minut",
      image: "/uslugi/ereceptaonline.png",
      href: "/wypelnij-formularz?service=e-Recepta+online"
    },
    {
      title: "L4 online",
      desc: "Zwolnienie lekarskie bez wychodzenia z domu",
      image: "/uslugi/l4online.png",
      href: "/wypelnij-formularz?service=L4+online"
    },
    {
      title: "Omówienie wyników badań",
      desc: "Szczegółowa analiza wyników badań z lekarzem",
      image: "/kontynuacjaleczenia.jpeg",
      href: "/wypelnij-formularz?service=L4+online"
    },
    {
      title: "Kontynuacja leczenia",
      desc: "Przedłuż leczenie bez zbędnej wizyty",
      image: "/uslugi/konsultacjaonline.png",
      href: "/wypelnij-formularz?service=Kontynuacja+leczenia"
    },
    {
      title: "Skierowanie",
      desc: "Skierowanie na badania, zabiegi lub do specjalisty.",
      image: "/skierowanie.png",
      href: "/wypelnij-formularz?service=Skierowanie+na+badania"
    },
    {
      title: "Leki psychiatryczne",
      desc: "Konsultacja i e-recepta na leki psychiatryczne",
      image: "/uslugi/lekipsychiatryczne.png",
      href: "/wypelnij-formularz?service=Leki+psychiatryczne"
    },
    {
      title: "Leczenie otyłości",
      desc: "Konsultacja i e-recepta na leczenie otyłości",
      image: "/uslugi/leczenieotylosci.png",
      href: "/wypelnij-formularz?service=Leczenie+oty%C5%82o%C5%9Bci"
    },
    {
      title: "Dermatologia online",
      desc: "Konsultacja dermatologiczna i e-recepta",
      image: "/uslugi/dermatologiaonline.png",
      href: "/wypelnij-formularz?service=Dermatologia+online"
    },
    {
      title: "Ginekologia online",
      desc: "Konsultacja ginekologiczna online",
      image: "/uslugi/ginekologiaonline.png",
      href: "/wypelnij-formularz?service=Ginekologia+online"
    },
    {
      title: "Alergie i astma",
      desc: "Konsultacja i e-recepta na leki alergiczne i wziewne",
      image: "/uslugi/alergieiastma.png",
      href: "/wypelnij-formularz?service=Alergie+i+astma"
    },
    {
      title: "Problemy żołądkowe",
      desc: "Konsultacja i e-recepta na dolegliwości żołądkowe",
      image: "/uslugi/problemyzoladkowe.png",
      href: "/wypelnij-formularz?service=Problemy+%C5%BCo%C5%82%C4%85dkowe"
    },
    {
      title: "Nadciśnienie i serce",
      desc: "Konsultacja i e-recepta na nadciśnienie i choroby serca",
      image: "/uslugi/nadcisnienieiserce.png",
      href: "/wypelnij-formularz?service=Nadci%C5%9Bnienie+i+serce"
    },
    {
      title: "Infekcje i przeziębienia",
      desc: "Szybka pomoc przy infekcjach, grypie i przeziębieniach",
      image: "/uslugi/infekcjeiprzeziebienia.png",
      href: "/wypelnij-formularz?service=Infekcje+i+przezi%C4%99bienia"
    },
  ];

  return (
    <section id="uslugi" className="py-20 bg-white scroll-mt-20 relative overflow-hidden">

      {/* Decorative leafy branch (Left - Desktop Only) */}
      <svg className="absolute top-6 left-6 w-24 h-24 text-[#064743]/10 hidden xl:block pointer-events-none select-none" viewBox="0 0 100 100" fill="currentColor">
        <path d="M10 80 Q 30 50 60 50 M 30 65 Q 25 50 40 45 M 45 58 Q 50 40 60 40" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M40 45 C 45 40 35 30 30 35 C 25 40 35 48 40 45 Z" />
        <path d="M60 40 C 65 35 55 25 50 30 C 45 35 55 43 60 40 Z" />
      </svg>

      {/* Decorative leafy branch (Right - Desktop Only) */}
      <svg className="absolute top-6 right-6 w-24 h-24 text-[#064743]/10 hidden xl:block pointer-events-none select-none" viewBox="0 0 100 100" fill="currentColor">
        <path d="M90 80 Q 70 50 40 50 M 70 65 Q 75 50 60 45 M 55 58 Q 50 40 40 40" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M60 45 C 55 40 65 30 70 35 C 75 40 65 48 60 45 Z" />
        <path d="M40 40 C 35 35 45 25 50 30 C 55 35 45 43 40 40 Z" />
      </svg>

      <div className="w-full px-4 sm:px-8 xl:px-16 relative z-10">

        {/* Headings */}
        <div className="text-center mb-10 relative">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Nasze usługi
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Wybierz to, czego potrzebujesz
          </p>
        </div>

        {/* Outer relative container to hold the left-aligned green badge & grid */}
        <div className="w-full relative mt-8">

          {/* Green pill badge aligned to the left (desktop only, block on mobile) */}
          <div className="mb-6 lg:mb-8 text-left">
            <span className="inline-flex items-center px-4 py-2 bg-[#EAF3F0] text-[#147A60] font-extrabold rounded-full text-[11px] sm:text-xs tracking-wider uppercase shadow-sm">
              • DOSTĘPNE 24/7 • BEZ WYCHODZENIA Z DOMU
            </span>
          </div>

          {/* 12-Card Desktop Carousel */}
          <DesktopCarousel>
            {services.map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] min-w-[85vw] sm:min-w-[calc(50%-12px)] lg:min-w-[calc(25%-18px)] max-w-[85vw] sm:max-w-[calc(50%-12px)] lg:max-w-[calc(25%-18px)] snap-center shrink-0 bg-white rounded-[24px] p-6 flex flex-col justify-between border border-slate-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  {/* Illustration Container */}
                  <div className="w-full h-32 flex items-center justify-center mb-4 overflow-hidden rounded-xl bg-slate-50/50">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="max-h-[110px] w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Title */}
                  <h3 className="font-extrabold text-slate-800 text-base sm:text-lg mb-1.5">{service.title}</h3>
                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed min-h-[36px]">{service.desc}</p>
                </div>
                {/* Action Link */}
                <div className="mt-4">
                  <span className="text-[#147A60] hover:text-[#064743] font-bold text-sm inline-flex items-center gap-1 transition-colors">
                    <span>Zamów</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </DesktopCarousel>

        </div>

        {/* Bottom Trust/Guarantees Panel */}
        <div className="w-full bg-[#EAF3F0]/60 border border-[#D5EAE6]/45 rounded-[24px] p-6 mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#D5EAE6]/80 items-center">
            {[
              { icon: Users, title: "Ponad 50 000", desc: "zadowolonych pacjentów" },
              { icon: Star, title: "98% pacjentów", desc: "poleca nasze usługi" },
              { icon: UserCheck, title: "Lekarze z uprawnieniami", desc: "i wieloletnim doświadczeniem" },
              { icon: Lock, title: "Twoje dane są bezpieczne", desc: "zgodne z RODO" },
              { icon: Clock, title: "Dostęp 24/7", desc: "7 dni w tygodniu" },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className={`flex items-center gap-3 px-4 ${idx > 0 ? 'pt-4 md:pt-0' : ''}`}>
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#064743] flex-shrink-0 shadow-sm">
                    {idx === 1 ? (
                      <Icon className="w-4.5 h-4.5 fill-[#064743] text-[#064743]" />
                    ) : (
                      <Icon className="w-4.5 h-4.5" />
                    )}
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-800 text-sm sm:text-base leading-snug">{item.title}</div>
                    <div className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-snug font-semibold">{item.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

