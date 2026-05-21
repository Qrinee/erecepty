"use client";

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import MedicalLeaveForm from '@/components/medical/MedicalLeaveForm';
import { MedicalLeaveData } from '@/app/types/medicine';
import Header from '@/components/Header';

function MedicalLeavePageInner() {
  const searchParams = useSearchParams();
  const prefillLeaveStart = searchParams.get('leaveStart') || '';
  const prefillLeaveEnd = searchParams.get('leaveEnd') || '';

  const [submittedData, setSubmittedData] = useState<MedicalLeaveData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (data: MedicalLeaveData) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/patient/medical-leave`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          medicalInfo: {
            diagnosis: data.diagnosis,
            icd10Code: data.icd10Code,
            diagnosisDescription: data.diagnosisDescription,
            leaveReason: data.leaveReason,
            leaveStartDate: data.leaveStartDate,
            leaveEndDate: data.leaveEndDate,
            isHospitalized: data.isHospitalized,
            hospitalName: data.hospitalName ?? null,
            additionalNotes: data.additionalNotes,
            followUpVisit: data.followUpVisit,
            followUpDate: data.followUpDate ?? null,
          },
          patient: {
            firstName: data.patientFirstName,
            lastName: data.patientLastName,
            pesel: data.patientPesel,
            email: data.patientEmail,
            phone: data.patientPhone,
            street: data.patientAddress,
            postalCode: data.patientPostalCode,
            city: data.patientCity,
          },
        }),
        credentials: 'include',
      });
      if (!response.ok) throw new Error('Nie udało się wysłać zwolnienia.');
      const result = await response.json();
      if (result.success && result.data?.payment?.paymentUrl) {
        window.location.href = result.data.payment.paymentUrl;
        return;
      }
      setSubmittedData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Wystąpił błąd');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {};

  if (submittedData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-xl shadow-sm p-8 max-w-2xl w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Formularz został przesłany</h2>
          <p className="text-gray-600 mb-6">Zwolnienie lekarskie zostało wysłane do systemu</p>
          <button onClick={() => setSubmittedData(null)} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">Wypełnij kolejny formularz</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-28 lg:pt-32 pb-8">
      <Header/>
      <main className="mx-auto max-w-3xl px-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 font-medium">Błąd podczas wysyłania formularza</p>
              <p className="text-red-600 text-sm mt-1">{error}</p>
            </div>
          )}
          <MedicalLeaveForm
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            initialData={{
              leaveStartDate: prefillLeaveStart,
              leaveEndDate: prefillLeaveEnd,
            }}
          />
        </div>
      </main>
    </div>
  );
}

export default function MedicalLeavePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center"><div className="w-8 h-8 border-4 border-[#DAE9E6] border-t-[#064743] rounded-full animate-spin" /></div>}>
      <MedicalLeavePageInner />
    </Suspense>
  );
}