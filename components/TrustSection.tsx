import {
  ShieldCheck,
  UserCheck,
  Zap,
  FileCheck,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import TrustItem from "./TrustItem";

export default function TrustSection() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-[#DAE9E6] py-20" aria-labelledby="trust-section-title">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <span className="inline-flex items-center gap-2 bg-[#DAE9E6] text-[#064743] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <ShieldCheck size={16} aria-hidden="true" />
            Gwarancja bezpieczeństwa
          </span>

          <h2 id="trust-section-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Dlaczego warto nam zaufać?
          </h2>

          <p className="text-slate-600 max-w-md text-lg mb-6">
            Nasza platforma została stworzona z myślą o najwyższych
            standardach etyki lekarskiej oraz bezpieczeństwa cyfrowego.
            Działamy w pełni transparentnie i zgodnie z polskim prawem.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-200">
              <UserCheck className="text-[#064743]" size={18} />
              <span className="text-sm font-medium text-slate-700">Lekarze z PWZ</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-200">
              <ShieldCheck className="text-green-600" size={18} />
              <span className="text-sm font-medium text-slate-700">RODO</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-200">
              <Zap className="text-yellow-500" size={18} />
              <span className="text-sm font-medium text-slate-700">Szybko</span>
            </div>
          </div>

          <Link
            href="/jak-to-dziala"
            className="inline-flex items-center gap-2 mt-6 bg-[#064743] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1A5D54] transition shadow-lg shadow-[#064743]/25"
          >
            Dowiedz się więcej o procesie
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <TrustItem
            icon={UserCheck}
            title="Weryfikowani lekarze"
            description="Konsultacje prowadzą wyłącznie dyplomowani lekarze z aktywnym numerem PWZ, zweryfikowanym w NIL."
          />

          <TrustItem
            icon={ShieldCheck}
            title="Ochrona danych RODO"
            description="Twoja dokumentacja medyczna jest w pełni zaszyfrowana i chroniona zgodnie z europejskimi standardami."
          />

          <TrustItem
            icon={Zap}
            title="Realizacja w 15 minut"
            description="Dzięki automatyzacji i szybkiej analizie e-receptę możesz otrzymać nawet w kwadrans."
          />

          <TrustItem
            icon={FileCheck}
            title="Zgodność z przepisami"
            description="Wszystkie dokumenty są honorowane przez polskie apteki i zintegrowane z systemem IKP."
          />
        </div>
      </div>
    </section>
  );
}
