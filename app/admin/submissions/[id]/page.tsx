"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

interface SubmissionDetail {
  id: string;
  submissionType: "prescription" | "medical_leave" | "consultation" | "treatment_continuation";
  status: "pending" | "reviewed" | "completed" | "cancelled";
  submittedAt: string;
  submissionDate: string;
  medicines: {
    medicineId: string;
    medicineName?: string;
    quantity: number;
    dosage: string;
  }[];
  leaveDetails?: {
    leaveStartDate?: string;
    leaveEndDate?: string;
    leaveReason?: string;
    diagnosis?: string;
    diagnosisDescription?: string;
    icd10Code?: string;
    isHospitalized?: boolean;
    hospitalName?: string;
    additionalNotes?: string;
    followUpVisit?: boolean;
    followUpDate?: string;
  };
  patient: {
    contact: {
      email: string;
      firstName: string;
      lastName: string;
      pesel: string;
      phone: string;
      street: string;
      houseNumber: string;
      apartmentNumber?: string;
      postalCode: string;
      city: string;
    };
    medical: {
      mainComplaint: string;
      hasChronicDiseases: string;
      chronicDiseases?: string | null;
      takesMedications: string;
      medications?: string | null;
      hasAllergies: string;
      allergies?: string | null;
      otherMedicalInfo?: string;
      pregnancyStatus: string;
    };
    consent: {
      rodoConsent: boolean;
      medicalConsent: boolean;
      newsletterConsent: boolean;
      createAccount: boolean;
    };
  };
  medicalInfo: {
    mainComplaint: string;
    hasChronicDiseases: boolean;
    chronicDiseases?: string;
    takesMedications: boolean;
    medications?: string;
    hasAllergies: boolean;
    allergies?: string;
    otherMedicalInfo?: string;
    pregnancyStatus: 'tak' | 'nie';
  } | null;
  appointmentDate?: string | null;
  appointmentTime?: string | null;
  consultationMethod?: string | null;
  adminNotes?: string;
  reviewedAt?: string;
  assignedAdminId?: string;
  specialization?: string | null;
  referralToPool?: boolean;
  pooledAt?: string | null;
}

