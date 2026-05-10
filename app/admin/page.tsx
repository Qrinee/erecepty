import { cookies } from "next/headers";
import AdminSubmissionsTable from "@/components/admin/AdminSubmissionsTable";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
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

export default async function AdminPage() {
  const user = await getUser();
  const currentUser = user?.data?.user;
  if (!currentUser || currentUser.role !== "administrator") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Brak dostępu do panelu lekarza.</p>
      </div>
    );
  }
  const stats = await getStats();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            Panel lekarza
          </h1>
          <p className="text-gray-600">Zarządzaj konsultacjami i zwolnieniami lekarskimi</p>
        </div>

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

          <div className="bg-white rounded-xl shadow-sm p-6 relative">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Oczekujące
            </h2>
            <p className="text-3xl font-bold text-yellow-600">
              {stats.byStatus.pending}
            </p>
            <p className="text-sm text-gray-500 mt-1">do przeglądu</p>
            {stats.byStatus.pending > 0 && (
              <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full animate-pulse">
                <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                NOWE
              </span>
            )}
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

        {/* Main table with search, tabs, and inline status changes */}
        <AdminSubmissionsTable />
      </div>
    </div>
  );
}