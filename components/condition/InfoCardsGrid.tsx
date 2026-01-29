import { InfoCardItem } from "@/app/types/condition";
import InfoCard from "./InfoCard";

type Props = {
  items: InfoCardItem[];
};

export default function InfoCardsGrid({ items }: Props) {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-2xl font-bold text-slate-900">
          Rodzaje metod
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <InfoCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
