"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ShieldCheck,
  UserCheck,
  Clock,
  ArrowRight,
  ChevronDown,
  Building2,
  Users,
  Smartphone,
  Heart,
  Stethoscope,
  FileText,
  Briefcase,
  HelpCircle,
  Activity,
  BriefcaseMedical,
  MessageSquare,
  Globe,
  Settings,
  Sparkles,
  Compass,
  Check
} from "lucide-react";

export default function DlaFirmPage() {
  // State for FAQ accordions
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const employeeBenefits = [
    {
      icon: Clock,
      title: "Konsultacje online 24/7",
      description: "Lekarze dostępni o każdej porze dnia i nocy."
    },
    {
      icon: FileText,
      title: "E-recepty i L4 online",
      description: "Szybko, wygodnie i bez wychodzenia z domu."
    },
    {
      icon: Stethoscope,
      title: "Specjaliści online",
      description: "Szeroki wybór lekarzy wielu specjalizacji medycznych."
    },
    {
      icon: Heart,
      title: "Wsparcie psychologiczne",
      description: "Profesjonalna pomoc i wsparcie w trudnych chwilach."
    },
    {
      icon: ShieldCheck,
      title: "Profilaktyka i zdrowie",
      description: "Edukacja medyczna, badania profilaktyczne i programy zdrowotne."
    },
    {
      icon: Smartphone,
      title: "Aplikacja mobilna",
      description: "Wszystko w zasięgu ręki w prostej aplikacji dla pracownika."
    }
  ];

  const companyBenefits = [
    {
      title: "Mniej absencji",
      description: "Szybszy dostęp do lekarza = mniej dni na zwolnieniu chorobowym."
    },
    {
      title: "Wyższa produktywność",
      description: "Zdrowi pracownicy to lepsze wyniki, motywacja i większa efektywność."
    },
    {
      title: "Atrakcyjny benefit",
      description: "Nowoczesna opieka medyczna zwiększa zaangażowanie i lojalność zespołu."
    },
    {
      title: "Proste wdrożenie",
      description: "Szybkie uruchomienie usługi i pełne wsparcie na każdym etapie."
    }
  ];

  const steps = [
    {
      icon: MessageSquare,
      title: "Kontakt z nami",
      description: "Odezwij się, a my doradzimy najlepsze rozwiązanie."
    },
    {
      icon: Settings,
      title: "Dobór pakietu",
      description: "Wybieramy pakiet dopasowany do potrzeb Twojej firmy."
    },
    {
      icon: Users,
      title: "Aktywacja pracowników",
      description: "Pracownicy otrzymują dostęp do platformy w kilka minut."
    },
    {
      icon: Compass,
      title: "Dostęp do platformy 24/7",
      description: "Konsultacje, e-recepty i wsparcie - kiedy tylko potrzebują."
    },
    {
      icon: Sparkles,
      title: "Zdrowszy zespół",
      description: "Lepsze samopoczucie, więcej energii i mniej absencji."
    }
  ];

  const packages = [
    {
      name: "Starter",
      subtitle: "Dla małych firm i startupów",
      description: "Podstawowy dostęp do konsultacji online i e-recept.",
      price: "Indywidualna",
      badge: "Dla małych zespołów"
    },
    {
      name: "Business",
      subtitle: "Dla rozwijających się zespołów",
      description: "Więcej możliwości, dostęp do specjalistów, wsparcie psychologiczne.",
      price: "Dedykowana",
      badge: "Najpopularniejszy",
      featured: true
    },
    {
      name: "Enterprise",
      subtitle: "Dla dużych organizacji",
      description: "Indywidualne rozwiązania, opieka dedykowanego opiekuna.",
      price: "Szyty na miarę",
      badge: "Pełny pakiet VIP"
    }
  ];

  const faqs = [
    {
      q: "Czy pracownicy mają dostęp do konsultacji 24/7?",
      a: "Tak, nasi lekarze są dostępni 24 godziny na dobę, 7 dni w tygodniu, również w święta i dni wolne od pracy. Konsultację można odbyć przez telefon lub wideo online."
    },
    {
      q: "Jak szybko można wdrożyć usługę w firmie?",
      a: "Cały proces trwa zazwyczaj mniej niż 48 godzin. Po podpisaniu umowy wysyłamy linki aktywacyjne do pracowników i mogą oni natychmiast korzystać z platformy."
    },
    {
      q: "Czy pakiet można dopasować do naszych potrzeb?",
      a: "Oczywiście. Oferujemy w pełni elastyczne rozwiązania. Możemy dopasować zakres opieki lekarskiej, liczbę konsultacji oraz dodać moduły takie jak wsparcie psychologiczne czy dietetyczne."
    },
    {
      q: "Czy usługa działa również za granicą?",
      a: "Tak. Pracownicy przebywający na wyjazdach służbowych lub urlopach zagranicznych mają nieograniczony dostęp do lekarzy mówiących po polsku i angielsku za pośrednictwem platformy online."
    }
  ];

  return (
    <>
      <Header transparent={false} />
      <main id="main-content" className="bg-[#FAFBFB] min-h-screen pb-20" tabIndex={-1}>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24 bg-white border-b border-slate-100">
          <div className="absolute top-12 left-10 w-64 h-64 bg-[#E8F3F1]/50 rounded-full blur-3xl -z-10" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

              {/* Hero text */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
                <span className="inline-flex items-center gap-1.5 bg-[#E8F3F1] text-[#147A60] text-xs font-black px-4 py-2 rounded-full uppercase tracking-wider">
                  Dla Firm
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
                  Telemedycyna <br />
                  dla <span className="text-[#147A60]">firm i pracowników</span>
                </h1>

                <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed font-semibold">
                  Nowoczesna opieka medyczna online dla Twojego zespołu – konsultacje 24/7, e-recepty, szybka pomoc specjalistów i mniej absencji w pracy.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                  <Link
                    href="/#kontakt"
                    className="inline-flex items-center justify-center gap-2 bg-[#147A60] hover:bg-[#0E5B47] text-white px-8 py-4 rounded-xl font-bold transition-all shadow-md active:scale-95"
                  >
                    Umów prezentację
                  </Link>
                  <a
                    href="#pakiety"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-8 py-4 rounded-xl font-bold transition-all shadow-sm active:scale-95"
                  >
                    Skontaktuj się z nami
                  </a>
                </div>

                {/* Sub-hero Bullet trust indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
                  {[
                    { icon: ShieldCheck, title: "RODO i bezpieczeństwo", desc: "Twoje dane są u nas bezpieczne" },
                    { icon: UserCheck, title: "Certyfikowani lekarze", desc: "Doświadczeni specjaliści" },
                    { icon: Briefcase, title: "Zaufało nam 1000+ firm", desc: "W całej Polsce" }
                  ].map((bullet, idx) => (
                    <div key={idx} className="flex gap-2 items-start text-left">
                      <div className="w-8 h-8 rounded-lg bg-[#E8F3F1] text-[#147A60] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <bullet.icon size={16} />
                      </div>
                      <div>
                        <div className=" font-black text-slate-800 leading-tight">{bullet.title}</div>
                        <div className=" text-slate-400 font-semibold mt-0.5">{bullet.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero graphic */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                  <img
                    src="/telemedicine_for_companies_hero.png"
                    alt="Man consulting doctor online in office"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section: What do employees receive */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Co otrzymują pracownicy?
              </h2>
              <div className="w-12 h-1 bg-[#147A60] mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {employeeBenefits.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-[24px] p-8 border border-slate-100 hover:border-emerald-300 hover:shadow-md transition-all duration-300 flex items-start gap-5 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#E8F3F1] text-[#147A60] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-400 font-bold leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section: Benefits & How it works */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

              {/* Left Column: Benefits for Company */}
              <div className="lg:col-span-6 bg-white rounded-[32px] p-8 border border-slate-100/80 shadow-sm flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8">
                    Korzyści dla Twojej firmy
                  </h2>
                  <div className="space-y-6">
                    {companyBenefits.map((benefit, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-xl bg-[#E8F3F1] text-[#147A60] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                          <Check size={18} strokeWidth={3} />
                        </div>
                        <div>
                          <h3 className="font-extrabold text-slate-800 text-base mb-1">{benefit.title}</h3>
                          <p className="text-slate-400 text-sm font-bold leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative w-full h-[220px] rounded-2xl overflow-hidden mt-8 shadow-inner bg-slate-50 border border-slate-100">
                  <img
                    src="/for_companies_office.png"
                    alt="Pracownicy w biurze"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Column: How it works */}
              <div className="lg:col-span-6 bg-white rounded-[32px] p-8 border border-slate-100/80 shadow-sm flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8">
                    Jak to działa?
                  </h2>

                  <div className="relative pl-8 space-y-8 before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
                    {steps.map((step, idx) => {
                      const StepIcon = step.icon;
                      return (
                        <div key={idx} className="relative flex gap-4 items-start">
                          {/* Dot step number */}
                          <div className="absolute left-[-29px] top-0 w-8 h-8 rounded-full bg-[#147A60] text-white flex items-center justify-center text-xs font-black border-4 border-white shadow-sm">
                            {idx + 1}
                          </div>

                          <div className="w-10 h-10 rounded-xl bg-[#E8F3F1] text-[#147A60] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <StepIcon size={20} />
                          </div>
                          <div>
                            <h3 className="font-extrabold text-slate-800 text-base mb-1">{step.title}</h3>
                            <p className="text-slate-400 text-sm font-bold leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section: Packages & FAQ */}
        <section id="pakiety" className="py-20 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

              {/* Left column: Packages */}
              <div className="lg:col-span-6 space-y-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8">
                  Pakiety dla firm
                </h2>

                <div className="space-y-4">
                  {packages.map((pkg, idx) => (
                    <div
                      key={idx}
                      className={`rounded-[24px] p-6 border transition-all duration-300 ${pkg.featured
                        ? "bg-[#147A60] text-white border-transparent shadow-lg shadow-emerald-950/10"
                        : "bg-white text-slate-800 border-slate-150 shadow-sm"
                        }`}
                    >
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <div>
                          <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-full ${pkg.featured ? "bg-white/20 text-white" : "bg-[#E8F3F1] text-[#147A60]"
                            }`}>
                            {pkg.badge}
                          </span>
                          <h3 className="text-xl font-black mt-2 leading-none">{pkg.name}</h3>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] uppercase font-bold opacity-60">Oferta</div>
                          <div className="text-lg font-black leading-none mt-1">{pkg.price}</div>
                        </div>
                      </div>

                      <div className={`text-xs uppercase font-extrabold tracking-wide mb-2 ${pkg.featured ? "text-emerald-100" : "text-slate-400"}`}>
                        {pkg.subtitle}
                      </div>

                      <p className={`text-sm font-semibold leading-relaxed mb-4 ${pkg.featured ? "text-emerald-50/80" : "text-slate-400"}`}>
                        {pkg.description}
                      </p>

                      <Link
                        href="/wypelnij-formularz?service=konsultacja"
                        className={`inline-flex items-center justify-center w-full py-3 rounded-xl font-bold text-xs tracking-wider uppercase transition-colors ${pkg.featured
                          ? "bg-white hover:bg-slate-50 text-[#147A60]"
                          : "bg-[#FAFBFB] border border-slate-200 hover:bg-slate-50 text-slate-700"
                          }`}
                      >
                        Zobacz szczegóły
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column: FAQ & CTA */}
              <div className="lg:col-span-6 flex flex-col justify-between gap-8">
                <div className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8">
                    Najczęściej zadawane pytania
                  </h2>

                  <div className="space-y-3">
                    {faqs.map((faq, idx) => {
                      const isOpen = activeFaq === idx;
                      return (
                        <div key={idx} className="bg-[#FAFBFB] rounded-2xl border border-slate-100 overflow-hidden transition-all">
                          <button
                            onClick={() => toggleFaq(idx)}
                            className="w-full flex items-center justify-between gap-4 p-5 text-left font-extrabold text-slate-800 text-sm md:text-base hover:text-[#147A60] transition-colors"
                          >
                            <span>{faq.q}</span>
                            <ChevronDown
                              size={18}
                              className={`text-slate-400 flex-shrink-0 transition-transform ${isOpen ? "rotate-180 text-[#147A60]" : ""}`}
                            />
                          </button>
                          {isOpen && (
                            <div className="px-5 pb-5 pt-1 text-sm font-semibold text-slate-400 leading-relaxed border-t border-slate-100 bg-white">
                              {faq.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Dark Green CTA Card */}
                <div className="bg-[#064743] rounded-[32px] p-8 text-white relative overflow-hidden shadow-lg shadow-emerald-950/20">
                  <div className="absolute bottom-[-20px] right-[-20px] w-48 h-48 bg-white/5 rounded-full select-none pointer-events-none" />

                  <div className="relative z-10 space-y-4">
                    <h3 className="text-2xl font-black leading-tight">
                      Zadbaj o zdrowie <br />
                      swojego zespołu
                    </h3>
                    <p className="text-sm font-semibold text-emerald-100/80 leading-relaxed max-w-sm">
                      Nowoczesna telemedycyna dla firm – szybko, wygodnie i bez kolejek.
                    </p>
                    <Link
                      href="/#kontakt"
                      className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#064743] px-6 py-3 rounded-xl font-extrabold text-xs tracking-wider uppercase transition-colors shadow-sm active:scale-95"
                    >
                      Umów prezentację
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Bottom statistics row */}
        <section className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[28px] border border-slate-100 shadow-[0_15px_45px_rgba(0,0,0,0.01)] p-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Building2, stat: "1000+", label: "firm korzysta z naszych usług" },
                { icon: Users, stat: "250 000+", label: "konsultacji online" },
                { icon: ShieldCheck, stat: "98%", label: "zadowolonych pracowników" },
                { icon: Clock, stat: "24/7", label: "dostęp do lekarzy" }
              ].map((stat, idx) => {
                const StatIcon = stat.icon;
                return (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#E8F3F1] text-[#147A60] flex items-center justify-center flex-shrink-0 shadow-sm">
                      <StatIcon size={22} />
                    </div>
                    <div>
                      <div className="text-xl md:text-2xl font-black text-[#147A60] leading-none mb-1">
                        {stat.stat}
                      </div>
                      <div className="text-xs md:text-sm text-slate-400 font-bold leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
