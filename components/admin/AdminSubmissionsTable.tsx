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
  appointmentDate?: string | null;
  appointmentTime?: string | null;
  consultationMethod?: string | null;
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

  const [viewMode, setViewMode] = useState<"table" | "calendar">("table");
  const [calendarMonth, setCalendarMonth] = useState(new Date().getMonth());
  const [calendarYear, setCalendarYear] = useState(new Date().getFullYear());

  const tabs = [
    { id: "all", label: "Wszystkie" },
    { id: "pending", label: "Oczekujące" },
    { id: "reviewed", label: "Przeglądane" },
    { id: "completed", label: "Zakończone" },
    { id: "cancelled", label: "Anulowane" },
  ] as const;

  const calendarSubmissions = submissions.filter(s => s.appointmentDate);
  
  function getDaysInMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
  }
  
  function getFirstDayOfMonth(year: number, month: number) {
    return new Date(year, month, 1).getDay();
  }
  
  function getMonthName(month: number) {
    return ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"][month];
  }
  
  function getSubmissionsForDate(dateStr: string) {
    return calendarSubmissions.filter(s => {
      if (!s.appointmentDate) return false;
      const d = new Date(s.appointmentDate).toISOString().split('T')[0];
      return d === dateStr;
    });
  }
  
  const methodLabels: Record<string, string> = {
    video: "Wideo",
    audio: "Audio",
  };
  const methodIcons: Record<string, string> = {
    video: "📹",
    audio: "📞",
  };
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Szukaj po imieniu, nazwisku, PESEL lub ID..."
          className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:border-[#064743] focus:outline-none focus:ring-2 focus:ring-[#DAE9E6] transition-colors"
        />
        <button
          type="submit"
          className="px-5 py-2.5 bg-[#064743] text-white rounded-lg hover:bg-[#1A5D54] transition-colors font-medium"
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
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-[#064743] text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setViewMode("table")}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              viewMode === "table" ? "bg-white text-[#064743] shadow-sm" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            📋 Lista
          </button>
          <button
            onClick={() => setViewMode("calendar")}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              viewMode === "calendar" ? "bg-white text-[#064743] shadow-sm" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            📅 Kalendarz
          </button>
        </div>
      </div>

      {/* View: Calendar */}
      {viewMode === "calendar" && (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">
              Kalendarz konsultacji – {getMonthName(calendarMonth)} {calendarYear}
            </h3>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (calendarMonth === 0) { setCalendarMonth(11); setCalendarYear(y => y - 1); }
                  else setCalendarMonth(m => m - 1);
                }}
                className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-600"
              >
                ◀
              </button>
              <button
                onClick={() => { setCalendarMonth(new Date().getMonth()); setCalendarYear(new Date().getFullYear()); }}
                className="px-3 py-1 text-xs font-medium text-[#064743] bg-[#DAE9E6] rounded-lg hover:bg-[#DAE9E6]/80"
              >
                Dziś
              </button>
              <button
                onClick={() => {
                  if (calendarMonth === 11) { setCalendarMonth(0); setCalendarYear(y => y + 1); }
                  else setCalendarMonth(m => m + 1);
                }}
                className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-600"
              >
                ▶
              </button>
            </div>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-7 gap-1 mb-2">
              {["Pn", "Wt", "Śr", "Cz", "Pt", "So", "Nd"].map(d => (
                <div key={d} className="text-center text-xs font-semibold text-gray-500 py-2">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {(() => {
                const daysInMonth = getDaysInMonth(calendarYear, calendarMonth);
                const firstDay = getFirstDayOfMonth(calendarYear, calendarMonth);
                const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1; // Convert Sun=0 to Mon=0
                const cells = [];
                
                for (let i = 0; i < adjustedFirstDay; i++) {
                  cells.push(<div key={`empty-${i}`} className="h-24 bg-gray-50 rounded-lg opacity-50"></div>);
                }
                
                for (let day = 1; day <= daysInMonth; day++) {
                  const dateStr = `${calendarYear}-${String(calendarMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                  const daySubmissions = getSubmissionsForDate(dateStr);
                  const isToday = dateStr === today;
                  
                  cells.push(
                    <div 
                      key={day} 
                      className={`h-24 border rounded-lg p-1 overflow-hidden transition-colors ${
                        isToday ? 'border-[#064743] bg-[#DAE9E6]/30' : 'border-gray-100 hover:border-gray-300'
                      }`}
                    >
                      <div className={`text-xs font-semibold mb-0.5 ${isToday ? 'text-[#064743]' : 'text-gray-500'}`}>
                        {day}
                      </div>
                      <div className="space-y-0.5 overflow-y-auto max-h-[60px]">
                        {daySubmissions.slice(0, 3).map((sub) => (
                          <Link
                            key={sub.id}
                            href={`/admin/submissions/${sub.id}`}
                            className={`block text-[10px] leading-tight px-1 py-0.5 rounded truncate ${
                              sub.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                              sub.status === 'completed' ? 'bg-green-100 text-green-800' :
                              sub.status === 'reviewed' ? 'bg-[#DAE9E6] text-[#064743]' :
                              'bg-gray-100 text-gray-600'
                            }`}
                            title={`${sub.patient?.firstName} ${sub.patient?.lastName} - ${sub.appointmentTime} ${sub.consultationMethod ? methodIcons[sub.consultationMethod] || '' : ''}`}
                          >
                            {sub.appointmentTime} {sub.consultationMethod ? methodIcons[sub.consultationMethod] || '' : ''} {sub.patient?.firstName?.charAt(0)}.{sub.patient?.lastName?.charAt(0)}.
                          </Link>
                        ))}
                        {daySubmissions.length > 3 && (
                          <div className="text-[10px] text-gray-400 px-1">
                            +{daySubmissions.length - 3} więcej
                          </div>
                        )}
                      </div>
                    </div>
                  );
                }
                return cells;
              })()}
            </div>
          </div>
          <div className="px-6 py-3 border-t border-gray-100 bg-gray-50 text-xs text-gray-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1"><span className="w-3 h-3 bg-yellow-100 rounded inline-block"></span> Oczekujące</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 bg-[#DAE9E6] rounded inline-block"></span> Przeglądane</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 bg-green-100 rounded inline-block"></span> Zakończone</span>
              <span>📹 Wideo</span>
              <span>📞 Audio</span>
            </div>
          </div>
        </div>
      )}

      {/* View: Table */}
      {viewMode === "table" && (
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
      )}

      {/* Pagination info */}
      {!loading && submissions.length > 0 && (
        <div className="text-sm text-gray-500 text-center">
          Wyświetlono {submissions.length} z {pagination.total} zgłoszeń
        </div>
      )}
    </div>
  );
}
