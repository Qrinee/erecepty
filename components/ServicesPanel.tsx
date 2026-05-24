"use client";

import { useRouter } from "next/navigation";
import {
  Phone, Video, Pill, ClipboardList, RefreshCw,
  Stethoscope, Clock, ShieldCheck, Percent, Lock
} from "lucide-react";

export default function ServicesPanel() {
  const router = useRouter();

  const services = [
    {
      id: 1,
      icon: Pill,
      title: "Recepta Online",
      description: "Otrzymaj e-receptę nawet w 15 minut",
      price: 59,
      image: "/receptaonline.jpeg",
      href: "/wypelnij-formularz?service=e-Recepta+online",
      color: "bg-[#F6FBF8] border-[#E8F1EC]",
      buttonColor: "bg-[#138A56] hover:bg-[#0F7548]",
      buttonText: "Zamów →"
    },
    {
      id: 2,
      icon: ClipboardList,
      title: "L4 Online",
      description: "Zwolnienie lekarskie bez wychodzenia z domu",
      price: 79,
      image: "/l4online.jpeg",
      href: "/wypelnij-formularz?service=L4+online",
      color: "bg-[#F2F8FB] border-[#E1EEF3]",
      buttonColor: "bg-[#0B3D3B] hover:bg-[#072625]",
      buttonText: "Zamów →"
    },
    {
      id: 3,
      icon: RefreshCw,
      title: "Kontynuacja",
      description: "Przedłuż leczenie bez pośredniej wizyty",
      price: 59,
      image: "/continuation_3d.png",
      href: "/wypelnij-formularz?service=Kontynuacja+leczenia",
      color: "bg-[#F5F2FC] border-[#EAE3F5]",
      buttonColor: "bg-[#4834D4] hover:bg-[#341F97]",
      buttonText: "Zamów →"
    },
    {
      id: 4,
      icon: Stethoscope,
      title: "Wizyta Lekarska",
      description: "Konsultacja z lekarzem specjalistą",
      price: 79,
      image: "/konsultacjalekarska.jpeg",
      href: "/wypelnij-formularz?service=Wizyta+lekarska+og%C3%B3lna",
      color: "bg-[#F2F8FB] border-[#E1EEF3]",
      buttonColor: "bg-[#138A56] hover:bg-[#0F7548]",
      buttonText: "Zamów →"
    }
  ];

  const handleOrder = (href: string) => {
    router.push(href);
  };

  return (
    <section className="bg-white relative overflow-hidden pt-10" id="cennik">

      {/* Decorative leafy branch (Left - Desktop Only) */}
      <svg className="absolute top-6 left-6 w-24 h-24 text-[#064743]/10 hidden xl:block pointer-events-none select-none" viewBox="0 0 100 100" fill="currentColor">
        <path d="M10 80 Q 30 50 60 50 M 30 65 Q 25 50 40 45 M 45 58 Q 50 40 60 40" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M40 45 C 45 40 35 30 30 35 C 25 40 35 48 40 45 Z" />
        <path d="M60 40 C 65 35 55 25 50 30 C 45 35 55 43 60 40 Z" />
      </svg>

      {/* Decorative leafy branch (Right - Desktop Only) */}
      <svg className="absolute top-6 right-6 w-24 h-24 text-[#064743]/10 hidden xl:block pointer-events-none select-none" viewBox="0 0 100 100" fill="currentColor">
        <path d="M90 80 Q 70 50 40 50 M 70 65 Q 75 50 60 45 M 55 58 Q 50 40 40 40" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M60 45 C 55 40 65 30 70 35 C 75 40 65 48 60 45 Z" />
        <path d="M40 40 C 35 35 45 25 50 30 C 55 35 45 43 40 40 Z" />
      </svg>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-3 tracking-tight uppercase">
            PANEL UMAWIANIA WIZYTY – DOSTĘPNY DLA KAŻDEJ USŁUGI
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Wybierz usługę i umów wizytę w ciągu kilku minut
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`rounded-[28px] border p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden ${service.color}`}
              >
                <div>
                  {/* Top-left small circular icon badge */}
                  <div className="w-10 h-10 rounded-[14px] bg-white border border-slate-100 shadow-[0_2px_4px_rgba(0,0,0,0.02)] flex items-center justify-center text-slate-500 mb-2 absolute top-6 left-6 z-10">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>

                  {/* Image Container - Beautifully rounded and masked photo */}
                  <div className="relative w-full aspect-[16/10] mb-6 mt-2 rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-[22px] font-extrabold text-slate-900 mb-2">{service.title}</h3>

                  {/* Description */}
                  <p className="text-[15px] text-slate-600 mb-6 leading-snug min-h-[44px]">{service.description}</p>

                  {/* Consultation types (Telefon / Video) */}
                  <div className="flex gap-3 mb-8">
                    <div className="flex items-center justify-center gap-2 py-2 px-3.5 bg-white border border-slate-200 rounded-[10px] text-sm font-bold text-slate-600 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                      <Phone className="w-4 h-4 text-slate-400" />
                      Telefon
                    </div>
                    <div className="flex items-center justify-center gap-2 py-2 px-3.5 bg-white border border-slate-200 rounded-[10px] text-sm font-bold text-slate-600 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                      <Video className="w-4 h-4 text-slate-400" />
                      Wideo
                    </div>
                  </div>
                </div>

                <div>
                  {/* Price */}
                  <div className="mb-4 flex items-baseline gap-1.5 text-slate-900">
                    <span className="text-[17px] font-bold text-slate-800">od</span>
                    <span className="text-3xl font-extrabold tracking-tight">{service.price} zł</span>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleOrder(service.href)}
                    className={`w-full ${service.buttonColor} text-white font-bold py-3.5 rounded-[14px] transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer shadow-sm text-base`}
                  >
                    <span>{service.buttonText}</span>
                  </button>

                  {/* Info text at the bottom */}
                  <div className="flex items-center justify-center gap-1.5 text-sm text-slate-500 mt-4 font-medium">
                    <Clock className="w-4 h-4" />
                    <span>Czas realizacji: nawet 15 min</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust/Guarantees Row under Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-8 border-t border-slate-100">
          {[
            { icon: ShieldCheck, title: "Bezpiecznie", desc: "Twoje dane są u nas bezpieczne" },
            { icon: Clock, title: "Szybko", desc: "Wizyta nawet w 15 minut" },
            { icon: Percent, title: "Przystępnie", desc: "Atrakcyjne ceny bez ukrytych opłat" },
            { icon: Lock, title: "Bez wychodzenia z domu", desc: "Załatw wszystko online, bez kolejek" },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#138A56] flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                  <Icon className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <div className="pt-0.5">
                  <div className="font-bold text-slate-900 text-[15px] leading-snug">{item.title}</div>
                  <div className="text-sm text-slate-600 mt-1 leading-snug pr-4">{item.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

