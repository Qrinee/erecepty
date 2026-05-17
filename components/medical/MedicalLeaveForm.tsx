"use client";

import { useState, useEffect } from 'react';
import { Calendar, User, Stethoscope } from "lucide-react";
import { MedicalLeaveData } from '@/app/types/medicine';
import { useCurrentUser } from '@/app/hooks/useCurrentUser';

interface MedicalLeaveFormProps {
  onSubmit: (data: MedicalLeaveData) => void;
  onCancel: () => void;
  initialData?: { leaveStartDate?: string; leaveEndDate?: string };
}

export default function MedicalLeaveForm({ onSubmit, onCancel, initialData }: MedicalLeaveFormProps) {
  const { user } = useCurrentUser();
  const [formData, setFormData] = useState<MedicalLeaveData>({
    patientFirstName: '',
    patientLastName: '',
    patientPesel: '',
    patientEmail: '',
    patientPhone: '',
    patientAddress: '',
    patientPostalCode: '',
    patientCity: '',
    diagnosis: '',
    icd10Code: '',
    diagnosisDescription: '',
    leaveStartDate: initialData?.leaveStartDate || '',
    leaveEndDate: initialData?.leaveEndDate || '',
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

  useEffect(() => {
    if (user) {
      setFormData(prev => ({ ...prev, patientFirstName: user.firstName || '', patientLastName: user.lastName || '', patientEmail: user.email || '' }));
    }
  }, [user]);

  const validateSection = (section: number): boolean => {
    const e: Record<string, string> = {};
    if (section === 1) {
      if (!formData.patientFirstName?.trim()) e.patientFirstName = 'Imię jest wymagane';
      if (!formData.patientLastName?.trim()) e.patientLastName = 'Nazwisko jest wymagane';
      if (!formData.patientPesel?.trim()) e.patientPesel = 'PESEL jest wymagany'; else if (!/^\d{11}$/.test(formData.patientPesel)) e.patientPesel = 'PESEL musi mieć 11 cyfr';
      if (!formData.patientEmail?.trim()) e.patientEmail = 'Email jest wymagany';
      if (!formData.patientPhone?.trim()) e.patientPhone = 'Telefon jest wymagany';
    }
    if (section === 3) {
      if (!formData.leaveStartDate) e.leaveStartDate = 'Data rozpoczęcia jest wymagana';
      if (!formData.leaveEndDate) e.leaveEndDate = 'Data zakończenia jest wymagana';
      if (!formData.leaveReason) e.leaveReason = 'Przyczyna niezdolności jest wymagana';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (f: keyof MedicalLeaveData, v: any) => { setFormData(p => ({ ...p, [f]: v })); if (errors[f]) setErrors(p => ({ ...p, [f]: '' })); };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (validateSection(1) && validateSection(2) && validateSection(3)) onSubmit(formData);
  };

  return (
    <div>
      <div className="mb-6"><h2 className="text-xl font-semibold text-gray-900">Zwolnienie lekarskie</h2><p className="text-sm text-gray-500 mt-1">Wypełnij formularz</p></div>
      <div className="mb-8"><div className="flex items-center justify-between mb-2"><span className="text-sm font-medium text-gray-600">Krok {currentSection} z {totalSections}</span></div><div className="h-2 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-blue-500 transition-all duration-300" style={{ width: `${(currentSection/totalSections)*100}%` }} /></div></div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {currentSection === 1 && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center"><User className="w-5 h-5 text-blue-600" /></div><h3 className="font-semibold text-gray-900">Dane pacjenta</h3></div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-sm font-medium mb-1">Imię <span className="text-red-500">*</span></label><input type="text" value={formData.patientFirstName} onChange={e=>handleChange('patientFirstName',e.target.value)} className={`w-full px-4 py-3 rounded-lg border ${errors.patientFirstName?'border-red-500':'border-gray-200'}`} /></div>
              <div><label className="block text-sm font-medium mb-1">Nazwisko <span className="text-red-500">*</span></label><input type="text" value={formData.patientLastName} onChange={e=>handleChange('patientLastName',e.target.value)} className={`w-full px-4 py-3 rounded-lg border ${errors.patientLastName?'border-red-500':'border-gray-200'}`} /></div>
            </div>
            <div><label className="block text-sm font-medium mb-1">PESEL <span className="text-red-500">*</span></label><input type="text" value={formData.patientPesel} onChange={e=>handleChange('patientPesel',e.target.value)} className={`w-full px-4 py-3 rounded-lg border ${errors.patientPesel?'border-red-500':'border-gray-200'}`} /></div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-sm font-medium mb-1">Email <span className="text-red-500">*</span></label><input type="email" value={formData.patientEmail} onChange={e=>handleChange('patientEmail',e.target.value)} className={`w-full px-4 py-3 rounded-lg border ${errors.patientEmail?'border-red-500':'border-gray-200'}`} /></div>
              <div><label className="block text-sm font-medium mb-1">Telefon <span className="text-red-500">*</span></label><input type="tel" value={formData.patientPhone} onChange={e=>handleChange('patientPhone',e.target.value)} className={`w-full px-4 py-3 rounded-lg border ${errors.patientPhone?'border-red-500':'border-gray-200'}`} /></div>
            </div>
          </div>
        )}
        {currentSection === 2 && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center"><Stethoscope className="w-5 h-5 text-blue-600" /></div><h3 className="font-semibold text-gray-900">Rozpoznanie</h3></div>
            <div><label className="block text-sm font-medium mb-1">Opis rozpoznania</label><textarea value={formData.diagnosisDescription} onChange={e=>handleChange('diagnosisDescription',e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-200 min-h-[100px]" /></div>
          </div>
        )}
        {currentSection === 3 && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center"><Calendar className="w-5 h-5 text-blue-600" /></div><h3 className="font-semibold text-gray-900">Okres niezdolności</h3></div>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-sm font-medium mb-1">Data od <span className="text-red-500">*</span></label><input type="date" value={formData.leaveStartDate} onChange={e=>handleChange('leaveStartDate',e.target.value)} className={`w-full px-4 py-3 rounded-lg border ${errors.leaveStartDate?'border-red-500':'border-gray-200'}`} /></div>
              <div><label className="block text-sm font-medium mb-1">Data do <span className="text-red-500">*</span></label><input type="date" value={formData.leaveEndDate} onChange={e=>handleChange('leaveEndDate',e.target.value)} min={formData.leaveStartDate} className={`w-full px-4 py-3 rounded-lg border ${errors.leaveEndDate?'border-red-500':'border-gray-200'}`} /></div>
            </div>
            <div><label className="block text-sm font-medium mb-1">Przyczyna <span className="text-red-500">*</span></label><div className="grid grid-cols-2 gap-3">{['illness','accident','quarantine','other'].map(o=>(<button key={o} type="button" onClick={()=>handleChange('leaveReason',o)} className={`py-3 px-4 rounded-lg border-2 ${formData.leaveReason===o?'border-blue-500 bg-blue-50':'border-gray-200'}`}>{o==='illness'?'Choroba':o==='accident'?'Wypadek':o==='quarantine'?'Kwarantanna':'Inna'}</button>))}</div></div>
          </div>
        )}
        <div className="flex justify-between pt-6 border-t border-gray-100">
          <button type="button" onClick={currentSection===1?onCancel:()=>setCurrentSection(s=>s-1)} className="px-6 py-3 text-gray-600 hover:text-gray-900 font-medium">{currentSection===1?'Anuluj':'Wstecz'}</button>
          {currentSection<totalSections ? <button type="button" onClick={()=>{if(validateSection(currentSection))setCurrentSection(s=>s+1)}} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">Dalej</button> : <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">Wyślij formularz</button>}
        </div>
      </form>
    </div>
  );
}