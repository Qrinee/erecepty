import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ForWhoSection from "@/components/ForWhoSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import KnowledgeCenter from "@/components/KnowledgeCenter";
import TrustSection from "@/components/TrustSection";
import TrustStats from "@/components/TrustStats";


export default function Home() {
  return (
    <>
      <Header />
      <main>
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
