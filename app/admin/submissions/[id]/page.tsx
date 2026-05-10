import { cookies } from "next/headers";
import Link from "next/link";
import StatusSelect from "@/components/admin/StatusSelect";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

// Product type
interface Product {
  _id: string;
  nazwaProduktuLeczniczego: string;
  nazwaPowszechnieStosowana: string;
  moc: string;
  postacFarmaceutyczna: string;
}

// API Response type
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

interface SubmissionDetail {
  id: string;
  submissionType: "prescription" | "medical_leave";
  status: "pending" | "reviewed" | "completed" | "cancelled";
  submittedAt: string;
  submissionDate: string;
  medicines: {
    medicineId: string;
    medicineName?: string;
    quantity: number;
    dosage: string;
  }[];
  leaveDetails?: {
    leaveStartDate?: string;
    leaveEndDate?: string;
    leaveReason?: string;
    diagnosis?: string;
    icd10Code?: string;
    isHospitalized?: boolean;
    hospitalName?: string;
    additionalNotes?: string;
    followUpVisit?: boolean;
    followUpDate?: string;
  };
  patient: {
    contact: {
      email: string;
      firstName: string;
      lastName: string;
      pesel: string;
      phone: string;
      street: string;
      houseNumber: string;
      apartmentNumber?: string;
      postalCode: string;
      city: string;
    };
    medical: {
      mainComplaint: string;
      hasChronicDiseases: string;
      chronicDiseases?: string | null;
      takesMedications: string;
      medications?: string | null;
      hasAllergies: string;
      allergies?: string | null;
      otherMedicalInfo?: string;
      pregnancyStatus: string;
    };
    consent: {
      rodoConsent: boolean;
      medicalConsent: boolean;
      newsletterConsent: boolean;
      createAccount: boolean;
    };
  };
  medicalInfo: {
    mainComplaint: string;
    hasChronicDiseases: boolean;
    chronicDiseases?: string;
    takesMedications: boolean;
    medications?: string;
    hasAllergies: boolean;
    allergies?: string;
    otherMedicalInfo?: string;
    pregnancyStatus: 'tak' | 'nie';
  } | null;
  adminNotes?: string;
  reviewedAt?: string;
}

async function getUser() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
      return null;
    }

    const response = await fetch(`${API_URL}/api/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch {
    return null;
  }
}

async function getSubmission(id: string): Promise<SubmissionDetail | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
      return null;
    }

    const response = await fetch(
      `${API_URL}/api/patient/submissions/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        next: { revalidate: 0 },
      }
    );

    if (!response.ok) {
      console.error("Failed to fetch submission:", response.status);
      return null;
    }

    const data: ApiResponse<SubmissionDetail> = await response.json();
    
    if (data.success && data.data) {
      return data.data;
    }
    
    return null;
  } catch (error) {
    console.error("Error fetching submission:", error);
    return null;
  }
}

