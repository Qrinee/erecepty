"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Clock, Lock, FileText, CheckCircle,
  Calendar, Pill, ClipboardList, Loader2, UserCheck,
  ChevronDown, Users, Star, ArrowRight, ShieldCheck, Headphones, Activity, FileSearch, Shield, Zap, Home, Globe
} from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function Hero() {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState("Wizyta lekarska ogólna");
  const [selectedTime, setSelectedTime] = useState("08:00");
  const [selectedDate, setSelectedDate] = useState("");
  const [availableSlotsData, setAvailableSlotsData] = useState<any>(null);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [showAllSlots, setShowAllSlots] = useState(false);
  const [publicDoctors, setPublicDoctors] = useState<any[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const slotsTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const todayStr = new Date().toISOString().split("T")[0];

  const serviceRoutes: Record<string, string> = {
    "Wizyta lekarska ogólna": "/wypelnij-formularz",
    "e-Recepta online": "/wypelnij-formularz",
    "L4 online": "/wypelnij-formularz",
    "Kontynuacja leczenia": "/wypelnij-formularz",
  };

  const servicesList = [
    { label: "Konsultacja lekarska", value: "Wizyta lekarska ogólna" },
    { label: "e-Recepta online", value: "e-Recepta online" },
    { label: "L4 online", value: "L4 online" },
    { label: "Kontynuacja leczenia", value: "Kontynuacja leczenia" },
  ];

  const isNoScheduling = selectedService === "e-Recepta online" || selectedService === "L4 online";

  const fetchSlots = useCallback(async (date: string) => {
    if (!date) { setAvailableSlotsData(null); return; }
    setLoadingSlots(true);
    try {
      const res = await fetch(`${API_URL}/api/doctor/available-slots?date=${encodeURIComponent(date)}`);
      const data = await res.json();
      if (data.success) {
        setAvailableSlotsData(data.data);
        if (data.data.availableSlots?.length > 0 && !data.data.availableSlots.includes(selectedTime)) {
          setSelectedTime(data.data.availableSlots[0]);
        }
      } else setAvailableSlotsData(null);
    } catch { setAvailableSlotsData(null); }
    finally { setLoadingSlots(false); }
  }, [selectedTime]);

  const fetchPublicDoctors = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/api/doctor/public-list?date=${todayStr}`);
      const data = await res.json();
      if (data.success && Array.isArray(data.data) && data.data.length > 0) {
        setPublicDoctors(data.data);
        setSelectedDoctor(data.data[0]);
      } else {
        setPublicDoctors([]);
        setSelectedDoctor({
          firstName: "Anna",
          lastName: "Nowak",
          specialization: "Lekarz rodzinny",
          avatar: null
        });
      }
    } catch {
      setPublicDoctors([]);
      setSelectedDoctor({
        firstName: "Anna",
        lastName: "Nowak",
        specialization: "Lekarz rodzinny",
        avatar: null
      });
    }
  }, [todayStr]);

  useEffect(() => {
    if (slotsTimerRef.current) clearTimeout(slotsTimerRef.current);
    if (!isNoScheduling) {
      slotsTimerRef.current = setTimeout(() => fetchSlots(selectedDate), 300);
    }
    return () => { if (slotsTimerRef.current) clearTimeout(slotsTimerRef.current); };
  }, [selectedDate, fetchSlots, isNoScheduling]);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setSelectedDate(today);
    fetchPublicDoctors();
  }, []);

  const handleBooking = () => {
    const params = new URLSearchParams();
    params.set("service", selectedService);
    params.set("time", selectedTime);
    params.set("method", "audio");
    if (selectedDate) params.set("date", selectedDate);
    const route = serviceRoutes[selectedService] || "/wypelnij-formularz";
    router.push(`${route}?${params.toString()}`);
  };

  const mockSlots = ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30"];
  const displayedSlots = (availableSlotsData?.availableSlots && availableSlotsData.availableSlots.length > 0)
    ? availableSlotsData.availableSlots
    : mockSlots;
  const visibleSlots = showAllSlots ? displayedSlots : displayedSlots.slice(0, 4);

  return (
    <section className="relative bg-gradient-to-br from-[#FCFDFD] via-white to-[#EFF6F4]  h-auto min-h-screen lg:min-h-[calc(100vh-6rem)] [@media(max-height:800px)]:lg:min-h-[calc(100vh-5rem)]  pb-12 [@media(max-height:800px)]:pb-6">

      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#DAE9E6]/30 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4 pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#DAE9E6]/20 rounded-full blur-3xl translate-y-1/4 translate-x-1/4 pointer-events-none z-0" />

      {/* Background Shapes behind the doctor */}
      <div className="absolute top-[10%] bottom-[10%] left-[45%] -translate-x-1/2 aspect-square rounded-full bg-[#EBF5F2] z-0 pointer-events-none hidden xl:block" />
      <div className="absolute top-[35%] left-[30%] w-64 h-64 bg-[#10B981] rounded-[40px] rotate-12 opacity-10 z-0 pointer-events-none hidden xl:block blur-sm" />
      <div className="absolute top-[38%] left-[27%] z-0 hidden xl:flex pointer-events-none w-[110px] h-[110px] bg-[#10B981] rounded-[24px] items-center justify-center rotate-[-8deg] shadow-2xl shadow-emerald-500/30 overflow-hidden">
        <svg className="w-14 h-14 text-white z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full opacity-20 blur-md"></div>
      </div>

      {/* Doctor Image (Desktop Center) */}
      <div className="absolute  top-auto left-[57%] -translate-x-[50%] h-[82%] [@media(max-height:800px)]:h-[75%] [@media(max-height:700px)]:h-[70%] xl:max-h-[720px] 2xl:max-h-[820px] w-auto z-10 hidden xl:block pointer-events-none select-none">
        <img
          src="/gpt.png"
          alt="Lekarz"
          className="h-full w-auto object-contain object-bottom filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.025)]"
        />

        {/* Floating Trust Badge */}
        <div className=" absolute bottom-[28%] right-[25%] bg-white/95 border border-slate-100/80 rounded-xl p-2.5 shadow-lg z-20 flex flex-col items-center gap-1 backdrop-blur-sm select-none pointer-events-none">
          <div className="flex items-center -space-x-1.5">
            <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=60&h=60&q=80" alt="Avatar" />
            <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=60&h=60&q=80" alt="Avatar" />
            <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&w=60&h=60&q=80" alt="Avatar" />
          </div>
          <div className="flex gap-0.5 mt-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-[20px] text-slate-800 font-extrabold leading-none mt-0.5">4.9/5</span>
          <span className="text-slate-400 whitespace-nowrap">ponad 20 000 zadowolonych pacjentów</span>
        </div>
      </div>

      {/* Main Container */}
      <div className="relative z-20 w-full max-w-full mx-auto px-4 sm:px-8 lg:px-10 h-full flex">
        <div className="w-full flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-3 items-start pt-4 lg:pt-0">

          {/* Top Left Block */}
          <div className="lg:col-span-7 flex flex-col text-left pt-2 order-1 lg:order-1">

            {/* Online Badge */}
            <div className="mb-2 lg:mb-2 xl:mb-2 flex">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 lg:px-3 lg:py-1.5 rounded-full bg-[#EBF5F2] border border-[#D5EAE6]/50 text-xs lg:text-xs xl:text-sm font-extrabold text-[#147A60] tracking-wider uppercase">
                <span className="relative flex h-2 w-2 lg:h-1.5 lg:w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                  <span className="relative inline-flex rounded-full h-full w-full bg-[#10B981]" />
                </span>
                KONSULTACJE ONLINE 24H
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl mt-0 sm:text-4xl lg:text-[2.5rem] xl:text-[3rem] 2xl:text-[3.75rem] [@media(max-height:800px)]:lg:text-[2.2rem] [@media(max-height:800px)]:xl:text-[2.5rem] [@media(max-height:800px)]:2xl:text-[3rem] lg:leading-[1.1] font-extrabold text-slate-900 mb-2 lg:mb-3 [@media(max-height:800px)]:mb-1.5 tracking-tight">
              Porozmawiaj z lekarzem <br />
              <span className="text-2xl sm:text-3xl lg:text-[2rem] xl:text-[2rem] 2xl:text-[3.25rem] [@media(max-height:800px)]:lg:text-[1.8rem] [@media(max-height:800px)]:xl:text-[2.1rem] [@media(max-height:800px)]:2xl:text-[2.5rem] font-bold"><span className="text-[#10B981]">online</span> bez wychodzenia z domu</span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-500 font-semibold text-sm sm:text-base lg:text-lg xl:text-xl [@media(max-height:800px)]:text-sm [@media(max-height:800px)]:lg:text-base mb-4 lg:mb-5 [@media(max-height:800px)]:mb-3 max-w-xl xl:max-w-2xl leading-relaxed">
              Szybka, bezpieczna i wygodna konsultacja z lekarzem <br className="hidden sm:inline" /> kiedy tylko jej potrzebujesz.
            </p>

            {/* 3 Horizontal Tags */}
            <div className="flex flex-wrap gap-2 lg:gap-2.5 mb-5 lg:mb-6 [@media(max-height:800px)]:mb-3 [@media(max-height:800px)]:gap-1.5">
              <div className="flex items-center gap-2 text-xs lg:text-sm xl:text-base text-slate-800 font-extrabold bg-white border border-[#E1EFEB] rounded-full px-4 py-2 lg:px-3 lg:py-1.5 [@media(max-height:800px)]:py-1 [@media(max-height:800px)]:text-xs shadow-sm">
                <div className="w-5 h-5 lg:w-6 lg:h-6 [@media(max-height:800px)]:w-5 [@media(max-height:800px)]:h-5 flex items-center justify-center rounded-full bg-yellow-100">
                  <Zap className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#064743]" />
                </div> Szybko <span className="text-slate-400 font-semibold hidden sm:inline">nawet w 15 min</span>
              </div>
              <div className="flex items-center gap-2 text-xs lg:text-sm xl:text-base text-slate-800 font-extrabold bg-white border border-[#E1EFEB] rounded-full px-4 py-2 lg:px-3 lg:py-1.5 [@media(max-height:800px)]:py-1 [@media(max-height:800px)]:text-xs shadow-sm">
                <div className="w-5 h-5 lg:w-6 lg:h-6 [@media(max-height:800px)]:w-5 [@media(max-height:800px)]:h-5 flex items-center justify-center rounded-full bg-amber-100">
                  <Home className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#064743]" />
                </div> Wygodnie <span className="text-slate-400 font-semibold hidden sm:inline">bez wychodzenia z domu</span>
              </div>
              <div className="flex items-center gap-2 text-xs lg:text-sm xl:text-base text-slate-800 font-extrabold bg-white border border-[#E1EFEB] rounded-full px-4 py-2 lg:px-3 lg:py-1.5 [@media(max-height:800px)]:py-1 [@media(max-height:800px)]:text-xs shadow-sm">
                <div className="w-5 h-5 lg:w-6 lg:h-6 [@media(max-height:800px)]:w-5 [@media(max-height:800px)]:h-5 flex items-center justify-center rounded-full bg-emerald-100">
                  <ShieldCheck className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#064743]" />
                </div> Bezpiecznie <span className="text-slate-400 font-semibold hidden sm:inline">szyfrowane dane</span>
              </div>
            </div>

          </div>

          {/* Bottom Left Block */}
          <div className="lg:col-span-7 flex flex-col text-left order-3 lg:order-3">
            {/* 3x2 Grid of Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 lg:gap-3 xl:gap-4 mb-5 lg:mb-5 w-full lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl [@media(max-height:800px)]:mb-3 [@media(max-height:800px)]:gap-2 [@media(max-height:800px)]:lg:gap-2.5">
              {[
                { icon: UserCheck, title: "Konsultacja 24h", desc: "Porozmawaj z lekarzem kiedy tylko potrzebujesz." },
                { icon: Pill, title: "Recepta online 24h", desc: "Otrzymaj e-receptę SMS-em lub e-mailem." },
                { icon: ClipboardList, title: "L4 online 24h", desc: "Zwolnienie lekarskie bez wychodzenia z domu." },
                { icon: FileSearch, title: "Skierowanie 24h", desc: "Skierowanie na badania lub do specjalisty." },
                { icon: Activity, title: "Konsultacja wyników 24h", desc: "Omów swoje wyniki z lekarzem online." },
                { icon: Headphones, title: "Wsparcie pacjenta 24h", desc: "Jesteśmy dostępni 7 dni w tygodniu." }
              ].map((card, i) => {
                const Icon = card.icon;
                return (
                  <div key={i} className="bg-white rounded-2xl lg:rounded-2xl p-4 lg:p-2.5 xl:p-4 [@media(max-height:800px)]:p-2.5 [@media(max-height:800px)]:lg:p-2 [@media(max-height:800px)]:xl:p-3 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.015)] relative overflow-hidden flex flex-col justify-between group hover:shadow-md transition duration-300">
                    <span className="absolute top-2.5 right-2.5 lg:top-2 lg:right-2 bg-[#E8F3EE] text-[#138A56] text-[10px] lg:text-[9px] xl:text-[10px] 2xl:text-xs font-extrabold px-2 py-0.5 rounded-full border border-green-50/50">
                      24H
                    </span>
                    <div>
                      <div className="w-8 h-8 lg:w-7.5 lg:h-7.5 xl:w-9 xl:h-9 [@media(max-height:800px)]:w-6 [@media(max-height:800px)]:h-6 [@media(max-height:800px)]:lg:w-6 [@media(max-height:800px)]:lg:h-6 [@media(max-height:800px)]:xl:w-7 [@media(max-height:800px)]:xl:h-7 rounded-full bg-[#E8F3EE] text-[#064743] flex items-center justify-center mb-2 lg:mb-2 xl:mb-3 [@media(max-height:800px)]:mb-1.5 flex-shrink-0 group-hover:scale-105 transition duration-300">
                        <Icon className="w-4 h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5 [@media(max-height:800px)]:w-3.5 [@media(max-height:800px)]:h-3.5" />
                      </div>
                      <h4 className="font-extrabold text-slate-800 text-xs sm:text-sm lg:text-sm xl:text-base 2xl:text-lg [@media(max-height:800px)]:text-xs [@media(max-height:800px)]:xl:text-sm tracking-tight mb-1 [@media(max-height:800px)]:mb-0.5">{card.title}</h4>
                      <p className="text-slate-500 text-[10px] sm:text-xs lg:text-xs xl:text-sm 2xl:text-[15px] [@media(max-height:800px)]:text-[10px] [@media(max-height:800px)]:xl:text-xs [@media(max-height:800px)]:leading-tight font-semibold leading-relaxed">{card.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Security Banner */}
            <div className="bg-[#064743] rounded-2xl lg:rounded-2xl p-3 px-5 lg:p-2.5 lg:px-4 xl:p-3 xl:px-5 [@media(max-height:800px)]:p-1.5 [@media(max-height:800px)]:px-3 [@media(max-height:800px)]:lg:p-1.5 [@media(max-height:800px)]:lg:px-3 [@media(max-height:800px)]:xl:p-2 [@media(max-height:800px)]:xl:px-4 flex items-center justify-between gap-4 lg:gap-3 w-full lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl border border-[#125D58] shadow-sm">
              <div className="flex items-center gap-3 lg:gap-3">
                <div className="w-9 h-9 lg:w-7.5 lg:h-7.5 xl:w-9 xl:h-9 [@media(max-height:800px)]:w-6 [@media(max-height:800px)]:h-6 [@media(max-height:800px)]:lg:w-6 [@media(max-height:800px)]:lg:h-6 [@media(max-height:800px)]:xl:w-7 [@media(max-height:800px)]:xl:h-7 rounded-lg lg:rounded-md bg-[#0E5B55] border border-[#126B63] text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 lg:w-4.5 lg:h-4.5 xl:w-5 xl:h-5 [@media(max-height:800px)]:w-3.5 [@media(max-height:800px)]:h-3.5" />
                </div>
                <p className="text-slate-200 font-semibold text-[10px] sm:text-xs lg:text-xs xl:text-sm 2xl:text-base [@media(max-height:800px)]:text-[9px] [@media(max-height:800px)]:xl:text-xs leading-relaxed w-full">
                  Twoje dane są w pełni bezpieczne. Stosujemy szyfrowanie SSL i najwyższe standardy ochrony danych zgodnie z RODO.
                </p>
              </div>
              <div className="bg-[#0E5B55] text-yellow-400 border border-yellow-400/50 px-3 py-1.5 lg:px-2.5 lg:py-1 xl:px-3 xl:py-1.5 [@media(max-height:800px)]:px-2 [@media(max-height:800px)]:py-0.5 [@media(max-height:800px)]:text-[8px] [@media(max-height:800px)]:xl:text-[9px] rounded-md text-[10px] lg:text-[10px] xl:text-xs 2xl:text-sm font-extrabold flex items-center gap-1.5 lg:gap-1 flex-shrink-0 uppercase tracking-wide shadow-sm">
                <Lock className="w-3 h-3 lg:w-2.5 lg:h-2.5 [@media(max-height:800px)]:w-2 [@media(max-height:800px)]:h-2 text-yellow-400" />
                <span>RODO Zgodne</span>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 lg:row-span-2 mt-2 lg:mt-6 [@media(max-height:800px)]:lg:mt-3 flex justify-center lg:justify-end items-start relative z-20 order-2 lg:order-2 w-full">
            <div className="bg-white rounded-[28px] lg:rounded-[24px] shadow-[0_0_50px_rgba(16,185,129,0.3)] border-2 lg:border-[3px] border-[#10B981] w-full max-w-[380px] lg:max-w-[340px] xl:max-w-[380px] 2xl:max-w-[420px] relative flex flex-col h-auto">


              <div className="p-4 sm:p-5 lg:p-4 xl:p-4 2xl:p-5 [@media(max-height:800px)]:p-3 [@media(max-height:800px)]:lg:p-3 [@media(max-height:800px)]:xl:p-3.5">
                <div className="space-y-3 lg:space-y-3 xl:space-y-3 [@media(max-height:800px)]:space-y-2">

                  {/* Step 1: Wybierz usługę */}
                  <div>
                    <label className="block text-[11px] lg:text-[10px] xl:text-[11px] 2xl:text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-1 [@media(max-height:800px)]:text-[9px] [@media(max-height:800px)]:mb-0.5">
                      1. WYBIERZ USŁUGĘ
                    </label>
                    <div className="relative">
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full pl-8 pr-8 py-2.5 lg:py-2 xl:py-2 2xl:py-2.5 border border-slate-200 rounded-lg bg-white text-slate-800 text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-base font-semibold focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] appearance-none cursor-pointer shadow-sm hover:border-slate-300 transition-colors [@media(max-height:800px)]:py-1.5 [@media(max-height:800px)]:lg:py-1.5 [@media(max-height:800px)]:xl:py-1.5 [@media(max-height:800px)]:text-xs [@media(max-height:800px)]:xl:text-xs"
                      >
                        {servicesList.map((s) => (
                          <option key={s.value} value={s.value}>{s.label}</option>
                        ))}
                      </select>
                      <div className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#10B981] pointer-events-none">
                        <UserCheck className="w-4 h-4 lg:w-4 lg:h-4 xl:w-4.5 xl:h-4.5 2xl:w-5 2xl:h-5 text-[#10B981]" />
                      </div>
                      <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <ChevronDown className="w-4 h-4 lg:w-4 lg:h-4 xl:w-4.5 xl:h-4.5 2xl:w-5 2xl:h-5 text-slate-400" />
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Wybierz termin */}
                  <div>
                    <label className="block text-[11px] lg:text-[10px] xl:text-[11px] 2xl:text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-1 [@media(max-height:800px)]:text-[9px] [@media(max-height:800px)]:mb-0.5">
                      2. WYBIERZ TERMIN
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={todayStr}
                        className="w-full pl-3 pr-8 py-2.5 lg:py-2 xl:py-2 2xl:py-2.5 border border-slate-200 rounded-lg bg-white text-slate-800 text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-base font-semibold focus:outline-none focus:border-[#10B981] focus:ring-1 focus:ring-[#10B981] cursor-pointer shadow-sm hover:border-slate-300 transition-colors [@media(max-height:800px)]:py-1.5 [@media(max-height:800px)]:lg:py-1.5 [@media(max-height:800px)]:xl:py-1.5 [@media(max-height:800px)]:text-xs [@media(max-height:800px)]:xl:text-xs"
                      />
                      <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                        <Calendar className="w-4 h-4 lg:w-4 lg:h-4 xl:w-4.5 xl:h-4.5 2xl:w-5 2xl:h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Wybierz lekarza */}
                  <div>
                    <label className="block text-[11px] lg:text-[10px] xl:text-[11px] 2xl:text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-1 [@media(max-height:800px)]:text-[9px] [@media(max-height:800px)]:mb-0.5">
                      3. WYBIERZ LEKARZA
                    </label>
                    <div className="w-full flex items-center justify-between p-2 lg:p-1.5 xl:p-1.5 bg-slate-50 border border-slate-100 rounded-lg relative [@media(max-height:800px)]:p-1 lg:[@media(max-height:800px)]:p-1 xl:[@media(max-height:800px)]:p-1">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 lg:w-7.5 lg:h-7.5 xl:w-8.5 xl:h-8.5 2xl:w-9.5 2xl:h-9.5 rounded-full overflow-hidden bg-slate-200 border border-slate-100 flex-shrink-0 [@media(max-height:800px)]:w-6.5 [@media(max-height:800px)]:h-6.5 lg:[@media(max-height:800px)]:w-6.5 lg:[@media(max-height:800px)]:h-6.5 xl:[@media(max-height:800px)]:w-7 xl:[@media(max-height:800px)]:h-7">
                          {selectedDoctor?.avatar ? (
                            <img src={selectedDoctor.avatar} alt="Lekarz avatar" className="w-full h-full object-cover" />
                          ) : (
                            <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&h=150&q=80" alt="Default avatar" className="w-full h-full object-cover" />
                          )}
                        </div>
                        <div className="text-left leading-tight">
                          <div className="font-extrabold text-[11px] lg:text-xs xl:text-sm 2xl:text-base text-slate-800 [@media(max-height:800px)]:text-[10px] xl:[@media(max-height:800px)]:text-xs">
                            {selectedDoctor ? `dr ${selectedDoctor.firstName} ${selectedDoctor.lastName}` : "dr Anna Nowak"}
                          </div>
                          <div className="text-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-xs text-slate-400 font-semibold mt-0.5 [@media(max-height:800px)]:text-[8px] [@media(max-height:800px)]:mt-0">
                            {selectedDoctor?.specialization || "Lekarz rodzinny"}
                          </div>
                        </div>
                      </div>
                      <div className="w-4 h-4 lg:w-4.5 lg:h-4.5 xl:w-5 xl:h-5 2xl:w-5.5 2xl:h-5.5 rounded-full bg-[#10B981] flex items-center justify-center flex-shrink-0 mr-1 shadow-sm [@media(max-height:800px)]:w-3.5 [@media(max-height:800px)]:h-3.5">
                        <svg className="w-2.5 h-2.5 lg:w-2.5 lg:h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Wybierz godzinę */}
                  {!isNoScheduling && (
                    <div>
                      <label className="block text-[11px] lg:text-[10px] xl:text-[11px] 2xl:text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-1 [@media(max-height:800px)]:text-[9px] [@media(max-height:800px)]:mb-0.5">
                        4. WYBIERZ GODZINĘ
                      </label>
                      {loadingSlots ? (
                        <div className="flex items-center gap-1.5 text-xs lg:text-[10px] text-gray-400 py-1">
                          <Loader2 className="w-3.5 h-3.5 lg:w-3.5 lg:h-3.5 animate-spin text-[#10B981]" />
                          <span>Terminy...</span>
                        </div>
                      ) : (
                        <div className="flex flex-wrap items-center gap-1.5 lg:gap-1.5 xl:gap-2">
                          {visibleSlots.map((t: string) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setSelectedTime(t)}
                              className={`px-3 py-1.5 lg:px-2.5 lg:py-1 xl:px-3 xl:py-1 rounded-md font-bold border text-[11px] lg:text-[10px] xl:text-xs 2xl:text-sm transition-all cursor-pointer [@media(max-height:800px)]:px-2 [@media(max-height:800px)]:py-0.5 [@media(max-height:800px)]:text-[10px] [@media(max-height:800px)]:xl:text-xs ${t === selectedTime
                                ? "bg-[#064743] text-white border-[#064743] shadow-sm"
                                : "border-slate-200 text-slate-700 bg-white hover:border-[#10B981] shadow-sm"
                                }`}
                            >
                              {t}
                            </button>
                          ))}
                          {displayedSlots.length > 4 && (
                            <button
                              type="button"
                              onClick={() => setShowAllSlots(!showAllSlots)}
                              className="flex items-center text-[#10B981] hover:text-[#064743] font-bold text-[10px] lg:text-[10px] xl:text-xs 2xl:text-sm transition-all cursor-pointer px-1 py-1 [@media(max-height:800px)]:text-[9px]"
                            >
                              <span>+ więcej terminów</span>
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="pt-4 lg:pt-3 xl:pt-3 [@media(max-height:800px)]:pt-2">
                  {/* Large yellow CTA action button */}
                  <button
                    onClick={handleBooking}
                    className="w-full bg-[#FFD400] hover:bg-[#F0C700] text-slate-900 font-extrabold py-3 lg:py-2.5 xl:py-3 2xl:py-3.5 rounded-lg shadow-md hover:shadow-lg active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-2 lg:mt-2 cursor-pointer text-sm lg:text-xs xl:text-sm 2xl:text-base uppercase tracking-wide [@media(max-height:800px)]:py-2 [@media(max-height:800px)]:mt-1 [@media(max-height:800px)]:text-xs [@media(max-height:800px)]:xl:text-xs"
                  >
                    <span className="font-extrabold text-slate-900">Umów wizytę teraz</span>
                    <ArrowRight className="w-4 h-4 lg:w-3.5 lg:h-3.5 text-slate-900" />
                  </button>

                  {/* Sub-CTA text */}
                  <div className="text-center text-[10px] lg:text-[10px] xl:text-xs 2xl:text-sm text-slate-400 font-bold mt-1 [@media(max-height:800px)]:mt-0.5 [@media(max-height:800px)]:text-[9px]">
                    Zarezerwuj wizytę w 2 minuty
                  </div>

                  {/* Bottom Badges */}
                  <div className="flex items-center justify-between border-t border-slate-100 pt-2 lg:pt-2 xl:pt-2 mt-2 lg:mt-2 xl:mt-2 text-[9px] lg:text-[10px] xl:text-[11px] 2xl:text-xs text-slate-400 font-bold px-1 select-none [@media(max-height:800px)]:pt-1.5 [@media(max-height:800px)]:mt-1.5 [@media(max-height:800px)]:text-[8px] [@media(max-height:800px)]:xl:text-[9px]">
                    <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 lg:w-2.5 lg:h-2.5 text-slate-300" /> Bez rejestracji</span>
                    <span className="flex items-center gap-1"><Zap className="w-3 h-3 lg:w-2.5 lg:h-2.5 text-slate-300" /> Szybka realizacja</span>
                    <span className="flex items-center gap-1"><Globe className="w-3 h-3 lg:w-2.5 lg:h-2.5 text-slate-300" /> 100% online</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}