import { Check, ArrowRight, X, Sparkles } from 'lucide-react';

const pricingTiers = [
{
  label: "",
  title: 'Starter',
  description: 'Perfect for individuals and content creators',
  price: "250",
  isPopular: false,
  isLabelEmerald: true,
  features: {
    'Company Formation': [
    { name: 'Formation Filings', included: true },
    { name: 'Employer Identification Number (EIN)', included: true },
    { name: 'Operating Agreement / Corporate Bylaws', included: true },
    { name: 'Expedited EIN Processing', included: false },
    { name: 'Free Dissolution', included: false },
    { name: 'States Fees', included: false }],

    'AI Toolkit': [
    { name: 'AI Co-Founder', included: true }],

    'Compliance': [
    { name: 'Registered Agent Service', included: true },
    { name: 'Virtual Mailing/Business Address', included: false }],

    'Customer Support': [
    { name: 'Email Support', included: true },
    { name: 'Live Call Scheduling', included: false }],

    'Taxes': [
    { name: 'Annual State Tax Filings', included: false },
    { name: 'Licensed Tax Professional Consultation', included: false },
    { name: 'Business IRS Tax Filings', included: false }],

    'Bookkeeping & Analytics': [
    { name: 'E-Commerce Analytics', included: false },
    { name: 'Track Your Transactions', included: false },
    { name: 'Send Invoices', included: false },
    { name: 'Download Financial Reports', included: false },
    { name: 'Connect Multiple Bank Accounts', included: false },
    { name: 'Monthly/Quarterly Closings', included: false },
    { name: 'Dedicated Bookkeeper', included: false }],

    'Free Bonuses': [
    { name: 'Premium Partner Deals', included: true }]

  }
},
{
  label: "",
  title: "Total Compliance",
  description: 'Ideal for growing creators and small teams',
  price: "1800",
  isPopular: true,
  isLabelEmerald: false,
  features: {
    'Company Formation': [
    { name: 'Formation Filings', included: true },
    { name: 'Employer Identification Number (EIN)', included: true },
    { name: 'Operating Agreement / Corporate Bylaws', included: true },
    { name: 'Expedited EIN Processing', included: true },
    { name: 'Free Dissolution', included: true },
    { name: 'States Fees', included: false }],

    'AI Toolkit': [
    { name: 'AI Co-Founder', included: true }],

    'Compliance': [
    { name: 'Registered Agent Service', included: true },
    { name: 'Virtual Mailing/Business Address', included: true }],

    'Customer Support': [
    { name: 'Email Support', included: true },
    { name: 'Live Call Scheduling', included: true }],

    'Taxes': [
    { name: 'Annual State Tax Filings', included: true },
    { name: 'Licensed Tax Professional Consultation', included: true },
    { name: 'Business IRS Tax Filings', included: false }],

    'Bookkeeping & Analytics': [
    { name: 'E-Commerce Analytics', included: true },
    { name: 'Track Your Transactions', included: true },
    { name: 'Send Invoices', included: true },
    { name: 'Download Financial Reports', included: true },
    { name: 'Connect Multiple Bank Accounts', included: false },
    { name: 'Monthly/Quarterly Closings', included: false },
    { name: 'Dedicated Bookkeeper', included: false }],

    'Free Bonuses': [
    { name: 'Premium Partner Deals', included: true }]

  }
},
{
  label: "",
  title: 'Agency',
  description: 'For agencies managing multiple clients',
  price: "2850",
  isPopular: false,
  isLabelEmerald: false,
  features: {
    'Company Formation': [
    { name: 'Formation Filings', included: true },
    { name: 'Employer Identification Number (EIN)', included: true },
    { name: 'Operating Agreement / Corporate Bylaws', included: true },
    { name: 'Expedited EIN Processing', included: true },
    { name: 'Free Dissolution', included: true },
    { name: 'States Fees', included: true }],

    'AI Toolkit': [
    { name: 'AI Co-Founder', included: true }],

    'Compliance': [
    { name: 'Registered Agent Service', included: true },
    { name: 'Virtual Mailing/Business Address', included: true }],

    'Customer Support': [
    { name: 'Email Support', included: true },
    { name: 'Live Call Scheduling', included: true }],

    'Taxes': [
    { name: 'Annual State Tax Filings', included: true },
    { name: 'Licensed Tax Professional Consultation', included: true },
    { name: 'Business IRS Tax Filings', included: true }],

    'Bookkeeping & Analytics': [
    { name: 'E-Commerce Analytics', included: true },
    { name: 'Track Your Transactions', included: true },
    { name: 'Send Invoices', included: true },
    { name: 'Download Financial Reports', included: true },
    { name: 'Connect Multiple Bank Accounts', included: true },
    { name: 'Monthly/Quarterly Closings', included: true },
    { name: 'Dedicated Bookkeeper', included: true }],

    'Free Bonuses': [
    { name: 'Premium Partner Deals', included: true }]

  }
}];


