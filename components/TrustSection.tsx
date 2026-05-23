import {
  ShieldCheck,
  UserCheck,
  Zap,
  FileCheck,
  ArrowRight,
  Users,
  Star,
  Shield,
  Clock
} from "lucide-react";
import Link from "next/link";

export default function TrustSection() {
  return (
    <section className="bg-white py-20" aria-labelledby="trust-section-title">
      <div className="w-[95vw] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F8FAF9]  rounded-[40px] p-8 md:p-12 relative">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 bg-[#E8F3EE] text-[#138A56] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-green-100">
                <ShieldCheck size={16} aria-hidden="true" />
                Gwarancja bezpieczeństwa
              </span>

              <h2 id="trust-section-title" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Dlaczego warto <br /> <span className="text-[#138A56]">nam zaufać?</span>
              </h2>

              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Nasza platforma została stworzona z myślą o najwyższych
                standardach etyki lekarskiej oraz bezpieczeństwa cyfrowego.
                Działamy w pełni transparentnie i zgodnie z polskim prawem.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-100 shadow-sm">
                  <UserCheck className="text-[#138A56]" size={18} />
                  <span className="text-sm font-medium text-slate-700">Lekarze z PWZ</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-100 shadow-sm">
                  <ShieldCheck className="text-[#138A56]" size={18} />
                  <span className="text-sm font-medium text-slate-700">RODO</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-slate-100 shadow-sm">
                  <Zap className="text-[#138A56]" size={18} />
                  <span className="text-sm font-medium text-slate-700">Szybko</span>
                </div>
              </div>

              <Link
                href="/dlaczego-warto-nam-zaufac"
                className="inline-flex items-center gap-2 bg-[#138A56] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#083530] transition shadow-md whitespace-nowrap"
              >
                Dowiedz się więcej o procesie
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 relative z-10">
              {/* Trust Items Grid */}
              <div className="bg-white rounded-[24px] p-6 shadow-sm border border-slate-50 flex flex-col justify-between">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#F5F8F7] flex items-center justify-center flex-shrink-0 relative">
                    <UserCheck className="text-slate-700" size={24} strokeWidth={1.5} />
                    <div className="absolute -bottom-1 -right-1 bg-[#138A56] rounded-full p-0.5 border-2 border-white">
                      <ShieldCheck size={10} className="text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <h3 className="font-bold text-slate-900 leading-tight">Weryfikowani lekarze</h3>
                </div>
                <div className="w-6 h-px bg-slate-200 mb-4"></div>
                <p className="text-sm sm:text-[15px] text-slate-500 leading-relaxed">
                  Konsultacje prowadzą wyłącznie dyplomowani lekarze z aktywnym numerem PWZ, zweryfikowanym w NIL.
                </p>
              </div>

              <div className="bg-white rounded-[24px] p-6 shadow-sm border border-slate-50 flex flex-col justify-between">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#F5F8F7] flex items-center justify-center flex-shrink-0 relative">
                    <Shield className="text-slate-700" size={24} strokeWidth={1.5} />
                    <div className="absolute -bottom-1 -right-1 bg-[#138A56] rounded-full p-0.5 border-2 border-white">
                      <ShieldCheck size={10} className="text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <h3 className="font-bold text-slate-900 leading-tight">Ochrona danych RODO</h3>
                </div>
                <div className="w-6 h-px bg-slate-200 mb-4"></div>
                <p className="text-sm sm:text-[15px] text-slate-500 leading-relaxed">
                  Twoja dokumentacja medyczna jest w pełni zaszyfrowana i chroniona zgodnie z europejskimi standardami.
                </p>
              </div>

              <div className="bg-white rounded-[24px] p-6 shadow-sm border border-slate-50 flex flex-col justify-between">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#F5F8F7] flex items-center justify-center flex-shrink-0 relative">
                    <Clock className="text-slate-700" size={24} strokeWidth={1.5} />
                    <div className="absolute -bottom-1 -right-1 bg-[#138A56] rounded-full p-0.5 border-2 border-white">
                      <ShieldCheck size={10} className="text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <h3 className="font-bold text-slate-900 leading-tight">Realizacja w 15 minut</h3>
                </div>
                <div className="w-6 h-px bg-slate-200 mb-4"></div>
                <p className="text-sm sm:text-[15px] text-slate-500 leading-relaxed">
                  Dzięki automatyzacji i szybkiej analizie e-receptę możesz otrzymać nawet w kwadrans.
                </p>
              </div>

              <div className="bg-white rounded-[24px] p-6 shadow-sm border border-slate-50 flex flex-col justify-between">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#F5F8F7] flex items-center justify-center flex-shrink-0 relative">
                    <FileCheck className="text-slate-700" size={24} strokeWidth={1.5} />
                    <div className="absolute -bottom-1 -right-1 bg-[#138A56] rounded-full p-0.5 border-2 border-white">
                      <ShieldCheck size={10} className="text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <h3 className="font-bold text-slate-900 leading-tight">Zgodność z przepisami</h3>
                </div>
                <div className="w-6 h-px bg-slate-200 mb-4"></div>
                <p className="text-sm sm:text-[15px] text-slate-500 leading-relaxed">
                  Wszystkie dokumenty są honorowane przez polskie apteki i zintegrowane z systemem IKP.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="bg-white rounded-[24px] p-6 lg:px-10 lg:py-8 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm border border-slate-50 relative z-10 mx-auto w-full max-w-[95%]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E8F3EE] flex items-center justify-center flex-shrink-0 text-[#138A56]">
                <Users size={24} />
              </div>
              <div>
                <div className="font-bold text-xl text-[#138A56]">50 000+</div>
                <div className="text-sm text-slate-600">zadowolonych pacjentów</div>
              </div>
            </div>

            <div className="hidden lg:block w-px h-12 bg-slate-100"></div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E8F3EE] flex items-center justify-center flex-shrink-0 text-[#138A56]">
                <Star size={24} />
              </div>
              <div>
                <div className="font-bold text-xl text-[#138A56] flex items-center gap-2">
                  4.9/5
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#FACC15] text-[#FACC15]" />
                    ))}
                  </div>
                </div>
                <div className="text-sm text-slate-600">na podstawie 2000+ opinii</div>
              </div>
            </div>

            <div className="hidden lg:block w-px h-12 bg-slate-100"></div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E8F3EE] flex items-center justify-center flex-shrink-0 text-[#138A56]">
                <ShieldCheck size={24} />
              </div>
              <div>
                <div className="font-bold text-[15px] text-[#138A56] leading-tight max-w-[150px]">Bezpieczne i legalne</div>
                <div className="text-sm text-slate-600">konsultacje online</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
