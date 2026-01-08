'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

const FormationHero = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative w-full min-h-[85vh] overflow-hidden bg-white">
      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/30 via-transparent to-transparent" />

      <div className="relative z-10 min-h-[85vh] flex items-center pt-24 lg:pt-32">
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8 lg:pr-8"
            >
              {/* Main Headline */}
              <motion.h1
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.2 }}
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem] font-bold leading-[1.2] tracking-tight text-[#4A6FA5]"
              >
                Form Your US LLC Without the Stress
              </motion.h1>

              {/* Sub-headline */}
              <motion.p
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.3 }}
                className="text-base sm:text-lg lg:text-xl text-[#4A4A4A] font-normal leading-relaxed max-w-xl"
              >
                We handle everything—state filings, EIN, operating agreement, registered agent, compliance. You get a fully formed US business delivered to your dashboard. No legal jargon. No surprises. Just done.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.4 }}
                className="flex flex-col sm:flex-row gap-4 pt-2"
              >
                {/* Primary Button - Orange */}
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 text-base font-semibold text-white overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-500/50"
                  style={{ backgroundColor: '#ff6b35' }}
                >
                  <span className="relative z-10">Start Your Business</span>
                  {!prefersReducedMotion ? (
                    <motion.span
                      className="relative z-10"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  ) : (
                    <span className="relative z-10">→</span>
                  )}
                  
                  {/* Hover Effect */}
                  {!prefersReducedMotion && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  )}
                </Link>

                {/* Secondary Button - Outlined Blue */}
                <Link
                  href="#how-it-works"
                  className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 text-base font-semibold overflow-hidden rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#4A6FA5]/30 text-[#4A6FA5] border-2 border-[#4A6FA5] bg-transparent hover:bg-[#4A6FA5] hover:text-white"
                >
                  <span className="relative z-10 transition-colors duration-300">See How It Works</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Hero Illustration */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.8, delay: prefersReducedMotion ? 0 : 0.3 }}
              className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px]"
            >
              <div className="relative w-full h-full p-6 lg:p-8">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Screenshot-2025-12-09-at-12.52.57-AM-1765259615237.png?width=8000&height=8000&resize=contain"
                  alt="Formation - Complete US LLC business setup with state filings, EIN, operating agreement, and registered agent services"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Curved Wave Separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[80px] sm:h-[100px] lg:h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z"
            fill="#5DCED2"
            fillOpacity="0.15"
          />
          <path
            d="M0,80 C360,40 720,40 1080,80 C1260,100 1380,100 1440,80 L1440,120 L0,120 Z"
            fill="#5DCED2"
            fillOpacity="0.25"
          />
          <path
            d="M0,96 C480,64 960,64 1440,96 L1440,120 L0,120 Z"
            fill="#B8E8E8"
          />
        </svg>
      </div>
    </section>
  );
};

export default FormationHero;
