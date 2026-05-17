"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Clock, Lock, FileText, CheckCircle,
  Phone, Calendar, Video, Pill, ClipboardList, RefreshCw,
  FileSearch, CalendarClock, ShieldCheck, ChevronRight, Info, Sparkles, Loader2, UserCheck,
} from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function Hero() {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState("Wizyta lekarska ogólna");
  const [selectedTime, setSelectedTime] = useState("12:00");
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
    "Wizyta lekarska ogólna": "/consultation",
    "e-Recepta online": "/consultation",
    "L4 online": "/medical-leave",
    "Kontynuacja leczenia": "/consultation",
  };

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
    setSelectedDate(todayStr);
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

  const displayedSlots = availableSlotsData?.availableSlots || [];
  const visibleSlots = showAllSlots ? displayedSlots : displayedSlots.slice(0, 5);

  return (
    <section className="relative bg-gradient-to-br from-[#ffffff] via-white to-[#DAE9E6] overflow-hidden min-h-screen">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#DAE9E6]/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#DAE9E6]/15 rounded-full blur-3xl translate-y-1/2 translate-x-1/4" />
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-[100vh] max-h-screen z-0 hidden lg:block">
        <div className="absolute inset-0 bg-cover bg-[right_top]" style={{ backgroundImage: "url('/imga.png')" }} />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-white" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-16 py-8 md:py-12 lg:py-16">
        <div className="max-w-full">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2.5 text-sm font-medium text-slate-700 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full border border-slate-200/80 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span> Dostępne 24/7 • Bez wychodzenia z domu
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900 tracking-tight mb-4">
            Szybka i bezpieczna{" "}
            <span className="bg-gradient-to-r from-[#064743] to-[#064743] bg-clip-text text-transparent">opieka medyczna online</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
            Konsultacje z lekarzami, e-recepty, zwolnienia L4 i kontynuacja leczenia – szybko, bezpiecznie i bez wychodzenia z domu.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 max-w-6xl">
            {[
              { icon: Clock, title: "15 min", desc: "Średni czas" },
              { icon: CheckCircle, title: "PWZ", desc: "Weryfikowani" },
              { icon: Lock, title: "RODO", desc: "Bezpieczne dane" },
              { icon: FileText, title: "e-Recepta", desc: "SMS/e-mail" },
            ].map((feat, i) => (
              <div key={i} className="flex flex-col items-center gap-1 p-3 bg-white rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#DAE9E6] transition-all duration-200 text-center">
                <div className="w-10 h-10 rounded-lg bg-[#DAE9E6] flex items-center justify-center"><feat.icon className="w-5 h-5 text-[#064743]" /></div>
                <div className="font-semibold text-slate-900 text-xs sm:text-sm">{feat.title}</div>
                <div className="text-[10px] sm:text-xs text-slate-500">{feat.desc}</div>
              </div>
            ))}
          </div>

          {/* Booking form + doctors */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Form - 2/3 width */}
            <div className="sm:col-span-2 bg-white rounded-2xl border border-slate-200/80 shadow-xl shadow-slate-200/50 p-5">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-[#064743]" />
                <h2 className="text-lg font-bold text-slate-900">Umów wizytę online</h2>
              </div>
              <p className="text-slate-500 mb-5 text-sm">Wybierz usługę i dogodny termin</p>

              {/* ROW 1: Wybierz usługę (left) + Forma konsultacji (right) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Wybierz usługę</label>
                  <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DAE9E6]/50 bg-white text-slate-900 text-sm">
                    <option>Wizyta lekarska ogólna</option>
                    <option>e-Recepta online</option>
                    <option>L4 online</option>
                    <option>Kontynuacja leczenia</option>
                  </select>
                </div>
                {!isNoScheduling && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Forma konsultacji</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button type="button" onClick={() => setSelectedMethod("audio")} className={`flex items-center justify-center gap-1 px-3 py-2.5 border-2 rounded-xl font-semibold text-xs ${selectedMethod === "audio" ? "border-[#064743] bg-[#DAE9E6]" : "border-slate-200 text-slate-600 hover:border-[#064743]"}`}><Phone className="w-4 h-4" />Telefon</button>
                    <button type="button" onClick={() => setSelectedMethod("video")} className={`flex items-center justify-center gap-1 px-3 py-2.5 border-2 rounded-xl font-semibold text-xs ${selectedMethod === "video" ? "border-[#064743] bg-[#DAE9E6]" : "border-slate-200 text-slate-600 hover:border-[#064743]"}`}><Video className="w-4 h-4" />Wideo</button>
                  </div>
                </div>
                )}
              </div>

              {/* ROW 2: L4 dates */}
              {selectedService === "L4 online" && (
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div><label className="block text-xs font-semibold mb-1">Od dnia</label><input type="date" value={leaveStartDate} onChange={(e) => setLeaveStartDate(e.target.value)} min={todayStr} className="w-full px-3 py-2.5 border rounded-xl text-sm" /></div>
                  <div><label className="block text-xs font-semibold mb-1">Do dnia</label><input type="date" value={leaveEndDate} onChange={(e) => setLeaveEndDate(e.target.value)} min={leaveStartDate || todayStr} className="w-full px-3 py-2.5 border rounded-xl text-sm" /></div>
                </div>
              )}

              {/* ROW 3: Wybierz termin (left) + Godzina (right) */}
              {!isNoScheduling && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Wybierz termin</label>
                  <div className="relative"><Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} min={todayStr} className="w-full pl-9 pr-4 py-2.5 border rounded-xl text-sm" /></div>
                  {selectedDate && availableSlotsData?.doctorName && (<div className="mt-2 p-2 bg-green-50 rounded-lg border border-green-200 flex items-center gap-2 text-xs"><UserCheck className="w-4 h-4 text-green-600" /><span className="font-medium text-green-800">{availableSlotsData.doctorName}</span></div>)}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Godzina</label>
                  {loadingSlots ? (<div className="flex items-center gap-2 text-xs text-gray-400 py-2"><Loader2 className="w-3 h-3 animate-spin" /> Ładowanie...</div>) : displayedSlots.length > 0 ? (
                    <div className="flex gap-1 flex-wrap">{visibleSlots.map((t: string) => (<button key={t} onClick={() => setSelectedTime(t)} className={`px-2.5 py-1.5 rounded-lg font-semibold border-2 text-xs transition-all ${t === selectedTime ? "bg-[#064743] text-white border-[#064743]" : "border-slate-200 text-slate-700 hover:border-[#1A5D54]"}`}>{t}</button>))}{displayedSlots.length > 5 && (<button onClick={() => setShowAllSlots(!showAllSlots)} className="px-2 py-1 text-[#064743] text-xs font-medium hover:underline">{showAllSlots ? "Mniej ↑" : `+${displayedSlots.length - 5} →`}</button>)}</div>
                  ) : selectedDate ? (<p className="text-xs text-gray-400">Brak terminów</p>) : (<p className="text-xs text-gray-400">Wybierz datę</p>)}
                </div>
              </div>
              )}

              {/* Full-width button */}
              <button onClick={handleBooking} className="w-full bg-gradient-to-r from-[#064743] to-[#064743] text-white font-bold py-3 rounded-xl hover:from-[#1A5D54] hover:to-[#1A5D54] transition-all shadow-lg active:scale-[0.98] text-sm">
                {selectedService === "L4 online" ? "Zamów L4 online" : selectedService === "e-Recepta online" ? "Zamów e-Receptę" : "Umów wizytę za 89 zł"}
              </button>
            </div>

            {/* Doctors - 1/3 width */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-lg p-4 overflow-y-auto max-h-[400px]">
              <h3 className="text-sm font-bold text-slate-900 mb-3">Dostępni lekarze</h3>
              <p className="text-xs text-slate-500 mb-3">Dzisiejsze godziny przyjęć</p>
              <div className="space-y-2">
                {loadingDoctors ? (
                  <div className="flex items-center gap-2 text-xs text-gray-400 py-2 justify-center"><Loader2 className="w-3 h-3 animate-spin" /> Ładowanie...</div>
                ) : publicDoctors.length > 0 ? (
                  publicDoctors.map((doc) => (
                    <div key={doc._id || doc.userId} className="flex items-start gap-2 p-2 rounded-xl hover:bg-[#DAE9E6]/30 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1A5D54] to-[#064743] flex items-center justify-center shadow-sm flex-shrink-0"><span className="text-white font-semibold text-xs">{doc.initials || '?'}</span></div>
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold text-slate-900 text-xs truncate">{doc.name}</div>
                        <div className="text-[10px] text-slate-500">{doc.specializations?.join(", ") || ''}</div>
                        {doc.todaySlots?.length > 0 ? (
                          <div className="flex flex-wrap gap-1 mt-1">{doc.todaySlots.map((s: any, i: number) => (<span key={i} className="px-1.5 py-0.5 bg-green-50 text-green-700 rounded text-[10px] font-medium">{s.label || `${s.startTime}-${s.endTime}`}</span>))}</div>
                        ) : (<div className="text-[10px] text-slate-400 mt-1">Dziś niedostępny</div>)}
                      </div>
                    </div>
                  ))
                ) : (<p className="text-xs text-slate-500 text-center py-2">Brak dostępnych lekarzy</p>)}
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="text-center mb-8"><h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Nasze usługi</h2><p className="text-slate-500 mt-2">Wybierz to, czego potrzebujesz</p></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[{ icon: Pill, title: "e-Recepta online", desc: "Otrzymaj e-receptę nawet w 15 minut", href: "/consultation?service=e-Recepta+online" },{ icon: ClipboardList, title: "L4 online", desc: "Zwolnienie lekarskie bez wychodzenia z domu", href: "/medical-leave" },{ icon: RefreshCw, title: "Kontynuacja leczenia", desc: "Przedłuż leczenie bez zbędnej wizyty", href: "/consultation?service=Kontynuacja+leczenia" },{ icon: FileSearch, title: "Skierowanie na badania", desc: "Skierowanie online na badania i zabiegi", href: "/consultation?service=Skierowanie+na+badania" },{ icon: CalendarClock, title: "Tabletka dzień po", desc: "Konsultacja i e-recepta w 15 minut", href: "/consultation?service=Tabletka+dzie%C5%84+po" },{ icon: ShieldCheck, title: "Antykoncepcja online", desc: "Dyskretnie, bezpiecznie i wygodnie", href: "/consultation?service=Antykoncepcja+online" }].map((s,i)=>{const Icon=s.icon; return(<Link key={i} href={s.href} className="group bg-white rounded-xl border border-slate-200/80 p-6 hover:shadow-lg hover:border-[#DAE9E6] transition-all"><div className="w-11 h-11 rounded-lg bg-[#DAE9E6] flex items-center justify-center mb-4"><Icon className="w-5 h-5 text-[#064743]" /></div><h3 className="font-bold text-slate-900 mb-1.5">{s.title}</h3><p className="text-sm text-slate-500 mb-4">{s.desc}</p><span className="inline-flex items-center gap-1 text-[#064743] font-semibold text-sm">Zamów<ChevronRight className="w-4 h-4" /></span></Link>);})}
          </div>
        </div>

        {/* Stats */}
        <div className="relative mt-16 w-full mx-auto bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white py-12 px-6 sm:px-10 rounded-2xl shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#DAE9E6]/10 via-transparent to-transparent" />
          <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {[{ value: "50 000+", label: "konsultacji" },{ value: "98%", label: "zadowolonych" },{ value: "4.9 / 5", label: "średnia ocena" },{ value: "24/7", label: "dostępni" },{ value: "100%", label: "bezpieczne" }].map((stat,i)=>(<div key={i} className="text-center"><div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-1.5">{stat.value}</div><p className="text-xs sm:text-sm text-slate-400">{stat.label}</p></div>))}
          </div>
        </div>
      </div>
    </section>
  );
}