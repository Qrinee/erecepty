"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ForWomanAndMen from "@/components/ForWomanAndMen";
import {
  Clock,
  ShieldCheck,
  FileText,
  Lock,
  Check,
  ArrowRight,
  ChevronRight,
  Home,
  MessageSquare,
  MessageSquarePlus,
  UserCheck,
  FlaskConical,
  TrendingUp,
  HeartPulse,
  Award
} from "lucide-react";

export default function DlaKobietIMezczyznPage() {
  const topTrustItems = [
    {
      icon: Clock,
      title: "Konsultacje",
      desc: "24/7",
    },
    {
      icon: ShieldCheck,
      title: "Dyskrecja",
      desc: "i bezpieczeństwo",
    },
    {
      icon: FileText,
      title: "E-recepta",
      desc: "w kilka minut",
    },
    {
      icon: Lock,
      title: "100% online",
      desc: "bez wychodzenia z domu",
    },
  ];

  const bottomTrustItems = [
    {
      icon: UserCheck,
      title: "Certyfikowani lekarze",
      desc: "Doświadczeni specjaliści z empatią i zaangażowaniem",
    },
    {
      icon: ShieldCheck,
      title: "Twoje dane są bezpieczne",
      desc: "Stosujemy szyfrowanie i najwyższe standardy ochrony danych",
    },
    {
      icon: Award,
      title: "Tysiące zadowolonych pacjentów",
      desc: "Zaufały nam osoby w całej Polsce",
    },
    {
      icon: HeartPulse,
      title: "Pomoc wtedy, gdy jej potrzebujesz",
      desc: "Jesteśmy dostępni 24/7 – również w nocy, weekendy i święta",
    },
  ];

  return (
    <>
      <Header transparent={false} />
      <main id="main-content" className="bg-[#FAFBFB] min-h-screen pt-5 pb-20" tabIndex={-1}>

        {/* Breadcrumbs */}
        <nav className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-4 text-sm text-slate-500 flex items-center gap-2">
          <Link href="/" className="hover:text-slate-800 flex items-center gap-1 transition-colors">
            <Home size={14} className="mt-[-2px]" />
            Strona główna
          </Link>
          <ChevronRight size={12} className="text-slate-400" />
          <span className="text-slate-700 font-medium">Dla kobiet i mężczyzn</span>
        </nav>

        {/* Top Header section */}
        <section className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 border-b border-slate-200/60 pb-10">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Dla <span className="text-rose-500">kobiet</span> i <span className="text-blue-500">mężczyzn</span>
              </h1>
              <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed">
                Dyskretna pomoc medyczna online – szybko, bezpiecznie i bez wychodzenia z domu.
              </p>
            </div>

            {/* Top mini trust items bar */}
            <div className="grid grid-cols-2 gap-4 w-full lg:w-auto lg:max-w-md">
              {topTrustItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white border border-slate-100/85 rounded-2xl p-4 flex items-center gap-3 shadow-sm min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#DAE9E6]/30 text-[#064743] flex items-center justify-center flex-shrink-0">
                      <Icon size={20} />
                    </div>
                    <div className="leading-tight flex flex-col min-w-0">
                      <span className="text-sm font-extrabold text-slate-900 leading-snug">{item.title}</span>
                      <span className="text-xs text-slate-500 font-medium leading-normal mt-0.5">{item.desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Three Columns Grid of Services */}
        <ForWomanAndMen />

        {/* Contact Banner Bar */}
        <section className=" mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-white border border-slate-100 rounded-[32px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-start gap-4 max-w-2xl">
              <div className="w-12 h-12 rounded-2xl bg-[#DAE9E6]/40 text-[#064743] flex items-center justify-center flex-shrink-0">
                <MessageSquare size={24} />
              </div>
              <div className="space-y-1">
                <h3 className="text-base md:text-lg font-bold text-slate-800">
                  Masz pytania lub nie wiesz, która usługa jest dla Ciebie?
                </h3>
                <p className="text-sm text-slate-500 font-medium">
                  Skontaktuj się z nami – doradzimy i pomożemy dobrać najlepsze rozwiązanie.
                </p>
              </div>
            </div>

            <Link
              href="/#kontakt"
              className="inline-flex items-center gap-2 bg-[#FAFBFB] hover:bg-slate-100 text-slate-700 border border-slate-200 px-6 py-3.5 rounded-xl font-bold transition-all shadow-sm flex-shrink-0 group/contactBtn"
            >
              <span>Skontaktuj się z nami</span>
              <ArrowRight size={16} className="text-[#064743] group-hover/contactBtn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Bottom Trust Items Bar */}
        <section className="border-t border-slate-200/60 pt-16  mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {bottomTrustItems.map((item, idx) => {
              const TrustIcon = item.icon;
              return (
                <div key={idx} className="flex gap-4 items-start p-2">
                  <div className="w-12 h-12 rounded-2xl bg-[#DAE9E6]/30 text-[#064743] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <TrustIcon size={22} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-slate-800 text-sm md:text-base leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
