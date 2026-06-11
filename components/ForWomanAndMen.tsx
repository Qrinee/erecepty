"use client"

import { ArrowRight, Check, Clock, FileText, FlaskConical, MessageSquarePlus, ShieldCheck, TrendingUp, UserCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ForWomanAndMen() {
    return (
        <section className="max-w-[100vw] pt-5 mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="grid gap-3 lg:grid-cols-3">

                {/* Card 1: Tabletka "dzień po" */}
                <div className="bg-[#fef5f8] rounded-[32px] border border-slate-100 shadow-sm flex flex-col justify-between overflow-hidden group hover:shadow-xl hover:border-rose-100 transition-all duration-300 relative">

                    {/* Header with integrated image overlay */}
                    <div className="relative pt-8 pl-8 pb-8 pr-[25%] lg:pr-[35%] min-h-[220px] flex flex-col justify-center flex-grow z-20" >
                        <div className="relative z-20">
                            {/* Badge & Title */}
                            <div className="flex justify-start mb-4">
                                <span className="bg-rose-50 border border-rose-100 text-rose-500 text-xs font-extrabold px-3 py-1 rounded-lg tracking-wider uppercase">
                                    Dla kobiet
                                </span>
                            </div>

                            <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-2">
                                Tabletka <br /> „dzień po”
                            </h2>

                            <p className="text-sm font-extrabold text-rose-500 leading-snug mb-3">
                                Dyskretna pomoc, kiedy liczy się czas.
                            </p>
                            <div>
                                {/* Checklist */}
                                <ul className="space-y-3 mb-8">
                                    {[
                                        "Konsultacja online 24/7",
                                        "E-recepta w kilka minut",
                                        "Dyskrecja i pełne bezpieczeństwo",
                                        "Bez konieczności wizyty stacjonarnej"
                                    ].map((text, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center flex-shrink-0">
                                                <Check size={12} strokeWidth={3} />
                                            </div>
                                            <span className="text-sm font-semibold text-slate-700">{text}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                            <div className="mt-2 relative z-20">
                                <Link href="/wypelnij-formularz?service=e-Recepta+online" className="bg-[#E11D48] hover:bg-[#BE123C] text-white text-sm font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition-colors w-max shadow-sm">
                                    Umów konsultację od 45zł<ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Absolute Image Overlay on the right */}
                        <div className="absolute top-0 right-0 bottom-0 w-[50%] overflow-hidden pointer-events-none select-none z-10">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/tabletkadzienpo.jpeg"
                                    alt="Tabletka dzień po"
                                    fill
                                    priority
                                    className="object-cover object-center scale-105 transition-transform duration-500"
                                />
                                {/* Left-to-right fade overlay using gradient */}
                                <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#fef5f8]  to-transparent z-10" />
                            </div>
                        </div>
                    </div>



                </div>

                {/* Card 2: Antykoncepcja */}
                <div className="bg-[#feeff2] rounded-[32px] border border-slate-100 shadow-sm flex flex-col justify-between overflow-hidden group hover:shadow-xl hover:border-rose-100 transition-all duration-300 relative">

                    {/* Header with integrated image overlay */}
                    <div className="relative pt-8 pl-8 pb-8 pr-[25%] lg:pr-[35%] min-h-[250px] flex flex-col justify-center flex-grow z-20">
                        <div className="relative z-20">
                            {/* Badge & Title */}
                            <div className="flex justify-start mb-4">
                                <span className="bg-rose-50 border border-rose-100 text-rose-500 text-xs font-extrabold px-3 py-1 rounded-lg tracking-wider uppercase">
                                    Dla kobiet
                                </span>
                            </div>

                            <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-2">
                                Antykoncepcja
                            </h2>

                            <p className="text-sm font-extrabold text-rose-500 leading-snug mb-3">
                                Dobierz antykoncepcję dopasowaną do Ciebie.
                            </p>

                            <div>
                                {/* Checklist */}
                                <ul className="space-y-3 mb-8">
                                    {[
                                        "Dobór metod antykoncepcji",
                                        "E-recepta na tabletki antykoncepcyjne",
                                        "Regularne kontrole i wsparcie lekarza",
                                        "Dyskrecja i wygoda konsultacji online"
                                    ].map((text, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center flex-shrink-0">
                                                <Check size={12} strokeWidth={3} />
                                            </div>
                                            <span className="text-sm font-semibold text-slate-700">{text}</span>
                                        </li>
                                    ))}
                                </ul>


                            </div>

                            <div className="mt-2 relative z-20">
                                <Link href="/wypelnij-formularz?service=Wizyta+lekarska+ogólna" className="bg-[#E11D48] hover:bg-[#BE123C] text-white text-sm font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition-colors w-max shadow-sm">
                                    Umów konsultację od 59zł <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Absolute Image Overlay on the right */}
                        <div className="absolute top-0 right-0 bottom-0 w-[50%] overflow-hidden pointer-events-none select-none z-10">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/antykoncepcja.jpeg"
                                    alt="Antykoncepcja"
                                    fill
                                    priority
                                    className="object-cover object-center scale-105 transition-transform duration-500"
                                />
                                {/* Left-to-right fade overlay using gradient */}
                                <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#feeff2] to-transparent z-10" />
                            </div>
                        </div>
                    </div>


                </div>

                {/* Card 3: Testosteron */}
                <div className="bg-[#f1f4fd] rounded-[32px] border border-slate-100 shadow-sm flex flex-col justify-between overflow-hidden group hover:shadow-xl hover:border-blue-100 transition-all duration-300 relative">

                    {/* Header with integrated image overlay */}
                    <div className="relative pt-8 pl-8 pb-8 pr-[25%] lg:pr-[35%] min-h-[250px] flex flex-col justify-center flex-grow z-20">
                        <div className="relative z-20">
                            {/* Badge & Title */}
                            <div className="flex justify-start mb-4">
                                <span className="bg-blue-50 border border-blue-100 text-blue-500 text-xs font-extrabold px-3 py-1 rounded-lg tracking-wider uppercase">
                                    Dla mężczyzn
                                </span>
                            </div>

                            <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-2">
                                TRT Terapia zastępcza Testosteronem
                            </h2>

                            <p className="text-sm font-extrabold text-blue-500 leading-snug mb-3">
                                Zadbaj o energię, siłę i dobre samopoczucie.
                            </p>
                            <div>
                                {/* Checklist */}
                                <ul className="space-y-3 mb-8">
                                    {[
                                        "Badanie i konsultacja online",
                                        "Terapia testosteronem dopasowana do Ciebie",
                                        "Poprawa energii, libido i koncentracji",
                                        "Dyskretna i bezpieczna opieka medyczna"
                                    ].map((text, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center flex-shrink-0">
                                                <Check size={12} strokeWidth={3} />
                                            </div>
                                            <span className="text-sm font-semibold text-slate-700">{text}</span>
                                        </li>
                                    ))}
                                </ul>


                            </div>

                            <div className="mt-2 relative z-20">
                                <Link href="/wypelnij-formularz?service=Wizyta+lekarska+ogólna" className="bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition-colors w-max shadow-sm">
                                    Umów konsultację od 199zł <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Absolute Image Overlay on the right */}
                        <div className="absolute top-0 right-0 bottom-0 w-[50%] overflow-hidden pointer-events-none select-none z-10">
                            <div className="relative w-full h-full">
                                <Image
                                    src="/testosteron.jpeg"
                                    alt="Testosteron"
                                    fill
                                    priority
                                    className="object-cover object-center scale-105 transition-transform duration-500"
                                />
                                {/* Left-to-right fade overlay using gradient */}
                                <div className="absolute inset-y-0 opacity-80 left-0 w-full bg-gradient-to-r from-[#f1f4fd] to-transparent z-10" />
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </section>
    );
}