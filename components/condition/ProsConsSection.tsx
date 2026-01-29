import { ProsConsItem } from "@/app/types/condition";
import { CheckCircle, XCircle } from "lucide-react";


type Props = {
  data: ProsConsItem;
};

export default function ProsConsSection({ data }: Props) {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-6 grid gap-8 md:grid-cols-2">
        {/* Pros */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="mb-4 font-semibold text-emerald-600">
            Zalety
          </h3>
          <ul className="space-y-3">
            {data.pros.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-sm">
                <CheckCircle size={16} className="text-emerald-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Cons */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="mb-4 font-semibold text-red-600">
            Skutki uboczne
          </h3>
          <ul className="space-y-3">
            {data.cons.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-sm">
                <XCircle size={16} className="text-red-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
