"use client"

import { ArrowRight, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SpecializationsCards() {
    const cards = [
        {
            id: 1,
            badge: "Dla pacjentów",
            price: "259",
            title: "Psychiatra\nOnline",
            description: "Szybka i dyskretna pomoc psychiatryczna bez wychodzenia z domu.",
            image: "/ph/1.jpeg",
            bgColor: "#f3f0ff",
            badgeBg: "bg-purple-50",
            badgeBorder: "border-purple-100",
            badgeText: "text-purple-600",
            buttonBg: "bg-purple-600 hover:bg-purple-700",
            checkBg: "bg-purple-50",
            checkText: "text-purple-600",
            features: [
                "Konsultacja online 24/7",
                "E-recepta i zalecenia",
                "Wsparcie w depresji, lęku i bezsenności",
                "Pełna dyskrecja i komfort",
            ]
        },
        {
            id: 2,
            price: "129",
            badge: "Dla pacjentów",
            title: "Leczenie\notyłości",
            description: "Kompleksowe wsparcie w redukcji masy ciała i poprawie zdrowia.",
            image: "/ph/2.jpeg",
            bgColor: "#fff7ed",
            badgeBg: "bg-orange-50",
            badgeBorder: "border-orange-100",
            badgeText: "text-orange-600",
            buttonBg: "bg-orange-500 hover:bg-orange-600",
            checkBg: "bg-orange-50",
            checkText: "text-orange-600",
            features: [
                "Indywidualny plan leczenia",
                "Konsultacja z lekarzem online",
                "Dobór terapii i kontrola postępów",
                "Bezpieczne i skuteczne wsparcie",
            ]
        },
        {
            id: 3,
            badge: "Dla pacjentów",
            title: "Psycholog /\nTerapeuta",
            price: "169",
            description: "Profesjonalne wsparcie emocjonalne i terapia online dla lepszego samopoczucia.",
            image: "/ph/3.jpeg",
            bgColor: "#f0fdf4",
            badgeBg: "bg-teal-50",
            badgeBorder: "border-teal-100",
            badgeText: "text-teal-600",
            buttonBg: "bg-teal-600 hover:bg-teal-700",
            checkBg: "bg-teal-50",
            checkText: "text-teal-600",
            features: [
                "Konsultacja online",
                "Wsparcie w stresie i lęku",
                "Terapia indywidualna",
                "Bezpieczna i dyskretna pomoc",
            ]
        }
    ]

    return (
        <section className="max-w-[100vw] pt-5 mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="grid gap-3 lg:grid-cols-3">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="rounded-[32px] border border-slate-100 shadow-sm flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-all duration-300 relative"
                        style={{ backgroundColor: card.bgColor }}
                    >
                        {/* Header with integrated image overlay */}
                        <div className="relative pt-8 pl-8 pb-8 pr-[25%] lg:pr-[35%] min-h-[250px] flex flex-col justify-center flex-grow z-20">
                            <div className="relative z-20">
                                {/* Badge & Title */}
                                <div className="flex justify-start mb-4">
                                    <span className={`${card.badgeBg} border ${card.badgeBorder} ${card.badgeText} text-xs font-extrabold px-3 py-1 rounded-lg tracking-wider uppercase`}>
                                        {card.badge}
                                    </span>
                                </div>

                                <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-2 leading-tight">
                                    {card.title}
                                </h2>

                                <p className={`text-sm font-extrabold ${card.badgeText} leading-snug mb-3`}>
                                    {card.description}
                                </p>
                                <div>
                                    {/* Checklist */}
                                    <ul className="space-y-3 mb-8">
                                        {card.features.map((text, idx) => (
                                            <li key={idx} className="flex items-center gap-3">
                                                <div className={`w-5 h-5 rounded-full ${card.checkBg} ${card.checkText} flex items-center justify-center flex-shrink-0`}>
                                                    <Check size={12} strokeWidth={3} />
                                                </div>
                                                <span className="text-sm font-semibold text-slate-700">{text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-2 relative z-20">
                                    <Link
                                        href="/wypelnij-formularz?service=Wizyta+lekarska+ogólna"
                                        className={`${card.buttonBg} text-white text-sm font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition-colors w-max shadow-sm`}
                                    >
                                        Umów konsultację {card.price}zł <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>

                            {/* Absolute Image Overlay on the right */}
                            <div className="absolute top-0 right-0 bottom-0 w-[50%] overflow-hidden pointer-events-none select-none z-10">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        priority
                                        className="object-cover object-center scale-105 transition-transform duration-500"
                                    />
                                    {/* Left-to-right fade overlay using gradient */}
                                    <div
                                        className="absolute inset-y-0 left-0 w-full bg-gradient-to-r to-transparent z-10"
                                        style={{
                                            backgroundImage: `linear-gradient(to right, ${card.bgColor}, transparent)`
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
