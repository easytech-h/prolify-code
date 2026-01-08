"use client";

import { ArrowRight, Zap } from "lucide-react";

const perks = [
  {
    partner: "Stripe",
    offer: "50% Off Processing Fees",
    description: "Save 50% on processing fees for your first $20K in transactions",
    badge: "$10K+ Value"
  },
  {
    partner: "AWS",
    offer: "$5,000 in Credits",
    description: "Cloud hosting credits to power your infrastructure",
    badge: "$5K Value"
  },
  {
    partner: "Shopify",
    offer: "6 Months Free",
    description: "Shopify Plus subscription - free for 6 months",
    badge: "$3K+ Value"
  },
  {
    partner: "QuickBooks",
    offer: "30% Off Annual",
    description: "Professional accounting software at a fraction of the cost",
    badge: "$500+ Value"
  },
  {
    partner: "Google Workspace",
    offer: "30% Off First Year",
    description: "Professional email and productivity tools for your team",
    badge: "$400+ Value"
  },
  {
    partner: "LegalZoom",
    offer: "Free Consultations",
    description: "Complimentary legal consultations with business attorneys",
    badge: "$1K+ Value"
  }
];

export default function PartnerPerks() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-[#FFC107]/[0.03] to-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,193,7,0.1),transparent_70%)]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC107] rounded-full blur-[150px] opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFC107] rounded-full blur-[150px] opacity-10 animate-pulse" style={{animationDelay: '1.5s'}}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-8 px-5 py-3 bg-[#FFC107] border-4 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 animate-[slideDown_0.6s_ease-out]">
            <Zap className="w-5 h-5 text-black animate-pulse" />
            <span className="text-sm font-black text-black uppercase tracking-wider">Exclusive Benefits</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tighter relative inline-block">
            Founder Perks Worth <span className="text-[#FFC107] relative">
              $100K+
              <div className="absolute -inset-2 bg-[#FFC107] blur-2xl opacity-20 animate-pulse"></div>
            </span>
            <div className="absolute -inset-6 bg-[#FFC107]/5 blur-3xl rounded-full -z-10 animate-pulse"></div>
          </h2>
          <p className="text-xl text-black/70 font-semibold">
            Exclusive deals and discounts from the tools you'll actually use—curated specifically for Prolify founders.
          </p>
        </div>

        <div className="relative bg-white border-4 border-black rounded-2xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 mb-16 max-w-5xl mx-auto overflow-hidden group animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#FFC107] rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#FFC107] rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

          <div className="flex items-start gap-6 mb-8 relative z-10">
            <div className="relative w-16 h-16 rounded-full bg-[#FFC107] border-4 border-black flex items-center justify-center flex-shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-all duration-300">
              <Zap className="w-8 h-8 text-black" />
              <div className="absolute inset-0 rounded-full bg-[#FFC107] animate-ping opacity-20"></div>
            </div>
            <div>
              <h3 className="text-2xl md:text-4xl font-black text-black mb-4 tracking-tight">
                Access Premium Tools at Founder-Friendly Prices
              </h3>
              <p className="text-black/70 text-lg mb-6 font-semibold leading-relaxed">
                As a Prolify customer, you get instant access to our partner marketplace—featuring exclusive discounts on everything from cloud hosting and payment processing to marketing tools and legal services. We've negotiated deals with the platforms international founders actually need.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 relative z-10">
            {[
              { text: "50% off", desc: "Stripe processing fees (first $20K)" },
              { text: "$5,000", desc: "in AWS credits" },
              { text: "6 months free", desc: "on Shopify Plus" },
              { text: "30% off", desc: "QuickBooks Online" },
              { text: "Free legal consultations", desc: "with international business attorneys" },
              { text: "Exclusive rates", desc: "on virtual office upgrades" }
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 group/item"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${0.5 + idx * 0.1}s both`
                }}
              >
                <div className="relative w-4 h-4 mt-1 flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-[#FFC107] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover/item:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover/item:translate-x-[-1px] group-hover/item:translate-y-[-1px] transition-all duration-300" />
                  <div className="absolute inset-0 w-4 h-4 rounded-full bg-[#FFC107] animate-ping opacity-20"></div>
                </div>
                <p className="text-black font-semibold">
                  <span className="font-black text-lg">{item.text}</span> {item.desc}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="relative inline-flex items-center gap-3 bg-[#FFC107] hover:bg-[#FFB300] text-black px-10 py-4 rounded-xl font-black text-lg transition-all duration-300 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] group/btn overflow-hidden z-10"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700"></span>
            <span className="relative">Browse All Perks</span>
            <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover/btn:translate-x-2 relative" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {perks.map((perk, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] overflow-hidden"
              style={{
                animation: `fadeInUp 0.6s ease-out ${0.8 + index * 0.1}s both`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFC107]/0 via-[#FFC107]/0 to-[#FFC107]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute -top-3 -right-3 w-32 h-32 bg-[#FFC107] rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

              <div className="absolute top-4 right-4 z-10">
                <span className="inline-block text-xs font-black text-black bg-[#FFC107] px-4 py-2 rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] transition-all duration-300">
                  {perk.badge}
                </span>
              </div>

              <div className="relative z-10">
                <h4 className="text-2xl font-black text-black mb-3 mt-8">
                  {perk.partner}
                </h4>

                <p className="text-3xl font-black text-black mb-4 relative inline-block">
                  {perk.offer}
                  <div className="absolute -inset-2 bg-[#FFC107] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
                </p>

                <p className="text-sm text-black/70 mb-6 font-semibold leading-relaxed">
                  {perk.description}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-black font-black text-sm hover:gap-4 transition-all duration-300 group/btn bg-[#FFC107] px-5 py-3 rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                >
                  <span className="relative">
                    Claim Offer
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700"></span>
                  </span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
