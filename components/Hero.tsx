import SearchBar from "./SearchBar";
import CategoryPills from "./CategoryPills";
import { Shield, Clock, Star, CheckCircle, ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-slate-900 min-h-[90vh] flex flex-col justify-center overflow-hidden">
      <div style={{margin: '50px'}}></div>
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Main background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/85 to-blue-900/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.3)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(99,102,241,0.2)_0%,_transparent_50%)]" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      
      {/* Floating medical icons */}
      <div className="absolute top-32 right-[15%] hidden lg:block animate-pulse">
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
          <Shield className="w-8 h-8 text-blue-300" />
        </div>
      </div>
      <div className="absolute top-48 left-[10%] hidden lg:block animate-pulse" style={{ animationDelay: '0.5s' }}>
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
          <CheckCircle className="w-8 h-8 text-emerald-300" />
        </div>
      </div>
      <div className="absolute bottom-32 right-[20%] hidden lg:block animate-pulse" style={{ animationDelay: '1s' }}>
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
          <Clock className="w-8 h-8 text-amber-300" />
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-4 py-16 md:py-24">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-white bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Dostępne 24/7 • Bezpieczne konsultacje
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-center text-white">
          Konsultacja lekarska{" "}
          <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
            bez wychodzenia
          </span>{" "}
          z domu
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-slate-300 text-center mb-10 max-w-2xl mx-auto">
          Szybka konsultacja lekarska i pomoc zdrowotna nawet w <span className="text-white font-semibold">15 minut</span>.
          Bez kolejek, bez wychodzenia z domu, o każdej porze.
        </p>

        {/* Search Bar */}
        <div className="mb-10">
          <SearchBar />
        </div>

        {/* Category Pills */}
        <div className="mb-12">
          <CategoryPills />
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-sm text-slate-400">

          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Certyfikowani lekarze</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-400" />
            <span>Szybka obsługa</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10">
          <a 
            href="/jak-to-dziala"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Dowiedz się jak to działa
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>


    </section>
  );
}
