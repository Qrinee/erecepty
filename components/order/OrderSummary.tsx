"use client";

import { useState, useEffect } from 'react';
import { MedicineData } from '@/app/types/medicine';

const MEDICINE_PRICE = 49.99;

interface OrderSummaryProps {
  initialMedicine: MedicineData | null;
  isExpress: boolean;
  setIsExpress: (value: boolean) => void;
  isRefunded: boolean;
  setIsRefunded: (value: boolean) => void;
  total: number;
  subtotal: number;
  expressFee: number;
  refundedFee: number;
  medicineCount: number;
  isFormValid: boolean;
  onNextStep: () => void;
}

interface WindowWithMedicines {
  __MEDICINES_CART__: MedicineData[];
}

declare global {
  interface Window extends WindowWithMedicines {}
}

export default function OrderSummary({ 
  initialMedicine,
  isExpress,
  setIsExpress,
  isRefunded,
  setIsRefunded,
  total,
  subtotal,
  expressFee,
  refundedFee,
  medicineCount,
  isFormValid,
  onNextStep
}: OrderSummaryProps) {
  const [medicines, setMedicines] = useState<MedicineData[]>([]);

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

  if (medicines.length === 0) {
    return (
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">
          Podsumowanie zamówienia
        </h2>
        <p className="mt-4 text-gray-500 text-center py-4">
          Dodaj leki, aby zobaczyć podsumowanie
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900">
        Podsumowanie zamówienia
      </h2>

      <div className="mt-4 text-sm text-gray-600">
        <p className="font-semibold">Dodane leki ({medicineCount})</p>
        
        <ul className="mt-2 space-y-2">
          {medicines.map((medicine, index) => (
            <li key={`${medicine._id}-${index}`} className="border-b border-gray-100 pb-2 last:border-0 last:pb-0">
              <p className="font-medium">{index + 1}. {medicine.nazwaProduktuLeczniczego}</p>
              <p className="text-xs text-gray-400">
                {medicine.moc}, {medicine.postacFarmaceutyczna}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 space-y-3">
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={isExpress}
            onChange={(e) => setIsExpress(e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700 group-hover:text-gray-900">
            Recepta express (+19.99 PLN)
          </span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={isRefunded}
            onChange={(e) => setIsRefunded(e.target.checked)}
            className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700 group-hover:text-gray-900">
            Recepta refundowana (+10.00 PLN)
          </span>
        </label>
      </div>

      {/* Price breakdown */}
      <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Recepta ({medicineCount} × {MEDICINE_PRICE.toFixed(2)} PLN)</span>
          <span>{subtotal.toFixed(2)} PLN</span>
        </div>
        
        {expressFee > 0 && (
          <div className="flex justify-between text-sm text-gray-600">
            <span>Recepta express</span>
            <span>+{expressFee.toFixed(2)} PLN</span>
          </div>
        )}
        
        {refundedFee > 0 && (
          <div className="flex justify-between text-sm text-gray-600">
            <span>Recepta refundowana</span>
            <span>+{refundedFee.toFixed(2)} PLN</span>
          </div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex justify-between text-lg font-semibold">
          <span>Łącznie</span>
          <span className="text-blue-600">{total.toFixed(2)} PLN</span>
        </div>
      </div>

      <button 
        onClick={onNextStep}
        className="mt-6 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!isFormValid}
      >
        Dalej: Wywiad medyczny →
      </button>

      <p className="mt-4 text-center text-xs text-gray-400">
        Bezpieczne płatności SSL
      </p>
    </div>
  );
}
