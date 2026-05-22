"use client";

import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Clock,
  Banknote,
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
  UserPlus,
  Trash2
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
      icon: Clock,
      title: "Elastyczny grafik",
      description: "Pracuj kiedy chcesz i skąd chcesz. Ty decydujesz o swoim czasie i liczbie godzin."
    },
    {
      icon: Banknote,
      title: "Atrakcyjne wynagrodzenie",
      description: "Konkurencyjne stawki wypłacane terminowo oraz przejrzyste warunki rozliczeń."
    },
    {
      icon: Users,
      title: "Nowi pacjenci każdego dnia",
      description: "Docieraj do szerokiego grona pacjentów z całej Polski poszukujących profesjonalnej pomocy."
    },
    {
      icon: Monitor,
      title: "Nowoczesna platforma",
      description: "Intuicyjny system do obsługi konsultacji, szybkie e-recepty i pełne wsparcie techniczne 24/7."
    },
    {
      icon: ShieldCheck,
      title: "Bezpieczeństwo i wygoda",
      description: "Wszystkie konsultacje są w pełni zgodne z polskim prawem, RODO oraz standardami medycznymi."
    },
    {
      icon: GraduationCap,
      title: "Rozwój i wsparcie",
      description: "Dostęp do bazy wiedzy, szkoleń oraz merytorycznego wsparcia na każdym etapie współpracy."
    }
  ];

  return (
    <>
      <Header transparent={false} />
      <main id="main-content" className="bg-[#F8FAFC] min-h-screen pt-28 pb-20" tabIndex={-1}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content Column - 7/12 width on large screens */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Headline & Badges */}
              <div className="space-y-4 text-left">
                <span className="inline-flex items-center gap-1.5 bg-[#E8F3F1] text-[#064743] text-xs font-black px-4 py-2 rounded-full uppercase tracking-wider">
                  Współpraca dla lekarzy
                </span>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
                  Dołącz do naszego zespołu i rozwijaj swoją praktykę <span className="text-[#064743]">online</span>
                </h1>
                
                <p className="text-base sm:text-lg text-slate-500 font-semibold leading-relaxed max-w-2xl">
                  Tworzymy nowoczesną platformę medyczną, która łączy wykwalifikowanych lekarzy z pacjentami w całym kraju. Dołącz do nas i zyskaj stabilne źródło dochodów oraz pełną elastyczność pracy.
                </p>
              </div>

              {/* Benefits Grid 2x3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, idx) => {
                  const Icon = benefit.icon;
                  return (
                    <div 
                      key={idx} 
                      className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start text-left"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#E8F3F1] text-[#064743] flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-105">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-slate-900 font-extrabold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-slate-500 text-sm font-medium leading-relaxed">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>

              {/* Doctor portrait banner with custom content */}
              <div className="bg-[#064743]/5 border border-[#064743]/10 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden">
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#064743]/5 rounded-full blur-3xl -z-10" />
                <div className="flex-shrink-0 w-24 h-24 rounded-full bg-[#DAE9E6] flex items-center justify-center border-2 border-white shadow-sm overflow-hidden">
                  <img 
                    src="/doctor_recruitment.png" 
                    alt="Lekarz rekrutacja" 
                    className="w-full h-full object-cover object-top scale-110"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <h4 className="text-[#064743] font-extrabold text-lg">Twórz medycynę przyszłości razem z nami</h4>
                  <p className="text-slate-600 text-sm font-semibold leading-relaxed">
                    Dołącz do stale rosnącego grona wybitnych specjalistów, którzy już teraz z powodzeniem realizują bezpieczne konsultacje medyczne online i pomagają tysiącom pacjentów każdego dnia.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Sidebar Form Column - 5/12 width on large screens */}
            <div className="lg:col-span-5 bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-md">
              <div className="flex flex-col items-center text-center space-y-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-[#E8F3F1] text-[#064743] flex items-center justify-center">
                  <UserPlus className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h2 className="text-slate-900 font-extrabold text-2xl tracking-tight">Wyślij zgłoszenie i dołącz do nas</h2>
                  <p className="text-slate-500 text-sm font-semibold">
                    Wypełnij formularz, a my skontaktujemy się z Tobą w ciągu 24 godzin.
                  </p>
                </div>
              </div>

              {submitStatus === "success" ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-emerald-900 font-extrabold text-lg">Zgłoszenie wysłane!</h3>
                  <p className="text-emerald-700 text-sm font-medium leading-relaxed">
                    {responseMessage || "Pomyślnie zarejestrowaliśmy Twoją aplikację. Nasz zespół skontaktuje się z Tobą na podany adres e-mail lub numer telefonu w ciągu najbliższych 24 godzin."}
                  </p>
                  <button
                    onClick={() => setSubmitStatus("idle")}
                    className="mt-2 text-[#064743] hover:text-[#053734] font-bold text-sm border-b border-dashed border-[#064743] hover:border-transparent transition-colors"
                  >
                    Wyślij kolejne zgłoszenie
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" role="form">
                  
                  {submitStatus === "error" && (
                    <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl flex items-start gap-3 text-left text-sm font-medium animate-fadeIn">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-500" />
                      <span>{responseMessage}</span>
                    </div>
                  )}

                  {/* Name Input */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="name" className="text-slate-700 font-bold text-sm">
                      Imię i nazwisko <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      disabled={isSubmitting}
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="np. dr Jan Kowalski"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#064743] focus:bg-white text-slate-800 placeholder-slate-400 font-semibold transition"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="email" className="text-slate-700 font-bold text-sm">
                      Adres e-mail <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      disabled={isSubmitting}
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="np. jan.kowalski@example.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#064743] focus:bg-white text-slate-800 placeholder-slate-400 font-semibold transition"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="phone" className="text-slate-700 font-bold text-sm">
                      Numer telefonu <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      disabled={isSubmitting}
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="np. +48 123 456 789"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#064743] focus:bg-white text-slate-800 placeholder-slate-400 font-semibold transition"
                    />
                  </div>

                  {/* Specialization Select */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="specialization" className="text-slate-700 font-bold text-sm">
                      Specjalizacja <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="specialization"
                      name="specialization"
                      required
                      disabled={isSubmitting}
                      value={formData.specialization}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#064743] focus:bg-white text-slate-800 font-semibold transition cursor-pointer appearance-none"
                    >
                      <option value="" disabled>Wybierz specjalizację...</option>
                      {specializationsList.map((spec) => (
                        <option key={spec} value={spec}>{spec}</option>
                      ))}
                    </select>
                  </div>

                  {/* About Textarea */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="about" className="text-slate-700 font-bold text-sm">
                      Kilka słów o sobie <span className="text-slate-400 font-normal">(opcjonalnie)</span>
                    </label>
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      disabled={isSubmitting}
                      value={formData.about}
                      onChange={handleInputChange}
                      placeholder="Opisz krótko swoje doświadczenie zawodowe, certyfikaty lub preferencje współpracy..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#064743] focus:bg-white text-slate-800 placeholder-slate-400 font-semibold transition resize-none"
                    />
                  </div>

                  {/* Custom File Upload CV */}
                  <div className="space-y-1.5 text-left">
                    <span className="text-slate-700 font-bold text-sm">
                      Dodaj CV (PDF) <span className="text-red-500">*</span>
                    </span>
                    <input
                      id="cv-file"
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      disabled={isSubmitting}
                      accept=".pdf"
                      className="hidden"
                    />
                    
                    <div className="border border-dashed border-slate-300 rounded-xl p-4 bg-slate-50 flex items-center justify-between gap-4">
                      {cvFile ? (
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg flex-shrink-0">
                            <Paperclip className="w-5 h-5" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-slate-800 text-xs font-bold truncate max-w-[180px] sm:max-w-[240px]">
                              {cvFile.name}
                            </p>
                            <p className="text-slate-400 text-[10px] font-bold">
                              {(cvFile.size / (1024 * 1024)).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex flex-col items-start gap-0.5">
                          <p className="text-slate-600 text-xs font-bold">Nie wybrano pliku</p>
                          <p className="text-slate-400 text-[10px] font-bold">PDF, maksymalnie 5MB</p>
                        </div>
                      )}

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
                          className="px-4 py-2 border border-[#064743] hover:bg-[#E8F3F1] text-[#064743] text-xs font-black rounded-lg transition cursor-pointer"
                        >
                          Wybierz plik
                        </button>
                      )}
                    </div>
                    {fileError && (
                      <p className="text-red-500 text-xs font-bold mt-1" role="alert">
                        {fileError}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#064743] hover:bg-[#053734] disabled:bg-slate-400 text-white font-extrabold rounded-xl py-3.5 px-6 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-98 cursor-pointer mt-6"
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

                  {/* Form Footer Note */}
                  <div className="flex items-center justify-center gap-2 text-slate-400 text-[11px] font-bold mt-4">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Twoje dane są bezpieczne i nie udostępniamy ich osobom trzecim.</span>
                  </div>

                </form>
              )}
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
