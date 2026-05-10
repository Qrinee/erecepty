"use client";

import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ProgressHeader from '@/components/layout/ProgressHeader';
import ContactForm from '@/components/order/ContactForm';
import { MedicineData, MedicalConsultationData } from '@/app/types/medicine';
import AlertMessage from '@/components/ui/AlertMessage';

interface ContactFormData {
  email: string;
  firstName: string;
  lastName: string;
  pesel: string;
  phone: string;
  street: string;
  houseNumber: string;
  apartmentNumber: string;
  postalCode: string;
  city: string;
  createAccount: boolean;
  password?: string;
}

interface OrderData {
  medicines: MedicineData[];
  medicalConsultation: MedicalConsultationData;
  contact: ContactFormData;
  isExpress: boolean;
  isRefunded: boolean;
}

export default function PaymentPage() {
  const router = useRouter();
  const params = useParams();
  const medicineId = params?.id as string;
  const [orderData, setOrderData] = useState<{ 
    medicines: MedicineData[];
    medicalConsultation: MedicalConsultationData | null;
    isExpress: boolean;
    isRefunded: boolean;
  } | null>(null);
  const [contact, setContact] = useState<ContactFormData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');

  // Check authentication status and fetch user data
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/auth/me`, {
          credentials: 'include',
        });
        if (response.ok) {
          const data = await response.json();
          const user = data?.data?.user;
          setIsAuthenticated(true);
          if (user) {
            setUserEmail(user.email || '');
            setUserPhone(user.phone || '');
            setUserFirstName(user.firstName || '');
            setUserLastName(user.lastName || '');
          }
        }
      } catch {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  // Load order data from localStorage
  useEffect(() => {
    const loadOrderData = () => {
      try {
        const medicinesStr = localStorage.getItem('orderMedicines');
        const consultationStr = localStorage.getItem('medicalConsultation');
        const expressStr = localStorage.getItem('orderExpress');
        const refundedStr = localStorage.getItem('orderRefunded');

        if (!medicinesStr || !consultationStr) {
          // Redirect back if no data
          router.push(`/add-medicine/${medicineId}`);
          return;
        }

        const medicines: MedicineData[] = JSON.parse(medicinesStr);
        const medicalConsultation: MedicalConsultationData = JSON.parse(consultationStr);
        const isExpress = expressStr === 'true';
        const isRefunded = refundedStr === 'true';

        setOrderData({ medicines, medicalConsultation, isExpress, isRefunded });
      } catch (error) {
        console.error('Error loading order data:', error);
        router.push(`/add-medicine/${medicineId}`);
      } finally {
        setIsLoading(false);
      }
    };

    loadOrderData();
  }, [medicineId, router]);

  // Handle form submission
  const handleSubmit = async (data: ContactFormData) => {
    setContact(data);
    setError(null);
    setIsSubmitting(true);
    
    // Save contact data
    localStorage.setItem('orderContact', JSON.stringify(data));
    
    // Prepare patient data for submission - flat structure as expected by API
    if (!orderData) {
      setError('Nie udało się odczytać danych zamówienia. Spróbuj ponownie.');
      setIsSubmitting(false);
      return;
    }

    const patientData = {

      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      pesel: data.pesel,
      phone: data.phone,
    };

    // Prepare medical info from consultation
    const medicalInfo = orderData?.medicalConsultation ? {
      mainComplaint: orderData.medicalConsultation.mainComplaint || '',
      hasChronicDiseases: orderData.medicalConsultation.hasChronicDiseases || false,
      chronicDiseases: orderData.medicalConsultation.chronicDiseases || '',
      takesMedications: orderData.medicalConsultation.takesMedications || false,
      medications: orderData.medicalConsultation.medications || '',
      hasAllergies: orderData.medicalConsultation.hasAllergies || false,
      allergies: orderData.medicalConsultation.allergies || '',
      otherMedicalInfo: orderData.medicalConsultation.otherMedicalInfo || '',
      pregnancyStatus: orderData.medicalConsultation.pregnancyStatus || 'nie',
    } : null;

    // Prepare medicines data
    const medicinesData = orderData?.medicines.map((med: MedicineData) => ({
      medicineId: med._id,
      quantity: 1,
      dosage: '',
    })) || [];

    try {
      // Send data to backend
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/patient/submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          patient: patientData,
          medicalInfo,
          medicines: medicinesData,
          submissionDate: new Date().toISOString(),
          amount: Math.round(
            (orderData.medicines.length * 49.99 +
              (orderData.isExpress ? 19.99 : 0) +
              (orderData.isRefunded ? 10.00 : 0)) * 100
          ),
        }),
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Nie udało się złożyć zamówienia. Spróbuj ponownie.');
      }
      
      console.log('Patient submission successful:', result);
      
      // Check if submission was successful
      if (result.success && result.data?.payment?.paymentUrl) {
        // Redirect to payment URL
        window.location.href = result.data.payment.paymentUrl;
        return;
      }
      
      // Store submission ID for payment processing
      if (result.submissionId || result.data?.submissionId) {
        localStorage.setItem('submissionId', result.submissionId || result.data.submissionId);
      }
      
      // Show success message
      setSuccessMessage(`Zamówienie zostało złożone! ID: ${result.submissionId || result.data?.submissionId || 'Demo'}`);
      
    } catch (err) {
      console.error('Error submitting patient form:', err);
      setError(err instanceof Error ? err.message : 'Wystąpił błąd podczas składania zamówienia. Spróbuj ponownie.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle cancel - go back to step 2
  const handleCancel = () => {
    router.back();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Ładowanie...</p>
        </div>
      </div>
    );
  }

  if (!orderData) {
    return null;
  }

  const subtotal = orderData.medicines.length * 49.99;
  const expressFee = orderData.isExpress ? 19.99 : 0;
  const refundedFee = orderData.isRefunded ? 10.00 : 0;
  const total = subtotal + expressFee + refundedFee;

  return (
    <div className="min-h-screen bg-gray-50">
      <ProgressHeader currentStep={3} />

      <main className="mx-auto max-w-4xl px-6 py-8">
        {/* Order Summary */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Podsumowanie zamówienia
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Medicines */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Zamówione leki ({orderData.medicines.length})
              </h3>
              <ul className="space-y-2">
                {orderData.medicines.map((medicine, index) => (
                  <li key={medicine._id} className="text-sm">
                    <span className="font-medium">{index + 1}. {medicine.nazwaProduktuLeczniczego}</span>
                    <p className="text-gray-500">{medicine.moc}, {medicine.postacFarmaceutyczna}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price */}
            <div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Leki ({orderData.medicines.length} × 49.99 PLN)</span>
                  <span>{subtotal.toFixed(2)} PLN</span>
                </div>
                {expressFee > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Konsultacja express</span>
                    <span>+{expressFee.toFixed(2)} PLN</span>
                  </div>
                )}
                {refundedFee > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Konsultacja refundowana</span>
                    <span>+{refundedFee.toFixed(2)} PLN</span>
                  </div>
                )}
                <div className="flex justify-between pt-2 border-t border-gray-100 font-semibold text-lg">
                  <span>Łącznie</span>
                  <span className="text-blue-600">{total.toFixed(2)} PLN</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6">
            <AlertMessage 
              type="error" 
              title="Błąd podczas składania zamówienia"
              message={error}
            />
          </div>
        )}

        {/* Success Message */}
        {successMessage && (
          <div className="mb-6">
            <AlertMessage 
              type="success" 
              title="Sukces"
              message={successMessage}
            />
          </div>
        )}

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <ContactForm onSubmit={handleSubmit} onCancel={handleCancel} isSubmitting={isSubmitting} isAuthenticated={isAuthenticated} userEmail={userEmail} userPhone={userPhone} userFirstName={userFirstName} userLastName={userLastName} />
        </div>
      </main>
    </div>
  );
}
