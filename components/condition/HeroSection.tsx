import { ConditionPageData } from "@/app/types/condition";
import Image from "next/image";


type Props = {
  data: ConditionPageData;
};

export default function HeroSection({ data }: Props) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 items-center">
        {/* Left */}
        <div>
          <p className="mb-4 text-sm font-semibold text-blue-600 uppercase">
            {data.category}
          </p>

          <h1 className="text-4xl font-bold text-slate-900">
            {data.title}{" "}
            <span className="text-blue-600">{data.subtitle}</span>
          </h1>

          <p className="mt-4 max-w-xl text-slate-500">
            Dowiedz się jak bezpiecznie i świadomie wybrać metodę leczenia.
            Nasza platforma łączy Cię z lekarzem online.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700">
              {data.ctaPrimary}
            </button>

            <button className="rounded-xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              {data.ctaSecondary}
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <Image
            src={data.heroImage}
            alt={data.subtitle}
            width={520}
            height={420}
            className="rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
