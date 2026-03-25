import { motion } from "framer-motion";
import { Globe, Mail, MessageSquare, Phone, Send } from "lucide-react";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gray-50 py-20 scroll-mt-20 md:py-24"
    >
      <div className="absolute top-0 right-0 h-[520px] w-[520px] rounded-full bg-indigo-100/40 blur-[120px] -mr-40 -mt-40 opacity-60" />
      <div className="absolute bottom-0 left-0 h-[520px] w-[520px] rounded-full bg-blue-100/40 blur-[120px] -ml-40 -mb-40 opacity-60" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            title="Get In Touch"
            subtitle="Ready to architect your Global Capability Center? Let's design your future-ready ecosystem today."
          />
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 md:mt-14 md:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-5"
          >
            <div>
              <h3 className="mb-5 text-2xl font-black text-gray-900 md:text-3xl">
                Partner with GCC Architects
              </h3>
              <p className="mb-6 text-base leading-relaxed text-gray-600 md:text-lg">
                Connect with our strategic consultants to explore how the Click100 platform can unify your ATS, BGV, and talent analytics into a single high-performance operation.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email Us", val: "info@pixeladvant.com" },
                { icon: Phone, label: "Call Us", val: "+1 (000) 000-0000" },
                { icon: Globe, label: "Global Presence", val: "USA | Bangalore | Noida | Delhi" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-5 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-colors hover:border-indigo-200"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      {item.label}
                    </p>
                    <p className="font-bold text-gray-900">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-indigo-900 p-6 text-white shadow-2xl md:p-8">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <MessageSquare size={100} />
              </div>
              <h4 className="relative z-10 mb-3 font-serif text-xl font-bold italic">
                "The future of work is borderless."
              </h4>
              <p className="relative z-10 text-sm leading-relaxed text-indigo-200">
                Join the league of enterprises scaling their operations with intelligence and precision.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form className="relative space-y-6 overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white p-6 shadow-2xl shadow-indigo-900/10 md:p-8">
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-indigo-50 -mr-16 -mt-16" />

              <div className="relative z-10 grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="ml-1 text-xs font-black uppercase tracking-widest text-gray-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border-none bg-gray-50 p-4 outline-none transition-all placeholder:text-gray-300 focus:ring-2 focus:ring-indigo-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="ml-1 text-xs font-black uppercase tracking-widest text-gray-400">
                    Work Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@enterprise.com"
                    className="w-full rounded-xl border-none bg-gray-50 p-4 outline-none transition-all placeholder:text-gray-300 focus:ring-2 focus:ring-indigo-600"
                  />
                </div>
              </div>

              <div className="relative z-10 space-y-2">
                <label className="ml-1 text-xs font-black uppercase tracking-widest text-gray-400">
                  Company & Industry
                </label>
                <input
                  type="text"
                  placeholder="Pixel Advant | IT Services"
                  className="w-full rounded-xl border-none bg-gray-50 p-4 outline-none transition-all placeholder:text-gray-300 focus:ring-2 focus:ring-indigo-600"
                />
              </div>

              <div className="relative z-10 space-y-2">
                <label className="ml-1 text-xs font-black uppercase tracking-widest text-gray-400">
                  Engagement Interest
                </label>
                <select className="w-full cursor-pointer rounded-xl border-none bg-gray-50 p-4 font-medium text-gray-400 outline-none focus:ring-2 focus:ring-indigo-600">
                  <option>Select an option</option>
                  <option>Build-Operate-Transfer (BOT)</option>
                  <option>Managed GCC Operations</option>
                  <option>Click100 Platform Demo</option>
                  <option>Strategic Consulting</option>
                </select>
              </div>

              <div className="relative z-10 space-y-2">
                <label className="ml-1 text-xs font-black uppercase tracking-widest text-gray-400">
                  Your Requirements
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your global scaling goals..."
                  className="w-full rounded-xl border-none bg-gray-50 p-4 outline-none transition-all placeholder:text-gray-300 focus:ring-2 focus:ring-indigo-600"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-indigo-600 py-4 text-lg font-black text-white shadow-xl shadow-indigo-200 transition-all hover:bg-indigo-700"
              >
                REQUEST STRATEGIC AUDIT <Send size={20} />
              </motion.button>

              <p className="relative z-10 text-center text-xs font-medium text-gray-400">
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
