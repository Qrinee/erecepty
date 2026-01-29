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
    <div className="flex gap-4 bg-white rounded-xl p-6 border border-slate-200">
      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 shrink-0">
        <Icon size={20} />
      </div>

      <div>
        <h4 className="font-semibold text-slate-900 mb-1">
          {title}
        </h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
