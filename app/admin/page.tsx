"use client";

import { useState, useEffect } from "react";
import AdminPanelClient from "@/components/admin/AdminPanelClient";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function AdminPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/api/auth/me`, {
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => {
        if (data.success && data.data?.user) {
          const u = data.data.user;
          if (u.role === "administrator" || u.role === "doctor") {
            setUser(u);
          } else {
            setError("Brak dostępu do panelu lekarza.");
          }
        } else {
          setError("Brak dostępu do panelu lekarza.");
        }
      })
      .catch(() => {
        setError("Brak dostępu do panelu lekarza.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#DAE9E6] border-t-[#064743] rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">{error || "Brak dostępu do panelu lekarza."}</p>
      </div>
    );
  }

  return (
    <AdminPanelClient
      currentUser={user}
      stats={{ byStatus: { pending: 0, reviewed: 0, completed: 0, cancelled: 0 }, submittedToday: 0, total: 0 }}
    />
  );
}