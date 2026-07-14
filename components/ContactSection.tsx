"use client";

import { useState } from "react";
import {
  Mail, Phone, Clock, ShieldCheck, CheckCircle2, AlertCircle,
  ArrowRight, Lock, ChevronRight, User, MessageSquare, MessageCircle
} from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMsg("Wypełnij wymagane pola (Imię i nazwisko, E-mail, Treść).");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message + (formData.phone ? ` (Telefon: ${formData.phone})` : "")
        }),
      });

      if (!res.ok) throw new Error("Nie udało się wysłać wiadomości.");

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Wystąpił błąd. Spróbuj ponownie.");
    }
  };

  return (
    <section id="kontakt" className=" py-20 bg-gradient-to-br from-[#FCFDFD] via-white to-[#EFF6F4] scroll-mt-20 relative overflow-hidden">

      {}
      <div className="absolute top-12 left-10 text-emerald-100 text-3xl font-extrabold select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute bottom-20 left-6 text-emerald-100 text-3xl font-extrabold select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute top-36 right-6 text-emerald-100 text-3xl font-extrabold select-none pointer-events-none hidden lg:block">+</div>
      <div className="absolute bottom-1/3 right-12 text-emerald-100 text-2xl font-extrabold select-none pointer-events-none hidden lg:block">+</div>

      <div className="max-w-[80vw] m-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-8">

          {}
          <div>
            <h2 className="text-6xl font-extrabold text-slate-900 mb-2 tracking-tight">Kontakt</h2>
            <h3 className="text-lg font-bold text-[#147A60] mb-2">Jesteśmy do Twojej dyspozycji</h3>
            <p className="text-slate-500 text-sm font-medium mb-8 max-w-md">
              Odpowiadamy szybko na pytania dotyczące konsultacji, recept i wizyt online.
            </p>

            <div className="space-y-4">

              {}
              <a
                href="mailto:kontakt@lekarzeiterapeuci.pl"
                className="flex items-center justify-between bg-white rounded-2xl p-4 border border-slate-100 hover:border-[#147A60]/40 transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.01)] group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#E8F3F1] border border-[#D5EAE6] text-[#064743] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-800">E-mail</div>
                    <div className="text-sm text-slate-500 font-semibold mt-0.5">kontakt@lekarzeiterapeuci.pl</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#147A60] transition-colors" />
              </a>

              {}
              <a
                href="tel:+48881238227"
                className="flex items-center justify-between bg-white rounded-2xl p-4 border border-slate-100 hover:border-[#147A60]/40 transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.01)] group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#E8F3F1] border border-[#D5EAE6] text-[#064743] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-800">Telefon</div>
                    <div className="text-sm text-slate-500 font-semibold mt-0.5">+48 881 238 227</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#147A60] transition-colors" />
              </a>

              {}
              {}

              {}
              <div
                className="flex items-center justify-between bg-white rounded-2xl p-4 border border-slate-100 hover:border-[#147A60]/40 transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.01)] group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#E8F3F1] border border-[#D5EAE6] text-[#064743] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-800">Czas odpowiedzi</div>
                    <div className="text-sm text-slate-500 font-semibold mt-0.5">Najczęściej około godziny</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#147A60] transition-colors" />
              </div>

              {}
              <div
                className="flex items-center justify-between bg-[#EAF3F0] rounded-2xl p-4 border border-[#D5EAE6]/50 shadow-[0_10px_30px_rgba(0,0,0,0.01)]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#D5EAE6] text-[#064743] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <ShieldCheck className="w-5 h-5 fill-[#064743] text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-800">Wsparcie online 24/7</div>
                    <div className="text-xs text-slate-500 font-semibold mt-0.5">Pomagamy każdego dnia, również w weekendy i święta.</div>
                  </div>
                </div>
                <div className="w-11 h-11 rounded-full border-2 border-emerald-600/30 flex items-center justify-center flex-shrink-0 bg-white shadow-sm">
                  <span className="text-xs font-extrabold text-emerald-700">24/7</span>
                </div>
              </div>

            </div>
          </div>

          {}
          <div className="relative pt-24 lg:pt-28">

            {}
            <div className="absolute -top-16 right-4 w-[180px] sm:w-[210px] h-auto pointer-events-none select-none hidden sm:block z-20">
              <img
                src="/contact_3d.jpeg"
                alt="Pomoc medyczna"
                className="w-full h-auto drop-shadow-lg rounded-md"
              />

              {}
              <div className="absolute -top-6 -left-12 bg-[#EAF3F0] rounded-full p-2.5 shadow-sm text-[#064743] animate-bounce w-9 h-9 flex items-center justify-center border border-[#D5EAE6]/70">
                <span className="text-xs font-extrabold">...</span>
              </div>

              <div className="absolute top-8 -left-20 bg-white rounded-full p-2 border border-slate-100 shadow-md text-emerald-500 w-8 h-8 flex items-center justify-center">
                <svg className="w-4 h-4 fill-emerald-500 text-emerald-500" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>

              <div className="absolute top-2 right-4 text-emerald-400/80 text-xl font-bold animate-pulse">+</div>
            </div>

            {}
            <div className="bg-white rounded-[32px] border border-slate-100 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.02)] relative z-10">


              <h3 className="text-xl font-extrabold text-slate-800 mb-6">Napisz do nas</h3>

              <form onSubmit={handleSubmit} className="space-y-4">

                {}
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4.5 h-4.5" />
                  </div>
                  <input
                    type="text"
                    placeholder="Imię i nazwisko"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DAE9E6]/50 focus:border-[#147A60] transition text-sm font-semibold text-slate-800 placeholder-slate-400"
                  />
                </div>

                {}
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <input
                    type="email"
                    placeholder="Adres e-mail"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DAE9E6]/50 focus:border-[#147A60] transition text-sm font-semibold text-slate-800 placeholder-slate-400"
                  />
                </div>

                {}
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <input
                    type="tel"
                    placeholder="Numer telefonu (opcjonalnie)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DAE9E6]/50 focus:border-[#147A60] transition text-sm font-semibold text-slate-800 placeholder-slate-400"
                  />
                </div>

                {}
                <div className="relative">
                  <div className="absolute top-3.5 left-4 pointer-events-none text-slate-400">
                    <MessageSquare className="w-4.5 h-4.5" />
                  </div>
                  <textarea
                    placeholder="Opisz swoją sprawę..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#DAE9E6]/50 focus:border-[#147A60] transition text-sm font-semibold text-slate-800 placeholder-slate-400 resize-none"
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-sm font-bold text-red-600 bg-red-50 rounded-xl px-4 py-3 border border-red-100">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {errorMsg}
                  </div>
                )}

                {status === "success" && (
                  <div className="flex items-center gap-2 text-sm font-bold text-emerald-600 bg-emerald-50 rounded-xl px-4 py-3 border border-emerald-100">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    Wiadomość wysłana! Odpowiemy najszybciej jak to możliwe.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[#147A60] hover:bg-[#064743] text-white font-extrabold py-3.5 rounded-xl transition flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer text-sm shadow-md shadow-emerald-800/10"
                >
                  <span>{status === "sending" ? "Wysyłanie..." : "Wyślij wiadomość"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {}
                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 font-bold pt-3">
                  <Lock className="w-3.5 h-3.5 text-slate-300" />
                  <span>Twoje dane są bezpieczne i szyfrowane</span>
                </div>

              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}