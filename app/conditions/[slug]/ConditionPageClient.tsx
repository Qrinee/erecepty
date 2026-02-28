// app/conditions/[slug]/ConditionPageClient.tsx
'use client';

import Link from "next/link";
import { ConditionPageData } from "@/app/types/condition";
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  Users,
  TrendingUp,
  Pill,
  Stethoscope,
  FileText,
  Calendar,
  BookOpen,
  Brain,
  Activity,
  AlertCircle,
  TrendingDown
} from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Floating abstract elements
function FloatingElements() {
  return (
    <>
      <Header />
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-gradient-to-tr from-cyan-100/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-40 right-1/4 w-40 h-40 bg-gradient-to-r from-indigo-100/10 to-transparent rounded-full blur-3xl animate-pulse delay-500" />
      </div>
    </>
  );
}

// Glass card component
function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`backdrop-blur-xl bg-white/70 border border-white/20 rounded-3xl shadow-lg shadow-blue-100/30 ${className}`}>
      {children}
    </div>
  );
}

// Animated stat card
function StatCard({ stat, label, icon: Icon }: { stat: string; label: string; icon: any }) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
      <GlassCard className="p-8 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-200/40">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl mb-6">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
        <div className="text-3xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          {stat}
        </div>
        <div className="text-gray-600">{label}</div>
      </GlassCard>
    </div>
  );
}

