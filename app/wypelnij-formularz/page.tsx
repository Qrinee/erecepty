"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  KonsultacjaForm,
  EReceptaForm,
  L4Form,
  KontynuacjaForm,
  servicesData
} from "@/components/ServiceFormsSection";

function WypelnijFormularzInner() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") || "Wizyta lekarska ogólna";

  let activeIndex = 0;
  if (serviceParam === "e-Recepta online") activeIndex = 1;
  else if (serviceParam === "L4 online") activeIndex = 2;
  else if (serviceParam === "Kontynuacja leczenia") activeIndex = 3;

  const svc = servicesData[activeIndex];
  const Icon = svc.icon;

  return (
    <div className="min-h-screen bg-[#F8FAFB] flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-16 px-4 sm:px-8 xl:px-16 w-full max-w-7xl mx-auto">
        <div className="bg-white rounded-[24px] border border-slate-100 shadow-[0_8px_40px_rgba(0,0,0,0.04)] overflow-hidden">
          {/* Form header */}
          <div className={`${svc.headerBg} px-6 py-5 border-b border-slate-100 flex items-center gap-4`}>
            <div className={`w-10 h-10 rounded-full ${svc.iconBg} flex items-center justify-center flex-shrink-0 shadow-sm`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className={`text-lg font-extrabold text-slate-900`}>
                <span className={svc.numColor}>{svc.num}</span> {svc.label.toUpperCase()}
              </h3>
              <p className="text-xs text-slate-500 font-semibold mt-0.5">{svc.subtitle}</p>
            </div>
          </div>

          {/* Form body */}
          <div className="p-6">
            {activeIndex === 0 && <KonsultacjaForm />}
            {activeIndex === 1 && <EReceptaForm />}
            {activeIndex === 2 && <L4Form />}
            {activeIndex === 3 && <KontynuacjaForm />}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function WypelnijFormularzPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#F8FAFB] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#DAE9E6] border-t-[#064743] rounded-full animate-spin" />
      </div>
    }>
      <WypelnijFormularzInner />
    </Suspense>
  );
}
