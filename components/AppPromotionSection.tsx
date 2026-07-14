"use client";

import { useEffect, useState } from "react";
import { Check, Star, ArrowRight, Share, Plus, X, Smartphone, Download, QrCode } from "lucide-react";
import Link from "next/link";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: Array<string>;
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export default function AppPromotionSection() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const [origin, setOrigin] = useState("https://lekarze-i-terapeuci.pl");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
      
      
      const userAgent = window.navigator.userAgent.toLowerCase();
      const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
      setIsIos(isIosDevice);

      
      if (window.matchMedia("(display-mode: standalone)").matches) {
        setIsInstalled(true);
      }

      const handleBeforeInstallPrompt = (e: Event) => {
        e.preventDefault();
        setDeferredPrompt(e as BeforeInstallPromptEvent);
        setIsInstallable(true);
      };

      const handleAppInstalled = () => {
        setIsInstalled(true);
        setIsInstallable(false);
        setDeferredPrompt(null);
      };

      window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.addEventListener("appinstalled", handleAppInstalled);

      return () => {
        window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
        window.removeEventListener("appinstalled", handleAppInstalled);
      };
    }
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setDeferredPrompt(null);
        setIsInstallable(false);
      }
    } else {
      setShowInstructions(true);
    }
  };

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(origin)}`;

  return (
    <section className="py-6 lg:py-8 bg-gradient-to-br from-[#F5FAF8] to-[#EAF3F0] border-y border-[#D5EAE6]/50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E4F2EE] text-[#064743] font-bold text-xs sm:text-sm uppercase tracking-wider mb-3 shadow-sm">
              <Smartphone className="w-4 h-4" />
              <span>Strona jako Aplikacja</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] mb-4">
              Dodaj nas do ekranu głównego i zamawiaj{" "}
              <span className="text-[#147A60] bg-[#E4F2EE]/60 px-2 rounded-md">20% taniej!</span>
            </h2>

            <p className="text-slate-600 font-medium text-sm sm:text-base md:text-lg mb-8 max-w-2xl leading-relaxed">
              Zyskaj błyskawiczny dostęp do konsultacji medycznych, e-recept i e-zwolnień bezpośrednio z pulpitu swojego telefonu. Działa dokładnie jak aplikacja mobilna, bez zajmowania pamięci!
            </p>

            {}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-8">
              {[
                "Łatwiejsze i szybsze składanie zamówień",
                "Minimum formalności przy kontynuacji leczenia",
                "Priorytetowa obsługa zgłoszeń",
                "Działa natychmiast, bez pobierania z App Store / GP"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E4F2EE] text-[#147A60] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-slate-700 font-semibold text-sm sm:text-base leading-snug">{benefit}</span>
                </div>
              ))}
            </div>

            {}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center border-t border-[#D5EAE6]/50 pt-4">
              
              {}
              <div className="w-full sm:w-auto">
                {isInstalled ? (
                  <div className="inline-flex items-center gap-2 bg-[#E4F2EE] text-[#064743] px-6 py-3 rounded-xl font-extrabold text-sm sm:text-base border border-[#D5EAE6]">
                    <Check className="w-5 h-5 stroke-[3]" />
                    <span>Aplikacja jest zainstalowana</span>
                  </div>
                ) : (
                  <button
                    onClick={handleInstallClick}
                    className="w-full sm:w-auto bg-[#147A60] hover:bg-[#064743] text-white px-6 py-3.5 rounded-xl font-extrabold flex items-center justify-center gap-2.5 transition duration-300 shadow-md shadow-emerald-950/10 cursor-pointer text-sm sm:text-base"
                  >
                    <Download className="w-5 h-5" />
                    <span>Dodaj do ekranu głównego</span>
                  </button>
                )}
                
                <p className="text-xs text-gray-500 mt-2.5 font-medium">
                  {isIos 
                    ? "System iOS (Safari): wymaga ręcznego dodania" 
                    : "Instalacja jednym kliknięciem na Androidzie / Chrome"}
                </p>
              </div>

              {}
              <div className="hidden md:flex items-center gap-4 bg-white border border-[#D5EAE6]/60 rounded-2xl p-3 shadow-sm relative group">
                <div className="w-[80px] h-[80px] bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0 p-1">
                  <img
                    src={qrCodeUrl}
                    alt="Kod QR do dodania strony"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-slate-800 font-extrabold text-sm mb-1">
                    <QrCode className="w-4 h-4 text-[#147A60]" />
                    <span>Skanuj kod telefonem</span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium max-w-[150px] leading-relaxed">
                    Otwórz aparat w telefonie, aby szybko przejść na wersję mobilną.
                  </p>
                </div>

                {}
                <div className="absolute top-1/2 -right-10 -translate-y-1/2 translate-x-1 hidden lg:block pointer-events-none w-8 h-6.5 text-[#147A60] opacity-40">
                  <svg className="w-full h-full" viewBox="0 0 50 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 20 C 15 5, 35 5, 42 16" />
                    <polyline points="37 16 43 17 42 11" />
                  </svg>
                </div>
              </div>

            </div>
          </div>

          {}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-[190px] h-[380px] bg-slate-900 border-[6px] border-slate-800 rounded-[32px] shadow-[0_15px_35px_rgba(6,71,67,0.1)] overflow-hidden ring-1 ring-white/10">
              
              {}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-between px-2.5">
                <div className="w-0.75 h-0.75 bg-[#064743] rounded-full animate-pulse" />
                <div className="w-1.5 h-0.75 bg-slate-900 rounded-full" />
              </div>

              {}
              <div className="absolute top-0.5 left-0 right-0 h-5 px-4 flex items-center justify-between z-20 text-[8px] text-slate-800 font-bold select-none">
                <span>9:41</span>
                <div className="flex items-center gap-0.5">
                  <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2 11.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                  </svg>
                  <span>LTE</span>
                  <div className="w-3.5 h-1.75 border border-slate-800 rounded-xs p-px flex items-center">
                    <div className="h-full w-2.5 bg-slate-800 rounded-3xs" />
                  </div>
                </div>
              </div>

              {}
              <div className="w-full h-full bg-white pt-5 pb-2 px-3 flex flex-col justify-between overflow-y-auto select-none no-scrollbar">
                
                <div>
                  {}
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-100 mt-1.5 mb-2">
                    <div className="flex items-center gap-1">
                      <img
                        src="/logo.png"
                        alt="Lekarze i Terapeuci Logo"
                        className="w-4 h-4 object-contain rounded-md"
                      />
                      <span className="font-extrabold text-[8.5px] text-[#064743] tracking-tight">
                        Lekarze i Terapeuci
                      </span>
                    </div>
                  </div>

                  {}
                  <div className="bg-[#064743] text-white text-center py-1 px-1.5 rounded-md mb-2 text-[8px] font-bold tracking-tight">
                    W aplikacji 20% taniej!
                  </div>

                  {}
                  <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-[#EBF5F2] text-[#147A60] text-[7.5px] font-extrabold mb-2">
                    <span className="w-0.75 h-0.75 bg-[#10B981] rounded-full animate-ping" />
                    <span>• 12 lekarzy online</span>
                  </div>

                  {}
                  <h3 className="font-extrabold text-[#064743] text-[9.5px] leading-tight mb-0.5">
                    Wybierz usługę i wypełnij wywiad
                  </h3>
                  
                  {}
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-1.5 h-1.5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-[7.5px] text-slate-400 font-bold">150k+ pacjentów</span>
                  </div>

                  {}
                  <div className="space-y-1">
                    {[
                      { label: "E-recepta", sub: "Wypełnij formularz online" },
                      { label: "E-zwolnienie (L4)", sub: "Wizyta i zwolnienie lekarskie" },
                      { label: "Antykoncepcja", sub: "Przedłużenie recepty" }
                    ].map((item, idx) => (
                      <Link
                        key={idx}
                        href="/wypelnij-formularz"
                        className="w-full flex items-center justify-between p-2 bg-slate-50 hover:bg-[#EBF3F1] border border-slate-100 rounded-lg transition duration-200 text-left group/btn"
                      >
                        <div>
                          <div className="font-extrabold text-[8.5px] text-slate-800 tracking-tight">
                            {item.label}
                          </div>
                          <div className="text-[7.5px] text-slate-400 font-semibold mt-0.5">
                            {item.sub}
                          </div>
                        </div>
                        <div className="w-4 h-4 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover/btn:text-[#147A60] group-hover/btn:border-[#D5EAE6] transition duration-200">
                          <ArrowRight className="w-2 h-2" />
                        </div>
                      </Link>
                    ))}
                  </div>

                </div>

                {}
                <div className="text-center text-[6.5px] text-slate-400 font-bold border-t border-slate-100 pt-1.5 mt-1.5">
                  © Lekarze i Terapeuci
                </div>

              </div>

              {}
              <div className="absolute inset-0 border border-white/5 rounded-[26px] pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {}
      {showInstructions && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl relative border border-slate-100 animate-slideUp">
            
            <button
              onClick={() => setShowInstructions(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition"
              aria-label="Zamknij instrukcję"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-[#E4F2EE] text-[#147A60] rounded-full flex items-center justify-center mx-auto mb-3">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-slate-900">
                Dodaj stronę do ekranu głównego
              </h3>
              <p className="text-xs text-gray-500 font-medium mt-1">
                Instrukcja instalacji dla Twojego urządzenia
              </p>
            </div>

            <div className="space-y-4">
              
              {isIos ? (
                
                <>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 text-[#147A60] flex items-center justify-center flex-shrink-0 text-sm font-extrabold">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm mb-1">Otwórz menu udostępniania</h4>
                      <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                        Naciśnij ikonę <span className="inline-flex items-center gap-0.5 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200 text-slate-800 font-bold"><Share className="w-3.5 h-3.5" /> Udostępnij</span> Safari.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 text-[#147A60] flex items-center justify-center flex-shrink-0 text-sm font-extrabold">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm mb-1">Wybierz opcję zapisu</h4>
                      <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                        Wybierz opcję <span className="font-bold text-slate-800">"Do ekranu początkowego"</span> (<span className="font-bold text-slate-800">"Dodaj do ekranu głównego"</span> <span className="inline-flex items-center gap-0.5 bg-slate-100 px-1 py-0.5 rounded border border-slate-200 text-slate-800 font-bold"><Plus className="w-3.5 h-3.5" /></span>).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 text-[#147A60] flex items-center justify-center flex-shrink-0 text-sm font-extrabold">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm mb-1">Potwierdź dodanie</h4>
                      <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                        Kliknij <span className="font-bold text-emerald-700">"Dodaj"</span> w prawym górnym rogu ekranu.
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                
                <>
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 text-[#147A60] flex items-center justify-center flex-shrink-0 text-sm font-extrabold">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm mb-1">Znajdź menu przeglądarki</h4>
                      <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                        Kliknij ikonę trzech kropek w prawym górnym rogu.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 text-[#147A60] flex items-center justify-center flex-shrink-0 text-sm font-extrabold">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm mb-1">Wybierz zainstalowanie aplikacji</h4>
                      <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                        Kliknij <span className="font-bold text-slate-800">"Zainstaluj aplikację"</span> lub <span className="font-bold text-slate-800">"Dodaj do ekranu głównego"</span>.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 text-[#147A60] flex items-center justify-center flex-shrink-0 text-sm font-extrabold">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm mb-1">Skanowanie kodu QR</h4>
                      <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                        Na komputerze zeskanuj kod QR smartfonem, aby otworzyć stronę.
                      </p>
                    </div>
                  </div>
                </>
              )}

            </div>

            <button
              onClick={() => setShowInstructions(false)}
              className="w-full mt-6 bg-[#064743] hover:bg-[#147A60] text-white py-3 rounded-xl font-bold text-sm transition duration-200"
            >
              Rozumiem
            </button>

          </div>
        </div>
      )}
    </section>
  );
}