async function getProductById(id: string): Promise<Product | null> {
  try {
    const response = await fetch(
      `${API_URL}/api/products/${id}`,
      {
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      return null;
    }

    const data: ApiResponse<Product> = await response.json();
    
    if (data.success && data.data) {
      return data.data;
    }
    
    return null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

function getStatusBadgeClass(status: string): string {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-800";
    case "reviewed":
      return "bg-blue-100 text-blue-800";
    case "completed":
      return "bg-green-100 text-green-800";
    case "cancelled":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

function getStatusLabel(status: string): string {
  switch (status) {
    case "pending":
      return "Oczekujące";
    case "reviewed":
      return "Przeglądane";
    case "completed":
      return "Zakończone";
    case "cancelled":
      return "Anulowane";
    default:
      return status;
  }
}

export default async function SubmissionDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await getUser();
  const submission = await getSubmission(id);

  if (!submission) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Zgłoszenie nie znalezione
          </h1>
          <Link href="/admin" className="text-blue-600 hover:underline">
            Wróć do panelu
          </Link>
        </div>
      </div>
    );
  }

  const { patient, medicalInfo } = submission;
  const contact = patient?.contact || patient || {};
  const medical = patient?.medical || medicalInfo || {};
  const consent = patient?.consent || {
    rodoConsent: true,
    medicalConsent: true,
    newsletterConsent: false,
    createAccount: false,
  };

  // Fetch medicine details for each medicine in the submission
  const medicinesWithDetails = await Promise.all(
    (submission.medicines || []).map(async (medicine) => {
      const product = await getProductById(medicine.medicineId);
      return {
        ...medicine,
        medicineName: product?.nazwaProduktuLeczniczego || medicine.medicineId,
      };
    })
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/admin" className="text-blue-600 hover:underline text-sm">
            ← Wróć do panelu
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
          <div className="px-6 py-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-semibold text-gray-900">
                  {submission.submissionType === "medical_leave" ? "Zgłoszenie zwolnienia lekarskiego" : "Zgłoszenie receptowe"}
                </h1>
                <p className="text-sm text-gray-500 font-mono mt-1">
                  ID: {submission.id}
                </p>
              </div>
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusBadgeClass(
                  submission.status
                )}`}
              >
                {getStatusLabel(submission.status)}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Data zgłoszenia:{" "}
              {new Date(submission.submittedAt).toLocaleString("pl-PL")}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">
              Dane pacjenta
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Imię</p>
                <p className="font-medium">{contact.firstName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Nazwisko</p>
                <p className="font-medium">{contact.lastName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">PESEL</p>
                <p className="font-medium">{contact.pesel}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">E-mail</p>
                <p className="font-medium">{contact.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Telefon</p>
                <p className="font-medium">{contact.phone}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">
              Wywiad medyczny
            </h2>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Główna dolegliwość</p>
              <p className="p-3 bg-gray-50 rounded-lg">
                {medical.mainComplaint}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Choroby przewlekłe</p>
              <div className="p-3 bg-gray-50 rounded-lg">
                {medical.hasChronicDiseases === "yes"
                  ? medical.chronicDiseases || "Brak szczegółów"
                  : "Brak"}
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Przyjmowane leki</p>
              <div className="p-3 bg-gray-50 rounded-lg">
                {medical.takesMedications === "yes"
                  ? medical.medications || "Brak szczegółów"
                  : "Brak"}
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Alergie</p>
              <div className="p-3 bg-gray-50 rounded-lg">
                {medical.hasAllergies === "yes"
                  ? medical.allergies || "Brak szczegółów"
                  : "Brak"}
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Inne informacje</p>
              <div className="p-3 bg-gray-50 rounded-lg">
                {medical.otherMedicalInfo || "Brak"}
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500 mb-1">Ciąża/karmienie</p>
              <div className="p-3 bg-gray-50 rounded-lg">
                {medical.pregnancyStatus === "pregnant"
                  ? "W ciąży"
                  : medical.pregnancyStatus === "breastfeeding"
                  ? "Karmi piersią"
                  : "Nie dotyczy"}
              </div>
            </div>
          </div>
        </div>

        {/* Show medicines only for prescriptions */}
        {submission.submissionType === "prescription" && (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">
                Zamówione leki
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left font-medium text-gray-700">
                      Lek (ID)
                    </th>
                    <th className="px-6 py-3 text-left font-medium text-gray-700">
                      Ilość
                    </th>
                    <th className="px-6 py-3 text-left font-medium text-gray-700">
                      Dawkowanie
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {(medicinesWithDetails || []).map((medicine, index) => (
                    <tr key={index}>
                      <td className="px-6 py-3">
                        <div className="font-medium">{medicine.medicineName}</div>
                        <div className="text-xs text-gray-500 font-mono">{medicine.medicineId}</div>
                      </td>
                      <td className="px-6 py-3">{medicine.quantity}</td>
                      <td className="px-6 py-3">
                        {medicine.dosage || "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Show medical leave details for medical leave submissions */}
        {submission.submissionType === "medical_leave" && submission.leaveDetails && (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">
                Szczegóły zwolnienia lekarskiego
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Rozpoznanie (diagnoza)</p>
                  <p className="p-3 bg-gray-50 rounded-lg font-medium">
                    {submission.leaveDetails.diagnosis || "Brak"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Kod ICD-10</p>
                  <p className="p-3 bg-gray-50 rounded-lg font-medium font-mono">
                    {submission.leaveDetails.icd10Code || "Brak"}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Przyczyna niezdolności do pracy</p>
                <p className="p-3 bg-gray-50 rounded-lg">
                  {submission.leaveDetails.leaveReason === "illness" ? "Choroba" 
                    : submission.leaveDetails.leaveReason === "accident" ? "Wypadek"
                    : submission.leaveDetails.leaveReason === "quarantine" ? "Kwarantanna"
                    : submission.leaveDetails.leaveReason === "other" ? "Inne"
                    : "Nie określona"}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Od dnia</p>
                  <p className="p-3 bg-gray-50 rounded-lg font-medium">
                    {submission.leaveDetails.leaveStartDate 
                      ? new Date(submission.leaveDetails.leaveStartDate).toLocaleDateString("pl-PL")
                      : "Brak"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Do dnia</p>
                  <p className="p-3 bg-gray-50 rounded-lg font-medium">
                    {submission.leaveDetails.leaveEndDate 
                      ? new Date(submission.leaveDetails.leaveEndDate).toLocaleDateString("pl-PL")
                      : "Brak"}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Hospitalizacja</p>
                  <p className="p-3 bg-gray-50 rounded-lg">
                    {submission.leaveDetails.isHospitalized ? "Tak" : "Nie"}
                  </p>
                </div>
                {submission.leaveDetails.isHospitalized && submission.leaveDetails.hospitalName && (
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Nazwa szpitala</p>
                    <p className="p-3 bg-gray-50 rounded-lg">
                      {submission.leaveDetails.hospitalName}
                    </p>
                  </div>
                )}
              </div>

              {submission.leaveDetails.additionalNotes && (
                <div>
                  <p className="text-sm text-gray-500 mb-1">Dodatkowe uwagi</p>
                  <p className="p-3 bg-gray-50 rounded-lg">
                    {submission.leaveDetails.additionalNotes}
                  </p>
                </div>
              )}

              {submission.leaveDetails.followUpVisit && (
                <div>
                  <p className="text-sm text-gray-500 mb-1">Data następnej wizyty kontrolnej</p>
                  <p className="p-3 bg-gray-50 rounded-lg">
                    {submission.leaveDetails.followUpDate 
                      ? new Date(submission.leaveDetails.followUpDate).toLocaleDateString("pl-PL")
                      : "Nie określona"}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">Notatki lekarza</h2>
          </div>
          <div className="p-6">
            <div className="bg-gray-50 rounded-lg p-4 min-h-[6.25rem]">
              <p className="text-gray-700">
                {submission.adminNotes || "Brak notatek"}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">Zgody</h2>
          </div>
          <div className="p-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span
                  className={`w-5 h-5 rounded flex items-center justify-center text-xs ${
                    consent.rodoConsent
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {consent.rodoConsent ? "✓" : "✗"}
                </span>
                <span>RODO - zgoda na przetwarzanie danych</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`w-5 h-5 rounded flex items-center justify-center text-xs ${
                    consent.medicalConsent
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {consent.medicalConsent ? "✓" : "✗"}
                </span>
                <span>Oświadczenie o prawdziwości danych</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`w-5 h-5 rounded flex items-center justify-center text-xs ${
                    consent.newsletterConsent
                      ? "bg-green-100 text-green-600"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {consent.newsletterConsent ? "✓" : "-"}
                </span>
                <span>Newsletter</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <StatusSelect
            submissionId={submission.id}
            currentStatus={submission.status}
            submissionType={submission.submissionType}
          />

          <Link
            href="/admin"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium text-center"
          >
            ← Powrót do panelu
          </Link>
        </div>
      </div>
    </div>
  );
}
