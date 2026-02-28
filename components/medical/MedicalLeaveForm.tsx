"use client";

import { useState } from 'react';
import { Calendar, User, Stethoscope, Clock, Building, FileText } from "lucide-react";
import { MedicalLeaveData } from '@/app/types/medicine';

interface MedicalLeaveFormProps {
  onSubmit: (data: MedicalLeaveData) => void;
  onCancel: () => void;
}

export default function MedicalLeaveForm({ 
  onSubmit, 
  onCancel 
}: MedicalLeaveFormProps) {
  const [formData, setFormData] = useState<MedicalLeaveData>({
    patientFirstName: '',
    patientLastName: '',
    patientPesel: '',
    patientAddress: '',
    patientPostalCode: '',
    patientCity: '',
    diagnosis: '',
    icd10Code: '',
    diagnosisDescription: '',
    leaveStartDate: '',
    leaveEndDate: '',
    leaveReason: null,
    isHospitalized: null,
    hospitalName: '',
    additionalNotes: '',
    followUpVisit: null,
    followUpDate: '',
  });

  const [currentSection, setCurrentSection] = useState(1);
  const totalSections = 3;

  const handleChange = (field: keyof MedicalLeaveData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Log the data to console (as requested)
    console.log('Medical Leave Form Data:', formData);
    console.log('Ready to send to server:', JSON.stringify(formData, null, 2));
    
    onSubmit(formData);
  };

  const nextSection = () => {
    if (currentSection < totalSections) {
      setCurrentSection(prev => prev + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 1) {
      setCurrentSection(prev => prev - 1);
    }
  };

  const renderSection1 = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Dane pacjenta</h3>
          <p className="text-sm text-gray-500">Informacje identyfikacyjne</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Imię <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.patientFirstName}
            onChange={(e) => handleChange('patientFirstName', e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Nazwisko <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.patientLastName}
            onChange={(e) => handleChange('patientLastName', e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">
          PESEL <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.patientPesel}
          onChange={(e) => handleChange('patientPesel', e.target.value)}
          placeholder="Wpisz PESEL"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">
          Adres zamieszkania <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.patientAddress}
          onChange={(e) => handleChange('patientAddress', e.target.value)}
          placeholder="Ulica i numer domu/mieszkania"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors mb-3"
          required
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            value={formData.patientPostalCode}
            onChange={(e) => handleChange('patientPostalCode', e.target.value)}
            placeholder="Kod pocztowy"
            className="px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors"
            required
          />
          <input
            type="text"
            value={formData.patientCity}
            onChange={(e) => handleChange('patientCity', e.target.value)}
            placeholder="Miasto"
            className="px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors"
            required
          />
        </div>
      </div>
    </div>
  );

  const renderSection2 = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
          <Stethoscope className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Rozpoznanie</h3>
          <p className="text-sm text-gray-500">Informacje medyczne</p>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">
          Rozpoznanie (ICD-10) <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formData.icd10Code}
          onChange={(e) => handleChange('icd10Code', e.target.value)}
          placeholder="np. J06.9"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors mb-3"
          required
        />
        <input
          type="text"
          value={formData.diagnosis}
          onChange={(e) => handleChange('diagnosis', e.target.value)}
          placeholder="Nazwa rozpoznania"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">
          Opis rozpoznania
        </label>
        <textarea
          value={formData.diagnosisDescription}
          onChange={(e) => handleChange('diagnosisDescription', e.target.value)}
          placeholder="Dodatkowy opis schorzenia..."
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors min-h-[100px] resize-y"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">
          Czy pacjent był hospitalizowany?
        </label>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => handleChange('isHospitalized', 'yes')}
            className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
              formData.isHospitalized === 'yes'
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            Tak
          </button>
          <button
            type="button"
            onClick={() => handleChange('isHospitalized', 'no')}
            className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
              formData.isHospitalized === 'no'
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            Nie
          </button>
        </div>
      </div>

      {formData.isHospitalized === 'yes' && (
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Nazwa szpitala
          </label>
          <input
            type="text"
            value={formData.hospitalName}
            onChange={(e) => handleChange('hospitalName', e.target.value)}
            placeholder="Wpisz nazwę szpitala"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors"
          />
        </div>
      )}
    </div>
  );

  const renderSection3 = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
          <Calendar className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Okres niezdolności</h3>
          <p className="text-sm text-gray-500">Daty zwolnienia</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Data od <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={formData.leaveStartDate}
            onChange={(e) => handleChange('leaveStartDate', e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Data do <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={formData.leaveEndDate}
            onChange={(e) => handleChange('leaveEndDate', e.target.value)}
            min={formData.leaveStartDate}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">
          Przyczyna niezdolności <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {[
            { value: 'illness', label: 'Choroba' },
            { value: 'accident', label: 'Wypadek' },
            { value: 'quarantine', label: 'Kwarantanna' },
            { value: 'other', label: 'Inna' },
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleChange('leaveReason', option.value)}
              className={`py-3 px-4 rounded-lg border-2 transition-colors ${
                formData.leaveReason === option.value
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">
          Dodatkowe uwagi
        </label>
        <textarea
          value={formData.additionalNotes}
          onChange={(e) => handleChange('additionalNotes', e.target.value)}
          placeholder="Dodatkowe informacje dla pacjenta..."
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors min-h-[80px] resize-y"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">
          Wymagana wizyta kontrolna?
        </label>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => handleChange('followUpVisit', 'yes')}
            className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
              formData.followUpVisit === 'yes'
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            Tak
          </button>
          <button
            type="button"
            onClick={() => handleChange('followUpVisit', 'no')}
            className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
              formData.followUpVisit === 'no'
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            Nie
          </button>
        </div>
      </div>

      {formData.followUpVisit === 'yes' && (
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Data wizyty kontrolnej
          </label>
          <input
            type="date"
            value={formData.followUpDate}
            onChange={(e) => handleChange('followUpDate', e.target.value)}
            min={formData.leaveEndDate}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors"
          />
        </div>
      )}
    </div>
  );

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Zwolnienie lekarskie (e-Zwolnienie)
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Wypełnij formularz, aby wystawić zwolnienie lekarskie
        </p>
      </div>

      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">
            Krok {currentSection} z {totalSections}
          </span>
          <span className="text-sm text-gray-500">
            {currentSection === 1 && 'Dane pacjenta'}
            {currentSection === 2 && 'Rozpoznanie'}
            {currentSection === 3 && 'Okres niezdolności'}
          </span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${(currentSection / totalSections) * 100}%` }}
          />
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {currentSection === 1 && renderSection1()}
        {currentSection === 2 && renderSection2()}
        {currentSection === 3 && renderSection3()}

        {/* Navigation buttons */}
        <div className="flex justify-between pt-6 border-t border-gray-100">
          <button
            type="button"
            onClick={currentSection === 1 ? onCancel : prevSection}
            className="px-6 py-3 text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            {currentSection === 1 ? 'Anuluj' : 'Wstecz'}
          </button>
          
          {currentSection < totalSections ? (
            <button
              type="button"
              onClick={nextSection}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
            >
              Dalej
            </button>
          ) : (
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
            >
              Wyślij formularz
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
