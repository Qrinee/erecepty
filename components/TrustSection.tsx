import {
  ShieldCheck,
  UserCheck,
  Zap,
  FileCheck
} from "lucide-react";
import TrustItem from "./TrustItem";

export default function TrustSection() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            <ShieldCheck size={16} />
            Gwarancja bezpieczeństwa
          </span>

          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Dlaczego warto nam zaufać?
          </h2>

          <p className="text-slate-600 max-w-md">
            Nasza platforma została stworzona z myślą o najwyższych
            standardach etyki lekarskiej oraz bezpieczeństwa cyfrowego.
            Działamy w pełni transparentnie i zgodnie z polskim prawem.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 mt-6 text-blue-600 font-medium hover:underline"
          >
            Dowiedz się więcej o procesie →
          </a>
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
