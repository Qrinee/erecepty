"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronDown, ChevronUp, Calendar, Clock, Video, Phone, Loader2, UserCheck, Search, Trash2 } from "lucide-react";
import { MedicalConsultationData } from '@/app/types/medicine';

interface MedicalConsultationFormProps {
  onSubmit: (data: MedicalConsultationData) => void;
  onCancel: () => void;
  isOpen?: boolean;
  initialData?: MedicalConsultationData;
  showMedicineSearch?: boolean;
  hideScheduling?: boolean;
  onMedicinesChange?: (medicines: { medicineId: string; name: string; quantity: number; dosage: string }[]) => void;
}

type SlotData = {
  doctorName: string|null; doctorId: string|null; doctorSpecializations: string[];
  availabilityType: string|null; availableSlots: string[]; message?: string;
};

export default function MedicalConsultationForm(p: MedicalConsultationFormProps) {
  const { onSubmit, onCancel, isOpen = true, initialData, showMedicineSearch, hideScheduling, onMedicinesChange } = p;
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

  const [formData, setFormData] = useState<MedicalConsultationData>({
    mainComplaint: initialData?.mainComplaint || '', hasChronicDiseases: null, chronicDiseases: '',
    takesMedications: null, medications: '', hasAllergies: null, allergies: '',
    otherMedicalInfo: '', pregnancyStatus: null,
    appointmentDate: initialData?.appointmentDate || '', appointmentTime: initialData?.appointmentTime || '',
    consultationMethod: initialData?.consultationMethod || null, specialization: initialData?.specialization || '',
    doctorChoosesMeds: initialData?.doctorChoosesMeds || false,
    doctorChoosesMedsDescription: initialData?.doctorChoosesMedsDescription || '',
  });

  const [specializations, setSpecializations] = useState<string[]>([]);
  const [loadingSpecs, setLoadingSpecs] = useState(true);
  const [slotsData, setSlotsData] = useState<SlotData|null>(null);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const slotsTimer = useRef<ReturnType<typeof setTimeout>|null>(null);

  const [medQ, setMedQ] = useState("");
  const [medResults, setMedResults] = useState<any[]>([]);
  const [medSearching, setMedSearching] = useState(false);
  const [selectedMeds, setSelectedMeds] = useState<{medicineId:string;name:string}[]>([]);
  const medTimer = useRef<ReturnType<typeof setTimeout>|null>(null);

  useEffect(() => {
    fetch(`${API_URL}/api/doctor/specializations`)
      .then(r=>r.json()).then(d=>{if(d.success&&Array.isArray(d.data))setSpecializations(d.data)})
      .catch(()=>{}).finally(()=>setLoadingSpecs(false));
  }, [API_URL]);

  const fetchSlots = useCallback(async (date:string, spec?:string) => {
    if(!date){setSlotsData(null);return}
    setLoadingSlots(true);
    try {
      const params = new URLSearchParams({date}); if(spec) params.set('specialization',spec);
      const r = await fetch(`${API_URL}/api/doctor/available-slots?${params.toString()}`);
      const d = await r.json();
      if(d.success){
        setSlotsData(d.data);
        if(formData.appointmentTime && !d.data.availableSlots.includes(formData.appointmentTime))
          setFormData(prev=>({...prev,appointmentTime:''}));
      } else setSlotsData(null);
    } catch { setSlotsData(null) } finally { setLoadingSlots(false) }
  }, [API_URL, formData.appointmentTime]);

  useEffect(()=>{
    if(slotsTimer.current)clearTimeout(slotsTimer.current);
    slotsTimer.current = setTimeout(()=>fetchSlots(formData.appointmentDate||'',formData.specialization||undefined),300);
    return ()=>{if(slotsTimer.current)clearTimeout(slotsTimer.current)};
  },[formData.appointmentDate, formData.specialization, fetchSlots]);

  const searchMeds = useCallback(async (q:string) => {
    if(!q||q.length<2){setMedResults([]);return}
    setMedSearching(true);
    try {
      const r = await fetch(`${API_URL}/api/search/autocomplete?query=${encodeURIComponent(q)}&limit=8`);
      const d = await r.json();
      const list = d.success && Array.isArray(d.results) ? d.results 
                 : d.success && Array.isArray(d.data) ? d.data 
                 : Array.isArray(d) ? d : [];
      setMedResults(list);
    } catch { setMedResults([]) } finally { setMedSearching(false) }
  }, [API_URL]);

  useEffect(()=>{
    if(medTimer.current)clearTimeout(medTimer.current);
    medTimer.current = setTimeout(()=>searchMeds(medQ),300);
    return ()=>{if(medTimer.current)clearTimeout(medTimer.current)};
  },[medQ,searchMeds]);

  const addMed = (prod:any) => {
    const id = String(prod.id||prod._id);
    if(selectedMeds.some(m=>m.medicineId===id)) return;
    const name = prod.suggestion || prod.nazwa || prod.nazwaProduktuLeczniczego || 'Lek';
    const upd = [...selectedMeds, {medicineId:id, name}];
    setSelectedMeds(upd); setMedQ(''); setMedResults([]);
    onMedicinesChange?.(upd.map(m=>({...m, quantity:1, dosage:''})));
  };
  const removeMed = (id:string) => {
    const upd = selectedMeds.filter(m=>m.medicineId!==id);
    setSelectedMeds(upd);
    onMedicinesChange?.(upd.map(m=>({...m, quantity:1, dosage:''})));
  };

  const handleChange = (f:keyof MedicalConsultationData, v:any) => setFormData(prev=>({...prev,[f]:v}));
  const [expanded, setExpanded] = useState<Record<string,boolean>>({chronicDiseases:true,medications:true,allergies:true,pregnancy:true});
  const toggle = (s:string) => setExpanded(prev=>({...prev,[s]:!prev[s]}));

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    const errs:Record<string,string>={};
    if(!formData.mainComplaint?.trim()) errs.mainComplaint='Opis problemu jest wymagany';
    if(formData.hasChronicDiseases==='yes'&&!formData.chronicDiseases?.trim()) errs.chronicDiseases='Wymagane';
    if(formData.takesMedications==='yes'&&!formData.medications?.trim()) errs.medications='Wymagane';
    if(formData.hasAllergies==='yes'&&!formData.allergies?.trim()) errs.allergies='Wymagane';
    if(formData.pregnancyStatus===null) errs.pregnancyStatus='Wymagane';
    if(!hideScheduling){
      if(!formData.appointmentDate?.trim()) errs.appointmentDate='Data wymagana';
      if(!formData.appointmentTime?.trim()) errs.appointmentTime='Godzina wymagana';
      if(!formData.consultationMethod) errs.consultationMethod='Wybierz metodę';
    }
    if(formData.doctorChoosesMeds && !formData.doctorChoosesMedsDescription?.trim()) errs.doctorChoosesMedsDescription='Wymagane';
    if(Object.keys(errs).length>0) return;
    onSubmit(formData);
  };

  if(!isOpen) return null;

  return (
    <div>
      <div className="mb-6"><h2 className="text-xl font-semibold text-gray-900">Wywiad medyczny</h2><p className="text-sm text-gray-500 mt-1">Te informacje pomogą lekarzowi wystawić receptę</p></div>
      <form onSubmit={handleSubmit} className="space-y-6">

        {showMedicineSearch && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <input 
                id="doctorChoosesMeds" 
                type="checkbox" 
                checked={formData.doctorChoosesMeds || false} 
                onChange={e => {
                  const val = e.target.checked;
                  handleChange('doctorChoosesMeds', val);
                  if (val) {
                    setSelectedMeds([]);
                    onMedicinesChange?.([]);
                  }
                }}
                className="w-4 h-4 accent-[#064743] cursor-pointer"
              />
              <label htmlFor="doctorChoosesMeds" className="text-sm font-semibold text-slate-700 cursor-pointer">
                Chcę, aby to lekarz dobrał odpowiednie leki na podstawie moich objawów (nie muszę wpisywać nazw leków)
              </label>
            </div>

            {!formData.doctorChoosesMeds ? (
              <>
                <h3 className="font-semibold text-blue-900 mb-2">Wyszukaj leki, których potrzebujesz</h3>
                <div className="relative mb-3">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input type="text" value={medQ} onChange={e=>setMedQ(e.target.value)} placeholder="Wpisz nazwę leku..." className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white" autoComplete="off" />
                  {medSearching && <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 animate-spin text-gray-400" />}
                  {medResults.length > 0 && (
                    <div className="absolute z-50 left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-2xl max-h-56 overflow-y-auto">
                      {medResults.map((p:any) => (
                        <button key={p.id||p._id} type="button" onClick={()=>addMed(p)} className="w-full text-left px-4 py-3 text-sm hover:bg-blue-50 border-b border-gray-100 last:border-0 transition-colors">
                          <div className="font-semibold text-gray-900">{p.suggestion||p.nazwa||p.nazwaProduktuLeczniczego||'Lek'}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{p.substancjaCzynna||''}{p.moc?` | ${p.moc}`:''}{p.postacFarmaceutyczna?` | ${p.postacFarmaceutyczna}`:''}</div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                {selectedMeds.length > 0 && (
                  <div className="space-y-2 bg-white rounded-lg p-3">
                    <p className="text-xs font-semibold text-gray-500 mb-2">Wybrane leki:</p>
                    {selectedMeds.map(m=>(
                      <div key={m.medicineId} className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg text-sm">
                        <span className="flex-1 font-medium text-gray-900 truncate">{m.name}</span>
                        <button type="button" onClick={()=>removeMed(m.medicineId)} className="text-red-500 hover:text-red-700 p-1"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-lg p-3 border border-gray-100">
                <label className="block text-xs font-semibold text-gray-500 mb-2">Jakich leków lub pomocy potrzebujesz? Opisz swoje objawy/dolegliwości <span className="text-red-500">*</span></label>
                <textarea 
                  value={formData.doctorChoosesMedsDescription || ''} 
                  onChange={e=>handleChange('doctorChoosesMedsDescription', e.target.value)} 
                  placeholder="Opisz krótko objawy lub leki, które są potrzebne, aby lekarz mógł dobrać właściwe preparaty..." 
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 min-h-[80px] resize-y bg-white"
                  required={formData.doctorChoosesMeds}
                />
              </div>
            )}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">Wybierz specjalizację lekarza</label>
          {loadingSpecs ? <div className="flex items-center gap-2 text-gray-400"><Loader2 className="w-4 h-4 animate-spin"/>Ładowanie...</div> : (
            <select value={formData.specialization||''} onChange={e=>handleChange('specialization', e.target.value||null)} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 bg-white">
              <option value="">Dowolna</option>{specializations.map(s=><option key={s} value={s}>{s}</option>)}
            </select>
          )}
        </div>

        <div><label className="block text-sm font-medium text-gray-900 mb-2">Opisz problem <span className="text-red-500">*</span></label><textarea value={formData.mainComplaint} onChange={e=>handleChange('mainComplaint',e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-100 min-h-[100px] resize-y" required /></div>

        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button type="button" onClick={()=>toggle('chronicDiseases')} className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100"><span className="text-sm font-medium">Choroby przewlekłe? <span className="text-red-500">*</span></span>{expanded.chronicDiseases?<ChevronUp className="w-5 h-5"/>:<ChevronDown className="w-5 h-5"/>}</button>
          {expanded.chronicDiseases&&<div className="p-4"><div className="flex gap-4"><label className="flex items-center gap-2"><input type="radio" name="cd" checked={formData.hasChronicDiseases==='yes'} onChange={()=>{handleChange('hasChronicDiseases','yes');handleChange('chronicDiseases','')}}/>Tak</label><label className="flex items-center gap-2"><input type="radio" name="cd" checked={formData.hasChronicDiseases==='no'} onChange={()=>{handleChange('hasChronicDiseases','no');handleChange('chronicDiseases','')}}/>Nie</label></div>{formData.hasChronicDiseases==='yes'&&<textarea value={formData.chronicDiseases} onChange={e=>handleChange('chronicDiseases',e.target.value)} className="w-full mt-2 px-4 py-3 rounded-lg border min-h-[80px]" required/>}</div>}
        </div>

        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button type="button" onClick={()=>toggle('medications')} className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100"><span className="text-sm font-medium">Przyjmujesz leki? <span className="text-red-500">*</span></span>{expanded.medications?<ChevronUp className="w-5 h-5"/>:<ChevronDown className="w-5 h-5"/>}</button>
          {expanded.medications&&<div className="p-4"><div className="flex gap-4"><label className="flex items-center gap-2"><input type="radio" name="tm" checked={formData.takesMedications==='yes'} onChange={()=>{handleChange('takesMedications','yes');handleChange('medications','')}}/>Tak</label><label className="flex items-center gap-2"><input type="radio" name="tm" checked={formData.takesMedications==='no'} onChange={()=>{handleChange('takesMedications','no');handleChange('medications','')}}/>Nie</label></div>{formData.takesMedications==='yes'&&<textarea value={formData.medications} onChange={e=>handleChange('medications',e.target.value)} className="w-full mt-2 px-4 py-3 rounded-lg border min-h-[80px]" required/>}</div>}
        </div>

        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button type="button" onClick={()=>toggle('allergies')} className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100"><span className="text-sm font-medium">Alergie? <span className="text-red-500">*</span></span>{expanded.allergies?<ChevronUp className="w-5 h-5"/>:<ChevronDown className="w-5 h-5"/>}</button>
          {expanded.allergies&&<div className="p-4"><div className="flex gap-4"><label className="flex items-center gap-2"><input type="radio" name="ha" checked={formData.hasAllergies==='yes'} onChange={()=>{handleChange('hasAllergies','yes');handleChange('allergies','')}}/>Tak</label><label className="flex items-center gap-2"><input type="radio" name="ha" checked={formData.hasAllergies==='no'} onChange={()=>{handleChange('hasAllergies','no');handleChange('allergies','')}}/>Nie</label></div>{formData.hasAllergies==='yes'&&<textarea value={formData.allergies} onChange={e=>handleChange('allergies',e.target.value)} className="w-full mt-2 px-4 py-3 rounded-lg border min-h-[80px]" required/>}</div>}
        </div>

        {!hideScheduling && (
        <div className="border border-gray-200 rounded-lg overflow-hidden"><div className="p-4 bg-gray-50"><div className="flex items-center gap-3 mb-3"><Calendar className="w-5 h-5 text-[#064743]"/><span className="text-sm font-medium">Terminarz <span className="text-red-500">*</span></span></div>
          <div className="mb-4"><label className="block text-sm font-medium text-gray-700 mb-1">Data</label><input type="date" value={formData.appointmentDate||''} onChange={e=>handleChange('appointmentDate',e.target.value)} min={new Date().toISOString().split('T')[0]} className="w-full px-4 py-2.5 rounded-lg border" required/></div>
          {formData.appointmentDate && (
            <div className="mb-4">
              {loadingSlots ? <div className="flex items-center gap-2 text-sm text-gray-400 p-3"><Loader2 className="w-4 h-4 animate-spin"/>Sprawdzanie...</div> : slotsData ? (
                <div className={`p-3 rounded-lg ${slotsData.doctorName?'bg-green-50 border border-green-200':'bg-yellow-50 border border-yellow-200'}`}>
                  {slotsData.doctorName ? <div className="flex items-center gap-2 mb-2"><UserCheck className="w-5 h-5 text-green-600"/><span className="font-semibold text-green-800">Dostępny specjalista</span>{slotsData.doctorSpecializations && slotsData.doctorSpecializations.length > 0 && <span className="text-xs text-green-600">({slotsData.doctorSpecializations.join(', ')})</span>}</div> : <div className="text-yellow-700 text-sm">{slotsData.message||'Brak lekarzy.'}</div>}
                  {slotsData.availableSlots.length > 0 ? <div><label className="block text-sm font-medium text-gray-700 mb-1">Dostępne godziny:</label><select value={formData.appointmentTime||''} onChange={e=>handleChange('appointmentTime',e.target.value)} className="w-full px-4 py-2.5 rounded-lg border bg-white" required><option value="">Wybierz</option>{slotsData.availableSlots.map(s=><option key={s} value={s}>{s}</option>)}</select></div> : slotsData.doctorName ? <p className="text-xs text-orange-600 mt-1">Brak wolnych terminów.</p> : null}
                </div>
              ) : null}
            </div>
          )}
          <div><label className="block text-sm font-medium text-gray-700 mb-2">Sposób konsultacji</label><div className="grid grid-cols-2 gap-3">
            <label className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer ${formData.consultationMethod==='video'?'border-[#064743] bg-[#DAE9E6]':'border-gray-200'}`}><input type="radio" name="cm" checked={formData.consultationMethod==='video'} onChange={()=>handleChange('consultationMethod','video')}/><Video className="w-5 h-5"/><span>Wideo</span></label>
            <label className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer ${formData.consultationMethod==='audio'?'border-[#064743] bg-[#DAE9E6]':'border-gray-200'}`}><input type="radio" name="cm" checked={formData.consultationMethod==='audio'} onChange={()=>handleChange('consultationMethod','audio')}/><Phone className="w-5 h-5"/><span>Audio</span></label>
          </div></div>
        </div></div>
        )}

        <div className="border-t border-gray-100"></div>
        <div><label className="block text-sm font-medium text-gray-900 mb-2">Inne ważne informacje medyczne?</label><textarea value={formData.otherMedicalInfo} onChange={e=>handleChange('otherMedicalInfo',e.target.value)} className="w-full px-4 py-3 rounded-lg border min-h-[80px] resize-y"/></div>

        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button type="button" onClick={()=>toggle('pregnancy')} className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100"><span className="text-sm font-medium">Ciąża/karmienie? <span className="text-red-500">*</span></span>{expanded.pregnancy?<ChevronUp className="w-5 h-5"/>:<ChevronDown className="w-5 h-5"/>}</button>
          {expanded.pregnancy&&<div className="p-4 space-y-3"><label className="flex items-center gap-2"><input type="radio" name="ps" checked={formData.pregnancyStatus==='na'} onChange={()=>handleChange('pregnancyStatus','na')}/>Nie dotyczy</label><label className="flex items-center gap-2"><input type="radio" name="ps" checked={formData.pregnancyStatus==='pregnant'} onChange={()=>handleChange('pregnancyStatus','pregnant')}/>W ciąży</label><label className="flex items-center gap-2"><input type="radio" name="ps" checked={formData.pregnancyStatus==='breastfeeding'} onChange={()=>handleChange('pregnancyStatus','breastfeeding')}/>Karmię</label></div>}
        </div>

        <div className="flex gap-4 pt-4 border-t border-gray-100">
          <button type="button" onClick={onCancel} className="flex-1 px-6 py-3 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50">← Wróć</button>
          <button type="submit" className="flex-1 px-6 py-3 bg-[#064743] text-white rounded-lg hover:bg-[#1A5D54]">Dalej →</button>
        </div>
      </form>
    </div>
  );
}