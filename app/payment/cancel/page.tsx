"use client";

import { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { XCircle, RefreshCw, List } from 'lucide-react';

function CancelContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const submissionId = searchParams.get('submissionId');

  return (
    <div className="bg-white rounded-2xl mt-20 shadow-sm p-8 max-w-2xl w-full text-center border border-gray-100">
      <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
        <XCircle className="w-10 h-10 text-red-500" />
      </div>
      
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Płatność anulowana
      </h1>
      
      <p className="text-gray-600 text-lg mb-8 leading-relaxed">
        Proces płatności za Twoje zgłoszenie został przerwany lub odrzucony. Twoje zgłoszenie zostało zapisane, ale lekarz nie rozpocznie weryfikacji dopóki nie zostanie ono opłacone.
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
          <List className="w-5 h-5" />
          Przejdź do listy zgłoszeń
        </button>
        <button
          onClick={() => {
            // Ideally this would retry payment directly, but going to orders is safest
            router.push('/orders');
          }}
          className="w-full sm:w-auto px-8 py-3.5 bg-white text-gray-700 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition flex items-center justify-center gap-2"
        >
          <RefreshCw className="w-5 h-5" />
          Spróbuj opłacić ponownie
        </button>
      </div>
    </div>
  );
}

export default function PaymentCancelPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <Suspense fallback={
          <div className="w-12 h-12 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin" />
        }>
          <CancelContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
