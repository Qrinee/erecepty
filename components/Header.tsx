"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
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
  const pathname = usePathname();

  useEffect(() => {
    checkAuth();
  }, []);

  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  
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

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        
        const headerOffset = 80; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
      setShowMobileMenu(false);
    }
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-slate-100 ${transparent
        ? "bg-transparent text-white"
        : "bg-white/90 backdrop-blur-md text-slate-900"
        }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 ">
        <Link 
          href="/" 
          onClick={handleLogoClick}
          className="flex items-center gap-2 font-semibold text-lg" 
          aria-label="Konsultacje online - Strona główna"
        >
          <img src="/logo.png" alt="Lekarze i Terapeuci" className="h-25 w-auto object-contain" />
        </Link>

        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="xl:hidden p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <nav aria-label="Główna nawigacja" className="hidden xl:flex items-center justify-center gap-6 text-sm font-medium h-16">
          <Link href="/#uslugi" onClick={(e) => handleScrollToSection(e, "uslugi")} className="hover:text-[#064743] transition rounded text-slate-600 px-1 py-2">Usługi</Link>
          <Link href="/jak-to-dziala" className="hover:text-[#064743] transition rounded text-slate-600 px-1 py-2">Jak to działa?</Link>
          <Link href="/dla-kobiet-i-mezczyzn" className="hover:text-[#064743] transition rounded text-slate-600 px-1 py-2">Dla kobiet i mężczyzn</Link>
          <Link href="/#cennik" onClick={(e) => handleScrollToSection(e, "cennik")} className="hover:text-[#064743] transition rounded text-slate-600 px-1 py-2">Cennik</Link>
          <Link href="/dla-lekarzy" className="hover:text-[#064743] transition rounded text-slate-600 px-1 py-2">Dla lekarzy</Link>
          <Link href="/baza-wiedzy" className="hover:text-[#064743] transition rounded text-slate-600 px-1 py-2">Baza wiedzy</Link>
          <Link href="/#kontakt" onClick={(e) => handleScrollToSection(e, "kontakt")} className="hover:text-[#064743] transition rounded text-slate-600 px-1 py-2">Kontakt</Link>
        </nav>

        {showMobileMenu && (
          <div className="xl:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-40">
            <nav className="flex flex-col p-4 space-y-4">
              <Link href="/#uslugi" onClick={(e) => handleScrollToSection(e, "uslugi")} className="text-slate-700 hover:text-[#064743] py-2">Usługi</Link>
              <Link href="/#specjalizacje" onClick={(e) => handleScrollToSection(e, "specjalizacje")} className="text-slate-700 hover:text-[#064743] py-2">Specjalizacje</Link>
              <Link href="/jak-to-dziala" onClick={() => setShowMobileMenu(false)} className="text-slate-700 hover:text-[#064743] py-2">Jak to działa?</Link>
              <Link href="/dla-kobiet-i-mezczyzn" onClick={() => setShowMobileMenu(false)} className="text-slate-700 hover:text-[#064743] py-2">Dla kobiet i mężczyzn</Link>
              <Link href="/dla-lekarzy" onClick={() => setShowMobileMenu(false)} className="text-slate-700 hover:text-[#064743] py-2">Dla lekarzy</Link>
              <Link href="/baza-wiedzy" onClick={() => setShowMobileMenu(false)} className="text-slate-700 hover:text-[#064743] py-2">Baza wiedzy</Link>
              <Link href="/#kontakt" onClick={(e) => handleScrollToSection(e, "kontakt")} className="text-slate-700 hover:text-[#064743] py-2">Kontakt</Link>
              {!isAuthenticated && (
                <>
                  <hr className="my-2" />
                  <Link href="/login" onClick={() => setShowMobileMenu(false)} className="text-[#064743] hover:text-[#1A5D54] py-2 font-medium">Zaloguj się</Link>
                  <Link href="/wypelnij-formularz" onClick={() => setShowMobileMenu(false)} className="text-slate-700 hover:text-[#064743] py-2">Umów wizytę</Link>
                </>
              )}
            </nav>
          </div>
        )}

        {isAuthenticated ? (
          <div className="flex items-center gap-6">
            <Link href="/profile" className="hidden xl:flex text-sm font-semibold text-slate-700 hover:text-[#064743] transition px-1 py-2 justify-center items-center h-full animate-fadeIn" aria-label="Panel pacjenta">
              Panel pacjenta
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                aria-expanded={showDropdown}
                aria-haspopup="true"
                aria-controls="user-menu"
                className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 focus:outline-none px-2 py-1"
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#DAE9E6]" aria-hidden="true">
                  <span className="font-semibold text-[#064743]">
                    {user?.firstName?.[0]}{user?.lastName?.[0]}
                  </span>
                </div>
                <span className="hidden xl:inline">{user?.firstName} {user?.lastName}</span>
                <svg className="w-4 h-4 text-slate-500" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    Moje konsultacje
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
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="flex items-center justify-center cursor-pointer px-5 py-2 border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 transition focus:outline-none focus:ring-2 focus:ring-[#DAE9E6]/50 focus:ring-offset-2"
            >
              Zaloguj się
            </Link>
            <Link
              href="/wypelnij-formularz"
              className="flex items-center justify-center cursor-pointer px-5 py-2 rounded-lg text-sm font-semibold text-white bg-[#064743] hover:bg-[#053734] transition focus:outline-none focus:ring-2 focus:ring-[#064743]/50 focus:ring-offset-2"
            >
              Umów wizytę
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
