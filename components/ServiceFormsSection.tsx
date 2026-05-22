"use client";

import React, { useState } from "react";
import {
  Stethoscope, Pill, FileText, RefreshCw, User, ClipboardList,
  ShieldCheck, Lock, ArrowRight, Building2, Heart, Info, Calendar, Phone, Video, Loader2, UserCheck, Search, Trash2
} from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { validatePESEL } from "@/app/utils/pesel-validator";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export const getServicePriceAndType = (serviceParam: string | null, fallbackType: string) => {
  if (!serviceParam) return { amount: 7900, type: fallbackType };
  const lower = serviceParam.toLowerCase();
  
  if (lower.includes("e-recepta")) return { amount: 5900, type: serviceParam };
  if (lower.includes("l4") || lower.includes("zwolnienie")) return { amount: 7900, type: serviceParam };
  if (lower.includes("kontynuacja")) return { amount: 5900, type: serviceParam };
  if (lower.includes("psychiatr")) return { amount: 24900, type: serviceParam };
  if (lower.includes("otyłoś")) return { amount: 9900, type: serviceParam };
  if (lower.includes("dzień po") || lower.includes("antykoncepcja")) return { amount: 4500, type: serviceParam };
  if (lower.includes("konsultacja")) return { amount: 7900, type: serviceParam };
  
  return { amount: 7900, type: serviceParam }; 
}

/* ─── Shared helpers ──────────────────────────────────────────── */
const inputCls =
  "w-full bg-[#F5F7FA] border border-transparent hover:border-slate-200 focus:border-slate-300 focus:bg-white rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none transition-all";
const textareaCls =
  "w-full bg-[#F5F7FA] border border-transparent hover:border-slate-200 focus:border-slate-300 focus:bg-white rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none transition-all resize-none";
const inputErrorCls =
  "w-full bg-red-50/50 border border-red-300 focus:border-red-500 focus:bg-white rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none transition-all";
const textareaErrorCls =
  "w-full bg-red-50/50 border border-red-300 focus:border-red-500 focus:bg-white rounded-lg px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none transition-all resize-none";
const labelCls = "block text-[11px] font-bold text-slate-500 mb-1";

