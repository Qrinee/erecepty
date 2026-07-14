"use client";

import { Trash2, Pill } from "lucide-react";
import { MedicineData } from "@/app/types/medicine";

interface MedicineListProps {
  medicines: MedicineData[];
  onRemoveMedicine: (id: string) => void;
}

export default function MedicineList({ medicines, onRemoveMedicine }: MedicineListProps) {
  if (medicines.length === 0) {
    return null;
  }

  return (
    <div className="mt-4 space-y-3">
      {medicines.map((medicine, index) => (
        <div
          key={`${medicine._id}-${index}`}
          className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
        >
          {}
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
            <Pill className="w-5 h-5 text-blue-600" />
          </div>

          {}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 truncate">
                  {medicine.nazwaProduktuLeczniczego}
                </h4>
                <p className="text-xs text-gray-500 mt-0.5">
                  {medicine.nazwaPowszechnieStosowana || medicine.substancjaCzynna}
                </p>
              </div>
              
              {}
              <button
                onClick={() => onRemoveMedicine(medicine._id)}
                className="flex-shrink-0 p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                title="Usuń lek"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>

            {}
            <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
              {medicine.moc && (
                <span className="text-xs text-gray-600 bg-gray-100 px-2 py-0.5 rounded">
                  {medicine.moc}
                </span>
              )}
              {medicine.postacFarmaceutyczna && (
                <span className="text-xs text-gray-600">
                  {medicine.postacFarmaceutyczna}
                </span>
              )}
              {medicine.podmiotOdpowiedzialny && (
                <span className="text-xs text-gray-400 truncate">
                  {medicine.podmiotOdpowiedzialny}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
