"use client";

import { ArrowRight, Building2, Users, TrendingUp } from "lucide-react";

export default function ForCompaniesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              9. DLA FIRM
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Oferujemy rozwiązania dla pracodawców, którzy dbają o zdrowie swoich pracowników
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Building2 className="w-8 h-8 text-[#064743] flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Dla Twojej firmy</h3>
                  <p className="text-slate-600">Opiekę medyczną dla całego zespołu</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Users className="w-8 h-8 text-[#064743] flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Elastyczne pakiety</h3>
                  <p className="text-slate-600">Dopasowane do wielkości Twojej firmy</p>
                </div>
              </div>
              <div className="flex gap-4">
                <TrendingUp className="w-8 h-8 text-[#064743] flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Wzrost produktywności</h3>
                  <p className="text-slate-600">Mniej absencji, więcej efektywności</p>
                </div>
              </div>
            </div>

            <button className="mt-8 bg-[#064743] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1A5D54] transition inline-flex items-center gap-2">
              Dowiedz się więcej
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right side - Image placeholder */}
          <div className="bg-gradient-to-br from-[#DAE9E6] to-slate-100 rounded-2xl h-96 flex items-center justify-center border-2 border-[#DAE9E6]">
            <div className="text-center">
              <Building2 className="w-20 h-20 text-[#064743] mx-auto mb-4 opacity-50" />
              <p className="text-slate-600">Dla firm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}