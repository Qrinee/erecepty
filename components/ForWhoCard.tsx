import { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ForWhoCard({
  icon: Icon,
  title,
  description
}: Props) {
  return (
    <div className="bg-white rounded-2xl border-2 border-slate-100 p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-xl group">
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 mb-4 group-hover:scale-110 transition-transform" aria-hidden="true">
        <Icon size={28} />
      </div>

      <h3 className="font-bold text-xl text-slate-900 mb-2">
        {title}
      </h3>

      <p className="text-sm text-slate-600 leading-relaxed mb-4">
        {description}
      </p>

      <Link 
        href="/jak-to-dziala"
        className="inline-flex items-center gap-1 text-blue-600 font-medium text-sm hover:gap-2 transition-all"
      >
        Dowiedz się więcej
        <ArrowRight size={14} />
      </Link>
    </div>
  );
}
