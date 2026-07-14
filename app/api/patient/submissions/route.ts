import { NextRequest, NextResponse } from 'next/server';
import { validatePESEL } from '@/app/utils/pesel-validator';

const ERROR_MESSAGES = {
  PATIENT_REQUIRED: 'Dane pacjenta są wymagane',
  MEDICAL_INFO_REQUIRED: 'Informacje medyczne są wymagane',
  FIRST_NAME_REQUIRED: 'Imię jest wymagane',
  LAST_NAME_REQUIRED: 'Nazwisko jest wymagane',
  PESEL_REQUIRED: 'PESEL jest wymagany',
  EMAIL_REQUIRED: 'Adres e-mail jest wymagany',
  PHONE_REQUIRED: 'Numer telefonu jest wymagany',
  PESEL_INVALID: 'PESEL musi składać się z 11 cyfr',
  EMAIL_INVALID: 'Podaj prawidłowy adres e-mail',
  PHONE_INVALID: 'Podaj prawidłowy numer telefonu',
  MAIN_COMPLAINT_REQUIRED: 'Opisz powód wizyty',
  CHRONIC_DISEASES_DETAILS_REQUIRED: 'Podaj szczegóły chorób przewlekłych',
  MEDICATIONS_DETAILS_REQUIRED: 'Podaj szczegóły przyjmowanych leków',
  ALLERGIES_DETAILS_REQUIRED: 'Podaj szczegóły uczuleń',
  MEDICINES_REQUIRED: 'Wybierz co najmniej jeden lek',
  INTERNAL_ERROR: 'Wystąpił błąd serwera. Spróbuj ponownie później.',
};


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { patient, medicalInfo, medicines, submissionDate } = body;

        if (!patient) {
      return NextResponse.json(
        { success: false, message: ERROR_MESSAGES.PATIENT_REQUIRED, errorCode: 'PATIENT_REQUIRED' },
        { status: 400 }
      );
    }

        if (!medicalInfo) {
      return NextResponse.json(
        { success: false, message: ERROR_MESSAGES.MEDICAL_INFO_REQUIRED, errorCode: 'MEDICAL_INFO_REQUIRED' },
        { status: 400 }
      );
    }

    const { firstName, lastName, pesel, email, phone } = patient;

        if (!firstName?.trim()) {
      return NextResponse.json(
        { success: false, message: ERROR_MESSAGES.FIRST_NAME_REQUIRED, errorCode: 'FIRST_NAME_REQUIRED' },
        { status: 400 }
      );
    }

        if (!lastName?.trim()) {
      return NextResponse.json(
        { success: false, message: ERROR_MESSAGES.LAST_NAME_REQUIRED, errorCode: 'LAST_NAME_REQUIRED' },
        { status: 400 }
      );
    }

        if (!pesel?.trim()) {
      return NextResponse.json(
        { success: false, message: ERROR_MESSAGES.PESEL_REQUIRED, errorCode: 'PESEL_REQUIRED' },
        { status: 400 }
      );
    }

        if (!email?.trim()) {
      return NextResponse.json(
        { success: false, message: ERROR_MESSAGES.EMAIL_REQUIRED, errorCode: 'EMAIL_REQUIRED' },
        { status: 400 }
      );
    }

        if (!phone?.trim()) {
      return NextResponse.json(
        { success: false, message: ERROR_MESSAGES.PHONE_REQUIRED, errorCode: 'PHONE_REQUIRED' },
        { status: 400 }
      );
    }

    const peselValidation = validatePESEL(pesel);
    if (!peselValidation.valid) {
      return NextResponse.json(
        { success: false, message: peselValidation.errors[0] || ERROR_MESSAGES.PESEL_INVALID, errorCode: 'PESEL_INVALID' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: ERROR_MESSAGES.EMAIL_INVALID, errorCode: 'EMAIL_INVALID' },
        { status: 400 }
      );
    }

    if (!/^\d{9,}$/.test(phone.replace(/\D/g, ''))) {
      return NextResponse.json(
        { success: false, message: ERROR_MESSAGES.PHONE_INVALID, errorCode: 'PHONE_INVALID' },
        { status: 400 }
      );
    }

    if (!medicalInfo.mainComplaint?.trim()) {
      return NextResponse.json(
        { success: false, message: ERROR_MESSAGES.MAIN_COMPLAINT_REQUIRED, errorCode: 'MAIN_COMPLAINT_REQUIRED' },
        { status: 400 }
      );
    }

        if (medicalInfo.hasChronicDiseases && !medicalInfo.chronicDiseases?.trim()) {
      return NextResponse.json(
        { success: false, message: ERROR_MESSAGES.CHRONIC_DISEASES_DETAILS_REQUIRED, errorCode: 'CHRONIC_DISEASES_DETAILS_REQUIRED' },
        { status: 400 }
      );
    }

        if (medicalInfo.takesMedications && !medicalInfo.medications?.trim()) {
      return NextResponse.json(
        { success: false, message: ERROR_MESSAGES.MEDICATIONS_DETAILS_REQUIRED, errorCode: 'MEDICATIONS_DETAILS_REQUIRED' },
        { status: 400 }
      );
    }

        if (medicalInfo.hasAllergies && !medicalInfo.allergies?.trim()) {
      return NextResponse.json(
        { success: false, message: ERROR_MESSAGES.ALLERGIES_DETAILS_REQUIRED, errorCode: 'ALLERGIES_DETAILS_REQUIRED' },
        { status: 400 }
      );
    }

    const doctorChoosesMeds = medicalInfo?.doctorChoosesMeds === true;
    if (!doctorChoosesMeds && (!medicines || !Array.isArray(medicines) || medicines.length === 0)) {
      return NextResponse.json(
        { success: false, message: ERROR_MESSAGES.MEDICINES_REQUIRED, errorCode: 'MEDICINES_REQUIRED' },
        { status: 400 }
      );
    }

    if (doctorChoosesMeds && !medicalInfo?.doctorChoosesMedsDescription?.trim()) {
      return NextResponse.json(
        { success: false, message: 'Opisz swoje objawy lub dolegliwości, aby lekarz mógł dobrać odpowiednie leki', errorCode: 'SYMPTOMS_DESCRIPTION_REQUIRED' },
        { status: 400 }
      );
    }

    const submissionId = `SUB-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;


    console.log('Received patient submission:', {
      submissionId,
      patientEmail: email,
      patientName: `${firstName} ${lastName}`,
      medicinesCount: medicines.length,
      submissionDate,
    });

    return NextResponse.json(
      { 
        success: true, 
        submissionId,
        message: 'Zgłoszenie zostało przyjęte pomyślnie',
        timestamp: new Date().toISOString(),
      },
      { status: 201 }
    );

      } catch (error) {
    console.error('Error processing patient submission:', error);

        return NextResponse.json(
      { 
        success: false, 
        message: ERROR_MESSAGES.INTERNAL_ERROR,
        errorCode: 'INTERNAL_ERROR',
      },
      { status: 500 }
    );
  }
}


export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const submissionId = searchParams.get('submissionId');

    if (!submissionId) {
    return NextResponse.json(
      { success: false, message: 'ID zgłoszenia jest wymagane', errorCode: 'SUBMISSION_ID_REQUIRED' },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { 
      success: true, 
      submissionId,
      status: 'pending',
      message: 'Zgłoszenie jest przetwarzane',
    },
    { status: 200 }
  );
}
