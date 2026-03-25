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
import { motion } from "framer-motion";
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
    <section id="models" className="relative overflow-hidden bg-white py-16 md:py-20">
      {/* Structural Accent Background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-100 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-start">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-indigo-600">
                Engagement Frameworks
              </h4>
              <h2 className="mb-4 text-3xl font-black leading-tight text-gray-900 md:text-4xl">
                Operating Models
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-gray-600">
                Flexible GCC engagement frameworks engineered to align with your long-term strategic objectives.
              </p>
            </motion.div>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-sm text-sm font-medium leading-relaxed text-gray-500 md:pt-10 md:text-base"
          >
            From rapid team expansion to full-scale center ownership, we provide the blueprint for your global success.
          </motion.p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {models.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group flex flex-col rounded-[1.75rem] border border-gray-100 bg-white p-5 shadow-xl shadow-indigo-900/5 transition-all duration-300 hover:border-indigo-200 md:p-6"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shadow-inner transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white">
                {item.icon}
              </div>

              <h3 className="mb-3 text-lg font-bold leading-snug tracking-tight text-gray-900">
                {item.title}
              </h3>

              <p className="mb-5 flex-grow text-sm leading-relaxed text-gray-600">
                {item.desc}
              </p>

              <div className="mb-5 space-y-2.5 border-t border-gray-50 pt-4">
                {item.details.map((point, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs font-bold text-gray-500 uppercase tracking-wide">
                    <CheckCircle2 size={14} className="text-indigo-500" />
                    {point}
                  </div>
                ))}
              </div>

              <button className="group/btn mt-auto flex w-full items-center justify-between text-xs font-black uppercase tracking-widest text-indigo-600">
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
          className="mt-12 flex flex-col items-start gap-6 rounded-3xl border border-indigo-100 bg-indigo-50 p-6 lg:flex-row lg:items-center md:mt-14 md:p-8"
        >
          <div className="lg:w-1/3">
            <h4 className="mb-4 text-2xl font-black leading-tight text-indigo-900 md:text-3xl">Mastering the BOT Lifecycle</h4>
            <p className="text-indigo-700/70 font-medium">Our Build-Operate-Transfer model is powered by the Click100 platform to ensure transparency during the transition phase.</p>
          </div>
          
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 lg:w-2/3">
            {[
              { phase: "01. Design", text: "Legal entity setup, location scouting, and strategic blueprinting." },
              { phase: "02. Scale", text: "Mass recruitment via AI and operational process implementation." },
              { phase: "03. Transfer", text: "Seamless handover of assets, talent, and governance to you." }
            ].map((step, i) => (
              <div key={i} className="rounded-2xl border border-indigo-100/50 bg-white p-5 shadow-sm">
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
