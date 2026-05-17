"use client";

import { ArrowRight, CheckCircle } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    { number: "1", title: "Wybierz usługę", desc: "Zdecyduj jaką usługę potrzebujesz" },
    { number: "2", title: "Wybierz lekarza", desc: "Znajdź idealnego specjalistę" },
    { number: "3", title: "Umów wizytę", desc: "Zarezerwuj preferowany czas" },
    { number: "4", title: "Konsultacja", desc: "Porad od licencjonowanego lekarza" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            4. JAK TO DZIAŁA?
          </h2>
          <p className="text-slate-600 text-lg">To prosty i szybki proces</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="bg-gradient-to-br from-[#DAE9E6] to-slate-50 rounded-xl p-8 border-2 border-[#1A5D54] text-center h-full">
                <div className="w-12 h-12 bg-[#064743] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-[#064743]" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#064743] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1A5D54] transition inline-flex items-center gap-2">
            Rozpocznij teraz
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
