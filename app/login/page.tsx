"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AlertMessage from "@/components/ui/AlertMessage";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle different error cases with user-friendly messages
        if (data.errorCode === 'INVALID_CREDENTIALS') {
          throw new Error("Nieprawidłowy adres e-mail lub hasło");
        }
        if (data.errorCode === 'ACCOUNT_LOCKED') {
          throw new Error("Konto zostało zablokowane. Skontaktuj się z supportem.");
        }
        if (data.errorCode === 'ACCOUNT_NOT_VERIFIED') {
          throw new Error("Konto nie zostało aktywowane. Sprawdź swoją skrzynkę e-mail.");
        }
        throw new Error(data.message || "Nie udało się zalogować. Spróbuj ponownie.");
      }

      router.push("/");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Wystąpił błąd podczas logowania. Spróbuj ponownie.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-sm p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          Logowanie
        </h1>
        
        {error && (
          <div className="mb-4">
            <AlertMessage 
              type="error" 
              title="Błąd logowania"
              message={error} 
            />
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4" aria-label="Formularz logowania">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="twoj@email.pl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Hasło
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              autoComplete="current-password"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#064743] text-white py-3 rounded-lg font-medium hover:bg-[#064743] transition disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
          >
            {loading ? "Logowanie..." : "Zaloguj się"}
          </button>
        </form>
        
        <p className="mt-4 text-center text-sm text-gray-600">
          Nie masz konta?{" "}
          <a href="/register" className="text-[#064743] hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">
            Zarejestruj się
          </a>
        </p>
      </div>
    </div>
  );
}
