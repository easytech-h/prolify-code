"use client";

import { useState } from "react";
import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { Check, X, ArrowRight, Sparkles, Shield, DollarSign, TrendingUp, Zap, ChevronDown } from "lucide-react";

export default function PricingPage() {
  const [selectedTab, setSelectedTab] = useState<"new" | "existing">("new");
  const [showAllFAQs, setShowAllFAQs] = useState(false);

  const newBusinessTiers = [
    {
      name: "Formation Essentials",
      description: "Founders who just need their LLC formed and will handle the rest themselves.",
      price: "599",
      billing: "One-time payment",
      popular: false,
      cta: "Get Started",
      features: [
        "LLC formation in any US state",
        "Federal EIN (Tax ID)",
        "Operating agreement",
        "Articles of organization",
        "Registered agent (1 year included)",
        "All state filing fees covered",
        "Email support"
      ]
    },
    {
      name: "Launch Ready",
      description: "International founders who want complete US business setup—formation, banking, and first-year compliance.",
      price: "1,499",
      billing: "Annual (Save 20% vs monthly)",
      popular: true,
      cta: "Start Your Business",
      features: [
        "Everything in Formation Essentials",
        "US business bank account setup assistance",
        "Virtual office/mailing address (1 year)",
        "Registered agent service (1 year)",
        "Annual state tax filing",
        "Compliance calendar & reminders",
        "Priority email & chat support",
        "Access to partner perks marketplace"
      ]
    },
    {
      name: "Complete Package",
      description: "Founders who want hands-off operations—we handle formation, banking, bookkeeping, taxes, and ongoing compliance.",
      price: "2,999",
      billing: "Annual (Save 25% vs monthly)",
      popular: false,
      badge: "Best Value",
      cta: "Get Everything",
      features: [
        "Everything in Launch Ready",
        "Monthly bookkeeping & transaction categorization",
        "Dedicated bookkeeper (assigned to your account)",
        "Business IRS tax filing (federal)",
        "Annual state tax filing",
        "E-commerce analytics dashboard",
        "Multi-account bank sync",
        "Quarterly financial reports",
        "Invoice generation & tracking",
        "Licensed CPA consultation (1 session/year)",
        "Priority phone & video support",
        "VIP partner perks & discounts"
      ]
    }
  ];

  const vipPerks = [
    {
      icon: DollarSign,
      title: "$5,000+ in Annual Savings",
      description: "Save thousands with exclusive discounts on Stripe, AWS, Shopify, and more."
    },
    {
      icon: Sparkles,
      title: "Premium Partner Perks",
      description: "Waived fees, extended trials, and founder-only pricing from 50+ partners."
    },
    {
      icon: Zap,
      title: "Priority Expert Help",
      description: "Jump the queue with dedicated support from our tax, legal, and compliance teams."
    },
    {
      icon: TrendingUp,
      title: "Powerful Business Tools",
      description: "Pre-negotiated deals on payment processing, hosting, marketing, and operations tools."
    }
  ];

  const comparisonFeatures = [
    {
      category: "Company Formation",
      features: [
        { name: "LLC or C-Corp formation", essentials: true, launch: true, complete: true },
        { name: "Federal EIN (Tax ID)", essentials: true, launch: true, complete: true },
        { name: "Operating agreement", essentials: true, launch: true, complete: true },
        { name: "Articles of organization", essentials: true, launch: true, complete: true },
        { name: "All state filing fees", essentials: true, launch: true, complete: true },
        { name: "Expedited EIN processing", essentials: false, launch: true, complete: true },
        { name: "Free business dissolution", essentials: false, launch: false, complete: true }
      ]
    },
    {
      category: "Banking & Address",
      features: [
        { name: "US bank account setup", essentials: false, launch: true, complete: true },
        { name: "Virtual mailing address", essentials: false, launch: "1 year", complete: "Unlimited" }
      ]
    },
    {
      category: "Compliance",
      features: [
        { name: "Registered agent service", essentials: "1 year", launch: "1 year", complete: "Unlimited" },
        { name: "Compliance calendar", essentials: false, launch: true, complete: true },
        { name: "Annual state tax filing", essentials: false, launch: true, complete: true },
        { name: "Business IRS tax filing", essentials: false, launch: false, complete: true },
        { name: "Licensed CPA consultation", essentials: false, launch: false, complete: "1/year" }
      ]
    },
    {
      category: "Bookkeeping & Analytics",
      features: [
        { name: "E-commerce analytics", essentials: false, launch: false, complete: true },
        { name: "Transaction tracking", essentials: false, launch: false, complete: true },
        { name: "Multi-bank account sync", essentials: false, launch: false, complete: true },
        { name: "Invoice generation", essentials: false, launch: false, complete: true },
        { name: "Monthly financial reports", essentials: false, launch: false, complete: true },
        { name: "Dedicated bookkeeper", essentials: false, launch: false, complete: true },
        { name: "Quarterly closings", essentials: false, launch: false, complete: true }
      ]
    },
    {
      category: "Support & Perks",
      features: [
        { name: "Email support", essentials: true, launch: true, complete: true },
        { name: "Live chat support", essentials: false, launch: true, complete: true },
        { name: "Phone/video support", essentials: false, launch: false, complete: true },
        { name: "Partner marketplace access", essentials: false, launch: true, complete: true },
        { name: "VIP partner perks", essentials: false, launch: false, complete: true }
      ]
    }
  ];

  const faqs = [
    {
      question: "What's included in 'State Fees'?",
      answer: "State fees vary by state and are paid directly to the government for LLC formation. Most states charge between $50-$500. We'll tell you the exact amount before you pay anything. These fees are separate from Prolify's service fee."
    },
    {
      question: "Do I need to be a US citizen to use Prolify?",
      answer: "No. Prolify is built specifically for international founders. You don't need US citizenship, a US address, or a social security number to form a US business with us."
    },
    {
      question: "Why should I get an LLC and a US business bank account?",
      answer: "An LLC protects your personal assets from business liabilities and gives your company legal credibility. A US bank account lets you accept payments from US customers, work with US payment processors (like Stripe), and keep business finances separate from personal—which is essential for taxes."
    },
    {
      question: "What information do you need from me to get started?",
      answer: "Just the basics: your preferred company name, state for formation, entity type (we help you choose), and owner/member information (name, address, ownership percentage). Later, you'll need a passport for bank account setup. That's it."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Yes. You can upgrade from Formation Essentials to Launch Ready or Complete Package at any time. We'll prorate the difference based on your billing cycle."
    },
    {
      question: "What happens after the first year for Formation Essentials?",
      answer: "After your first year, you'll need to renew your registered agent service ($99/year) to stay compliant. We'll remind you 30 days before renewal."
    },
    {
      question: "Do you offer monthly payment plans?",
      answer: "Launch Ready and Complete Package are available as monthly subscriptions at $149/month and $299/month respectively. Annual plans save you 20-25%."
    }
  ];

  const displayedFAQs = showAllFAQs ? faqs : faqs.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />
      
      <main className="flex-grow pt-24">
        {/* Money-Back Guarantee */}
        <section className="bg-yellow-50 py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-200 mb-6">
              <Shield className="h-5 w-5 text-black" />
              <span className="text-sm font-semibold text-black">100% Money-Back Guarantee</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
              Perfect Formation or Your Money Back
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6 leading-relaxed">
              We know how critical it is to get your US business formed correctly. If there's an error in your formation paperwork due to our service, we'll refund that portion of your payment—no questions asked.
            </p>
            <a href="#" className="text-black hover:text-gray-700 font-semibold inline-flex items-center gap-1 transition-colors">
              See Full Terms <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* Pricing Tab Toggle */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center mb-16">
              <div className="inline-flex items-center gap-2 p-1 bg-gray-100 rounded-xl">
                <button
                  onClick={() => setSelectedTab("new")}
                  className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all ${
                    selectedTab === "new"
                      ? "bg-yellow-400 text-black shadow-sm"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  I'm Starting a New Business
                </button>
                <button
                  onClick={() => setSelectedTab("existing")}
                  className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all ${
                    selectedTab === "existing"
                      ? "bg-yellow-400 text-black shadow-sm"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  I Have an Existing Business
                </button>
              </div>
            </div>

            {/* Pricing Tiers */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {newBusinessTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col p-8 rounded-2xl transition-all hover:scale-105 ${
                    tier.popular
                      ? "bg-yellow-100 border-2 border-yellow-400 shadow-xl"
                      : "bg-white border-2 border-gray-200 hover:border-yellow-400"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-black bg-yellow-400 rounded-full shadow-lg">
                        <Sparkles className="h-3 w-3" />
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  
                  {tier.badge && !tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-black bg-yellow-200 rounded-full">
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-black mb-2">{tier.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">For: {tier.description}</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-black text-black">${tier.price}</span>
                      <span className="text-gray-600 font-medium">{tier.billing.includes("Annual") ? "/year" : ""}</span>
                    </div>
                    <p className="text-sm text-gray-500">{tier.billing}</p>
                    <p className="text-sm text-black font-semibold mt-1">+ State Fees</p>
                  </div>

                  <button
                    className={`w-full py-3 px-6 rounded-xl font-bold text-base transition-all mb-6 ${
                      tier.popular
                        ? "bg-yellow-400 text-black hover:bg-yellow-500 hover:shadow-lg"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                  >
                    {tier.cta} <ArrowRight className="inline h-5 w-5 ml-2" />
                  </button>

                  <div className="space-y-3 flex-grow mb-6">
                    <h4 className="text-sm font-bold text-black uppercase tracking-wide">What's Included:</h4>
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-black flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a href="#" className="text-black hover:text-gray-700 font-semibold text-sm inline-flex items-center gap-1">
                    View All Features <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* VIP Perks Section */}
        <section className="py-20 px-4 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Unlock $100K+ in Premium Perks with <br />
                <span className="text-yellow-400">
                  Prolify Partner Network
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                Launch Ready and Complete Package subscribers get exclusive access to VIP deals from the business tools you'll actually use.
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-500 hover:shadow-lg transition-all">
                Explore Partner Perks <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vipPerks.map((perk, index) => {
                const Icon = perk.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-yellow-400 transition-all hover:scale-105"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-lg mb-4">
                      <Icon className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{perk.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{perk.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
                Compare Plans
              </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-black text-white">
                      <th className="px-6 py-4 text-left font-bold">Feature</th>
                      <th className="px-6 py-4 text-center font-bold">
                        <div className="mb-2">Formation Essentials</div>
                        <div className="text-2xl font-black">$599</div>
                        <div className="text-xs text-gray-300">one-time</div>
                      </th>
                      <th className="px-6 py-4 text-center font-bold bg-yellow-400 text-black">
                        <div className="mb-2">Launch Ready</div>
                        <div className="text-2xl font-black">$1,499</div>
                        <div className="text-xs text-black">/year</div>
                      </th>
                      <th className="px-6 py-4 text-center font-bold">
                        <div className="mb-2">Complete Package</div>
                        <div className="text-2xl font-black">$2,999</div>
                        <div className="text-xs text-gray-300">/year</div>
                      </th>
                    </tr>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-3"></th>
                      <th className="px-6 py-3">
                        <button className="w-full py-2 px-4 bg-black text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors">
                          Select Plan →
                        </button>
                      </th>
                      <th className="px-6 py-3 bg-yellow-50">
                        <button className="w-full py-2 px-4 bg-yellow-400 text-black rounded-lg text-sm font-semibold hover:bg-yellow-500 hover:shadow-lg transition-all">
                          Select Plan →
                        </button>
                      </th>
                      <th className="px-6 py-3">
                        <button className="w-full py-2 px-4 bg-black text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors">
                          Select Plan →
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((category, catIndex) => (
                      <>
                        <tr key={`cat-${catIndex}`} className="bg-gray-100">
                          <td colSpan={4} className="px-6 py-3 font-bold text-black text-sm uppercase tracking-wide">
                            {category.category}
                          </td>
                        </tr>
                        {category.features.map((feature, featIndex) => (
                          <tr key={`feat-${catIndex}-${featIndex}`} className="border-b border-gray-200">
                            <td className="px-6 py-4 text-sm text-gray-700">{feature.name}</td>
                            <td className="px-6 py-4 text-center">
                              {typeof feature.essentials === "boolean" ? (
                                feature.essentials ? (
                                  <Check className="h-5 w-5 text-black mx-auto" />
                                ) : (
                                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                                )
                              ) : (
                                <span className="text-sm font-semibold text-gray-700">{feature.essentials}</span>
                              )}
                            </td>
                            <td className="px-6 py-4 text-center bg-yellow-50">
                              {typeof feature.launch === "boolean" ? (
                                feature.launch ? (
                                  <Check className="h-5 w-5 text-black mx-auto" />
                                ) : (
                                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                                )
                              ) : (
                                <span className="text-sm font-semibold text-gray-700">{feature.launch}</span>
                              )}
                            </td>
                            <td className="px-6 py-4 text-center">
                              {typeof feature.complete === "boolean" ? (
                                feature.complete ? (
                                  <Check className="h-5 w-5 text-black mx-auto" />
                                ) : (
                                  <X className="h-5 w-5 text-gray-300 mx-auto" />
                                )
                              ) : (
                                <span className="text-sm font-semibold text-gray-700">{feature.complete}</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-20 px-4 bg-yellow-400">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
              The Best Value for International Founders
            </h2>
            <p className="text-lg text-black max-w-3xl mx-auto mb-8 leading-relaxed">
              Whether you need basic formation or complete business operations, Prolify delivers more features and better support than competitors—at a transparent, honest price.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-all text-lg shadow-xl">
              Compare Prolify vs Others <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </section>

        {/* Pricing FAQs */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
                Pricing FAQs
              </h2>
            </div>

            <div className="space-y-6">
              {displayedFAQs.map((faq, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-yellow-400 transition-all">
                  <h3 className="text-lg font-bold text-black mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            {faqs.length > 4 && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAllFAQs(!showAllFAQs)}
                  className="inline-flex items-center gap-2 text-black hover:text-gray-700 font-semibold transition-colors"
                >
                  {showAllFAQs ? "Show Less" : "Show More"}
                  <ChevronDown className={`h-5 w-5 transition-transform ${showAllFAQs ? "rotate-180" : ""}`} />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-20 px-4 bg-black">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Less Confusion. More Growth.
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Join Prolify and launch your US business with confidence. Complete formation, compliant operations, and ongoing support—all in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-500 hover:shadow-lg transition-all text-lg">
                Start Your Business <ArrowRight className="h-5 w-5" />
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all text-lg">
                Book a Free Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}