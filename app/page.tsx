"use client";

import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ForWhoSection from "@/components/ForWhoSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import KnowledgeCenter from "@/components/KnowledgeCenter";
import TrustSection from "@/components/TrustSection";
import TrustStats from "@/components/TrustStats";
import ServicesPanel from "@/components/ServicesPanel";
import ServicesSection from "@/components/ServicesSection";
import SpecializationsSection from "@/components/SpecializationsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ReviewsSection from "@/components/ReviewsSection";
import AppPromotionSection from "@/components/AppPromotionSection";
import ForCompaniesSection from "@/components/ForCompaniesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ContactSection from "@/components/ContactSection";
import PricingSection from "@/components/PricingSection";
import AboutUsSection from "@/components/AboutUsSection";
import ServiceFormsSection from "@/components/ServiceFormsSection";
import SpecializationsCards from "@/components/SpecializationsCards";
import { useEffect, useState } from 'react';
import ForWomanAndMen from "@/components/ForWomanAndMen";

export default function Home() {
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const id = hash.replace('#', '');
          const element = document.getElementById(id);
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          }
        }, 100);
      }
    };

    
    handleHash();
  }, []);
  return (
    <>
      <Header transparent={false} />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <ForWomanAndMen />
        <SpecializationsCards />
        <ServicesPanel />
        <ServicesSection />
        {}
        <HowItWorksSection />
        <ForWhoSection />
        <KnowledgeCenter />
        <ReviewsSection />
        <AppPromotionSection />
        <ForCompaniesSection />
        <WhyChooseUsSection />
        <TrustSection />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
