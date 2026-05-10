"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

interface HeaderProps {
  transparent?: boolean;
}

export default function Header({ transparent = false }: HeaderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowDropdown(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch(`${API_URL}/api/auth/me`, {
        credentials: "include",
      });
      if (response.ok) {
        const userData = await response.json();
        setUser(userData?.data?.user || null);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch {
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await fetch(`${API_URL}/api/auth/logout`, { 
        method: "POST",
        credentials: "include",
      });
      setIsAuthenticated(false);
      setUser(null);
      setShowDropdown(false);
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${transparent ? 'bg-transparent border-b-0' : 'bg-white border-b border-stone-200'}`}
      role="banner"
    >
      <div className={`max-w-7xl mx-auto px-4 py-4 flex items-center justify-between ${transparent ? 'text-white' : ''}`}>
        <Link href="/" className={`flex items-center gap-2 font-semibold text-lg ${transparent ? 'text-white' : ''}`} aria-label="Konsultacje online - Strona główna">
          <div className="w-6 h-6 bg-blue-600 rotate-45 rounded-sm flex items-center justify-center" aria-hidden="true">
            <div className="w-2 h-2 bg-white rounded-sm" />
          </div>
          <span>Platforma</span>
        </Link>

        <nav aria-label="Główna nawigacja" className={`hidden md:flex items-center gap-6 text-sm ${transparent ? 'text-white/90' : 'text-slate-600'}`}>
          <Link href="/baza-wiedzy" className={`hover:text-blue-300 flex items-center hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1 ${transparent ? 'text-white' : 'text-slate-600'}`}>Baza wiedzy</Link>
          <Link href="/jak-to-dziala" className={`hover:text-blue-300 flex items-center hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1 ${transparent ? 'text-white' : 'text-slate-600'}`}>Jak to działa?</Link>
          {user?.role === "administrator" && (
            <Link href="/admin" className="text-blue-300 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-1">
              Panel lekarza
            </Link>
          )}
        </nav>

        {isAuthenticated ? (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              aria-expanded={showDropdown}
              aria-haspopup="true"
              aria-controls="user-menu"
              className={`flex items-center gap-2 text-sm hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg px-2 py-1 ${transparent ? 'text-white' : 'text-gray-700'}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${transparent ? 'bg-white/20' : 'bg-blue-100'}`} aria-hidden="true">
                <span className={`font-medium ${transparent ? 'text-white' : 'text-blue-600'}`}>
                  {user?.firstName?.[0]}{user?.lastName?.[0]}
                </span>
              </div>
              <span className="hidden md:inline">{user?.firstName} {user?.lastName}</span>
              <svg className="w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showDropdown && (
              <div 
                id="user-menu"
                className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50" 
                role="menu"
              >
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                  role="menuitem"
                  onClick={() => setShowDropdown(false)}
                >
                  Mój profil
                </Link>
                <Link
                  href="/orders"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                  role="menuitem"
                  onClick={() => setShowDropdown(false)}
                >
                  Moje recepty
                </Link>
                {user?.role === "administrator" && (
                  <Link
                    href="/admin"
                    className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                    role="menuitem"
                    onClick={() => setShowDropdown(false)}
                  >
                    Panel lekarza
                  </Link>
                )}
                <hr className="my-1" role="separator" />
                <button
                  onClick={handleLogout}
                  disabled={loading}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50"
                  role="menuitem"
                >
                  {loading ? "Wylogowywanie..." : "Wyloguj się"}
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link 
            href="/login"
            className={`flex items-center cursor-pointer px-5 py-2 rounded-full text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 ${transparent ? 'bg-white text-blue-600 hover:bg-blue-50' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          >
            Zaloguj się
          </Link>
        )}
      </div>
    </header>
  );
}
