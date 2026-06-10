"use client";

import { useState, useEffect } from "react";
import { Loader2, Plus, Trash2, Edit2, Check, X } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

interface DiscountCode {
  _id: string;
  code: string;
  type: "percentage" | "amount";
  value: number;
  usageCount: number;
  maxUses: number | null;
  isActive: boolean;
  createdAt: string;
}

export default function AdminDiscountCodes() {
  const [codes, setCodes] = useState<DiscountCode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Form states
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCode, setNewCode] = useState("");
  const [bulkCount, setBulkCount] = useState<number>(1);
  const [newType, setNewType] = useState<"percentage" | "amount">("percentage");
  const [newValue, setNewValue] = useState<number | "">("");
  const [newMaxUses, setNewMaxUses] = useState<number | "">("");
  const [submitLoading, setSubmitLoading] = useState(false);

  // Edit states
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editActive, setEditActive] = useState<boolean>(true);

  const fetchCodes = async () => {
    try {
      const res = await fetch(`${API_URL}/api/discounts`, { credentials: "include" });
      const data = await res.json();
      if (data.success) {
        setCodes(data.data);
      } else {
        setError(data.message || "Błąd podczas pobierania kodów");
      }
    } catch (err) {
      setError("Błąd połączenia z serwerem");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCodes();
  }, []);

  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCode || newValue === "") return;
    setSubmitLoading(true);

    try {
      if (bulkCount > 1) {
        const res = await fetch(`${API_URL}/api/discounts/bulk`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            prefix: newCode,
            count: bulkCount,
            type: newType,
            value: Number(newValue),
            maxUses: newMaxUses === "" ? null : Number(newMaxUses),
            isActive: true
          })
        });
        const data = await res.json();
        if (data.success) {
          setCodes([...data.data, ...codes]);
          setShowAddForm(false);
          setNewCode("");
          setNewValue("");
          setNewMaxUses("");
          setBulkCount(1);
        } else {
          alert(data.message || "Błąd podczas dodawania kodów");
        }
      } else {
        const res = await fetch(`${API_URL}/api/discounts`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            code: newCode,
            type: newType,
            value: Number(newValue),
            maxUses: newMaxUses === "" ? null : Number(newMaxUses),
            isActive: true
          })
        });
        const data = await res.json();
        if (data.success) {
          setCodes([data.data, ...codes]);
          setShowAddForm(false);
          setNewCode("");
          setNewValue("");
          setNewMaxUses("");
          setBulkCount(1);
        } else {
          alert(data.message || "Błąd podczas dodawania kodu");
        }
      }
    } catch (err) {
      alert("Błąd połączenia z serwerem");
    } finally {
      setSubmitLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Czy na pewno chcesz usunąć ten kod rabatowy?")) return;
    try {
      const res = await fetch(`${API_URL}/api/discounts/${id}`, {
        method: "DELETE",
        credentials: "include"
      });
      if (res.ok) {
        setCodes(codes.filter(c => c._id !== id));
      } else {
        alert("Błąd podczas usuwania kodu");
      }
    } catch (err) {
      alert("Błąd sieci");
    }
  };

  const handleToggleActive = async (id: string, currentActive: boolean) => {
    try {
      const res = await fetch(`${API_URL}/api/discounts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ isActive: !currentActive })
      });
      if (res.ok) {
        setCodes(codes.map(c => c._id === id ? { ...c, isActive: !currentActive } : c));
      } else {
        alert("Błąd podczas aktualizacji kodu");
      }
    } catch (err) {
      alert("Błąd sieci");
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center p-12"><Loader2 className="w-8 h-8 animate-spin text-[#064743]" /></div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white p-6 rounded-xl shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Kody Rabatowe</h2>
          <p className="text-sm text-gray-500 mt-1">Zarządzaj zniżkami dla pacjentów</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center gap-2 bg-[#064743] hover:bg-[#147A60] text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          {showAddForm ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
          {showAddForm ? "Anuluj" : "Dodaj nowy kod"}
        </button>
      </div>

      {showAddForm && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Dodaj nowy kod rabatowy</h3>
          <form onSubmit={handleAddSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-end">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">{bulkCount > 1 ? "Prefiks kodu" : "Kod"} <span className="text-red-500">*</span></label>
              <input
                type="text"
                required
                value={newCode}
                onChange={e => setNewCode(e.target.value.toUpperCase())}
                placeholder={bulkCount > 1 ? "np. ZIMA" : "np. ZIMA2025"}
                className="w-full border-gray-200 rounded-lg px-3 py-2 text-sm focus:border-[#064743] focus:ring-[#064743]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Ilość kodów</label>
              <input
                type="number"
                required
                min="1"
                max="500"
                value={bulkCount}
                onChange={e => setBulkCount(Number(e.target.value))}
                className="w-full border-gray-200 rounded-lg px-3 py-2 text-sm focus:border-[#064743] focus:ring-[#064743]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Typ zniżki <span className="text-red-500">*</span></label>
              <select
                value={newType}
                onChange={e => setNewType(e.target.value as "percentage" | "amount")}
                className="w-full border-gray-200 rounded-lg px-3 py-2 text-sm focus:border-[#064743] focus:ring-[#064743]"
              >
                <option value="percentage">Procent (%)</option>
                <option value="amount">Kwota (PLN)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Wartość <span className="text-red-500">*</span></label>
              <input
                type="number"
                required
                min="0"
                step={newType === "amount" ? "1" : "1"}
                value={newValue}
                onChange={e => setNewValue(Number(e.target.value))}
                placeholder={newType === "percentage" ? "np. 15" : "np. 20"}
                className="w-full border-gray-200 rounded-lg px-3 py-2 text-sm focus:border-[#064743] focus:ring-[#064743]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Limit użyć (puste = bez limitu)</label>
              <input
                type="number"
                min="1"
                value={newMaxUses}
                onChange={e => setNewMaxUses(e.target.value ? Number(e.target.value) : "")}
                placeholder="np. 100"
                className="w-full border-gray-200 rounded-lg px-3 py-2 text-sm focus:border-[#064743] focus:ring-[#064743]"
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={submitLoading}
                className="w-full bg-[#064743] hover:bg-[#147A60] text-white px-4 py-2 rounded-lg font-medium transition-colors flex justify-center items-center h-[38px] disabled:opacity-50"
              >
                {submitLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Zapisz"}
              </button>
            </div>
          </form>
        </div>
      )}

      {error ? (
        <div className="bg-red-50 text-red-700 p-4 rounded-xl border border-red-200">{error}</div>
      ) : codes.length === 0 ? (
        <div className="bg-white p-12 rounded-xl shadow-sm text-center">
          <p className="text-gray-500">Brak kodów rabatowych. Kliknij "Dodaj nowy kod", aby utworzyć pierwszy.</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 border-b border-gray-200 text-xs uppercase font-semibold text-gray-600">
                <tr>
                  <th className="px-6 py-4">Kod</th>
                  <th className="px-6 py-4">Typ zniżki</th>
                  <th className="px-6 py-4">Wartość</th>
                  <th className="px-6 py-4">Użycia / Limit</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Akcje</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {codes.map((code) => (
                  <tr key={code._id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-gray-900">{code.code}</td>
                    <td className="px-6 py-4 text-gray-600">
                      {code.type === "percentage" ? "Procentowa" : "Kwotowa"}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {code.type === "percentage" ? `${code.value}%` : `${code.value} PLN`}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      <span className="font-semibold">{code.usageCount}</span>
                      <span className="text-gray-400"> / {code.maxUses !== null ? code.maxUses : "∞"}</span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleToggleActive(code._id, code.isActive)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
                          code.isActive
                            ? "bg-green-100 text-green-800 hover:bg-green-200"
                            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                      >
                        {code.isActive ? <><Check className="w-3 h-3" /> Aktywny</> : <><X className="w-3 h-3" /> Nieaktywny</>}
                      </button>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleDelete(code._id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors"
                        title="Usuń"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
