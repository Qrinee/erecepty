"use client";

import { useState, useEffect } from 'react';
import { Calendar, User, Stethoscope, Clock, Building, FileText } from "lucide-react";
import { MedicalLeaveData } from '@/app/types/medicine';
import { useCurrentUser } from '@/app/hooks/useCurrentUser';

type MedicalLeavePayload = {
  patientFirstName: string;
  patientLastName: string;
  patientPesel: string;
  patientAddress: string;
  patientPostalCode: string;
  patientCity: string;
  email?: string;
  phone?: string;
  diagnosis?: string;
  diagnosisDescription?: string;
  icd10Code?: string;
  leaveStartDate?: string;
  leaveEndDate?: string;
  leaveReason?: MedicalLeaveData['leaveReason'];
  isHospitalized?: MedicalLeaveData['isHospitalized'];
  hospitalName?: string;
  additionalNotes?: string;
  followUpVisit?: MedicalLeaveData['followUpVisit'];
  followUpDate?: string;
};

interface MedicalLeaveFormProps {
  onSubmit: (data: MedicalLeaveData) => void;
  onCancel: () => void;
}

export default function MedicalLeaveForm({ 
  onSubmit, 
  onCancel 
}: MedicalLeaveFormProps) {
  const { user } = useCurrentUser();
  
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
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Auto-fill form with logged-in user data
  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        patientFirstName: user.firstName || '',
        patientLastName: user.lastName || '',
      }));
    }
  }, [user]);

  const validateSection = (section: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (section === 1) {
      if (!formData.patientFirstName?.trim()) {
        newErrors.patientFirstName = 'Imię jest wymagane';
      }
      if (!formData.patientLastName?.trim()) {
        newErrors.patientLastName = 'Nazwisko jest wymagane';
      }
      if (!formData.patientPesel?.trim()) {
        newErrors.patientPesel = 'PESEL jest wymagany';
      } else if (!/^\d{11}$/.test(formData.patientPesel)) {
        newErrors.patientPesel = 'PESEL musi składać się z 11 cyfr';
      }
      if (!formData.patientAddress?.trim()) {
        newErrors.patientAddress = 'Adres jest wymagany';
      }
      if (!formData.patientPostalCode?.trim()) {
        newErrors.patientPostalCode = 'Kod pocztowy jest wymagany';
      }
      if (!formData.patientCity?.trim()) {
        newErrors.patientCity = 'Miasto jest wymagane';
      }
    }

    if (section === 2) {
 
      if (formData.isHospitalized === null) {
        newErrors.isHospitalized = 'Wybierz, czy pacjent był hospitalizowany';
      }
    }

    if (section === 3) {
      if (!formData.leaveStartDate) {
        newErrors.leaveStartDate = 'Data rozpoczęcia jest wymagana';
      }
      if (!formData.leaveEndDate) {
        newErrors.leaveEndDate = 'Data zakończenia jest wymagana';
      }
      if (!formData.leaveReason) {
        newErrors.leaveReason = 'Przyczyna niezdolności jest wymagana';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof MedicalLeaveData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateSection(1) && validateSection(2) && validateSection(3)) {
      console.log('Medical Leave Form Data:', formData);
      console.log('Ready to send to server:', JSON.stringify(formData, null, 2));
      onSubmit(formData);
    }
  };

  const nextSection = () => {
    if (currentSection < totalSections && validateSection(currentSection)) {
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

      {Object.keys(errors).length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-sm font-medium text-red-800">
            Proszę poprawić błędy w formularzu przed przejściem dalej
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Imię <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.patientFirstName}
            onChange={(e) => handleChange('patientFirstName', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors ${
              errors.patientFirstName ? 'border-red-500' : 'border-gray-200'
            }`}
            required
          />
          {errors.patientFirstName && (
            <p className="text-red-500 text-xs mt-1">{errors.patientFirstName}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Nazwisko <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.patientLastName}
            onChange={(e) => handleChange('patientLastName', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors ${
              errors.patientLastName ? 'border-red-500' : 'border-gray-200'
            }`}
            required
          />
          {errors.patientLastName && (
            <p className="text-red-500 text-xs mt-1">{errors.patientLastName}</p>
          )}
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
          className={`w-full px-4 py-3 rounded-lg border focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors ${
            errors.patientPesel ? 'border-red-500' : 'border-gray-200'
          }`}
          required
        />
        {errors.patientPesel && (
          <p className="text-red-500 text-xs mt-1">{errors.patientPesel}</p>
        )}
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
          className={`w-full px-4 py-3 rounded-lg border focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors mb-3 ${
            errors.patientAddress ? 'border-red-500' : 'border-gray-200'
          }`}
          required
        />
        {errors.patientAddress && (
          <p className="text-red-500 text-xs mt-1 mb-3">{errors.patientAddress}</p>
        )}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            value={formData.patientPostalCode}
            onChange={(e) => handleChange('patientPostalCode', e.target.value)}
            placeholder="Kod pocztowy"
            className={`px-4 py-3 rounded-lg border focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors ${
              errors.patientPostalCode ? 'border-red-500' : 'border-gray-200'
            }`}
            required
          />
          <input
            type="text"
            value={formData.patientCity}
            onChange={(e) => handleChange('patientCity', e.target.value)}
            placeholder="Miasto"
            className={`px-4 py-3 rounded-lg border focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors ${
              errors.patientCity ? 'border-red-500' : 'border-gray-200'
            }`}
            required
          />
        </div>
        {(errors.patientPostalCode || errors.patientCity) && (
          <div className="flex gap-4 mt-1">
            {errors.patientPostalCode && <p className="text-red-500 text-xs">{errors.patientPostalCode}</p>}
            {errors.patientCity && <p className="text-red-500 text-xs">{errors.patientCity}</p>}
          </div>
        )}
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

      {Object.keys(errors).length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-sm font-medium text-red-800">
            Proszę poprawić błędy w formularzu przed przejściem dalej
          </p>
        </div>
      )}

      <div>

        {errors.icd10Code && (
          <p className="text-red-500 text-xs mb-3">{errors.icd10Code}</p>
        )}

        {errors.diagnosis && (
          <p className="text-red-500 text-xs">{errors.diagnosis}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">
          Opis rozpoznania
        </label>
        <textarea
          value={formData.diagnosisDescription}
          onChange={(e) => handleChange('diagnosisDescription', e.target.value)}
          placeholder="Opis schorzenia..."
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
        {errors.isHospitalized && (
          <p className="text-red-500 text-xs mt-2">{errors.isHospitalized}</p>
        )}
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

      {Object.keys(errors).length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-sm font-medium text-red-800">
            Proszę poprawić błędy w formularzu przed przejściem dalej
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Data od <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={formData.leaveStartDate}
            onChange={(e) => handleChange('leaveStartDate', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors ${
              errors.leaveStartDate ? 'border-red-500' : 'border-gray-200'
            }`}
            required
          />
          {errors.leaveStartDate && (
            <p className="text-red-500 text-xs mt-1">{errors.leaveStartDate}</p>
          )}
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
            className={`w-full px-4 py-3 rounded-lg border focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors ${
              errors.leaveEndDate ? 'border-red-500' : 'border-gray-200'
            }`}
            required
          />
          {errors.leaveEndDate && (
            <p className="text-red-500 text-xs mt-1">{errors.leaveEndDate}</p>
          )}
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
        {errors.leaveReason && (
          <p className="text-red-500 text-xs mt-2">{errors.leaveReason}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">
          Dodatkowe uwagi
        </label>
        <textarea
          value={formData.additionalNotes}
          onChange={(e) => handleChange('additionalNotes', e.target.value)}
          placeholder="Dodatkowe informacje dla lekarza..."
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
          Zwolnienie lekarskie
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Wypełnij formularz
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