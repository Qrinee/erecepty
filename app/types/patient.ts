
export interface PatientData {
  firstName: string;
  lastName: string;
  pesel: string;
  email: string;
  phone: string;
}

export interface MedicalInfoData {
  mainComplaint: string;
  hasChronicDiseases: boolean;
  chronicDiseases?: string;
  takesMedications: boolean;
  medications?: string;
  hasAllergies: boolean;
  allergies?: string;
  otherMedicalInfo?: string;
  pregnancyStatus: 'tak' | 'nie';
}

export interface PatientFormData {
  patient: PatientData;
  medicalInfo: MedicalInfoData;
}

export interface PatientSubmission {
  patient: PatientData;
  medicalInfo: MedicalInfoData;
  medicines: {
    medicineId: string;
    quantity: number;
    dosage?: string;
  }[];
  submissionDate: string;
}
