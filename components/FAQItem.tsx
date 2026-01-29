"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type FAQItemProps = {
  question: string;
  answer: string;
};

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl bg-slate-50 px-6 py-4 transition" >
      <button
        onClick={() => setOpen(!open)}
        className="cursor-pointer flex w-full items-center justify-between text-left"
      >
        <span className="font-medium text-slate-900">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={`text-blue-600 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <p className="mt-4 text-sm text-slate-500">
          {answer}
        </p>
      )}
    </div>
  );
}
