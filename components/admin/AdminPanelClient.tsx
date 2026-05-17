"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { io, Socket } from "socket.io-client";
import AdminDoctorsManager from "./AdminDoctorsManager";
import AdminAllSubmissions from "./AdminAllSubmissions";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:4000";

interface CurrentUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

interface StatsData {
  byStatus: {
    pending: number;
    reviewed: number;
    completed: number;
    cancelled: number;
  };
  submittedToday: number;
  total: number;
}

interface MyStats {
  total: number;
  pending: number;
  unread: number;
}

interface PatientPreview {
  firstName: string;
  lastName: string;
  pesel: string;
  email?: string;
  phone?: string;
}

interface SubmissionItem {
  id: string;
  submissionType: string;
  status: string;
  submittedAt: string;
  assignedAt: string | null;
  isRead: boolean;
  patient: PatientPreview;
  medicinesCount: number;
  appointmentDate: string | null;
  appointmentTime: string | null;
  consultationMethod: string | null;
  specialization: string | null;
  hasUser?: boolean;
  assignedAdminId?: string;
  referralToPool?: boolean;
  pooledAt?: string | null;
}

interface AdminPanelClientProps {
  currentUser: CurrentUser;
  stats: StatsData;
}

const STATUS_OPTIONS = [
  { value: "reviewed", label: "W trakcie przeglądu" },
  { value: "completed", label: "Zakończono" },
  { value: "cancelled", label: "Anulowano" },
];

function getStatusBadgeBg(status: string): string {
  switch (status) {
    case "pending": return "bg-yellow-100 text-yellow-800";
    case "reviewed": return "bg-blue-100 text-blue-800";
    case "completed": return "bg-green-100 text-green-800";
    case "cancelled": return "bg-red-100 text-red-800";
    default: return "bg-gray-100 text-gray-800";
  }
}

