import { faqData } from "@/app/data/faqData";
import FAQItem from "./FAQItem";
import { HelpCircle, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FAQSection() {
  return (
    <section className="bg-white py-20" aria-labelledby="faq-section-title">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <HelpCircle size={16} />
            FAQ
          </span>
          <h2 id="faq-section-title" className="text-3xl font-bold text-slate-900">
            Często zadawane pytania
          </h2>
          <p className="mt-3 text-slate-600 text-lg">
            Znajdź szybkie odpowiedzi na najważniejsze pytania o nasze usługi.
          </p>
        </div>

        <div className="space-y-4" role="list">
          {faqData.map((item, index) => (
            <FAQItem key={index} {...item} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border-2 border-[#DAE9E6] bg-gradient-to-br from-[#DAE9E6] to-purple-50 px-8 py-8 sm:flex-row">
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
              <MessageCircle className="text-[#064743]" size={20} />
              <p className="font-bold text-slate-900 text-lg">
                Nadal potrzebujesz pomocy?
              </p>
            </div>
            <p className="text-slate-600">
              Nasi konsultanci są dostępni na czacie 24/7.
            </p>
          </div>

          <Link 
            href="/jak-to-dziala"
            className="cursor-pointer rounded-xl bg-[#064743] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1A5D54] focus:outline-none focus:ring-2 focus:ring-[#064743]/30 focus:ring-offset-2 shadow-lg shadow-[#064743]/25 inline-flex items-center gap-2"
            aria-label="Skontaktuj się z nami"
          >
            Skontaktuj się z nami
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
