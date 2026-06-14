"use client";

import { useState, useEffect } from "react";
import AdminPanelClient from "@/components/admin/AdminPanelClient";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function AdminPage() {
  const [user, setUser] = useState<any>(null);
  const [stats, setStats] = useState<any>({ byStatus: { pending: 0, reviewed: 0, completed: 0, cancelled: 0 }, submittedToday: 0, total: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initData = async () => {
      try {
        const res = await fetch(`${API_URL}/api/auth/me`, {
          credentials: "include",
        });
        if (!res.ok) throw new Error("Unauthorized");
        const data = await res.json();
        
        if (data.success && data.data?.user) {
          const u = data.data.user;
          if (u.role === "administrator" || u.role === "doctor") {
            setUser(u);
            if (u.role === "administrator") {
              try {
                const statsRes = await fetch(`${API_URL}/api/patient/submissions/stats`, {
                  credentials: "include",
                });
                if (statsRes.ok) {
                  const statsData = await statsRes.json();
                  if (statsData.success) {
                    setStats(statsData.data);
                  }
                }
              } catch (err) {
                console.error("Failed to fetch admin stats", err);
              }
            }
          } else {
            setError("Brak dostępu do panelu lekarza.");
          }
        } else {
          setError("Brak dostępu do panelu lekarza.");
        }
      } catch (err) {
        setError("Brak dostępu do panelu lekarza.");
      } finally {
        setLoading(false);
      }
    };

    initData();
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
      stats={stats}
    />
  );
}