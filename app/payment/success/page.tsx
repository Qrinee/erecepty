"use client";

import { useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle2, ArrowRight } from 'lucide-react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const submissionId = searchParams.get('submissionId');

  useEffect(() => {
    
    localStorage.removeItem('orderMedicines');
    localStorage.removeItem('medicalConsultation');
    localStorage.removeItem('orderContact');
    localStorage.removeItem('orderExpress');
    localStorage.removeItem('orderRefunded');
  }, []);

  return (
    <div className="bg-white mt-20 rounded-2xl shadow-sm p-8 max-w-2xl w-full text-center border border-gray-100">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="w-10 h-10 text-green-600" />
      </div>
      
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Płatność zakończona sukcesem!
      </h1>
      
      <p className="text-gray-600 text-lg mb-8 leading-relaxed">
        Dziękujemy. Twoje zgłoszenie zostało poprawnie opłacone i przekazane do weryfikacji przez lekarza. O decyzji poinformujemy Cię drogą mailową.
      </p>

      {submissionId && (
        <div className="bg-gray-50 rounded-xl p-4 mb-8 inline-block">
          <p className="text-sm text-gray-500 mb-1">Identyfikator zgłoszenia</p>
          <p className="font-mono font-medium text-gray-900">{submissionId}</p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={() => router.push('/orders')}
          className="w-full sm:w-auto px-8 py-3.5 bg-[#064743] text-white rounded-xl font-medium hover:bg-[#064743] transition flex items-center justify-center gap-2"
        >
          Śledź status zgłoszenia
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <Suspense fallback={
          <div className="w-12 h-12 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin" />
        }>
          <SuccessContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
