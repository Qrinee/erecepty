"use client";

import { useRouter } from "next/navigation";
import { Pill, ClipboardList, Stethoscope } from "lucide-react";

export default function PricingSection() {
  const router = useRouter();

  const plans = [
    { name: "e-Recepta", price: 59, icon: Pill, href: "/wypelnij-formularz?service=e-Recepta+online" },
    { name: "L4", price: 79, icon: ClipboardList, href: "/wypelnij-formularz?service=L4+online" },
    { name: "Konsultacja", price: 79, icon: Stethoscope, href: "/wypelnij-formularz?service=Konsultacja+lekarska" },
  ];

  return (
    <section id="cennik" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Cennik
          </h2>
          <p className="text-slate-600 text-lg">Przejrzyste ceny bez ukrytych kosztów</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-slate-50 to-[#DAE9E6] rounded-2xl p-8 border-2 border-slate-200 hover:border-[#1A5D54] transition text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-[#064743]" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">od {plan.price} zł</span>
                </div>
                <button
                  onClick={() => router.push(plan.href)}
                  className="w-full bg-[#064743] text-white font-bold py-3 rounded-lg hover:bg-[#1A5D54] transition mb-4"
                >
                  Zamów
                </button>
                <p className="text-center text-sm text-slate-600">
                  Czas realizacji: nawet 15 min
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
