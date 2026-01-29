import { InfoCardItem } from "@/app/types/condition";
import { Check, Minus } from "lucide-react";


type Props = {
  item: InfoCardItem;
};

export default function InfoCard({ item }: Props) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition">
      <h3 className="mb-2 text-lg font-semibold text-slate-900">
        {item.title}
      </h3>

      <p className="mb-4 text-sm text-slate-500">
        {item.description}
      </p>

      <ul className="space-y-2">
        {item.bullets.map((bullet, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-sm text-slate-600"
          >
            {bullet.positive ? (
              <Check size={16} className="text-emerald-500" />
            ) : (
              <Minus size={16} className="text-slate-400" />
            )}
            {bullet.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
