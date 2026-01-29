import { Clock, CheckCircle, Star } from "lucide-react";

const stats = [
  {
    icon: Clock,
    title: "15 min",
    desc: "Średni czas oczekiwania",
    color: "text-blue-600",
  },
  {
    icon: CheckCircle,
    title: "100k+",
    desc: "Wystawionych recept",
    color: "text-blue-600",
  },
  {
    icon: Star,
    title: "4.9/5",
    desc: "Zadowolonych pacjentów",
    color: "text-yellow-500",
  },
];

export default function TrustStats() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-10 text-center">
        {stats.map(({ icon: Icon, title, desc, color }) => (
          <div key={title}>
            <Icon
              className={`mx-auto mb-3 w-6 h-6 stroke-[1.5] ${color}`}
            />
            <div className="text-3xl font-bold mb-1">{title}</div>
            <p className="text-sm text-slate-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
