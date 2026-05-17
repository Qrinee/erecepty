import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function TrustItem({
  icon: Icon,
  title,
  description
}: Props) {
  return (
    <div className="flex gap-4 bg-white rounded-2xl p-6 border-2 border-slate-100 hover:border-[#1A5D54] hover:shadow-lg transition-all duration-300 group">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#DAE9E6] to-[#DAE9E6]/50 text-[#064743] shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true">
        <Icon size={24} />
      </div>

      <div>
        <h4 className="font-bold text-slate-900 mb-1 text-lg">
          {title}
        </h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
