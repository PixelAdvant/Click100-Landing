// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="pt-32 pb-24 bg-gradient-to-r from-indigo-700 to-blue-600 text-white"
//     >
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         <h1 className="text-4xl md:text-6xl font-bold leading-tight">
//           Building Future-Ready GCCs with AI-Powered Recruitment Solutions
//         </h1>

//         <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-indigo-100">
//           We help enterprises design, build, and scale Global Capability Centers
//           while transforming hiring with intelligent automation and advanced ATS platforms.
//         </p>

//         <div className="mt-10 flex justify-center gap-6 flex-wrap">
//           <a
//             href="#solutions"
//             className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
//           >
//             Explore Solutions
//           </a>
//           <a
//             href="#contact"
//             className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-700 transition"
//           >
//             Contact Us
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#030712]"
    >
      {/* 1. Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          {/* Replace with your actual video path or a high-end stock URL */}
          <source src="/intro.mp4" type="video/mp4" />
        </video>
        {/* Deep Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/80 via-transparent to-[#030712]" />
      </div>

      {/* 2. Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Small Badge */}
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Next-Gen Recruitment AI
          </span>

          <h1 className="text-4xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
            Building Future-Ready GCCs <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
              with AI Intelligence
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-300 leading-relaxed">
            Scale your Global Capability Centers with intelligent automation. 
            We transform hiring using advanced ATS platforms and AI-driven candidate matching.
          </p>

          <div className="mt-12 flex justify-center gap-4 flex-wrap">
            <a
              href="#solutions"
              className="group bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2"
            >
              Explore Solutions
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#demo"
              className="bg-white/5 text-white border border-white/10 backdrop-blur-md px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-white" />
              Watch Demo
            </a>
          </div>
        </motion.div>
      </div>

      {/* 3. Subtle Animated Grid (Optional enhancement) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
    </section>
  );
};

export default Hero;