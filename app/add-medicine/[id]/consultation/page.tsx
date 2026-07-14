"use client";

import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProgressHeader from '@/components/layout/ProgressHeader';
import MedicalConsultationForm from '@/components/medical/MedicalConsultationForm';
import { MedicineData, MedicalConsultationData } from '@/app/types/medicine';

interface WindowWithMedicines {
  __MEDICINES_CART__: MedicineData[];
}

declare global {
  interface Window extends WindowWithMedicines {}
}

export default function ConsultationPage() {
  const router = useRouter();
  const params = useParams();
  const medicineId = params?.id as string;
  const [medicines, setMedicines] = useState<MedicineData[]>([]);
  const [isFormValid, setIsFormValid] = useState(false);

  
  useEffect(() => {
    const cartMedicines = window.__MEDICINES_CART__ || [];
    
    
    const storedMedicines = localStorage.getItem('orderMedicines');
    if (storedMedicines) {
      try {
        const parsed = JSON.parse(storedMedicines);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMedicines(parsed);
          setIsFormValid(true);
          return;
        }
      } catch (e) {
        console.error('Error parsing stored medicines:', e);
      }
    }
    
    
    if (cartMedicines.length > 0) {
      setMedicines(cartMedicines);
      setIsFormValid(true);
    }
  }, []);

  
  const handleSubmit = (data: MedicalConsultationData) => {
    console.log('Medical consultation data:', data);
    
    localStorage.setItem('medicalConsultation', JSON.stringify(data));
    
    
    router.push(`/add-medicine/${medicineId}/payment`);
  };

  
  const handleCancel = () => {
    router.push(`/add-medicine/${medicineId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ProgressHeader currentStep={2} />

      <main className="mx-auto max-w-3xl px-6 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <MedicalConsultationForm
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        </div>
      </main>
    </div>
  );
}
