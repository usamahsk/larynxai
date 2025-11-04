import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Demo from "@/components/Demo";
import Pricing from "@/components/Pricing";
import CaseStudies from "@/components/CaseStudies";
import Integrations from "@/components/Integrations";
import Security from "@/components/Security";
import Resources from "@/components/Resources";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingChatBot from "@/components/FloatingChatBot";
import AnnouncementBar from "@/components/AnnouncementBar";
import MobileCTA from "@/components/MobileCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Navigation />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Demo />
        <Pricing />
        <CaseStudies />
        <Integrations />
        <Security />
        <Resources />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingChatBot />
      <MobileCTA />
    </div>
  );
};

export default Index;
