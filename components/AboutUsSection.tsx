"use client";

import { ArrowRight, Users, Award, Heart } from "lucide-react";

export default function AboutUsSection() {
  const stats = [
    { number: "50 000+", label: "konsultacji" },
    { number: "4.9/5", label: "średnia ocena" },
    { number: "98%", label: "zadowolonych" },
  ];

  return (
    <section id="o-nas" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image placeholder */}
          <div className="bg-gradient-to-br from-[#DAE9E6] to-slate-100 rounded-2xl h-96 flex items-center justify-center border-2 border-[#DAE9E6]">
            <div className="text-center">
              <Users className="w-20 h-20 text-[#064743] mx-auto mb-4 opacity-50" />
              <p className="text-slate-600">Nasz zespół</p>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              7. O NAS
            </h2>
            <p className="text-slate-600 text-lg mb-8">
              Jesteśmy zespołem pasjonatów, którzy wierzą, że dostęp do opieki medycznej powinien być łatwy i powszechny.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <Award className="w-6 h-6 text-[#064743] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900">Doświadczeni lekarze</h3>
                  <p className="text-slate-600 text-sm">Zespół licencjonowanych specjalistów</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Heart className="w-6 h-6 text-[#064743] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900">Pacjent na pierwszym planie</h3>
                  <p className="text-slate-600 text-sm">Każda konsultacja z pełną opieką</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center p-4 bg-[#DAE9E6] rounded-lg">
                  <div className="text-2xl font-bold text-slate-900">{stat.number}</div>
                  <p className="text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>

            <button className="bg-[#064743] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1A5D54] transition inline-flex items-center gap-2">
              Dowiedz się więcej
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
