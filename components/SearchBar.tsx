import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative max-w-xl mx-auto mb-6">

      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 stroke-[1.5] text-slate-400"
      />

      <input
        type="text"
        placeholder="Wpisz nazwę leku, aby rozpocząć..."
        className="
          w-full h-12
          pl-11 pr-28
          rounded-full
          bg-white
          border border-slate-200
          text-sm
          outline-none
          focus:border-blue-500
          focus:ring-2 focus:ring-blue-100
        "
      />

      {/* Button */}
      <button
        className="
        cursor-pointer
          absolute right-1 top-1/2 -translate-y-1/2
          h-10 px-6
          bg-blue-600 text-white
          rounded-full
          text-sm font-medium
          hover:bg-blue-700 transition
        "
      >
        Szukaj
      </button>
    </div>
  );
}
