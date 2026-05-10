import Footer from "@/components/Footer";
import Header from "@/components/Header";
import KnowledgeCard from "@/components/KnowledgeCard";
import { knowledgeCards } from "@/app/data/knowledgeCards";
import { BookOpen, Search, Filter } from "lucide-react";

export const metadata = {
  title: "Baza wiedzy - Platforma",
  description: "Przeczytaj artykuły o konsultacjach zdrowotnych, telekonsultacjach lekarskich i zdrowiu. Poznaj porady ekspertów i najnowsze informacje.",
};

const categories = [
  { id: "all", label: "Wszystkie" },
  { id: "PORADNIK", label: "Poradniki" },
  { id: "KOMPENDIUM", label: "Kompendium" },
  { id: "BEZPIECZEŃSTWO", label: "Bezpieczeństwo" },
];

export default function BazaWiedzyPage() {
  const allArticles = knowledgeCards;

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-32 pb-16 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-30 blur-2xl" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-200 rounded-full opacity-30 blur-3xl" />
          
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                <BookOpen size={16} />
                BAZA WIEDZY
              </span>
              
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Wiedza o{" "}
                <span className="text-blue-600">zdrowiu i konsultacjach</span>
              </h1>
              
              <p className="text-lg text-slate-600 mb-8">
                Poznaj porady ekspertów, najnowsze informacje i odpowiedzi na najczęściej zadawane pytania dotyczące 
                konsultacji zdrowotnych, telekonsultacji i zdrowia.
              </p>

              {/* Search Bar */}
              <div className="max-w-xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="text"
                    placeholder="Szukaj artykułów..."
                    className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-slate-200 focus:border-blue-500 focus:outline-none shadow-sm text-slate-900 placeholder:text-slate-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Articles Grid */}
        <section className="py-16 bg-gradient-to-br from-white to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
      
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {allArticles.map((card, index) => (
                <KnowledgeCard key={index} {...card} />
              ))}
            </div>

            {/* Empty state if no articles */}
            {allArticles.length === 0 && (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-slate-400" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Brak artykułów
                </h3>
                <p className="text-slate-600">
                  Nie znaleziono artykułów w wybranej kategorii.
                </p>
              </div>
            )}
          </div>
        </section>


      </main>
      <Footer />
    </>
  );
}
