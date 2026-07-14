"use client";

import React, { useState } from "react";
import { User, Building2, Heart, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { validatePESEL } from "@/app/utils/pesel-validator";
import {
  API_URL,
  getServicePriceAndType,
  inputCls,
  textareaCls,
  inputErrorCls,
  textareaErrorCls,
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
  const [discountCode, setDiscountCode] = useState("");
  const [finalAmount, setFinalAmount] = useState(0);

  const isLoggedIn = useAuthPrefill({ setFullName, setEmail, setPhone, setPesel });
  const searchParams = useSearchParams();
  const serviceParam = searchParams?.get("service");
  const { amount, type } = getServicePriceAndType(serviceParam, "L4 online");

  React.useEffect(() => {
    setFinalAmount(amount);
  }, [amount]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    
    const newErrors: Record<string, string> = {};
    
    
    const nameParts = fullName.trim().split(/\s+/);
    if (!fullName.trim()) {
      newErrors.fullName = "Imię i nazwisko są wymagane.";
    } else if (nameParts.length < 2) {
      newErrors.fullName = "Imię i nazwisko musi zawierać co najmniej dwa wyrazy.";
    }
    
    
    if (!pesel) {
      newErrors.pesel = "PESEL jest wymagany.";
    } else {
      const peselVal = validatePESEL(pesel);
      if (!peselVal.valid) {
        newErrors.pesel = peselVal.errors[0] || "Nieprawidłowy numer PESEL.";
      }
    }
    
    
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
    
    
    const cleanPhone = phone.replace(/\s+/g, "");
    if (!cleanPhone) {
      newErrors.phone = "Numer telefonu jest wymagany.";
    } else if (!/^\+?[0-9]{9,15}$/.test(cleanPhone)) {
      newErrors.phone = "Numer telefonu musi zawierać od 9 do 15 cyfr.";
    }
    
    
    if (!email) {
      newErrors.email = "Adres e-mail jest wymagany.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Adres e-mail jest nieprawidłowy.";
    }
    
    
    if (!symptoms.trim()) {
      newErrors.symptoms = "Opis objawów jest wymagany.";
    }
    
    
    const days = parseInt(daysNeeded);
    if (!daysNeeded) {
      newErrors.daysNeeded = "Liczba dni zwolnienia jest wymagana.";
    } else if (isNaN(days) || days < 1 || days > 182) {
      newErrors.daysNeeded = "Liczba dni musi być wartością od 1 do 182.";
    }
    
    
    if (!consentTruth) {
      newErrors.consentTruth = "Musisz oświadczyć zgodność danych z prawdą.";
    }
    if (!consentTerms) {
      newErrors.consentTerms = "Musisz zaakceptować regulamin i politykę prywatności.";
    }
    if (!consentDoctor) {
      newErrors.consentDoctor = "Musisz potwierdzić zrozumienie, że o wystawieniu L4 decyduje lekarz.";
    }
    
    
    if (createAccount && (!accountPassword || accountPassword.length < 6)) {
      newErrors.accountPassword = "Hasło musi mieć co najmniej 6 znaków.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      
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
        {}
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

        {}
        <div>
          <SectionHeader icon={Building2} title="Dane pracodawcy" color="bg-purple-600" />
          <div className="space-y-3">
            <div><label className={labelCls}>Nazwa pracodawcy</label><input className={inputCls} placeholder="Wpisz nazwę pracodawcy" value={employerName} onChange={e => setEmployerName(e.target.value)} /></div>
            <div><label className={labelCls}>NIP pracodawcy <span className="text-slate-400 font-normal">(opcjonalny)</span></label><input className={inputCls} placeholder="Wpisz NIP" value={employerNIP} onChange={e => setEmployerNIP(e.target.value)} /></div>
          </div>
        </div>

        {}
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

        {}
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

      <DiscountSection 
        baseAmount={amount} 
        onDiscountApplied={(code, newAmount) => {
          setDiscountCode(code);
          setFinalAmount(newAmount);
        }} 
      />

      <SubmitBtn label="PRZEJDŹ DO PŁATNOŚCI" color="bg-purple-700 hover:bg-purple-800" loading={loading} />
      <FormNote />
    </form>
  );
}
