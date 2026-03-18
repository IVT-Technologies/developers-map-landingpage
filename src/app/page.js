
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import PropertyManagement from "@/components/PropertyManagement";
import Roles from "@/components/Roles";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import CtaBanner from "@/components/CtaBanner";

export const metadata = {
  title: "Real Estate Brochure Platform",
  description:
    "Developers Map is a multilingual real estate brochure and property management platform for developers, agencies, and agents.",
  keywords: [
    "real estate landing page",
    "property management platform",
    "multilingual brochures",
    "real estate software",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
   <div className="bg-slate-50 ">
    <HeroSection>
      <Navbar />
    </HeroSection>
    <Features />
    <Roles />
    <HowItWorks />
    <PropertyManagement />
    <SubscriptionPlans />
    <CtaBanner />
    <Footer />
    </div>
  );
}