function getStatusBadgeClass(status: string): string {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-800";
    case "reviewed":
      return "bg-blue-100 text-blue-800";
    case "completed":
      return "bg-green-100 text-green-800";
    case "cancelled":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

function getStatusLabel(status: string): string {
  switch (status) {
    case "pending":
      return "Oczekujące";
    case "reviewed":
      return "Przeglądane";
    case "completed":
      return "Zakończone";
    case "cancelled":
      return "Anulowane";
    default:
      return status;
  }
}

export default function SubmissionDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const [submission, setSubmission] = useState<SubmissionDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    fetch(`${API_URL}/api/patient/submissions/${id}`, {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Zgłoszenie nie znalezione");
        return res.json();
      })
      .then((data) => {
        if (data.success && data.data) {
          setSubmission(data.data);
        } else {
          setError("Zgłoszenie nie znalezione");
        }
      })
      .catch((err) => {
        setError(err.message || "Zgłoszenie nie znalezione");
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#DAE9E6] border-t-[#064743] rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !submission) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {error || "Zgłoszenie nie znalezione"}
          </h1>
          <Link href="/admin" className="text-[#064743] hover:underline">
            Wróć do panelu
          </Link>
        </div>
      </div>
    );
  }

  const { patient, medicalInfo } = submission;
  const contact = patient?.contact || {};
  const medical = patient?.medical || medicalInfo || {};
  const consent = patient?.consent || {
    rodoConsent: true,
    medicalConsent: true,
    newsletterConsent: false,
    createAccount: false,
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-25">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/admin" className="text-[#064743] hover:underline text-sm">
            ← Wróć do panelu
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
          <div className="px-6 py-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold text-gray-900">
                  {submission.submissionType === "medical_leave" ? "Zgłoszenie zwolnienia lekarskiego" : "Zgłoszenie konsultacji"}
                </h1>
                <p className="text-sm text-gray-500 font-mono mt-1">
                  ID: {submission.id}
                </p>
                {submission.specialization && (
                  <p className="text-sm text-gray-500 mt-1">
                    Specjalizacja: {submission.specialization}
                  </p>
                )}
              </div>
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusBadgeClass(submission.status)}`}
              >
                {getStatusLabel(submission.status)}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Data zgłoszenia:{" "}
              {new Date(submission.submittedAt).toLocaleString("pl-PL")}
            </p>
            {submission.referralToPool && (
              <div className="mt-2 p-2 bg-orange-50 text-orange-700 rounded text-xs">
                To zgłoszenie znajduje się w koszyku ogólnym (zwolnione lub bez reakcji 1h).
              </div>
            )}
            {submission.appointmentDate && (
              <div className="mt-3 p-3 bg-[#DAE9E6] rounded-lg flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">📅</span>
                  <span className="font-medium text-[#064743]">
                    {new Date(submission.appointmentDate).toLocaleDateString("pl-PL", { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">🕐</span>
                  <span className="font-medium text-[#064743]">{submission.appointmentTime || "—"}</span>
                </div>
                {submission.consultationMethod && (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">{submission.consultationMethod === 'video' ? '📹' : '📞'}</span>
                    <span className="font-medium text-[#064743]">
                      {submission.consultationMethod === 'video' ? 'Wideo' : 'Audio'}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">
              Dane pacjenta
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Imię</p>
                <p className="font-medium">{contact.firstName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Nazwisko</p>
                <p className="font-medium">{contact.lastName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">PESEL</p>
                <p className="font-medium">{contact.pesel}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">E-mail</p>
                <p className="font-medium">{contact.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Telefon</p>
                <p className="font-medium">{contact.phone}</p>
              </div>
            </div>
          </div>
        </div>

        {submission.submissionType === "prescription" || submission.submissionType === "consultation" || submission.submissionType === "treatment_continuation" ? (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">
                Wywiad medyczny / Szczegóły
              </h2>
            </div>
            <div className="p-6 space-y-4">
              {Object.keys(medical).length === 0 ? (
                <p className="text-gray-500">Brak danych medycznych</p>
              ) : (
                Object.entries(medical).map(([key, value]) => {
                  if (key === 'medicinesExtra') return null; // We display medicines separately
                  
                  // Translate some known keys for better display
                  let label = key;
                  if (key === 'symptoms') label = 'Objawy';
                  else if (key === 'symptomsFrom') label = 'Od kiedy występują objawy';
                  else if (key === 'takingMedications') label = 'Czy przyjmuje leki';
                  else if (key === 'medicationsName') label = 'Nazwy leków';
                  else if (key === 'hasChronicDisease') label = 'Czy choruje przewlekle';
                  else if (key === 'chronicDiseaseDetails') label = 'Szczegóły chorób';
                  else if (key === 'treatmentContinue') label = 'Kontynuowane leczenie';
                  else if (key === 'treatmentFrom') label = 'Leczenie od';
                  else if (key === 'hasSideEffects') label = 'Skutki uboczne';
                  else if (key === 'sideEffectsDesc') label = 'Opis skutków ubocznych';
                  else if (key === 'healthChanged') label = 'Zmiana stanu zdrowia';
                  else if (key === 'healthChangedDesc') label = 'Opis zmian w zdrowiu';
                  else if (key === 'usedBefore') label = 'Lek stosowany wcześniej';
                  else if (key === 'mainComplaint') label = 'Główna dolegliwość';
                  else if (key === 'pregnancyStatus') label = 'Ciąża/Karmienie';
                  
                  let displayValue = String(value);
                  if (typeof value === 'boolean') displayValue = value ? "Tak" : "Nie";
                  if (value === null || value === undefined || value === '') displayValue = "Brak / Nie dotyczy";

                  return (
                    <div key={key}>
                      <p className="text-sm text-gray-500 mb-1">{label}</p>
                      <p className="p-3 bg-gray-50 rounded-lg">{displayValue}</p>
                    </div>
                  );
                })
              )}
            </div>
            {submission.medicines && submission.medicines.length > 0 && (
              <div className="p-6 border-t border-gray-100">
                <h3 className="text-md font-semibold text-gray-900 mb-3">Wnioskowane leki</h3>
                <div className="space-y-3">
                  {submission.medicines.map((m, idx) => {
                    const extra = Array.isArray((medical as any).medicinesExtra) ? (medical as any).medicinesExtra.find((x: any) => x.name === m.medicineName) : null;
                    return (
                      <div key={idx} className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
                        <div className="font-bold text-blue-900 mb-1">{m.medicineName || 'Nieznany lek'}</div>
                        <div className="text-sm text-blue-800">
                          Ilość opakowań: <strong>{m.quantity}</strong>
                          {m.dosage && <span> | Dawka: <strong>{m.dosage}</strong></span>}
                          {extra?.goal && <div className="mt-2 text-xs italic">Cel stosowania: {extra.goal}</div>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ) : null}

        {submission.submissionType === "medical_leave" && submission.leaveDetails && (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">
                Szczegóły zwolnienia lekarskiego
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(submission.leaveDetails).map(([key, value]) => {
                  // Skip these as they are duplicated or handled elsewhere
                  if (key === 'normalizedMedical' || key === 'isHospitalizedFlag') return null;

                  let label = key;
                  if (key === 'diagnosis') label = 'Rozpoznanie (diagnoza)';
                  else if (key === 'icd10Code') label = 'Kod ICD-10';
                  else if (key === 'diagnosisDescription') label = 'Opis rozpoznania';
                  else if (key === 'leaveStartDate') label = 'Od dnia';
                  else if (key === 'leaveEndDate') label = 'Do dnia';
                  else if (key === 'symptoms') label = 'Objawy';
                  else if (key === 'symptomsFrom') label = 'Od kiedy występują objawy';
                  else if (key === 'employerName') label = 'Nazwa pracodawcy';
                  else if (key === 'employerNIP') label = 'NIP pracodawcy';
                  else if (key === 'ableToWork') label = 'Czy jest zdolny(a) do pracy?';
                  else if (key === 'daysNeeded') label = 'Wnioskowana liczba dni L4';
                  else if (key === 'isHospitalized') label = 'Pobyt w szpitalu';
                  else if (key === 'hospitalName') label = 'Nazwa szpitala';
                  else if (key === 'additionalNotes') label = 'Dodatkowe notatki';
                  else if (key === 'leaveReason') label = 'Powód zwolnienia';
                  else if (key === 'followUpVisit') label = 'Wizyta kontrolna';
                  else if (key === 'followUpDate') label = 'Data wizyty kontrolnej';

                  let displayValue = String(value);
                  if (typeof value === 'boolean') displayValue = value ? "Tak" : "Nie";
                  if (value === null || value === undefined || value === '') displayValue = "Brak";
                  if (key.includes('Date') && value && value !== "Brak") {
                    try { displayValue = new Date(String(value)).toLocaleDateString("pl-PL"); } catch {}
                  }

                  return (
                    <div key={key} className={key === 'diagnosisDescription' || key === 'symptoms' ? "md:col-span-2" : ""}>
                      <p className="text-sm text-gray-500 mb-1">{label}</p>
                      <p className="p-3 bg-gray-50 rounded-lg font-medium whitespace-pre-wrap">
                        {displayValue}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">Notatki lekarza</h2>
          </div>
          <div className="p-6">
            <div className="bg-gray-50 rounded-lg p-4 min-h-[6.25rem]">
              <p className="text-gray-700">
                {submission.adminNotes || "Brak notatek"}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">Zgody</h2>
          </div>
          <div className="p-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className={`w-5 h-5 rounded flex items-center justify-center text-xs ${consent.rodoConsent ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                  {consent.rodoConsent ? "✓" : "✗"}
                </span>
                <span>RODO - zgoda na przetwarzanie danych</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`w-5 h-5 rounded flex items-center justify-center text-xs ${consent.medicalConsent ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
                  {consent.medicalConsent ? "✓" : "✗"}
                </span>
                <span>Oświadczenie o prawdziwości danych</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Link
            href="/admin"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#064743] text-white rounded-lg hover:bg-[#1A5D54] transition-colors font-medium text-center"
          >
            ← Powrót do panelu
          </Link>
        </div>
      </div>
    </div>
  );
}