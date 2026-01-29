import {
  Pill,
  Clock,
  Plane,
  Asterisk
} from "lucide-react";
import ForWhoCard from "./ForWhoCard";

export default function ForWhoSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl font-bold text-slate-900">
          Dla kogo jest nasza platforma?
        </h2>
        <p className="mt-4 text-slate-600">
          Zapewniamy szybką i bezpieczną pomoc medyczną online
          dla pacjentów w całej Polsce, niezależnie od sytuacji.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <ForWhoCard
          icon={Pill}
          title="Kontynuacja leczenia"
          description="Dla pacjentów przyjmujących stałe leki, którzy potrzebują nowej recepty bez konieczności wizyty stacjonarnej."
        />

        <ForWhoCard
          icon={Clock}
          title="Brak czasu na wizytę"
          description="Idealne rozwiązanie dla osób zapracowanych oraz rodziców, którzy nie mogą pozwolić sobie na stanie w kolejkach."
        />

        <ForWhoCard
          icon={Plane}
          title="Podróżni"
          description="Gdy zapomnisz leków lub potrzebujesz e-recepty przebywając poza miejscem zamieszkania lub na wakacjach."
        />

        <ForWhoCard
          icon={Asterisk}
          title="Nagłe potrzeby"
          description="Szybki dostęp do niezbędnej recepty w sytuacjach, gdy liczy się każda godzina, a Twój lekarz jest nieosiągalny."
        />
      </div>
    </section>
  );
}
