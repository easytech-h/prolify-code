import React from 'react';

const Footer = () => {
  const linkSections = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Integrations", "API"],
    },
    {
      title: "Resources",
      links: ["Documentation", "Blog", "Case Studies", "Help Center"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Contact", "Privacy"],
    },
  ];

  return (
    <footer className="bg-black dark:bg-[#0a0a0a] py-12 border-t-4 border-[#FFC107] dark:border-[#FFD54F] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <a href="/" className="text-2xl font-bold text-white">
              ❒ Prolify
            </a>
            <p className="text-sm text-white/70 font-medium">
              Launch and run your US business, from anywhere.
            </p>
            <p className="text-sm text-white/50 font-semibold">© 2025 Prolify</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:col-span-3">
            {linkSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-bold text-[#FFC107] mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-white/70 hover:text-white transition-colors font-medium"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;