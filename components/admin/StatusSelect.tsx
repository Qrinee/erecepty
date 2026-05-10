"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

interface StatusSelectProps {
  submissionId: string;
  currentStatus: "pending" | "reviewed" | "completed" | "cancelled";
  submissionType: "prescription" | "medical_leave";
}

const STATUS_OPTIONS = [
  { value: "reviewed", label: "W trakcie przeglądu", color: "text-blue-700" },
  { value: "completed", label: "Zakończono - wystawiono", color: "text-green-700" },
  { value: "cancelled", label: "Anulowano", color: "text-red-700" },
];

export default function StatusSelect({ submissionId, currentStatus, submissionType }: StatusSelectProps) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleStatusChange = async (newStatus: string) => {
    if (newStatus === currentStatus) return;

    setIsUpdating(true);
    setError("");

    try {
      const res = await fetch(`${API_URL}/api/patient/submissions/${submissionId}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
        credentials: "include",
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Nie udało się zmienić statusu");
      }

      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Wystąpił błąd");
    } finally {
      setIsUpdating(false);
    }
  };

  const getStatusHelpText = (status: string): string => {
    switch (status) {
      case "pending":
        return "Nikt jeszcze tego nie przeglądał";
      case "reviewed":
        return "Jesteś w trakcie przeglądania";
      case "completed":
        return submissionType === "medical_leave"
          ? "Zwolnienie zostało wystawione"
          : "Konsultacja została ukończona";
      case "cancelled":
        return "Zgłoszenie zostało anulowane";
      default:
        return "";
    }
  };

  const availableOptions = STATUS_OPTIONS.filter((opt) => opt.value !== currentStatus);

  return (
    <div className="space-y-3">
      <div>
        <p className="text-sm text-gray-500 mb-2">
          Aktualny status:{" "}
          <span className="font-semibold text-gray-900">{getStatusHelpText(currentStatus)}</span>
        </p>

        {currentStatus !== "completed" && currentStatus !== "cancelled" ? (
          <div className="flex flex-col gap-2">
            <label htmlFor="status-select" className="text-sm font-medium text-gray-700">
              Zmień status na:
            </label>
            <select
              id="status-select"
              disabled={isUpdating}
              defaultValue=""
              onChange={(e) => {
                if (e.target.value) {
                  handleStatusChange(e.target.value);
                }
              }}
              className="w-full sm:w-80 px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <option value="" disabled>
                {isUpdating ? "Zapisywanie..." : "Wybierz nowy status..."}
              </option>
              {availableOptions.map((option) => (
                <option key={option.value} value={option.value} className={option.color}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <p className="text-sm text-gray-500 italic">
            To zgłoszenie jest już {currentStatus === "completed" ? "zakończone" : "anulowane"} — nie można zmienić jego statusu.
          </p>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 rounded-lg p-3 border border-red-200">
          {error}
        </p>
      )}
    </div>
  );
}