function FormErrorAlert({ errors }: { errors: Record<string, string> }) {
  const errorList = Object.entries(errors).filter(([key]) => key !== "submit");
  const submitError = errors.submit;
  
  if (errorList.length === 0 && !submitError) return null;
  
  return (
    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex gap-3 text-red-800">
      <Info className="w-5.5 h-5.5 text-red-500 flex-shrink-0 mt-0.5" />
      <div>
        <h4 className="text-sm font-extrabold text-red-900">
          Formularz zawiera błędy walidacji:
        </h4>
        <ul className="list-disc list-inside text-xs mt-1.5 space-y-1 font-medium">
          {submitError && <li className="text-red-700 font-bold">{submitError}</li>}
          {errorList.map(([key, value]) => (
            <li key={key}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SectionHeader({ icon: Icon, title, color }: { icon: any; title: string; color: string }) {
  return (
    <div className={`flex items-center gap-2 mb-3 pb-2 border-b border-slate-100`}>
      <div className={`w-6 h-6 rounded-full ${color} flex items-center justify-center flex-shrink-0`}>
        <Icon className="w-3 h-3 text-white" />
      </div>
      <span className="text-[11px] font-extrabold text-slate-600 uppercase tracking-wider">{title}</span>
    </div>
  );
}

function RadioGroup({ name, options, value, onChange }: { name: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex gap-4 mt-1">
      {options.map((opt) => (
        <label key={opt} className="flex items-center gap-1.5 cursor-pointer text-sm text-slate-700">
          <input
            type="radio"
            name={name}
            value={opt}
            checked={value === opt}
            onChange={() => onChange(opt)}
            className="accent-current"
          />
          {opt}
        </label>
      ))}
    </div>
  );
}

function ConsentCheckbox({ id, children, checked, onChange }: { id: string; children: React.ReactNode; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label htmlFor={id} className="flex items-start gap-2 cursor-pointer group">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 w-3.5 h-3.5 flex-shrink-0 accent-current cursor-pointer"
      />
      <span className="text-xs text-slate-600 leading-snug group-hover:text-slate-800 transition-colors">{children}</span>
    </label>
  );
}

function SubmitBtn({ label, color, loading }: { label: string; color: string; loading: boolean }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className={`w-full ${color} text-white font-extrabold py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm tracking-wide transition-all hover:opacity-90 active:scale-[0.99] disabled:opacity-60 cursor-pointer mt-6 shadow-lg`}
    >
      <Lock className="w-4 h-4" />
      <span>{loading ? "Przetwarzanie..." : label}</span>
      {!loading && <ArrowRight className="w-4 h-4" />}
    </button>
  );
}

function FormNote() {
  return (
    <p className="text-center text-[11px] text-slate-400 mt-3 leading-snug">
      Po dokonaniu płatności formularz zostanie przekazany do lekarza.<br />
      W razie potrzeby lekarz skontaktuje się z Tobą telefonicznie lub online.
    </p>
  );
}

function useAuthPrefill(setters: {
  setFullName?: (v: string) => void;
  setEmail?: (v: string) => void;
  setPhone?: (v: string) => void;
  setPesel?: (v: string) => void;
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  React.useEffect(() => {
    fetch(`${API_URL}/api/auth/me`, { credentials: "include" })
      .then(res => res.json())
      .then(data => {
        if (data?.success && data?.data?.user) {
          setIsLoggedIn(true);
          const u = data.data.user;
          if (u.firstName && u.lastName && setters.setFullName) setters.setFullName(`${u.firstName} ${u.lastName}`);
          if (u.email && setters.setEmail) setters.setEmail(u.email);
          if (u.phone && setters.setPhone) setters.setPhone(u.phone);
          if (u.pesel && setters.setPesel) setters.setPesel(u.pesel);
        }
      })
      .catch(() => {});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return isLoggedIn;
}

/* ─── Form 1: Konsultacja lekarska ──────────────────────────── */
export function KonsultacjaForm() {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [pesel, setPesel] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [symptomsFrom, setSymptomsFrom] = useState("");
  const [takingMeds, setTakingMeds] = useState("Nie");
  const [medsName, setMedsName] = useState("");
  const [hasChronicDisease, setHasChronicDisease] = useState("Nie");
  const [chronicDisease, setChronicDisease] = useState("");
  const [consentTruth, setConsentTruth] = useState(false);
  const [consentTerms, setConsentTerms] = useState(false);
  const [consentContact, setConsentContact] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  const [accountPassword, setAccountPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Scheduling & Specialization
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [consultationMethod, setConsultationMethod] = useState("video");
  const [specialization, setSpecialization] = useState("");
  const [slotsData, setSlotsData] = useState<any>(null);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const slotsTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const isLoggedIn = useAuthPrefill({ setFullName, setEmail, setPhone });
  const searchParams = useSearchParams();
  const serviceParam = searchParams?.get("service");
  const { amount, type } = getServicePriceAndType(serviceParam, "Konsultacja lekarska");

  const fetchSlots = React.useCallback(async (date: string) => {
    if (!date) { setSlotsData(null); return; }
    setLoadingSlots(true);
    try {
      const res = await fetch(`${API_URL}/api/doctor/available-slots?date=${date}`);
      const data = await res.json();
      if (data.success) {
        setSlotsData(data.data);
        if (appointmentTime && !data.data.availableSlots.includes(appointmentTime)) setAppointmentTime("");
      } else setSlotsData(null);
    } catch { setSlotsData(null); } finally { setLoadingSlots(false); }
  }, [appointmentTime]);

  React.useEffect(() => {
    if (slotsTimer.current) clearTimeout(slotsTimer.current);
    slotsTimer.current = setTimeout(() => fetchSlots(appointmentDate), 300);
    return () => { if (slotsTimer.current) clearTimeout(slotsTimer.current); };
  }, [appointmentDate, fetchSlots]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    const newErrors: Record<string, string> = {};
    
    // Validate fullName (first and last name)
    const nameParts = fullName.trim().split(/\s+/);
    if (!fullName.trim()) {
      newErrors.fullName = "Imię i nazwisko są wymagane.";
    } else if (nameParts.length < 2) {
      newErrors.fullName = "Imię i nazwisko musi zawierać co najmniej dwa wyrazy.";
    }
    
    // Validate PESEL
    if (!pesel) {
      newErrors.pesel = "PESEL jest wymagany.";
    } else {
      const peselVal = validatePESEL(pesel);
      if (!peselVal.valid) {
        newErrors.pesel = peselVal.errors[0] || "Nieprawidłowy numer PESEL.";
      }
    }
    
    // Validate Phone (at least 9 digits)
    const cleanPhone = phone.replace(/\s+/g, "");
    if (!cleanPhone) {
      newErrors.phone = "Numer telefonu jest wymagany.";
    } else if (!/^\+?[0-9]{9,15}$/.test(cleanPhone)) {
      newErrors.phone = "Numer telefonu musi zawierać od 9 do 15 cyfr.";
    }
    
    // Validate Email
    if (!email) {
      newErrors.email = "Adres e-mail jest wymagany.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Adres e-mail jest nieprawidłowy.";
    }
    
    // Validate appointment date/time
    if (!appointmentDate) {
      newErrors.appointmentDate = "Data wizyty jest wymagana.";
    }
    if (slotsData?.availableSlots?.length > 0 && !appointmentTime) {
      newErrors.appointmentTime = "Godzina wizyty jest wymagana.";
    }
    
    // Validate consents
    if (!consentTruth) {
      newErrors.consentTruth = "Musisz oświadczyć zgodność danych z prawdą.";
    }
    if (!consentTerms) {
      newErrors.consentTerms = "Musisz zaakceptować regulamin i politykę prywatności.";
    }
    
    // Validate password if creating account
    if (createAccount && (!accountPassword || accountPassword.length < 6)) {
      newErrors.accountPassword = "Hasło musi mieć co najmniej 6 znaków.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Scroll to the top of the form
      const formEl = e.currentTarget as HTMLFormElement;
      formEl.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    setLoading(true);
    setErrors({});
    try {
      const [firstName, ...lastParts] = fullName.trim().split(/\s+/);
      const lastName = lastParts.join(" ");
      const res = await fetch(`${API_URL}/api/patient/submissions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          serviceType: type,
          patient: {
            firstName, lastName, pesel, phone, email, birthDate,
            contact: { firstName, lastName, pesel, phone, email, birthDate }
          },
          medicalInfo: {
            symptoms, symptomsFrom,
            takingMedications: takingMeds === "Tak – jakie?", medicationsName: medsName,
            hasChronicDisease: hasChronicDisease === "Tak – na co?", chronicDiseaseDetails: chronicDisease,
          },
          appointmentDate,
          appointmentTime,
          consultationMethod,
          specialization: specialization || null,
          accountPassword: createAccount ? accountPassword : null,
          consent: { rodoConsent: consentTruth, medicalConsent: consentTerms, contactConsent: consentContact, createAccount },
          amount: amount,
        }),
      });
      const data = await res.json();
      if (!res.ok || data.success === false) {
        setErrors({ submit: data.message || "Wystąpił błąd podczas wysyłania zgłoszenia." });
        const formEl = e.currentTarget as HTMLFormElement;
        formEl.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (data?.data?.payment?.paymentUrl) {
        window.location.href = data.data.payment.paymentUrl;
      } else if (data?.data?.submissionId) {
        window.location.href = `/payment/success?submissionId=${data.data.submissionId}`;
      }
    } catch (err) {
      console.error(err);
      setErrors({ submit: "Błąd połączenia z serwerem. Spróbuj ponownie później." });
      const formEl = e.currentTarget as HTMLFormElement;
      formEl.scrollIntoView({ behavior: "smooth", block: "start" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormErrorAlert errors={errors} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Col 1: Dane pacjenta */}
        <div>
          <SectionHeader icon={User} title="Dane pacjenta" color="bg-blue-500" />
          <div className="space-y-3">
            <div>
              <label className={labelCls}>Imię i nazwisko <span className="text-red-500">*</span></label>
              <input 
                className={errors.fullName ? inputErrorCls : inputCls} 
                placeholder="Wpisz imię i nazwisko" 
                value={fullName} 
                onChange={e => {
                  setFullName(e.target.value);
                  if (errors.fullName) setErrors(prev => { const n = {...prev}; delete n.fullName; return n; });
                }} 
              />
              {errors.fullName && <p className="text-xs text-red-500 font-medium mt-1">{errors.fullName}</p>}
            </div>
            
            <div>
              <label className={labelCls}>PESEL <span className="text-red-500">*</span></label>
              <input 
                className={errors.pesel ? inputErrorCls : inputCls} 
                placeholder="Wpisz PESEL" 
                value={pesel} 
                onChange={e => {
                  setPesel(e.target.value);
                  if (errors.pesel) setErrors(prev => { const n = {...prev}; delete n.pesel; return n; });
                }} 
              />
              {errors.pesel && <p className="text-xs text-red-500 font-medium mt-1">{errors.pesel}</p>}
            </div>
            
            <div>
              <label className={labelCls}>Data urodzenia</label>
              <input 
                type="date" 
                className={errors.birthDate ? inputErrorCls : inputCls} 
                value={birthDate} 
                onChange={e => {
                  setBirthDate(e.target.value);
                  if (errors.birthDate) setErrors(prev => { const n = {...prev}; delete n.birthDate; return n; });
                }} 
              />
              {errors.birthDate && <p className="text-xs text-red-500 font-medium mt-1">{errors.birthDate}</p>}
            </div>
            
            <div>
              <label className={labelCls}>Telefon kontaktowy <span className="text-red-500">*</span></label>
              <input 
                className={errors.phone ? inputErrorCls : inputCls} 
                placeholder="Wpisz numer telefonu" 
                value={phone} 
                onChange={e => {
                  setPhone(e.target.value);
                  if (errors.phone) setErrors(prev => { const n = {...prev}; delete n.phone; return n; });
                }} 
              />
              {errors.phone && <p className="text-xs text-red-500 font-medium mt-1">{errors.phone}</p>}
            </div>
            
            <div>
              <label className={labelCls}>Adres e-mail <span className="text-red-500">*</span></label>
              <input 
                type="email" 
                className={errors.email ? inputErrorCls : inputCls} 
                placeholder="Wpisz adres e-mail" 
                value={email} 
                onChange={e => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors(prev => { const n = {...prev}; delete n.email; return n; });
                }} 
              />
              {errors.email && <p className="text-xs text-red-500 font-medium mt-1">{errors.email}</p>}
            </div>
          </div>
        </div>

        {/* Col 2: Opis problemu */}
        <div>
          <SectionHeader icon={ClipboardList} title="Opis problemu" color="bg-blue-500" />
          <div className="space-y-3">
            <div><label className={labelCls}>Jakie są objawy?</label><textarea className={textareaCls} rows={3} placeholder="Opisz swoje objawy" value={symptoms} onChange={e => setSymptoms(e.target.value)} /></div>
            <div><label className={labelCls}>Od kiedy występują objawy?</label><input type="date" className={inputCls} value={symptomsFrom} onChange={e => setSymptomsFrom(e.target.value)} /></div>
            <div>
              <label className={labelCls}>Czy przyjmujesz obecnie leki?</label>
              <RadioGroup name="k_meds" options={["Nie", "Tak – jakie?"]} value={takingMeds} onChange={setTakingMeds} />
              {takingMeds === "Tak – jakie?" && <input className={`${inputCls} mt-2`} placeholder="Wpisz nazwy leków" value={medsName} onChange={e => setMedsName(e.target.value)} />}
            </div>
            <div>
              <label className={labelCls}>Czy chorujesz przewlekle?</label>
              <RadioGroup name="k_chronic" options={["Nie", "Tak – na co?"]} value={hasChronicDisease} onChange={setHasChronicDisease} />
              {hasChronicDisease === "Tak – na co?" && <input className={`${inputCls} mt-2`} placeholder="Wpisz na co chorujesz" value={chronicDisease} onChange={e => setChronicDisease(e.target.value)} />}
            </div>
          </div>
        </div>

        {/* Col 3: Terminarz i Lekarz */}
        <div>
          <SectionHeader icon={Calendar} title="Terminarz i Lekarz" color="bg-blue-500" />
          <div className="space-y-3">
            <div>
              <label className={labelCls}>Wybierz specjalizację lekarza (opcjonalnie)</label>
              <select className={`${inputCls} bg-white`} value={specialization} onChange={e => setSpecialization(e.target.value)}>
                <option value="">Lekarz ogólny / Dowolny</option>
                <option value="Internista">Internista</option>
                <option value="Ginekolog">Ginekolog</option>
                <option value="Psychiatra">Psychiatra</option>
                <option value="Dermatolog">Dermatolog</option>
                <option value="Endokrynolog">Endokrynolog</option>
              </select>
            </div>
            <div>
              <label className={labelCls}>Data wizyty <span className="text-red-500">*</span></label>
              <input 
                type="date" 
                className={errors.appointmentDate ? inputErrorCls : inputCls} 
                min={new Date().toISOString().split("T")[0]} 
                value={appointmentDate} 
                onChange={e => {
                  setAppointmentDate(e.target.value);
                  if (errors.appointmentDate) setErrors(prev => { const n = {...prev}; delete n.appointmentDate; return n; });
                }} 
              />
              {errors.appointmentDate && <p className="text-xs text-red-500 font-medium mt-1">{errors.appointmentDate}</p>}
            </div>
            
            {appointmentDate && (
              <div>
                {loadingSlots ? (
                  <div className="flex items-center gap-2 text-[11px] text-slate-500"><Loader2 className="w-3 h-3 animate-spin" /> Szukanie wolnych terminów...</div>
                ) : slotsData ? (
                  <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
                    {slotsData.doctorName ? (
                      <div className="mb-2">
                        <div className="flex items-center gap-2 text-sm font-bold text-blue-900"><UserCheck className="w-4 h-4 text-blue-600" /> {slotsData.doctorName}</div>
                        <div className="text-[10px] text-blue-700 mt-0.5">{slotsData.doctorSpecializations?.join(", ")}</div>
                      </div>
                    ) : <div className="text-[11px] text-orange-700 mb-2">{slotsData.message || 'Brak lekarzy w tym dniu.'}</div>}
                    
                    {slotsData.availableSlots.length > 0 ? (
                      <div>
                        <label className={labelCls}>Wybierz godzinę <span className="text-red-500">*</span></label>
                        <select 
                          className={`${errors.appointmentTime ? inputErrorCls : inputCls} bg-white`} 
                          value={appointmentTime} 
                          onChange={e => {
                            setAppointmentTime(e.target.value);
                            if (errors.appointmentTime) setErrors(prev => { const n = {...prev}; delete n.appointmentTime; return n; });
                          }} 
                        >
                          <option value="">Wybierz godzinę</option>
                          {slotsData.availableSlots.map((s: string) => <option key={s} value={s}>{s}</option>)}
                        </select>
                        {errors.appointmentTime && <p className="text-xs text-red-500 font-medium mt-1">{errors.appointmentTime}</p>}
                      </div>
                    ) : slotsData.doctorName && <div className="text-xs text-orange-600 font-medium">Brak wolnych godzin u tego lekarza.</div>}
                  </div>
                ) : null}
              </div>
            )}

            <div>
              <label className={labelCls}>Sposób konsultacji</label>
              <div className="flex gap-2">
                <label className={`flex-1 flex flex-col items-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-all ${consultationMethod === "video" ? "border-blue-500 bg-blue-50 text-blue-700" : "border-slate-100 hover:border-slate-200"}`}>
                  <input type="radio" name="c_method" className="hidden" checked={consultationMethod === "video"} onChange={() => setConsultationMethod("video")} />
                  <Video className="w-5 h-5" />
                  <span className="text-[11px] font-bold">Wideo</span>
                </label>
                <label className={`flex-1 flex flex-col items-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-all ${consultationMethod === "audio" ? "border-blue-500 bg-blue-50 text-blue-700" : "border-slate-100 hover:border-slate-200"}`}>
                  <input type="radio" name="c_method" className="hidden" checked={consultationMethod === "audio"} onChange={() => setConsultationMethod("audio")} />
                  <Phone className="w-5 h-5" />
                  <span className="text-[11px] font-bold">Audio</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Col 4: Zgody */}
        <div>
          <SectionHeader icon={ShieldCheck} title="Zgody" color="bg-blue-500" />
          <div className="space-y-3">
            <ConsentCheckbox id="k_c1" checked={consentTruth} onChange={v => {
              setConsentTruth(v);
              if (errors.consentTruth) setErrors(prev => { const n = {...prev}; delete n.consentTruth; return n; });
            }}>Oświadczam, że podane informacje są zgodne z prawdą <span className="text-red-500">*</span></ConsentCheckbox>
            {errors.consentTruth && <p className="text-xs text-red-500 font-medium mt-0.5">{errors.consentTruth}</p>}

            <ConsentCheckbox id="k_c2" checked={consentTerms} onChange={v => {
              setConsentTerms(v);
              if (errors.consentTerms) setErrors(prev => { const n = {...prev}; delete n.consentTerms; return n; });
            }}>Akceptuję <Link href="/regulamin" className="text-blue-600 underline">regulamin i politykę prywatności</Link> <span className="text-red-500">*</span></ConsentCheckbox>
            {errors.consentTerms && <p className="text-xs text-red-500 font-medium mt-0.5">{errors.consentTerms}</p>}

            <ConsentCheckbox id="k_c3" checked={consentContact} onChange={setConsentContact}>Wyrażam zgodę na kontakt telefoniczny lub online</ConsentCheckbox>
          </div>
        </div>
      </div>

      {/* Create account */}
      {!isLoggedIn && (
        <div className="mt-5 pt-4 border-t border-slate-100">
          <ConsentCheckbox id="k_account" checked={createAccount} onChange={setCreateAccount}>
            <span className="font-bold text-slate-700">Utwórz konto na naszej platformie</span> – śledź status swojego zgłoszenia
          </ConsentCheckbox>
          {createAccount && (
            <div className="mt-3 w-full md:w-1/3">
              <label className={labelCls}>Ustaw hasło do konta <span className="text-red-500">*</span></label>
              <input 
                type="password" 
                className={errors.accountPassword ? inputErrorCls : inputCls} 
                placeholder="Minimum 6 znaków" 
                value={accountPassword} 
                onChange={e => {
                  setAccountPassword(e.target.value);
                  if (errors.accountPassword) setErrors(prev => { const n = {...prev}; delete n.accountPassword; return n; });
                }} 
              />
              {errors.accountPassword && <p className="text-xs text-red-500 font-medium mt-1">{errors.accountPassword}</p>}
            </div>
          )}
        </div>
      )}

      <SubmitBtn label="PRZEJDŹ DO PŁATNOŚCI" color="bg-[#1B3A6B] hover:bg-[#122B52]" loading={loading} />
      <FormNote />
    </form>
  );
}

/* ─── Form 2: E-Recepta online ───────────────────────────────── */
export function EReceptaForm() {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [pesel, setPesel] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [usedBefore, setUsedBefore] = useState("Tak");
  const [consentTruth, setConsentTruth] = useState(false);
  const [consentTerms, setConsentTerms] = useState(false);
  const [consentDoctor, setConsentDoctor] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  const [accountPassword, setAccountPassword] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const isLoggedIn = useAuthPrefill({ setFullName, setEmail, setPhone });
  const searchParams = useSearchParams();
  const serviceParam = searchParams?.get("service");
  const { amount, type } = getServicePriceAndType(serviceParam, "e-Recepta online");

  // Medicine Search
  const [medQ, setMedQ] = useState("");
  const [medResults, setMedResults] = useState<any[]>([]);
  const [medSearching, setMedSearching] = useState(false);
  const [selectedMeds, setSelectedMeds] = useState<{ medicineId: string; name: string }[]>([]);
  const medTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const searchMeds = React.useCallback(async (q: string) => {
    if (!q || q.length < 2) { setMedResults([]); return; }
    setMedSearching(true);
    try {
      const res = await fetch(`${API_URL}/api/search/autocomplete?query=${encodeURIComponent(q)}&limit=8`);
      const data = await res.json();
      const list = data.success && Array.isArray(data.results) ? data.results : data.success && Array.isArray(data.data) ? data.data : Array.isArray(data) ? data : [];
      setMedResults(list);
    } catch { setMedResults([]); } finally { setMedSearching(false); }
  }, []);

  React.useEffect(() => {
    if (medTimer.current) clearTimeout(medTimer.current);
    medTimer.current = setTimeout(() => searchMeds(medQ), 300);
    return () => { if (medTimer.current) clearTimeout(medTimer.current); };
  }, [medQ, searchMeds]);

  const addMed = (prod: any) => {
    const id = String(prod.id || prod._id);
    if (selectedMeds.some(m => m.medicineId === id)) return;
    const name = prod.suggestion || prod.nazwa || prod.nazwaProduktuLeczniczego || 'Lek';
    setSelectedMeds(prev => [...prev, { medicineId: id, name }]);
    setMedQ(""); setMedResults([]);
    if (errors.selectedMeds) setErrors(prev => { const n = {...prev}; delete n.selectedMeds; return n; });
  };

  const removeMed = (id: string) => {
    setSelectedMeds(prev => prev.filter(m => m.medicineId !== id));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    const newErrors: Record<string, string> = {};
    
    // Validate fullName (first and last name)
    const nameParts = fullName.trim().split(/\s+/);
    if (!fullName.trim()) {
      newErrors.fullName = "Imię i nazwisko są wymagane.";
    } else if (nameParts.length < 2) {
      newErrors.fullName = "Imię i nazwisko musi zawierać co najmniej dwa wyrazy.";
    }
    
    // Validate PESEL
    if (!pesel) {
      newErrors.pesel = "PESEL jest wymagany.";
    } else {
      const peselVal = validatePESEL(pesel);
      if (!peselVal.valid) {
        newErrors.pesel = peselVal.errors[0] || "Nieprawidłowy numer PESEL.";
      }
    }
    
    // Validate Phone (at least 9 digits)
    const cleanPhone = phone.replace(/\s+/g, "");
    if (!cleanPhone) {
      newErrors.phone = "Numer telefonu jest wymagany.";
    } else if (!/^\+?[0-9]{9,15}$/.test(cleanPhone)) {
      newErrors.phone = "Numer telefonu musi zawierać od 9 do 15 cyfr.";
    }
    
    // Validate Email
    if (!email) {
      newErrors.email = "Adres e-mail jest wymagany.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Adres e-mail jest nieprawidłowy.";
    }
    
    // Validate selectedMeds
    if (selectedMeds.length === 0) {
      newErrors.selectedMeds = "Musisz wyszukać i wybrać co najmniej jeden lek.";
    }
    
    // Validate consents
    if (!consentTruth) {
      newErrors.consentTruth = "Musisz oświadczyć zgodność danych z prawdą.";
    }
    if (!consentTerms) {
      newErrors.consentTerms = "Musisz zaakceptować regulamin i politykę prywatności.";
    }
    if (!consentDoctor) {
      newErrors.consentDoctor = "Musisz potwierdzić zrozumienie, że o wystawieniu recepty decyduje lekarz.";
    }
    
    // Validate password if creating account
    if (createAccount && (!accountPassword || accountPassword.length < 6)) {
      newErrors.accountPassword = "Hasło musi mieć co najmniej 6 znaków.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Scroll to the top of the form
      const formEl = e.currentTarget as HTMLFormElement;
      formEl.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    setLoading(true);
    setErrors({});
    try {
      const [firstName, ...lastParts] = fullName.trim().split(/\s+/);
      const lastName = lastParts.join(" ");
      const res = await fetch(`${API_URL}/api/patient/submissions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          serviceType: type,
          patient: { firstName, lastName, pesel, phone, email, contact: { firstName, lastName, pesel, phone, email } },
          medicines: selectedMeds.map(m => ({
            medicineId: m.medicineId,
            medicineName: m.name,
            quantity: 1,
            dosage: ""
          })),
          medicalInfo: {
            medicinesExtra: [],
            usedBefore: usedBefore === "Tak",
          },
          specialization: specialization || null,
          accountPassword: createAccount ? accountPassword : null,
          consent: { rodoConsent: consentTruth, medicalConsent: consentTerms, doctorDecisionConsent: consentDoctor, createAccount },
          amount: amount,
        }),
      });
      const data = await res.json();
      if (!res.ok || data.success === false) {
        setErrors({ submit: data.message || "Wystąpił błąd podczas wysyłania zgłoszenia." });
        const formEl = e.currentTarget as HTMLFormElement;
        formEl.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (data?.data?.payment?.paymentUrl) window.location.href = data.data.payment.paymentUrl;
      else if (data?.data?.submissionId) window.location.href = `/payment/success?submissionId=${data.data.submissionId}`;
    } catch (err) {
      console.error(err);
      setErrors({ submit: "Błąd połączenia z serwerem. Spróbuj ponownie później." });
      const formEl = e.currentTarget as HTMLFormElement;
      formEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    finally { setLoading(false); }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormErrorAlert errors={errors} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Col 1: Dane pacjenta */}
        <div>
          <SectionHeader icon={User} title="Dane pacjenta" color="bg-[#147A60]" />
          <div className="space-y-3">
            <div>
              <label className={labelCls}>Imię i nazwisko <span className="text-red-500">*</span></label>
              <input 
                className={errors.fullName ? inputErrorCls : inputCls} 
                placeholder="Wpisz imię i nazwisko" 
                value={fullName} 
                onChange={e => {
                  setFullName(e.target.value);
                  if (errors.fullName) setErrors(prev => { const n = {...prev}; delete n.fullName; return n; });
                }} 
              />
              {errors.fullName && <p className="text-xs text-red-500 font-medium mt-1">{errors.fullName}</p>}
            </div>
            
            <div>
              <label className={labelCls}>PESEL <span className="text-red-500">*</span></label>
              <input 
                className={errors.pesel ? inputErrorCls : inputCls} 
                placeholder="Wpisz PESEL" 
                value={pesel} 
                onChange={e => {
                  setPesel(e.target.value);
                  if (errors.pesel) setErrors(prev => { const n = {...prev}; delete n.pesel; return n; });
                }} 
              />
              {errors.pesel && <p className="text-xs text-red-500 font-medium mt-1">{errors.pesel}</p>}
            </div>
            
            <div>
              <label className={labelCls}>Telefon <span className="text-red-500">*</span></label>
              <input 
                className={errors.phone ? inputErrorCls : inputCls} 
                placeholder="Wpisz numer telefonu" 
                value={phone} 
                onChange={e => {
                  setPhone(e.target.value);
                  if (errors.phone) setErrors(prev => { const n = {...prev}; delete n.phone; return n; });
                }} 
              />
              {errors.phone && <p className="text-xs text-red-500 font-medium mt-1">{errors.phone}</p>}
            </div>
            
            <div>
              <label className={labelCls}>E-mail <span className="text-red-500">*</span></label>
              <input 
                type="email" 
                className={errors.email ? inputErrorCls : inputCls} 
                placeholder="Wpisz adres e-mail" 
                value={email} 
                onChange={e => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors(prev => { const n = {...prev}; delete n.email; return n; });
                }} 
              />
              {errors.email && <p className="text-xs text-red-500 font-medium mt-1">{errors.email}</p>}
            </div>
            
            <div className="pt-2 border-t border-slate-100">
              <label className={labelCls}>Wybierz specjalizację lekarza (opcjonalnie)</label>
              <select className={`${inputCls} bg-white`} value={specialization} onChange={e => setSpecialization(e.target.value)}>
                <option value="">Lekarz ogólny / Dowolny</option>
                <option value="Internista">Internista</option>
                <option value="Ginekolog">Ginekolog</option>
                <option value="Psychiatra">Psychiatra</option>
                <option value="Dermatolog">Dermatolog</option>
                <option value="Endokrynolog">Endokrynolog</option>
              </select>
            </div>
          </div>
        </div>

        {/* Col 2: Informacje do recepty */}
        <div className="md:col-span-2">
          <SectionHeader icon={Pill} title="Informacje do recepty" color="bg-[#147A60]" />
          
          <div className={`${errors.selectedMeds ? "bg-red-50/30 border border-red-200" : "bg-[#EAF3F0]/50 border border-[#147A60]/20"} rounded-xl p-4 relative mb-4`}>
            <label className={labelCls}>Wyszukaj lek po nazwie <span className="text-red-500">*</span></label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input type="text" className={`${inputCls} pl-10 bg-white`} placeholder="Wpisz nazwę leku, np. Ibuprom..." value={medQ} onChange={e => setMedQ(e.target.value)} autoComplete="off" />
              {medSearching && <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 animate-spin text-slate-400" />}
              {medResults.length > 0 && (
                <div className="absolute z-50 left-0 right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                  {medResults.map((p: any) => (
                    <button key={p.id || p._id} type="button" onClick={() => addMed(p)} className="w-full text-left px-4 py-3 text-sm hover:bg-[#EAF3F0] border-b border-slate-50 transition-colors">
                      <div className="font-bold text-slate-800">{p.suggestion || p.nazwa || p.nazwaProduktuLeczniczego || 'Lek'}</div>
                      <div className="text-[11px] text-slate-500 mt-1">{p.substancjaCzynna || ''}{p.moc ? ` | ${p.moc}` : ''}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {errors.selectedMeds && <p className="text-xs text-red-500 font-medium mt-2">{errors.selectedMeds}</p>}
            
            {selectedMeds.length > 0 && (
              <div className="mt-4 space-y-3">
                {selectedMeds.map(m => (
                  <div key={m.medicineId} className="bg-white border border-slate-200 rounded-xl p-4 relative">
                    <button type="button" onClick={() => removeMed(m.medicineId)} className="absolute top-3 right-3 text-red-400 hover:text-red-600 p-1"><Trash2 className="w-4 h-4" /></button>
                    <div className="font-bold text-slate-900">{m.name}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-3">
            <div>
              <label className={labelCls}>Czy leki były wcześniej stosowane?</label>
              <RadioGroup name="r_used" options={["Tak", "Nie"]} value={usedBefore} onChange={setUsedBefore} />
            </div>
          </div>
        </div>

        {/* Col 3: Zgody */}
        <div>
          <SectionHeader icon={ShieldCheck} title="Zgody" color="bg-[#147A60]" />
          <div className="space-y-3">
            <ConsentCheckbox id="r_c1" checked={consentTruth} onChange={v => {
              setConsentTruth(v);
              if (errors.consentTruth) setErrors(prev => { const n = {...prev}; delete n.consentTruth; return n; });
            }}>Oświadczam, że podane informacje są zgodne z prawdą <span className="text-red-500">*</span></ConsentCheckbox>
            {errors.consentTruth && <p className="text-xs text-red-500 font-medium mt-0.5">{errors.consentTruth}</p>}

            <ConsentCheckbox id="r_c2" checked={consentTerms} onChange={v => {
              setConsentTerms(v);
              if (errors.consentTerms) setErrors(prev => { const n = {...prev}; delete n.consentTerms; return n; });
            }}>Akceptuję <Link href="/regulamin" className="text-[#147A60] underline">regulamin i politykę prywatności</Link> <span className="text-red-500">*</span></ConsentCheckbox>
            {errors.consentTerms && <p className="text-xs text-red-500 font-medium mt-0.5">{errors.consentTerms}</p>}

            <ConsentCheckbox id="r_c3" checked={consentDoctor} onChange={v => {
              setConsentDoctor(v);
              if (errors.consentDoctor) setErrors(prev => { const n = {...prev}; delete n.consentDoctor; return n; });
            }}>Rozumiem, że decyzję o wystawieniu recepty podejmuje lekarz <span className="text-red-500">*</span></ConsentCheckbox>
            {errors.consentDoctor && <p className="text-xs text-red-500 font-medium mt-0.5">{errors.consentDoctor}</p>}
          </div>
        </div>
      </div>

      {!isLoggedIn && (
        <div className="mt-5 pt-4 border-t border-slate-100">
          <ConsentCheckbox id="e_account" checked={createAccount} onChange={setCreateAccount}>
            <span className="font-bold text-slate-700">Utwórz konto na naszej platformie</span> – śledź status swojego zgłoszenia
          </ConsentCheckbox>
          {createAccount && (
            <div className="mt-3 w-full md:w-1/3">
              <label className={labelCls}>Ustaw hasło do konta <span className="text-red-500">*</span></label>
              <input 
                type="password" 
                className={errors.accountPassword ? inputErrorCls : inputCls} 
                placeholder="Minimum 6 znaków" 
                value={accountPassword} 
                onChange={e => {
                  setAccountPassword(e.target.value);
                  if (errors.accountPassword) setErrors(prev => { const n = {...prev}; delete n.accountPassword; return n; });
                }} 
              />
              {errors.accountPassword && <p className="text-xs text-red-500 font-medium mt-1">{errors.accountPassword}</p>}
            </div>
          )}
        </div>
      )}

      <SubmitBtn label="PRZEJDŹ DO PŁATNOŚCI" color="bg-[#147A60] hover:bg-[#064743]" loading={loading} />
      <FormNote />
    </form>
  );
}

/* ─── Form 3: L4 online ──────────────────────────────────────── */
export function L4Form() {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [pesel, setPesel] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [employerName, setEmployerName] = useState("");
  const [employerNIP, setEmployerNIP] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [symptomsFrom, setSymptomsFrom] = useState("");
  const [ableToWork, setAbleToWork] = useState("Nie");
  const [daysNeeded, setDaysNeeded] = useState("7");
  const [consentTruth, setConsentTruth] = useState(false);
  const [consentTerms, setConsentTerms] = useState(false);
  const [consentDoctor, setConsentDoctor] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  const [accountPassword, setAccountPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const isLoggedIn = useAuthPrefill({ setFullName, setEmail, setPhone, setPesel });
  const searchParams = useSearchParams();
  const serviceParam = searchParams?.get("service");
  const { amount, type } = getServicePriceAndType(serviceParam, "L4 online");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    const newErrors: Record<string, string> = {};
    
    // Validate fullName (first and last name)
    const nameParts = fullName.trim().split(/\s+/);
    if (!fullName.trim()) {
      newErrors.fullName = "Imię i nazwisko są wymagane.";
    } else if (nameParts.length < 2) {
      newErrors.fullName = "Imię i nazwisko musi zawierać co najmniej dwa wyrazy.";
    }
    
    // Validate PESEL
    if (!pesel) {
      newErrors.pesel = "PESEL jest wymagany.";
    } else {
      const peselVal = validatePESEL(pesel);
      if (!peselVal.valid) {
        newErrors.pesel = peselVal.errors[0] || "Nieprawidłowy numer PESEL.";
      }
    }
    
    // Validate Address, Postal Code, City
    if (!address.trim()) {
      newErrors.address = "Adres zamieszkania jest wymagany.";
    }
    if (!postalCode.trim()) {
      newErrors.postalCode = "Kod pocztowy jest wymagany.";
    } else if (!/^\d{2}-\d{3}$/.test(postalCode.trim())) {
      newErrors.postalCode = "Kod pocztowy musi mieć format XX-XXX.";
    }
    if (!city.trim()) {
      newErrors.city = "Miasto jest wymagane.";
    }
    
    // Validate Phone (at least 9 digits)
    const cleanPhone = phone.replace(/\s+/g, "");
    if (!cleanPhone) {
      newErrors.phone = "Numer telefonu jest wymagany.";
    } else if (!/^\+?[0-9]{9,15}$/.test(cleanPhone)) {
      newErrors.phone = "Numer telefonu musi zawierać od 9 do 15 cyfr.";
    }
    
    // Validate Email
    if (!email) {
      newErrors.email = "Adres e-mail jest wymagany.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Adres e-mail jest nieprawidłowy.";
    }
    
    // Validate Symptoms
    if (!symptoms.trim()) {
      newErrors.symptoms = "Opis objawów jest wymagany.";
    }
    
    // Validate Days Needed
    const days = parseInt(daysNeeded);
    if (!daysNeeded) {
      newErrors.daysNeeded = "Liczba dni zwolnienia jest wymagana.";
    } else if (isNaN(days) || days < 1 || days > 182) {
      newErrors.daysNeeded = "Liczba dni musi być wartością od 1 do 182.";
    }
    
    // Validate consents
    if (!consentTruth) {
      newErrors.consentTruth = "Musisz oświadczyć zgodność danych z prawdą.";
    }
    if (!consentTerms) {
      newErrors.consentTerms = "Musisz zaakceptować regulamin i politykę prywatności.";
    }
    if (!consentDoctor) {
      newErrors.consentDoctor = "Musisz potwierdzić zrozumienie, że o wystawieniu L4 decyduje lekarz.";
    }
    
    // Validate password if creating account
    if (createAccount && (!accountPassword || accountPassword.length < 6)) {
      newErrors.accountPassword = "Hasło musi mieć co najmniej 6 znaków.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Scroll to the top of the form
      const formEl = e.currentTarget as HTMLFormElement;
      formEl.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    setLoading(true);
    setErrors({});
    try {
      const [firstName, ...lastParts] = fullName.trim().split(/\s+/);
      const lastName = lastParts.join(" ");
      const res = await fetch(`${API_URL}/api/patient/medical-leave`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          serviceType: type,
          patientFirstName: firstName, patientLastName: lastName,
          patientPesel: pesel, patientPhone: phone, patientEmail: email, patientAddress: address,
          postalCode, city,
          specialization: specialization || null,
          employerName, employerNIP,
          symptoms, symptomsFrom, ableToWork: ableToWork === "Tak", daysNeeded: parseInt(daysNeeded),
          accountPassword: createAccount ? accountPassword : null,
          consent: { rodoConsent: consentTruth, medicalConsent: consentTerms, doctorDecisionConsent: consentDoctor, createAccount },
          amount: amount,
        }),
      });
      const data = await res.json();
      if (!res.ok || data.success === false) {
        setErrors({ submit: data.message || "Wystąpił błąd podczas wysyłania zgłoszenia." });
        const formEl = e.currentTarget as HTMLFormElement;
        formEl.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (data?.data?.payment?.paymentUrl) window.location.href = data.data.payment.paymentUrl;
      else if (data?.data?.submissionId) window.location.href = `/payment/success?submissionId=${data.data.submissionId}`;
    } catch (err) {
      console.error(err);
      setErrors({ submit: "Błąd połączenia z serwerem. Spróbuj ponownie później." });
      const formEl = e.currentTarget as HTMLFormElement;
      formEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    finally { setLoading(false); }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormErrorAlert errors={errors} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Col 1: Dane pacjenta */}
        <div>
          <SectionHeader icon={User} title="Dane pacjenta" color="bg-indigo-500" />
          <div className="space-y-3">
            <div>
              <label className={labelCls}>Imię i nazwisko <span className="text-red-500">*</span></label>
              <input 
                className={errors.fullName ? inputErrorCls : inputCls} 
                placeholder="Wpisz imię i nazwisko" 
                value={fullName} 
                onChange={e => {
                  setFullName(e.target.value);
                  if (errors.fullName) setErrors(prev => { const n = {...prev}; delete n.fullName; return n; });
                }} 
              />
              {errors.fullName && <p className="text-xs text-red-500 font-medium mt-1">{errors.fullName}</p>}
            </div>
            
            <div>
              <label className={labelCls}>PESEL <span className="text-red-500">*</span></label>
              <input 
                className={errors.pesel ? inputErrorCls : inputCls} 
                placeholder="Wpisz PESEL" 
                value={pesel} 
                onChange={e => {
                  setPesel(e.target.value);
                  if (errors.pesel) setErrors(prev => { const n = {...prev}; delete n.pesel; return n; });
                }} 
              />
              {errors.pesel && <p className="text-xs text-red-500 font-medium mt-1">{errors.pesel}</p>}
            </div>
            
            <div>
              <label className={labelCls}>Adres zamieszkania <span className="text-red-500">*</span></label>
              <input 
                className={errors.address ? inputErrorCls : inputCls} 
                placeholder="Ulica i numer" 
                value={address} 
                onChange={e => {
                  setAddress(e.target.value);
                  if (errors.address) setErrors(prev => { const n = {...prev}; delete n.address; return n; });
                }} 
              />
              {errors.address && <p className="text-xs text-red-500 font-medium mt-1">{errors.address}</p>}
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelCls}>Kod pocztowy <span className="text-red-500">*</span></label>
                <input 
                  className={errors.postalCode ? inputErrorCls : inputCls} 
                  placeholder="00-000" 
                  value={postalCode} 
                  onChange={e => {
                    setPostalCode(e.target.value);
                    if (errors.postalCode) setErrors(prev => { const n = {...prev}; delete n.postalCode; return n; });
                  }} 
                />
                {errors.postalCode && <p className="text-xs text-red-500 font-medium mt-1">{errors.postalCode}</p>}
              </div>
              
              <div>
                <label className={labelCls}>Miasto <span className="text-red-500">*</span></label>
                <input 
                  className={errors.city ? inputErrorCls : inputCls} 
                  placeholder="Miejscowość" 
                  value={city} 
                  onChange={e => {
                    setCity(e.target.value);
                    if (errors.city) setErrors(prev => { const n = {...prev}; delete n.city; return n; });
                  }} 
                />
                {errors.city && <p className="text-xs text-red-500 font-medium mt-1">{errors.city}</p>}
              </div>
            </div>
            
            <div>
              <label className={labelCls}>Telefon <span className="text-red-500">*</span></label>
              <input 
                className={errors.phone ? inputErrorCls : inputCls} 
                placeholder="Numer telefonu" 
                value={phone} 
                onChange={e => {
                  setPhone(e.target.value);
                  if (errors.phone) setErrors(prev => { const n = {...prev}; delete n.phone; return n; });
                }} 
              />
              {errors.phone && <p className="text-xs text-red-500 font-medium mt-1">{errors.phone}</p>}
            </div>
            
            <div>
              <label className={labelCls}>E-mail <span className="text-red-500">*</span></label>
              <input 
                type="email" 
                className={errors.email ? inputErrorCls : inputCls} 
                placeholder="Adres e-mail" 
                value={email} 
                onChange={e => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors(prev => { const n = {...prev}; delete n.email; return n; });
                }} 
              />
              {errors.email && <p className="text-xs text-red-500 font-medium mt-1">{errors.email}</p>}
            </div>
            
            <div className="pt-2 border-t border-slate-100">
              <label className={labelCls}>Wybierz specjalizację lekarza (opcjonalnie)</label>
              <select className={`${inputCls} bg-white`} value={specialization} onChange={e => setSpecialization(e.target.value)}>
                <option value="">Lekarz ogólny / Dowolny</option>
                <option value="Internista">Internista</option>
                <option value="Ginekolog">Ginekolog</option>
                <option value="Psychiatra">Psychiatra</option>
                <option value="Dermatolog">Dermatolog</option>
                <option value="Endokrynolog">Endokrynolog</option>
              </select>
            </div>
          </div>
        </div>

        {/* Col 2: Dane pracodawcy */}
        <div>
          <SectionHeader icon={Building2} title="Dane pracodawcy" color="bg-purple-600" />
          <div className="space-y-3">
            <div><label className={labelCls}>Nazwa pracodawcy</label><input className={inputCls} placeholder="Wpisz nazwę pracodawcy" value={employerName} onChange={e => setEmployerName(e.target.value)} /></div>
            <div><label className={labelCls}>NIP pracodawcy <span className="text-slate-400 font-normal">(opcjonalny)</span></label><input className={inputCls} placeholder="Wpisz NIP" value={employerNIP} onChange={e => setEmployerNIP(e.target.value)} /></div>
          </div>
        </div>

        {/* Col 3: Informacje zdrowotne */}
        <div>
          <SectionHeader icon={Heart} title="Informacje zdrowotne" color="bg-purple-600" />
          <div className="space-y-3">
            <div>
              <label className={labelCls}>Jakie masz objawy? <span className="text-red-500">*</span></label>
              <textarea 
                className={errors.symptoms ? textareaErrorCls : textareaCls} 
                rows={3} 
                placeholder="Opisz swoje objawy" 
                value={symptoms} 
                onChange={e => {
                  setSymptoms(e.target.value);
                  if (errors.symptoms) setErrors(prev => { const n = {...prev}; delete n.symptoms; return n; });
                }} 
              />
              {errors.symptoms && <p className="text-xs text-red-500 font-medium mt-1">{errors.symptoms}</p>}
            </div>
            
            <div><label className={labelCls}>Od kiedy występują objawy?</label><input type="date" className={inputCls} value={symptomsFrom} onChange={e => setSymptomsFrom(e.target.value)} /></div>
            
            <div>
              <label className={labelCls}>Czy jesteś obecnie zdolny/a do pracy?</label>
              <RadioGroup name="l4_work" options={["Nie", "Tak"]} value={ableToWork} onChange={setAbleToWork} />
            </div>
            
            <div>
              <label className={labelCls}>Ile dni potrzebujesz zwolnienia? <span className="text-red-500">*</span></label>
              <input 
                type="number" 
                min="1" 
                max="182" 
                className={errors.daysNeeded ? inputErrorCls : inputCls} 
                placeholder="Np. 7" 
                value={daysNeeded} 
                onChange={e => {
                  setDaysNeeded(e.target.value);
                  if (errors.daysNeeded) setErrors(prev => { const n = {...prev}; delete n.daysNeeded; return n; });
                }} 
              />
              {errors.daysNeeded && <p className="text-xs text-red-500 font-medium mt-1">{errors.daysNeeded}</p>}
            </div>
          </div>
        </div>

        {/* Col 4: Zgody */}
        <div>
          <SectionHeader icon={ShieldCheck} title="Zgody" color="bg-purple-600" />
          <div className="space-y-3">
            <ConsentCheckbox id="l4_c1" checked={consentTruth} onChange={v => {
              setConsentTruth(v);
              if (errors.consentTruth) setErrors(prev => { const n = {...prev}; delete n.consentTruth; return n; });
            }}>Oświadczam, że podane informacje są zgodne z prawdą <span className="text-red-500">*</span></ConsentCheckbox>
            {errors.consentTruth && <p className="text-xs text-red-500 font-medium mt-0.5">{errors.consentTruth}</p>}

            <ConsentCheckbox id="l4_c2" checked={consentTerms} onChange={v => {
              setConsentTerms(v);
              if (errors.consentTerms) setErrors(prev => { const n = {...prev}; delete n.consentTerms; return n; });
            }}>Akceptuję <Link href="/regulamin" className="text-purple-600 underline">regulamin i politykę prywatności</Link> <span className="text-red-500">*</span></ConsentCheckbox>
            {errors.consentTerms && <p className="text-xs text-red-500 font-medium mt-0.5">{errors.consentTerms}</p>}

            <ConsentCheckbox id="l4_c3" checked={consentDoctor} onChange={v => {
              setConsentDoctor(v);
              if (errors.consentDoctor) setErrors(prev => { const n = {...prev}; delete n.consentDoctor; return n; });
            }}>Rozumiem, że decyzję o wystawieniu L4 podejmuje lekarz <span className="text-red-500">*</span></ConsentCheckbox>
            {errors.consentDoctor && <p className="text-xs text-red-500 font-medium mt-0.5">{errors.consentDoctor}</p>}
          </div>
        </div>
      </div>

      {!isLoggedIn && (
        <div className="mt-5 pt-4 border-t border-slate-100">
          <ConsentCheckbox id="l4_account" checked={createAccount} onChange={setCreateAccount}>
            <span className="font-bold text-slate-700">Utwórz konto na naszej platformie</span> – śledź status swojego zgłoszenia
          </ConsentCheckbox>
          {createAccount && (
            <div className="mt-3 w-full md:w-1/3">
              <label className={labelCls}>Ustaw hasło do konta <span className="text-red-500">*</span></label>
              <input 
                type="password" 
                className={errors.accountPassword ? inputErrorCls : inputCls} 
                placeholder="Minimum 6 znaków" 
                value={accountPassword} 
                onChange={e => {
                  setAccountPassword(e.target.value);
                  if (errors.accountPassword) setErrors(prev => { const n = {...prev}; delete n.accountPassword; return n; });
                }} 
              />
              {errors.accountPassword && <p className="text-xs text-red-500 font-medium mt-1">{errors.accountPassword}</p>}
            </div>
          )}
        </div>
      )}

      <SubmitBtn label="PRZEJDŹ DO PŁATNOŚCI" color="bg-purple-700 hover:bg-purple-800" loading={loading} />
      <FormNote />
    </form>
  );
}

/* ─── Form 4: Kontynuacja leczenia ──────────────────────────── */
export function KontynuacjaForm() {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [pesel, setPesel] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [treatmentFrom, setTreatmentFrom] = useState("");
  const [sideEffects, setSideEffects] = useState("Nie");
  const [sideEffectsDesc, setSideEffectsDesc] = useState("");
  const [healthChanged, setHealthChanged] = useState("Nie");
  const [healthChangedDesc, setHealthChangedDesc] = useState("");
  const [consentTruth, setConsentTruth] = useState(false);
  const [consentTerms, setConsentTerms] = useState(false);
  const [consentDoctor, setConsentDoctor] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  const [accountPassword, setAccountPassword] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const isLoggedIn = useAuthPrefill({ setFullName, setEmail, setPhone, setPesel });
  const searchParams = useSearchParams();
  const serviceParam = searchParams?.get("service");
  const { amount, type } = getServicePriceAndType(serviceParam, "Kontynuacja leczenia");

  // Medicine Search
  const [medQ, setMedQ] = useState("");
  const [medResults, setMedResults] = useState<any[]>([]);
  const [medSearching, setMedSearching] = useState(false);
  const [selectedMeds, setSelectedMeds] = useState<{ medicineId: string; name: string }[]>([]);
  const medTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const searchMeds = React.useCallback(async (q: string) => {
    if (!q || q.length < 2) { setMedResults([]); return; }
    setMedSearching(true);
    try {
      const res = await fetch(`${API_URL}/api/search/autocomplete?query=${encodeURIComponent(q)}&limit=8`);
      const data = await res.json();
      const list = data.success && Array.isArray(data.results) ? data.results : data.success && Array.isArray(data.data) ? data.data : Array.isArray(data) ? data : [];
      setMedResults(list);
    } catch { setMedResults([]); } finally { setMedSearching(false); }
  }, []);

  React.useEffect(() => {
    if (medTimer.current) clearTimeout(medTimer.current);
    medTimer.current = setTimeout(() => searchMeds(medQ), 300);
    return () => { if (medTimer.current) clearTimeout(medTimer.current); };
  }, [medQ, searchMeds]);

  const addMed = (prod: any) => {
    const id = String(prod.id || prod._id);
    if (selectedMeds.some(m => m.medicineId === id)) return;
    const name = prod.suggestion || prod.nazwa || prod.nazwaProduktuLeczniczego || 'Lek';
    setSelectedMeds(prev => [...prev, { medicineId: id, name }]);
    setMedQ(""); setMedResults([]);
    if (errors.selectedMeds) setErrors(prev => { const n = {...prev}; delete n.selectedMeds; return n; });
  };

  const removeMed = (id: string) => {
    setSelectedMeds(prev => prev.filter(m => m.medicineId !== id));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    const newErrors: Record<string, string> = {};
    
    // Validate fullName (first and last name)
    const nameParts = fullName.trim().split(/\s+/);
    if (!fullName.trim()) {
      newErrors.fullName = "Imię i nazwisko są wymagane.";
    } else if (nameParts.length < 2) {
      newErrors.fullName = "Imię i nazwisko musi zawierać co najmniej dwa wyrazy.";
    }
    
    // Validate PESEL
    if (!pesel) {
      newErrors.pesel = "PESEL jest wymagany.";
    } else {
      const peselVal = validatePESEL(pesel);
      if (!peselVal.valid) {
        newErrors.pesel = peselVal.errors[0] || "Nieprawidłowy numer PESEL.";
      }
    }
    
    // Validate Phone (at least 9 digits)
    const cleanPhone = phone.replace(/\s+/g, "");
    if (!cleanPhone) {
      newErrors.phone = "Numer telefonu jest wymagany.";
    } else if (!/^\+?[0-9]{9,15}$/.test(cleanPhone)) {
      newErrors.phone = "Numer telefonu musi zawierać od 9 do 15 cyfr.";
    }
    
    // Validate Email
    if (!email) {
      newErrors.email = "Adres e-mail jest wymagany.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Adres e-mail jest nieprawidłowy.";
    }
    
    // Validate selectedMeds
    if (selectedMeds.length === 0) {
      newErrors.selectedMeds = "Musisz wyszukać i wybrać co najmniej jeden lek.";
    }
    
    // Validate consents
    if (!consentTruth) {
      newErrors.consentTruth = "Musisz oświadczyć zgodność danych z prawdą.";
    }
    if (!consentTerms) {
      newErrors.consentTerms = "Musisz zaakceptować regulamin i politykę prywatności.";
    }
    if (!consentDoctor) {
      newErrors.consentDoctor = "Musisz potwierdzić zrozumienie, że kontynuacja leczenia wymaga decyzji lekarza.";
    }
    
    // Validate password if creating account
    if (createAccount && (!accountPassword || accountPassword.length < 6)) {
      newErrors.accountPassword = "Hasło musi mieć co najmniej 6 znaków.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Scroll to the top of the form
      const formEl = e.currentTarget as HTMLFormElement;
      formEl.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    setLoading(true);
    setErrors({});
    try {
      const [firstName, ...lastParts] = fullName.trim().split(/\s+/);
      const lastName = lastParts.join(" ");
      const res = await fetch(`${API_URL}/api/patient/submissions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          serviceType: type,
          patient: { firstName, lastName, pesel, phone, email, contact: { firstName, lastName, pesel, phone, email } },
          medicines: selectedMeds.map(m => ({
            medicineId: m.medicineId,
            medicineName: m.name,
            quantity: 1,
            dosage: ""
          })),
          medicalInfo: {
            treatmentContinue: selectedMeds.map(m => m.name).join(", "),
            treatmentFrom,
            hasSideEffects: sideEffects === "Tak – jakie?", sideEffectsDesc,
            healthChanged: healthChanged === "Tak – opisz", healthChangedDesc,
          },
          specialization: specialization || null,
          accountPassword: createAccount ? accountPassword : null,
          consent: { rodoConsent: consentTruth, medicalConsent: consentTerms, doctorDecisionConsent: consentDoctor, createAccount },
          amount: amount,
        }),
      });
      const data = await res.json();
      if (!res.ok || data.success === false) {
        setErrors({ submit: data.message || "Wystąpił błąd podczas wysyłania zgłoszenia." });
        const formEl = e.currentTarget as HTMLFormElement;
        formEl.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (data?.data?.payment?.paymentUrl) window.location.href = data.data.payment.paymentUrl;
      else if (data?.data?.submissionId) window.location.href = `/payment/success?submissionId=${data.data.submissionId}`;
    } catch (err) {
      console.error(err);
      setErrors({ submit: "Błąd połączenia z serwerem. Spróbuj ponownie później." });
      const formEl = e.currentTarget as HTMLFormElement;
      formEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    finally { setLoading(false); }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormErrorAlert errors={errors} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Col 1: Dane pacjenta */}
        <div>
          <SectionHeader icon={User} title="Dane pacjenta" color="bg-orange-500" />
          <div className="space-y-3">
            <div>
              <label className={labelCls}>Imię i nazwisko <span className="text-red-500">*</span></label>
              <input 
                className={errors.fullName ? inputErrorCls : inputCls} 
                placeholder="Wpisz imię i nazwisko" 
                value={fullName} 
                onChange={e => {
                  setFullName(e.target.value);
                  if (errors.fullName) setErrors(prev => { const n = {...prev}; delete n.fullName; return n; });
                }} 
              />
              {errors.fullName && <p className="text-xs text-red-500 font-medium mt-1">{errors.fullName}</p>}
            </div>
            
            <div>
              <label className={labelCls}>PESEL <span className="text-red-500">*</span></label>
              <input 
                className={errors.pesel ? inputErrorCls : inputCls} 
                placeholder="Wpisz PESEL" 
                value={pesel} 
                onChange={e => {
                  setPesel(e.target.value);
                  if (errors.pesel) setErrors(prev => { const n = {...prev}; delete n.pesel; return n; });
                }} 
              />
              {errors.pesel && <p className="text-xs text-red-500 font-medium mt-1">{errors.pesel}</p>}
            </div>
            
            <div>
              <label className={labelCls}>Telefon kontaktowy <span className="text-red-500">*</span></label>
              <input 
                className={errors.phone ? inputErrorCls : inputCls} 
                placeholder="Wpisz numer telefonu" 
                value={phone} 
                onChange={e => {
                  setPhone(e.target.value);
                  if (errors.phone) setErrors(prev => { const n = {...prev}; delete n.phone; return n; });
                }} 
              />
              {errors.phone && <p className="text-xs text-red-500 font-medium mt-1">{errors.phone}</p>}
            </div>
            
            <div>
              <label className={labelCls}>Adres e-mail <span className="text-red-500">*</span></label>
              <input 
                type="email" 
                className={errors.email ? inputErrorCls : inputCls} 
                placeholder="Wpisz adres e-mail" 
                value={email} 
                onChange={e => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors(prev => { const n = {...prev}; delete n.email; return n; });
                }} 
              />
              {errors.email && <p className="text-xs text-red-500 font-medium mt-1">{errors.email}</p>}
            </div>
            
            <div className="pt-2 border-t border-slate-100">
              <label className={labelCls}>Wybierz specjalizację lekarza (opcjonalnie)</label>
              <select className={`${inputCls} bg-white`} value={specialization} onChange={e => setSpecialization(e.target.value)}>
                <option value="">Lekarz ogólny / Dowolny</option>
                <option value="Internista">Internista</option>
                <option value="Ginekolog">Ginekolog</option>
                <option value="Psychiatra">Psychiatra</option>
                <option value="Dermatolog">Dermatolog</option>
                <option value="Endokrynolog">Endokrynolog</option>
              </select>
            </div>
          </div>
        </div>

        {/* Col 2: Informacje o leczeniu */}
        <div className="md:col-span-2">
          <SectionHeader icon={RefreshCw} title="Informacje o leczeniu" color="bg-orange-500" />
          
          <div className={`${errors.selectedMeds ? "bg-red-50/30 border border-red-200" : "bg-[#FFF4ED] border border-orange-200"} rounded-xl p-4 relative mb-4`}>
            <label className={labelCls}>Wyszukaj kontynuowany lek <span className="text-red-500">*</span></label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input type="text" className={`${inputCls} pl-10 bg-white`} placeholder="Wpisz nazwę leku, np. Ibuprom..." value={medQ} onChange={e => setMedQ(e.target.value)} autoComplete="off" />
              {medSearching && <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 animate-spin text-slate-400" />}
              {medResults.length > 0 && (
                <div className="absolute z-50 left-0 right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                  {medResults.map((p: any) => (
                    <button key={p.id || p._id} type="button" onClick={() => addMed(p)} className="w-full text-left px-4 py-3 text-sm hover:bg-[#FFF4ED] border-b border-slate-50 transition-colors">
                      <div className="font-bold text-slate-800">{p.suggestion || p.nazwa || p.nazwaProduktuLeczniczego || 'Lek'}</div>
                      <div className="text-[11px] text-slate-500 mt-1">{p.substancjaCzynna || ''}{p.moc ? ` | ${p.moc}` : ''}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {errors.selectedMeds && <p className="text-xs text-red-500 font-medium mt-2">{errors.selectedMeds}</p>}
            
            {selectedMeds.length > 0 && (
              <div className="mt-4 space-y-2">
                {selectedMeds.map(m => (
                  <div key={m.medicineId} className="bg-white border border-slate-200 rounded-xl p-3 flex justify-between items-center relative">
                    <div className="font-bold text-slate-900">{m.name}</div>
                    <button type="button" onClick={() => removeMed(m.medicineId)} className="text-red-400 hover:text-red-600 p-1"><Trash2 className="w-4 h-4" /></button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-3">
            <div><label className={labelCls}>Od kiedy trwa leczenie?</label><input type="date" className={inputCls} value={treatmentFrom} onChange={e => setTreatmentFrom(e.target.value)} /></div>
            <div>
              <label className={labelCls}>Czy występują skutki uboczne?</label>
              <RadioGroup name="ko_side" options={["Nie", "Tak – jakie?"]} value={sideEffects} onChange={setSideEffects} />
              {sideEffects === "Tak – jakie?" && <textarea className={`${textareaCls} mt-2`} rows={2} placeholder="Opisz skutki uboczne" value={sideEffectsDesc} onChange={e => setSideEffectsDesc(e.target.value)} />}
            </div>
            <div>
              <label className={labelCls}>Czy stan zdrowia się zmienił?</label>
              <RadioGroup name="ko_health" options={["Nie", "Tak – opisz"]} value={healthChanged} onChange={setHealthChanged} />
              {healthChanged === "Tak – opisz" && <textarea className={`${textareaCls} mt-2`} rows={2} placeholder="Opisz zmiany w stanie zdrowia" value={healthChangedDesc} onChange={e => setHealthChangedDesc(e.target.value)} />}
            </div>
          </div>
        </div>

        {/* Col 3: Zgody */}
        <div>
          <SectionHeader icon={ShieldCheck} title="Zgody" color="bg-orange-500" />
          <div className="space-y-3">
            <ConsentCheckbox id="ko_c1" checked={consentTruth} onChange={v => {
              setConsentTruth(v);
              if (errors.consentTruth) setErrors(prev => { const n = {...prev}; delete n.consentTruth; return n; });
            }}>Oświadczam, że podane informacje są zgodne z prawdą <span className="text-red-500">*</span></ConsentCheckbox>
            {errors.consentTruth && <p className="text-xs text-red-500 font-medium mt-0.5">{errors.consentTruth}</p>}

            <ConsentCheckbox id="ko_c2" checked={consentTerms} onChange={v => {
              setConsentTerms(v);
              if (errors.consentTerms) setErrors(prev => { const n = {...prev}; delete n.consentTerms; return n; });
            }}>Akceptuję <Link href="/regulamin" className="text-orange-600 underline">regulamin i politykę prywatności</Link> <span className="text-red-500">*</span></ConsentCheckbox>
            {errors.consentTerms && <p className="text-xs text-red-500 font-medium mt-0.5">{errors.consentTerms}</p>}

            <ConsentCheckbox id="ko_c3" checked={consentDoctor} onChange={v => {
              setConsentDoctor(v);
              if (errors.consentDoctor) setErrors(prev => { const n = {...prev}; delete n.consentDoctor; return n; });
            }}>Rozumiem, że kontynuacja leczenia wymaga decyzji lekarza <span className="text-red-500">*</span></ConsentCheckbox>
            {errors.consentDoctor && <p className="text-xs text-red-500 font-medium mt-0.5">{errors.consentDoctor}</p>}
          </div>
        </div>
      </div>

      {!isLoggedIn && (
        <div className="mt-5 pt-4 border-t border-slate-100">
          <ConsentCheckbox id="ko_account" checked={createAccount} onChange={setCreateAccount}>
            <span className="font-bold text-slate-700">Utwórz konto na naszej platformie</span> – śledź status swojego zgłoszenia
          </ConsentCheckbox>
          {createAccount && (
            <div className="mt-3 w-full md:w-1/3">
              <label className={labelCls}>Ustaw hasło do konta <span className="text-red-500">*</span></label>
              <input 
                type="password" 
                className={errors.accountPassword ? inputErrorCls : inputCls} 
                placeholder="Minimum 6 znaków" 
                value={accountPassword} 
                onChange={e => {
                  setAccountPassword(e.target.value);
                  if (errors.accountPassword) setErrors(prev => { const n = {...prev}; delete n.accountPassword; return n; });
                }} 
              />
              {errors.accountPassword && <p className="text-xs text-red-500 font-medium mt-1">{errors.accountPassword}</p>}
            </div>
          )}
        </div>
      )}

      <SubmitBtn label="PRZEJDŹ DO PŁATNOŚCI" color="bg-orange-500 hover:bg-orange-600" loading={loading} />
      <FormNote />
    </form>
  );
}

/* ─── Main Section Component ─────────────────────────────────── */
export const servicesData = [
  {
    id: "konsultacja",
    num: "1.",
    label: "Konsultacja lekarska online",
    shortLabel: "Konsultacja",
    subtitle: "Wypełnij formularz, a my skontaktujemy się z Tobą.",
    icon: Stethoscope,
    iconBg: "bg-blue-500",
    headerBg: "bg-gradient-to-r from-blue-50 to-slate-50",
    numColor: "text-blue-500",
    activeTab: "border-blue-500 text-blue-600 bg-blue-50",
    inactiveTab: "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-200",
  },
  {
    id: "erecepta",
    num: "2.",
    label: "E-Recepta online",
    shortLabel: "E-Recepta",
    subtitle: "Wypełnij formularz, aby uzyskać e-receptę.",
    icon: Pill,
    iconBg: "bg-[#147A60]",
    headerBg: "bg-gradient-to-r from-emerald-50 to-slate-50",
    numColor: "text-[#147A60]",
    activeTab: "border-[#147A60] text-[#147A60] bg-emerald-50",
    inactiveTab: "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-200",
  },
  {
    id: "l4",
    num: "3.",
    label: "L4 online",
    shortLabel: "L4 online",
    subtitle: "Wypełnij formularz, aby uzyskać zwolnienie lekarskie.",
    icon: FileText,
    iconBg: "bg-purple-600",
    headerBg: "bg-gradient-to-r from-purple-50 to-slate-50",
    numColor: "text-purple-600",
    activeTab: "border-purple-500 text-purple-600 bg-purple-50",
    inactiveTab: "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-200",
  },
  {
    id: "kontynuacja",
    num: "4.",
    label: "Kontynuacja leczenia",
    shortLabel: "Kontynuacja",
    subtitle: "Wypełnij formularz, aby kontynuować leczenie.",
    icon: RefreshCw,
    iconBg: "bg-orange-500",
    headerBg: "bg-gradient-to-r from-orange-50 to-slate-50",
    numColor: "text-orange-500",
    activeTab: "border-orange-500 text-orange-600 bg-orange-50",
    inactiveTab: "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-200",
  },
];

export default function ServiceFormsSection() {
  const [active, setActive] = useState(0);
  const svc = servicesData[active];
  const Icon = svc.icon;

  return (
    <section id="formularze" className="bg-[#F8FAFB] py-16 scroll-mt-20">
      <div className="w-full px-4 sm:px-8 xl:px-16">

        {/* Section heading */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 bg-[#EAF3F0] text-[#147A60] text-xs font-extrabold px-4 py-1.5 rounded-full mb-4 border border-[#D5EAE6]/50 tracking-wider">
            <Info className="w-3 h-3" />
            Formularze usług
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Wybierz usługę i wypełnij formularz
          </h2>
          <p className="text-slate-500 text-sm mt-2">Szybko, bezpiecznie i bez wychodzenia z domu.</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {servicesData.map((s, i) => {
            const TabIcon = s.icon;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 text-sm font-extrabold transition-all cursor-pointer ${i === active ? s.activeTab : s.inactiveTab}`}
              >
                <div className={`w-5 h-5 rounded-full ${i === active ? s.iconBg : "bg-slate-200"} flex items-center justify-center flex-shrink-0`}>
                  <TabIcon className="w-3 h-3 text-white" />
                </div>
                <span className="hidden sm:inline">{s.label}</span>
                <span className="sm:hidden">{s.shortLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Active form card */}
        <div className="bg-white rounded-[24px] border border-slate-100 shadow-[0_8px_40px_rgba(0,0,0,0.04)] overflow-hidden">

          {/* Form header */}
          <div className={`${svc.headerBg} px-6 py-5 border-b border-slate-100 flex items-center gap-4`}>
            <div className={`w-10 h-10 rounded-full ${svc.iconBg} flex items-center justify-center flex-shrink-0 shadow-sm`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className={`text-lg font-extrabold text-slate-900`}>
                <span className={svc.numColor}>{svc.num}</span> {svc.label.toUpperCase()}
              </h3>
              <p className="text-xs text-slate-500 font-semibold mt-0.5">{svc.subtitle}</p>
            </div>
          </div>

          {/* Form body */}
          <div className="p-6">
            {active === 0 && <KonsultacjaForm />}
            {active === 1 && <EReceptaForm />}
            {active === 2 && <L4Form />}
            {active === 3 && <KontynuacjaForm />}
          </div>
        </div>

      </div>
    </section>
  );
}
