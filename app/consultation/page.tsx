import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ConsultationChoicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-28">
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Wybierz rodzaj konsultacji</h1>
        <p className="text-gray-600 mb-8">Możesz rozpocząć konsultację zdrowotną albo wypełnić formularz zwolnienia lekarskiego.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-2">Konsultacja zdrowotna</h2>
            <p className="text-gray-600 mb-4">Wypełnij formularz i uzyskaj profesjonalną poradę lekarza.</p>
            <Link href="/" className="inline-block px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Zacznij konsultację
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-2">Zwolnienie lekarskie</h2>
            <p className="text-gray-600 mb-4">Wypełnij formularz zwolnienia, który trafi do lekarza.</p>
            <Link href="/medical-leave" className="inline-block px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Przejdź do formularza zwolnienia
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
