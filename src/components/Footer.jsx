// const Footer = () => {
//   return (
//     <footer className="bg-indigo-700 text-white py-12">
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
//         <div>
//           <h3 className="text-xl font-bold mb-4">Click100 GCC</h3>
//           <p>
//             Building scalable Global Capability Centers with AI-driven recruitment innovation.
//           </p>
//         </div>

//         <div>
//           <h4 className="font-semibold mb-4">Quick Links</h4>
//           <ul className="space-y-2">
//             <li><a href="#about" className="hover:underline">About</a></li>
//             <li><a href="#solutions" className="hover:underline">Solutions</a></li>
//             <li><a href="#products" className="hover:underline">Products</a></li>
//             <li><a href="#contact" className="hover:underline">Contact</a></li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="font-semibold mb-4">Follow Us</h4>
//           <p>LinkedIn | Twitter | Facebook</p>
//         </div>
//       </div>

//       <div className="text-center mt-10 text-indigo-200">
//         © 2025 Click100 GCC. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Facebook, Instagram, Globe, Mail, ChevronRight } from "lucide-react";

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
    <footer className="bg-[#030712] text-white pt-24 pb-12 relative overflow-hidden">
      {/* Subtle Indigo Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-indigo-600/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Globe className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-black tracking-tighter">
                Click100<span className="text-indigo-500">GCC</span>
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed font-medium">
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
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative inline-block">
              Quick Navigation
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-indigo-500 rounded-full" />
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-indigo-400 flex items-center gap-2 transition-colors group"
                  >
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Platform Modules */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative inline-block">
              Click100 Modules
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-indigo-500 rounded-full" />
            </h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li className="hover:text-white transition-colors cursor-default">Enterprise ATS</li>
              <li className="hover:text-white transition-colors cursor-default">AI Resume Screening</li>
              <li className="hover:text-white transition-colors cursor-default">Integrated BGV Module</li>
              <li className="hover:text-white transition-colors cursor-default">Recruiter Analytics</li>
            </ul>
          </div>

          {/* Column 4: Newsletter/CTA */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative inline-block">
              Stay Informed
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-indigo-500 rounded-full" />
            </h4>
            <p className="text-gray-400 text-sm mb-6">Subscribe to our newsletter for GCC insights and AI trends.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Work Email Address" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-indigo-900/20">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {currentYear} Click100 GCC. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-600">
            <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;