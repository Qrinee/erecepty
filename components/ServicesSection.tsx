"use client";

import Link from "next/link";
import {
  ArrowRight,
  Pill,
  ClipboardList,
  Stethoscope,
  Activity,
  Syringe,
  Microscope,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    { icon: Pill, title: "e-Recepta", desc: "Otrzymaj receptę nawet w 15 minut", href: "/consultation" },
    { icon: ClipboardList, title: "L4", desc: "Zwolnienie lekarskie online", href: "/medical-leave" },
    { icon: Stethoscope, title: "Konsultacja", desc: "Porada specjalisty online", href: "/consultation" },
    { icon: Activity, title: "Badania", desc: "Skierowanie na badania", href: "/consultation" },
    { icon: Syringe, title: "Szczepienia", desc: "Konsultacja przed szczepieniem", href: "/consultation" },
    { icon: Microscope, title: "Diagnostyka", desc: "Interpretacja wyników", href: "/consultation" },
  ];

  return (
    <section id="uslugi" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Usługi
          </h2>
          <p className="text-slate-600 text-lg">Wybierz usługę dostosowaną do Twoich potrzeb</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Link
                key={idx}
                href={service.href}
                className="bg-gradient-to-br from-slate-50 to-[#DAE9E6] rounded-xl p-6 text-center hover:shadow-lg transition-all cursor-pointer border border-slate-200 group"
              >
                <div className="w-11 h-11 rounded-lg bg-[#DAE9E6] flex items-center justify-center mx-auto mb-3 group-hover:bg-[#DAE9E6] transition-colors">
                  <Icon className="w-5 h-5 text-[#064743]" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-xs text-slate-600">{service.desc}</p>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/consultation"
            className="bg-[#064743] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1A5D54] transition inline-flex items-center gap-2"
          >
            Poznaj wszystkie usługi
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
