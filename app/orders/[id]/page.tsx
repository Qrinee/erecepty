"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function OrderDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(`${API_URL}/api/patient/submissions/${id}`, {
          credentials: "include",
        });

        if (!response.ok) {
          router.push("/orders");
          return;
        }

        const result = await response.json();
        setData(result?.data || null);
      } catch {
        router.push("/orders");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadData();
    }
  }, [id, router]);

  const getStatusBadgeClass = (status: string, paymentStatus?: string) => {
    if (status === 'cancelled') return 'bg-red-100 text-red-800';
    if (status === 'completed') return 'bg-green-100 text-green-800';
    if (status === 'reviewed') return 'bg-blue-100 text-blue-800';
    
    if (paymentStatus === 'unpaid') return 'bg-orange-100 text-orange-800';
    if (paymentStatus === 'paid') return 'bg-teal-100 text-teal-800';
    return 'bg-yellow-100 text-yellow-800';
  };

  const getStatusLabel = (status: string, paymentStatus?: string) => {
    if (status === 'cancelled') return 'Anulowane';
    if (status === 'completed') return 'Zakończone';
    if (status === 'reviewed') return 'W trakcie analizy';
    
    if (paymentStatus === 'unpaid') return 'Nieopłacone';
    if (paymentStatus === 'paid') return 'Opłacone (Oczekujące na lekarza)';
    return 'Oczekujące na przegląd';
  };

  const getStatusIcon = (status: string, paymentStatus?: string) => {
    const { CheckCircle2, AlertCircle, Clock, XCircle, CreditCard } = require('lucide-react');
    if (status === 'completed') return CheckCircle2 ? <CheckCircle2 className="w-6 h-6" /> : null;
    if (status === 'reviewed') return Clock ? <Clock className="w-6 h-6" /> : null;
    if (status === 'cancelled') return XCircle ? <XCircle className="w-6 h-6" /> : null;
    
    if (paymentStatus === 'unpaid') return CreditCard ? <CreditCard className="w-6 h-6" /> : null;
    return AlertCircle ? <AlertCircle className="w-6 h-6" /> : null;
  };

  const getSubmissionTypeLabel = (type: string) => {
    switch (type) {
      case 'prescription': return 'Recepta';
      case 'medical_leave': return 'Zwolnienie lekarskie';
      default: return type;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin" />
      </div>
    );
  }

  if (!data) {
    return null;
  }

  const { Eye, EyeOff, CheckCircle2, AlertCircle, Clock, XCircle, FileText, ArrowLeft } = require('lucide-react');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <button 
          onClick={() => router.push("/orders")} 
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Wróć do konsultacji
        </button>

        {/* Status Header */}
        <div className={`${getStatusBadgeClass(data.status, data.paymentStatus)} rounded-2xl p-6 mb-6 border border-current border-opacity-20`}>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              {getStatusIcon(data.status, data.paymentStatus)}
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-2">
                {getStatusLabel(data.status, data.paymentStatus)}
              </h1>
              <p className="text-sm opacity-90">
                Zgłoszenie #{data.id?.substring(0, 12)}... • {getSubmissionTypeLabel(data.submissionType)}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Left Column - Status Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Timeline Section */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Historia konsultacji</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-full mt-1.5" />
                    <div className="w-0.5 h-12 bg-gray-200 my-2" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Zgłoszenie złożone</p>
                    <p className="text-sm text-gray-600">
                      {new Date(data.submittedAt).toLocaleString('pl-PL')}
                    </p>
                  </div>
                </div>

                {data.isRead !== undefined && (
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-4 h-4 rounded-full ${data.isRead ? 'bg-blue-600' : 'bg-gray-300'}`} />
                      {data.status !== 'completed' && <div className="w-0.5 h-12 bg-gray-200 my-2" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        {data.isRead ? (
                          <Eye className="w-5 h-5 text-blue-600" />
                        ) : (
                          <EyeOff className="w-5 h-5 text-gray-400" />
                        )}
                        <p className="font-medium text-gray-900">
                          {data.isRead ? 'Przejrzane przez lekarza' : 'Oczekujące na przegląd'}
                        </p>
                      </div>
                      {data.isRead && (
                        <p className="text-sm text-gray-600">
                          Lekarz przejrzał Twoje zgłoszenie
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {data.status === 'completed' && (
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-green-600 rounded-full" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Konsultacja zakończona</p>
                      <p className="text-sm text-gray-600">
                        Twoje zgłoszenie zostało rozpatrzone
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Admin Notes Section */}
            {data.adminNotes && (
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Notatka od lekarza</h3>
                <p className="text-blue-800 text-base leading-relaxed">
                  {data.adminNotes}
                </p>
              </div>
            )}

            {/* Patient Data Section */}
            {data.patient && (
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Dane pacjenta</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Imię i nazwisko</p>
                    <p className="font-medium text-gray-900">
                      {data.patient.contact?.firstName} {data.patient.contact?.lastName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">PESEL</p>
                    <p className="font-medium text-gray-900">{data.patient.contact?.pesel}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-medium text-gray-900">{data.patient.contact?.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Telefon</p>
                    <p className="font-medium text-gray-900">{data.patient.contact?.phone}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-sm text-gray-600">Adres</p>
                    <p className="font-medium text-gray-900">
                      {data.patient.contact?.street} {data.patient.contact?.houseNumber}
                      {data.patient.contact?.apartmentNumber && `/${data.patient.contact.apartmentNumber}`}
                    </p>
                    <p className="font-medium text-gray-900">
                      {data.patient.contact?.postalCode} {data.patient.contact?.city}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Medical Info Section */}
            {data.medicalInfo && (
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Informacje medyczne</h2>
                <div className="space-y-3 text-sm">
                  {data.medicalInfo.mainComplaint && (
                    <div>
                      <p className="text-gray-600">Problem</p>
                      <p className="font-medium text-gray-900">{data.medicalInfo.mainComplaint}</p>
                    </div>
                  )}
                  {data.medicalInfo.chronicDiseases && (
                    <div>
                      <p className="text-gray-600">Choroby przewlekłe</p>
                      <p className="font-medium text-gray-900">{data.medicalInfo.chronicDiseases}</p>
                    </div>
                  )}
                  {data.medicalInfo.medications && (
                    <div>
                      <p className="text-gray-600">Przyjmowane leki</p>
                      <p className="font-medium text-gray-900">{data.medicalInfo.medications}</p>
                    </div>
                  )}
                  {data.medicalInfo.allergies && (
                    <div>
                      <p className="text-gray-600">Alergie/Nietolerancje</p>
                      <p className="font-medium text-gray-900">{data.medicalInfo.allergies}</p>
                    </div>
                  )}
                  {data.medicalInfo.diagnosis && (
                    <div>
                      <p className="text-gray-600">Rozpoznanie</p>
                      <p className="font-medium text-gray-900">{data.medicalInfo.diagnosis}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Medicines Section */}
            {data.medicines && data.medicines.length > 0 ? (
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Leki ({data.medicines.length})</h2>
                <div className="space-y-2">
                  {data.medicines.map((med: any, idx: number) => (
                    <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                      <p className="font-medium text-gray-900">{idx + 1}. {med.medicineName || med.medicineId || 'Lek'}</p>
                      <p className="text-sm text-gray-600">Ilość: {med.quantity}</p>
                      {med.dosage && <p className="text-sm text-gray-600">Dawka: {med.dosage}</p>}
                    </div>
                  ))}
                </div>
              </div>
            ) : data.medicalInfo?.doctorChoosesMeds ? (
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Leki</h2>
                <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-lg text-emerald-800 text-sm">
                  Wybrano opcję: <strong>Leki dobierze lekarz</strong> na podstawie opisu Twoich objawów.
                </div>
              </div>
            ) : null}
          </div>

          {/* Right Column - Summary */}
          <div className="space-y-4">
            {/* Quick Info Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 sticky top-28">
              <h3 className="font-semibold text-gray-900 mb-4">Podsumowanie</h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-600">Typ zgłoszenia</p>
                  <p className="font-medium text-gray-900">{getSubmissionTypeLabel(data.submissionType)}</p>
                </div>

                <div className="pt-3 border-t border-gray-200">
                  <p className="text-gray-600">Status</p>
                  <p className={`font-medium ${getStatusBadgeClass(data.status, data.paymentStatus).split(' ')[0] === 'bg-green-100' ? 'text-green-700' : getStatusBadgeClass(data.status, data.paymentStatus).split(' ')[1]}`}>
                    {getStatusLabel(data.status, data.paymentStatus)}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-200">
                  <p className="text-gray-600">Decyzja lekarza</p>
                  <div className="flex items-center gap-2 mt-1">
                    {data.status !== 'pending' ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <p className="font-medium text-green-700">Status zmieniony</p>
                      </>
                    ) : data.isRead ? (
                      <>
                        <Eye className="w-4 h-4 text-blue-600" />
                        <p className="font-medium text-blue-700">W trakcie analizy</p>
                      </>
                    ) : (
                      <>
                        <Clock className="w-4 h-4 text-orange-600" />
                        <p className="font-medium text-orange-700">Oczekuje na zmianę</p>
                      </>
                    )}
                  </div>
                </div>

                {data.paymentStatus && (
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-gray-600">Płatność</p>
                    <p className={`font-medium ${
                      data.paymentStatus === 'paid' ? 'text-green-700' : 
                      data.paymentStatus === 'unpaid' ? 'text-orange-700' :
                      'text-red-700'
                    }`}>
                      {data.paymentStatus === 'paid' ? '✓ Opłacone' : 
                       data.paymentStatus === 'unpaid' ? 'Oczekujące' : 'Nieudane'}
                    </p>
                  </div>
                )}

                <div className="pt-3 border-t border-gray-200">
                  <p className="text-gray-600">Data złożenia</p>
                  <p className="font-medium text-gray-900 text-xs">
                    {new Date(data.submittedAt).toLocaleString('pl-PL')}
                  </p>
                </div>

                {data.paidAt && (
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-gray-600">Data opłacenia</p>
                    <p className="font-medium text-gray-900 text-xs">
                      {new Date(data.paidAt).toLocaleString('pl-PL')}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
