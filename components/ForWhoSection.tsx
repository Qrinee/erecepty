import {
  Pill,
  Clock,
  Plane,
  Asterisk,
  Heart,
  ArrowRight
} from "lucide-react";
import ForWhoCard from "./ForWhoCard";
import Link from "next/link";

export default function ForWhoSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20" aria-labelledby="for-who-title">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
          <Heart size={16} />
          Dla kogo
        </span>
        <h2 id="for-who-title" className="text-3xl md:text-4xl font-bold text-slate-900">
          Dla kogo jest nasza platforma?
        </h2>
        <p className="mt-4 text-slate-600 text-lg">
          Zapewniamy szybką i bezpieczną pomoc medyczną online
          dla pacjentów w całej Polsce, niezależnie od sytuacji.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <ForWhoCard
          icon={Pill}
          title="Kontynuacja leczenia"
          description="Dla osób potrzebujących porad dotyczących zdrowia, którzy chcą uniknąć wizyty stacjonarnej."
        />

        <ForWhoCard
          icon={Clock}
          title="Brak czasu na wizytę"
          description="Idealne rozwiązanie dla osób zapracowanych oraz rodziców, którzy nie mogą pozwolić sobie na stanie w kolejkach."
        />

        <ForWhoCard
          icon={Plane}
          title="Podróżni"
          description="Gdy potrzebujesz profesjonalnej porady przebywając poza miejscem zamieszkania lub na wakacjach."
        />

        <ForWhoCard
          icon={Asterisk}
          title="Nagłe potrzeby"
          description="Szybki dostęp do niezbędnej recepty w sytuacjach, gdy liczy się każda godzina, a Twój lekarz jest nieosiągalny."
        />
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/jak-to-dziala"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-600/25"
        >
          Zobacz jak to działa
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
