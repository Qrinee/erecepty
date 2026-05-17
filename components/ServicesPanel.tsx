"use client";

import { useRouter } from "next/navigation";
import { Phone, Video, CheckCircle, Pill, ClipboardList, RefreshCw, Stethoscope } from "lucide-react";

export default function ServicesPanel() {
  const router = useRouter();

  const services = [
    {
      id: 1,
      icon: Pill,
      title: "Recepta Online",
      description: "Otrzymaj receptę nawet w 15 minut",
      price: 79,
      href: "/consultation",
      color: "bg-emerald-50 border-emerald-200",
      buttonColor: "bg-emerald-600 hover:bg-emerald-700",
      buttonText: "Zamów →"
    },
    {
      id: 2,
      icon: ClipboardList,
      title: "L4 Online",
      description: "Zwolnienie lekarskie bez wychodzenia z domu",
      price: 89,
      href: "/medical-leave",
      color: "bg-[#DAE9E6] border-[#DAE9E6]",
      buttonColor: "bg-[#064743] hover:bg-[#1A5D54]",
      buttonText: "Zamów →"
    },
    {
      id: 3,
      icon: RefreshCw,
      title: "Kontynuacja",
      description: "Przedłuż leczenie bez pośredniej wizyty",
      price: 79,
      href: "/consultation",
      color: "bg-purple-50 border-purple-200",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      buttonText: "Zamów →"
    },
    {
      id: 4,
      icon: Stethoscope,
      title: "Wizyta Lekarska",
      description: "Konsultacja z lekarzem specjalistą",
      price: 79,
      href: "/consultation",
      color: "bg-green-50 border-green-200",
      buttonColor: "bg-green-600 hover:bg-green-700",
      buttonText: "Zamów →"
    }
  ];

  const handleOrder = (href: string) => {
    router.push(href);
  };

  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            PANEL UMAWIANIA WIZYTY - DOSTĘPNY DLA KAŻDEJ USŁUGI
          </h2>
          <p className="text-slate-600 text-lg">Wybierz usługę i umów wizytę w ciągu kilku minut</p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`rounded-2xl border-2 p-6 transition-all hover:shadow-lg ${service.color}`}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-slate-700" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>

                {/* Description */}
                <p className="text-sm text-slate-600 mb-4">{service.description}</p>

                {/* Consultation types */}
                <div className="flex gap-2 mb-6">
                  <button
                    onClick={() => handleOrder(service.href)}
                    className="flex items-center gap-1 px-3 py-1.5 bg-white rounded-lg border border-slate-300 text-xs font-medium text-slate-700 hover:border-slate-400"
                  >
                    <Phone className="w-4 h-4" />
                    Telefon
                  </button>
                  <button
                    onClick={() => handleOrder(service.href)}
                    className="flex items-center gap-1 px-3 py-1.5 bg-white rounded-lg border border-slate-300 text-xs font-medium text-slate-700 hover:border-slate-400"
                  >
                    <Video className="w-4 h-4" />
                    Video
                  </button>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-current border-opacity-20">
                  <span className="text-3xl font-bold text-slate-900">od {service.price} zł</span>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleOrder(service.href)}
                  className={`w-full ${service.buttonColor} text-white font-bold py-3 rounded-lg transition-colors`}
                >
                  {service.buttonText}
                </button>

                {/* Info text */}
                <p className="text-center text-xs text-slate-600 mt-3">
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
