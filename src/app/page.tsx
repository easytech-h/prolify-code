"use client";

import Navigation from "@/components/sections/navigation";
import Hero from "@/components/sections/hero";
import WhyProlify from "@/components/sections/why-prolify";
import ResourcesGuides from "@/components/sections/resources-guides";
import PartnerPerks from "@/components/sections/partner-perks";
import ProlifyPricing from "@/components/sections/prolify-pricing";
import Features from "@/components/sections/features";
import Integrations from "@/components/sections/integrations";
import Pricing from "@/components/sections/pricing";
import FAQ from "@/components/sections/faq";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFC107]/30 via-white to-white dark:from-[#FFD54F]/20 dark:via-[#0a0a0a] dark:to-[#0a0a0a] pointer-events-none"></div>
      <div className="relative z-10">
        <Navigation />
        <main className="flex-grow">
          <Hero />
          <Integrations />
          <WhyProlify />
          <ResourcesGuides />
          <PartnerPerks />
          <ProlifyPricing />
          <Features />
          <Pricing />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
}