// Treatment card with hover animation
function TreatmentCard({ treatment }: { treatment: any }) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
      <GlassCard className="p-8 transition-all duration-500 hover:shadow-xl hover:shadow-green-200/40">
        <div className="flex items-center mb-8">
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-4 rounded-2xl mr-6">
            <Pill className="w-8 h-8 text-green-600" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{treatment.name}</h3>
            <p className="text-gray-600 mt-2">{treatment.type}</p>
          </div>
        </div>
        
        <p className="text-gray-600 mb-8 leading-relaxed">{treatment.description}</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
              <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
              Korzyści
            </h4>
            <ul className="space-y-4">
              {treatment.pros.map((pro: string, idx: number) => (
                <li key={idx} className="flex items-start group/item">
                  <div className="bg-green-100 rounded-lg p-2 mr-4  transition-transform">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700 pt-1">{pro}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
              <XCircle className="w-5 h-5 mr-3 text-red-500" />
              Ograniczenia
            </h4>
            <ul className="space-y-4">
              {treatment.cons.map((con: string, idx: number) => (
                <li key={idx} className="flex items-start group/item">
                  <div className="bg-red-100 rounded-lg p-2 mr-4  transition-transform">
                    <XCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <span className="text-gray-700 pt-1">{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

// FAQ component
function FAQItem({ faq, index }: { faq: any; index: number }) {
  return (
    <GlassCard className="p-8 mb-6 transition-all duration-300  hover:shadow-xl">
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-6">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl flex items-center justify-center">
            <span className="text-xl font-bold text-blue-600">0{index + 1}</span>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
          <div className="text-gray-600 leading-relaxed space-y-4">
            {faq.answer.split('\n').map((paragraph: string, i: number) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

// Timeline step component
function TimelineStep({ step, index }: { step: any; index: number }) {
  return (
    <div className="relative group">
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-cyan-200 group-last:hidden" />
      <div className="relative ml-12 pb-12 group-last:pb-0 ">
        <div className="absolute -left-12 top-0 ">
          <div className="w-12 h-12 bg-gradient-to-br  from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
            <span className="text-white font-bold text-lg ">{step.step}</span>
          </div>
        </div>
        <div className="pt-2">
          <h4 className="text-xl font-bold text-gray-900 mb-3 ml-3">{step.title}</h4>
          <p className="text-gray-600 mb-4">{step.description}</p>
          {step.duration && (
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full">
              <Clock className="w-4 h-4 mr-2 text-blue-600" />
              <span className="text-sm text-blue-600">{step.duration}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Research citation component
function ResearchCitation({ citation }: { citation: any }) {
  return (
    <GlassCard className="p-6 mb-4 transition-all duration-300  hover:shadow-xl">
      <div className="flex items-start">
        <FileText className="w-5 h-5 text-blue-600 mt-1 mr-4 flex-shrink-0" />
        <div>
          <p className="text-gray-700 mb-2">{citation.text}</p>
          <p className="text-sm text-gray-500">{citation.source}</p>
          {citation.year && (
            <span className="text-xs text-gray-400 ml-2">({citation.year})</span>
          )}
        </div>
      </div>
    </GlassCard>
  );
}

export default function ConditionPageClient({ condition }: { condition: ConditionPageData }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-full mb-8">
                <BookOpen className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-blue-700">{condition.category}</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                  {condition.title}
                </span>
                <br />
                <span className="text-gray-900">{condition.subtitle}</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                {condition.heroDescription}
              </p>
              
              {/* Key facts */}
              <div className="grid grid-cols-2 gap-4 mb-12">
                {condition.heroStats.map((stat, index) => (
                  <div 
                    key={index}
                    className="backdrop-blur-xl bg-white/70 border border-white/20 rounded-2xl p-6 shadow-lg shadow-blue-100/30 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.stat}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Featured image or illustration */}
            <div className="relative">
              <GlassCard className="p-8">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
                  <Brain className="w-32 h-32 text-blue-600 opacity-50" />
                </div>
                <div className="mt-6 text-center">
                  <p className="text-gray-600 text-sm">Ilustracja poglądowa</p>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Condition Overview */}
            <section>
              <GlassCard className="p-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-12">
                  Co wiemy o <span className="text-blue-600">{condition.subtitle}</span>?
                </h2>
                
                <div className="prose prose-lg max-w-none text-gray-600 mb-12">
                  <p className="text-xl leading-relaxed">
                    {condition.conditionDescription}
                  </p>
                </div>

                {/* Symptoms Grid */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                    <Activity className="w-6 h-6 mr-3 text-red-500" />
                    Charakterystyczne objawy
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {condition.symptoms.map((symptom, index) => (
                      <div 
                        key={index}
                        className="group flex items-center p-4 bg-gradient-to-r from-red-50/50 to-pink-50/50 rounded-2xl border border-red-100/50 transition-all duration-300  hover:shadow-lg"
                      >
                        <div className="w-3 h-3 bg-red-500 rounded-full mr-4 group-hover:scale-150 transition-transform" />
                        <span className="text-gray-700">{symptom}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Causes & Risk Factors */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                      <TrendingUp className="w-6 h-6 mr-3 text-blue-600" />
                      Przyczyny
                    </h3>
                    <ul className="space-y-4">
                      {condition.causes.map((cause, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4" />
                          <span className="text-gray-600">{cause}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                      <AlertCircle className="w-6 h-6 mr-3 text-purple-600" />
                      Czynniki ryzyka
                    </h3>
                    <ul className="space-y-4">
                      {condition.riskFactors.map((factor, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-4" />
                          <span className="text-gray-600">{factor}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </section>

            {/* Available Methods */}
            <section>
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl flex items-center justify-center mr-6">
                    <Stethoscope className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900">Dostępne metody</h2>
                    <p className="text-gray-600 mt-2">Przegląd opcji i ich charakterystyka</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                {condition.treatmentOptions.map((treatment, index) => (
                  <TreatmentCard key={index} treatment={treatment} />
                ))}
              </div>
            </section>

            {/* Research & Studies */}
            <section>
              <GlassCard className="p-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <FileText className="w-8 h-8 mr-4 text-blue-600" />
                  Badania i statystyki
                </h3>
                
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Kluczowe badania</h4>
                  <div className="space-y-4">
                    {condition.researchCitations?.map((citation, index) => (
                      <ResearchCitation key={index} citation={citation} />
                    ))}
                  </div>
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                  {condition.statistics.map((stat, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.description}</div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Historical Timeline */}
            <section>
              <GlassCard className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <Calendar className="w-6 h-6 mr-3 text-blue-600" />
                  Rozwój metod
                </h3>
                <div className="space-y-2">
                  {condition.treatmentProcess.map((step, index) => (
                    <TimelineStep key={index} step={step} index={index} />
                  ))}
                </div>
              </GlassCard>
            </section>

            {/* Indications */}
            <section>
              <GlassCard className="p-8 border-green-200/50">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3 text-green-600" />
                  Wskazania
                </h3>
                <ul className="space-y-4">
                  {condition.indications.map((indication, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 flex-shrink-0" />
                      <span className="text-gray-600">{indication}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </section>

            {/* Contraindications */}
            <section>
              <GlassCard className="p-8 border-red-200/50">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <XCircle className="w-6 h-6 mr-3 text-red-500" />
                  Przeciwwskazania
                </h3>
                <ul className="space-y-4">
                  {condition.contraindications.map((contraindication, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0" />
                      <span className="text-gray-600">{contraindication}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </section>

            {/* Related Conditions */}
            <section>
              <GlassCard className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingDown className="w-6 h-6 mr-3 text-purple-600" />
                  Powiązane tematy
                </h3>
                <div className="flex flex-wrap gap-3">
                  {condition.relatedConditions.map((related, index) => (
                    <Link
                      key={index}
                      href={`/conditions/${related}`}
                      className="px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full text-sm hover:scale-105 transition-transform"
                    >
                      {related}
                    </Link>
                  ))}
                </div>
              </GlassCard>
            </section>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Najczęstsze pytania
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odpowiedzi na wątpliwości dotyczące tematu
            </p>
          </div>
          
          <div>
            {condition.faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </section>

        {/* Further Reading */}
        <section className="mt-24">
          <GlassCard className="p-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Źródła i materiały
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Literatura medyczna</h4>
                  <p className="text-gray-600">Podręczniki i publikacje naukowe</p>
                </div>
                
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <FileText className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Badania kliniczne</h4>
                  <p className="text-gray-600">Randomizowane badania kontrolowane</p>
                </div>
                
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Organizacje zdrowotne</h4>
                  <p className="text-gray-600">Wytyczne towarzystw medycznych</p>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Materiały edukacyjne są regularnie aktualizowane w oparciu o najnowsze 
                  doniesienia naukowe i wytyczne medyczne.
                </p>
              </div>
            </div>
          </GlassCard>
        </section>
      </main>
      <Footer/>

      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}