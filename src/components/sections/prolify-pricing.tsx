"use client";

import { Check, ArrowRight } from "lucide-react";

const includedFeatures = [
"Company name availability check",
"LLC formation filing in your chosen state",
"Federal EIN (Employer Identification Number)",
"Registered agent service (1 year included)",
"Operating agreement (customized for your business)",
"All state and government filing fees",
"US business bank account setup assistance",
"Document preparation and digital signatures",
"Compliance calendar and deadline reminders",
"Access to Prolify dashboard for all documents"];


export default function ProlifyPricing() {
  return (
    <section id="prolify-pricing" className="py-20 md:py-28 bg-gradient-to-b from-white to-[var(--color-light-gray)]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text-dark)] mb-6">
            One Price. Everything Included. No Surprises.
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-medium)] leading-relaxed">
            Prolify gives you complete US business setup for one transparent price. No upselling, no hidden fees, no "processing charges" added at checkout. You pay what you see—not a dollar more.
          </p>
        </div>

        {/* Main Pricing Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Left Side - What's Included */}
              <div>
                <div className="mb-10">
                  <div className="inline-block text-sm font-semibold text-[var(--color-text-light)] uppercase tracking-wider mb-3">
                    What's Included:
                  </div>
                  <div className="h-1 w-24 bg-gradient-to-r from-[var(--color-primary-blue)] to-[var(--color-secondary-teal)] rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 gap-y-5">
                  {includedFeatures.map((feature, index) =>
                  <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" strokeWidth={3} />
                        </div>
                      </div>
                      <p className="text-[var(--color-text-dark)] font-medium text-base leading-tight">
                        {feature}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Side - Pricing Card */}
              <div>
                <div className="bg-gradient-to-br from-[#1a1d29] via-[#1e2332] to-[#2a3f7c] rounded-2xl p-10 text-white shadow-[0_20px_60px_rgba(0,0,0,0.3)] relative overflow-hidden">
                  {/* Decorative gradient overlay */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--color-primary-blue)]/20 to-transparent rounded-full blur-3xl"></div>
                  
                  <div className="relative z-10">
                    <p className="text-lg font-medium text-white/80 mb-8 text-center">
                      Complete US Business Setup
                    </p>
                    
                    <div className="text-center mb-10">
                      <div className="flex items-start justify-center gap-2 mb-2">
                        <span className="text-3xl font-bold mt-2">$</span>
                        <span className="text-7xl md:text-8xl font-bold tracking-tight !whitespace-pre-line">550</span>
                      </div>
                      <p className="text-sm text-white/70">(All-inclusive)</p>
                    </div>

                    <button className="w-full bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-base py-5 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group flex items-center justify-center gap-3 mb-8 !whitespace-pre-line">Get Started for $550

                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>

                    <p className="text-center text-base font-medium text-white/90">3 weeks average processing time

                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <p className="text-sm text-[var(--color-text-light)] leading-relaxed">
            Price includes all government fees, state filings, and first year of registered agent service. 
            Ongoing registered agent renewal: $99/year after first year.
          </p>
        </div>
      </div>
    </section>);

}