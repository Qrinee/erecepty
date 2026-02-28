// API utilities for patient form submission
import { PatientFormData, PatientSubmission } from '@/app/types/patient';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL + '/api';

export interface SubmitPatientFormParams {
  patientData: PatientFormData;
  medicines: {
    medicineId: string;
    quantity: number;
    dosage?: string;
  }[];
}

export interface SubmitPatientFormResponse {
  success: boolean;
  submissionId?: string;
  message?: string;
  error?: string;
}

export async function submitPatientForm(
  params: SubmitPatientFormParams
): Promise<SubmitPatientFormResponse> {
  const { patientData, medicines } = params;

  const submission: PatientSubmission = {
    patient: patientData.patient,
    medicalInfo: patientData.medicalInfo,
    medicines,
    submissionDate: new Date().toISOString(),
  };

  try {
    const response = await fetch(`${API_BASE_URL}/patient/submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submission),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to submit patient form');
    }

    const data = await response.json();
    
    return {
      success: true,
      submissionId: data.submissionId,
      message: 'Form submitted successfully',
    };
  } catch (error) {
    console.error('Error submitting patient form:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

// Transform patient form data for backend compatibility
export function transformPatientDataForBackend(data: PatientFormData) {
  return {
    patient: data.patient,
    medicalInfo: data.medicalInfo,
  };
}

// Validation helper for patient form
export function validatePatientForm(data: PatientFormData): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Patient data validation
  if (!data.patient.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.patient.email)) {
    errors.push('Invalid email address');
  }
  if (!data.patient.pesel || data.patient.pesel.length !== 11) {
    errors.push('PESEL must be 11 digits');
  }
  if (!data.patient.phone || data.patient.phone.length < 9) {
    errors.push('Invalid phone number');
  }
  if (!data.patient.firstName) {
    errors.push('First name is required');
  }
  if (!data.patient.lastName) {
    errors.push('Last name is required');
  }

  // Medical info validation
  if (!data.medicalInfo.mainComplaint) {
    errors.push('Main complaint is required');
  }
  if (data.medicalInfo.hasChronicDiseases === undefined) {
    errors.push('Chronic diseases question must be answered');
  }
  if (data.medicalInfo.takesMedications === undefined) {
    errors.push('Medications question must be answered');
  }
  if (data.medicalInfo.hasAllergies === undefined) {
    errors.push('Allergies question must be answered');
  }
  if (!data.medicalInfo.pregnancyStatus) {
    errors.push('Pregnancy status must be answered');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
