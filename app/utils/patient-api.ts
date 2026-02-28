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
    patient: patientData,
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
    contact: {
      email: data.contact.email,
      firstName: data.contact.firstName,
      lastName: data.contact.lastName,
      pesel: data.contact.pesel,
      phone: data.contact.phone,
      address: {
        street: data.contact.street,
        houseNumber: data.contact.houseNumber,
        apartmentNumber: data.contact.apartmentNumber || null,
        postalCode: data.contact.postalCode,
        city: data.contact.city,
      },
    },
    medical: {
      mainComplaint: data.medical.mainComplaint,
      hasChronicDiseases: data.medical.hasChronicDiseases,
      chronicDiseases: data.medical.chronicDiseases || null,
      takesMedications: data.medical.takesMedications,
      medications: data.medical.medications || null,
      hasAllergies: data.medical.hasAllergies,
      allergies: data.medical.allergies || null,
      otherMedicalInfo: data.medical.otherMedicalInfo || null,
      pregnancyStatus: data.medical.pregnancyStatus,
    },
    consent: {
      rodoConsent: data.consent.rodoConsent,
      medicalConsent: data.consent.medicalConsent,
      newsletterConsent: data.consent.newsletterConsent,
      createAccount: data.consent.createAccount,
    },
  };
}

// Validation helper for patient form
export function validatePatientForm(data: PatientFormData): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Contact validation
  if (!data.contact.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contact.email)) {
    errors.push('Invalid email address');
  }
  if (!data.contact.pesel || data.contact.pesel.length !== 11) {
    errors.push('PESEL must be 11 digits');
  }
  if (!data.contact.phone || data.contact.phone.length < 9) {
    errors.push('Invalid phone number');
  }
  if (!data.contact.firstName) {
    errors.push('First name is required');
  }
  if (!data.contact.lastName) {
    errors.push('Last name is required');
  }

  // Medical validation
  if (!data.medical.mainComplaint) {
    errors.push('Main complaint is required');
  }
  if (!data.medical.hasChronicDiseases) {
    errors.push('Chronic diseases question must be answered');
  }
  if (!data.medical.takesMedications) {
    errors.push('Medications question must be answered');
  }
  if (!data.medical.hasAllergies) {
    errors.push('Allergies question must be answered');
  }
  if (!data.medical.pregnancyStatus) {
    errors.push('Pregnancy status must be answered');
  }

  // Consent validation
  if (!data.consent.rodoConsent) {
    errors.push('RODO consent is required');
  }
  if (!data.consent.medicalConsent) {
    errors.push('Medical consent is required');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
