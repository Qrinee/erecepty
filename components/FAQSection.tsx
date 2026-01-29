import { faqData } from "@/app/data/faqData";
import FAQItem from "./FAQItem";



export default function FAQSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Często zadawane pytania
          </h2>
          <p className="mt-3 text-slate-500">
            Znajdź szybkie odpowiedzi na najważniejsze pytania o nasze usługi.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FAQItem key={index} {...item} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-blue-100 bg-blue-50 px-8 py-6 sm:flex-row">
          <div>
            <p className="font-semibold text-slate-900">
              Nadal potrzebujesz pomocy?
            </p>
            <p className="text-sm text-slate-500">
              Nasi konsultanci są dostępni na czacie 24/7.
            </p>
          </div>

          <button className="cursor-pointer rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
            Skontaktuj się z nami
          </button>
        </div>
      </div>
    </section>
  );
}
