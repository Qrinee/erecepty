import { faqData } from "@/app/data/faqData";
import FAQItem from "./FAQItem";
import { HelpCircle, MessageCircle, Mail, Headphones, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function FAQSection() {
  return (
    <section id="faq" className="bg-gradient-to-b from-white via-[#FCFDFD] to-white py-20 scroll-mt-20 relative overflow-hidden" aria-labelledby="faq-section-title">
      
      {/* Background decorations */}
      <div className="absolute top-12 left-10 text-emerald-100 text-3xl font-extrabold select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute bottom-20 right-10 text-emerald-100 text-3xl font-extrabold select-none pointer-events-none hidden lg:block">+</div>

      <div className="w-full px-4 sm:px-8 xl:px-16 relative z-10">
        
        {/* Header container with decorations */}
        <div className="max-w-4xl mx-auto relative mb-12">
          
          {/* Left Decoration: Chat bubble question marks (Desktop only) */}
          <div className="absolute -left-32 lg:-left-44 top-2 hidden md:block w-36 h-28 pointer-events-none select-none">
            <svg viewBox="0 0 120 100" fill="none" className="w-full h-full drop-shadow-md">
              {/* Green bubble */}
              <path d="M10 50 C10 25 35 10 60 10 C85 10 100 25 100 45 C100 60 90 70 80 75 L75 90 L60 80 C35 80 10 70 10 50 Z" fill="#147A60" />
              <text x="55" y="60" fill="white" fontSize="40" fontWeight="bold" textAnchor="middle">?</text>
              
              {/* White bubble */}
              <path d="M70 70 C70 60 80 50 95 50 C110 50 120 60 120 70 C120 80 112 85 108 88 L106 96 L98 92 C80 92 70 85 70 70 Z" fill="white" stroke="#E2E8F0" strokeWidth="1.5" />
              <circle cx="88" cy="70" r="2" fill="#94A3B8" />
              <circle cx="95" cy="70" r="2" fill="#94A3B8" />
              <circle cx="102" cy="70" r="2" fill="#94A3B8" />
            </svg>
          </div>

          {/* Right Decoration: Health Shield & Text (Desktop only) */}
          <div className="absolute -right-36 lg:-right-48 top-2 hidden lg:flex items-center gap-3 max-w-[180px] pointer-events-none select-none">
            {/* White Shield with Green Cross */}
            <div className="w-14 h-16 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/50"></div>
              {/* Shield Outline SVG */}
              <svg viewBox="0 0 40 50" fill="none" className="w-10 h-12 text-[#147A60] relative z-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 5 C30 5 35 8 35 18 C35 32 20 42 20 45 C20 42 5 32 5 18 C5 8 10 5 20 5 Z" fill="#E8F3F1" />
                <path d="M20 14 V26 M14 20 H26" stroke="#147A60" strokeWidth="3" />
              </svg>
            </div>
            
            {/* Text block */}
            <div className="text-left">
              <div className="text-[11px] font-extrabold text-slate-800 leading-snug">
                Twoje zdrowie <span className="text-[#147A60] block">w dobrych rękach</span>
              </div>
              <div className="text-[9px] text-slate-400 font-bold mt-0.5 leading-tight">
                Bezpiecznie, szybko i bez wychodzenia z domu.
              </div>
            </div>
          </div>

          {/* Actual Headings inside the center column */}
          <div className="text-center relative z-10">
            <span className="inline-flex items-center gap-1.5 bg-[#EAF3F0] text-[#147A60] text-xs font-extrabold px-4 py-1.5 rounded-full mb-4 shadow-sm border border-[#D5EAE6]/50 tracking-wider">
              <HelpCircle size={13} className="text-[#147A60]" />
              FAQ
            </span>
            <h2 id="faq-section-title" className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
              Najczęściej zadawane <span className="text-[#147A60]">pytania</span>
            </h2>
            <div className="text-slate-500 text-sm sm:text-base font-semibold leading-relaxed">
              <span>Szybkie odpowiedzi na to, co najważniejsze.</span>
              <span className="block mt-0.5">
                Nie znalazłeś odpowiedzi?{" "}
                <Link href="#kontakt" className="text-[#147A60] hover:text-[#064743] underline transition-colors cursor-pointer font-bold">
                  Skontaktuj się z nami.
                </Link>
              </span>
            </div>
          </div>

        </div>

        {/* 8 Accordion Items Container */}
        <div className="max-w-4xl mx-auto space-y-3 relative z-10" role="list">
          {faqData.map((item, index) => (
            <FAQItem key={index} {...item} />
          ))}
        </div>

        {/* Bottom Mint Contact Bar */}
        <div className="max-w-4xl mx-auto bg-[#EAF3F0]/60 border border-[#D5EAE6]/50 rounded-[28px] p-6 mt-12 flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10 shadow-sm">
          
          {/* Left text column */}
          <div className="flex items-center gap-4 text-left">
            <div className="w-11 h-11 rounded-xl bg-white border border-[#D5EAE6] text-[#064743] flex items-center justify-center flex-shrink-0 shadow-sm">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <p className="font-extrabold text-slate-800 text-sm leading-snug">
                Nie znalazłeś odpowiedzi?
              </p>
              <p className="text-xs text-slate-500 font-bold mt-0.5 leading-snug">
                Skontaktuj się z nami – jesteśmy tu, aby Ci pomóc.
              </p>
            </div>
          </div>

          {/* Right buttons row */}
          <div className="flex flex-wrap items-center gap-3">
            
            {/* Live Chat / WhatsApp Button */}
            <Link 
              href="#kontakt"
              className="cursor-pointer rounded-full bg-white border border-slate-200/80 px-5 py-2.5 text-xs font-extrabold text-slate-700 hover:text-[#147A60] hover:border-[#147A60]/40 transition flex items-center gap-1.5 shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Czat na żywo</span>
            </Link>

            {/* Write to us Button */}
            <Link 
              href="#kontakt"
              className="cursor-pointer rounded-full bg-[#147A60] hover:bg-[#064743] px-5 py-2.5 text-xs font-extrabold text-white transition flex items-center gap-1.5 shadow-sm shadow-emerald-800/10"
            >
              <Mail className="w-4 h-4" />
              <span>Napisz do nas</span>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}

