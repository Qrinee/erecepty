"use client";

import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  Clock,
  Users,
  Monitor,
  ShieldCheck,
  GraduationCap,
  Paperclip,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Lock,
  ArrowRight,
  Trash2,
  Wallet,
  Calendar,
  User,
  Mail,
  Phone,
  Search,
  Stethoscope,
  Headphones,
  TrendingUp,
  Award,
  ChevronDown,
  UserCheck,
  MessageSquare
} from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

const specializationsList = [
  "Internista (Choroby wewnętrzne)",
  "Pediatra",
  "Ginekolog",
  "Dermatolog",
  "Psychiatra",
  "Kardiolog",
  "Neurolog",
  "Endokrynolog",
  "Laryngolog",
  "Ortopeda",
  "Medycyna rodzinna",
  "Inna specjalizacja"
];

export default function DlaLekarzyPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialization: "",
    about: ""
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [responseMessage, setResponseMessage] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFileError("");
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      // Validate file type
      if (file.type !== "application/pdf") {
        setFileError("Dozwolone są wyłącznie pliki w formacie PDF.");
        setCvFile(null);
        return;
      }

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        setFileError("Plik jest zbyt duży. Maksymalny rozmiar to 5MB.");
        setCvFile(null);
        return;
      }

      setCvFile(file);
    }
  };

  const handleRemoveFile = () => {
    setCvFile(null);
    setFileError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setResponseMessage("");

    if (!cvFile) {
      setFileError("Załączenie CV w formacie PDF jest wymagane.");
      setIsSubmitting(false);
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("specialization", formData.specialization);
    data.append("about", formData.about);
    data.append("cv", cvFile);

    try {
      const response = await fetch(`${API_URL}/api/doctor/apply`, {
        method: "POST",
        body: data
      });

      const resData = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setResponseMessage(resData.message || "Zgłoszenie zostało wysłane pomyślnie!");
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          specialization: "",
          about: ""
        });
        setCvFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        setSubmitStatus("error");
        setResponseMessage(resData.message || "Błąd podczas przesyłania zgłoszenia. Spróbuj ponownie.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
      setResponseMessage("Nie udało się połączyć z serwerem. Sprawdź połączenie internetowe i spróbuj ponownie.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: Calendar,
      title: "Elastyczny grafik",
      description: "Pracuj kiedy chcesz i skąd chcesz. Ty decydujesz o swoim czasie."
    },
    {
      icon: Wallet,
      title: "Atrakcyjne wynagrodzenie",
      description: "Konkurencyjne stawki i przejrzyste warunki współpracy."
    },
    {
      icon: Users,
      title: "Nowi pacjenci każdego dnia",
      description: "Docieraj do szerokiego grona pacjentów z całej Polski."
    },
    {
      icon: Monitor,
      title: "Nowoczesna platforma",
      description: "Intuicyjny system, szybkie konsultacje i pełne wsparcie techniczne."
    },
    {
      icon: ShieldCheck,
      title: "Bezpieczeństwo i wygoda",
      description: "Wszystkie konsultacje są bezpieczne, zgodne z przepisami i RODO."
    },
    {
      icon: GraduationCap,
      title: "Rozwój i wsparcie",
      description: "Dostęp do wiedzy, szkoleń i materiałów wspierających Twój rozwój."
    }
  ];

  return (
    <>
      <Header transparent={false} />
      <main id="main-content" className="bg-[#FAFBFB] min-h-screen pb-20 relative overflow-hidden" tabIndex={-1}>

        {/* Background decorative elements (Plus signs) */}
        <div className="absolute top-36 left-10 text-emerald-500/10 pointer-events-none select-none hidden lg:block">
          <span className="text-5xl font-light">+</span>
        </div>
        <div className="absolute top-28 right-[42%] text-emerald-500/10 pointer-events-none select-none hidden lg:block">
          <span className="text-4xl font-light">+</span>
        </div>
        <div className="absolute top-[480px] right-8 text-emerald-500/10 pointer-events-none select-none hidden lg:block">
          <span className="text-5xl font-light">+</span>
        </div>

        <div className="mt-15 mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Column (Header + Benefits + Banner) */}
            <div className="lg:col-span-7 space-y-10">

              {/* Header Section with Doctor image overlay */}
              <div className="relative pb-6 flex flex-col md:flex-row items-end justify-between min-h-[300px]">
                <div className="max-w-md md:max-w-[65%] space-y-5 text-left relative z-10">
                  <span className="inline-flex items-center gap-1.5 bg-[#E8F3F1] text-[#147A60] text-xs font-black px-4 py-2 rounded-full uppercase tracking-wider shadow-sm">
                    <Users className="w-3.5 h-3.5" /> Współpraca dla lekarzy
                  </span>

                  <h1 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-slate-900 leading-tight tracking-tight">
                    Dołącz do naszego zespołu <br />
                    <span className="text-[#147A60]"> i rozwijaj swoją praktykę online</span>
                  </h1>

                  <p className="text-slate-500 text-sm sm:text-base font-semibold leading-relaxed">
                    Tworzymy nowoczesną platformę medyczną, która łączy lekarzy z pacjentami. Dołącz do nas i zyskaj więcej możliwości.
                  </p>
                </div>

                {/* Doctor Portrait Image positioned absolutely to the right bottom */}
                <div className="hidden md:block absolute bottom-[-10vh] right-[-10px] lg:right-[-20px] w-[45%] lg:w-[38%] h-[380px] lg:h-[450px] xl:h-[480px]">
                  <div className="relative w-full h-full">
                    <Image
                      src="/image-removebg-preview.png"
                      alt="Lekarz rekrutacja"
                      fill
                      priority
                      className="object-contain object-bottom scale-110"
                    />
                  </div>
                </div>
              </div>

              {/* Benefits Grid (3 columns on desktop, 1 on mobile) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 z-10">
                {benefits.map((benefit, idx) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white border border-slate-100 rounded-3xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.01)] hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group z-10"
                    >
                      <div className="w-12 h-12 rounded-2xl text-[#147A60] flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
                        <Icon className="w-8 h-8" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-slate-900 font-extrabold text-sm mb-2">{benefit.title}</h3>
                      <p className="text-slate-400 text-xs font-semibold leading-relaxed">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>

              {/* Banner block at the bottom of left column */}
              <div className="bg-[#FAFBFB] border border-slate-100 rounded-3xl p-6 flex items-center gap-5 shadow-[0_15px_40px_rgba(0,0,0,0.01)]">
                <div className="w-12 h-12 rounded-full bg-[#E8F3F1] text-[#147A60] flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div className="space-y-1 text-left">
                  <h4 className="text-slate-900 font-extrabold text-sm sm:text-base">Twórz medycynę przyszłości razem z nami</h4>
                  <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed">
                    Dołącz do grona specjalistów, którzy już pomagają pacjentom online.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Sidebar Form Column */}
            <div className="lg:col-span-5 bg-white border border-slate-100/80 rounded-[32px] p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
              <div className="flex flex-col items-center text-center space-y-4 mb-8">
                <div className="w-14 h-14 rounded-full bg-[#E8F3F1] text-[#147A60] flex items-center justify-center shadow-sm">
                  <UserCheck className="w-7 h-7 animate-pulse" />
                </div>
                <div className="space-y-1">
                  <h2 className="text-slate-900 font-extrabold text-xl sm:text-2xl tracking-tight">Wyślij zgłoszenie <br /> i dołącz do nas</h2>
                  <p className="text-slate-400 text-xs sm:text-sm font-semibold">
                    Wypełnij formularz, a my skontaktujemy się z Tobą w ciągu 24 godzin.
                  </p>
                </div>
              </div>

              {submitStatus === "success" ? (
                <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-6 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 bg-emerald-100 text-[#147A60] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-emerald-900 font-extrabold text-lg">Zgłoszenie wysłane!</h3>
                  <p className="text-emerald-700 text-sm font-medium leading-relaxed">
                    {responseMessage || "Pomyślnie zarejestrowaliśmy Twoją aplikację. Nasz zespół skontaktuje się z Tobą w ciągu najbliższych 24 godzin."}
                  </p>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="mt-2 text-[#147A60] hover:text-[#064743] font-bold text-sm border-b border-dashed border-[#147A60] hover:border-transparent transition-colors"
                  >
                    Wyślij kolejne zgłoszenie
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" role="form">

                  {submitStatus === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl flex items-start gap-3 text-left text-sm font-medium animate-fadeIn">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-500" />
                      <span>{responseMessage}</span>
                    </div>
                  )}

                  {/* Name Input */}
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      disabled={isSubmitting}
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Imię i nazwisko"
                      className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-[#147A60] focus:ring-1 focus:ring-[#147A60] text-slate-800 placeholder-slate-400 font-semibold transition"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      disabled={isSubmitting}
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Adres e-mail"
                      className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-[#147A60] focus:ring-1 focus:ring-[#147A60] text-slate-800 placeholder-slate-400 font-semibold transition"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      disabled={isSubmitting}
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Numer telefonu"
                      className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-[#147A60] focus:ring-1 focus:ring-[#147A60] text-slate-800 placeholder-slate-400 font-semibold transition"
                    />
                  </div>

                  {/* Specialization Select */}
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <select
                      id="specialization"
                      name="specialization"
                      required
                      disabled={isSubmitting}
                      value={formData.specialization}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-10 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-[#147A60] focus:ring-1 focus:ring-[#147A60] text-slate-800 font-semibold transition cursor-pointer appearance-none"
                    >
                      <option value="" disabled>Specjalizacja</option>
                      {specializationsList.map((spec) => (
                        <option key={spec} value={spec}>{spec}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>

                  {/* About Textarea */}
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      disabled={isSubmitting}
                      value={formData.about}
                      onChange={handleInputChange}
                      placeholder="Kilka słów o sobie (opcjonalnie)"
                      className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-[#147A60] focus:ring-1 focus:ring-[#147A60] text-slate-800 placeholder-slate-400 font-semibold transition resize-none"
                    />
                  </div>

                  {/* CV Upload */}
                  <div className="space-y-1 text-left">
                    <input
                      id="cv-file"
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      disabled={isSubmitting}
                      accept=".pdf"
                      className="hidden"
                    />

                    <div className="border border-slate-200 rounded-2xl p-4 bg-white flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="p-2 bg-[#E8F3F1] text-[#147A60] rounded-xl flex-shrink-0">
                          <Paperclip className="w-5 h-5" />
                        </div>
                        {cvFile ? (
                          <div className="min-w-0">
                            <p className="text-slate-800 text-xs font-bold truncate max-w-[150px] sm:max-w-[200px]">
                              {cvFile.name}
                            </p>
                            <p className="text-slate-400 text-[10px] font-bold">
                              {(cvFile.size / (1024 * 1024)).toFixed(2)} MB
                            </p>
                          </div>
                        ) : (
                          <div className="flex flex-col items-start leading-tight">
                            <p className="text-slate-700 text-xs font-extrabold">Dodaj CV (PDF)</p>
                            <p className="text-slate-400 text-[10px] font-semibold mt-0.5">Maks. rozmiar 5 MB</p>
                          </div>
                        )}
                      </div>

                      {cvFile ? (
                        <button
                          type="button"
                          onClick={handleRemoveFile}
                          disabled={isSubmitting}
                          className="p-2 bg-red-50 text-red-500 hover:bg-red-100 rounded-lg transition-colors flex-shrink-0 cursor-pointer"
                          aria-label="Usuń plik CV"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      ) : (
                        <button
                          type="button"
                          disabled={isSubmitting}
                          onClick={() => fileInputRef.current?.click()}
                          className="px-4 py-2 border border-[#147A60] hover:bg-[#EAF3F0] text-[#147A60] text-xs font-black rounded-xl transition cursor-pointer"
                        >
                          Wybierz plik
                        </button>
                      )}
                    </div>
                    {fileError && (
                      <p className="text-red-500 text-[11px] font-bold mt-1 pl-1" role="alert">
                        {fileError}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#147A60] hover:bg-[#0f5c4a] disabled:bg-slate-400 text-white font-extrabold rounded-2xl py-4 px-6 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-98 cursor-pointer mt-6"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Wysyłanie zgłoszenia...</span>
                      </>
                    ) : (
                      <>
                        <span>Wyślij zgłoszenie</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  {/* Form Trust Note */}
                  <div className="flex items-center justify-center gap-2 text-slate-400 text-[10px] font-semibold mt-4">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Twoje dane są bezpieczne i nie udostępniamy ich osobom trzecim.</span>
                  </div>

                </form>
              )}
            </div>

          </div>

          {/* Bottom Trust Banner */}
          <div className="border-t border-slate-200/60 mt-20 pt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
              {[
                {
                  icon: UserCheck,
                  title: "Ponad 50 000",
                  title2: "zadowolonych pacjentów",
                  desc: "Zaufanie, które budujemy razem z naszymi lekarzami."
                },
                {
                  icon: ShieldCheck,
                  title: "Zgodność z prawem",
                  title2: "i RODO",
                  desc: "Działamy zgodnie z aktualnymi przepisami i standardami."
                },
                {
                  icon: Headphones,
                  title: "Wsparcie na każdym",
                  title2: "etapie",
                  desc: "Nasz zespół jest zawsze gotowy, aby Ci pomóc."
                },
                {
                  icon: TrendingUp,
                  title: "Stabilna i rozwijająca się",
                  title2: "platforma",
                  desc: "Inwestujemy w technologię, która ułatwia pracę."
                },
              ].map((item, idx) => {
                const TrustIcon = item.icon;
                return (
                  <div key={idx} className={`flex gap-4 items-start ${idx > 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''}`}>
                    <div className="w-12 h-12 rounded-2xl bg-[#E8F3F1] text-[#147A60] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <TrustIcon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1 text-left">
                      <h4 className="font-extrabold text-slate-800 text-sm sm:text-base leading-snug">
                        {item.title} <br className="hidden sm:inline" /> {item.title2}
                      </h4>
                      <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
