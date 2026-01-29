import { LucideIcon } from "lucide-react";

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
    <div className="bg-white rounded-xl border border-stone-200 p-6 transition">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-4">
        <Icon size={24} />
      </div>

      <h3 className="font-semibold text-slate-900 mb-2">
        {title}
      </h3>

      <p className="text-sm text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
