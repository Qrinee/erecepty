import Link  from "next/link"

export default function Header() {
  return (
    <header className="bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
<div className="flex items-center gap-2 font-semibold text-lg">
  <div className="w-6 h-6 bg-blue-600 rotate-45 rounded-sm flex items-center justify-center">
    <div className="w-2 h-2 bg-white rounded-sm" />
  </div>
  E-Recepta.pl
</div></Link>


        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#">Jak to działa?</a>
          <a href="#">Cennik</a>
          <a href="#">Dla lekarzy</a>
        </nav>

        <button className="bg-blue-600 cursor-pointer text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition">
          Zaloguj się
        </button>
      </div>
    </header>
  );
}
