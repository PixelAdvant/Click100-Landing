import { motion } from "framer-motion";
import { ChevronRight, Facebook, Globe, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Facebook size={20} />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Instagram size={20} />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Globe size={20} />, href: "https://yourwebsite.com", label: "Website" },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Solutions", href: "#solutions" },
    { name: "Click100 Platform", href: "#products" },
    { name: "Operating Models", href: "#models" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#030712] pb-10 pt-16 text-white md:pt-20">
      <div className="absolute bottom-0 left-1/2 h-[300px] w-full -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-12 grid grid-cols-1 gap-8 md:mb-14 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-indigo-600 p-2">
                <Globe className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-black tracking-tighter">
                Click100<span className="text-indigo-500">GCC</span>
              </h3>
            </div>

            <p className="font-medium leading-relaxed text-gray-400">
              Architecting future-ready Global Capability Centers with AI-driven recruitment ecosystems and borderless talent strategies.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:border-indigo-600 hover:bg-indigo-600"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="relative mb-6 inline-block text-lg font-bold">
              Quick Navigation
              <span className="absolute -bottom-2 left-0 h-1 w-8 rounded-full bg-indigo-500" />
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-400 transition-colors hover:text-indigo-400"
                  >
                    <ChevronRight
                      size={14}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="relative mb-6 inline-block text-lg font-bold">
              Click100 Modules
              <span className="absolute -bottom-2 left-0 h-1 w-8 rounded-full bg-indigo-500" />
            </h4>
            <ul className="space-y-4 font-medium text-gray-400">
              <li className="cursor-default transition-colors hover:text-white">Enterprise ATS</li>
              <li className="cursor-default transition-colors hover:text-white">AI Resume Screening</li>
              <li className="cursor-default transition-colors hover:text-white">Integrated BGV Module</li>
              <li className="cursor-default transition-colors hover:text-white">Recruiter Analytics</li>
            </ul>
          </div>

          <div>
            <h4 className="relative mb-6 inline-block text-lg font-bold">
              Stay Informed
              <span className="absolute -bottom-2 left-0 h-1 w-8 rounded-full bg-indigo-500" />
            </h4>
            <p className="mb-6 text-sm text-gray-400">
              Subscribe to our newsletter for GCC insights and AI trends.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Work Email Address"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="rounded-xl bg-indigo-600 py-3 font-bold text-white shadow-lg shadow-indigo-900/20 transition-all hover:bg-indigo-500">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 md:flex-row md:pt-10">
          <p className="text-sm text-gray-500">
            (c) {currentYear} Click100 GCC. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-600">
            <a href="#" className="transition-colors hover:text-indigo-400">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-indigo-400">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-indigo-400">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
