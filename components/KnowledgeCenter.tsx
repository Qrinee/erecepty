import { knowledgeCards } from "@/app/data/knowledgeCards";
import KnowledgeCard from "@/components/KnowledgeCard";
import { BookMarked, ShieldCheck, HeartHandshake, Clock, Search, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function KnowledgeCenter() {
  const trustFeatures = [
    {
      icon: BookMarked,
      title: "Rzetelna wiedza",
      subtitle: "Artykuły pisane przez lekarzy i specjalistów"
    },
    {
      icon: ShieldCheck,
      title: "Sprawdzone informacje",
      subtitle: "Tylko wiarygodne i aktualne źródła"
    },
    {
      icon: HeartHandshake,
      title: "Dla Twojego zdrowia",
      subtitle: "Wskazówki i porady na co dzień"
    },
    {
      icon: Clock,
      title: "Dostęp 24/7",
      subtitle: "Czytaj kiedy chcesz, gdzie chcesz"
    }
  ];

  return (
    <section className="bg-white py-20" aria-labelledby="knowledge-center-title">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 id="knowledge-center-title" className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Centrum wiedzy
          </h2>
          <p className="mt-4 text-slate-600 text-base md:text-lg">
            Praktyczne artykuły, poradniki i wskazówki, które pomogą Ci zadbać o zdrowie i korzystać z e-konsultacji.
          </p>
        </div>

        {/* Trust Features Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustFeatures.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-14 h-14 border-2 border-green-200 bg-green-50 text-[#138A56] rounded-full flex items-center justify-center mb-4">
                <feature.icon size={26} strokeWidth={1.5} />
              </div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">{feature.title}</h4>
              <p className="text-sm text-slate-500 max-w-[200px] leading-snug">{feature.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {knowledgeCards.map((card, index) => (
            <KnowledgeCard key={index} {...card} />
          ))}
        </div>

        {/* Bottom Search/Contact Banner */}
        <div className="mt-12 bg-[#F8FAF9] border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-center lg:text-left">
            <div className="hidden sm:flex w-12 h-12 flex-shrink-0 bg-white shadow-sm border border-slate-100 text-[#138A56] rounded-full items-center justify-center">
              <Search size={24} strokeWidth={2} />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">Nie znalazłeś odpowiedzi?</h4>
              <p className="text-sm sm:text-base text-slate-500">Skorzystaj z wyszukiwarki lub skontaktuj się z nami.</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <div className="relative w-full sm:w-[320px]">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search size={18} className="text-slate-400" />
              </div>
              <input 
                type="text" 
                placeholder="Wyszukaj artykuł, temat..." 
                className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#138A56]/20 focus:border-[#138A56] transition-all"
              />
            </div>
            <Link
              href="/baza-wiedzy"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0A4740] text-white px-6 py-3.5 rounded-xl font-medium hover:bg-[#083530] transition-colors whitespace-nowrap"
            >
              Przejdź do wyszukiwarki
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
