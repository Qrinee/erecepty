"use client";

import { useState, useEffect, useCallback } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

interface DoctorData {
  _id: string;
  userId: string | { _id: string; firstName: string; lastName: string; email: string };
  specializations: string[];
  availabilityType: string;
  schedule: { dayOfWeek: number; startTime: string; endTime: string }[];
  maxActivePatients: number;
  isActive: boolean;
  bio: string;
  activePatients: number;
  createdAt: string;
}

interface SubmissionsForDoctor {
  id: string;
  submissionType: string;
  status: string;
  submittedAt: string;
  patient: { firstName: string; lastName: string; pesel: string };
  specialization: string;
  assignedAdminId?: string;
}

const DAY_NAMES = ["Nd", "Pn", "Wt", "Śr", "Cz", "Pt", "So"];
const DAY_NAMES_FULL = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("pl-PL", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
}

export default function AdminDoctorsManager() {
  const [doctors, setDoctors] = useState<DoctorData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Edit modal state
  const [editingDoctor, setEditingDoctor] = useState<DoctorData | null>(null);
  const [editForm, setEditForm] = useState({
    specializations: "",
    availabilityType: "24/7",
    schedule: [] as { dayOfWeek: number; startTime: string; endTime: string }[],
    maxActivePatients: 5,
    isActive: true,
    bio: "",
  });
  const [saving, setSaving] = useState(false);

  // Create modal state
  const [creating, setCreating] = useState(false);
  const [createForm, setCreateForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    specializations: "",
    availabilityType: "24/7",
    maxActivePatients: 5,
  });

  // Doctor submissions view
  const [viewingDoctorId, setViewingDoctorId] = useState<string | null>(null);
  const [doctorSubmissions, setDoctorSubmissions] = useState<SubmissionsForDoctor[]>([]);
  const [subsLoading, setSubsLoading] = useState(false);

  // Reassign state
  const [reassignTargetId, setReassignTargetId] = useState<string | null>(null);
  const [reassignLoading, setReassignLoading] = useState<string | null>(null);

  const fetchDoctors = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/doctor`, { credentials: "include" });
      const data = await res.json();
      if (data.success) setDoctors(data.data);
      else setError(data.message || "Błąd ładowania");
    } catch (err) {
      setError("Błąd sieci");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchDoctors(); }, [fetchDoctors]);

  // Open edit modal
  const openEdit = (doc: DoctorData) => {
    setEditingDoctor(doc);
    setEditForm({
      specializations: doc.specializations?.join(", ") || "",
      availabilityType: doc.availabilityType || "24/7",
      schedule: doc.schedule ? [...doc.schedule] : [],
      maxActivePatients: doc.maxActivePatients || 5,
      isActive: doc.isActive,
      bio: doc.bio || "",
    });
  };

  // Save edit
  const handleSaveEdit = async () => {
    if (!editingDoctor) return;
    setSaving(true);
    try {
      const userId = typeof editingDoctor.userId === "object" ? editingDoctor.userId._id : editingDoctor.userId;
      const body = {
        userId,
        specializations: editForm.specializations.split(",").map(s => s.trim()).filter(Boolean),
        availabilityType: editForm.availabilityType,
        schedule: editForm.schedule,
        maxActivePatients: editForm.maxActivePatients,
        isActive: editForm.isActive,
        bio: editForm.bio,
      };
      const res = await fetch(`${API_URL}/api/doctor/upsert`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (data.success) {
        setEditingDoctor(null);
        fetchDoctors();
      } else alert(data.message || "Błąd zapisywania");
    } catch { alert("Błąd sieci"); }
    finally { setSaving(false); }
  };

  // Delete doctor
  const handleDelete = async (doc: DoctorData) => {
    const userId = typeof doc.userId === "object" ? doc.userId._id : doc.userId;
    const name = typeof doc.userId === "object" ? `${doc.userId.firstName} ${doc.userId.lastName}` : userId;
    if (!confirm(`Czy na pewno chcesz usunąć lekarza ${name}?\nWszystkie jego zgłoszenia trafią do koszyka ogólnego.`)) return;
    try {
      const res = await fetch(`${API_URL}/api/doctor/${userId}?deleteUser=false`, { method: "DELETE", credentials: "include" });
      const data = await res.json();
      if (data.success) fetchDoctors();
      else alert(data.message || "Błąd usuwania");
    } catch { alert("Błąd sieci"); }
  };

  // Create doctor
  const handleCreate = async () => {
    if (!createForm.email || !createForm.password || !createForm.firstName || !createForm.lastName) {
      alert("Imię, nazwisko, email i hasło są wymagane");
      return;
    }
    setSaving(true);
    try {
      // Register user
      const regRes = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: createForm.firstName,
          lastName: createForm.lastName,
          email: createForm.email,
          password: createForm.password,
          phone: createForm.phone,
        }),
      });
      const regData = await regRes.json();
      if (!regData.success) { alert(regData.message || "Błąd rejestracji"); setSaving(false); return; }
      const userId = regData.data.user.id;

      // Set role to doctor
      // We need admin cookie for this. The current page already has admin auth via credentials:include
      const roleRes = await fetch(`${API_URL}/api/auth/users/${userId}/role`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ role: "doctor" }),
      });
      if (!roleRes.ok) { alert("Nie udało się ustawić roli lekarza"); setSaving(false); return; }

      // Create doctor profile
      const upsertRes = await fetch(`${API_URL}/api/doctor/upsert`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          userId,
          specializations: createForm.specializations.split(",").map(s => s.trim()).filter(Boolean) || ["Ogólna"],
          availabilityType: createForm.availabilityType,
          maxActivePatients: createForm.maxActivePatients,
          isActive: true,
        }),
      });
      const upsertData = await upsertRes.json();
      if (upsertData.success) {
        setCreating(false);
        setCreateForm({ firstName: "", lastName: "", email: "", password: "", phone: "", specializations: "", availabilityType: "24/7", maxActivePatients: 5 });
        fetchDoctors();
      } else alert(upsertData.message || "Błąd tworzenia profilu lekarza");
    } catch { alert("Błąd sieci"); }
    finally { setSaving(false); }
  };

  // View doctor's submissions
  const viewDoctorSubmissions = async (doc: DoctorData) => {
    const userId = typeof doc.userId === "object" ? doc.userId._id : doc.userId;
    setViewingDoctorId(userId);
    setSubsLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/patient/submissions?limit=100`, { credentials: "include" });
      const data = await res.json();
      if (data.success) {
        const filtered = data.data.submissions.filter((s: any) => s.assignedAdminId === userId);
        setDoctorSubmissions(filtered);
      }
    } catch { alert("Błąd ładowania zgłoszeń"); }
    finally { setSubsLoading(false); }
  };

  // Reassign submission
  const handleReassign = async (submissionId: string, newDoctorUserId: string) => {
    setReassignLoading(submissionId);
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
        setDoctorSubmissions(prev => prev.filter(s => s.id !== submissionId));
        fetchDoctors();
      } else alert(data.message || "Błąd przenoszenia");
    } catch { alert("Błąd sieci"); }
    finally { setReassignLoading(null); setReassignTargetId(null); }
  };

  // Add/remove schedule slot in edit form
  const addScheduleSlot = () => {
    setEditForm(prev => ({
      ...prev,
      schedule: [...prev.schedule, { dayOfWeek: 1, startTime: "08:00", endTime: "16:00" }],
    }));
  };
  const removeScheduleSlot = (index: number) => {
    setEditForm(prev => ({
      ...prev,
      schedule: prev.schedule.filter((_, i) => i !== index),
    }));
  };
  const updateScheduleSlot = (index: number, field: string, value: any) => {
    setEditForm(prev => {
      const updated = [...prev.schedule];
      updated[index] = { ...updated[index], [field]: field === "dayOfWeek" ? parseInt(value) : value };
      return { ...prev, schedule: updated };
    });
  };

  if (loading) return (
    <div className="flex items-center justify-center py-16">
      <div className="w-8 h-8 border-4 border-[#DAE9E6] border-t-[#064743] rounded-full animate-spin" />
    </div>
  );

  if (error) return <div className="bg-red-50 text-red-700 p-4 rounded-lg">{error}</div>;

  return (
    <div className="space-y-6">
      {/* Header + Create button */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Lekarze ({doctors.length})</h2>
        <button
          onClick={() => setCreating(true)}
          className="px-4 py-2 bg-[#064743] text-white rounded-lg hover:bg-[#1A5D54] text-sm font-medium"
        >
          + Dodaj lekarza
        </button>
      </div>

      {/* Doctors cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {doctors.map(doc => {
          const user = typeof doc.userId === "object" ? doc.userId : null;
          const userId = typeof doc.userId === "object" ? doc.userId._id : doc.userId;
          const name = user ? `${user.firstName} ${user.lastName}` : "Nieznany";
          const email = user ? user.email : "";

          return (
            <div key={doc._id} className={`bg-white rounded-xl shadow-sm p-5 border ${doc.isActive ? "border-gray-100" : "border-red-200 opacity-70"}`}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {name}
                    {!doc.isActive && <span className="ml-2 text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">Nieaktywny</span>}
                  </h3>
                  <p className="text-xs text-gray-500">{email}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {doc.specializations?.join(", ") || "Brak"} | {doc.availabilityType === "scheduled" ? "Grafik" : "24/7"} | Max {doc.maxActivePatients} pacjentów | Aktywnych: {doc.activePatients}
                  </p>
                  {doc.availabilityType === "scheduled" && doc.schedule?.length > 0 && (
                    <p className="text-xs text-gray-400 mt-0.5">
                      {doc.schedule.map(s => `${DAY_NAMES[s.dayOfWeek]} ${s.startTime}-${s.endTime}`).join(", ")}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex gap-2 mt-3">
                <button onClick={() => openEdit(doc)} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium hover:bg-blue-100">
                  Edytuj
                </button>
                <button onClick={() => viewDoctorSubmissions(doc)} className="px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-xs font-medium hover:bg-green-100">
                  Zgłoszenia
                </button>
                <button onClick={() => handleDelete(doc)} className="px-3 py-1.5 bg-red-50 text-red-700 rounded-lg text-xs font-medium hover:bg-red-100">
                  Usuń
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Doctor Submissions Modal */}
      {viewingDoctorId && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setViewingDoctorId(null)}>
          <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-6" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Zgłoszenia lekarza</h3>
              <button onClick={() => setViewingDoctorId(null)} className="text-gray-500 hover:text-gray-700 text-xl">&times;</button>
            </div>
            {subsLoading ? (
              <div className="flex justify-center py-8"><div className="w-6 h-6 border-2 border-gray-300 border-t-[#064743] rounded-full animate-spin" /></div>
            ) : doctorSubmissions.length === 0 ? (
              <p className="text-gray-500 text-center py-4">Brak zgłoszeń.</p>
            ) : (
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-2 text-left">Pacjent</th>
                    <th className="px-3 py-2 text-left">Typ</th>
                    <th className="px-3 py-2 text-left">Status</th>
                    <th className="px-3 py-2 text-left">Data</th>
                    <th className="px-3 py-2 text-left">Przenieś do</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {doctorSubmissions.map(sub => (
                    <tr key={sub.id} className="hover:bg-gray-50">
                      <td className="px-3 py-2">
                        <div className="font-medium">{sub.patient?.firstName} {sub.patient?.lastName}</div>
                        <div className="text-xs text-gray-400">{sub.patient?.pesel}</div>
                      </td>
                      <td className="px-3 py-2 text-xs">
                        <span className={`px-1.5 py-0.5 rounded-full ${sub.submissionType === "medical_leave" ? "bg-indigo-100 text-indigo-700" : "bg-blue-100 text-blue-700"}`}>
                          {sub.submissionType === "medical_leave" ? "L4" : "Kons."}
                        </span>
                      </td>
                      <td className="px-3 py-2 text-xs">{sub.status}</td>
                      <td className="px-3 py-2 text-xs text-gray-500">{formatDate(sub.submittedAt)}</td>
                      <td className="px-3 py-2">
                        {reassignTargetId === sub.id ? (
                          <div className="flex items-center gap-1">
                            <select
                              defaultValue=""
                              onChange={(e) => { if (e.target.value) handleReassign(sub.id, e.target.value); }}
                              className="text-xs border rounded px-1 py-0.5"
                            >
                              <option value="">Wybierz</option>
                              {doctors.filter(d => {
                                const duid = typeof d.userId === "object" ? d.userId._id : d.userId;
                                return duid !== viewingDoctorId;
                              }).map(d => {
                                const duid = typeof d.userId === "object" ? d.userId._id : d.userId;
                                const dname = typeof d.userId === "object" ? `${d.userId.firstName} ${d.userId.lastName}` : duid;
                                return <option key={duid} value={duid}>{dname}</option>;
                              })}
                            </select>
                            <button onClick={() => setReassignTargetId(null)} className="text-xs text-gray-400">✕</button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setReassignTargetId(sub.id)}
                            disabled={sub.status === "completed" || sub.status === "cancelled" || reassignLoading === sub.id}
                            className="text-xs text-blue-600 hover:underline disabled:text-gray-300"
                          >
                            {reassignLoading === sub.id ? "..." : "Przenieś"}
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editingDoctor && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setEditingDoctor(null)}>
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-6" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Edytuj lekarza</h3>
              <button onClick={() => setEditingDoctor(null)} className="text-gray-500 hover:text-gray-700 text-xl">&times;</button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Specjalizacje (oddzielone przecinkami)</label>
                <input type="text" value={editForm.specializations} onChange={e => setEditForm(p => ({ ...p, specializations: e.target.value }))} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Typ dostępności</label>
                <select value={editForm.availabilityType} onChange={e => setEditForm(p => ({ ...p, availabilityType: e.target.value }))} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm">
                  <option value="24/7">Całodobowy (24/7)</option>
                  <option value="scheduled">Grafik</option>
                </select>
              </div>

              {editForm.availabilityType === "scheduled" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Grafik dyżurów</label>
                  {editForm.schedule.map((slot, i) => (
                    <div key={i} className="flex items-center gap-2 mb-2">
                      <select value={slot.dayOfWeek} onChange={e => updateScheduleSlot(i, "dayOfWeek", e.target.value)} className="px-2 py-1 border rounded text-xs">
                        {DAY_NAMES_FULL.map((d, idx) => <option key={idx} value={idx}>{d}</option>)}
                      </select>
                      <input type="time" value={slot.startTime} onChange={e => updateScheduleSlot(i, "startTime", e.target.value)} className="px-2 py-1 border rounded text-xs w-24" />
                      <span className="text-xs">-</span>
                      <input type="time" value={slot.endTime} onChange={e => updateScheduleSlot(i, "endTime", e.target.value)} className="px-2 py-1 border rounded text-xs w-24" />
                      <button onClick={() => removeScheduleSlot(i)} className="text-red-500 text-xs">✕</button>
                    </div>
                  ))}
                  <button onClick={addScheduleSlot} className="text-xs text-blue-600 hover:underline">+ Dodaj przedział</button>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Max aktywnych pacjentów</label>
                <input type="number" min={1} max={20} value={editForm.maxActivePatients} onChange={e => setEditForm(p => ({ ...p, maxActivePatients: parseInt(e.target.value) || 1 }))} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm" />
              </div>

              <div>
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={editForm.isActive} onChange={e => setEditForm(p => ({ ...p, isActive: e.target.checked }))} className="rounded" />
                  <span className="text-sm">Aktywny</span>
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                <textarea value={editForm.bio} onChange={e => setEditForm(p => ({ ...p, bio: e.target.value }))} rows={2} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm" />
              </div>

              <button onClick={handleSaveEdit} disabled={saving} className="w-full py-2 bg-[#064743] text-white rounded-lg hover:bg-[#1A5D54] text-sm font-medium disabled:opacity-50">
                {saving ? "Zapisywanie..." : "Zapisz zmiany"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Modal */}
      {creating && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setCreating(false)}>
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[85vh] overflow-y-auto p-6" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Dodaj lekarza</h3>
              <button onClick={() => setCreating(false)} className="text-gray-500 hover:text-gray-700 text-xl">&times;</button>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Imię *</label>
                  <input type="text" value={createForm.firstName} onChange={e => setCreateForm(p => ({ ...p, firstName: e.target.value }))} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Nazwisko *</label>
                  <input type="text" value={createForm.lastName} onChange={e => setCreateForm(p => ({ ...p, lastName: e.target.value }))} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Email *</label>
                <input type="email" value={createForm.email} onChange={e => setCreateForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Hasło *</label>
                <input type="password" value={createForm.password} onChange={e => setCreateForm(p => ({ ...p, password: e.target.value }))} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Telefon</label>
                <input type="text" value={createForm.phone} onChange={e => setCreateForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Specjalizacje (przecinki)</label>
                <input type="text" value={createForm.specializations} onChange={e => setCreateForm(p => ({ ...p, specializations: e.target.value }))} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm" placeholder="np. Ginekolog, Internista" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Typ dostępności</label>
                <select value={createForm.availabilityType} onChange={e => setCreateForm(p => ({ ...p, availabilityType: e.target.value }))} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm">
                  <option value="24/7">Całodobowy (24/7)</option>
                  <option value="scheduled">Grafik</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Max pacjentów</label>
                <input type="number" min={1} max={20} value={createForm.maxActivePatients} onChange={e => setCreateForm(p => ({ ...p, maxActivePatients: parseInt(e.target.value) || 1 }))} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm" />
              </div>

              <button onClick={handleCreate} disabled={saving} className="w-full py-2 bg-[#064743] text-white rounded-lg hover:bg-[#1A5D54] text-sm font-medium disabled:opacity-50">
                {saving ? "Tworzenie..." : "Utwórz lekarza"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}