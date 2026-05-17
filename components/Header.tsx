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
  const [showMobileMenu, setShowMobileMenu] = useState(false);
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
      className={`fixed pt-5 pb-5 top-0 left-0 right-0 z-50 transition-all duration-300 $ 'bg-white border-b border-stone-200 bg-white/90 backdrop-blur-sm' : 'bg-transparent text-white'}`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        <Link href="/" className={`flex items-center gap-2 font-semibold text-lg ${transparent ? 'text-white' : ''}`} aria-label="Konsultacje online - Strona główna">
          <img src="/logo.png" alt="Lekarze i Terapeuci" className="w-25 h-25" />
        </Link>

        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className={`md:hidden p-2 ${transparent ? 'text-white' : 'text-gray-700'}`}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <nav aria-label="Główna nawigacja" className={`hidden md:flex items-center justify-center gap-8 text-sm text-slate-700 h-16`}>
          <div className="flex items-center gap-8 h-full">
            <Link href="/#uslugi" className={`hover:text-[#064743] transition focus:outline-none focus:ring-2 focus:ring-[#DAE9E6]/50 focus:ring-offset-2 rounded px-1 text-slate-700 hover:text-[#064743] h-full flex items-center`}>Usługi</Link>
            <Link href="/#specjalizacje" className={`hover:text-[#064743] transition focus:outline-none focus:ring-2 focus:ring-[#DAE9E6]/50 focus:ring-offset-2 rounded px-1 text-slate-700 hover:text-[#064743] h-full flex items-center`}>Specjalizacje</Link>
            <Link href="/jak-to-dziala" className={`hover:text-[#064743] transition focus:outline-none focus:ring-2 focus:ring-[#DAE9E6]/50 focus:ring-offset-2 rounded px-1 text-slate-700 hover:text-[#064743] h-full flex items-center`}>Jak to działa?</Link>
            <Link href="/baza-wiedzy" className={`hover:text-[#064743] transition focus:outline-none focus:ring-2 focus:ring-[#DAE9E6]/50 focus:ring-offset-2 rounded px-1 text-slate-700 hover:text-[#064743] h-full flex items-center`}>Baza wiedzy</Link>
            <Link href="/#o-nas" className={`hover:text-[#064743] transition focus:outline-none focus:ring-2 focus:ring-[#DAE9E6]/50 focus:ring-offset-2 rounded px-1 text-slate-700 hover:text-[#064743] h-full flex items-center`}>O nas</Link>
            <Link href="/#cennik" className={`hover:text-[#064743] transition focus:outline-none focus:ring-2 focus:ring-[#DAE9E6]/50 focus:ring-offset-2 rounded px-1 ${transparent ? 'text-white hover:text-[#DAE9E6]' : 'text-slate-700 hover:text-[#064743]'} h-full flex items-center`}>Cennik</Link>
            <Link href="/#kontakt" className={`hover:text-[#064743] transition focus:outline-none focus:ring-2 focus:ring-[#DAE9E6]/50 focus:ring-offset-2 rounded px-1 ${transparent ? 'text-white hover:text-[#DAE9E6]' : 'text-slate-700 hover:text-[#064743]'} h-full flex items-center`}>Kontakt</Link>
          </div>
        </nav>

        {showMobileMenu && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40">
            <nav className="flex flex-col p-4 space-y-4" onClick={() => setShowMobileMenu(false)}>
              <Link href="/#uslugi" className="text-slate-700 hover:text-[#064743] py-2">Usługi</Link>
              <Link href="/#specjalizacje" className="text-slate-700 hover:text-[#064743] py-2">Specjalizacje</Link>
              <Link href="/jak-to-dziala" className="text-slate-700 hover:text-[#064743] py-2">Jak to działa?</Link>
              <Link href="/baza-wiedzy" className="text-slate-700 hover:text-[#064743] py-2">Baza wiedzy</Link>
              <Link href="/#o-nas" className="text-slate-700 hover:text-[#064743] py-2">O nas</Link>
              <Link href="/#cennik" className="text-slate-700 hover:text-[#064743] py-2">Cennik</Link>
              <Link href="/#kontakt" className="text-slate-700 hover:text-[#064743] py-2">Kontakt</Link>
              {!isAuthenticated && (
                <>
                  <hr className="my-2" />
                  <Link href="/login" className="text-[#064743] hover:text-[#1A5D54] py-2 font-medium">Zaloguj się</Link>
                  <Link href="/profile" className="text-slate-700 hover:text-[#064743] py-2">Panel pacjenta</Link>
                </>
              )}
            </nav>
          </div>
        )}

        {isAuthenticated ? (
          <div className="flex items-center gap-6">
            <Link href="/profile" className={`text-sm font-medium ${transparent ? 'text-white hover:text-[#DAE9E6]' : 'text-slate-700 hover:text-[#064743]'} transition focus:outline-none focus:ring-2 focus:ring-[#DAE9E6]/50 focus:ring-offset-2 rounded px-1 flex justify-center items-center h-full`} aria-label="Panel pacjenta">
              Panel pacjenta
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                aria-expanded={showDropdown}
                aria-haspopup="true"
                aria-controls="user-menu"
                className={`flex items-center gap-2 text-sm hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#DAE9E6]/50 focus:ring-offset-2 rounded-lg px-2 py-1 ${transparent ? 'text-white' : 'text-gray-700'}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${transparent ? 'bg-white/20' : 'bg-[#DAE9E6]'}`} aria-hidden="true">
                  <span className={`font-medium ${transparent ? 'text-white' : 'text-[#064743]'}`}>
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
                      className="block px-4 py-2 text-sm text-[#064743] hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
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
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className={`flex items-center cursor-pointer px-5 py-2 rounded-lg text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-[#DAE9E6]/50 focus:ring-offset-2 ${transparent ? 'bg-white text-[#064743] hover:bg-[#DAE9E6]' : 'bg-[#064743] text-white hover:bg-[#1A5D54]'}`}
            >
              Zaloguj się
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
