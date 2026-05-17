"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMsg("Wypełnij wszystkie pola.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Nie udało się wysłać wiadomości.");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Wystąpił błąd. Spróbuj ponownie.");
    }
  };

  return (
    <section id="kontakt" className="py-16 md:py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Kontakt
          </h2>
          <p className="text-slate-600 text-lg">Masz pytania? Skontaktuj się z nami</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#DAE9E6] flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#064743]" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">E-mail</h3>
                <a href="mailto:contact@platforma.pl" className="text-slate-600 hover:text-[#064743] transition-colors">contact@platforma.pl</a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#DAE9E6] flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-[#064743]" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Telefon</h3>
                <a href="tel:+48221234567" className="text-slate-600 hover:text-[#064743] transition-colors">+48 (22) 123 45 67</a>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#DAE9E6] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#064743]" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Adres</h3>
                <p className="text-slate-600">ul. Medyczna 10, 00-000 Warszawa</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#DAE9E6] flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-[#064743]" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Godziny pracy</h3>
                <p className="text-slate-600">Pon-Pt: 8:00 - 20:00<br/>Sob-Nd: 9:00 - 18:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Wyślij wiadomość</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Twoje imię i nazwisko"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAE9E6]/50"
              />
              <input
                type="email"
                placeholder="Twój e-mail"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAE9E6]/50"
              />
              <textarea
                placeholder="Twoja wiadomość"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DAE9E6]/50"
              />

              {status === "error" && (
                <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 rounded-lg px-4 py-3">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {errorMsg}
                </div>
              )}

              {status === "success" && (
                <div className="flex items-center gap-2 text-sm text-emerald-600 bg-emerald-50 rounded-lg px-4 py-3">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  Wiadomość wysłana! Odpowiemy najszybciej jak to możliwe.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-[#064743] text-white font-bold py-3 rounded-lg hover:bg-[#1A5D54] transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Wysyłanie..." : "Wyślij wiadomość"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}