"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

interface SubmissionDetail {
  id: string;
  submissionType: "prescription" | "medical_leave";
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

        {submission.submissionType === "prescription" && (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">
                Wywiad medyczny
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">Główna dolegliwość</p>
                <p className="p-3 bg-gray-50 rounded-lg">
                  {medical.mainComplaint || "Brak"}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Choroby przewlekłe</p>
                <div className="p-3 bg-gray-50 rounded-lg">
                  {medical.hasChronicDiseases === "yes"
                    ? medical.chronicDiseases || "Brak szczegółów"
                    : "Brak"}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Przyjmowane leki</p>
                <div className="p-3 bg-gray-50 rounded-lg">
                  {medical.takesMedications === "yes"
                    ? medical.medications || "Brak szczegółów"
                    : "Brak"}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Alergie</p>
                <div className="p-3 bg-gray-50 rounded-lg">
                  {medical.hasAllergies === "yes"
                    ? medical.allergies || "Brak szczegółów"
                    : "Brak"}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Inne informacje</p>
                <div className="p-3 bg-gray-50 rounded-lg">
                  {medical.otherMedicalInfo || "Brak"}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Ciąża/karmienie</p>
                <div className="p-3 bg-gray-50 rounded-lg">
                  {medical.pregnancyStatus === "pregnant"
                    ? "W ciąży"
                    : medical.pregnancyStatus === "breastfeeding"
                    ? "Karmi piersią"
                    : "Nie dotyczy"}
                </div>
              </div>
            </div>
          </div>
        )}

        {submission.submissionType === "medical_leave" && submission.leaveDetails && (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">
                Szczegóły zwolnienia lekarskiego
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Rozpoznanie (diagnoza)</p>
                  <p className="p-3 bg-gray-50 rounded-lg font-medium">
                    {submission.leaveDetails.diagnosis || "Brak"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Kod ICD-10</p>
                  <p className="p-3 bg-gray-50 rounded-lg font-medium font-mono">
                    {submission.leaveDetails.icd10Code || "Brak"}
                  </p>
                </div>
              </div>
              {submission.leaveDetails.diagnosisDescription && (
                <div>
                  <p className="text-sm text-gray-500 mb-1">Opis rozpoznania</p>
                  <p className="p-3 bg-gray-50 rounded-lg whitespace-pre-wrap">
                    {submission.leaveDetails.diagnosisDescription}
                  </p>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Od dnia</p>
                  <p className="p-3 bg-gray-50 rounded-lg font-medium">
                    {submission.leaveDetails.leaveStartDate
                      ? new Date(submission.leaveDetails.leaveStartDate).toLocaleDateString("pl-PL")
                      : "Brak"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Do dnia</p>
                  <p className="p-3 bg-gray-50 rounded-lg font-medium">
                    {submission.leaveDetails.leaveEndDate
                      ? new Date(submission.leaveDetails.leaveEndDate).toLocaleDateString("pl-PL")
                      : "Brak"}
                  </p>
                </div>
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