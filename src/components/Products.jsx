// import SectionTitle from "./SectionTitle";
// import { FileText, ScanSearch, LayoutDashboard, PieChart } from "lucide-react";

// const Products = () => {
//   const products = [
//     {
//       icon: <FileText size={32} className="text-indigo-600" />,
//       title: "Click100 ATS",
//       desc: "Enterprise-grade Applicant Tracking System for scalable hiring."
//     },
//     {
//       icon: <ScanSearch size={32} className="text-indigo-600" />,
//       title: "AI Resume Screening Tool",
//       desc: "Automated resume shortlisting using AI ranking algorithms."
//     },
//     {
//       icon: <LayoutDashboard size={32} className="text-indigo-600" />,
//       title: "Recruitment Dashboard",
//       desc: "Real-time hiring metrics and recruiter productivity insights."
//     },
//     {
//       icon: <PieChart size={32} className="text-indigo-600" />,
//       title: "HR Analytics Platform",
//       desc: "Advanced workforce intelligence and predictive analytics."
//     }
//   ];

//   return (
//     <section id="products" className="py-24 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <SectionTitle
//           title="Our Products"
//           subtitle="AI-driven recruitment tools designed for enterprise GCCs."
//         />

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {products.map((item, index) => (
//             <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
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

// export default Products;
import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { 
  FileText, 
  ScanSearch, 
  LayoutDashboard, 
  ShieldCheck, 
  Globe, 
  Layers,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const Products = () => {
  const features = [
    {
      icon: <FileText size={24} />,
      title: "Advanced ATS",
      desc: "Full-lifecycle applicant tracking from requisition to onboarding with automated workflows."
    },
    {
      icon: <ScanSearch size={24} />,
      title: "AI-Powered Screening",
      desc: "Proprietary ranking algorithms that shortlist top 1% talent in seconds using semantic matching."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Integrated BGV",
      desc: "Native background verification module for secure, compliant, and real-time candidate screening."
    },
    {
      icon: <LayoutDashboard size={24} />,
      title: "Recruiter Command Center",
      desc: "Centralized dashboard for requisition management, team productivity, and pipeline health."
    }
  ];

  return (
    <section id="products" className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[120px] -mr-48 -mt-48" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <motion.h4 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4"
            >
              The Flagship Ecosystem
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-gray-900 mb-6"
            >
              Click100: The All-In-One <br />
              <span className="text-indigo-600">Recruitment Operating System</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 font-medium max-w-md lg:mb-4"
          >
            A unified platform designed specifically for Global Capability Centers to manage ATS, BGV, and HR analytics in a single glass pane.
          </motion.p>
        </div>

        {/* Click100 Highlight Box */}
        
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Product Showcase */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-indigo-900 rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Layers size={200} />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-indigo-400" />
                <span className="text-indigo-300 font-bold tracking-widest uppercase text-xs">Featured Platform</span>
              </div>
              
              <h3 className="text-5xl font-black mb-6 italic tracking-tighter">Click100</h3>
              <p className="text-xl text-indigo-100/80 mb-10 leading-relaxed max-w-lg">
                Stop juggling multiple tools. Click100 integrates every stage of the hiring journey—from automated requisition approvals to global background checks.
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {["Centralized Requisition Dash", "Global BGV Integration", "Real-time HR Analytics", "AI Resume Shortlisting"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-semibold text-indigo-50">
                    <CheckCircle2 className="text-indigo-400" size={20} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-block">
                <button className="bg-white text-indigo-900 px-10 py-4 rounded-xl font-black hover:bg-indigo-50 transition-all shadow-lg flex items-center gap-3 group">
                  REQUEST A DEMO <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
              </a>
            </div>
          </motion.div>

          {/* Module Breakdown Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all group flex items-start gap-5"
              >
                <div className="bg-indigo-50 text-indigo-600 p-4 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Analytics Sneak Peek */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 bg-white border border-gray-200 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm"
        >
          <div className="flex items-center gap-6">
            <div className="p-4 bg-orange-50 text-orange-600 rounded-2xl">
              <Globe size={32} />
            </div>
            <div>
              <h5 className="font-bold text-xl text-gray-900">Unified Global Dashboard</h5>
              <p className="text-gray-500">View hiring health across multiple GCC locations in one map.</p>
            </div>
          </div>
          <div className="flex -space-x-3">
             {[1,2,3,4].map(i => (
               <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-600">
                 USER
               </div>
             ))}
             <div className="w-12 h-12 rounded-full border-4 border-white bg-gray-900 flex items-center justify-center text-[10px] font-bold text-white">
               +10k
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;