"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const productItems = [
    { name: "Formation", href: "/formation" },
    { name: "Bookkeeping", href: "#bookkeeping" },
    { name: "Taxes", href: "#taxes" },
    { name: "Analytics", href: "#analytics" },
    { name: "AI chief of staff", href: "#ai-chief-of-staff" },
  ];

  const resourcesItems = [
    { name: "Blog", href: "#blog" },
    { name: "E-books", href: "#e-books" },
    { name: "Events", href: "#events" },
    { name: "Prolify marketplace", href: "#prolify-marketplace" },
    { name: "Prolify University", href: "#prolify-university" },
    { name: "About Us", href: "#about-us" },
    { name: "VIP club", href: "#vip-club" },
    { name: "Tax Calculator", href: "#tax-calculator" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <header className="max-w-3xl mx-auto rounded-xl bg-[#FFC107] dark:bg-[#FFD54F] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] border-2 border-black dark:border-white transition-all duration-300 tracking-tight">
        <div className="px-6">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="text-lg font-bold text-black dark:text-black hover:text-black/70 dark:hover:text-black/70 transition-colors"
                aria-label="Postly Home">
                ❒ Prolify
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      className="text-sm font-bold text-black dark:text-black hover:text-black/70 dark:hover:text-black/70 transition-colors flex items-center gap-1"
                      aria-label="Product">
                      Product
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[400px] p-4 bg-white dark:bg-[#171717] border-2 border-black dark:border-white rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]" align="start" sideOffset={10}>
                    <div className="space-y-2">
                      <div className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider mb-2">Products & Services</div>
                      <div className="flex flex-wrap gap-2">
                        {productItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="group px-3 py-1.5 text-xs font-bold text-black dark:text-white bg-white dark:bg-[#262626] hover:bg-[#FFC107] dark:hover:bg-[#FFD54F] dark:hover:text-black transition-all duration-200 rounded-lg border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-[-1px] hover:translate-y-[-1px]"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
                <Link
                  href="/pricing"
                  className="text-sm font-bold text-black dark:text-black hover:text-black/70 dark:hover:text-black/70 transition-colors"
                  aria-label="Pricing">
                  Pricing
                </Link>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      className="text-sm font-bold text-black dark:text-black hover:text-black/70 dark:hover:text-black/70 transition-colors flex items-center gap-1"
                      aria-label="Resources">
                      Resources
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[450px] p-4 bg-white dark:bg-[#171717] border-2 border-black dark:border-white rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]" align="start" sideOffset={10}>
                    <div className="space-y-2">
                      <div className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider mb-2">Resources & Community</div>
                      <div className="flex flex-wrap gap-2">
                        {resourcesItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="group px-3 py-1.5 text-xs font-bold text-black dark:text-white bg-white dark:bg-[#262626] hover:bg-[#FFC107] dark:hover:bg-[#FFD54F] dark:hover:text-black transition-all duration-200 rounded-lg border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-[-1px] hover:translate-y-[-1px]"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </nav>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <button className="inline-flex items-center justify-center whitespace-nowrap font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50 h-8 rounded-md px-3 text-xs text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black border-2 border-black dark:border-white">
                Login
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50 h-8 rounded-md px-3 text-xs bg-black dark:bg-white hover:bg-white dark:hover:bg-black text-white dark:text-black hover:text-black dark:hover:text-white border-2 border-black dark:border-white">
                Start Free
              </button>
            </div>
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-black dark:text-black hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black rounded-md transition-colors border-2 border-black dark:border-white"
                aria-label="Toggle mobile menu">
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t-2 border-black dark:border-white px-6 py-4 space-y-4">
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className="flex items-center justify-between w-full text-left text-sm font-bold text-black dark:text-black hover:text-black/70 dark:hover:text-black/70 transition-colors py-2">
                  Product
                  <ChevronDown className="h-4 w-4" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-[calc(100vw-3rem)] max-w-sm p-4 bg-white dark:bg-[#171717] border-2 border-black dark:border-white rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]" align="start" sideOffset={10}>
                <div className="space-y-2">
                  <div className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider mb-2">Products & Services</div>
                  <div className="flex flex-wrap gap-2">
                    {productItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="group px-3 py-1.5 text-xs font-bold text-black dark:text-white bg-white dark:bg-[#262626] hover:bg-[#FFC107] dark:hover:bg-[#FFD54F] dark:hover:text-black transition-all duration-200 rounded-lg border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-[-1px] hover:translate-y-[-1px]"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <Link
              href="/pricing"
              className="block w-full text-left text-sm font-bold text-black dark:text-black hover:text-black/70 dark:hover:text-black/70 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}>
              Pricing
            </Link>
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className="flex items-center justify-between w-full text-left text-sm font-bold text-black dark:text-black hover:text-black/70 dark:hover:text-black/70 transition-colors py-2">
                  Resources
                  <ChevronDown className="h-4 w-4" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-[calc(100vw-3rem)] max-w-sm p-4 bg-white dark:bg-[#171717] border-2 border-black dark:border-white rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]" align="start" sideOffset={10}>
                <div className="space-y-2">
                  <div className="text-[10px] font-bold text-black dark:text-white uppercase tracking-wider mb-2">Resources & Community</div>
                  <div className="flex flex-wrap gap-2">
                    {resourcesItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="group px-3 py-1.5 text-xs font-bold text-black dark:text-white bg-white dark:bg-[#262626] hover:bg-[#FFC107] dark:hover:bg-[#FFD54F] dark:hover:text-black transition-all duration-200 rounded-lg border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-[-1px] hover:translate-y-[-1px]"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <div className="pt-4 space-y-3 border-t-2 border-black dark:border-white">
              <button className="block w-full text-left text-sm font-bold text-black dark:text-black hover:text-black/70 dark:hover:text-black/70 transition-colors py-2">
                Login
              </button>
              <button className="w-full bg-black dark:bg-white hover:bg-white dark:hover:bg-black text-white dark:text-black hover:text-black dark:hover:text-white text-sm font-bold py-2 px-4 rounded-md transition-colors border-2 border-black dark:border-white">
                Start Free
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}