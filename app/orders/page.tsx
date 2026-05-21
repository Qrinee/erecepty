"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  XCircle, 
  FileText, 
  ArrowRight, 
  Eye, 
  EyeOff, 
  CreditCard, 
  ChevronRight, 
  ChevronLeft, 
  Filter, 
  FilePlus, 
  ClipboardList 
} from 'lucide-react';

export default function OrdersPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);
  const [payingId, setPayingId] = useState<string | null>(null);

  // Filter & Pagination state
  const [selectedTypeTab, setSelectedTypeTab] = useState<'all' | 'prescription' | 'medical_leave'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    checkAuth();
    loadSubmissions();
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

  const loadSubmissions = async () => {
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
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = async (id: string) => {
    try {
      setPayingId(id);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/api/patient/submissions/${id}/pay`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      
      const result = await response.json();
      if (result.success && result.data?.payment?.paymentUrl) {
        window.location.href = result.data.payment.paymentUrl;
      } else {
        alert(result.message || 'Wystąpił błąd podczas inicjacji płatności');
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Wystąpił błąd podczas inicjacji płatności');
    } finally {
      setPayingId(null);
    }
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

  // Filter submissions by type tab
  const filteredSubmissions = submissions.filter((sub: any) => {
    if (selectedTypeTab === 'all') return true;
    return sub.submissionType === selectedTypeTab;
  });

  // Pagination calculations
  const totalItems = filteredSubmissions.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const paginatedSubmissions = filteredSubmissions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleTabChange = (tabId: 'all' | 'prescription' | 'medical_leave') => {
    setSelectedTypeTab(tabId);
    setCurrentPage(1); // Reset to first page when tab changes
  };

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
    { id: 'prescription', label: 'E-recepty' },
    { id: 'medical_leave', label: 'Zwolnienia (e-ZLA)' }
  ] as const;

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-8 mt-24">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">Moje konsultacje</h1>
          <p className="text-sm text-slate-500 mt-1">Historia Twoich konsultacji, e-recept i zwolnień.</p>
        </div>

        {/* New Order Banner */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 mb-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 leading-tight">Potrzebujesz nowej konsultacji?</h3>
              <p className="text-sm text-slate-500 mt-1">Wypełnij krótki formularz online i skonsultuj się z naszym lekarzem.</p>
            </div>
            <button 
              onClick={() => router.push('/wypelnij-formularz')} 
              className="w-full sm:w-auto px-6 py-3 bg-[#064743] hover:bg-[#053734] text-white rounded-xl font-semibold text-sm transition shadow-sm hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 justify-center cursor-pointer"
            >
              <FilePlus className="w-4 h-4" />
              Nowa konsultacja
            </button>
          </div>
        </div>

        {/* Consultations Card Container */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden mb-8">
          
          {/* Card Header & Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 px-6 py-4 gap-3">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-slate-900 text-base">Historia konsultacji</h3>
            </div>
            
            <div className="flex items-center justify-between sm:justify-end gap-4 flex-wrap">
              {/* Type Tabs */}
              <div className="flex gap-4 text-sm font-medium">
                {tabs.map((tab) => {
                  const isActive = selectedTypeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabChange(tab.id)}
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
              
              {/* Filter Action Button */}
              <button className="flex items-center gap-1.5 px-2.5 py-1.5 border border-slate-200 rounded-lg text-slate-600 hover:text-slate-800 hover:bg-slate-50 text-xs font-semibold cursor-pointer">
                <Filter className="w-3.5 h-3.5" />
                Filtry
              </button>
            </div>
          </div>

          {/* List Content */}
          {totalItems === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
                <FileText className="w-6 h-6" />
              </div>
              <h4 className="font-semibold text-slate-900 text-sm mb-1">Brak zgłoszeń</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto mb-6">
                Nie znaleziono żadnych zgłoszeń w wybranej kategorii.
              </p>
              <button 
                onClick={() => router.push('/wypelnij-formularz')} 
                className="inline-flex items-center justify-center px-5 py-2.5 bg-[#064743] hover:bg-[#053734] text-white rounded-lg text-sm font-semibold transition shadow-sm cursor-pointer"
              >
                Rozpocznij konsultację
              </button>
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {paginatedSubmissions.map((submission: any) => {
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
                  <div key={submission.id} className="p-5 flex flex-col hover:bg-slate-50/40 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      
                      {/* Left: Icon & Details Grid */}
                      <div className="flex items-center gap-4 flex-1">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${iconClass}`}>
                          <TypeIcon className="w-5 h-5" />
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
                          
                          {/* Col 1: Type, Status, Date */}
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

                          {/* Col 2: Medicines / Leave details */}
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

                          {/* Col 3: Doctor Assignment or Decision status */}
                          <div className="flex flex-col justify-center text-sm text-slate-600 sm:pl-4">
                            {submission.status === 'completed' ? (
                              <div>
                                <span className="text-slate-400 text-xs block">Wystawiona przez:</span>
                                <span className="font-semibold text-slate-800">lek. Anna Kowalska</span>
                              </div>
                            ) : (
                              <div>
                                <span className="text-slate-400 text-xs block">Decyzja lekarza:</span>
                                <span className="flex items-center gap-1 mt-0.5">
                                  {submission.status !== 'pending' ? (
                                    <>
                                      <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                                      <span className="text-green-600 text-xs font-semibold">Status zmieniony</span>
                                    </>
                                  ) : submission.isRead ? (
                                    <>
                                      <Eye className="w-3.5 h-3.5 text-blue-600" />
                                      <span className="text-blue-600 text-xs font-semibold">W trakcie analizy</span>
                                    </>
                                  ) : (
                                    <>
                                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                                      <span className="text-slate-500 text-xs">Oczekuje na zmianę</span>
                                    </>
                                  )}
                                </span>
                              </div>
                            )}
                          </div>

                        </div>
                      </div>

                      {/* Right: Actions */}
                      <div className="flex items-center gap-3 justify-end sm:justify-start">
                        {/* Unpaid payment flow button */}
                        {submission.paymentStatus === 'unpaid' && (
                          <button
                            onClick={() => handlePayment(submission.id)}
                            disabled={payingId === submission.id}
                            className="px-4 py-2 bg-[#064743] hover:bg-[#053734] text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                          >
                            {payingId === submission.id ? (
                              <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                              <CreditCard className="w-3.5 h-3.5" />
                            )}
                            {payingId === submission.id ? 'Ładowanie...' : 'Opłać'}
                          </button>
                        )}

                        <button
                          onClick={() => router.push(`/orders/${submission.id}`)}
                          className="px-4 py-2 border border-slate-200 hover:border-[#064743]/30 hover:bg-[#DAE9E6]/10 text-slate-700 hover:text-[#064743] rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 group transition cursor-pointer"
                        >
                          {submission.status === 'completed' ? (
                            isPrescription ? 'Pokaż receptę' : 'Pokaż zwolnienie'
                          ) : 'Szczegóły'}
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#064743] transition-colors" />
                        </button>
                      </div>

                    </div>

                    {/* Bottom: Notes from doctor */}
                    {submission.adminNotes && (
                      <div className="mt-4 p-3 bg-emerald-50/50 border border-emerald-100 rounded-xl max-w-2xl">
                        <p className="text-[11px] font-bold text-[#064743] uppercase tracking-wider mb-0.5">Notatka od lekarza:</p>
                        <p className="text-xs text-slate-700 leading-relaxed">{submission.adminNotes}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Pagination Controls */}
          {totalItems > 0 && (
            <div className="border-t border-slate-100 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50/30">
              
              {/* Entries Info */}
              <div className="text-xs text-slate-500 font-medium">
                Pokaż {startItem}-{endItem} z {totalItems} pozycji
              </div>

              {/* Pages Grid */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {Array.from({ length: totalPages }).map((_, i) => {
                  const pageNum = i + 1;
                  const isActive = pageNum === currentPage;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-xs transition cursor-pointer ${
                        isActive 
                          ? 'bg-[#064743] text-white shadow-sm shadow-[#064743]/20' 
                          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Page Limit Selector */}
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <span>Na stronie:</span>
                <select
                  value={itemsPerPage}
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="bg-white border border-slate-200 rounded-lg px-2 py-1 focus:outline-none focus:border-[#064743] transition cursor-pointer text-slate-700 font-medium"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                </select>
              </div>

            </div>
          )}

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
