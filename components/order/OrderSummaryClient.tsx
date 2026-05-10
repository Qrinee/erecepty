"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import OrderSummary from './OrderSummary';
import { MedicineData } from '@/app/types/medicine';

interface OrderSummaryClientProps {
  initialMedicine: MedicineData | null;
  medicineId: string;
}

interface WindowWithMedicines {
  __MEDICINES_CART__: MedicineData[];
}

declare global {
  interface Window extends WindowWithMedicines {}
}

export default function OrderSummaryClient({ initialMedicine, medicineId }: OrderSummaryClientProps) {
  const router = useRouter();
  const [medicines, setMedicines] = useState<MedicineData[]>([]);
  const [isExpress, setIsExpress] = useState(false);
  const [isRefunded, setIsRefunded] = useState(false);

  // Sync medicines from window (updated by MedicineCartClient)
  useEffect(() => {
    const syncMedicines = () => {
      const cartMedicines = window.__MEDICINES_CART__ || [];
      
      // Include initial medicine if no cart medicines yet
      if (cartMedicines.length === 0 && initialMedicine) {
        setMedicines([initialMedicine]);
      } else if (cartMedicines.length > 0) {
        setMedicines(cartMedicines);
      }
    };

    // Initial sync
    syncMedicines();

    // Listen for storage changes (when medicines are added/removed)
    window.addEventListener('storage', syncMedicines);
    
    // Custom event for same-tab updates
    window.addEventListener('medicines-updated', syncMedicines);

    return () => {
      window.removeEventListener('storage', syncMedicines);
      window.removeEventListener('medicines-updated', syncMedicines);
    };
  }, [initialMedicine]);

  // Calculate totals
  const medicineCount = medicines.length;
  const subtotal = medicineCount * 49.99;
  const expressFee = isExpress ? 19.99 : 0;
  const refundedFee = isRefunded ? 10.00 : 0;
  const total = subtotal + expressFee + refundedFee;

  // Navigate to consultation page (step 2)
  const handleNextStep = () => {
    // Save cart medicines to localStorage for next steps
    localStorage.setItem('orderMedicines', JSON.stringify(medicines));
    localStorage.setItem('orderExpress', JSON.stringify(isExpress));
    localStorage.setItem('orderRefunded', JSON.stringify(isRefunded));
    
    router.push(`/add-medicine/${medicineId}/consultation`);
  };

  // Handle cancel - go back to step 1 preserving all state
  const handleCancel = () => {
    // Save current state before going back
    localStorage.setItem('orderMedicines', JSON.stringify(medicines));
    localStorage.setItem('orderExpress', JSON.stringify(isExpress));
    localStorage.setItem('orderRefunded', JSON.stringify(isRefunded));
    router.back();
  };

  // Check if form is valid (all required fields filled)
  const isFormValid = () => {
    if (medicines.length === 0) return false;
    return true;
  };

  return (
    <OrderSummary
      initialMedicine={initialMedicine}
      isExpress={isExpress}
      setIsExpress={setIsExpress}
      isRefunded={isRefunded}
      setIsRefunded={setIsRefunded}
      total={total}
      subtotal={subtotal}
      expressFee={expressFee}
      refundedFee={refundedFee}
      medicineCount={medicineCount}
      isFormValid={isFormValid()}
      onNextStep={handleNextStep}
    />
  );
}
