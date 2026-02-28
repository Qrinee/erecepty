"use client";

import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ForWhoSection from "@/components/ForWhoSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import KnowledgeCenter from "@/components/KnowledgeCenter";
import TrustSection from "@/components/TrustSection";
import TrustStats from "@/components/TrustStats";
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header transparent={!scrolled} />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <TrustStats />
        <ForWhoSection />
        <TrustSection />
        <KnowledgeCenter/>
        <FAQSection/>
      </main>
      <Footer />
    </>
  );
}
