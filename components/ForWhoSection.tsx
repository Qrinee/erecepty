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
        className: "bg-[#E6F3EE] text-[#0CA953]",
      },
      image: "/kiedywarto/kontynuacja.jpeg",
      title: "Kontynuacja leczenia",
      description: "Przedłuż receptę lub skonsultuj dalsze leczenie bez wizyty w przychodni.",
    },
    {
      id: 2,
      badge: {
        text: "24/7",
        icon: Clock,
        className: "bg-white border border-[#0CA953]/30 text-[#0CA953]",
      },
      image: "/kiedywarto/brakczasu.jpeg",
      title: "Brak czasu na wizytę",
      description: "Idealne rozwiązanie dla osób zapracowanych i rodziców.",
    },
    {
      id: 3,
      badge: {
        text: "Online",
        icon: Globe,
        className: "bg-white border border-[#0CA953]/30 text-[#0CA953]",
      },
      image: "/kiedywarto/wpodrozy.jpeg",
      title: "W podróży lub za granicą",
      description: "Skorzystaj z pomocy lekarza z dowolnego miejsca.",
    },
    {
      id: 4,
      badge: {
        text: "Szybka pomoc",
        icon: Zap,
        className: "bg-white border border-rose-200 text-rose-500",
      },
      image: "/kiedywarto/naglapotrzeba.jpeg",
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
    <section className="bg-gradient-to-b from-[#EBF5F2] to-white py-20 px-6 relative overflow-hidden" aria-labelledby="for-who-title">
      {}
      <div className="absolute top-10 left-5 2xl:left-10 pointer-events-none hidden xl:block z-0">
        <Image src="/for_who_left_phone.png" alt="" width={240} height={240} className="object-contain" />
      </div>
      <div className="absolute top-10 right-5 2xl:right-10 pointer-events-none hidden xl:block z-0">
        <Image src="/for_who_right_heart.png" alt="" width={220} height={220} className="object-contain" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 bg-white border border-[#0CA953]/20 text-[#0CA953] text-sm font-bold px-4 py-1.5 rounded-full mb-6 shadow-sm">
            <Users size={16} />
            Dla kogo jest nasza platforma?
          </span>
          <h2 id="for-who-title" className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Kiedy warto skorzystać <br className="hidden md:inline" />
            <span className="text-[#0CA953]">z konsultacji online?</span>
          </h2>
          <p className="mt-5 text-slate-600 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Szybka pomoc medyczna bez kolejek i bez wychodzenia z domu — dokładnie wtedy, kiedy jej potrzebujesz.
          </p>
        </div>

        {}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card) => {
              const Icon = card.badge.icon;
              return (
                <div
                  key={card.id}
                  className="bg-white rounded-3xl border border-slate-100 p-5 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-slate-200 hover:-translate-y-1 transition-all duration-300 group relative"
                >
                  <div>
                    {}
                    <div className="flex justify-start mb-6">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[13px] font-bold ${card.badge.className}`}>
                        <Icon size={14} className="fill-current opacity-90" />
                        {card.badge.text}
                      </span>
                    </div>

                    {}
                    <div className="h-44 flex items-center justify-center mb-6 relative">
                      <img src={card.image} width={600} alt={card.title} className="object-contain max-h-full group-hover:scale-105 transition-transform duration-500 ease-out" />

                    </div>

                    {}
                    <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#0CA953] transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
                      {card.description}
                    </p>
                  </div>

                  {}
                  <div className="mt-auto pt-2 flex justify-start">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center border border-[#0CA953]/30 text-[#0CA953] group-hover:bg-[#0CA953] group-hover:text-white transition-all duration-300">
                      <ArrowRight size={18} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {}
        <div className="flex flex-col items-center justify-center mb-16">
          <Link
            href="/wypelnij-formularz"
            className="inline-flex items-center gap-3 bg-[#0CA953] hover:bg-[#0A8742] text-white px-8 py-4 rounded-xl font-extrabold text-lg shadow-[0_8px_20px_rgba(12,169,83,0.25)] hover:shadow-[0_12px_25px_rgba(12,169,83,0.35)] -translate-y-0.5 hover:-translate-y-1 transition-all duration-300 group"
          >
            <MessageSquarePlus size={22} strokeWidth={2.5} />
            <span>Rozpocznij konsultację</span>
            <ArrowRight size={20} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {}
        <div className="pt-2">
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {trustItems.map((item, idx) => {
              const TrustIcon = item.icon;
              return (
                <div key={idx} className="flex items-start gap-4 px-4 py-2 justify-center">
                  <div className="text-[#0CA953] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <TrustIcon size={22} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm md:text-[15px] leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[13px] text-slate-500 mt-1 font-medium leading-normal">
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
