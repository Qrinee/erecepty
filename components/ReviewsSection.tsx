"use client";

import { Star, ArrowRight, User } from "lucide-react";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Anna K.",
      initials: "AK",
      role: "Pacjentka",
      text: "Szybko, bezpiecznie i wygodnie. Polecam!",
      rating: 5,
      color: "from-pink-400 to-rose-500",
    },
    {
      name: "Piotr M.",
      initials: "PM",
      role: "Pacjent",
      text: "Świetna obsługa, profesjonalni lekarze",
      rating: 5,
      color: "from-[#1A5D54] to-[#DAE9E6]",
    },
    {
      name: "Maria Z.",
      initials: "MZ",
      role: "Pacjentka",
      text: "Najlepsze rozwiązanie dla zapracowanych ludzi",
      rating: 5,
      color: "from-emerald-400 to-teal-500",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            8. OPINIE
          </h2>
          <p className="text-slate-600 text-lg">Co mówią nasi pacjenci?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 border border-slate-200 hover:shadow-lg transition group"
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center shadow-sm flex-shrink-0`}
                >
                  <span className="text-white font-semibold text-sm">
                    {review.initials}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{review.name}</h3>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-slate-600 italic leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Rating Summary */}
        <div className="max-w-lg mx-auto bg-white rounded-xl p-8 border border-slate-200 text-center shadow-sm">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="text-4xl font-extrabold text-slate-900">4.9 / 5</div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
          <p className="text-slate-500 text-sm">na podstawie 2000+ opinii</p>
        </div>
      </div>
    </section>
  );
}
