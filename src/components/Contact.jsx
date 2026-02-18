// import SectionTitle from "./SectionTitle";

// const Contact = () => {
//   return (
//     <section id="contact" className="py-24 bg-gray-50">
//       <div className="max-w-4xl mx-auto px-6">
//         <SectionTitle
//           title="Contact Us"
//           subtitle="Let’s build your future-ready GCC together."
//         />

//         <form className="bg-white p-10 rounded-xl shadow-lg space-y-6">
//           <input
//             type="text"
//             placeholder="Name"
//             className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
//           />
//           <input
//             type="text"
//             placeholder="Company"
//             className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
//           />
//           <textarea
//             rows="4"
//             placeholder="Message"
//             className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
//           ></textarea>

//           <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
//             Submit
//           </button>

//           <div className="text-center text-gray-600 mt-6">
//             Email: info@click100gcc.com | Phone: +1 (000) 000-0000
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { Mail, Phone, MapPin, Send, Globe, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-gray-50 scroll-mt-20">
      {/* Visual background accents to match the Hero section energy */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[120px] -mr-48 -mt-48 opacity-60" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] -ml-48 -mb-48 opacity-60" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="Get In Touch"
            subtitle="Ready to architect your Global Capability Center? Let’s design your future-ready ecosystem today."
          />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 mt-16">
          {/* Left Column: Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <h3 className="text-3xl font-black text-gray-900 mb-6">Partner with GCC Architects</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Connect with our strategic consultants to explore how the **Click100** platform can unify your ATS, BGV, and talent analytics into a single high-performance operation.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email Us", val: "info@pixeladvant.com" },
                { icon: Phone, label: "Call Us", val: "+1 (000) 000-0000" },
                { icon: Globe, label: "Global Presence", val: "USA | Bangalore | Noida | Delhi" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-indigo-200 transition-colors group">
                  <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">{item.label}</p>
                    <p className="text-gray-900 font-bold">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-indigo-900 rounded-[2rem] text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <MessageSquare size={100} />
              </div>
              <h4 className="text-xl font-bold mb-3 relative z-10 font-serif italic italic">"The future of work is borderless."</h4>
              <p className="text-indigo-200 text-sm relative z-10 leading-relaxed">
                Join the league of enterprises scaling their operations with intelligence and precision.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-indigo-900/10 border border-gray-100 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16" />
              
              <div className="grid md:grid-cols-2 gap-6 relative z-10">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none transition-all placeholder:text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Work Email</label>
                  <input
                    type="email"
                    placeholder="john@enterprise.com"
                    className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none transition-all placeholder:text-gray-300"
                  />
                </div>
              </div>

              <div className="space-y-2 relative z-10">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Company & Industry</label>
                <input
                  type="text"
                  placeholder="Pixel Advant | IT Services"
                  className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none transition-all placeholder:text-gray-300"
                />
              </div>

              <div className="space-y-2 relative z-10">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Engagement Interest</label>
                <select className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none text-gray-400 font-medium cursor-pointer">
                  <option>Select an option</option>
                  <option>Build-Operate-Transfer (BOT)</option>
                  <option>Managed GCC Operations</option>
                  <option>Click100 Platform Demo</option>
                  <option>Strategic Consulting</option>
                </select>
              </div>

              <div className="space-y-2 relative z-10">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Your Requirements</label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your global scaling goals..."
                  className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none transition-all placeholder:text-gray-300"
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all flex items-center justify-center gap-3"
              >
                REQUEST STRATEGIC AUDIT <Send size={20} />
              </motion.button>

              <p className="text-center text-gray-400 text-xs font-medium relative z-10">
                By submitting, you agree to our privacy policy and secure data processing.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;