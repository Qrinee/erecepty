"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  Calendar, Clock, FileText, ShieldCheck, Lock, ChevronDown, ArrowRight, UserCheck, Pill, ClipboardList, FileSearch, Activity, Headphones
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
    <section className="relative bg-[#FAFAFA] pt-6 pb-6 lg:pt-8 lg:pb-6 overflow-hidden flex flex-col">

      {/* Subtle green circle background */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[700px] h-[700px] xl:w-[70vw] xl:h-[900px] bg-[#E8F3F1] rounded-full z-0 hidden lg:block" />

      <div className="w-full max-w-[90vw] mx-auto relative z-10 flex-grow flex flex-col justify-center">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full mb-12">

          {/* Left Content */}
          <div className="hidden lg:col-span-7 lg:flex flex-col items-start text-left relative z-20 pt-4">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[11px] sm:text-xs font-bold mb-6 uppercase tracking-wider">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              KONSULTACJE ONLINE 24/7
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-slate-900 leading-[1.1] mb-2 tracking-tight">
              Konsultacja lekarska <br className="hidden sm:block" />
              <span className="text-emerald-600">online</span> bez wychodzenia z domu
            </h1>


            <p className="text-sm sm:text-lg text-slate-600 mb-8 max-w-lg font-medium leading-relaxed">
              Szybka, bezpieczna i wygodna pomoc medyczna online.<br className="hidden sm:block" />
              Otrzymaj e-receptę, skierowanie, L4 lub konsultację wyników.
            </p>

            {/* 4 Items row */}
            <div className="flex flex-row flex-wrap xl:flex-nowrap gap-x-6 gap-y-4 w-full max-w-full mb-8">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-emerald-600 shrink-0" strokeWidth={1.5} />
                <div className="text-sm font-semibold text-slate-800 leading-tight mt-0.5">Lekarz online<br /><span className="text-slate-500 font-normal">24/7</span></div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="w-6 h-6 text-emerald-600 shrink-0" strokeWidth={1.5} />
                <div className="text-sm font-semibold text-slate-800 leading-tight mt-0.5">E-recepta<br /><span className="text-slate-500 font-normal">w kilka minut</span></div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" strokeWidth={1.5} />
                <div className="text-sm font-semibold text-slate-800 leading-tight mt-0.5">Bezpiecznie<br /><span className="text-slate-500 font-normal">i dyskretnie</span></div>
              </div>
              <div className="flex items-start gap-3">
                <Lock className="w-6 h-6 text-emerald-600 shrink-0" strokeWidth={1.5} />
                <div className="text-sm font-semibold text-slate-800 leading-tight mt-0.5">100% online<br /><span className="text-xs text-slate-500 font-normal">bez wychodzenia z domu</span></div>
              </div>
            </div>
          </div>

          {/* Right Content (Widget & Doctor) */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end mt-12 lg:mt-0 z-10">

            {/* Doctor Image - Positioned behind and to the left of the widget */}
            <div className="absolute  right-[60%] w-[350px] xl:w-[400px] pointer-events-none hidden lg:block" style={{ zIndex: '-2' }}>
              <img src="/gpt.png" alt="Lekarz online" className="w-full h-auto drop-shadow-xl object-bottom" />
            </div>

            {/* Booking Widget */}
            <div id="booking-widget" className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 p-6 sm:p-8 w-full max-w-[400px] relative z-20">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Umów konsultację</h2>

              <div className="space-y-4">
                {/* Step 1 */}
                <div>
                  <label className="block text-[11px] font-medium text-slate-500 mb-1.5">
                    Wybierz usługę
                  </label>
                  <div className="relative">
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full pl-3 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 appearance-none cursor-pointer transition-all"
                    >
                      {servicesList.map((s) => (
                        <option key={s.value} value={s.value}>{s.label}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                {/* Step 2 */}
                <div className="grid grid-cols-2 gap-3">
                  <div className={`col-span-2 ${isNoScheduling ? '' : 'sm:col-span-1'}`}>
                    <label className="block text-[11px] font-medium text-slate-500 mb-1.5">
                      Wybierz termin
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={todayStr}
                        className="w-full pl-3 pr-9 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 cursor-pointer transition-all"
                      />
                      <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  {!isNoScheduling && (
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-[11px] font-medium text-slate-500 mb-1.5">
                        Godzina
                      </label>
                      <div className="relative">
                        <select
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          className="w-full pl-3 pr-9 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 appearance-none cursor-pointer transition-all"
                        >
                          {loadingSlots ? (
                            <option>Szukam...</option>
                          ) : (
                            visibleSlots.map((t: string) => (
                              <option key={t} value={t}>{t}</option>
                            ))
                          )}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Step 3 */}
                <div>
                  <label className="block text-[11px] font-medium text-slate-500 mb-1.5">
                    Wybierz lekarza (opcjonalnie)
                  </label>
                  <div className="relative">
                    <select className="w-full pl-3 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 appearance-none cursor-pointer transition-all">
                      <option>Dowolny lekarz</option>
                      {selectedDoctor && (
                        <option value="assigned">dr {selectedDoctor.firstName} {selectedDoctor.lastName}</option>
                      )}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-3">
                  <button
                    onClick={handleBooking}
                    className="w-full bg-[#0d824b] hover:bg-[#0a663b] text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    Umów wizytę teraz
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <div className="text-center text-[11px] text-slate-500 mt-3 flex items-center justify-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    Zajmie to tylko 2 minuty
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Horizontal Cards Row */}
        <div className="w-full pb-4 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">

            {/* Card 1 */}
            <div
              onClick={() => { setSelectedService("Wizyta lekarska ogólna"); document.getElementById('booking-widget')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="bg-white p-4 md:p-5 rounded-[20px] shadow-[0_4px_20px_rgb(0,0,0,0.04)] border-2 border-[#10B981]/20 flex flex-col h-full group hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)] hover:border-[#10B981]/60 hover:-translate-y-1 transition-all items-center md:items-start text-center md:text-left cursor-pointer active:scale-[0.98]"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 mb-2 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#10B981] flex items-center justify-center text-white shrink-0">
                  <UserCheck className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-[13px] md:text-[18px] leading-tight mt-0 md:mt-1">Konsultacja<br className="hidden md:block" />lekarska</h3>
              </div>
              <p className="text-[11px] md:text-xs text-slate-500 mb-4 md:mb-5 flex-grow leading-relaxed">Porozmawiaj z lekarzem kiedy tylko potrzebujesz.</p>
              <div className="w-full mt-auto">
                <div className="bg-emerald-50 group-hover:bg-[#10B981] text-[#10B981] group-hover:text-white transition-colors text-[11px] md:text-xs font-bold flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl w-full">
                  Umów wizytę <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5" />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              onClick={() => { setSelectedService("Wizyta lekarska ogólna"); document.getElementById('booking-widget')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="bg-white p-4 md:p-5 rounded-[20px] shadow-[0_4px_20px_rgb(0,0,0,0.04)] border-2 border-[#0D9488]/20 flex flex-col h-full group hover:shadow-[0_8px_30px_rgba(13,148,136,0.15)] hover:border-[#0D9488]/60 hover:-translate-y-1 transition-all items-center md:items-start text-center md:text-left cursor-pointer active:scale-[0.98]"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 mb-2 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0D9488] flex items-center justify-center text-white shrink-0">
                  <FileSearch className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-[13px] md:text-[18px] leading-tight mt-0 md:mt-1">Skierowania<br className="hidden md:block" />online</h3>
              </div>
              <p className="text-[11px] md:text-xs text-slate-500 mb-4 md:mb-5 flex-grow leading-relaxed">Skierowania na badania, do specjalisty.</p>
              <div className="w-full mt-auto">
                <div className="bg-teal-50 group-hover:bg-[#0D9488] text-[#0D9488] group-hover:text-white transition-colors text-[11px] md:text-xs font-bold flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl w-full">
                  Umów wizytę <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5" />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              onClick={() => { setSelectedService("e-Recepta online"); document.getElementById('booking-widget')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="bg-white p-4 md:p-5 rounded-[20px] shadow-[0_4px_20px_rgb(0,0,0,0.04)] border-2 border-[#E11D48]/20 flex flex-col h-full group hover:shadow-[0_8px_30px_rgba(225,29,72,0.15)] hover:border-[#E11D48]/60 hover:-translate-y-1 transition-all items-center md:items-start text-center md:text-left cursor-pointer active:scale-[0.98]"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 mb-2 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#E11D48] flex items-center justify-center text-white shrink-0">
                  <Pill className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-[13px] md:text-[18px] leading-tight mt-0 md:mt-1">Recepta<br className="hidden md:block" />online 24h</h3>
              </div>
              <p className="text-[11px] md:text-xs text-slate-500 mb-4 md:mb-5 flex-grow leading-relaxed">E-recepta na leki stałe, doraźne, refundowane i nierefundowane.</p>
              <div className="w-full mt-auto">
                <div className="bg-rose-50 group-hover:bg-[#E11D48] text-[#E11D48] group-hover:text-white transition-colors text-[11px] md:text-xs font-bold flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl w-full">
                  Umów wizytę <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5" />
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div
              onClick={() => { setSelectedService("Kontynuacja leczenia"); document.getElementById('booking-widget')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="bg-white p-4 md:p-5 rounded-[20px] shadow-[0_4px_20px_rgb(0,0,0,0.04)] border-2 border-[#2563EB]/20 flex flex-col h-full group hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)] hover:border-[#2563EB]/60 hover:-translate-y-1 transition-all items-center md:items-start text-center md:text-left cursor-pointer active:scale-[0.98]"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 mb-2 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#2563EB] flex items-center justify-center text-white shrink-0">
                  <Activity className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-[13px] md:text-[18px] leading-tight mt-0 md:mt-1">Konsultacja<br className="hidden md:block" />wyników</h3>
              </div>
              <p className="text-[11px] md:text-xs text-slate-500 mb-4 md:mb-5 flex-grow leading-relaxed">Omów wyniki badań z lekarzem i zaplanuj leczenie.</p>
              <div className="w-full mt-auto">
                <div className="bg-blue-50 group-hover:bg-[#2563EB] text-[#2563EB] group-hover:text-white transition-colors text-[11px] md:text-xs font-bold flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl w-full">
                  Umów wizytę <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5" />
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div
              onClick={() => { setSelectedService("L4 online"); document.getElementById('booking-widget')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="bg-white p-4 md:p-5 rounded-[20px] shadow-[0_4px_20px_rgb(0,0,0,0.04)] border-2 border-[#8B5CF6]/20 flex flex-col h-full group hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)] hover:border-[#8B5CF6]/60 hover:-translate-y-1 transition-all items-center md:items-start text-center md:text-left cursor-pointer active:scale-[0.98]"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 mb-2 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#8B5CF6] flex items-center justify-center text-white shrink-0">
                  <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-[13px] md:text-[18px] leading-tight mt-0 md:mt-1">L4 online<br className="hidden md:block" />zwolnienie</h3>
              </div>
              <p className="text-[11px] md:text-xs text-slate-500 mb-4 md:mb-5 flex-grow leading-relaxed">Zwolnienie lekarskie bez wychodzenia z domu.</p>
              <div className="w-full mt-auto">
                <div className="bg-violet-50 group-hover:bg-[#8B5CF6] text-[#8B5CF6] group-hover:text-white transition-colors text-[11px] md:text-xs font-bold flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl w-full">
                  Umów wizytę <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}