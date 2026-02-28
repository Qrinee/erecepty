import { knowledgeCards } from "@/app/data/knowledgeCards";
import KnowledgeCard from "@/components/KnowledgeCard";
import { BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function KnowledgeCenter() {
  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-20" aria-labelledby="knowledge-center-title">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <BookOpen size={16} />
            WIEDZA I ZDROWIE
          </span>
          <h2 id="knowledge-center-title" className="text-3xl md:text-4xl font-bold text-slate-900">
            Centrum Bazy Wiedzy
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600 text-lg">
            Dowiedz się więcej o procesie e-konsultacji, bezpieczeństwie leków i
            przygotowaniu do wizyty online.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {knowledgeCards.map((card, index) => (
            <KnowledgeCard key={index} {...card} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/baza-wiedzy"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-600/25"
          >
            Zobacz więcej artykułów
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
