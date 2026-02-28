"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from "lucide-react";
import { MedicalConsultationData } from '@/app/types/medicine';

interface MedicalConsultationFormProps {
  onSubmit: (data: MedicalConsultationData) => void;
  onCancel: () => void;
  isOpen?: boolean;
}

export default function MedicalConsultationForm({ 
  onSubmit, 
  onCancel, 
  isOpen = true 
}: MedicalConsultationFormProps) {
  const [formData, setFormData] = useState<MedicalConsultationData>({
    mainComplaint: '',
    hasChronicDiseases: null,
    chronicDiseases: '',
    takesMedications: null,
    medications: '',
    hasAllergies: null,
    allergies: '',
    otherMedicalInfo: '',
    pregnancyStatus: null,
  });

  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    chronicDiseases: true,
    medications: true,
    allergies: true,
    pregnancy: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (field: keyof MedicalConsultationData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Wywiad medyczny
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Te informacje pomogą lekarzowi wystawić receptę
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Main complaint */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Opisz problem, z jakim zgłaszasz się dziś na konsultację. <span className="text-red-500">*</span>
          </label>
          <textarea
            value={formData.mainComplaint}
            onChange={(e) => handleChange('mainComplaint', e.target.value)}
            placeholder="Wpisz tutaj..."
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors min-h-[100px] resize-y"
            required
          />
        </div>

        {/* Chronic diseases */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            type="button"
            onClick={() => toggleSection('chronicDiseases')}
            className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-900">
                Czy występują u Ciebie jakieś choroby przewlekłe? <span className="text-red-500">*</span>
              </span>
            </div>
            {expandedSections.chronicDiseases ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </button>
          
          {expandedSections.chronicDiseases && (
            <div className="p-4 space-y-4 bg-white">
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="hasChronicDiseases"
                    checked={formData.hasChronicDiseases === 'yes'}
                    onChange={() => handleChange('hasChronicDiseases', 'yes')}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Tak</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="hasChronicDiseases"
                    checked={formData.hasChronicDiseases === 'no'}
                    onChange={() => handleChange('hasChronicDiseases', 'no')}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Nie</span>
                </label>
              </div>
              
              {formData.hasChronicDiseases === 'yes' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Wymień schorzenia przewlekłe: <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.chronicDiseases}
                    onChange={(e) => handleChange('chronicDiseases', e.target.value)}
                    placeholder="Wpisz tutaj..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors min-h-[80px] resize-y"
                    required={formData.hasChronicDiseases === 'yes'}
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Medications */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            type="button"
            onClick={() => toggleSection('medications')}
            className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-900">
                Czy przyjmujesz leki i/lub suplementy? <span className="text-red-500">*</span>
              </span>
            </div>
            {expandedSections.medications ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </button>
          
          {expandedSections.medications && (
            <div className="p-4 space-y-4 bg-white">
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="takesMedications"
                    checked={formData.takesMedications === 'yes'}
                    onChange={() => handleChange('takesMedications', 'yes')}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Tak</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="takesMedications"
                    checked={formData.takesMedications === 'no'}
                    onChange={() => handleChange('takesMedications', 'no')}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Nie</span>
                </label>
              </div>
              
              {formData.takesMedications === 'yes' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Wymień przyjmowane leki i/lub suplementy diety: <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.medications}
                    onChange={(e) => handleChange('medications', e.target.value)}
                    placeholder="Wpisz tutaj..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors min-h-[80px] resize-y"
                    required={formData.takesMedications === 'yes'}
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Allergies */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            type="button"
            onClick={() => toggleSection('allergies')}
            className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-900">
                Czy występują u Ciebie alergie/nietolerancje na leki? <span className="text-red-500">*</span>
              </span>
            </div>
            {expandedSections.allergies ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </button>
          
          {expandedSections.allergies && (
            <div className="p-4 space-y-4 bg-white">
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="hasAllergies"
                    checked={formData.hasAllergies === 'yes'}
                    onChange={() => handleChange('hasAllergies', 'yes')}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Tak</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="hasAllergies"
                    checked={formData.hasAllergies === 'no'}
                    onChange={() => handleChange('hasAllergies', 'no')}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Nie</span>
                </label>
              </div>
              
              {formData.hasAllergies === 'yes' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Wymień swoje alergie/nietolerancje: <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.allergies}
                    onChange={(e) => handleChange('allergies', e.target.value)}
                    placeholder="Wpisz tutaj..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors min-h-[80px] resize-y"
                    required={formData.hasAllergies === 'yes'}
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Other medical info */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Czy istnieją inne ważne informacje medyczne dotyczące Twojego stanu zdrowia (np. przebyte operacje, nowe, niepokojące objawy, korekta płci), o których nasz pracownik medyczny powinien wiedzieć?
          </label>
          <textarea
            value={formData.otherMedicalInfo}
            onChange={(e) => handleChange('otherMedicalInfo', e.target.value)}
            placeholder="Wpisz tutaj..."
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors min-h-[80px] resize-y"
          />
        </div>

        {/* Pregnancy status */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            type="button"
            onClick={() => toggleSection('pregnancy')}
            className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-900">
                Czy jesteś w ciąży lub karmisz piersią? <span className="text-red-500">*</span>
              </span>
            </div>
            {expandedSections.pregnancy ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </button>
          
          {expandedSections.pregnancy && (
            <div className="p-4 space-y-3 bg-white">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="pregnancyStatus"
                  checked={formData.pregnancyStatus === 'na'}
                  onChange={() => handleChange('pregnancyStatus', 'na')}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Nie dotyczy</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="pregnancyStatus"
                  checked={formData.pregnancyStatus === 'pregnant'}
                  onChange={() => handleChange('pregnancyStatus', 'pregnant')}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Tak, jestem w ciąży</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="pregnancyStatus"
                  checked={formData.pregnancyStatus === 'breastfeeding'}
                  onChange={() => handleChange('pregnancyStatus', 'breastfeeding')}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Tak, karmię piersią</span>
              </label>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-4 pt-4 border-t border-gray-100">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 px-6 py-3 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            ← Wróć do wyboru leków
          </button>
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Dalej: Dane kontaktowe →
          </button>
        </div>
      </form>
    </div>
  );
}
