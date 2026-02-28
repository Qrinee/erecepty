import { NextRequest, NextResponse } from 'next/server';

// POST /api/patient/submissions
// Submit patient form data to the backend

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { patient, medicalInfo, medicines, submissionDate } = body;
    
    if (!patient) {
      return NextResponse.json(
        { success: false, message: 'Patient data is required' },
        { status: 400 }
      );
    }
    
    if (!medicalInfo) {
      return NextResponse.json(
        { success: false, message: 'Medical info is required' },
        { status: 400 }
      );
    }
    
    // Validate patient data
    const { firstName, lastName, pesel, email, phone } = patient;
    
    if (!firstName || !lastName || !pesel || !email || !phone) {
      return NextResponse.json(
        { success: false, message: 'All patient fields are required' },
        { status: 400 }
      );
    }
    
    // Validate PESEL format (11 digits)
    if (!/^\d{11}$/.test(pesel)) {
      return NextResponse.json(
        { success: false, message: 'Invalid PESEL format' },
        { status: 400 }
      );
    }
    
    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // Validate medical info
    if (!medicalInfo.mainComplaint) {
      return NextResponse.json(
        { success: false, message: 'Main complaint is required' },
        { status: 400 }
      );
    }
    
    if (medicalInfo.hasChronicDiseases && !medicalInfo.chronicDiseases) {
      return NextResponse.json(
        { success: false, message: 'Chronic diseases details are required' },
        { status: 400 }
      );
    }
    
    if (medicalInfo.takesMedications && !medicalInfo.medications) {
      return NextResponse.json(
        { success: false, message: 'Medications details are required' },
        { status: 400 }
      );
    }
    
    if (medicalInfo.hasAllergies && !medicalInfo.allergies) {
      return NextResponse.json(
        { success: false, message: 'Allergies details are required' },
        { status: 400 }
      );
    }
    
    // Validate medicines array
    if (!medicines || !Array.isArray(medicines) || medicines.length === 0) {
      return NextResponse.json(
        { success: false, message: 'At least one medicine is required' },
        { status: 400 }
      );
    }
    
    // Generate a submission ID (in production, this would come from the backend database)
    const submissionId = `SUB-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    // In a real application, you would:
    // 1. Save to database
    // 2. Send to external medical system
    // 3. Trigger notifications
    // 4. Process payment
    
    // Log the received data (for debugging)
    console.log('Received patient submission:', {
      submissionId,
      patientEmail: email,
      patientName: `${firstName} ${lastName}`,
      medicinesCount: medicines.length,
      submissionDate,
    });
    
    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        submissionId,
        message: 'Patient submission received successfully',
        timestamp: new Date().toISOString(),
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Error processing patient submission:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

// GET /api/patient/submissions
// Check submission status (optional)

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const submissionId = searchParams.get('submissionId');
  
  if (!submissionId) {
    return NextResponse.json(
      { success: false, message: 'Submission ID is required' },
      { status: 400 }
    );
  }
  
  // In production, this would fetch from database
  return NextResponse.json(
    { 
      success: true, 
      submissionId,
      status: 'pending',
      message: 'Submission is being processed',
    },
    { status: 200 }
  );
}
