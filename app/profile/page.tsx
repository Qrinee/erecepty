"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [submissions, setSubmissions] = useState<any[]>([]);

  useEffect(() => {
    checkAuth();
    loadUserSubmissions();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/auth/me`, {
        credentials: 'include',
      });
      
      if (response.ok) {
        const userData = await response.json();
        setUser(userData?.data?.user || null);
      } else {
        router.push('/login');
      }
    } catch (error) {
      console.error('Error checking auth:', error);
      router.push('/login');
    } finally {
      setLoading(false);
    }
  };

  const loadUserSubmissions = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/patient/submissions/mine`, {
        credentials: 'include',
      });
      
      if (response.ok) {
        const data = await response.json();
        setSubmissions(data.data?.submissions || []);
      }
    } catch (error) {
      console.error('Error loading submissions:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });
      router.push('/');
      router.refresh();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'reviewed': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pending': return 'Oczekujące';
      case 'reviewed': return 'Przeglądane';
      case 'completed': return 'Zakończone';
      case 'cancelled': return 'Anulowane';
      default: return status;
    }
  };

  const { CheckCircle2, AlertCircle, Clock, XCircle, User, Mail, Phone, LogOut, FileText, ArrowRight } = require('lucide-react');

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className='h-30'></div>
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {(user.firstName?.[0] || '') + (user.lastName?.[0] || '')}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{user.firstName} {user.lastName}</h2>
              <p className="text-gray-600">Mój profil</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="w-5 h-5 text-gray-400" />
              <span>{user.email}</span>
            </div>
            {user.phone && (
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="w-5 h-5 text-gray-400" />
                <span>{user.phone}</span>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Szybkie akcje</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button onClick={() => router.push('/consultation')} className="flex flex-col items-center gap-2 p-4 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition text-center">
              <FileText className="w-8 h-8 text-blue-600" />
              <span className="font-medium text-gray-900">Nowa konsultacja</span>
            </button>
            <button onClick={() => router.push('/baza-wiedzy')} className="flex flex-col items-center gap-2 p-4 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition text-center">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
              <span className="font-medium text-gray-900">Baza wiedzy</span>
            </button>
            <button onClick={() => router.push('/jak-to-dziala')} className="flex flex-col items-center gap-2 p-4 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition text-center">
              <AlertCircle className="w-8 h-8 text-orange-600" />
              <span className="font-medium text-gray-900">Jak to działa</span>
            </button>
          </div>
        </div>

        {/* Recent Submissions */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Moje zgłoszenia</h3>
          {submissions.length === 0 ? (
            <div className="text-center py-8">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Nie masz jeszcze żadnych zgłoszeń</p>
              <button onClick={() => router.push('/consultation')} className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
                Rozpocznij pierwszą konsultację
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {submissions.slice(0, 5).map((submission: any) => (
                <div key={submission.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getStatusBadgeClass(submission.status)}`}>
                      {(submission.status === 'completed' && <CheckCircle2 className="w-5 h-5" />) ||
                       (submission.status === 'pending' && <AlertCircle className="w-5 h-5" />) ||
                       (submission.status === 'reviewed' && <Clock className="w-5 h-5" />) ||
                       (submission.status === 'cancelled' && <XCircle className="w-5 h-5" />)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Zgłoszenie #{submission.id?.substring(0, 12)}...</div>
                      <div className="text-sm text-gray-500">{new Date(submission.submittedAt).toLocaleString('pl-PL')}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusBadgeClass(submission.status)}`}>{getStatusLabel(submission.status)}</span>
                    <button onClick={() => router.push(`/orders/${submission.id}`)} className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
                      Szczegóły
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
              {submissions.length > 5 && (
                <button onClick={() => router.push('/orders')} className="w-full mt-3 py-3 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition text-gray-700 font-medium">
                  Zobacz wszystkie zgłoszenia
                </button>
              )}
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <button onClick={handleLogout} className="inline-flex items-center gap-2 px-6 py-3 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-xl font-medium transition">
            <LogOut className="w-4 h-4" />
            Wyloguj się
          </button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
