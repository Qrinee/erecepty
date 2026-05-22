import {
  Users,
  Star,
  Clock,
  Globe,
  Zap,
  ArrowRight,
  Lock,
  ShieldCheck,
  Headphones,
  MessageSquarePlus
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ForWhoSection() {
  const cards = [
    {
      id: 1,
      badge: {
        text: "Najczęściej wybierane",
        icon: Star,
        className: "bg-[#064743]/10 text-[#064743]",
      },
      image: "/for_who_1.png",
      title: "Kontynuacja leczenia",
      description: "Przedłuż receptę lub skonsultuj dalsze leczenie bez wizyty w przychodni.",
    },
    {
      id: 2,
      badge: {
        text: "24/7",
        icon: Clock,
        className: "bg-[#064743]/10 text-[#064743]",
      },
      image: "/for_who_2.png",
      title: "Brak czasu na wizytę",
      description: "Idealne rozwiązanie dla osób zapracowanych i rodziców.",
    },
    {
      id: 3,
      badge: {
        text: "Online",
        icon: Globe,
        className: "bg-[#064743]/10 text-[#064743]",
      },
      image: "/for_who_3.png",
      title: "W podróży lub za granicą",
      description: "Skorzystaj z pomocy lekarza z dowolnego miejsca.",
    },
    {
      id: 4,
      badge: {
        text: "Szybka pomoc",
        icon: Zap,
        className: "bg-rose-50 text-rose-600",
      },
      image: "/for_who_4.png",
      title: "Nagła potrzeba konsultacji",
      description: "Szybka pomoc medyczna nawet tego samego dnia.",
    },
  ];

  const trustItems = [
    {
      icon: Lock,
      title: "Bezpieczne i legalne konsultacje",
      desc: "Zgodnie z obowiązującymi przepisami",
    },
    {
      icon: ShieldCheck,
      title: "Twoje dane są chronione",
      desc: "Dbamy o pełne bezpieczeństwo",
    },
    {
      icon: Headphones,
      title: "Wsparcie pacjenta 7 dni w tygodniu",
      desc: "Jesteśmy dostępni, gdy nas potrzebujesz",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-20 px-6 relative overflow-hidden" aria-labelledby="for-who-title">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-5 opacity-10 pointer-events-none hidden xl:block">
        <Image src="/recipe_3d.png" alt="" width={140} height={140} className="object-contain rotate-12" />
      </div>
      <div className="absolute bottom-1/4 right-5 opacity-10 pointer-events-none hidden xl:block">
        <Image src="/continuation_3d.png" alt="" width={140} height={140} className="object-contain -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-[#DAE9E6]/60 text-[#064743] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <Users size={16} />
            Dla kogo jest nasza platforma?
          </span>
          <h2 id="for-who-title" className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Kiedy warto skorzystać <br className="hidden md:inline" />
            <span className="text-[#064743]">z konsultacji online?</span>
          </h2>
          <p className="mt-4 text-slate-600 text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
            Szybka pomoc medyczna bez kolejek i bez wychodzenia z domu — dokładnie wtedy, kiedy jej potrzebujesz.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {cards.map((card) => {
            const Icon = card.badge.icon;
            return (
              <div 
                key={card.id} 
                className="bg-white rounded-3xl border border-slate-100 p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-slate-200 hover:-translate-y-1 transition-all duration-300 group relative"
              >
                <div>
                  {/* Badge */}
                  <div className="flex justify-start mb-6">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${card.badge.className}`}>
                      <Icon size={12} className="fill-current opacity-90" />
                      {card.badge.text}
                    </span>
                  </div>

                  {/* 3D Illustration Container */}
                  <div className="h-44 flex items-center justify-center mb-6 relative">
                    <Image 
                      src={card.image} 
                      alt={card.title} 
                      width={160} 
                      height={160} 
                      className="object-contain max-h-full group-hover:scale-105 transition-transform duration-500 ease-out" 
                      priority={card.id === 1}
                    />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#064743] transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Round Arrow Button */}
                <div className="mt-auto pt-2">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 text-[#064743] group-hover:bg-[#064743] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center justify-center mb-16">
          <Link
            href="/wypelnij-formularz"
            className="inline-flex items-center gap-3 bg-[#064743] hover:bg-[#1A5D54] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:shadow-[#064743]/20 -translate-y-0.5 hover:-translate-y-1 transition-all duration-300 group"
          >
            <MessageSquarePlus size={22} className="opacity-90" />
            <span>Rozpocznij konsultację</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Bottom Trust Bar */}
        <div className="border-t border-slate-100 pt-10">
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {trustItems.map((item, idx) => {
              const TrustIcon = item.icon;
              return (
                <div key={idx} className="flex items-start gap-4 px-4 py-2">
                  <div className="w-10 h-10 rounded-xl bg-[#DAE9E6]/40 text-[#064743] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <TrustIcon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm md:text-base leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
