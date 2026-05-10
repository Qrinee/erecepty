"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

interface PatientPreview {
  firstName: string;
  lastName: string;
  pesel: string;
  email?: string;
  phone?: string;
}

interface SubmissionItem {
  id: string;
  submissionType: "prescription" | "medical_leave";
  status: "pending" | "reviewed" | "completed" | "cancelled";
  submittedAt: string;
  hasUser: boolean;
  isRead: boolean;
  patient?: PatientPreview;
  medicinesCount?: number;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

interface SubmissionsResponse {
  submissions: SubmissionItem[];
  pagination: Pagination;
}

const STATUS_OPTIONS = [
  { value: "reviewed", label: "W trakcie przeglądu" },
  { value: "completed", label: "Wystawiono" },
  { value: "cancelled", label: "Anulowano" },
];

function getStatusBadgeBg(status: string): string {
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

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  const diffH = Math.floor(diffMs / 3600000);
  const diffD = Math.floor(diffMs / 86400000);

  if (diffMin < 60) return `${diffMin} min temu`;
  if (diffH < 24) return `${diffH} godz temu`;
  if (diffD < 7) return `${diffD} dni temu`;
  return d.toLocaleDateString("pl-PL", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
}

export default function AdminSubmissionsTable() {
  const [submissions, setSubmissions] = useState<SubmissionItem[]>([]);
  const [pagination, setPagination] = useState<Pagination>({ page: 1, limit: 30, total: 0, pages: 0 });
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "pending" | "reviewed" | "completed" | "cancelled">("all");
  const [updatingIds, setUpdatingIds] = useState<Set<string>>(new Set());
  const router = useRouter();

  const fetchSubmissions = useCallback(async (tab: string, searchTerm: string) => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.set("limit", "100");
      if (tab !== "all") params.set("status", tab);
      if (searchTerm) params.set("search", searchTerm);

      const res = await fetch(`${API_URL}/api/patient/submissions?${params.toString()}`, {
        credentials: "include",
      });

      if (!res.ok) throw new Error("Failed to fetch");
      const data: { success: boolean; data: SubmissionsResponse } = await res.json();
      if (data.success) {
        setSubmissions(data.data.submissions);
        setPagination(data.data.pagination);
      }
    } catch (err) {
      console.error("Error fetching submissions:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSubmissions(activeTab, search);
  }, [activeTab, search, fetchSubmissions]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(searchInput.trim());
  };

  const handleStatusChange = async (submissionId: string, newStatus: string) => {
    setUpdatingIds((prev) => new Set(prev).add(submissionId));
    try {
      const res = await fetch(`${API_URL}/api/patient/submissions/${submissionId}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
        credentials: "include",
      });
      if (!res.ok) {
        const errData = await res.json();
        alert(errData.message || "Nie udało się zmienić statusu");
      } else {
        setSubmissions((prev) =>
          prev.map((s) => (s.id === submissionId ? { ...s, status: newStatus as SubmissionItem["status"], isRead: true } : s))
        );
        router.refresh();
      }
    } catch {
      alert("Błąd sieci przy zmianie statusu");
    } finally {
      setUpdatingIds((prev) => {
        const next = new Set(prev);
        next.delete(submissionId);
        return next;
      });
    }
  };

  const tabs = [
    { id: "all", label: "Wszystkie" },
    { id: "pending", label: "Oczekujące" },
    { id: "reviewed", label: "Przeglądane" },
    { id: "completed", label: "Zakończone" },
    { id: "cancelled", label: "Anulowane" },
  ] as const;

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Szukaj po imieniu, nazwisku, PESEL lub ID..."
          className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors"
        />
        <button
          type="submit"
          className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Szukaj
        </button>
        {search && (
          <button
            type="button"
            onClick={() => {
              setSearchInput("");
              setSearch("");
            }}
            className="px-4 py-2.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
          >
            Wyczyść
          </button>
        )}
      </form>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="w-8 h-8 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin" />
          </div>
        ) : submissions.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-gray-500">Brak zgłoszeń</p>
            {search && <p className="text-gray-400 text-sm mt-1">Spróbuj inne kryteria wyszukiwania</p>}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 font-medium text-gray-700 whitespace-nowrap">Pacjent / Kontakt</th>
                  <th className="px-4 py-3 font-medium text-gray-700 whitespace-nowrap">PESEL</th>
                  <th className="px-4 py-3 font-medium text-gray-700 whitespace-nowrap">Typ</th>
                  <th className="px-4 py-3 font-medium text-gray-700 whitespace-nowrap">Leki</th>
                  <th className="px-4 py-3 font-medium text-gray-700 whitespace-nowrap">Status</th>
                  <th className="px-4 py-3 font-medium text-gray-700 whitespace-nowrap">Data</th>
                  <th className="px-4 py-3 font-medium text-gray-700 whitespace-nowrap">Szczegóły</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {submissions.map((sub) => {
                  const isUpdating = updatingIds.has(sub.id);
                  const availableStatuses = STATUS_OPTIONS.filter((o) => o.value !== sub.status);
                  const isFinished = sub.status === "completed" || sub.status === "cancelled";

                  return (
                    <tr
                      key={sub.id}
                      className={`hover:bg-gray-50 transition-colors ${
                        !sub.isRead && sub.status === "pending" ? "bg-yellow-50 border-l-4 border-l-yellow-400" : ""
                      }`}
                    >
                      <td className="px-4 py-3">
                        <div className="font-medium text-gray-900">
                          {sub.patient?.firstName || "—"} {sub.patient?.lastName || ""}
                        </div>
                        <div className="text-xs text-gray-500 font-mono mt-0.5">
                          {sub.id?.substring(0, 8)}...
                        </div>
                        {(sub.patient?.email || sub.patient?.phone) && (
                          <div className="text-xs text-gray-500 mt-0.5 space-y-0.5">
                            {sub.patient?.email && (
                              <div className="flex items-center gap-1">
                                <span className="text-gray-400">✉</span>
                                <a href={`mailto:${sub.patient.email}`} className="hover:text-blue-600 truncate max-w-[150px] inline-block">
                                  {sub.patient.email}
                                </a>
                              </div>
                            )}
                            {sub.patient?.phone && (
                              <div className="flex items-center gap-1">
                                <span className="text-gray-400">📞</span>
                                <a href={`tel:${sub.patient.phone}`} className="hover:text-blue-600">
                                  {sub.patient.phone}
                                </a>
                              </div>
                            )}
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-3 text-gray-700 font-mono text-xs whitespace-nowrap">
                        {sub.patient?.pesel || "—"}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                            sub.submissionType === "medical_leave"
                              ? "bg-indigo-100 text-indigo-800"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {sub.submissionType === "medical_leave" ? "Zwolnienie" : "Konsultacja"}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center text-gray-700 font-medium">
                        {sub.medicinesCount ?? "—"}
                      </td>
                      <td className="px-4 py-3">
                        {isFinished ? (
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeBg(
                              sub.status
                            )}`}
                          >
                            {!sub.isRead && <span className="w-2 h-2 bg-current rounded-full animate-pulse" />}
                            {getStatusLabel(sub.status)}
                          </span>
                        ) : (
                          <select
                            disabled={isUpdating}
                            value={sub.status}
                            onChange={(e) => {
                              const newStatus = e.target.value;
                              if (newStatus !== sub.status) {
                                handleStatusChange(sub.id, newStatus);
                              }
                            }}
                            className={`text-xs font-medium rounded-full px-2.5 py-1 border-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors ${
                              isUpdating ? "opacity-50 cursor-not-allowed" : ""
                            } ${getStatusBadgeBg(sub.status)}`}
                          >
                            <option value={sub.status}>{getStatusLabel(sub.status)}</option>
                            {availableStatuses.map((opt) => (
                              <option
                                key={opt.value}
                                value={opt.value}
                                className={getStatusBadgeBg(opt.value)}
                              >
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        )}
                      </td>
                      <td className="px-4 py-3 text-gray-500 whitespace-nowrap text-xs">
                        {formatDate(sub.submittedAt)}
                      </td>
                      <td className="px-4 py-3">
                        <Link
                          href={`/admin/submissions/${sub.id}`}
                          className="text-blue-600 hover:underline font-medium text-xs whitespace-nowrap"
                        >
                          Przeglądaj →
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Pagination info */}
      {!loading && submissions.length > 0 && (
        <div className="text-sm text-gray-500 text-center">
          Wyświetlono {submissions.length} z {pagination.total} zgłoszeń
        </div>
      )}
    </div>
  );
}