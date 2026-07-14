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

  useEffect(() => {
    const syncMedicines = () => {
      const cartMedicines = window.__MEDICINES_CART__ || [];

      if (cartMedicines.length === 0 && initialMedicine) {
        setMedicines([initialMedicine]);
      } else if (cartMedicines.length > 0) {
        setMedicines(cartMedicines);
      }
    };

    syncMedicines();

    window.addEventListener('storage', syncMedicines);

    window.addEventListener('medicines-updated', syncMedicines);

    return () => {
      window.removeEventListener('storage', syncMedicines);
      window.removeEventListener('medicines-updated', syncMedicines);
    };
  }, [initialMedicine]);

  const medicineCount = medicines.length;
  const subtotal = medicineCount * 49.99;
  const expressFee = isExpress ? 19.99 : 0;
  const refundedFee = isRefunded ? 10.00 : 0;
  const total = subtotal + expressFee + refundedFee;

  const handleNextStep = () => {
    localStorage.setItem('orderMedicines', JSON.stringify(medicines));
    localStorage.setItem('orderExpress', JSON.stringify(isExpress));
    localStorage.setItem('orderRefunded', JSON.stringify(isRefunded));

        router.push(`/add-medicine/${medicineId}/consultation`);
  };

  const handleCancel = () => {
    localStorage.setItem('orderMedicines', JSON.stringify(medicines));
    localStorage.setItem('orderExpress', JSON.stringify(isExpress));
    localStorage.setItem('orderRefunded', JSON.stringify(isRefunded));
    router.back();
  };

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
