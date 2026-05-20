"use client";

import { 
  Star, MapPin, Clock, UserCheck, Users, FileText, 
  ShieldCheck, Lock, CheckCircle, Quote 
} from "lucide-react";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Anna K.",
      initials: "AK",
      location: "Warszawa",
      text: "Bardzo szybka konsultacja i profesjonalne podejście lekarza. Receptę otrzymałam w kilkanaście minut bez wychodzenia z domu.",
      rating: 5,
    },
    {
      name: "Piotr N.",
      initials: "PN",
      location: "Kraków",
      text: "Świetna opcja dla osób zapracowanych. Wszystko przebiegło sprawnie, a lekarz dokładnie wyjaśnił dalsze leczenie.",
      rating: 5,
    },
    {
      name: "Maria Z.",
      initials: "MZ",
      location: "Wrocław",
      text: "Korzystałam z konsultacji online pierwszy raz i jestem bardzo pozytywnie zaskoczona. Szybko, wygodnie i bez stresu.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden" aria-labelledby="reviews-section-title">
      
      {/* Decorative Potted Plant (Left - Desktop Only) */}
      <div className="absolute left-4 top-[35%] -translate-y-1/2 hidden xl:block w-36 h-48 select-none pointer-events-none z-0">
        <div className="absolute top-2 left-6 bg-[#064743] text-white p-2.5 rounded-2xl shadow-md rounded-bl-none animate-bounce flex items-center justify-center">
          <svg className="w-4 h-4 fill-white text-white" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
        <svg className="w-full h-full pt-12" viewBox="0 0 120 120" fill="none">
          <path d="M60 40C60 40 40 20 30 30C20 40 45 55 60 55" fill="#147A60" opacity="0.85" />
          <path d="M60 40C60 40 80 20 90 30C100 40 75 55 60 55" fill="#147A60" opacity="0.85" />
          <path d="M60 50C60 50 45 35 35 45C25 55 50 65 60 65" fill="#0E5E49" />
          <path d="M60 50C60 50 75 35 85 45C95 55 70 65 60 65" fill="#0E5E49" />
          <path d="M60 30C60 30 50 10 42 18C34 26 52 42 60 42" fill="#1B9A7A" />
          <path d="M60 30C60 30 70 10 78 18C86 26 68 42 60 42" fill="#1B9A7A" />
          <path d="M45 75 H75 L70 105 H50 L45 75Z" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="2" />
          <ellipse cx="60" cy="75" rx="15" ry="3" fill="#E5E7EB" />
        </svg>
      </div>

      {/* Decorative Smartphone (Right - Desktop Only) */}
      <div className="absolute right-4 top-[35%] -translate-y-1/2 hidden xl:block w-44 h-56 select-none pointer-events-none z-0">
        <div className="absolute left-4 bottom-4 w-[96px] h-[160px] border-[5px] border-slate-700 rounded-[22px] bg-white shadow-xl flex flex-col p-2 relative overflow-hidden">
          <div className="w-10 h-3 bg-slate-700 rounded-b-md mx-auto -mt-2.5 mb-2" />
          <div className="space-y-1.5 w-full flex flex-col items-start mt-1">
            <div className="h-2 w-10 bg-slate-100 rounded-sm" />
            <div className="h-2 w-14 bg-slate-100 rounded-sm self-end" />
            <div className="flex gap-0.5 my-1 justify-center w-full">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
              ))}
            </div>
            <div className="h-2.5 w-12 bg-[#EFF6F4] border border-[#D5EAE6] rounded-sm mx-auto" />
          </div>
        </div>
        <div className="absolute top-10 right-2 bg-[#064743] text-white p-2.5 rounded-2xl shadow-md rounded-br-none animate-bounce flex items-center justify-center z-10">
          <svg className="w-4 h-4 fill-white text-white" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
        <div className="absolute left-0 top-16 bg-white border border-slate-100 p-1.5 rounded-xl shadow-lg flex gap-0.5 z-10 scale-90">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          ))}
        </div>
        <svg className="absolute right-0 bottom-4 w-12 h-16" viewBox="0 0 50 70" fill="none">
          <path d="M25 20C25 20 15 10 10 15C5 20 18 30 25 30" fill="#147A60" />
          <path d="M25 20C25 20 35 10 40 15C45 20 32 30 25 30" fill="#147A60" />
          <path d="M18 40 H32 L30 58 H20 L18 40Z" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Headings */}
        <div className="text-center mb-10">
          <h2 id="reviews-section-title" className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Pacjenci polecają nasze konsultacje online
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Sprawdź opinie osób, które skorzystały z naszych usług
          </p>
        </div>

        {/* Top Stats Badge Card */}
        <div className="max-w-6xl mx-auto bg-white border border-slate-100 rounded-[32px] p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.02)] mb-12 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 md:divide-x">
            {/* Col 1: Star Rating */}
            <div className="flex flex-col items-center text-center px-4 pb-6 sm:pb-0">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                <span className="text-3xl font-extrabold text-slate-900">4.9 / 5</span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed max-w-[220px]">
                Na podstawie <span className="text-[#147A60] font-bold">ponad 2000</span> zweryfikowanych opinii pacjentów
              </p>
            </div>
            
            {/* Col 2: Consultation time */}
            <div className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0">
              <div className="w-10 h-10 rounded-full border border-[#D5EAE6] bg-[#E8F3F1] flex items-center justify-center text-[#064743] mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <div className="font-extrabold text-slate-800 text-sm">Konsultacje</div>
              <div className="text-[#147A60] text-xs font-bold mt-1">nawet w 15 minut</div>
            </div>

            {/* Col 3: Verified specialists */}
            <div className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0">
              <div className="w-10 h-10 rounded-full border border-[#D5EAE6] bg-[#E8F3F1] flex items-center justify-center text-[#064743] mb-3">
                <UserCheck className="w-5 h-5" />
              </div>
              <div className="font-extrabold text-slate-800 text-sm">Zweryfikowani</div>
              <div className="text-slate-500 text-xs font-semibold mt-1">lekarze specjaliści</div>
            </div>

            {/* Col 4: No queues */}
            <div className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0">
              <div className="w-10 h-10 rounded-full border border-[#D5EAE6] bg-[#E8F3F1] flex items-center justify-center text-[#064743] mb-3">
                <Users className="w-5 h-5" />
              </div>
              <div className="font-extrabold text-slate-800 text-sm">Bez kolejek</div>
              <div className="text-slate-500 text-xs font-semibold mt-1">i bez wychodzenia z domu</div>
            </div>
          </div>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[28px] p-7 border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.015)] relative flex flex-col justify-between hover:shadow-md transition-shadow group overflow-hidden"
            >
              {/* Giant background quotation mark */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#064743]/5 rotate-180 pointer-events-none" />

              <div>
                {/* Header: Avatar, Name, Location, Rating, Verification Badge */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full bg-[#E8F3F1] flex items-center justify-center text-[#064743] font-bold text-lg flex-shrink-0 shadow-sm">
                    {review.initials}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-extrabold text-slate-800 text-base leading-none mb-1">{review.name}</h3>
                    <div className="flex items-center gap-1 text-[11px] text-slate-500 font-bold mb-1">
                      <MapPin className="w-3 h-3 text-[#147A60] strokeWidth={3.5}" />
                      <span>{review.location}</span>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    {/* Verification badge */}
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#EAF5F2] text-[10px] font-bold text-[#147A60] mt-2.5 self-start">
                      <CheckCircle className="w-3 h-3 fill-[#147A60] text-white" />
                      Zweryfikowana opinia
                    </span>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Banner inside Section */}
        <div className="max-w-6xl mx-auto bg-[#EAF3F0] rounded-[28px] p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Column (Stats/Title) */}
            <div className="lg:col-span-5 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#064743] shadow-sm flex-shrink-0">
                <Users className="w-7 h-7" />
              </div>
              <div>
                <div className="text-slate-600 text-xs font-bold uppercase tracking-wider">Zaufało nam już</div>
                <div className="text-[#064743] text-xl sm:text-2xl font-extrabold leading-none mt-1">
                  ponad 50 000 pacjentów
                </div>
                <div className="text-slate-500 text-[11px] font-semibold mt-1">Dziękujemy, że jesteście z nami!</div>
              </div>
            </div>

            {/* Right Column (4 Guarantees grid) */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-6 border-t lg:border-t-0 lg:border-l border-[#D5EAE6] pt-6 lg:pt-0 lg:pl-8">
              {[
                { icon: Clock, title: "Konsultacje", desc: "online 24/7" },
                { icon: FileText, title: "E-recepty", desc: "i L4 online" },
                { icon: UserCheck, title: "Zweryfikowani", desc: "lekarze" },
                { icon: ShieldCheck, title: "Bezpieczne płatności", desc: "i dane pacjentów" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-start">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#064743] shadow-sm mb-2.5 flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="font-extrabold text-slate-800 text-xs sm:text-sm leading-snug">{item.title}</div>
                    <div className="text-xs text-slate-500 mt-0.5 leading-snug">{item.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

