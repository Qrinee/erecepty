// Unified medicine types for the application

export interface MedicineData {
  _id: string;
  lp: number;
  nazwaProduktuLeczniczego: string;
  nazwaPowszechnieStosowana: string;
  moc: string;
  postacFarmaceutyczna: string;
  nrPozwolenia: string;
  waznoscPozwolenia: string | null;
  podmiotOdpowiedzialny: string;
  kodATC: string;
  substancjaCzynna: string;
  gatunkiDocelowe: string;
  opakowanieZgodyPrezesa: string;
  katDost: string;
  klasPLW: string;
  numerGTIN: string;
  numerEU: string;
  __v: number;
  createdAt: string;
  updatedAt: string;
}

export interface SearchResult {
  id: string;
  nazwa: string;
  nazwaPowszechnieStosowana: string;
  moc: string;
  postacFarmaceutyczna: string;
  substancjaCzynna: string;
  kodATC: string;
  katDost: string;
  suggestion: string;
}

export interface CartItem {
  medicine: MedicineData;
  quantity: number;
  dosage?: string;
}

export interface MedicalConsultationData {
  mainComplaint: string;
  hasChronicDiseases: 'yes' | 'no' | null;
  chronicDiseases?: string;
  takesMedications: 'yes' | 'no' | null;
  medications?: string;
  hasAllergies: 'yes' | 'no' | null;
  allergies?: string;
  otherMedicalInfo?: string;
  pregnancyStatus: 'pregnant' | 'breastfeeding' | 'na' | null;
  // Appointment scheduling
  appointmentDate?: string;
  appointmentTime?: string;
  consultationMethod?: 'video' | 'audio' | null;
  // Doctor specialization preference
  specialization?: string;
  // Assigned doctor info (filled by form after slot selection)
  assignedDoctorName?: string;
  assignedDoctorId?: string;
}

export interface MedicalLeaveData {
  // Patient information
  patientFirstName: string;
  patientLastName: string;
  patientPesel: string;
  patientEmail: string;
  patientPhone: string;
  patientAddress: string;
  patientPostalCode: string;
  patientCity: string;
  
  // Medical information
  diagnosis: string;
  icd10Code: string;
  diagnosisDescription: string;
  
  // Leave period
  leaveStartDate: string;
  leaveEndDate: string;
  leaveReason: 'illness' | 'accident' | 'quarantine' | 'other' | null;
  isHospitalized: 'yes' | 'no' | null;
  hospitalName?: string;
  
  // Additional information
  additionalNotes: string;
  followUpVisit: 'yes' | 'no' | null;
  followUpDate?: string;

  // Doctor specialization preference
  specialization?: string;
}