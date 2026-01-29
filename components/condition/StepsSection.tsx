import { StepItem } from "@/app/types/condition";


type Props = {
  steps: StepItem[];
};

export default function StepsSection({ steps }: Props) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Jak wybrać najlepszą metodę?
          </h2>
          <p className="text-slate-500">
            Wybór odpowiedniego rozwiązania zawsze powinien być
            poprzedzony konsultacją z lekarzem.
          </p>
        </div>

        <ol className="space-y-6">
          {steps.map((step, index) => (
            <li key={index} className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                {index + 1}
              </div>
              <div>
                <p className="font-semibold text-slate-900">
                  {step.title}
                </p>
                <p className="text-sm text-slate-500">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
