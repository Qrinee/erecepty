"use client";

import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from "lucide-react";
import { PatientData, MedicalInfoData, PatientFormData } from '@/app/types/patient';
import { useCurrentUser } from '@/app/hooks/useCurrentUser';

interface PatientFormProps {
  onSubmit: (data: PatientFormData) => void;
  onCancel: () => void;
}

export default function PatientForm({ onSubmit, onCancel }: PatientFormProps) {
  const { user } = useCurrentUser();
  
  const [currentStep, setCurrentStep] = useState<'medical' | 'contact' | 'consent'>('medical');
  
  const [patientData, setPatientData] = useState<PatientData>({
    firstName: '',
    lastName: '',
    pesel: '',
    email: '',
    phone: '',
  });

  
  useEffect(() => {
    if (user) {
      setPatientData(prev => ({
        ...prev,
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        phone: user.phone || '',
      }));
    }
  }, [user]);

  const [medicalInfo, setMedicalInfo] = useState<MedicalInfoData>({
    mainComplaint: '',
    hasChronicDiseases: false,
    chronicDiseases: '',
    takesMedications: false,
    medications: '',
    hasAllergies: false,
    allergies: '',
    otherMedicalInfo: '',
    pregnancyStatus: 'nie',
  });

  const [consentData, setConsentData] = useState({
    rodoConsent: false,
    medicalConsent: false,
    newsletterConsent: false,
    createAccount: false,
    password: '',
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

  const handlePatientChange = (field: keyof PatientData, value: any) => {
    setPatientData(prev => ({ ...prev, [field]: value }));
  };

  const handleMedicalChange = (field: keyof MedicalInfoData, value: any) => {
    setMedicalInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleConsentChange = (field: string, value: any) => {
    setConsentData(prev => ({ ...prev, [field]: value }));
  };

  const handleMedicalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('contact');
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('consent');
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      patient: patientData,
      medicalInfo: medicalInfo,
    });
  };

  const renderMedicalForm = () => (
    <form onSubmit={handleMedicalSubmit} className="space-y-6">
      {}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Wywiad medyczny
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Te informacje pomogą lekarzowi wystawić receptę
        </p>
      </div>

      {}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">
          Opisz problem, z jakim zgłaszasz się dziś na konsultację. <span className="text-red-500">*</span>
        </label>
        <textarea
          value={medicalInfo.mainComplaint}
          onChange={(e) => handleMedicalChange('mainComplaint', e.target.value)}
          placeholder="Wpisz tutaj..."
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors min-h-[100px] resize-y"
          required
        />
      </div>

      {}
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
                  checked={medicalInfo.hasChronicDiseases === true}
                  onChange={() => handleMedicalChange('hasChronicDiseases', true)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Tak</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="hasChronicDiseases"
                  checked={medicalInfo.hasChronicDiseases === false}
                  onChange={() => handleMedicalChange('hasChronicDiseases', false)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Nie</span>
              </label>
            </div>
            
            {medicalInfo.hasChronicDiseases && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Wymień schorzenia przewlekłe: <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={medicalInfo.chronicDiseases}
                  onChange={(e) => handleMedicalChange('chronicDiseases', e.target.value)}
                  placeholder="Wpisz tutaj..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors min-h-[80px] resize-y"
                  required={medicalInfo.hasChronicDiseases}
                />
              </div>
            )}
          </div>
        )}
      </div>

      {}
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
                  checked={medicalInfo.takesMedications === true}
                  onChange={() => handleMedicalChange('takesMedications', true)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Tak</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="takesMedications"
                  checked={medicalInfo.takesMedications === false}
                  onChange={() => handleMedicalChange('takesMedications', false)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Nie</span>
              </label>
            </div>
            
            {medicalInfo.takesMedications && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Wymień przyjmowane leki i/lub suplementy diety: <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={medicalInfo.medications}
                  onChange={(e) => handleMedicalChange('medications', e.target.value)}
                  placeholder="Wpisz tutaj..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors min-h-[80px] resize-y"
                  required={medicalInfo.takesMedications}
                />
              </div>
            )}
          </div>
        )}
      </div>

      {}
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
                  checked={medicalInfo.hasAllergies === true}
                  onChange={() => handleMedicalChange('hasAllergies', true)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Tak</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="hasAllergies"
                  checked={medicalInfo.hasAllergies === false}
                  onChange={() => handleMedicalChange('hasAllergies', false)}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Nie</span>
              </label>
            </div>
            
            {medicalInfo.hasAllergies && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Wymień swoje alergie/nietolerancje: <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={medicalInfo.allergies}
                  onChange={(e) => handleMedicalChange('allergies', e.target.value)}
                  placeholder="Wpisz tutaj..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors min-h-[80px] resize-y"
                  required={medicalInfo.hasAllergies}
                />
              </div>
            )}
          </div>
        )}
      </div>

      {}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">
          Czy istnieją inne ważne informacje medyczne dotyczące Twojego stanu zdrowia (np. przebyte operacje, nowe, niepokojące objawy, korekta płci), o których nasz pracownik medyczny powinien wiedzieć?
        </label>
        <textarea
          value={medicalInfo.otherMedicalInfo}
          onChange={(e) => handleMedicalChange('otherMedicalInfo', e.target.value)}
          placeholder="Wpisz tutaj..."
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors min-h-[80px] resize-y"
        />
      </div>

      {}
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
                checked={medicalInfo.pregnancyStatus === 'nie'}
                onChange={() => handleMedicalChange('pregnancyStatus', 'nie')}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Nie</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="pregnancyStatus"
                checked={medicalInfo.pregnancyStatus === 'tak'}
                onChange={() => handleMedicalChange('pregnancyStatus', 'tak')}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Tak</span>
            </label>
          </div>
        )}
      </div>

      {}
      <div className="flex gap-4 pt-4 border-t border-gray-100">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-6 py-3 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
        >
          ← Wróć
        </button>
        <button
          type="submit"
          className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Dalej: Dane kontaktowe →
        </button>
      </div>
    </form>
  );

  const renderContactForm = () => (
    <form onSubmit={handleContactSubmit} className="space-y-6">
      {}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Dane pacjenta
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Podaj swoje dane osobowe
        </p>
      </div>

      {}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Dane osobowe
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Imię <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={patientData.firstName}
              onChange={(e) => handlePatientChange('firstName', e.target.value)}
              placeholder="Jan"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nazwisko <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={patientData.lastName}
              onChange={(e) => handlePatientChange('lastName', e.target.value)}
              placeholder="Kowalski"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              PESEL <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={patientData.pesel}
              onChange={(e) => handlePatientChange('pesel', e.target.value)}
              placeholder="12345678901"
              maxLength={11}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors"
              required
            />
          </div>
        </div>
      </div>

      {}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Dane kontaktowe
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              E-mail <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={patientData.email}
              onChange={(e) => handlePatientChange('email', e.target.value)}
              placeholder="twoj@email.pl"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Telefon <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={patientData.phone}
              onChange={(e) => handlePatientChange('phone', e.target.value)}
              placeholder="+48 123 456 789"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors"
              required
            />
          </div>
        </div>
      </div>

      {}
      <div className="flex gap-4 pt-4 border-t border-gray-100">
        <button
          type="button"
          onClick={() => setCurrentStep('medical')}
          className="flex-1 px-6 py-3 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
        >
          ← Wróć
        </button>
        <button
          type="submit"
          className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Dalej: Zgody →
        </button>
      </div>
    </form>
  );

  const renderConsentForm = () => (
    <form onSubmit={handleFinalSubmit} className="space-y-6">
      {}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Zgody i oświadczenia
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Przed wysłaniem formularza musisz zaakceptować wymagane zgody
        </p>
      </div>

      {}
      <div className="space-y-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={consentData.rodoConsent}
            onChange={(e) => handleConsentChange('rodoConsent', e.target.checked)}
            className="w-5 h-5 mt-0.5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            required
          />
          <span className="text-sm text-gray-700">
            Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z RODO <span className="text-red-500">*</span>
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={consentData.medicalConsent}
            onChange={(e) => handleConsentChange('medicalConsent', e.target.checked)}
            className="w-5 h-5 mt-0.5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            required
          />
          <span className="text-sm text-gray-700">
            Oświadczam, że podane przeze mnie informacje są zgodne z prawdą <span className="text-red-500">*</span>
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={consentData.newsletterConsent}
            onChange={(e) => handleConsentChange('newsletterConsent', e.target.checked)}
            className="w-5 h-5 mt-0.5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="text-sm text-gray-700">
            Chcę otrzymywać newsletter z informacjami o zdrowiu
          </span>
        </label>
      </div>

      {}
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="font-medium text-gray-900 mb-2">Podsumowanie</h3>
        <div className="text-sm text-gray-600 space-y-1">
          <p><span className="font-medium">Pacjent:</span> {patientData.firstName} {patientData.lastName}</p>
          <p><span className="font-medium">PESEL:</span> {patientData.pesel}</p>
          <p><span className="font-medium">E-mail:</span> {patientData.email}</p>
          <p><span className="font-medium">Telefon:</span> {patientData.phone}</p>
        </div>
      </div>

      {}
      <div className="flex gap-4 pt-4 border-t border-gray-100">
        <button
          type="button"
          onClick={() => setCurrentStep('contact')}
          className="flex-1 px-6 py-3 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
        >
          ← Wróć
        </button>
        <button
          type="submit"
          disabled={!consentData.rodoConsent || !consentData.medicalConsent}
          className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Wyślij zgłoszenie
        </button>
      </div>
    </form>
  );

  return (
    <div className="max-w-2xl mx-auto">
      {currentStep === 'medical' && renderMedicalForm()}
      {currentStep === 'contact' && renderContactForm()}
      {currentStep === 'consent' && renderConsentForm()}
    </div>
  );
}
