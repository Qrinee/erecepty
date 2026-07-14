"use client";

import React, { useState } from "react";
import { Info, Stethoscope, Pill, FileText, RefreshCw } from "lucide-react";
import { KonsultacjaForm } from "./forms/KonsultacjaForm";
import { EReceptaForm } from "./forms/EReceptaForm";
import { L4Form } from "./forms/L4Form";
import { KontynuacjaForm } from "./forms/KontynuacjaForm";


export const servicesData = [
  {
    id: "konsultacja",
    num: "1.",
    label: "Konsultacja lekarska online",
    shortLabel: "Konsultacja",
    subtitle: "Wypełnij formularz, a my skontaktujemy się z Tobą.",
    icon: Stethoscope,
    iconBg: "bg-[#147A60]",
    headerBg: "bg-gradient-to-r from-[#EAF3F0] to-slate-50",
    numColor: "text-[#147A60]",
    activeTab: "border-[#147A60] text-[#147A60] bg-[#EAF3F0]",
    inactiveTab: "border-transparent text-slate-500 hover:text-[#147A60] hover:border-[#EAF3F0]",
  },
  {
    id: "erecepta",
    num: "2.",
    label: "E-Recepta online",
    shortLabel: "E-Recepta",
    subtitle: "Wypełnij formularz, aby uzyskać e-receptę.",
    icon: Pill,
    iconBg: "bg-[#E11D48]",
    headerBg: "bg-gradient-to-r from-[#FFF1F2] to-slate-50",
    numColor: "text-[#E11D48]",
    activeTab: "border-[#E11D48] text-[#E11D48] bg-[#FFF1F2]",
    inactiveTab: "border-transparent text-[#E11D48] hover:text-[#E11D48] hover:border-[#E11D48]",
  },
  {
    id: "l4",
    num: "3.",
    label: "L4 online",
    shortLabel: "L4 online",
    subtitle: "Wypełnij formularz, aby uzyskać zwolnienie lekarskie.",
    icon: FileText,
    iconBg: "bg-purple-600",
    headerBg: "bg-gradient-to-r from-purple-50 to-slate-50",
    numColor: "text-purple-600",
    activeTab: "border-purple-500 text-purple-600 bg-purple-50",
    inactiveTab: "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-200",
  },
  {
    id: "kontynuacja",
    num: "4.",
    label: "Kontynuacja leczenia",
    shortLabel: "Kontynuacja",
    subtitle: "Wypełnij formularz, aby kontynuować leczenie.",
    icon: RefreshCw,
    iconBg: "bg-orange-500",
    headerBg: "bg-gradient-to-r from-orange-50 to-slate-50",
    numColor: "text-orange-500",
    activeTab: "border-orange-500 text-orange-600 bg-orange-50",
    inactiveTab: "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-200",
  },
];

export default function ServiceFormsSection() {
  const [active, setActive] = useState(0);
  const svc = servicesData[active];
  const Icon = svc.icon;

  return (
    <section id="formularze" className="bg-[#F8FAFB] py-16 scroll-mt-20">
      <div className="w-full px-4 sm:px-8 xl:px-16">

        {}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 bg-[#EAF3F0] text-[#147A60] text-xs font-extrabold px-4 py-1.5 rounded-full mb-4 border border-[#D5EAE6]/50 tracking-wider">
            <Info className="w-3 h-3" />
            Formularze usług
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Wybierz usługę i wypełnij formularz
          </h2>
          <p className="text-slate-500 text-sm mt-2">Szybko, bezpiecznie i bez wychodzenia z domu.</p>
        </div>

        {}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {servicesData.map((s, i) => {
            const TabIcon = s.icon;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 text-sm font-extrabold transition-all cursor-pointer ${i === active ? s.activeTab : s.inactiveTab}`}
              >
                <div className={`w-5 h-5 rounded-full ${i === active ? s.iconBg : "bg-slate-200"} flex items-center justify-center flex-shrink-0`}>
                  <TabIcon className="w-3 h-3 text-white" />
                </div>
                <span className="hidden sm:inline">{s.label}</span>
                <span className="sm:hidden">{s.shortLabel}</span>
              </button>
            );
          })}
        </div>

        {}
        <div className="bg-white rounded-[24px] border border-slate-100 shadow-[0_8px_40px_rgba(0,0,0,0.04)] overflow-hidden">

          {}
          <div className={`${svc.headerBg} px-6 py-5 border-b border-slate-100 flex items-center gap-4`}>
            <div className={`w-10 h-10 rounded-full ${svc.iconBg} flex items-center justify-center flex-shrink-0 shadow-sm`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className={`text-lg font-extrabold text-slate-900`}>
                <span className={svc.numColor}>{svc.num}</span> {svc.label.toUpperCase()}
              </h3>
              <p className="text-xs text-slate-500 font-semibold mt-0.5">{svc.subtitle}</p>
            </div>
          </div>

          {}
          <div className="p-6">
            {active === 0 && <KonsultacjaForm />}
            {active === 1 && <EReceptaForm />}
            {active === 2 && <L4Form />}
            {active === 3 && <KontynuacjaForm />}
          </div>
        </div>

      </div>
    </section>
  );
}
