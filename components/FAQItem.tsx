"use client";

import { useId, useState } from "react";
import { 
  ChevronDown, ShieldCheck, Zap, User, ClipboardList, Lock, Headphones, Clock, RefreshCw 
} from "lucide-react";

type FAQItemProps = {
  question: string;
  answer: string;
  icon?: string;
};

const iconMap: Record<string, any> = {
  ShieldCheck,
  Zap,
  User,
  ClipboardList,
  Lock,
  Headphones,
  Clock,
  RefreshCw
};

export default function FAQItem({ question, answer, icon }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const answerId = `answer-${id}`;
  const buttonId = `button-${id}`;

  const IconComponent = icon && iconMap[icon] ? iconMap[icon] : ShieldCheck;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 hover:border-slate-200/80 shadow-[0_10px_35px_rgba(0,0,0,0.01)] transition-all duration-300">
      <button
        id={buttonId}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={answerId}
        className="w-full flex items-center justify-between gap-4 p-4 md:p-5 text-left focus:outline-none cursor-pointer group"
      >
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-[#E8F3F1] border border-[#D5EAE6] text-[#147A60] flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-[#d9ece8]">
            <IconComponent className="w-5 h-5" />
          </div>
          <span className="font-extrabold text-slate-800 text-xs sm:text-[15px] tracking-tight transition-colors group-hover:text-[#147A60]">
            {question}
          </span>
        </div>
        <ChevronDown
          size={18}
          aria-hidden="true"
          className={`text-slate-400 transition-transform duration-300 ${
            open ? "rotate-180 text-[#147A60]" : ""
          }`}
        />
      </button>

      {open && (
        <div 
          id={answerId}
          role="region" 
          aria-labelledby={buttonId}
          className="pl-[60px] pr-6 pb-5 -mt-1 text-xs sm:text-[13px] text-slate-500 font-semibold leading-relaxed"
        >
          {answer}
        </div>
      )}
    </div>
  );
}
