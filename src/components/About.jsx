// import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Target, Eye, ShieldCheck, Zap, Globe, Cpu } from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-gray-50">
      {/* Decorative Blur Elements for Visual Interest */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-100 rounded-full blur-[120px] opacity-60" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-100 rounded-full blur-[120px] opacity-60" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="About Our Agency"
            subtitle="Architecting the future of global operations through intelligent GCC design and AI-integrated recruitment ecosystems."
          />
        </motion.div>

        {/* Primary Mission/Vision Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10 mb-24"
        >
          <motion.div 
            variants={itemVariants}
            className="bg-white/70 backdrop-blur-md p-10 rounded-2xl border border-white shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-indigo-600 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target size={28} />
            </div>
            <h3 className="font-bold text-2xl mb-4 text-gray-900">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower Fortune 500s and high-growth startups to establish world-class Global Capability Centers (GCCs) by leveraging proprietary AI intelligence and borderless talent strategies.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-white/70 backdrop-blur-md p-10 rounded-2xl border border-white shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-indigo-600 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Eye size={28} />
            </div>
            <h3 className="font-bold text-2xl mb-4 text-gray-900">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To redefine the "Design-Build-Operate" model for global hubs, becoming the ultimate catalyst for an era where AI-human collaboration is at the core of every hiring decision.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-white/70 backdrop-blur-md p-10 rounded-2xl border border-white shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-indigo-600 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck size={28} />
            </div>
            <h3 className="font-bold text-2xl mb-4 text-gray-900">Why Choose Us</h3>
            <p className="text-gray-600 leading-relaxed">
              We bridge the gap between high-level advisory and technical execution, deploying advanced ATS platforms and AI pre-screening that reduces time-to-hire by 60%.
            </p>
          </motion.div>
        </motion.div>

        {/* Secondary Expanded Content Block */}
        
        <div className="grid lg:grid-cols-2 gap-16 items-center border-t border-gray-200 pt-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">The Strategic Edge</h4>
            <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Beyond Traditional Recruitment: <br />
              <span className="text-indigo-600">Building Smart Hubs</span>
            </h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Most agencies focus solely on headhunting. We take it a step further. We help you define your legal entity structure, select the right Tier-1/Tier-2 locations, and implement the technical operational backbone required to run a global hub autonomously.
            </p>
            
            <div className="space-y-4">
              {[
                { icon: Zap, label: "AI-Powered Talent Matching & ATS Deployment" },
                { icon: Globe, label: "End-to-End GCC Governance & Compliance" },
                { icon: Cpu, label: "Intelligent Process Automation for Operations" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
                  <item.icon className="text-indigo-600" size={20} />
                  <span className="font-semibold text-gray-800">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-indigo-900 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
              <h5 className="text-6xl font-black mb-4 opacity-20">01</h5>
              <h4 className="text-2xl font-bold mb-4 italic">"The GCC landscape is evolving. We provide the intelligence and the infrastructure to lead that evolution."</h4>
              <p className="text-indigo-200 mb-8 font-medium">
                Our approach integrates deep-domain expertise with the latest in Large Language Models (LLMs) to ensure your talent pipeline is never dry.
              </p>
              <div className="flex items-center gap-4 border-t border-white/10 pt-8">
                <div className="w-12 h-12 rounded-full bg-white/20" />
                <div>
                  <p className="font-bold">Director of Global Strategy</p>
                  <p className="text-indigo-300 text-sm italic">Recruitment Tech Advisory</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;