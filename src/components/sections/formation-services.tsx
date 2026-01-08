'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Building2, FileText, Shield, Receipt, BookOpen, FileCheck } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Complete LLC Formation',
    description: 'State filing. Federal EIN. Operating agreement. Registered agent. Everything you need to launch legally. Done in ~4 weeks.',
    cta: 'Start Now',
    href: '/contact'
  },
  {
    icon: FileText,
    title: 'All the Documents You\'ll Actually Need',
    description: 'Banks want specific paperwork. We prepare it all—formatted correctly, ready to submit. No rejections. No confusion.',
    cta: 'See Documents',
    href: '/contact'
  },
  {
    icon: Shield,
    title: 'Registered Agent Service',
    description: 'We\'re your official US address for legal notices. When something arrives, you get it in your dashboard immediately.',
    cta: 'Learn More',
    href: '/contact'
  },
  {
    icon: Receipt,
    title: 'Sales Tax & Reseller Certificates',
    description: 'We register you for sales tax and get your reseller certificates. Stay compliant and buy inventory tax-free.',
    cta: 'Get Registered',
    href: '/contact'
  },
  {
    icon: BookOpen,
    title: 'Automated Bookkeeping',
    description: 'Syncs with your bank and payment processors. Categorizes transactions automatically. Add a dedicated bookkeeper if you want hands-off books.',
    cta: 'Connect Your Accounts',
    href: '/contact'
  },
  {
    icon: FileCheck,
    title: 'Annual Tax Filing',
    description: 'Our CPA team files your business taxes on time, every time. Federal, state, and local—all handled.',
    cta: 'File Taxes',
    href: '/contact'
  }
];

const FormationServices = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative w-full py-20 lg:py-28 bg-white">
      <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.h2
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-6"
          >
            Start Smart. Stay Compliant.
          </motion.h2>
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.1 }}
            className="text-lg lg:text-xl text-[#4A4A4A] leading-relaxed"
          >
            Everything you need to launch and operate your US business legally—from formation to ongoing compliance.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: prefersReducedMotion ? 0 : 0.5, 
                delay: prefersReducedMotion ? 0 : index * 0.1 
              }}
              className="group relative bg-[#F5F5F5] rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#8B4FA0] to-[#D946EF] shadow-md">
                  <service.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl lg:text-2xl font-semibold text-[#1A1A1A] mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-base text-[#4A4A4A] leading-relaxed mb-6">
                {service.description}
              </p>

              {/* CTA Link */}
              <Link
                href={service.href}
                className="inline-flex items-center gap-2 text-[#4A6FA5] font-semibold text-base hover:gap-3 transition-all duration-300 group-hover:text-[#2C4A7C]"
              >
                {service.cta}
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#5DCED2]/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormationServices;
