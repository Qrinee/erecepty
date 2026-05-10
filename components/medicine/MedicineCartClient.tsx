"use client";

import { useState, useEffect } from 'react';
import { Plus, Pill } from "lucide-react";
import MedicineSearchSection from './MedicineSearchSection';
import MedicineList from './MedicineList';
import AlertMessage from '@/components/ui/AlertMessage';
import { MedicineData, SearchResult } from '@/app/types/medicine';

interface MedicineCartClientProps {
  initialMedicine: MedicineData | null;
}

interface ApiResponse {
  success: boolean;
  data: MedicineData;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

async function fetchMedicineData(id: string): Promise<MedicineData | null> {
  try {
    const response = await fetch(`${API_URL}/api/products/${id}`, {
      cache: 'no-store',
    });
    
    if (!response.ok) {
      return null;
    }
    
    const apiData: ApiResponse = await response.json();
    
    if (apiData.success && apiData.data) {
      return apiData.data;
    }
    
    return null;
  } catch (error) {
    console.error('Failed to fetch medicine data:', error);
    return null;
  }
}

export default function MedicineCartClient({ initialMedicine }: MedicineCartClientProps) {
  const [medicines, setMedicines] = useState<MedicineData[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [notification, setNotification] = useState<{
    type: 'success' | 'error' | 'info';
    message: string;
  } | null>(null);

  // Initialize with the medicine from URL
  useEffect(() => {
    if (initialMedicine) {
      setMedicines([initialMedicine]);
    }
  }, [initialMedicine]);

  // Dispatch event and update window when medicines change
  useEffect(() => {
    window.__MEDICINES_CART__ = medicines;
    window.dispatchEvent(new CustomEvent('medicines-updated'));
  }, [medicines]);

  // Show notification with auto-dismiss
  const showNotification = (type: 'success' | 'error' | 'info', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  };

  // Handle medicine selection from search
  const handleMedicineSelect = async (result: SearchResult) => {
    setIsLoading(true);
    setIsSearchOpen(false);
    
    try {
      // Fetch full medicine data from API
      const medicineData = await fetchMedicineData(result.id);
      
      if (medicineData) {
        // Check if medicine already exists
        const exists = medicines.some(m => m._id === medicineData._id);
        
        if (!exists) {
          setMedicines(prev => [...prev, medicineData]);
          showNotification('success', `Lek "${medicineData.nazwaProduktuLeczniczego}" został dodany do zamówienia`);
        } else {
          showNotification('info', 'Ten lek już został dodany do zamówienia');
        }
      } else {
        showNotification('error', 'Nie udało się dodać leku. Spróbuj ponownie.');
      }
    } catch (error) {
      console.error('Failed to add medicine:', error);
      showNotification('error', 'Nie udało się dodać leku. Sprawdź połączenie i spróbuj ponownie.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle medicine removal
  const handleRemoveMedicine = (id: string) => {
    setMedicines(prev => prev.filter(m => m._id !== id));
  };

  return (
    <>
      {/* Notification */}
      {notification && (
        <div className="fixed top-4 right-4 z-50 max-w-sm">
          <AlertMessage
            type={notification.type}
            message={notification.message}
          />
        </div>
      )}

      {/* Section header */}
      <div className="rounded-xl bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            Wybrane leki
          </h2>
          
          {/* Add medicine button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Dodaj kolejny lek
          </button>
        </div>

        {/* Empty state */}
        {medicines.length === 0 && (
          <div className="mt-6 text-center py-8 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center">
              <Pill className="w-6 h-6 text-gray-400" />
            </div>
            <p className="text-gray-600">
              Nie dodano jeszcze żadnych leków
            </p>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="mt-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              Wyszukaj pierwszy lek
            </button>
          </div>
        )}

        {/* Medicine list */}
        <MedicineList 
          medicines={medicines} 
          onRemoveMedicine={handleRemoveMedicine} 
        />

        {/* Medicine count */}
        {medicines.length > 0 && (
          <p className="mt-4 text-sm text-gray-500 text-center">
            Dodano {medicines.length} {medicines.length === 1 ? 'lek' : medicines.length < 5 ? 'leki' : 'leków'}
          </p>
        )}

        {/* Loading overlay */}
        {isLoading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white rounded-xl p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 border-2 border-blue-100 border-t-blue-600 rounded-full animate-spin" />
                <span className="text-gray-700">Dodawanie leku...</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Search modal */}
      <MedicineSearchSection
        onMedicineSelect={handleMedicineSelect}
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
