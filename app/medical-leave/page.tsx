"use client";

import { useState } from 'react';
import MedicalLeaveForm from '@/components/medical/MedicalLeaveForm';
import { MedicalLeaveData } from '@/app/types/medicine';

export default function MedicalLeavePage() {
  const [submittedData, setSubmittedData] = useState<MedicalLeaveData | null>(null);

  const handleSubmit = (data: MedicalLeaveData) => {
    // Data is logged to console in the form component
    setSubmittedData(data);
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
              Dane zostały zalogowane w konsoli przeglądarki
            </p>
            <button
              onClick={() => setSubmittedData(null)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
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
      <main className="mx-auto max-w-3xl px-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <MedicalLeaveForm onSubmit={handleSubmit} onCancel={handleCancel} />
        </div>
      </main>
    </div>
  );
}
