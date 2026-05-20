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
import ForCompaniesSection from "@/components/ForCompaniesSection";
import ContactSection from "@/components/ContactSection";
import PricingSection from "@/components/PricingSection";
import AboutUsSection from "@/components/AboutUsSection";
import ServiceFormsSection from "@/components/ServiceFormsSection";
import { useEffect, useState } from 'react';

export default function Home() {



  return (
    <>
      <Header transparent={false} />
      <div className="mb-20"></div>
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <ServicesPanel />
        <ServicesSection />
        <SpecializationsSection />
        <KnowledgeCenter />
        <ReviewsSection />
        <ForCompaniesSection />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
