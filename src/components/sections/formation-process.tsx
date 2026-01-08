'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, Clock, User, Building, Percent, X } from 'lucide-react';
import { useState } from 'react';

const FormationProcess = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState<'llc' | 'ccorp' | 'scorp'>('llc');

  const entityInfo = {
    llc: {
      title: 'Limited Liability Companies (LLC)',
      description: 'A Limited Liability Company (LLC) is a flexible business structure in the U.S. that offers personal liability protection and can have one or multiple owners (called members). It\'s popular among small business owners and entrepreneurs for its simplicity and tax flexibility.',
      pros: [
        'Limited liability protection for owners',
        'Simple management structure and easy to operate',
        'Unlimited owners (U.S. and international)',
      ],
      cons: [
        'LLCs cannot issue stock',
        'Ownership represented by members',
      ],
      imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot-2025-12-12-at-9.17.54-PM-1765603087267.png?width=800&height=800&resize=contain',
      imageAlt: 'Amazon Seller starting a US LLC from India',
    },
    ccorp: {
      title: 'C Corporation',
      description: 'A C Corporation is a legal entity that is separate from its owners. It can have unlimited shareholders and is ideal for businesses planning to raise venture capital or go public.',
      pros: [
        'Unlimited shareholders',
        'Can issue multiple classes of stock',
        'Easier to raise venture capital',
      ],
      cons: [
        'Double taxation (corporate and dividend)',
        'More complex management requirements',
      ],
      imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot-2025-12-12-at-9.20.31-PM-1765603269228.png?width=800&height=800&resize=contain',
      imageAlt: 'Sam & Melina co-founders who started a C-Corp from France',
    },
    scorp: {
      title: 'S Corporation',
      description: 'An S Corporation is a tax designation that allows business income to pass through to owners\' personal tax returns, avoiding double taxation while still providing liability protection.',
      pros: [
        'Pass-through taxation',
        'Limited liability protection',
        'Can have up to 100 shareholders',
      ],
      cons: [
        'Strict ownership restrictions',
        'Only one class of stock allowed',
      ],
      imageSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Screenshot-2025-12-12-at-9.20.39-PM-1765603269285.png?width=800&height=800&resize=contain',
      imageAlt: 'Jessica software engineer who started an S-Corp from New York',
    },
  };

  const currentEntity = entityInfo[activeTab];

  const steps = [
    {
      number: 1,
      label: 'Step 1',
      headline: 'Submit Your Information Through Our Simple Dashboard',
      description: 'Answer a few basic questions about your business through our guided setup. No legal jargon—just straightforward questions we need to file your paperwork correctly.',
      items: [
        'Company name (we\'ll check availability)',
        'Entity type (LLC or C-Corp)',
        'State where you want to form',
        'Member/owner information (name, address, ownership %)'
      ],
      timeline: '15 minutes'
    },
    {
      number: 2,
      label: 'Step 2',
      headline: 'We File Your Business in Any of the 50 States',
      description: 'We handle all the paperwork—state filings, operating agreement, articles of organization, and registered agent setup. You get confirmation when your business is officially formed.',
      items: [
        'LLC or C-Corp formation in your chosen state',
        'Operating agreement customized for your business',
        'Articles of organization filed with the state',
        'Registered agent service (first year included)'
      ],
      timeline: '1 week average (varies by state)'
    },
    {
      number: 3,
      label: 'Step 3',
      headline: 'Secure Your Essential Business Documents',
      description: 'We obtain your federal EIN (tax ID) from the IRS and prepare all the documents banks and payment processors require. Everything is organized in your Prolify dashboard.',
      items: [
        'Federal EIN (Employer Identification Number)',
        'EIN confirmation letter',
        'Certificate of formation',
        'Operating agreement (signed)',
        'All documents formatted for banking applications'
      ],
      timelines: [
        { label: 'US residents:', time: '1-2 business days' },
        { label: 'International founders:', time: '4-6 weeks average' }
      ]
    },
    {
      number: 4,
      label: 'Step 4',
      headline: 'Apply for Your US Business Bank Account',
      description: 'With your business documents ready, you can apply for a US business bank account through our partner network—all remotely, without visiting the US.',
      items: [
        'Your business documents (we provide these)',
        'Valid passport (for international founders)',
        'Basic business information'
      ],
      timeline: '3-5 business days for account approval'
    },
    {
      number: 5,
      label: 'Step 5',
      headline: 'You\'re Ready to Do Business',
      description: 'Your LLC is formed, your EIN is secured, your bank account is open. Now focus on building your business while we handle ongoing compliance, bookkeeping, and tax filings.',
      items: [
        'Bookkeeping: Automated transaction tracking and categorization',
        'Tax filing: Annual business tax preparation and filing',
        'Compliance monitoring: Deadline reminders and renewal management',
        'Registered agent: Continued service for legal document handling'
      ],
      cta: true
    }
  ];

  return (
    <section className="relative w-full py-20 lg:py-28 bg-white">
      <div className="container max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6"
          >
            Launch Your US Business in 5 Simple Steps
          </motion.h2>
          
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.1 }}
            className="text-lg text-[#4A4A4A] mb-8 max-w-3xl mx-auto"
          >
            From company name to bank account—here&apos;s exactly how we get your business set up and legally compliant.
          </motion.p>

          {/* Header CTAs */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              style={{ backgroundColor: '#ff6b35' }}
            >
              Start Your Business
              <span>→</span>
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-[#4A6FA5] bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-300"
            >
              Book a Demo
            </Link>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="relative space-y-16 lg:space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : index * 0.1 }}
              className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
            >
              {/* Vertical Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[50px] lg:left-[130px] top-[80px] w-[3px] h-[calc(100%+4rem)] bg-gradient-to-b from-[#F8E5B8] to-[#E8D5A8] z-0" />
              )}

              {/* Left Side - Step Badge & Headline */}
              <div className="relative z-10 flex items-start gap-6 lg:gap-8">
                {/* Step Badge */}
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-semibold text-[#4A4A4A] shadow-sm" style={{ backgroundColor: '#F8E5B8' }}>
                    {step.label}
                  </div>
                </div>

                {/* Connector Circle */}
                <div className="absolute left-[50px] top-[50px] w-5 h-5 rounded-full border-4 border-white shadow-md z-20" style={{ backgroundColor: '#F8E5B8' }} />

                {/* Headline */}
                <div className="pt-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A] leading-tight">
                    {step.headline}
                  </h3>
                </div>
              </div>

              {/* Right Side - Info Card */}
              <div className="relative z-10 rounded-2xl p-8 lg:p-10 shadow-sm" style={{ backgroundColor: '#F8E5B8' }}>
                <p className="text-base text-[#2D2D2D] mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Items List */}
                <div className="space-y-4 mb-6">
                  {step.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#4CAF50] flex-shrink-0 mt-0.5" />
                      <span className="text-[#2D2D2D] text-[15px] leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Timeline */}
                {step.timeline && (
                  <div className="flex items-center gap-2 text-[#4A4A4A] font-medium">
                    <Clock className="w-5 h-5" />
                    <span>{step.timeline}</span>
                  </div>
                )}

                {/* Multiple Timelines */}
                {step.timelines && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[#4A4A4A]">
                      <Clock className="w-5 h-5" />
                      <span className="font-semibold">{step.timelines[0].label}</span>
                      <span>{step.timelines[0].time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#4A4A4A] pl-7">
                      <span className="font-semibold">{step.timelines[1].label}</span>
                      <span>{step.timelines[1].time}</span>
                    </div>
                  </div>
                )}

                {/* Step 5 CTA */}
                {step.cta && (
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 mt-4 text-base font-semibold text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    style={{ backgroundColor: '#1A1A1A' }}
                  >
                    Start Your Business
                    <span>→</span>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          className="mt-20 lg:mt-28 pt-16 border-t border-gray-200"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-black mb-4">
              LLC or C-Corp?<br />We&apos;ll Help You Decide.
            </h3>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-yellow-600 text-lg font-semibold hover:underline transition-all duration-300"
            >
              Take our Quiz
              <span>→</span>
            </Link>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            <button
              onClick={() => setActiveTab('llc')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'llc'
                  ? 'bg-white text-black border-b-2 border-black'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              <User className="w-5 h-5" />
              LLC
            </button>
            <button
              onClick={() => setActiveTab('ccorp')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'ccorp'
                  ? 'bg-white text-black border-b-2 border-black'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              <Building className="w-5 h-5" />
              C-Corp
            </button>
            <button
              onClick={() => setActiveTab('scorp')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'scorp'
                  ? 'bg-white text-black border-b-2 border-black'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              <Percent className="w-5 h-5" />
              S-Corp
            </button>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start bg-gray-50 rounded-2xl p-8 lg:p-12">
            {/* Left Side - Image */}
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={currentEntity.imageSrc}
                alt={currentEntity.imageAlt}
                className="w-full h-auto"
              />
            </div>

            {/* Right Side - Information */}
            <div>
              <h4 className="text-2xl lg:text-3xl font-bold text-black mb-4">
                {currentEntity.title}
              </h4>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {currentEntity.description}
              </p>

              {/* Pros */}
              <div className="space-y-3 mb-6">
                {currentEntity.pros.map((pro, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 text-[15px] leading-relaxed">{pro}</span>
                  </div>
                ))}
              </div>

              {/* Cons */}
              <div className="space-y-3">
                {currentEntity.cons.map((con, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-[15px] leading-relaxed">{con}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FormationProcess;