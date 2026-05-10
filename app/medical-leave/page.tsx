"use client";

import { useState } from 'react';
import MedicalLeaveForm from '@/components/medical/MedicalLeaveForm';
import { MedicalLeaveData } from '@/app/types/medicine';
import Header from '@/components/Header';

export default function MedicalLeavePage() {
  const [submittedData, setSubmittedData] = useState<MedicalLeaveData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (data: MedicalLeaveData) => {
    // Backend oczekuje struktury: { medicalInfo, patient, ... }
    // a pola medyczne zwalnia mapują się do medicalInfo (diagnosis, icd10Code, leaveReason...)
    // Dla spójności przekazujemy oba: medicalInfo + patient.medical.

    setIsSubmitting(true);
    setError(null);
    
    try {
      // Send data to backend API
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/patient/medical-leave`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Backend w odpowiedzi zwraca pola zwolnienia w medicalInfo,
          // a w panelu admina są one mapowane z leaveDetails.
          // Przekazujemy je jako spójny obiekt do backendu.
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
            street: data.patientAddress,
            postalCode: data.patientPostalCode,
            city: data.patientCity,
          },
          // Dodatkowo przekazujemy dane wejściowe (dla ewentualnych mapowań backendu)
          ...data,
        }),
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Nie udało się wysłać zwolnienia. Spróbuj ponownie.');
      }

      const result = await response.json();
      console.log('Medical Leave Form Data:', data);
      console.log('Server response:', result);

      if (result.success && result.data?.payment?.paymentUrl) {
        window.location.href = result.data.payment.paymentUrl;
        return;
      }

      setSubmittedData(data);
    } catch (err) {
      console.error('Error submitting medical leave:', err);
      setError(err instanceof Error ? err.message : 'Wystąpił błąd podczas wysyłania zwolnienia');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    console.log('Form cancelled');
  };

  if (submittedData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">

        <div className="bg-white rounded-xl shadow-sm p-8 max-w-2xl w-full">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Formularz został przesłany
            </h2>
            <p className="text-gray-600 mb-6">
              Zwolnienie lekarskie zostało wysłane do systemu
            </p>
            <button
              onClick={() => setSubmittedData(null)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Wypełnij kolejny formularz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Header/>
      <div className='h-20'></div>
      <main className="mx-auto max-w-3xl px-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 font-medium">Błąd podczas wysyłania formularza</p>
              <p className="text-red-600 text-sm mt-1">{error}</p>
            </div>
          )}
          <MedicalLeaveForm onSubmit={handleSubmit} onCancel={handleCancel} />
        </div>
      </main>
    </div>
  );
}
