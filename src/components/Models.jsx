// import SectionTitle from "./SectionTitle";

// const Models = () => {
//   const models = [
//     "Build-Operate-Transfer (BOT)",
//     "Managed GCC",
//     "Hybrid GCC Model",
//     "Offshore Talent Model"
//   ];

//   return (
//     <section id="models" className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <SectionTitle
//           title="Operating Models"
//           subtitle="Flexible GCC engagement models tailored to enterprise needs."
//         />

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {models.map((model, index) => (
//             <div key={index} className="p-8 bg-indigo-50 rounded-xl text-center hover:bg-indigo-100 transition shadow-md">
//               <h3 className="font-semibold text-lg text-indigo-700">
//                 {model}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Models;
import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Layers, Settings, ArrowRightLeft, Users, CheckCircle2, ChevronRight } from "lucide-react";

const Models = () => {
  const models = [
    {
      title: "Build-Operate-Transfer (BOT)",
      icon: <ArrowRightLeft className="w-8 h-8" />,
      desc: "A turnkey solution where we architect, staff, and manage your GCC before seamlessly transferring full ownership to your enterprise.",
      details: ["Zero upfront legal risk", "End-to-end recruitment", "Phased ownership transfer"]
    },
    {
      title: "Managed GCC",
      icon: <Settings className="w-8 h-8" />,
      desc: "We act as your long-term operational partner, handling everything from HR and payroll to IT infrastructure and high-volume AI recruitment.",
      details: ["Continuous optimization", "Managed IT & Security", "Scaled talent pipelines"]
    },
    {
      title: "Hybrid GCC Model",
      icon: <Layers className="w-8 h-8" />,
      desc: "Retain control over core functions while we manage non-core operational layers, providing the perfect balance of flexibility and governance.",
      details: ["Shared risk management", "Elastic scaling", "Specialized tech support"]
    },
    {
      title: "Managed Teams",
      icon: <Users className="w-8 h-8" />,
      desc: "Rapidly scale specific departments with dedicated, high-performance offshore teams integrated directly into your global workflows.",
      details: ["Instant domain expertise", "Project-based scaling", "Direct management control"]
    }
  ];

  return (
    <section id="models" className="py-32 bg-white relative overflow-hidden">
      {/* Structural Accent Background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-100 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                title="Operating Models"
                subtitle="Flexible GCC engagement frameworks engineered to align with your long-term strategic objectives."
              />
            </motion.div>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 font-medium md:mb-6 max-w-sm"
          >
            From rapid team expansion to full-scale center ownership, we provide the blueprint for your global success.
          </motion.p>
        </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {models.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="flex flex-col p-8 bg-white border border-gray-100 rounded-[2rem] shadow-xl shadow-indigo-900/5 transition-all duration-300 group hover:border-indigo-200"
            >
              <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-inner">
                {item.icon}
              </div>

              <h3 className="font-bold text-xl text-gray-900 mb-4 tracking-tight">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                {item.desc}
              </p>

              <div className="space-y-3 mb-8 pt-6 border-t border-gray-50">
                {item.details.map((point, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-bold text-gray-500 uppercase tracking-wide">
                    <CheckCircle2 size={14} className="text-indigo-500" />
                    {point}
                  </div>
                ))}
              </div>

              <button className="flex items-center justify-between w-full group/btn text-indigo-600 font-black text-xs uppercase tracking-widest mt-auto">
                Model Details
                <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* The BOT Roadmap Visual (Simplified for Content) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-10 rounded-3xl bg-indigo-50 border border-indigo-100 flex flex-col lg:flex-row items-center gap-12"
        >
          <div className="lg:w-1/3">
            <h4 className="text-indigo-900 font-black text-3xl mb-4 leading-tight">Mastering the BOT Lifecycle</h4>
            <p className="text-indigo-700/70 font-medium">Our Build-Operate-Transfer model is powered by the Click100 platform to ensure transparency during the transition phase.</p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            {[
              { phase: "01. Design", text: "Legal entity setup, location scouting, and strategic blueprinting." },
              { phase: "02. Scale", text: "Mass recruitment via AI and operational process implementation." },
              { phase: "03. Transfer", text: "Seamless handover of assets, talent, and governance to you." }
            ].map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-indigo-100/50">
                <span className="text-indigo-600 font-black text-sm block mb-2">{step.phase}</span>
                <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Models;