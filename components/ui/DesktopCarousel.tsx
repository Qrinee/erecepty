"use client";

import { useRef, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function DesktopCarousel({ children }: { children: ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth * 0.8 : clientWidth * 0.8;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group w-full">
      {/* Left Navigation Arrow */}
      <button 
        onClick={() => scroll("left")}
        className="hidden lg:flex absolute -left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.1)] border border-slate-100 items-center justify-center text-[#064743] hover:bg-[#F5FAF9] hover:border-[#D5EAE6] z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 disabled:opacity-0 active:scale-95"
        aria-label="Przewiń w lewo"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      {/* Scrollable Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 px-4 -mx-4 sm:mx-0 sm:px-0 sm:gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {children}
      </div>

      {/* Right Navigation Arrow */}
      <button 
        onClick={() => scroll("right")}
        className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.1)] border border-slate-100 items-center justify-center text-[#064743] hover:bg-[#F5FAF9] hover:border-[#D5EAE6] z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 active:scale-95"
        aria-label="Przewiń w prawo"
      >
        <ChevronRight className="w-7 h-7" />
      </button>
    </div>
  );
}
