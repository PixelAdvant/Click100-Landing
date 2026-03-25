// import SectionTitle from "./SectionTitle";
// import { Building2, Brain, Shield, BarChart3 } from "lucide-react";

// const Solutions = () => {
//   const solutions = [
//     {
//       icon: <Building2 className="text-indigo-600" size={32} />,
//       title: "GCC Setup & Strategy",
//       desc: "End-to-end GCC design, legal setup, infrastructure planning and talent acquisition."
//     },
//     {
//       icon: <Brain className="text-indigo-600" size={32} />,
//       title: "AI Recruitment Automation",
//       desc: "Intelligent candidate sourcing, resume parsing and predictive hiring analytics."
//     },
//     {
//       icon: <Shield className="text-indigo-600" size={32} />,
//       title: "Background Verification",
//       desc: "Compliant and secure candidate screening with global verification standards."
//     },
//     {
//       icon: <BarChart3 className="text-indigo-600" size={32} />,
//       title: "Talent Analytics",
//       desc: "Data-driven workforce insights to optimize hiring efficiency and performance."
//     }
//   ];

//   return (
//     <section id="solutions" className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <SectionTitle
//           title="Our Solutions"
//           subtitle="Strategic consulting and AI-powered recruitment transformation."
//         />

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {solutions.map((item, index) => (
//             <div key={index} className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition bg-gray-50">
//               {item.icon}
//               <h3 className="text-xl font-semibold mt-4 mb-3">{item.title}</h3>
//               <p className="text-gray-600">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Solutions;
import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Building2, Brain, Shield, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: <Building2 size={32} />,
      title: "GCC Setup & Strategic Design",
      desc: "Comprehensive roadmap for Global Capability Centers, encompassing legal entity formation, site selection, tax compliance, and scalable infrastructure planning.",
      features: ["Location Analysis", "Operational Design", "Policy Framework"]
    },
    {
      icon: <Brain size={32} />,
      title: "AI Recruitment Automation",
      desc: "Transforming the talent lifecycle with proprietary LLM-based sourcing, intelligent resume ranking, and automated interview scheduling to reduce manual overhead.",
      features: ["Automated Sourcing", "Predictive Matching", "AI Video Screening"]
    },
    {
      icon: <Shield size={32} />,
      title: "Global Compliance & BGV",
      desc: "Enterprise-grade background verification and security screening that adheres to international data privacy laws (GDPR/ISO) and localized labor regulations.",
      features: ["Global Verification", "Digital Onboarding", "Risk Mitigation"]
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Talent Predictive Analytics",
      desc: "Advanced data ecosystems that convert hiring metrics into actionable workforce insights, optimizing both cost-per-hire and long-term employee retention.",
      features: ["Attrition Modeling", "Supply-Demand Forecasting", "ROI Dashboards"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section id="solutions" className="relative overflow-hidden bg-white py-20 md:py-24">
      {/* Subtle Background Accent */}
      <div className="absolute top-1/2 left-1/2 -z-0 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-50/50 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <SectionTitle
            title="Our Solutions"
            subtitle="Bridging the gap between global enterprise objectives and localized operational excellence."
          />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {solutions.map((item, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ y: -12 }}
              className="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-200/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 md:p-7"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors duration-500 group-hover:bg-indigo-600 group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="mb-3 text-lg font-bold tracking-tight text-gray-900 transition-colors group-hover:text-indigo-600 md:text-xl">
                {item.title}
              </h3>

              <p className="mb-6 flex-grow text-gray-600 leading-relaxed">
                {item.desc}
              </p>

              <div className="mb-6 space-y-2.5">
                {item.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                    <CheckCircle2 size={16} className="text-indigo-500" />
                    {feature}
                  </div>
                ))}
              </div>

              <button className="flex items-center gap-2 text-indigo-600 font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all group-hover:underline">
                Explore Solution <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact Content Block */}
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mt-16 flex flex-col items-center justify-between gap-8 overflow-hidden rounded-[2rem] bg-indigo-900 p-8 text-white shadow-2xl lg:flex-row md:mt-20 md:gap-10 md:p-10"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          
          <div className="lg:w-1/2 relative z-10">
            <h4 className="text-indigo-300 font-bold uppercase tracking-widest text-xs mb-4">The GCC Advantage</h4>
            <h3 className="mb-5 text-2xl font-bold md:text-3xl">Built for Scale, Designed for Efficiency</h3>
            <p className="mb-6 text-base leading-relaxed text-indigo-100/80 md:mb-8 md:text-lg">
              We don't just provide software; we provide the strategic infrastructure required to run a global operation. Our AI models are fine-tuned for niche technical roles, ensuring your GCC is staffed with top-tier talent from day one.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="mb-1 text-3xl font-bold text-white md:text-4xl">60%</p>
                <p className="text-indigo-200 text-sm">Faster Time-to-Hire</p>
              </div>
              <div>
                <p className="mb-1 text-3xl font-bold text-white md:text-4xl">45%</p>
                <p className="text-indigo-200 text-sm">Operational Cost Savings</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 w-full">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
              <h5 className="mb-5 text-xl font-bold">Ready to transform your global footprint?</h5>
              <form className="space-y-4">
                <input type="email" placeholder="Enter your work email" className="w-full bg-white/20 border border-white/20 rounded-lg px-4 py-3 placeholder:text-indigo-100 outline-none focus:bg-white/30 transition-all" />
                <button className="w-full bg-white text-indigo-900 font-bold py-3 rounded-lg hover:bg-indigo-50 transition-colors shadow-lg shadow-indigo-950/20">
                  Request a Strategic Audit
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
