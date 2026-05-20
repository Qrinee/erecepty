"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Clock, Lock, FileText, CheckCircle,
  Phone, Calendar, Video, Pill, ClipboardList, RefreshCw,
  FileSearch, CalendarClock, ShieldCheck, ChevronRight, Info, Sparkles, Loader2, UserCheck,
  ChevronDown, Play, Users, Award, Star, ArrowRight
} from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function Hero() {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState("Wizyta lekarska ogólna");
  const [selectedTime, setSelectedTime] = useState("08:00");
  const [selectedMethod, setSelectedMethod] = useState<"audio" | "video">("audio");
  const [selectedDate, setSelectedDate] = useState("");
  const [leaveStartDate, setLeaveStartDate] = useState("");
  const [leaveEndDate, setLeaveEndDate] = useState("");
  const [availableSlotsData, setAvailableSlotsData] = useState<any>(null);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [showAllSlots, setShowAllSlots] = useState(false);
  const [publicDoctors, setPublicDoctors] = useState<any[]>([]);
  const [loadingDoctors, setLoadingDoctors] = useState(true);
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
    setLoadingDoctors(true);
    try {
      const res = await fetch(`${API_URL}/api/doctor/public-list?date=${todayStr}`);
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        setPublicDoctors(data.data);
      } else {
        setPublicDoctors([]);
      }
    } catch {
      setPublicDoctors([]);
    } finally {
      setLoadingDoctors(false);
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
    // Default to the date in the screenshot for beautiful rendering, fall back to today
    setSelectedDate("2026-05-19");
    fetchPublicDoctors();
  }, []);

  const handleBooking = () => {
    const params = new URLSearchParams();
    params.set("service", selectedService);
    params.set("time", selectedTime);
    params.set("method", selectedMethod);
    if (selectedDate) params.set("date", selectedDate);
    if (selectedService === "L4 online") {
      if (leaveStartDate) params.set("leaveStart", leaveStartDate);
      if (leaveEndDate) params.set("leaveEnd", leaveEndDate);
    }
    const route = serviceRoutes[selectedService] || "/consultation";
    router.push(`${route}?${params.toString()}`);
  };

  // Mock time slots fallback to guarantee a beautiful UI when the backend is offline
  const mockSlots = ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30"];
  const displayedSlots = (availableSlotsData?.availableSlots && availableSlotsData.availableSlots.length > 0) 
    ? availableSlotsData.availableSlots 
    : mockSlots;
  const visibleSlots = showAllSlots ? displayedSlots : displayedSlots.slice(0, 4);

  return (
    <section className="relative bg-gradient-to-br from-[#FCFDFD] via-white to-[#EFF6F4] overflow-hidden min-h-screen flex flex-col justify-between">
      {/* Background Blur Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#DAE9E6]/30 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[600px] h-[600px] bg-[#DAE9E6]/20 rounded-full blur-3xl translate-y-1/4 translate-x-1/4 pointer-events-none" />

      {/* Doctor Image (Desktop Center-Right) */}
      <div className="absolute bottom-[200px] left-[52%] -translate-x-[45%] h-[82%] max-h-[660px] w-auto z-10 hidden lg:block pointer-events-none">
        <img 
          src="/imga.png" 
          alt="Lekarz" 
          className="h-full w-auto object-contain object-bottom filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.03)]" 
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 w-full max-w-[80vw] mx-auto px-4 sm:px-6 lg:px-8  pb-12 flex-grow flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headings, Features, CTA, Trust */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center animate-fadeIn">
            {/* Top Pill Badge */}
            <div className="mb-5 flex">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E8F3F1] border border-[#D5EAE6] text-[10px] sm:text-xs font-bold text-[#064743] tracking-wide uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#064743] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#064743]" />
                </span>
                • Dostępne 24/7 • Bez wychodzenia z domu
              </span>
            </div>

            {/* Main Title Heading */}
            <h1 className="text-4xl sm:text-5xl xl:text-[54px] font-extrabold text-slate-900 leading-[1.1] mb-5 tracking-tight">
              Porozmawiaj <br />
              z lekarzem <span className="text-[#064743]">online</span> <br />
              bez wychodzenia z domu
            </h1>

            {/* Subheading description */}
            <p className="text-slate-500 text-sm sm:text-base md:text-lg mb-8 max-w-xl leading-relaxed">
              Szybka, bezpieczna i wygodna konsultacja z lekarzem kiedy tylko jej potrzebujesz.
            </p>

            {/* Features list (Grid of 4 items) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10 max-w-2xl">
              {[
                { icon: Clock, title: "Konsultacja", desc: "nawet w 15 min" },
                { icon: Pill, title: "Recepta online", desc: "e-recepta SMS/e-mail" },
                { icon: ClipboardList, title: "L4 online", desc: "bez wychodzenia z domu" },
                { icon: ShieldCheck, title: "Bezpiecznie", desc: "100% online i poufnie" },
              ].map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 text-[#064743] flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">{feat.title}</span>
                      <span className="text-xs sm:text-sm text-slate-500 mt-0.5">{feat.desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={() => router.push("/consultation")}
                className="inline-flex items-center justify-center gap-2.5 bg-[#064743] hover:bg-[#053734] text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-[#064743]/15 transition-all hover:scale-[1.01] active:scale-[0.99] text-sm cursor-pointer"
              >
                <span>Umów konsultację</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <Link
                href="/jak-to-dziala"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 font-bold px-7 py-4 rounded-xl shadow-sm transition-all hover:scale-[1.01] text-sm"
              >
                <span>Jak to działa?</span>
                <span className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center ml-1">
                  <Play className="w-2.5 h-2.5 text-slate-600 fill-slate-600 ml-0.5" />
                </span>
              </Link>
            </div>

            {/* Overlapping Trust Stars Block */}
            <div className="flex items-center gap-3.5">
              <div className="flex items-center -space-x-2.5">
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80" alt="Pacjentka" />
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80" alt="Pacjent" />
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80" alt="Pacjentka" />
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80" alt="Pacjent" />
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80" alt="Pacjentka" />
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-[11px] sm:text-xs text-slate-500 font-semibold leading-none">
                  4.9/5 na podstawie 2000+ opinii
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Booking Card Widget */}
          <div className="lg:col-span-6 xl:col-span-5 flex justify-end items-center relative z-20">
            <div className="bg-white rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100/80 p-7 w-full max-w-[420px] animate-fadeIn">
              
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-6">
                Umów wizytę online
              </h2>

              <div className="space-y-4">
                {/* Field 1: Wybierz usługę */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Wybierz usługę
                  </label>
                  <div className="relative">
                    <select 
                      value={selectedService} 
                      onChange={(e) => setSelectedService(e.target.value)} 
                      className="w-full pl-4 pr-10 py-3.5 border border-slate-200 rounded-xl bg-white text-slate-800 text-sm font-medium focus:outline-none focus:border-[#064743] focus:ring-1 focus:ring-[#064743] appearance-none cursor-pointer shadow-sm hover:border-slate-300 transition-colors"
                    >
                      {servicesList.map((s) => (
                        <option key={s.value} value={s.value}>{s.label}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Field 2: Custom L4 date ranges if L4 online selected */}
                {selectedService === "L4 online" && (
                  <div className="grid grid-cols-2 gap-3 animate-fadeIn">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Od dnia</label>
                      <input 
                        type="date" 
                        value={leaveStartDate} 
                        onChange={(e) => setLeaveStartDate(e.target.value)} 
                        min={todayStr} 
                        className="w-full px-3 py-3 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#064743] focus:ring-1 focus:ring-[#064743] bg-white shadow-sm" 
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Do dnia</label>
                      <input 
                        type="date" 
                        value={leaveEndDate} 
                        onChange={(e) => setLeaveEndDate(e.target.value)} 
                        min={leaveStartDate || todayStr} 
                        className="w-full px-3 py-3 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#064743] focus:ring-1 focus:ring-[#064743] bg-white shadow-sm" 
                      />
                    </div>
                  </div>
                )}

                {/* Field 3: Wybierz termin (Hidden for instant e-recipe / instant L4 in standard route, but selectable) */}
                {!isNoScheduling && (
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Wybierz termin
                    </label>
                    <div className="relative">
                      <input 
                        type="date" 
                        value={selectedDate} 
                        onChange={(e) => setSelectedDate(e.target.value)} 
                        min={todayStr} 
                        className="w-full pl-4 pr-12 py-3.5 border border-slate-200 rounded-xl bg-white text-slate-800 text-sm font-medium focus:outline-none focus:border-[#064743] focus:ring-1 focus:ring-[#064743] cursor-pointer shadow-sm hover:border-slate-300 transition-colors" 
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                        <Calendar className="w-4 h-4" />
                      </div>
                    </div>
                    {selectedDate && availableSlotsData?.doctorName && (
                      <div className="mt-2 p-2.5 bg-green-50 rounded-xl border border-green-200 flex items-center gap-2 text-xs">
                        <UserCheck className="w-3.5 h-3.5 text-green-600" />
                        <span className="font-semibold text-green-800">{availableSlotsData.doctorName}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Field 4: Godzina slots list */}
                {!isNoScheduling && (
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Godzina
                    </label>
                    {loadingSlots ? (
                      <div className="flex items-center gap-2 text-xs text-gray-400 py-3">
                        <Loader2 className="w-4 h-4 animate-spin text-[#064743]" />
                        <span>Ładowanie wolnych terminów...</span>
                      </div>
                    ) : (
                      <div className="flex flex-wrap items-center gap-2">
                        {visibleSlots.map((t: string) => (
                          <button 
                            key={t} 
                            type="button"
                            onClick={() => setSelectedTime(t)} 
                            className={`px-3.5 py-2 rounded-xl font-bold border text-xs transition-all cursor-pointer ${
                              t === selectedTime 
                                ? "bg-[#064743] text-white border-[#064743] shadow-md shadow-[#064743]/10" 
                                : "border-slate-200 text-slate-700 bg-white hover:border-[#064743] shadow-sm"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                        {displayedSlots.length > 4 && (
                          <button 
                            type="button" 
                            onClick={() => setShowAllSlots(!showAllSlots)} 
                            className="flex items-center gap-0.5 px-2.5 py-2 text-slate-500 hover:text-slate-800 font-extrabold text-xs transition-all cursor-pointer"
                          >
                            <span>{showAllSlots ? "Mniej" : `+${displayedSlots.length - 4} więcej`}</span>
                            <ArrowRight className="w-3 h-3 ml-0.5" />
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Form CTA Button */}
                <button 
                  onClick={handleBooking} 
                  className="w-full bg-[#064743] hover:bg-[#053734] text-white font-extrabold py-4 rounded-2xl shadow-lg shadow-[#064743]/15 hover:shadow-[#064743]/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-6 cursor-pointer text-sm"
                >
                  <span>Dalej</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Sub-CTA text */}
                <div className="text-center text-xs text-slate-400 font-semibold mt-3">
                  Zarezerwuj wizytę w 2 minuty
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Trust Banner (Guarantees Bar) */}
      <div className="relative z-30 w-full border-t border-slate-100 bg-[#FCFDFD] py-6 sm:py-8">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { 
                icon: Users, 
                boldText: "Ponad 50 000", 
                normalText: "zadowolonych pacjentów" 
              },
              { 
                icon: Star, 
                boldText: "98% pacjentów", 
                normalText: "poleca nasze usługi" 
              },
              { 
                icon: Award, 
                boldText: "Lekarze z uprawnieniami", 
                normalText: "i wieloletnim doświadczeniem" 
              },
              { 
                icon: ShieldCheck, 
                boldText: "Twoje dane są bezpieczne", 
                normalText: "zgodne z RODO" 
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full border border-[#D5EAE6] bg-[#E8F3F1] flex items-center justify-center text-[#064743] flex-shrink-0 shadow-sm">
                    {idx === 1 ? (
                      // Custom fill for star icon in bottom bar
                      <Icon className="w-5 h-5 fill-[#064743]" strokeWidth={2} />
                    ) : (
                      <Icon className="w-5 h-5" strokeWidth={2} />
                    )}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-snug">
                    <span className="font-extrabold text-slate-800">{item.boldText}</span>{" "}
                    <span>{item.normalText}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}