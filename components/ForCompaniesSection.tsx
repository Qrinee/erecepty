"use client";

import { 
  ArrowRight, Building2, Users, TrendingUp, BriefcaseMedical, 
  ShieldCheck, Clock, Stethoscope, Zap, Star, Heart 
} from "lucide-react";

export default function ForCompaniesSection() {
  return (
    <section id="dla-firm" className="py-20 bg-white scroll-mt-20 max-w-[80vw] m-auto">
      <div className="w-full px-4 sm:px-8 xl:px-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Heading and Features list */}
          <div>
            <div className="flex flex-col mb-6">
              <div className="flex items-center gap-3">
                <div className="w-20 h-20 rounded-xl bg-[#E8F3F1] border border-[#D5EAE6] text-[#147A60] flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-10 h-10" />
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-wider">Dla Firm</h2>
              </div>
              <div className="w-12 h-1 bg-[#147A60] mt-3 rounded-full"></div>
            </div>

            <p className="text-slate-850 text-xl md:text-2xl font-extrabold mb-8 max-w-xl leading-relaxed">
              Oferujemy rozwiązania dla pracodawców, którzy dbają o zdrowie swoich pracowników.
            </p>

            <div className="space-y-6">
              
              {/* Feature 1 */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-[#E8F3F1] border border-[#D5EAE6] text-[#147A60] flex items-center justify-center flex-shrink-0">
                  <BriefcaseMedical className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-800 text-lg mb-1">Dla Twojej firmy</h3>
                  <p className="text-slate-500 text-sm sm:text-base font-semibold leading-relaxed max-w-md">
                    Kompleksowa opieka medyczna dla całego zespołu i wsparcie w zarządzaniu zdrowiem pracowników.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-[#E8F3F1] border border-[#D5EAE6] text-[#147A60] flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-800 text-lg mb-1">Elastyczne pakiety</h3>
                  <p className="text-slate-500 text-sm sm:text-base font-semibold leading-relaxed max-w-md">
                    Pakiety dopasowane do wielkości i potrzeb Twojej firmy. Płać tylko za to, czego potrzebujesz.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-[#E8F3F1] border border-[#D5EAE6] text-[#147A60] flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-800 text-lg mb-1">Wzrost produktywności</h3>
                  <p className="text-slate-500 text-sm sm:text-base font-semibold leading-relaxed max-w-md">
                    Zdrowi pracownicy to mniej absencji, więcej energii i lepsze wyniki Twojej firmy.
                  </p>
                </div>
              </div>

            </div>

            <button className="mt-8 bg-[#147A60] hover:bg-[#064743] text-white px-7 py-4 rounded-xl font-extrabold flex items-center justify-center gap-2 cursor-pointer text-sm md:text-base shadow-md shadow-emerald-800/10 transition-colors">
              <span>Dowiedz się więcej</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: Office photo card and metrics */}
          <div className="bg-[#EFF6F4]/50 border border-[#D5EAE6]/30 rounded-[32px] p-6 flex flex-col justify-between shadow-sm relative">
            
            {/* Photo Wrapper */}
            <div className="relative w-full h-[320px] rounded-2xl overflow-hidden shadow-sm">
              <img 
                src="/for_companies_office.png" 
                alt="Współpraca biznesowa" 
                className="w-full h-full object-cover"
              />
              
              {/* Floating Badge */}
              <div className="absolute top-4 left-4 bg-white/95 rounded-[20px] p-4 shadow-md max-w-[200px] border border-slate-100/50 backdrop-blur-sm z-10 flex gap-2.5 items-start">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>

              </div>
            </div>

            {/* Bottom 4-column metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-5 border-t border-[#D5EAE6]/50 mt-5">
              
              {/* Col 1 */}
              <div className="flex gap-2.5 items-center">
                <div className="w-8 h-8 rounded-full bg-[#E8F3F1] text-[#147A60] flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-xs font-extrabold text-slate-800">Opieka medyczna</div>
                  <div className="text-[10px] md:text-xs text-slate-400 font-bold">dla całego zespołu</div>
                </div>
              </div>

              {/* Col 2 */}
              <div className="flex gap-2.5 items-center">
                <div className="w-8 h-8 rounded-full bg-[#E8F3F1] text-[#147A60] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-xs font-extrabold text-slate-800">Konsultacje online</div>
                  <div className="text-[10px] md:text-xs text-slate-400 font-bold">24/7</div>
                </div>
              </div>

              {/* Col 3 */}
              <div className="flex gap-2.5 items-center">
                <div className="w-8 h-8 rounded-full bg-[#E8F3F1] text-[#147A60] flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-4 h-4" />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-xs font-extrabold text-slate-800">Wsparcie specjalistów</div>
                  <div className="text-[10px] md:text-xs text-slate-400 font-bold">w wielu dziedzinach</div>
                </div>
              </div>

              {/* Col 4 */}
              <div className="flex gap-2.5 items-center">
                <div className="w-8 h-8 rounded-full bg-[#E8F3F1] text-[#147A60] flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-xs font-extrabold text-slate-800">Szybka realizacja</div>
                  <div className="text-[10px] md:text-xs text-slate-400 font-bold">i prosta obsługa</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Trust/Stats panel */}
        <div className="bg-white rounded-[28px] border border-slate-100 shadow-[0_15px_45px_rgba(0,0,0,0.015)] p-6 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          
          {/* Metric 1 */}
          <div className="flex items-center gap-4 px-4 pt-4 first:pt-0 sm:pt-0 lg:pt-0">
            <div className="w-11 h-11 rounded-full bg-[#E8F3F1] border border-[#D5EAE6] text-[#147A60] flex items-center justify-center flex-shrink-0 shadow-sm">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-slate-800 leading-none">500+</div>
              <div className="text-sm md:text-base font-extrabold text-slate-800 mt-1">firm nam zaufało</div>
              <div className="text-xs md:text-[13px] text-slate-400 font-semibold mt-0.5 leading-tight">Dołącz do grona zadowolonych pracodawców</div>
            </div>
          </div>

          {/* Metric 2 */}
          <div className="flex items-center gap-4 px-4 pt-4 lg:pt-0">
            <div className="w-11 h-11 rounded-full bg-[#E8F3F1] border border-[#D5EAE6] text-[#147A60] flex items-center justify-center flex-shrink-0 shadow-sm">
              <Star className="w-5 h-5 fill-[#147A60] text-[#147A60]" />
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-slate-800 leading-none">50 000+</div>
              <div className="text-sm md:text-base font-extrabold text-slate-800 mt-1">konsultacji</div>
              <div className="text-xs md:text-[13px] text-slate-400 font-semibold mt-0.5 leading-tight">Zrealizowanych dla pracowników naszych partnerów</div>
            </div>
          </div>

          {/* Metric 3 */}
          <div className="flex items-center gap-4 px-4 pt-4 lg:pt-0">
            <div className="w-11 h-11 rounded-full bg-[#E8F3F1] border border-[#D5EAE6] text-[#147A60] flex items-center justify-center flex-shrink-0 shadow-sm">
              <Heart className="w-5 h-5 fill-[#147A60] text-[#147A60]" />
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-slate-800 leading-none">98%</div>
              <div className="text-sm md:text-base font-extrabold text-slate-800 mt-1">zadowolonych pracowników</div>
              <div className="text-xs md:text-[13px] text-slate-400 font-semibold mt-0.5 leading-tight">Lepsze samopoczucie i większe zaangażowanie w pracy</div>
            </div>
          </div>

          {/* Metric 4 */}
          <div className="flex items-center gap-4 px-4 pt-4 lg:pt-0">
            <div className="w-11 h-11 rounded-full bg-[#E8F3F1] border border-[#D5EAE6] text-[#147A60] flex items-center justify-center flex-shrink-0 shadow-sm">
              <ShieldCheck className="w-5 h-5 fill-[#147A60] text-white" />
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-slate-800 leading-none">100%</div>
              <div className="text-sm md:text-base font-extrabold text-slate-800 mt-1">bezpieczne i zgodne z RODO</div>
              <div className="text-xs md:text-[13px] text-slate-400 font-semibold mt-0.5 leading-tight">Gwarantujemy pełne bezpieczeństwo danych</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}