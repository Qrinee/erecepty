import { knowledgeCards } from "@/app/data/knowledgeCards";
import KnowledgeCard from "@/components/KnowledgeCard";


export default function KnowledgeCenter() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold tracking-wide text-blue-600">
            WIEDZA I ZDROWIE
          </p>
          <h1 className="text-4xl font-bold text-slate-900">
            Centrum Bazy Wiedzy
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Dowiedz się więcej o procesie e-konsultacji, bezpieczeństwie leków i
            przygotowaniu do wizyty online.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {knowledgeCards.map((card, index) => (
            <KnowledgeCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