const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-20 md:py-32 px-4 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,193,7,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,193,7,0.08),transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 md:mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-[#FFC107] bg-[#FFC107]/10 mb-4">
            <Sparkles className="h-4 w-4 text-[#FFC107]" />
            <span className="text-sm font-bold text-[#FFC107] uppercase">Transparent Pricing</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            One Price. Everything Included. <span className="text-[#FFC107]">No Surprises.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-medium">
            Everything you need to launch and scale your US business with confidence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {pricingTiers.map((tier, index) =>
          <div
            key={index}
            className={`group relative flex flex-col p-8 rounded-lg transition-all duration-300 ${
              tier.isPopular
                ? 'bg-[#FFC107] border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]'
                : 'bg-white border-4 border-[#FFC107] shadow-[6px_6px_0px_0px_rgba(255,193,7,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,193,7,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]'
            }`}>

              {tier.isPopular &&
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-[#FFC107] bg-black rounded-lg border-2 border-[#FFC107]">
                    <Sparkles className="h-3 w-3" />
                    MOST POPULAR
                  </span>
                </div>
            }

              <div className="mb-8">
                <h3 className={`text-3xl font-bold mb-3 ${tier.isPopular ? 'text-black' : 'text-black'}`}>{tier.title}</h3>
                <p className={`text-sm leading-relaxed font-medium ${tier.isPopular ? 'text-black/70' : 'text-black/70'}`}>{tier.description}</p>
              </div>

              <div className="flex items-baseline gap-2 mb-10">
                <span className={`text-5xl md:text-6xl font-black ${tier.isPopular ? 'text-black' : 'text-black'}`}>${tier.price}</span>
                <span className={`text-lg font-bold ${tier.isPopular ? 'text-black/70' : 'text-black/70'}`}>/year</span>
              </div>

              <div className="space-y-8 flex-grow mb-8">
                {Object.entries(tier.features).map(([category, features]) =>
              <div key={category}>
                    <h5 className={`text-xs font-bold uppercase tracking-widest mb-4 ${tier.isPopular ? 'text-black' : 'text-black'}`}>
                      {category}
                    </h5>
                    <ul className="space-y-3">
                      {features.map((feature, featureIndex) =>
                  <li key={featureIndex} className="flex items-start gap-3">
                          {feature.included ?
                    <div className={`mt-0.5 rounded-full p-1 border-2 ${tier.isPopular ? 'bg-black border-black' : 'bg-[#FFC107] border-black'}`}>
                              <Check className={`h-3.5 w-3.5 flex-shrink-0 ${tier.isPopular ? 'text-[#FFC107]' : 'text-black'}`} />
                            </div> :
                    <div className={`mt-0.5 rounded-full p-1 border-2 ${tier.isPopular ? 'bg-black/10 border-black/20' : 'bg-black/10 border-black/20'}`}>
                              <X className="h-3.5 w-3.5 text-black/30 flex-shrink-0" />
                            </div>
                    }
                          <span className={`text-sm leading-relaxed font-medium ${feature.included ? (tier.isPopular ? 'text-black' : 'text-black') : (tier.isPopular ? 'text-black/40' : 'text-black/40')}`}>
                            {feature.name}
                          </span>
                        </li>
                  )}
                    </ul>
                  </div>
              )}
              </div>

              <button className={`group/btn relative w-full flex items-center justify-center gap-2 rounded-lg font-bold text-base py-4 transition-all duration-300 border-2 ${
                tier.isPopular
                  ? 'bg-black hover:bg-white text-white hover:text-black border-black'
                  : 'bg-[#FFC107] hover:bg-black text-black hover:text-white border-black'
              }`}>
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="h-5 w-5 relative z-10 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          )}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/70 text-sm font-medium">
            All plans include a <span className="text-[#FFC107] font-bold">14-day money-back guarantee</span>. No questions asked.
          </p>
        </div>
      </div>
    </section>);

};

export default PricingSection;