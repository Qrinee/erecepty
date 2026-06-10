"use client";

import React, { useState } from "react";
import { User, ClipboardList, Calendar, ShieldCheck, Video, Phone, Loader2, UserCheck } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { validatePESEL } from "@/app/utils/pesel-validator";
import {
  API_URL,
  getServicePriceAndType,
  inputCls,
  textareaCls,
  inputErrorCls,
  labelCls,
  FormErrorAlert,
  SectionHeader,
  RadioGroup,
  ConsentCheckbox,
  SubmitBtn,
  FormNote,
  useAuthPrefill,
  DiscountSection
} from "./shared";

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
  const [discountCode, setDiscountCode] = useState("");
  const [finalAmount, setFinalAmount] = useState(0);

  // Scheduling & Specialization
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [consultationMethod, setConsultationMethod] = useState("video");
  const [specialization, setSpecialization] = useState("");
  const [slotsData, setSlotsData] = useState<any>(null);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const slotsTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const isLoggedIn = useAuthPrefill({ setFullName, setEmail, setPhone, setPesel });
  const searchParams = useSearchParams();
  const serviceParam = searchParams?.get("service");
  const { amount, type } = getServicePriceAndType(serviceParam, "Konsultacja lekarska");

  React.useEffect(() => {
    setFinalAmount(amount);
  }, [amount]);

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
          amount: finalAmount,
          discountCode: discountCode || undefined,
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
          <SectionHeader icon={ClipboardList} title="Opis problemu" color="bg-[#147A60]" />
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
          <SectionHeader icon={Calendar} title="Terminarz i Lekarz" color="bg-[#147A60]" />
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
                  <div className="p-3 bg-[#EAF3F0] border border-[#D5EAE6] rounded-lg">
                    {slotsData.doctorName ? (
                      <div className="mb-2">
                        <div className="flex items-center gap-2 text-sm font-bold text-slate-900"><UserCheck className="w-4 h-4 text-[#147A60]" /> {slotsData.doctorName}</div>
                        <div className="text-[10px] text-[#147A60] mt-0.5">{slotsData.doctorSpecializations?.join(", ")}</div>
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
                <label className={`flex-1 flex flex-col items-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-all ${consultationMethod === "video" ? "border-[#147A60] bg-[#EAF3F0] text-[#147A60]" : "border-slate-100 hover:border-slate-200"}`}>
                  <input type="radio" name="c_method" className="hidden" checked={consultationMethod === "video"} onChange={() => setConsultationMethod("video")} />
                  <Video className="w-5 h-5" />
                  <span className="text-[11px] font-bold">Wideo</span>
                </label>
                <label className={`flex-1 flex flex-col items-center gap-2 p-3 rounded-xl border-2 cursor-pointer transition-all ${consultationMethod === "audio" ? "border-[#147A60] bg-[#EAF3F0] text-[#147A60]" : "border-slate-100 hover:border-slate-200"}`}>
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
          <SectionHeader icon={ShieldCheck} title="Zgody" color="bg-[#147A60]" />
          <div className="space-y-3">
            <ConsentCheckbox id="k_c1" checked={consentTruth} onChange={v => {
              setConsentTruth(v);
              if (errors.consentTruth) setErrors(prev => { const n = {...prev}; delete n.consentTruth; return n; });
            }}>Oświadczam, że podane informacje są zgodne z prawdą <span className="text-red-500">*</span></ConsentCheckbox>
            {errors.consentTruth && <p className="text-xs text-red-500 font-medium mt-0.5">{errors.consentTruth}</p>}

            <ConsentCheckbox id="k_c2" checked={consentTerms} onChange={v => {
              setConsentTerms(v);
              if (errors.consentTerms) setErrors(prev => { const n = {...prev}; delete n.consentTerms; return n; });
            }}>Akceptuję <Link href="/regulamin" className="text-[#147A60] underline">regulamin i politykę prywatności</Link> <span className="text-red-500">*</span></ConsentCheckbox>
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

      <DiscountSection 
        baseAmount={amount} 
        onDiscountApplied={(code, newAmount) => {
          setDiscountCode(code);
          setFinalAmount(newAmount);
        }} 
      />

      <SubmitBtn label="PRZEJDŹ DO PŁATNOŚCI" color="bg-[#147A60] hover:bg-[#064743]" loading={loading} />
      <FormNote />
    </form>
  );
}
