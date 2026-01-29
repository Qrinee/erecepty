import SearchBar from "./SearchBar";
import CategoryPills from "./CategoryPills";

export default function Hero() {
  return (
    <section className="bg-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <span className="inline-block mb-4 text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
          Dostępne 24/7
        </span>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Recepta online{" "}
          <span className="text-blue-600">bez wychodzenia</span> z domu
        </h1>

        <p className="text-slate-600 mb-8">
          Recepta online od 49,99 zł nawet w 15 minut
        </p>

        <SearchBar />
        <CategoryPills />
      </div>
    </section>
  );
}
