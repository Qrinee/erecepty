import { cookies } from "next/headers";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

// API Response types
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

interface SubmissionListItem {
  id: string;
  status: "pending" | "reviewed" | "completed" | "cancelled";
  submittedAt: string;
  hasUser: boolean;
}

interface SubmissionDetail {
  id: string;
  status: "pending" | "reviewed" | "completed" | "cancelled";
  submittedAt: string;
  submissionDate: string;
  medicines: {
    medicineId: string;
    quantity: number;
    dosage: string;
  }[];
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
      chronicDiseases?: string;
      takesMedications: string;
      medications?: string;
      hasAllergies: string;
      allergies?: string;
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
  adminNotes?: string;
  reviewedAt?: string;
}

interface SubmissionStats {
  byStatus: {
    pending: number;
    reviewed: number;
    completed: number;
    cancelled: number;
  };
  submittedToday: number;
  total: number;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

interface SubmissionsResponse {
  submissions: SubmissionListItem[];
  pagination: Pagination;
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

async function getSubmissions(): Promise<SubmissionListItem[]> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
      return [];
    }

    const response = await fetch(`${API_URL}/api/patient/submissions`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      console.error("Failed to fetch submissions:", response.status);
      return [];
    }

    const data: ApiResponse<SubmissionsResponse> = await response.json();
    
    if (data.success && data.data?.submissions) {
      return data.data.submissions;
    }
    
    return [];
  } catch (error) {
    console.error("Error fetching submissions:", error);
    return [];
  }
}

async function getStats(): Promise<SubmissionStats> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
      return { byStatus: { pending: 0, reviewed: 0, completed: 0, cancelled: 0 }, submittedToday: 0, total: 0 };
    }

    const response = await fetch(`${API_URL}/api/patient/submissions/stats`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
      next: { revalidate: 0 },
    });

    if (!response.ok) {
      return { byStatus: { pending: 0, reviewed: 0, completed: 0, cancelled: 0 }, submittedToday: 0, total: 0 };
    }

    const data: ApiResponse<SubmissionStats> = await response.json();
    
    if (data.success && data.data) {
      return data.data;
    }
    
    return { byStatus: { pending: 0, reviewed: 0, completed: 0, cancelled: 0 }, submittedToday: 0, total: 0 };
  } catch {
    return { byStatus: { pending: 0, reviewed: 0, completed: 0, cancelled: 0 }, submittedToday: 0, total: 0 };
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

export default async function AdminPage() {
  const user = await getUser();
  const submissions = await getSubmissions();
  const stats = await getStats();

  // Filter submissions by status
  const pendingSubmissions = submissions.filter((s) => s.status === "pending");
  const activeSubmissions = submissions.filter(
    (s) => s.status === "reviewed" || s.status === "pending"
  );
  const completedSubmissions = submissions.filter(
    (s) => s.status === "completed" || s.status === "cancelled"
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-8">
          Panel lekarza
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Wszystkie zgłoszenia
            </h2>
            <p className="text-3xl font-bold text-blue-600">{stats.total}</p>
            <p className="text-sm text-gray-500 mt-1">zgłoszeń</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Dzisiaj
            </h2>
            <p className="text-3xl font-bold text-green-600">
              {stats.submittedToday}
            </p>
            <p className="text-sm text-gray-500 mt-1">nowych zgłoszeń</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Oczekujące
            </h2>
            <p className="text-3xl font-bold text-yellow-600">
              {stats.byStatus.pending}
            </p>
            <p className="text-sm text-gray-500 mt-1">do przeglądu</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Zakończone
            </h2>
            <p className="text-3xl font-bold text-gray-600">
              {stats.byStatus.completed}
            </p>
            <p className="text-sm text-gray-500 mt-1">ukończone</p>
          </div>
        </div>

        {/* Pending Submissions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Zgłoszenia oczekujące ({pendingSubmissions.length})
          </h2>
          {pendingSubmissions.length > 0 ? (
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 font-medium text-gray-700">
                        ID
                      </th>
                      <th className="px-4 py-3 font-medium text-gray-700">
                        Status
                      </th>
                      <th className="px-4 py-3 font-medium text-gray-700">
                        Data zgłoszenia
                      </th>
                      <th className="px-4 py-3 font-medium text-gray-700">
                        Akcje
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {pendingSubmissions.map((submission) => (
                      <tr
                        key={submission.id}
                        className="hover:bg-gray-50"
                      >
                        <td className="px-4 py-3 text-gray-900 font-mono text-xs">
                          {submission.id.substring(0, 8)}...
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClass(
                              submission.status
                            )}`}
                          >
                            {getStatusLabel(submission.status)}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          {new Date(submission.submittedAt).toLocaleString(
                            "pl-PL"
                          )}
                        </td>
                        <td className="px-4 py-3">
                          <Link
                            href={`/admin/submissions/${submission.id}`}
                            className="text-blue-600 hover:underline"
                          >
                            Przeglądaj →
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <p className="text-gray-500">Brak oczekujących zgłoszeń</p>
            </div>
          )}
        </div>

        {/* Active Submissions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Zgłoszenia w trakcie ({activeSubmissions.length})
          </h2>
          {activeSubmissions.length > 0 ? (
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 font-medium text-gray-700">
                        ID
                      </th>
                      <th className="px-4 py-3 font-medium text-gray-700">
                        Status
                      </th>
                      <th className="px-4 py-3 font-medium text-gray-700">
                        Data zgłoszenia
                      </th>
                      <th className="px-4 py-3 font-medium text-gray-700">
                        Akcje
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {activeSubmissions.map((submission) => (
                      <tr
                        key={submission.id}
                        className="hover:bg-gray-50"
                      >
                        <td className="px-4 py-3 text-gray-900 font-mono text-xs">
                          {submission.id.substring(0, 8)}...
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClass(
                              submission.status
                            )}`}
                          >
                            {getStatusLabel(submission.status)}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          {new Date(submission.submittedAt).toLocaleString(
                            "pl-PL"
                          )}
                        </td>
                        <td className="px-4 py-3">
                          <Link
                            href={`/admin/submissions/${submission.id}`}
                            className="text-blue-600 hover:underline"
                          >
                            Przeglądaj →
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <p className="text-gray-500">Brak zgłoszeń w trakcie</p>
            </div>
          )}
        </div>

        {/* Completed Submissions */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Zakończone zgłoszenia ({completedSubmissions.length})
          </h2>
          {completedSubmissions.length > 0 ? (
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 font-medium text-gray-700">
                        ID
                      </th>
                      <th className="px-4 py-3 font-medium text-gray-700">
                        Status
                      </th>
                      <th className="px-4 py-3 font-medium text-gray-700">
                        Data zgłoszenia
                      </th>
                      <th className="px-4 py-3 font-medium text-gray-700">
                        Akcje
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {completedSubmissions.map((submission) => (
                      <tr
                        key={submission.id}
                        className="hover:bg-gray-50"
                      >
                        <td className="px-4 py-3 text-gray-900 font-mono text-xs">
                          {submission.id.substring(0, 8)}...
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClass(
                              submission.status
                            )}`}
                          >
                            {getStatusLabel(submission.status)}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-600">
                          {new Date(submission.submittedAt).toLocaleString(
                            "pl-PL"
                          )}
                        </td>
                        <td className="px-4 py-3">
                          <Link
                            href={`/admin/submissions/${submission.id}`}
                            className="text-blue-600 hover:underline"
                          >
                            Zobacz →
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <p className="text-gray-500">Brak zakończonych zgłoszeń</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
