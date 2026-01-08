import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-40 pb-32 bg-white dark:bg-[#0a0a0a] overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFC107] rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFC107] rounded-full blur-[120px] animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="max-w-6xl mx-auto px-4 text-center space-y-8 relative z-10">
        <div className="inline-block p-3 px-6 rounded-xl bg-[#FFC107] dark:bg-[#FFD54F] text-black dark:text-black border-4 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] transform hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 animate-[slideDown_0.6s_ease-out]">
          <span className="text-sm tracking-tight font-black uppercase flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-black dark:bg-black rounded-full animate-pulse"></span>
            Launch and run your US business, from anywhere.
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black dark:text-white leading-[1.1] animate-[fadeInUp_0.8s_ease-out_0.2s_both] transition-colors duration-300">
          The all-in-one platform
          <span className="block mt-4 relative bg-gradient-to-r from-black via-black to-black/70 dark:from-white dark:via-white dark:to-white/70 bg-clip-text text-transparent">
            to expand your business to the United States
            <svg
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-6 text-[#FFC107]"
              viewBox="0 0 580 20"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 15 C 90 0, 490 0, 575 15"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                style={{ strokeDasharray: 600, strokeDashoffset: 600 }}
                className="animate-[draw_1.2s_ease-out_0.8s_forwards]" />
            </svg>
            <div className="absolute -right-8 -top-8 w-20 h-20 bg-[#FFC107] rounded-full opacity-20 blur-2xl animate-pulse"></div>
          </span>
        </h1>

        <p className="text-xl tracking-tight text-black/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed font-medium animate-[fadeInUp_0.8s_ease-out_0.4s_both] transition-colors duration-300">
          Prolify is your <span className="font-bold text-black dark:text-white">single partner</span> for everything: LLC Formation, Bank Account, Taxes, Virtual Office, Bookkeeping, and real-time business analytics. We handle your entire US business setup so you can focus on what matters—your customers.
        </p>

        <div className="flex items-center justify-center gap-6 pt-8 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
          <button className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-black transition-all duration-300 h-14 px-10 bg-[#FFC107] dark:bg-[#FFD54F] hover:bg-[#FFB300] dark:hover:bg-[#FFEB3B] text-black dark:text-black tracking-tight group rounded-xl border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-[-4px] hover:translate-y-[-4px] overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
            <span className="relative">Start Your LLC</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2 relative" />
          </button>
          <button
            onClick={scrollToPricing}
            className="relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-black transition-all duration-300 h-14 px-10 bg-white dark:bg-[#262626] hover:bg-black dark:hover:bg-white text-black dark:text-white hover:text-white dark:hover:text-black tracking-tight group rounded-xl border-4 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-[-2px] hover:translate-y-[-2px] overflow-hidden">
            <span className="absolute inset-0 bg-black dark:bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            <span className="relative z-10">See Pricing</span>
          </button>
        </div>

        <div className="mt-24 w-full animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
          <div className="relative w-[96%] mx-auto">
            <div className="absolute -inset-8 bg-gradient-to-br from-[#FFC107]/20 via-[#FFC107]/5 to-transparent rounded-3xl blur-3xl animate-pulse"></div>

            <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#FFC107] rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#FFC107] rounded-full blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>

            <div className="relative rounded-2xl overflow-hidden border-4 border-black dark:border-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.3)] group transform hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[16px_16px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFC107]/10 to-transparent z-10 pointer-events-none"></div>

              <div className="relative aspect-[21/9] overflow-hidden bg-black/5 dark:bg-white/5">
                <div className="absolute inset-0 h-[150%] -top-1">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/71eed71d-1e0c-4248-b7b3-cafb65a01c60-template-07-saas-vercel-app/assets/images/images_1.png"
                    alt="Marketing dashboard showing analytics and social media management"
                    fill
                    className="object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                    priority />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-[#0a0a0a] via-white/80 dark:via-[#0a0a0a]/80 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFC107]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>

                <div className="absolute top-6 left-6 z-20 bg-[#FFC107] dark:bg-[#FFD54F] text-black dark:text-black px-4 py-2 rounded-lg border-2 border-black dark:border-white font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  Live Dashboard Preview
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 animate-[fadeInUp_1s_ease-out_1s_both]">
          <div className="flex flex-col items-center gap-3 cursor-pointer group">
            <span className="text-sm text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white font-bold uppercase tracking-wider transition-colors">
              Scroll to explore
            </span>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#FFC107] dark:bg-[#FFD54F] rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
              <div className="w-12 h-12 rounded-full border-4 border-black dark:border-white bg-[#FFC107] dark:bg-[#FFD54F] flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] group-hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:group-hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] transition-all">
                <ChevronDown className="h-6 w-6 text-black dark:text-black animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;