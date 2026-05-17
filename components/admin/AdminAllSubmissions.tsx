"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

interface SubmissionItem {
  id: string;
  submissionType: string;
  status: string;
  submittedAt: string;
  isRead: boolean;
  patient: { firstName: string; lastName: string; pesel: string; email?: string; phone?: string };
  medicinesCount: number;
  appointmentDate: string | null;
  appointmentTime: string | null;
  consultationMethod: string | null;
  specialization: string | null;
  assignedAdminId?: string;
  referralToPool?: boolean;
}

interface DoctorData {
  userId: { _id: string; firstName: string; lastName: string } | string;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  const now = new Date();
  const diffMin = Math.floor((now.getTime() - d.getTime()) / 60000);
  const diffH = Math.floor(diffMin / 60);
  if (diffMin < 60) return `${diffMin} min temu`;
  if (diffH < 24) return `${diffH} godz temu`;
  return d.toLocaleDateString("pl-PL", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
}

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

export default function AdminAllSubmissions() {
  const [submissions, setSubmissions] = useState<SubmissionItem[]>([]);
  const [doctors, setDoctors] = useState<DoctorData[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("");
  const [reassignTargetId, setReassignTargetId] = useState<string | null>(null);

  const fetchSubmissions = useCallback(async () => {
    try {
      const params = new URLSearchParams({ limit: "100" });
      if (statusFilter) params.set("status", statusFilter);
      const res = await fetch(`${API_URL}/api/patient/submissions?${params.toString()}`, { credentials: "include" });
      const data = await res.json();
      if (data.success) setSubmissions(data.data.submissions);
    } catch (err) { console.error(err); }
  }, [statusFilter]);

  const fetchDoctors = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/api/doctor`, { credentials: "include" });
      const data = await res.json();
      if (data.success) setDoctors(data.data);
    } catch (err) { console.error(err); }
  }, []);

  useEffect(() => { setLoading(true); fetchSubmissions().finally(() => setLoading(false)); }, [fetchSubmissions]);
  useEffect(() => { fetchDoctors(); }, [fetchDoctors]);

  const getDoctorName = (assignedAdminId?: string) => {
    if (!assignedAdminId) return "Nieprzypisany";
    const doc = doctors.find(d => {
      const uid = typeof d.userId === "object" ? d.userId._id : d.userId;
      return uid === assignedAdminId;
    });
    if (!doc) return assignedAdminId.slice(-6);
    return typeof doc.userId === "object" ? `${doc.userId.firstName} ${doc.userId.lastName}` : doc.userId;
  };

  const handleReassign = async (submissionId: string, newDoctorUserId: string) => {
    try {
      const res = await fetch(`${API_URL}/api/doctor/reassign-submission`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ submissionId, newDoctorUserId }),
      });
      const data = await res.json();
      if (data.success) {
        alert("Zgłoszenie przeniesione");
        fetchSubmissions();
      } else alert(data.message || "Błąd");
    } catch { alert("Błąd sieci"); }
    finally { setReassignTargetId(null); }
  };

  if (loading) return <div className="flex justify-center py-16"><div className="w-8 h-8 border-4 border-[#DAE9E6] border-t-[#064743] rounded-full animate-spin" /></div>;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm">
          <option value="">Wszystkie statusy</option>
          <option value="pending">Oczekujące</option>
          <option value="reviewed">Przeglądane</option>
          <option value="completed">Zakończone</option>
          <option value="cancelled">Anulowane</option>
        </select>
        <span className="text-xs text-gray-400">{submissions.length} zgłoszeń</span>
      </div>

      {submissions.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-8 text-center"><p className="text-gray-500">Brak zgłoszeń.</p></div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 font-medium text-gray-700">Pacjent</th>
                <th className="px-4 py-3 font-medium text-gray-700">Specjalizacja</th>
                <th className="px-4 py-3 font-medium text-gray-700">Typ</th>
                <th className="px-4 py-3 font-medium text-gray-700">Lekarz</th>
                <th className="px-4 py-3 font-medium text-gray-700">Status</th>
                <th className="px-4 py-3 font-medium text-gray-700">Data</th>
                <th className="px-4 py-3 font-medium text-gray-700">Przenieś</th>
                <th className="px-4 py-3 font-medium text-gray-700">Szczegóły</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {submissions.map((sub) => {
                const isFinished = sub.status === "completed" || sub.status === "cancelled";
                return (
                  <tr key={sub.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="font-medium text-gray-900">{sub.patient?.firstName || "—"} {sub.patient?.lastName || ""}</div>
                      <div className="text-xs text-gray-500">{sub.patient?.pesel || "—"}</div>
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-500">{sub.specialization || "—"}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${sub.submissionType === "medical_leave" ? "bg-indigo-100 text-indigo-800" : "bg-blue-100 text-blue-800"}`}>
                        {sub.submissionType === "medical_leave" ? "L4" : "Kons."}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs text-gray-700">{getDoctorName(sub.assignedAdminId)}</td>
                    <td className="px-4 py-3"><span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeBg(sub.status)}`}>{getStatusLabel(sub.status)}</span></td>
                    <td className="px-4 py-3 text-xs text-gray-500 whitespace-nowrap">{formatDate(sub.submittedAt)}</td>
                    <td className="px-4 py-3">
                      {isFinished ? (
                        <span className="text-xs text-gray-300">—</span>
                      ) : reassignTargetId === sub.id ? (
                        <div className="flex items-center gap-1">
                          <select
                            defaultValue=""
                            onChange={(e) => { if (e.target.value) handleReassign(sub.id, e.target.value); }}
                            className="text-xs border rounded px-1 py-0.5"
                          >
                            <option value="">Wybierz</option>
                            {doctors.filter(d => {
                              const duid = typeof d.userId === "object" ? d.userId._id : d.userId;
                              return duid !== sub.assignedAdminId;
                            }).map(d => {
                              const duid = typeof d.userId === "object" ? d.userId._id : d.userId;
                              const dname = typeof d.userId === "object" ? `${d.userId.firstName} ${d.userId.lastName}` : duid;
                              return <option key={duid} value={duid}>{dname}</option>;
                            })}
                            <option value="pool">→ Koszyk ogólny</option>
                          </select>
                          <button onClick={() => setReassignTargetId(null)} className="text-xs text-gray-400">✕</button>
                        </div>
                      ) : (
                        <button onClick={() => setReassignTargetId(sub.id)} className="text-xs text-blue-600 hover:underline">Przenieś</button>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <Link href={`/admin/submissions/${sub.id}`} className="text-blue-600 hover:underline text-xs font-medium">Szczegóły →</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}