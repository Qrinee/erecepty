"use client";

import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Stethoscope,
  Baby,
  Scissors,
  Brain,
  Eye,
  Ear,
  Smile,
  Activity,
  Pill,
  HeartPulse,
  ScanSearch,
  Ellipsis,
} from "lucide-react";

export default function SpecializationsSection() {
  const router = useRouter();

  const specialties = [
    { icon: Stethoscope, title: "Internista" },
    { icon: Baby, title: "Pediatra" },
    { icon: Scissors, title: "Chirurg" },
    { icon: Brain, title: "Psychiatra" },
    { icon: Eye, title: "Oftalmolog" },
    { icon: Ear, title: "Laryngolog" },
    { icon: Smile, title: "Dentysta" },
    { icon: Activity, title: "Neurolog" },
    { icon: Pill, title: "Farmaceuta" },
    { icon: HeartPulse, title: "Kardiolog" },
    { icon: ScanSearch, title: "Dermatolog" },
    { icon: Ellipsis, title: "Więcej..." },
  ];

  return (
    <section id="specjalizacje" className="py-16 md:py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Specjalizacje
          </h2>
          <p className="text-slate-600 text-lg">Nasz lekarz - wiele specjalizacji</p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {specialties.map((spec, idx) => {
            const Icon = spec.icon;
            return (
              <div
                key={idx}
                onClick={() => router.push("/consultation")}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all cursor-pointer border border-slate-200 hover:border-[#1A5D54] group"
              >
                <div className="w-11 h-11 rounded-lg bg-[#DAE9E6] flex items-center justify-center mx-auto mb-3 group-hover:bg-[#DAE9E6] transition-colors">
                  <Icon className="w-5 h-5 text-[#064743]" />
                </div>
                <p className="text-sm font-semibold text-slate-900">{spec.title}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => router.push("/consultation")}
            className="bg-[#064743] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1A5D54] transition inline-flex items-center gap-2"
          >
            Zobacz wszystkie specjalizacje
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
