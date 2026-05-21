import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  Search,
  FileText,
  Stethoscope,
  Pill,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Activity,
  Calendar,
  Video,
  ChevronRight
} from "lucide-react";

export default function JakToDzialaPage() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Wyszukaj lek",
      description: "Wpisz nazwę leku lub substancji czynnej w wyszukiwarce. Podaj również dawkę i opakowanie.",
      color: "bg-[#064743]"
    },
    {
      number: "02",
      icon: FileText,
      title: "Wypełnij formularz",
      description: "Uzupełnij krótki formularz medyczny z informacjami o Twoim stanie zdrowia i historii leczenia.",
      color: "bg-purple-500"
    },
    {
      number: "03",
      icon: Stethoscope,
      title: "Konsultacja lekarska",
      description: "Lekarz przeanalizuje Twoje zgłoszenie i udzieli konsultacji na podstawie Twoich potrzeb.",
      color: "bg-green-500"
    },
    {
      number: "04",
      icon: Pill,
      title: "Otrzymaj poradę",
      description: "Otrzymasz szczegółową poradę SMS-em i e-mailem. Wszystko w bezpieczny i dyskretny sposób.",
      color: "bg-orange-500"
    }
  ];

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        {/* Hero Section with Illustration */}
        <section className="relative bg-gradient-to-br from-[#DAE9E6] via-white to-purple-50 overflow-hidden pt-[110px] sm:pt-[120px] lg:pt-[130px]">
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#DAE9E6] rounded-full opacity-30 blur-2xl" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-200 rounded-full opacity-30 blur-3xl" />
          <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-[#064743] rounded-full opacity-50" />
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-50" />

          <div className="max-w-7xl mx-auto px-4 py-20 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <span className="inline-flex items-center gap-2 bg-[#DAE9E6] text-[#064743] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                  <Clock size={16} />
                  Nawet w 15 minut
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  Jak działa{" "}
                  <span className="text-[#064743]">konsultacja online?</span>
                </h1>

                <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 mb-8">
                  To proste! Wystarczą 4 kroki, aby uzyskać profesjonalną poradę
                  bez wychodzenia z domu, bez kolejek i bez zbędnego stresu.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="#kroki"
                    className="inline-flex items-center justify-center gap-2 bg-[#064743] text-white px-6 py-3 rounded-full font-medium hover:bg-[#1A5D54] transition shadow-lg shadow-[#064743]/25"
                  >
                    Zobacz jak to działa
                    <ArrowRight size={18} />
                  </a>
                </div>


              </div>

              {/* Phone mockup illustration */}
              <div className="relative hidden lg:block">
                <div className="relative mx-auto w-72 h-[500px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Phone screen mockup */}
                    <div className="p-4 h-full flex flex-col">
                      <div className="bg-[#064743] text-white p-4 rounded-2xl mb-4">
                        <div className="text-sm opacity-80">Twoja konsultacja</div>
                        <div className="text-2xl font-bold mt-1">Porada</div>
                      </div>
                      <div className="space-y-3 flex-1">
                        <div className="bg-green-50 border border-green-200 p-3 rounded-xl">
                          <div className="flex items-center gap-2 text-green-700 font-medium">
                            <CheckCircle size={16} />
                            Wystawiona
                          </div>
                          <div className="text-sm text-green-600 mt-1">Porada: Szczegółowa konsultacja</div>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-xl">
                          <div className="text-sm text-slate-500">Realizacja:</div>
                          <div className="font-medium text-slate-700">Dowolna apteka w PL</div>
                        </div>
                        <div className="bg-slate-50 p-3 rounded-xl">
                          <div className="text-sm text-slate-500">Kod:</div>
                          <div className="font-mono font-bold text-slate-900">ABCD 1234 EFGH</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-8 bg-white p-3 rounded-xl shadow-lg animate-bounce">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="text-green-600" size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-900">Sukces!</div>
                      <div className="text-xs text-slate-500">Porada gotowa</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-8 bg-white p-3 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#DAE9E6] rounded-full flex items-center justify-center">
                      <Clock className="text-[#064743]" size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-900">15 minut</div>
                      <div className="text-xs text-slate-500">Czas realizacji</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




        {/* Steps Section */}
        <section id="kroki" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                4 proste kroki do recepty
              </h2>
              <p className="text-slate-600 max-w-xl mx-auto">
                Cały proces jest intuicyjny i zajmuje tylko kilka minut.
                Nie musisz instalować żadnych aplikacji.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-20 left-1/2 w-full h-1 bg-gradient-to-r from-[#064743]/30 to-purple-200 -translate-y-1/2 z-0" />
                  )}

                  <div className="relative bg-white rounded-2xl border-2 border-slate-100 p-6 h-full hover:border-[#1A5D54] hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-14 h-14 flex items-center justify-center rounded-xl ${step.color} text-white shadow-lg`}>
                        <step.icon size={28} />
                      </div>
                      <span className="text-5xl font-bold text-slate-100">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="font-bold text-xl text-slate-900 mb-2">
                      {step.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>

                    {index < steps.length - 1 && (
                      <div className="lg:hidden absolute bottom-6 right-4 text-[#064743]/60">
                        <ChevronRight size={24} />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Process visualization */}
            <div className="mt-16 bg-gradient-to-r from-[#DAE9E6] to-purple-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-4">
                    <Video className="text-[#064743]" size={32} />
                  </div>
                  <h4 className="font-semibold text-slate-900">Bez wizyty</h4>
                  <p className="text-sm text-slate-600 mt-1">Rozmowa online</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-4">
                    <Activity className="text-green-600" size={32} />
                  </div>
                  <h4 className="font-semibold text-slate-900">Bezpiecznie</h4>
                  <p className="text-sm text-slate-600 mt-1">Lekarze z PWZ</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-4">
                    <Calendar className="text-purple-600" size={32} />
                  </div>
                  <h4 className="font-semibold text-slate-900">24/7</h4>
                  <p className="text-sm text-slate-600 mt-1">Całą dobę</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        {/* <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Co mówią nasi użytkownicy?
              </h2>
              <p className="text-slate-600">
                Odwiedzający nas pacjenci doceniają naszą platformę za wygodę i profesjonalizm
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4">"{testimonial.text}"</p>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section> */}



        {/* Contact Section */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Masz pytania?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Skontaktuj się z nami - jesteśmy do Twojej dyspozycji
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <a href="tel:+48000000000" className="bg-white/10 hover:bg-white/20 rounded-2xl p-6 transition">
                <Phone className="mx-auto mb-3 text-[#064743]" size={32} />
                <div className="font-semibold">Telefon</div>
                <div className="text-sm text-slate-300">+48 000 000 000</div>
              </a>
              <a href="mailto:kontakt@platforma.pl" className="bg-white/10 hover:bg-white/20 rounded-2xl p-6 transition">
                <Mail className="mx-auto mb-3 text-[#064743]" size={32} />
                <div className="font-semibold">Email</div>
                <div className="text-sm text-slate-300">kontakt@platforma.pl</div>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}


        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#064743] to-[#1A5D54] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full" />
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full" />
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="max-w-3xl mx-auto px-4 text-center relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Gotowy na konsultację online?
            </h2>
            <p className="text-[#DAE9E6] mb-8 text-lg">
              Nie czekaj w kolejkach. Uzyskaj profesjonalną poradę w 15 minut,
              bez wychodzenia z domu.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 bg-white text-[#064743] px-8 py-4 rounded-full font-medium hover:bg-[#DAE9E6] transition shadow-xl"
            >
              Zacznij konsultację
              <ArrowRight size={20} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
