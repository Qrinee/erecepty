"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MedicalConsultationForm from "@/components/medical/MedicalConsultationForm";
import ContactForm from "@/components/order/ContactForm";
import { MedicalConsultationData } from "@/app/types/medicine";
import { ArrowRight, ArrowLeft, CheckCircle, Shield, Clock, CreditCard, FileText, User, Phone, Mail, Calendar, Video, Sparkles } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

interface ContactFormData {
  email: string; firstName: string; lastName: string; pesel: string; phone: string;
  street: string; houseNumber: string; apartmentNumber: string; postalCode: string; city: string;
  createAccount: boolean; password?: string;
}

type Step = "medical" | "contact" | "summary";

function ConsultationPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const prefillDate = searchParams.get("date") || "";
  const prefillTime = searchParams.get("time") || "";
  const prefillMethod = (searchParams.get("method") as "video" | "audio") || "audio";
  const prefillService = searchParams.get("service") || "Wizyta lekarska ogólna";

  const [step, setStep] = useState<Step>("medical");
  const [medicalData, setMedicalData] = useState<MedicalConsultationData>({
    mainComplaint: "", hasChronicDiseases: null, chronicDiseases: "", takesMedications: null, medications: "",
    hasAllergies: null, allergies: "", otherMedicalInfo: "", pregnancyStatus: null,
    appointmentDate: prefillDate, appointmentTime: prefillTime, consultationMethod: prefillMethod, specialization: "",
  });
  const [contactData, setContactData] = useState<ContactFormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);
  const [selectedMedicines, setSelectedMedicines] = useState<{ medicineId: string; name: string; quantity: number; dosage: string }[]>([]);

  const showMedicineSearch = prefillService === "e-Recepta online";
  const hideScheduling = prefillService === "e-Recepta online" || prefillService === "L4 online";

  const handleMedicalSubmit = (data: MedicalConsultationData) => { setMedicalData(data); setStep("contact"); };
  const handleContactSubmit = (data: ContactFormData) => { setContactData(data); setStep("summary"); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const handleFinalSubmit = async () => {
    if (!contactData || !medicalData) return;
    setIsSubmitting(true); setSubmitError(null);
    try {
      const payload = {
        patient: { email: contactData.email, firstName: contactData.firstName, lastName: contactData.lastName, pesel: contactData.pesel, phone: contactData.phone, street: contactData.street || "", houseNumber: contactData.houseNumber || "", apartmentNumber: contactData.apartmentNumber || "", postalCode: contactData.postalCode || "", city: contactData.city || "" },
        medicalInfo: { 
          mainComplaint: medicalData.mainComplaint, 
          hasChronicDiseases: medicalData.hasChronicDiseases || "no", 
          chronicDiseases: medicalData.chronicDiseases || "", 
          takesMedications: medicalData.takesMedications || "no", 
          medications: medicalData.medications || "", 
          hasAllergies: medicalData.hasAllergies || "no", 
          allergies: medicalData.allergies || "", 
          otherMedicalInfo: medicalData.otherMedicalInfo || "", 
          pregnancyStatus: medicalData.pregnancyStatus || "na",
          doctorChoosesMeds: medicalData.doctorChoosesMeds || false,
          doctorChoosesMedsDescription: medicalData.doctorChoosesMedsDescription || ""
        },
        medicines: selectedMedicines.map(m => ({ medicineId: m.medicineId, quantity: m.quantity, dosage: m.dosage })),
        amount: 8900,
        appointmentDate: medicalData.appointmentDate || null,
        appointmentTime: medicalData.appointmentTime || null,
        consultationMethod: medicalData.consultationMethod || null,
        specialization: medicalData.specialization || null,
        serviceType: prefillService,
      };
      const res = await fetch(`${API_URL}/api/patient/submissions`, { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "include", body: JSON.stringify(payload) });
      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.message || "Błąd podczas składania zamówienia");
      if (result.data?.payment?.paymentUrl) setPaymentUrl(result.data.payment.paymentUrl);
      else router.push(`/orders?success=true&id=${result.data.submissionId}`);
    } catch (err: any) { setSubmitError(err.message || "Wystąpił nieoczekiwany błąd"); }
    finally { setIsSubmitting(false); }
  };

  const stepsList = [
    { id: "medical" as Step, label: "Wywiad medyczny", icon: FileText },
    { id: "contact" as Step, label: "Dane kontaktowe", icon: User },
    { id: "summary" as Step, label: "Podsumowanie", icon: CheckCircle },
  ];
  const currentStepIndex = stepsList.findIndex(s => s.id === step);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="mx-auto max-w-3xl px-4 pb-8 pt-28 lg:pt-32">
        {prefillService && step === "medical" && (
          <div className="bg-[#DAE9E6] rounded-2xl p-5 mb-6 flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2"><Sparkles className="w-5 h-5 text-[#064743]" /><span className="font-semibold text-[#064743]">{prefillService}</span></div>
            {prefillDate && <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#064743]" /><span className="text-[#1A5D54]">{prefillDate}</span></div>}
            {prefillTime && <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#064743]" /><span className="text-[#1A5D54]">{prefillTime}</span></div>}
            <div className="flex items-center gap-2">{prefillMethod === "video" ? <Video className="w-4 h-4 text-[#064743]" /> : <Phone className="w-4 h-4 text-[#064743]" />}<span className="text-[#1A5D54]">{prefillMethod === "video" ? "Wideo" : "Audio"}</span></div>
            <span className="text-xs text-[#064743]/60 ml-auto">Dane z formularza na stronie głównej</span>
          </div>
        )}
        <div className="mb-8"><div className="flex items-center justify-between mb-4">{stepsList.map((s, i) => { const Icon = s.icon; const isActive = i === currentStepIndex; const isCompleted = i < currentStepIndex; return (<div key={s.id} className="flex items-center gap-2"><div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${isActive ? "bg-[#064743] text-white shadow-lg shadow-[#064743]/25" : isCompleted ? "bg-[#DAE9E6] text-[#064743]" : "bg-white text-gray-400 border border-gray-200"}`}><Icon className="w-4 h-4" /><span className="hidden sm:inline">{s.label}</span></div>{i < stepsList.length - 1 && <div className={`w-8 h-0.5 rounded ${i < currentStepIndex ? "bg-[#064743]" : "bg-gray-200"}`} />}</div>); })}</div></div>

        {step === "medical" && (
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
            <div className="mb-6"><h2 className="text-2xl font-bold text-slate-900">Krok 1: Wywiad medyczny</h2><p className="text-slate-500 mt-1">Wypełnij formularz medyczny – to pomoże lekarzowi w postawieniu diagnozy.</p></div>
            <MedicalConsultationForm
              onSubmit={handleMedicalSubmit}
              onCancel={() => router.push("/")}
              isOpen={true}
              initialData={medicalData}
              showMedicineSearch={showMedicineSearch}
              hideScheduling={hideScheduling}
              onMedicinesChange={setSelectedMedicines}
            />
          </div>
        )}

        {step === "contact" && (
          <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6"><div><h2 className="text-2xl font-bold text-slate-900">Krok 2: Dane kontaktowe</h2><p className="text-slate-500 mt-1">Podaj swoje dane, abyśmy mogli wystawić dokumenty.</p></div><button onClick={() => setStep("medical")} className="flex items-center gap-1 text-sm text-[#064743] hover:underline"><ArrowLeft className="w-4 h-4" />Wróć</button></div>
            <ContactForm onSubmit={handleContactSubmit} onCancel={() => setStep("medical")} />
          </div>
        )}

        {step === "summary" && contactData && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6"><h2 className="text-2xl font-bold text-slate-900">Krok 3: Podsumowanie</h2><button onClick={() => setStep("contact")} className="flex items-center gap-1 text-sm text-[#064743] hover:underline"><ArrowLeft className="w-4 h-4" />Edytuj dane</button></div>
              <div className="bg-gray-50 rounded-xl p-5 mb-4"><h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2"><User className="w-4 h-4 text-[#064743]" />Dane pacjenta</h3><div className="grid sm:grid-cols-2 gap-2 text-sm"><p><span className="text-gray-500">Imię i nazwisko:</span> <span className="font-medium">{contactData.firstName} {contactData.lastName}</span></p><p><span className="text-gray-500">PESEL:</span> <span className="font-medium">{contactData.pesel}</span></p><p className="flex items-center gap-1"><Mail className="w-3 h-3 text-gray-400" /> <span className="font-medium">{contactData.email}</span></p><p className="flex items-center gap-1"><Phone className="w-3 h-3 text-gray-400" /> <span className="font-medium">{contactData.phone}</span></p></div></div>
              <div className="bg-gray-50 rounded-xl p-5 mb-4"><h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2"><FileText className="w-4 h-4 text-[#064743]" />Wywiad medyczny</h3><p className="text-sm text-slate-700 mb-2"><span className="text-gray-500">Główna dolegliwość:</span> <span className="font-medium">{medicalData.mainComplaint}</span></p>{medicalData.specialization && <p className="text-sm text-slate-700 mb-2"><span className="text-gray-500">Specjalizacja lekarza:</span> <span className="font-medium">{medicalData.specialization}</span></p>}<p className="text-sm text-slate-700"><span className="text-gray-500">Status ciąży:</span> <span className="font-medium">{medicalData.pregnancyStatus === "pregnant" ? "W ciąży" : medicalData.pregnancyStatus === "breastfeeding" ? "Karmi piersią" : "Nie dotyczy"}</span></p></div>
              {selectedMedicines.length > 0 ? (
                <div className="bg-blue-50 rounded-xl p-5 mb-4 border border-blue-200"><h3 className="font-semibold text-blue-900 mb-2">Zamówione leki</h3><div className="space-y-1 text-sm">{selectedMedicines.map((m,i)=><div key={i} className="flex justify-between"><span className="font-medium">{m.name}</span><span className="text-gray-500">x{m.quantity} {m.dosage}</span></div>)}</div></div>
              ) : medicalData.doctorChoosesMeds ? (
                <div className="bg-emerald-50 rounded-xl p-5 mb-4 border border-emerald-200"><h3 className="font-semibold text-emerald-950 mb-2">Wybrana opcja</h3><p className="text-sm text-emerald-800 font-medium">Leki zostaną dobrane przez lekarza na podstawie opisu Twoich objawów.</p></div>
              ) : null}
              {(medicalData.appointmentDate || medicalData.appointmentTime || medicalData.consultationMethod) && (
                <div className="bg-[#DAE9E6] rounded-xl p-5 mb-4"><h3 className="font-semibold text-[#064743] mb-3 flex items-center gap-2"><Calendar className="w-4 h-4" />Termin konsultacji</h3><div className="flex flex-wrap gap-3 text-sm">{medicalData.appointmentDate && <span className="bg-white rounded-lg px-3 py-1.5 shadow-sm font-medium text-[#064743]">📅 {medicalData.appointmentDate}</span>}{medicalData.appointmentTime && <span className="bg-white rounded-lg px-3 py-1.5 shadow-sm font-medium text-[#064743]">🕐 {medicalData.appointmentTime}</span>}{medicalData.consultationMethod && <span className="bg-white rounded-lg px-3 py-1.5 shadow-sm font-medium text-[#064743]">{medicalData.consultationMethod === "video" ? "📹 Wideo" : "📞 Audio"}</span>}</div></div>
              )}
              <div className="border-t border-gray-100 pt-4 mt-4"><div className="flex items-center justify-between mb-2"><span className="text-gray-600">Konsultacja lekarska</span><span className="font-medium">89,00 zł</span></div><div className="flex items-center justify-between text-lg font-bold"><span>Do zapłaty</span><span className="text-[#064743]">89,00 zł</span></div></div>
              {submitError && <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm">{submitError}</div>}
              {paymentUrl ? (
                <div className="mt-6 text-center"><p className="text-green-600 font-medium mb-4 flex items-center justify-center gap-2"><CheckCircle className="w-5 h-5" />Zgłoszenie utworzone! Przekierowujemy do płatności...</p><a href={paymentUrl} className="inline-flex items-center gap-2 bg-[#064743] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-[#1A5D54] transition shadow-lg shadow-[#064743]/25"><CreditCard className="w-5 h-5" />Przejdź do płatności</a></div>
              ) : (
                <button onClick={handleFinalSubmit} disabled={isSubmitting} className="mt-6 w-full bg-[#064743] text-white font-bold py-3.5 rounded-xl hover:bg-[#1A5D54] transition-all shadow-lg shadow-[#064743]/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">{isSubmitting ? <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Przetwarzanie...</> : <><CreditCard className="w-5 h-5" />Zapłać 89 zł i potwierdź</>}</button>
              )}
              <p className="flex items-center justify-center gap-1.5 text-center text-sm text-slate-500 mt-3"><Shield className="w-3.5 h-3.5" />Bezpieczna płatność Stripe • RODO</p>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default function ConsultationPage() {
  return <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="w-8 h-8 border-4 border-[#DAE9E6] border-t-[#064743] rounded-full animate-spin" /></div>}><ConsultationPageInner /></Suspense>;
}