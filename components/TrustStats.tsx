import { Clock, CheckCircle, Star, Users, Shield, Building2 } from "lucide-react";

const stats = [
  {
    icon: Clock,
    title: "15 min",
    desc: "Średni czas oczekiwania",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: CheckCircle,
    title: "50 000+",
    desc: "Przeprowadzonych konsultacji",
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    icon: Users,
    title: "1 200+",
    desc: "Zadowolonych pacjentów",
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    icon: Star,
    title: "4.9/5",
    desc: "Ocena w Google",
    color: "text-yellow-500",
    bgColor: "bg-yellow-50"
  },
  {
    icon: Shield,
    title: "100%",
    desc: "Bezpieczne dane",
    color: "text-slate-600",
    bgColor: "bg-slate-50"
  },
  {
    icon: Building2,
    title: "24/7",
    desc: "Dostępność",
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
];

export default function TrustStats() {
  return (
    <section className="bg-white py-12 border-b" aria-label="Statystyki platformy">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map(({ icon: Icon, title, desc, color, bgColor }) => (
            <div key={title} className="text-center group">
              <div className={`w-14 h-14 ${bgColor} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                <Icon
                  className={`w-7 h-7 stroke-[1.5] ${color}`}
                  aria-hidden="true"
                />
              </div>
              <div className="text-2xl font-bold mb-1 text-slate-900">{title}</div>
              <p className="text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