function getStatusLabel(status: string): string {
  switch (status) {
    case "pending": return "Oczekujące";
    case "reviewed": return "Przeglądane";
    case "completed": return "Zakończone";
    case "cancelled": return "Anulowane";
    default: return status;
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

export default function AdminPanelClient({ currentUser, stats }: AdminPanelClientProps) {
  const router = useRouter();
  const isAdmin = currentUser.role === "administrator";

  const [activeTab, setActiveTab] = useState<"all" | "mine" | "pool" | "doctors">(isAdmin ? "all" : "mine");

  const [mySubmissions, setMySubmissions] = useState<SubmissionItem[]>([]);
  const [myLoading, setMyLoading] = useState(false);
  const [myStatusFilter, setMyStatusFilter] = useState<string>("");

  const [poolSubmissions, setPoolSubmissions] = useState<SubmissionItem[]>([]);
  const [poolLoading, setPoolLoading] = useState(false);

  const [myStats, setMyStats] = useState<MyStats>({ total: 0, pending: 0, unread: 0 });
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const socketRef = useRef<Socket | null>(null);
  const [socketConnected, setSocketConnected] = useState(false);

  const fetchMyStats = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/api/doctor/my-submissions/stats`, { credentials: "include" });
      const data = await res.json();
      if (data.success) setMyStats(data.data);
    } catch (err) { console.error("Error fetching my stats:", err); }
  }, []);

  const fetchMySubmissions = useCallback(async () => {
    setMyLoading(true);
    try {
      const params = new URLSearchParams();
      if (myStatusFilter) params.set("status", myStatusFilter);
      const res = await fetch(`${API_URL}/api/doctor/my-submissions?${params.toString()}`, { credentials: "include" });
      const data = await res.json();
      if (data.success) setMySubmissions(data.data.submissions);
    } catch (err) { console.error("Error fetching my submissions:", err); }
    finally { setMyLoading(false); }
  }, [myStatusFilter]);

  const fetchPool = useCallback(async () => {
    setPoolLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/doctor/pool/submissions`, { credentials: "include" });
      const data = await res.json();
      if (data.success) setPoolSubmissions(data.data.submissions);
    } catch (err) { console.error("Error fetching pool:", err); }
    finally { setPoolLoading(false); }
  }, []);

  useEffect(() => {
    const socket = io(SOCKET_URL, { withCredentials: true, transports: ['websocket', 'polling'] });
    socket.on('connect', () => { setSocketConnected(true); });
    socket.on('disconnect', () => { setSocketConnected(false); });
    socket.on('connect_error', () => { setSocketConnected(false); });
    socket.on('new_submission', (newSub: SubmissionItem) => {
      setMySubmissions((prev) => { const exists = prev.some(s => s.id === newSub.id); return exists ? prev : [newSub, ...prev]; });
      setMyStats((prev) => ({ total: prev.total + 1, pending: newSub.status === 'pending' ? prev.pending + 1 : prev.pending, unread: prev.unread + 1 }));
    });
    socketRef.current = socket;
    return () => { socket.disconnect(); socketRef.current = null; };
  }, []);

  useEffect(() => {
    fetchMyStats();
    const interval = setInterval(() => { fetchMyStats(); if (activeTab === "pool") fetchPool(); }, 30000);
    return () => clearInterval(interval);
  }, [fetchMyStats, activeTab, fetchPool]);

  useEffect(() => {
    if (activeTab === "mine") fetchMySubmissions();
    else if (activeTab === "pool") fetchPool();
  }, [activeTab, fetchMySubmissions, fetchPool]);

  const handleClaim = async (submissionId: string) => {
    setActionLoading(submissionId);
    try {
      const res = await fetch(`${API_URL}/api/doctor/pool/submissions/${submissionId}/claim`, { method: "POST", credentials: "include" });
      const data = await res.json();
      if (data.success) { setPoolSubmissions(prev => prev.filter(s => s.id !== submissionId)); fetchMySubmissions(); fetchMyStats(); }
      else alert(data.message || "Nie udało się przejąć zgłoszenia");
    } catch { alert("Błąd sieci"); }
    finally { setActionLoading(null); }
  };

  const handleRelease = async (submissionId: string) => {
    if (!confirm("Czy na pewno chcesz zwolnić to zgłoszenie do koszyka ogólnego?")) return;
    setActionLoading(submissionId);
    try {
      const res = await fetch(`${API_URL}/api/doctor/my-submissions/${submissionId}/release`, { method: "POST", credentials: "include" });
      const data = await res.json();
      if (data.success) { setMySubmissions(prev => prev.filter(s => s.id !== submissionId)); fetchPool(); fetchMyStats(); }
      else alert(data.message || "Nie udało się zwolnić zgłoszenia");
    } catch { alert("Błąd sieci"); }
    finally { setActionLoading(null); }
  };

  const handleStatusChange = async (submissionId: string, newStatus: string) => {
    setActionLoading(submissionId);
    try {
      const res = await fetch(`${API_URL}/api/patient/submissions/${submissionId}/status`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status: newStatus }), credentials: "include" });
      if (res.ok) { setMySubmissions(prev => prev.map(s => s.id === submissionId ? { ...s, status: newStatus, isRead: true } : s)); fetchMyStats(); router.refresh(); }
      else { const errData = await res.json(); alert(errData.message || "Nie udało się zmienić statusu"); }
    } catch { alert("Błąd sieci przy zmianie statusu"); }
    finally { setActionLoading(null); }
  };

  return (
    <div className="min-h-screen mt-30 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">{isAdmin ? "Panel administratora" : "Panel lekarza"}</h1>
          <p className="text-gray-600">{isAdmin ? `Zalogowany jako: ${currentUser.firstName} ${currentUser.lastName} (administrator)` : `Zalogowany jako: ${currentUser.firstName} ${currentUser.lastName} (lekarz)`}</p>
          {!isAdmin && <p className="text-xs text-gray-400 mt-1">{socketConnected ? "🟢 Powiadomienia w czasie rzeczywistym aktywne" : "🟡 Powiadomienia nieaktywne – odświeżanie co 30s"}</p>}
        </div>

        {!isAdmin && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6"><h2 className="text-lg font-medium text-gray-900 mb-4">Moje zgłoszenia</h2><p className="text-3xl font-bold text-blue-600">{myStats.total}</p><p className="text-sm text-gray-500 mt-1">wszystkich</p></div>
            <div className="bg-white rounded-xl shadow-sm p-6 relative"><h2 className="text-lg font-medium text-gray-900 mb-4">Oczekujące</h2><p className="text-3xl font-bold text-yellow-600">{myStats.pending}</p><p className="text-sm text-gray-500 mt-1">do przeglądu</p>{myStats.pending > 0 && (<span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full animate-pulse"><span className="w-2 h-2 bg-yellow-500 rounded-full" />NOWE</span>)}</div>
            <div className="bg-white rounded-xl shadow-sm p-6 relative"><h2 className="text-lg font-medium text-gray-900 mb-4">Nieprzeczytane</h2><p className="text-3xl font-bold text-red-500">{myStats.unread}</p><p className="text-sm text-gray-500 mt-1">nieodczytane</p>{myStats.unread > 0 && (<span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full animate-pulse"><span className="w-2 h-2 bg-red-500 rounded-full" />NOWE</span>)}</div>
          </div>
        )}

        {isAdmin && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm p-6"><h2 className="text-lg font-medium text-gray-900 mb-4">Wszystkie zgłoszenia</h2><p className="text-3xl font-bold text-blue-600">{stats.total}</p><p className="text-sm text-gray-500 mt-1">zgłoszeń</p></div>
            <div className="bg-white rounded-xl shadow-sm p-6"><h2 className="text-lg font-medium text-gray-900 mb-4">Dzisiaj</h2><p className="text-3xl font-bold text-green-600">{stats.submittedToday}</p><p className="text-sm text-gray-500 mt-1">nowych zgłoszeń</p></div>
            <div className="bg-white rounded-xl shadow-sm p-6 relative"><h2 className="text-lg font-medium text-gray-900 mb-4">Oczekujące</h2><p className="text-3xl font-bold text-yellow-600">{stats.byStatus.pending}</p><p className="text-sm text-gray-500 mt-1">do przeglądu</p>{stats.byStatus.pending > 0 && (<span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full animate-pulse"><span className="w-2 h-2 bg-yellow-500 rounded-full" />NOWE</span>)}</div>
            <div className="bg-white rounded-xl shadow-sm p-6"><h2 className="text-lg font-medium text-gray-900 mb-4">Zakończone</h2><p className="text-3xl font-bold text-gray-600">{stats.byStatus.completed}</p><p className="text-sm text-gray-500 mt-1">ukończone</p></div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {isAdmin && <button onClick={() => setActiveTab("all")} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors relative ${activeTab === "all" ? "bg-[#064743] text-white" : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"}`}>Wszystkie zgłoszenia</button>}
          <button onClick={() => setActiveTab("mine")} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors relative ${activeTab === "mine" ? "bg-[#064743] text-white" : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"}`}>Moje zgłoszenia{myStats.unread > 0 && <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full">{myStats.unread}</span>}</button>
          <button onClick={() => setActiveTab("pool")} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors relative ${activeTab === "pool" ? "bg-[#064743] text-white" : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"}`}>Koszyk ogólny{poolSubmissions.length > 0 && <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-5 h-5 bg-orange-500 text-white text-[10px] font-bold rounded-full">{poolSubmissions.length}</span>}</button>
          {isAdmin && <button onClick={() => setActiveTab("doctors")} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors relative ${activeTab === "doctors" ? "bg-[#064743] text-white" : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"}`}>Zarządzanie lekarzami</button>}
        </div>

        {activeTab === "doctors" && isAdmin && <AdminDoctorsManager />}

        {activeTab === "all" && isAdmin && <AdminAllSubmissions />}

        {activeTab === "mine" && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <select value={myStatusFilter} onChange={(e) => setMyStatusFilter(e.target.value)} className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm">
                <option value="">Wszystkie statusy</option>
                <option value="pending">Oczekujące</option>
                <option value="reviewed">Przeglądane</option>
                <option value="completed">Zakończone</option>
                <option value="cancelled">Anulowane</option>
              </select>
              {myStats.unread > 0 && <span className="text-xs text-red-600 font-semibold animate-pulse">🔔 {myStats.unread} nowych zgłoszeń wymaga uwagi</span>}
              {myLoading && <div className="w-5 h-5 border-2 border-gray-300 border-t-[#064743] rounded-full animate-spin" />}
            </div>
            {mySubmissions.length === 0 && !myLoading ? <div className="bg-white rounded-xl shadow-sm p-8 text-center"><p className="text-gray-500">Brak zgłoszeń przypisanych do Ciebie.</p></div> : (
              <div className="bg-white rounded-xl shadow-sm overflow-x-auto"><table className="w-full text-sm text-left"><thead className="bg-gray-50 border-b border-gray-200"><tr><th className="px-4 py-3 font-medium text-gray-700">Pacjent</th><th className="px-4 py-3 font-medium text-gray-700">Specjalizacja</th><th className="px-4 py-3 font-medium text-gray-700">Typ</th><th className="px-4 py-3 font-medium text-gray-700">Status</th><th className="px-4 py-3 font-medium text-gray-700">Data</th><th className="px-4 py-3 font-medium text-gray-700">Akcje</th></tr></thead><tbody className="divide-y divide-gray-100">
                {mySubmissions.map((sub) => {
                  const isUpdating = actionLoading === sub.id;
                  const isFinished = sub.status === "completed" || sub.status === "cancelled";
                  const availableStatuses = STATUS_OPTIONS.filter((o) => o.value !== sub.status);
                  const isNew = !sub.isRead && sub.status === "pending";
                  return (<tr key={sub.id} className={`hover:bg-gray-50 transition-colors ${isNew ? "bg-yellow-50 border-l-4 border-l-yellow-400" : !sub.isRead ? "bg-blue-50/50 border-l-4 border-l-blue-300" : ""}`}>
                    <td className="px-4 py-3"><div className="font-medium text-gray-900 flex items-center gap-2">{isNew && <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-yellow-200 text-yellow-800 text-[10px] font-bold rounded animate-pulse">● NOWE</span>}{sub.patient?.firstName || "—"} {sub.patient?.lastName || ""}</div><div className="text-xs text-gray-500">{sub.patient?.pesel || "—"}</div></td>
                    <td className="px-4 py-3 text-xs text-gray-500">{sub.specialization || "—"}</td>
                    <td className="px-4 py-3"><span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${sub.submissionType === "medical_leave" ? "bg-indigo-100 text-indigo-800" : "bg-blue-100 text-blue-800"}`}>{sub.submissionType === "medical_leave" ? "Zwolnienie" : "Konsultacja"}</span></td>
                    <td className="px-4 py-3">{isFinished ? <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeBg(sub.status)}`}>{getStatusLabel(sub.status)}</span> : <select disabled={isUpdating} value={sub.status} onChange={(e) => { if (e.target.value !== sub.status) handleStatusChange(sub.id, e.target.value); }} className={`text-xs font-medium rounded-full px-2.5 py-1 border-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300 ${getStatusBadgeBg(sub.status)} ${isUpdating ? "opacity-50 cursor-not-allowed" : ""}`}><option value={sub.status}>{getStatusLabel(sub.status)}</option>{availableStatuses.map((opt) => (<option key={opt.value} value={opt.value}>{opt.label}</option>))}</select>}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs whitespace-nowrap">{formatDate(sub.submittedAt)}</td>
                    <td className="px-4 py-3"><div className="flex items-center gap-2"><Link href={`/admin/submissions/${sub.id}`} className="text-blue-600 hover:underline text-xs font-medium">Szczegóły →</Link>{!isFinished && <button onClick={() => handleRelease(sub.id)} disabled={isUpdating} className="text-orange-600 hover:underline text-xs font-medium disabled:opacity-50">{isUpdating ? "..." : "Zwolnij do puli"}</button>}</div></td>
                  </tr>);
                })}
              </tbody></table></div>
            )}
          </div>
        )}

        {activeTab === "pool" && (
          <div className="space-y-4">
            {poolLoading && <div className="flex items-center gap-2 text-sm text-gray-500"><div className="w-5 h-5 border-2 border-gray-300 border-t-[#064743] rounded-full animate-spin" />Ładowanie...</div>}
            {poolSubmissions.length === 0 && !poolLoading ? <div className="bg-white rounded-xl shadow-sm p-8 text-center"><p className="text-gray-500">Koszyk ogólny jest pusty.</p><p className="text-gray-400 text-xs mt-1">Zgłoszenia trafiają tu, gdy minie 1 godzina bez reakcji przypisanego lekarza lub zostaną zwolnione ręcznie.</p></div> : (
              <div className="bg-white rounded-xl shadow-sm overflow-x-auto"><table className="w-full text-sm text-left"><thead className="bg-gray-50 border-b border-gray-200"><tr><th className="px-4 py-3 font-medium text-gray-700">Pacjent</th><th className="px-4 py-3 font-medium text-gray-700">Specjalizacja</th><th className="px-4 py-3 font-medium text-gray-700">Typ</th><th className="px-4 py-3 font-medium text-gray-700">Czeka od</th><th className="px-4 py-3 font-medium text-gray-700">Powód</th><th className="px-4 py-3 font-medium text-gray-700">Akcje</th></tr></thead><tbody className="divide-y divide-gray-100">
                {poolSubmissions.map((sub) => {
                  const isUpdating = actionLoading === sub.id;
                  return (<tr key={sub.id} className="hover:bg-gray-50 bg-orange-50/50">
                    <td className="px-4 py-3"><div className="font-medium text-gray-900">{sub.patient?.firstName || "—"} {sub.patient?.lastName || ""}</div><div className="text-xs text-gray-500">{sub.patient?.pesel || "—"}</div></td>
                    <td className="px-4 py-3 text-xs text-gray-500">{sub.specialization || "—"}</td>
                    <td className="px-4 py-3"><span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${sub.submissionType === "medical_leave" ? "bg-indigo-100 text-indigo-800" : "bg-blue-100 text-blue-800"}`}>{sub.submissionType === "medical_leave" ? "Zwolnienie" : "Konsultacja"}</span></td>
                    <td className="px-4 py-3 text-gray-500 text-xs whitespace-nowrap">{formatDate(sub.pooledAt || sub.submittedAt)}</td>
                    <td className="px-4 py-3 text-xs text-gray-500">{sub.referralToPool ? "Zwolnione ręcznie" : "Brak reakcji > 1h"}</td>
                    <td className="px-4 py-3"><div className="flex items-center gap-2"><button onClick={() => handleClaim(sub.id)} disabled={isUpdating} className="px-3 py-1.5 bg-[#064743] text-white rounded-lg text-xs font-medium hover:bg-[#1A5D54] transition-colors disabled:opacity-50">{isUpdating ? "Przejmowanie..." : "Przejmij zgłoszenie"}</button><Link href={`/admin/submissions/${sub.id}`} className="text-blue-600 hover:underline text-xs">Podgląd</Link></div></td>
                  </tr>);
                })}
              </tbody></table></div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}