import { MedicineData } from '@/app/types/medicine';

interface MedicineDosageSectionProps {
  medicine: MedicineData | null;
}

export default function MedicineDosageSection({ medicine }: MedicineDosageSectionProps) {
  return (
    <div className="mt-6 rounded-lg border-gray-300 border bg-blue-50 p-4">
      <h3 className="mb-4 font-semibold text-gray-900">
        Dawkowanie {medicine && `- ${medicine.nazwaProduktuLeczniczego}`}
      </h3>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <select className="input px-4 py-2 rounded-lg border border-gray-300">
          <option>100 ug aerozolu raz na dobę</option>
        </select>

        <input
          type="number"
          defaultValue={1}
          className="input px-4 py-2 border rounded-lg border-gray-300"
          placeholder="Ile dawek dziennie?"
        />

        <select className="input px-4 py-2 rounded-lg md:col-span-2 border border-gray-300">
          <option>Astma oskrzelowa</option>
        </select>
      </div>
    </div>
  );
}
