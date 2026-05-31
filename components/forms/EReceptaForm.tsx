"use client";

import React, { useState } from "react";
import { User, Pill, ShieldCheck, Loader2, Search, Trash2 } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { validatePESEL } from "@/app/utils/pesel-validator";
import {
  API_URL,
  getServicePriceAndType,
  inputCls,
  inputErrorCls,
  textareaCls,
  textareaErrorCls,
  labelCls,
  FormErrorAlert,
  SectionHeader,
  RadioGroup,
  ConsentCheckbox,
  SubmitBtn,
  FormNote,
  useAuthPrefill
} from "./shared";

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
  const [doctorChoosesMeds, setDoctorChoosesMeds] = useState(false);
  const [symptomsDescription, setSymptomsDescription] = useState("");

  const isLoggedIn = useAuthPrefill({ setFullName, setEmail, setPhone, setPesel });
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
    if (!doctorChoosesMeds && selectedMeds.length === 0) {
      newErrors.selectedMeds = "Musisz wyszukać i wybrać co najmniej jeden lek.";
    }
    
    // Validate symptomsDescription if doctorChoosesMeds is true
    if (doctorChoosesMeds && !symptomsDescription.trim()) {
      newErrors.symptomsDescription = "Opisz swoje objawy lub dolegliwości, aby lekarz mógł dobrać odpowiednie leki.";
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
            doctorChoosesMeds,
            doctorChoosesMedsDescription: doctorChoosesMeds ? symptomsDescription : "",
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
          <SectionHeader icon={User} title="Dane pacjenta" color="bg-[#E11D48]" />
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
          <SectionHeader icon={Pill} title="Informacje do recepty" color="bg-[#E11D48]" />
          
          <div className="bg-white border border-slate-200 rounded-xl p-4 mb-4">
            <ConsentCheckbox id="doctor_chooses_meds" checked={doctorChoosesMeds} onChange={(v) => {
              setDoctorChoosesMeds(v);
              if (v) {
                setSelectedMeds([]);
              }
              if (errors.selectedMeds) setErrors(prev => { const n = {...prev}; delete n.selectedMeds; return n; });
              if (errors.symptomsDescription) setErrors(prev => { const n = {...prev}; delete n.symptomsDescription; return n; });
            }}>
              <span className="font-bold text-slate-700">Chcę, aby to lekarz dobrał odpowiednie leki na podstawie moich objawów</span>
            </ConsentCheckbox>
          </div>

          {!doctorChoosesMeds ? (
            <div className={`${errors.selectedMeds ? "bg-red-50/30 border border-red-200" : "bg-[#FFF1F2]/50 border border-[#E11D48]/20"} rounded-xl p-4 relative mb-4`}>
              <label className={labelCls}>Wyszukaj lek po nazwie <span className="text-red-500">*</span></label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="text" className={`${inputCls} pl-10 bg-white`} placeholder="Wpisz nazwę leku, np. Ibuprom..." value={medQ} onChange={e => setMedQ(e.target.value)} autoComplete="off" />
                {medSearching && <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 animate-spin text-slate-400" />}
                {medResults.length > 0 && (
                  <div className="absolute z-50 left-0 right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                    {medResults.map((p: any) => (
                      <button key={p.id || p._id} type="button" onClick={() => addMed(p)} className="w-full text-left px-4 py-3 text-sm hover:bg-[#FFF1F2] border-b border-slate-50 transition-colors">
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
          ) : (
            <div className={`${errors.symptomsDescription ? "bg-red-50/30 border border-red-200" : "bg-[#FFF1F2]/50 border border-[#E11D48]/20"} rounded-xl p-4 relative mb-4`}>
              <label className={labelCls}>Opis objawów / dolegliwości <span className="text-red-500">*</span></label>
              <textarea 
                className={errors.symptomsDescription ? textareaErrorCls : textareaCls} 
                rows={4}
                placeholder="Opisz krótko swoje dolegliwości, objawy lub jakie leki są Ci potrzebne, aby lekarz mógł dokonać odpowiedniego wyboru..." 
                value={symptomsDescription} 
                onChange={e => {
                  setSymptomsDescription(e.target.value);
                  if (errors.symptomsDescription) setErrors(prev => { const n = {...prev}; delete n.symptomsDescription; return n; });
                }} 
              />
              {errors.symptomsDescription && <p className="text-xs text-red-500 font-medium mt-2">{errors.symptomsDescription}</p>}
            </div>
          )}

          <div className="space-y-3">
            <div>
              <label className={labelCls}>Czy leki były wcześniej stosowane?</label>
              <RadioGroup name="r_used" options={["Tak", "Nie"]} value={usedBefore} onChange={setUsedBefore} />
            </div>
          </div>
        </div>

        {/* Col 3: Zgody */}
        <div>
          <SectionHeader icon={ShieldCheck} title="Zgody" color="bg-[#E11D48]" />
          <div className="space-y-3">
            <ConsentCheckbox id="r_c1" checked={consentTruth} onChange={v => {
              setConsentTruth(v);
              if (errors.consentTruth) setErrors(prev => { const n = {...prev}; delete n.consentTruth; return n; });
            }}>Oświadczam, że podane informacje są zgodne z prawdą <span className="text-red-500">*</span></ConsentCheckbox>
            {errors.consentTruth && <p className="text-xs text-red-500 font-medium mt-0.5">{errors.consentTruth}</p>}

            <ConsentCheckbox id="r_c2" checked={consentTerms} onChange={v => {
              setConsentTerms(v);
              if (errors.consentTerms) setErrors(prev => { const n = {...prev}; delete n.consentTerms; return n; });
            }}>Akceptuję <Link href="/regulamin" className="text-[#E11D48] underline">regulamin i politykę prywatności</Link> <span className="text-red-500">*</span></ConsentCheckbox>
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

      <SubmitBtn label="PRZEJDŹ DO PŁATNOŚCI" color="bg-[#E11D48] hover:bg-[#BE123C]" loading={loading} />
      <FormNote />
    </form>
  );
}
