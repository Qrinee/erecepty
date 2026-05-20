"use client";

import { useRouter } from "next/navigation";
import { 
  Phone, Video, CheckCircle, Pill, ClipboardList, RefreshCw, 
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
      price: 79,
      image: "/recipe_3d.png",
      href: "/consultation?service=e-Recepta+online",
      color: "bg-[#F0FAF7]/90 border-[#DAF2EB]",
      buttonColor: "bg-[#108568] hover:bg-[#0E735A]",
      buttonText: "Zamów →"
    },
    {
      id: 2,
      icon: ClipboardList,
      title: "L4 Online",
      description: "Zwolnienie lekarskie bez wychodzenia z domu",
      price: 89,
      image: "/l4_3d.png",
      href: "/medical-leave",
      color: "bg-[#EFF6F5]/90 border-[#DAE9E6]",
      buttonColor: "bg-[#064743] hover:bg-[#053734]",
      buttonText: "Zamów →"
    },
    {
      id: 3,
      icon: RefreshCw,
      title: "Kontynuacja",
      description: "Przedłuż leczenie bez pośredniej wizyty",
      price: 79,
      image: "/continuation_3d.png",
      href: "/consultation?service=Kontynuacja+leczenia",
      color: "bg-[#F4F4FA]/90 border-[#E4E4F4]",
      buttonColor: "bg-[#4F46E5] hover:bg-[#4338CA]",
      buttonText: "Zamów →"
    },
    {
      id: 4,
      icon: Stethoscope,
      title: "Wizyta Lekarska",
      description: "Konsultacja z lekarzem specjalistą",
      price: 79,
      image: "/doctor_3d.png",
      href: "/consultation?service=Wizyta+lekarska+og%C3%B3lna",
      color: "bg-[#F0FAF7]/90 border-[#DAF2EB]",
      buttonColor: "bg-[#108568] hover:bg-[#0E735A]",
      buttonText: "Zamów →"
    }
  ];

  const handleOrder = (href: string) => {
    router.push(href);
  };

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            PANEL UMAWIANIA WIZYTY - DOSTĘPNY DLA KAŻDEJ USŁUGI
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Wybierz usługę i umów wizytę w ciągu kilku minut
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`rounded-[28px] border p-6 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.01)] hover:shadow-md transition-shadow relative overflow-hidden ${service.color}`}
              >
                <div>
                  {/* Top-left small circular icon badge */}
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200/60 shadow-sm flex items-center justify-center text-slate-500 mb-4">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* 3D Illustration Container */}
                  <div className="relative w-full h-44 mb-5 flex items-center justify-center bg-white/40 backdrop-blur-sm border border-white/60 rounded-2xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.8)] overflow-hidden group">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="max-h-[130px] w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-slate-900 mb-1">{service.title}</h3>

                  {/* Description */}
                  <p className="text-xs text-slate-500 mb-5 leading-relaxed min-h-[32px]">{service.description}</p>

                  {/* Consultation types (Telefon / Video) */}
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    <button
                      onClick={() => handleOrder(service.href)}
                      className="flex items-center justify-center gap-1.5 py-2 px-3 bg-white border border-slate-200 rounded-xl text-[11px] font-extrabold text-slate-600 hover:border-[#064743] hover:text-[#064743] transition-colors shadow-sm cursor-pointer"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      Telefon
                    </button>
                    <button
                      onClick={() => handleOrder(service.href)}
                      className="flex items-center justify-center gap-1.5 py-2 px-3 bg-white border border-slate-200 rounded-xl text-[11px] font-extrabold text-slate-600 hover:border-[#064743] hover:text-[#064743] transition-colors shadow-sm cursor-pointer"
                    >
                      <Video className="w-3.5 h-3.5" />
                      Wideo
                    </button>
                  </div>
                </div>

                <div>
                  {/* Price */}
                  <div className="mb-4 flex items-baseline gap-1 text-[#147A60] font-extrabold">
                    <span className="text-sm">od</span>
                    <span className="text-3xl tracking-tight">{service.price} zł</span>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleOrder(service.href)}
                    className={`w-full ${service.buttonColor} text-white font-extrabold py-3.5 rounded-xl transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer shadow-sm text-sm`}
                  >
                    <span>{service.buttonText}</span>
                  </button>

                  {/* Info text at the bottom */}
                  <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-slate-400 mt-4 uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Czas realizacji: nawet 15 min</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust/Guarantees Row under Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-10 border-t border-slate-100">
          {[
            { icon: CheckCircle, title: "Bezpiecznie", desc: "Twoje dane są u nas bezpieczne" },
            { icon: Clock, title: "Szybko", desc: "Wizyta nawet w 15 minut" },
            { icon: Percent, title: "Przystępnie", desc: "Atrakcyjne ceny bez ukrytych opłat" },
            { icon: Lock, title: "Bez wychodzenia z domu", desc: "Załatw wszystko online, bez kolejek" },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#E8F3F1] border border-[#D5EAE6] flex items-center justify-center text-[#064743] flex-shrink-0 shadow-sm">
                  {idx === 0 ? (
                    <Icon className="w-4.5 h-4.5 fill-[#064743] text-white" strokeWidth={2.5} />
                  ) : (
                    <Icon className="w-4.5 h-4.5" strokeWidth={2.5} />
                  )}
                </div>
                <div>
                  <div className="font-extrabold text-slate-800 text-sm leading-snug">{item.title}</div>
                  <div className="text-xs text-slate-500 mt-1 leading-snug">{item.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

