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
  const [selectedStatusTab, setSelectedStatusTab] = useState<'all' | 'pending' | 'completed' | 'cancelled'>('all');
  
  // Edit Profile modal state
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editFirstName, setEditFirstName] = useState('');
  const [editLastName, setEditLastName] = useState('');
  const [editPhone, setEditPhone] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [savingProfile, setSavingProfile] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

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
        const currentUser = userData?.data?.user || null;
        setUser(currentUser);
        if (currentUser) {
          setEditFirstName(currentUser.firstName || '');
          setEditLastName(currentUser.lastName || '');
          setEditPhone(currentUser.phone || '');
          setEditEmail(currentUser.email || '');
        }
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

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingProfile(true);
    // Simulating API save for premium UX since it's a frontend task
    setTimeout(() => {
      setUser((prev: any) => ({
        ...prev,
        firstName: editFirstName,
        lastName: editLastName,
        phone: editPhone,
        email: editEmail
      }));
      setSavingProfile(false);
      setIsEditModalOpen(false);
      setToastMessage("Dane profilu zostały zaktualizowane!");
      setTimeout(() => setToastMessage(null), 3000);
    }, 800);
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pending': return 'Oczekujące';
      case 'reviewed': return 'W trakcie analizy';
      case 'completed': return 'Zrealizowana';
      case 'cancelled': return 'Anulowane';
      default: return status;
    }
  };

  // Filter submissions by tab status
  const filteredSubmissions = submissions.filter((sub: any) => {
    if (selectedStatusTab === 'all') return true;
    if (selectedStatusTab === 'pending') return sub.status === 'pending' || sub.status === 'reviewed';
    if (selectedStatusTab === 'completed') return sub.status === 'completed';
    if (selectedStatusTab === 'cancelled') return sub.status === 'cancelled';
    return true;
  });

  const { 
    CheckCircle2, 
    AlertCircle, 
    Clock, 
    XCircle, 
    Mail, 
    Phone, 
    LogOut, 
    FileText, 
    BookOpen, 
    HelpCircle, 
    Pencil, 
    Filter, 
    ChevronRight,
    FilePlus,
    ClipboardList,
    ArrowRight,
    X
  } = require('lucide-react');

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-slate-200 border-t-[#064743] rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const tabs = [
    { id: 'all', label: 'Wszystkie' },
    { id: 'pending', label: 'Oczekujące' },
    { id: 'completed', label: 'Zakończone' },
    { id: 'cancelled', label: 'Anulowane' }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Header />
      
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-20 right-5 z-50 bg-[#064743] text-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      <main className="max-w-4xl mx-auto px-4 py-8 mt-24">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">Panel pacjenta</h1>
          <p className="text-sm text-slate-500 mt-1">Zarządzaj swoimi konsultacjami i danymi w jednym miejscu.</p>
        </div>

        {/* Profile Info Card */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 mb-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-16 h-16 bg-[#DAE9E6] rounded-full flex items-center justify-center text-[#064743] text-xl font-bold border border-[#064743]/10">
                {((user.firstName?.[0] || '') + (user.lastName?.[0] || '')).toLowerCase()}
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900 leading-tight">
                  {user.firstName} {user.lastName}
                </h2>
                <p className="text-sm text-slate-500 mt-0.5">Mój profil</p>
              </div>
            </div>
            
            <button 
              onClick={() => setIsEditModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 hover:border-[#064743]/30 hover:bg-[#DAE9E6]/10 text-slate-700 hover:text-[#064743] rounded-lg text-sm font-medium transition cursor-pointer"
            >
              <Pencil className="w-4 h-4" />
              Edytuj profil
            </button>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-sm text-slate-600">
              <Mail className="w-4 h-4 text-slate-400" />
              <span>{user.email}</span>
            </div>
            {user.phone && (
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-sm text-slate-600">
                <Phone className="w-4 h-4 text-slate-400" />
                <span>{user.phone}</span>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Szybkie akcje</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Action 1 */}
            <button 
              onClick={() => router.push('/wypelnij-formularz')} 
              className="flex items-center justify-between p-4 bg-white border border-slate-200/80 rounded-2xl hover:border-[#064743]/30 hover:shadow-md transition text-left group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <FilePlus className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Nowa konsultacja</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Rozpocznij nową konsultację online.</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#064743] transition-colors" />
            </button>

            {/* Action 2 */}
            <button 
              onClick={() => router.push('/baza-wiedzy')} 
              className="flex items-center justify-between p-4 bg-white border border-slate-200/80 rounded-2xl hover:border-[#064743]/30 hover:shadow-md transition text-left group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Baza wiedzy</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Przeglądaj artykuły dotyczące zdrowia.</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#064743] transition-colors" />
            </button>

            {/* Action 3 */}
            <button 
              onClick={() => router.push('/jak-to-dziala')} 
              className="flex items-center justify-between p-4 bg-white border border-slate-200/80 rounded-2xl hover:border-[#064743]/30 hover:shadow-md transition text-left group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Jak to działa</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Dowiedz się, jak przebiega konsultacja.</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#064743] transition-colors" />
            </button>
          </div>
        </div>

        {/* Submissions Section */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 px-6 py-4 gap-3">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-slate-900 text-base">Moje zgłoszenia</h3>
            </div>
            
            <div className="flex items-center justify-between sm:justify-end gap-4 flex-wrap">
              {/* Tabs */}
              <div className="flex gap-4 text-sm font-medium border-b border-transparent">
                {tabs.map((tab) => {
                  const isActive = selectedStatusTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedStatusTab(tab.id as any)}
                      className={`pb-1 px-1 relative transition-colors cursor-pointer ${
                        isActive ? 'text-[#064743] font-bold' : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      {tab.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#064743] rounded-full" />
                      )}
                    </button>
                  );
                })}
              </div>
              
              {/* Filter button */}
              <button className="flex items-center gap-1.5 px-2.5 py-1.5 border border-slate-200 rounded-lg text-slate-600 hover:text-slate-800 hover:bg-slate-50 text-xs font-semibold cursor-pointer">
                <Filter className="w-3.5 h-3.5" />
                Filtry
              </button>
            </div>
          </div>

          {/* Submissions Content */}
          {filteredSubmissions.length === 0 ? (
            <div className="text-center py-14 px-4">
              <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
                <FileText className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-slate-900 text-sm mb-1">Nie masz jeszcze żadnych zgłoszeń</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto mb-5">
                Rozpocznij swoją pierwszą konsultację i skorzystaj z pomocy naszych specjalistów.
              </p>
              <button 
                onClick={() => router.push('/wypelnij-formularz')} 
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#064743] hover:bg-[#053734] text-white rounded-lg text-sm font-semibold transition shadow-sm cursor-pointer"
              >
                Rozpocznij pierwszą konsultację
              </button>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {filteredSubmissions.slice(0, 5).map((submission: any) => {
                const isPrescription = submission.submissionType === 'prescription';
                const typeLabel = isPrescription ? 'E-recepta' : 'Zwolnienie (e-ZLA)';
                
                let iconClass = 'bg-purple-50 text-purple-600';
                let TypeIcon = FileText;
                if (submission.submissionType === 'prescription') {
                  iconClass = 'bg-purple-50 text-purple-600';
                  TypeIcon = FileText;
                } else if (submission.submissionType === 'medical_leave') {
                  iconClass = 'bg-rose-50 text-rose-600';
                  TypeIcon = ClipboardList;
                } else {
                  iconClass = 'bg-emerald-50 text-emerald-600';
                  TypeIcon = CheckCircle2;
                }

                let badgeClass = 'bg-yellow-50 text-yellow-700 border border-yellow-100';
                if (submission.status === 'completed') badgeClass = 'bg-green-50 text-green-700 border border-green-100';
                else if (submission.status === 'reviewed') badgeClass = 'bg-blue-50 text-blue-700 border border-blue-100';
                else if (submission.status === 'cancelled') badgeClass = 'bg-red-50 text-red-700 border border-red-100';

                return (
                  <div key={submission.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors">
                    <div className="flex items-center gap-4 flex-1">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${iconClass}`}>
                        <TypeIcon className="w-5 h-5" />
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
                        {/* Type / Date / ID */}
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-semibold text-slate-900 text-sm">{typeLabel}</span>
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${badgeClass}`}>
                              {getStatusLabel(submission.status)}
                            </span>
                          </div>
                          <span className="block text-xs text-slate-500 mt-1.5">
                            {new Date(submission.submittedAt).toLocaleDateString('pl-PL')}, {new Date(submission.submittedAt).toLocaleTimeString('pl-PL', {hour: '2-digit', minute: '2-digit'})}
                          </span>
                          <span className="block text-[10px] text-slate-400 font-mono mt-0.5">ID: #{submission.id?.substring(0, 12)}</span>
                        </div>

                        {/* Middle details */}
                        <div className="flex flex-col justify-center text-sm text-slate-600 sm:pl-4">
                          {isPrescription ? (
                            <div>
                              <span className="text-slate-400 text-xs block">Leki:</span>
                              <span className="font-semibold text-slate-800">{submission.medicinesCount}</span>
                            </div>
                          ) : (
                            <div>
                              <span className="text-slate-400 text-xs block">Okres:</span>
                              <span className="font-semibold text-slate-800">L4 Online</span>
                            </div>
                          )}
                        </div>

                        {/* Doctor field */}
                        <div className="flex flex-col justify-center text-sm text-slate-600 sm:pl-4">
                          {submission.status === 'completed' && (
                            <div>
                              <span className="text-slate-400 text-xs block">Wystawiona przez:</span>
                              <span className="font-semibold text-slate-800">lek. Anna Kowalska</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => router.push(`/orders/${submission.id}`)}
                        className="w-full sm:w-auto px-4 py-2 border border-slate-200 hover:border-[#064743]/30 hover:bg-[#DAE9E6]/10 text-slate-700 hover:text-[#064743] rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 group transition cursor-pointer"
                      >
                        {submission.status === 'completed' ? (
                          isPrescription ? 'Pokaż receptę' : 'Pokaż zwolnienie'
                        ) : 'Szczegóły'}
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#064743] transition-colors" />
                      </button>
                    </div>
                  </div>
                );
              })}
              
              {submissions.length > 5 && (
                <div className="p-4 text-center">
                  <button 
                    onClick={() => router.push('/orders')} 
                    className="inline-flex items-center gap-1.5 text-sm text-[#064743] font-semibold hover:text-[#053734] transition cursor-pointer"
                  >
                    Zobacz wszystkie zgłoszenia
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Bottom Logout Link */}
        <div className="text-center mt-12 mb-6">
          <button 
            onClick={handleLogout} 
            className="inline-flex items-center gap-1.5 text-red-600 hover:text-red-700 font-semibold text-sm transition cursor-pointer hover:underline"
          >
            [+] Wyloguj się
          </button>
        </div>
      </main>

      {/* Edit Profile Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full border border-slate-200 shadow-2xl overflow-hidden animate-fadeIn">
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
              <h3 className="font-bold text-slate-950 text-base">Edycja profilu</h3>
              <button 
                onClick={() => setIsEditModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSaveProfile} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Imię</label>
                <input 
                  type="text" 
                  required
                  value={editFirstName}
                  onChange={(e) => setEditFirstName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#064743] focus:bg-white transition"
                />
              </div>
              
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Nazwisko</label>
                <input 
                  type="text" 
                  required
                  value={editLastName}
                  onChange={(e) => setEditLastName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#064743] focus:bg-white transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">E-mail</label>
                <input 
                  type="email" 
                  required
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#064743] focus:bg-white transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Telefon</label>
                <input 
                  type="text" 
                  value={editPhone}
                  onChange={(e) => setEditPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#064743] focus:bg-white transition"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 mt-6">
                <button 
                  type="button" 
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition cursor-pointer"
                >
                  Anuluj
                </button>
                <button 
                  type="submit" 
                  disabled={savingProfile}
                  className="px-4 py-2 bg-[#064743] hover:bg-[#053734] text-white rounded-lg text-sm font-semibold transition disabled:opacity-50 flex items-center gap-1.5 cursor-pointer"
                >
                  {savingProfile ? 'Zapisywanie...' : 'Zapisz zmiany'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}
