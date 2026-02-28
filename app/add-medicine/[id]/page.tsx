import OrderSummaryClient from '@/components/order/OrderSummaryClient';
import ProgressHeader from '@/components/layout/ProgressHeader';
import MedicineCartClient from '@/components/medicine/MedicineCartClient';
import { MedicineData } from '@/app/types/medicine';

interface ApiResponse {
  success: boolean;
  data: MedicineData;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

async function getMedicineData(id: string): Promise<MedicineData | null> {
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

export default async function AddMedicinePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const medicine = await getMedicineData(id);

  return (
    <div className="min-h-screen bg-gray-50">
      <ProgressHeader currentStep={1} />

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <MedicineCartClient initialMedicine={medicine} />
          </div>
          <div>
            <OrderSummaryClient initialMedicine={medicine} medicineId={id} />
          </div>
        </div>
      </main>
    </div>
  );
}
