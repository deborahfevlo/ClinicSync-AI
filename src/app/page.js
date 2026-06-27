import Navbar       from "@/components/layout/Navbar";
import Footer       from "@/components/layout/Footer";
import Hero         from "@/components/landing/Hero";
import LogoBar      from "@/components/landing/LogoBar";
import BuiltFor     from "@/components/landing/BuiltFor";
import Stats        from "@/components/landing/Stats";
import TeamFeatures from "@/components/landing/TeamFeatures";
import HowItWorks   from "@/components/landing/HowItWorks";
import Pricing      from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import FAQSection   from "@/components/landing/FAQSection";
import CTABanner    from "@/components/landing/CTABanner";

export const metadata = {
  title:       "ClinicSync AI — Reduce Unnecessary ER Visits with AI",
  description: "AI-powered symptom assessment and predictive scheduling for clinics across Ghana.",
};

export default function LandingPage() {
  return (
    <main className="font-sans text-gray-900">
      <Navbar />
      <Hero />
      <LogoBar />
      <BuiltFor />
      <Stats />
      <TeamFeatures />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQSection />
      <CTABanner />
      <Footer />
    </main>
  );
}
