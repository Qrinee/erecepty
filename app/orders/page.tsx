"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function OrdersPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);
  const [payingId, setPayingId] = useState<string | null>(null);

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

  const getStatusIcon = (status: string) => {
    const { CheckCircle2, AlertCircle, Clock, XCircle } = require('lucide-react');
    switch (status) {
      case 'completed': return CheckCircle2 ? <CheckCircle2 className="w-5 h-5" /> : null;
      case 'pending': return AlertCircle ? <AlertCircle className="w-5 h-5" /> : null;
      case 'reviewed': return Clock ? <Clock className="w-5 h-5" /> : null;
      case 'cancelled': return XCircle ? <XCircle className="w-5 h-5" /> : null;
      default: return Clock ? <Clock className="w-5 h-5" /> : null;
    }
  };

  const getSubmissionTypeLabel = (type: string) => {
    switch (type) {
      case 'prescription': return 'Recepta';
      case 'medical_leave': return 'Zwolnienie lekarskie';
      default: return type;
    }
  };

  const getSubmissionTypeIcon = (type: string) => {
    const { FileText, AlertCircle } = require('lucide-react');
    switch (type) {
      case 'prescription': return FileText ? <FileText className="w-4 h-4" /> : null;
      case 'medical_leave': return AlertCircle ? <AlertCircle className="w-4 h-4" /> : null;
      default: return FileText ? <FileText className="w-4 h-4" /> : null;
    }
  };

  const { CheckCircle2, AlertCircle, Clock, XCircle, FileText, ArrowRight, Eye, EyeOff, CreditCard } = require('lucide-react');

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
      
      <main className="max-w-5xl mx-auto px-4 py-8 mt-25">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Moje konsultacje</h1>
          <p className="text-gray-600">Historia Twoich konsultacji, e-recept i zwolnień</p>
        </div>

        {/* New Order Button */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Potrzebujesz konsultacji?</h3>
              <p className="text-gray-600">Rozpocznij nową konsultację online</p>
            </div>
            <button onClick={() => router.push('/consultation')} className="w-full sm:w-auto px-6 py-3 bg-[#064743] text-white rounded-lg font-medium hover:bg-[#064743] transition flex items-center gap-2 justify-center">
              <FileText className="w-5 h-5" />
              Nowa konsultacja
            </button>
          </div>
        </div>

        {/* Orders List */}
        {submissions.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Brak konsultacji</h3>
            <p className="text-gray-600 mb-6">Nie masz jeszcze żadnych konsultacji</p>
            <button onClick={() => router.push('/consultation')} className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
              Rozpocznij pierwszą konsultację
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {submissions.map((submission: any) => (
              <div key={submission.id} className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                {/* Main Row */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      {/* Status Icon */}
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${getStatusBadgeClass(submission.status)}`}>
                        {getStatusIcon(submission.status)}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-gray-900">
                            Zgłoszenie #{submission.id?.substring(0, 12)}...
                          </h3>
                          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(submission.status)}`}>
                            {getStatusLabel(submission.status)}
                          </span>
                          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 flex items-center gap-1">
                            {getSubmissionTypeIcon(submission.submissionType)}
                            {getSubmissionTypeLabel(submission.submissionType)}
                          </span>
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-2 pt-5 sm:grid-cols-4 gap-3 text-sm">
                          <div>
                            <p className="text-gray-500 text-xs uppercase font-semibold">Data</p>
                            <p className="text-gray-900">{new Date(submission.submittedAt).toLocaleDateString('pl-PL')}</p>
                            <p className="text-gray-600 text-xs">{new Date(submission.submittedAt).toLocaleTimeString('pl-PL', {hour: '2-digit', minute: '2-digit'})}</p>
                          </div>

                          {submission.medicinesCount > 0 && (
                            <div>
                              <p className="text-gray-500 text-xs uppercase font-semibold">Leki</p>
                              <p className="text-gray-900">{submission.medicinesCount}</p>
                            </div>
                          )}

                          {submission.paymentStatus && (
                            <div>
                              <p className="text-gray-500 text-xs uppercase font-semibold">Płatność</p>
                              <p className={`font-medium ${
                                submission.paymentStatus === 'paid' ? 'text-green-600' : 
                                submission.paymentStatus === 'unpaid' ? 'text-orange-600' :
                                'text-red-600'
                              }`}>
                                {submission.paymentStatus === 'paid' ? '✓ Opłacone' : 
                                 submission.paymentStatus === 'unpaid' ? 'Oczekujące' : 'Nieudane'}
                              </p>
                            </div>
                          )}

                          <div>
                            <p className="text-gray-500 text-xs uppercase font-semibold">Decyzja lekarza</p>
                            <p className="flex items-center gap-1">
                              {submission.status !== 'pending' ? (
                                <>
                                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                                  <span className="text-green-600 font-medium">Status zmieniony</span>
                                </>
                              ) : submission.isRead ? (
                                <>
                                  <Eye className="w-4 h-4 text-blue-600" />
                                  <span className="text-blue-600 font-medium">W trakcie analizy</span>
                                </>
                              ) : (
                                <>
                                  <Clock className="w-4 h-4 text-gray-400" />
                                  <span className="text-gray-600">Oczekuje na zmianę</span>
                                </>
                              )}
                            </p>
                          </div>
                        </div>

                        {/* Doctor Notes */}
                        {submission.adminNotes && (
                          <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                            <p className="text-xs font-semibold text-green-900 mb-1">Notatka od lekarza:</p>
                            <p className="text-sm text-green-800">{submission.adminNotes}</p>
                          </div>
                        )}

                        {/* Pay Button for Unpaid Orders */}
                        {submission.paymentStatus === 'unpaid' && (
                          <div className="mt-4 flex justify-end">
                            <button
                              onClick={() => handlePayment(submission.id)}
                              disabled={payingId === submission.id}
                              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition flex items-center gap-2 ${
                                payingId === submission.id 
                                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                                  : 'bg-[#064743] text-white hover:bg-[#064743]'
                              }`}
                            >
                              {payingId === submission.id ? (
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              ) : (
                                <CreditCard className="w-4 h-4" />
                              )}
                              {payingId === submission.id ? 'Przekierowywanie...' : 'Opłać zamówienie'}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
