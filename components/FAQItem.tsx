"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

type FAQItemProps = {
  question: string;
  answer: string;
};

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const answerId = `answer-${id}`;
  const buttonId = `button-${id}`;

  return (
    <div className="rounded-xl bg-slate-50 px-6 py-4 transition" >
      <button
        id={buttonId}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={answerId}
        className="cursor-pointer flex w-full items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#064743] focus:ring-offset-2 rounded px-2 -mx-2"
      >
        <span className="font-medium text-slate-900">
          {question}
        </span>
        <ChevronDown
          size={18}
          aria-hidden="true"
          className={`text-[#064743] transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div 
          id={answerId}
          role="region" 
          aria-labelledby={buttonId}
          className="mt-4 text-sm text-slate-600"
        >
          {answer}
        </div>
      )}
    </div>
  );
}
