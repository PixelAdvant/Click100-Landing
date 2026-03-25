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
      className="relative flex min-h-[78vh] items-center justify-center overflow-hidden bg-[#030712] px-6 pb-16 pt-28 md:min-h-[82vh] md:pb-20 md:pt-32"
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
      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Small Badge */}
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-400 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Next-Gen Recruitment AI
          </span>

          <h1 className="mb-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-6xl xl:text-7xl">
            Building Future-Ready GCCs <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
              with AI Intelligence
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
            Scale your Global Capability Centers with intelligent automation.
            We transform hiring using advanced ATS platforms and AI-driven candidate matching.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#solutions"
              className="group flex items-center gap-2 rounded-full bg-indigo-600 px-7 py-3 text-white font-bold shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-500"
            >
              Explore Solutions
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#demo"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3 text-white font-bold backdrop-blur-md transition-all hover:bg-white/10"
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
